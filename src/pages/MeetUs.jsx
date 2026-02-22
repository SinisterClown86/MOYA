import { Github, Twitter, Linkedin, Droplets, Target, Eye, Heart } from 'lucide-react'

const team = [
  {
    name: 'Tareq Khalil',
    role: 'XXX',
    bio: 'PhD in Environmental Engineering with 12 years of experience in water quality research and community-based water management solutions.',
    avatar: 'TQ',
    color: 'from-ocean-500 to-ocean-700'
  },
  {
    name: 'Daniel George',
    role: 'XXX',
    bio: 'Full-stack engineer passionate about civic tech. Built platforms for 3 NGOs focused on environmental monitoring and data transparency.',
    avatar: 'DG',
    color: 'from-teal-500 to-teal-700'
  },
  {
    name: 'Amro Ibrahim',
    role: 'XXX',
    bio: 'Connecting citizens and governments. Background in urban planning and environmental policy advocacy across 8 countries.',
    avatar: 'AI',
    color: 'from-ocean-600 to-teal-600'
  },
  {
    name: 'Mohamed El-Shamy',
    role: 'XXX',
    bio: 'Turning water data into actionable insights. Specialist in GIS mapping and environmental impact assessment.',
    avatar: 'ME',
    color: 'from-teal-600 to-ocean-600'
  },
  {
    name: 'Tyam Mohamed',
    role: 'XXX',
    bio: 'Passionate about empowering communities through technology. Experienced in project management and community engagement for environmental initiatives.',
    avatar: 'TM',
    color: 'from-ocean-500 to-teal-500'
  },
  {
    name: 'Yousef Ahmed',
    role: 'XXX',
    bio: 'Environmental educator and outreach coordinator. Dedicated to raising awareness about water issues through workshops and community programs.',
    avatar: 'YA',
    color: 'from-teal-500 to-ocean-500'
  },
  {
    name: 'Kevin Martin',
    role: 'XXX',
    bio: 'Data scientist and environmental policy expert. Specializes in using data to inform water management decisions and policy development.',
    avatar: 'KM',
    color: 'from-ocean-600 to-teal-600'
  },
  {
    name: 'Asser El-Sergany',
    role: 'XXX',
    bio: 'Software developer with a passion for environmental sustainability. Experienced in building scalable web applications for social good.',
    avatar: 'AS',
    color: 'from-teal-600 to-ocean-600'
  },
  {
    name: 'Loay Alaa',
    role: 'XXX',
    bio: 'Community organizer and environmental advocate. Focused on mobilizing local communities to take action on water conservation and pollution prevention.',
    avatar: 'LA',
    color: 'from-ocean-500 to-teal-500'
  }

]

const values = [
  { icon: Target, title: 'Mission-Driven', description: 'Every feature we build serves one goal: cleaner water for all communities.' },
  { icon: Eye, title: 'Transparency', description: 'Open data, open processes. Citizens deserve to see how their reports are handled.' },
  { icon: Heart, title: 'Community First', description: 'We build with communities, not just for them. Local knowledge drives global solutions.' },
]

export default function MeetUs() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-24">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
          <Droplets size={14} className="text-ocean-300" />
          <span className="text-ocean-200 text-sm">The People Behind MOYA</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
          Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-teal-300">Team</span>
        </h1>
        <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
          We're a group of environmentalists, engineers, and community advocates united by a belief
          that water access is a fundamental human right worth fighting for.
        </p>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card text-center group hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-ocean-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-ocean-500/30 transition-colors">
                <Icon size={26} className="text-ocean-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="font-display text-3xl font-bold text-white text-center mb-12">Core Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="card group hover:scale-[1.03] transition-all flex flex-col">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 text-white font-display text-xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                {member.avatar}
              </div>
              <h3 className="font-display font-semibold text-white text-center text-lg mb-1">{member.name}</h3>
              <p className="text-ocean-300 text-sm text-center mb-3 font-medium">{member.role}</p>
              <p className="text-white/55 text-sm text-center leading-relaxed flex-1">{member.bio}</p>
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-white/10">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-ocean-500/30 transition-colors">
                    <Icon size={14} className="text-white/60" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="card p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-ocean-500/5 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-white/65 leading-relaxed">
              <p>
                MOYA began in 2026
              </p>
              <p>
                We built the 
              </p>
              <p>
                Today, MOYA operates across multiple cities, empowering citizens to become active 
                participants in water management — and rewarding them for their crucial contributions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
