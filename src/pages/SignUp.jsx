import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"
import {
  Eye,
  EyeOff,
  Waves,
  Upload,
  X,
  AlertCircle,
  CheckCircle,
  IdCard,
  Baby,
} from "lucide-react"

export default function SignUp() {
  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm: "",
  })

  const [showPass, setShowPass] = useState(false)
  const [ageGroup, setAgeGroup] = useState(null)
  const [idFile, setIdFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  /* ---------------- VALIDATION ---------------- */

  const validateStep1 = () => {
    if (!form.fullName.trim()) return "Full name is required"
    if (!form.email.includes("@")) return "Enter a valid email"
    if (form.password.length < 8)
      return "Password must be at least 8 characters"
    if (form.password !== form.confirm)
      return "Passwords do not match"
    return ""
  }

  const handleStep1 = () => {
    const err = validateStep1()
    if (err) {
      setError(err)
      return
    }
    setError("")
    setStep(2)
  }

  /* ---------------- FILE VALIDATION ---------------- */

  const handleFileChange = (file) => {
    if (!file) return

    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed")
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File must be less than 10MB")
      return
    }

    setError("")
    setIdFile(file)
  }

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async () => {
    if (!ageGroup) {
      setError("Please select your age group")
      return
    }

    if (!idFile) {
      setError("Please upload your ID document")
      return
    }

    try {
      setLoading(true)
      setError("")

      /* 1️⃣ Create user */
      const { data, error: authError } =
        await supabase.auth.signUp({
          email: form.email,
          password: form.password,
          options: {
            data: { full_name: form.fullName },
          },
        })

      if (authError) throw authError

      const userId = data?.user?.id
      if (!userId) throw new Error("User creation failed")

      /* 2️⃣ Upload ID */
      const ext = idFile.name.split(".").pop()
      const filePath = `id-documents/${userId}/id.${ext}`

      const { error: uploadError } =
        await supabase.storage
          .from("id-documents")
          .upload(filePath, idFile, { upsert: true })

      if (uploadError) throw uploadError

      const { data: publicUrlData } =
        supabase.storage
          .from("id-documents")
          .getPublicUrl(filePath)

      const publicUrl = publicUrlData?.publicUrl

      /* 3️⃣ Update profile */
      const { error: profileError } =
        await supabase.from("profiles").upsert({
          id: userId,
          full_name: form.fullName,
          id_document_url: publicUrl,
          id_verified: false,
          id_type:
            ageGroup === "minor"
              ? "birth_certificate"
              : "government_id",
          can_report: false,
          points: 0,
        })

      if (profileError) throw profileError

      /* 4️⃣ Redirect */
      navigate("/login", {
        state: {
          msg: "Account created successfully. ID review takes up to 24 hours.",
        },
      })
    } catch (err) {
      setError(err?.message || "Sign up failed")
    } finally {
      setLoading(false)
    }
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-4"
          >
            <Waves size={24} />
            <span className="font-bold text-xl">
              MOYA
            </span>
          </Link>

          <h1 className="text-2xl font-bold mb-2">
            Create Account
          </h1>
          <p className="text-sm opacity-60">
            Step {step} of 2
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 border rounded text-sm text-red-400 flex items-center gap-2">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <input
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) =>
                setForm({ ...form, fullName: e.target.value })
              }
              className="input-field"
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="input-field"
            />

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="input-field pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-2 top-2"
              >
                {showPass ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
            </div>

            <input
              type="password"
              placeholder="Confirm Password"
              value={form.confirm}
              onChange={(e) =>
                setForm({ ...form, confirm: e.target.value })
              }
              className="input-field"
            />

            <button
              type="button"
              onClick={handleStep1}
              className="btn-teal py-2"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex flex-col gap-4">

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setAgeGroup("adult")}
                className="flex-1 border p-3 rounded"
              >
                <IdCard size={20} />
                <div>15+ Years</div>
              </button>

              <button
                type="button"
                onClick={() => setAgeGroup("minor")}
                className="flex-1 border p-3 rounded"
              >
                <Baby size={20} />
                <div>Under 15</div>
              </button>
            </div>

            {ageGroup && (
              <label className="border-2 border-dashed p-6 rounded text-center cursor-pointer">
                <Upload size={22} />
                <p className="text-sm mt-2">
                  Click to upload ID photo
                </p>
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) =>
                    handleFileChange(e.target.files?.[0])
                  }
                />
              </label>
            )}

            {idFile && (
              <div className="relative">
                <img
                  src={URL.createObjectURL(idFile)}
                  alt="preview"
                  className="w-full h-40 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => setIdFile(null)}
                  className="absolute top-2 right-2"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="border px-4 py-2 rounded"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 btn-teal py-2"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </div>
          </div>
        )}

        <p className="text-center mt-5 text-sm opacity-60">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}
