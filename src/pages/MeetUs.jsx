import { useState } from 'react'
import { Github, Twitter, Linkedin, Droplets, Target, Eye, Heart, X, Code2, Quote, Sparkles, ChevronRight, Users, Mail, Phone } from 'lucide-react'

const team = [
  {
    name: 'Tareq Khalil',
    role: 'CEO',
    roleLabel: 'Chief Executive Officer',
    bio: 'Leads company vision, strategy, partnerships, investor relations, and overall business development. Passionate about turning environmental challenges into scalable tech solutions.',
    quote: 'Water is not a resource to be managed — it\'s a right to be protected.',
    avatar: 'TQ',
    photo: '', // insert image URL here
    color: 'from-ocean-500 to-ocean-700',
    accent: '#0ea5e9',
    favLang: 'Python',
    extra: { label: 'Fun Fact', value: 'Has visited 5 different Nile delta regions for field research.' },
    email: '', // insert email here
    phone: '', // insert phone here
    socials: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Mohamed El-Shamy',
    role: 'CTO',
    roleLabel: 'Chief Technical Officer',
    bio: 'Oversees system architecture, platform development, security, and technical roadmap. Deeply passionate about clean code and scalable infrastructure.',
    quote: 'Good architecture is invisible — until it breaks.',
    avatar: 'ME',
    photo: '', // insert image URL here
    color: 'from-teal-600 to-ocean-600',
    accent: '#14b8a6',
    favLang: 'TypeScript',
    extra: { label: 'Stack', value: 'React, Supabase, Node.js, PostGIS' },
    email: '', // insert email here
    phone: '', // insert phone here
    socials: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Kevin Martin',
    role: 'CMO',
    roleLabel: 'Chief Marketing Officer',
    bio: 'Manages branding, digital campaigns, content strategy, partnerships, and user acquisition. Believes storytelling is the most powerful tool for change.',
    quote: 'Every campaign should leave people more informed than before.',
    avatar: 'KM',
    photo: '', // insert image URL here
    color: 'from-ocean-600 to-teal-600',
    accent: '#38bdf8',
    favLang: 'JavaScript',
    extra: { label: 'Specialty', value: 'Growth marketing & environmental storytelling' },
    email: '', // insert email here
    phone: '', // insert phone here
    socials: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Daniel George',
    role: 'Game Developer',
    roleLabel: 'Game Developer',
    bio: 'Designs educational gameplay mechanics, user engagement flows, and gamification strategy. Turns complex water science into memorable interactive experiences.',
    quote: 'If it isn\'t fun, it isn\'t going to teach anyone anything.',
    avatar: 'DG',
    photo: '', // insert image URL here
    color: 'from-teal-500 to-teal-700',
    accent: '#2dd4bf',
    favLang: 'C#',
    extra: { label: 'Currently Building', value: 'Flood Defense v2 with real hydrological data' },
    email: '', // insert email here
    phone: '', // insert phone here
    socials: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Asser El-Sergany',
    role: 'GD',
    roleLabel: 'Graphic Designer',
    bio: 'Designs all visual content, branding materials, and marketing graphics. Believes design is a form of activism when used for environmental causes.',
    quote: 'Design isn\'t decoration — it\'s communication.',
    avatar: 'AS',
    photo: '', // insert image URL here
    color: 'from-teal-600 to-ocean-600',
    accent: '#5eead4',
    favLang: 'CSS',
    extra: { label: 'Tools', value: 'Figma, Adobe Illustrator, After Effects' },
    email: '', // insert email here
    phone: '', // insert phone here
    socials: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Yousef Ahmed',
    role: 'CCO',
    roleLabel: 'Chief Communications Officer',
    bio: 'Manages company image, media relations, partnerships, and public communication. The voice of MOYA to the outside world.',
    quote: 'Clarity of message is as important as clarity of water.',
    avatar: 'YA',
    photo: '', // insert image URL here
    color: 'from-teal-500 to-ocean-500',
    accent: '#0ea5e9',
    favLang: 'Markdown',
    extra: { label: 'Languages', value: 'Arabic, English, French' },
    email: '', // insert email here
    phone: '', // insert phone here
    socials: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Loay Alaa',
    role: 'CFO',
    roleLabel: 'Chief Financial Officer',
    bio: 'Oversees budgeting, financial planning, accounting, and investor reporting. Keeps MOYA financially sustainable so the mission never stops.',
    quote: 'Numbers tell the story — make sure it\'s one worth reading.',
    avatar: 'LA',
    photo: '', // insert image URL here
    color: 'from-ocean-500 to-teal-500',
    accent: '#14b8a6',
    favLang: 'Excel / VBA',
    extra: { label: 'Focus', value: 'Impact investing & nonprofit financial models' },
    email: '', // insert email here
    phone: '', // insert phone here
    socials: { twitter: '#', github: '#', linkedin: '#' }
  },
  {
    name: 'Amro Ibrahim',
    role: 'CIO',
    roleLabel: 'Chief Information Officer',
    bio: 'Leads IT strategy, systems, data management, and cybersecurity. Ensures MOYA\'s data is protected, accurate, and always available.',
    quote: 'Data is only as clean as the systems that hold it.',
    avatar: 'AI',
    photo: '', // insert image URL here
    color: 'from-ocean-600 to-teal-600',
    accent: '#38bdf8',
    favLang: 'Go',
    extra: { label: 'Specialty', value: 'Cybersecurity & distributed data systems' },
    email: '', // insert email here
    phone: '', // insert phone here
    socials: { twitter: '#', github: '#', linkedin: '#' }
  }
]

const supervisor = {
  name: 'Dr. Mohamed Gamal',
  role: 'Supervisor',
  roleLabel: 'Project Supervisor',
  bio: 'Senior environmental strategist guiding the MOYA initiative and mentoring the team throughout research, validation, and deployment phases. Brings decades of water policy expertise.',
  quote: 'The next generation of water stewards is already building the tools we need.',
  avatar: 'MG',
  photo: '', // insert image URL here
  color: 'from-violet-500 to-indigo-600',
  accent: '#a78bfa',
  favLang: 'R / MATLAB',
  extra: { label: 'Expertise', value: 'Environmental policy, hydrology, water governance' },
  email: '', // insert email here
  phone: '', // insert phone here
  socials: { twitter: '#', github: '#', linkedin: '#' }
}

const values = [
  { icon: Target, title: 'Mission-Driven', description: 'Every feature we build serves one goal: cleaner water for all communities.', accent: '#0ea5e9' },
  { icon: Eye, title: 'Transparency', description: 'Open data, open processes. Citizens deserve to see how their reports are handled.', accent: '#14b8a6' },
  { icon: Heart, title: 'Community First', description: 'We build with communities, not just for them. Local knowledge drives global solutions.', accent: '#f43f5e' },
]

function Avatar({ member, size = 'md' }) {
  const sizes = { sm: 'w-12 h-12 text-sm', md: 'w-16 h-16 text-lg', lg: 'w-24 h-24 text-2xl', xl: 'w-32 h-32 text-3xl' }
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className={`${sizes[size]} rounded-2xl object-cover flex-shrink-0`}
        style={{ boxShadow: `0 0 24px ${member.accent}40` }}
      />
    )
  }
  return (
    <div
      className={`${sizes[size]} rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center font-bold text-white flex-shrink-0`}
      style={{ boxShadow: `0 0 24px ${member.accent}40` }}
    >
      {member.avatar}
    </div>
  )
}

function MemberModal({ member, onClose }) {
  if (!member) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(8,47,73,0.98), rgba(12,74,110,0.95))',
          border: `1px solid ${member.accent}30`,
          boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${member.accent}20, inset 0 1px 0 rgba(255,255,255,0.06)`,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${member.accent}, transparent)` }} />

        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: member.accent }} />

        <div className="p-7">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={16} />
          </button>

          {/* Header */}
          <div className="flex items-start gap-5 mb-6">
            <Avatar member={member} size="xl" />
            <div className="flex-1 min-w-0 pt-1">
              <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: member.accent }}>
                {member.role}
              </div>
              <h2 className="font-display text-2xl font-bold text-white leading-tight mb-1">{member.name}</h2>
              <p className="text-white/40 text-sm">{member.roleLabel}</p>

              {/* Socials */}
              <div className="flex gap-2 mt-3">
                {[
                  { Icon: Twitter, href: member.socials.twitter },
                  { Icon: Github, href: member.socials.github },
                  { Icon: Linkedin, href: member.socials.linkedin },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: `${member.accent}18`, border: `1px solid ${member.accent}30` }}>
                    <Icon size={12} style={{ color: member.accent }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="rounded-2xl px-5 py-4 mb-5 relative overflow-hidden"
            style={{ background: `${member.accent}0e`, border: `1px solid ${member.accent}20` }}>
            <Quote size={16} className="absolute top-3 left-4 opacity-30" style={{ color: member.accent }} />
            <p className="text-white/75 text-sm italic leading-relaxed pl-5">{member.quote}</p>
          </div>

          {/* Bio */}
          <div className="mb-5">
            <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
          </div>

          {/* Contact */}
          {(member.email || member.phone) && (
            <div className="flex flex-col gap-2 mb-5">
              {member.email && (
                <a href={`mailto:${member.email}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all hover:bg-white/8 group"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${member.accent}18`, border: `1px solid ${member.accent}30` }}>
                    <Mail size={13} style={{ color: member.accent }} />
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors truncate">{member.email}</span>
                </a>
              )}
              {member.phone && (
                <a href={`tel:${member.phone}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all hover:bg-white/8 group"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${member.accent}18`, border: `1px solid ${member.accent}30` }}>
                    <Phone size={13} style={{ color: member.accent }} />
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{member.phone}</span>
                </a>
              )}
            </div>
          )}

          {/* Bottom row: fav lang + extra */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2 mb-1.5">
                <Code2 size={13} style={{ color: member.accent }} />
                <span className="text-white/35 text-xs uppercase tracking-wider">Fav Language</span>
              </div>
              <p className="text-white font-semibold text-sm">{member.favLang}</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles size={13} style={{ color: member.accent }} />
                <span className="text-white/35 text-xs uppercase tracking-wider">{member.extra.label}</span>
              </div>
              <p className="text-white font-semibold text-sm leading-snug">{member.extra.value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MemberCard({ member, onClick, isSupervisor = false }) {
  return (
    <button
      onClick={() => onClick(member)}
      className="group relative text-left w-full rounded-2xl p-5 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 overflow-hidden cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid rgba(255,255,255,0.08)`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${member.accent}40`
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${member.accent}20`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
      }}
    >
      {/* Glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
        style={{ background: member.accent }} />

      <div className="relative z-10 flex items-center gap-4">
        <Avatar member={member} size={isSupervisor ? 'lg' : 'md'} />
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: member.accent }}>
            {member.role}
          </div>
          <h3 className="font-display font-bold text-white text-base leading-tight mb-1 truncate">{member.name}</h3>
          <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{member.bio}</p>
        </div>
        <ChevronRight size={16} className="text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
      </div>

      {/* Bottom tag */}
      <div className="mt-3 pt-3 border-t border-white/6 flex items-center gap-2">
        <Code2 size={11} style={{ color: member.accent }} className="opacity-60" />
        <span className="text-white/30 text-xs">{member.favLang}</span>
        <span className="ml-auto text-white/20 text-xs">Click to view profile</span>
      </div>
    </button>
  )
}

export default function MeetUs() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen pt-24 pb-20 overflow-x-hidden">

      {/* Modal */}
      <MemberModal member={selected} onClose={() => setSelected(null)} />

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-6 text-center mb-24">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(ellipse, #0ea5e9, #14b8a6)' }} />
        </div>

        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
          <Users size={13} className="text-ocean-300" />
          <span className="text-ocean-200 text-sm font-medium">The People Behind MOYA</span>
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Meet Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-teal-300">Team</span>
        </h1>

        <p className="text-white/55 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          A group of engineers, designers, strategists, and advocates united by one belief —
          water access is a fundamental human right.
        </p>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, title, description, accent }) => (
            <div key={title} className="relative overflow-hidden rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300 cursor-default"
              style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ background: accent }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
                <Icon size={20} style={{ color: accent }} />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Team */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <h2 className="font-display text-2xl font-bold text-white px-2">Core Team</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {team.map((member) => (
            <MemberCard key={member.name} member={member} onClick={setSelected} />
          ))}
        </div>
      </section>

      {/* Supervisor */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-500/20" />
          <h2 className="font-display text-2xl font-bold text-white px-2">Project Supervisor</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500/20" />
        </div>

        <MemberCard member={supervisor} onClick={setSelected} isSupervisor />
      </section>

    </div>
  )
}