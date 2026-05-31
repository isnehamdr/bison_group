import React, { useEffect, useRef, useState } from 'react'

const stats = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    value: '200+',
    desc: 'We deliver great work always',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.122 2.247 48.8 48.8 0 01-15.257 0 2.25 2.25 0 01-2.122-2.247v-4.073M20.25 14.15l-9.185-9.185a.75.75 0 00-1.06 0L.815 14.15M20.25 14.15H3.75" />
      </svg>
    ),
    value: '10+',
    desc: 'Experience you can count on',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.26 9.71 2 12 2c2.291 0 4.545.26 6.75.721v1.515M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-5.395 4.972M18.75 4.236V4.5a9.023 9.023 0 01-2.48 5.228" />
      </svg>
    ),
    value: '20+',
    desc: 'Award-Winning Work Trusted Results',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    value: '5K+',
    desc: 'We have happy Clients worldwide',
  },
]

const About = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  })

  return (
    <section ref={ref} className="w-full bg-white py-16 sm:py-24 px-4 sm:px-0">
      <div className="sm:max-w-7xl mx-auto px-4 ">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 gap-3">
          <div style={fadeUp(0)} className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="11" height="11" rx="2" fill="#888"/>
              <rect x="15" y="2" width="11" height="11" rx="2" fill="#888"/>
              <rect x="2" y="15" width="11" height="11" rx="2" fill="#888"/>
              <rect x="15" y="15" width="11" height="11" rx="2" stroke="#888" strokeWidth="2" fill="none"/>
            </svg>
            About Us
          </div>

          <h2 style={fadeUp(0.1)} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Who We Are. Learn About us
          </h2>

          <p style={fadeUp(0.18)} className="text-gray-500 text-base sm:text-lg max-w-lg leading-relaxed">
            We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.
          </p>
        </div>

        {/* ── Body: image + stats ── */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">

          {/* Image with notch shape */}
          <div style={fadeUp(0.22)} className="w-full md:w-[52%] shrink-0">
            <div
              className="relative overflow-hidden shadow-md"
              style={{
                borderRadius: '4px 80px 4px 80px',
                aspectRatio: '4/5',
              }}
            >
              <img
                src="/images/about.png"
                alt="Team member"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right: stats grid + CTA */}
          <div className="flex-1 flex flex-col gap-6">

            {/* Stats grid */}
            <div style={fadeUp(0.3)} className="bg-gray-50 rounded-2xl p-5 sm:p-6 grid grid-cols-2 gap-x-4 gap-y-6">
              {stats.map(({ icon, value, desc }, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.55s ease ${0.38 + i * 0.08}s, transform 0.55s ease ${0.38 + i * 0.08}s`,
                  }}
                >
                  <div className="text-gray-500">{icon}</div>
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900 leading-none">{value}</p>
                  <p className="text-sm text-gray-500 leading-snug">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div style={fadeUp(0.7)} className="flex flex-wrap items-center gap-5">
              {/* More About Us button */}
              <button className="relative overflow-hidden bg-gray-900 text-white font-semibold text-[15px] px-6 py-3.5 rounded-lg group" style={{ isolation: 'isolate' }}>
                <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">More About Us</span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">More About Us</span>
              </button>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 leading-none">Get free Qoute</p>
                  <p className="text-[15px] font-bold text-gray-900 leading-tight">22 (00) 356 7890</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About