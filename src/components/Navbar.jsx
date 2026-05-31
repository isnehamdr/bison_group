import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setMobilePagesOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18">

          {/* Logo */}
          <div className="flex items-center gap-2"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(20px)', transition: 'opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s' }}>
            {/* <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="11" height="11" rx="2" fill="#111"/>
              <rect x="15" y="2" width="11" height="11" rx="2" fill="#111"/>
              <rect x="2" y="15" width="11" height="11" rx="2" fill="#111"/>
              <rect x="15" y="15" width="11" height="11" rx="2" stroke="#111" strokeWidth="2" fill="none"/>
            </svg>
            <span className="text-xl font-bold tracking-tight text-gray-900">Ritovex</span> */}
            <img src="/images/logo.png" alt="Ritovex Logo" className="w-20 h-20"/>
          </div>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-7 text-md font-semibold text-gray-700">
            {['Home', 'About Us', 'Services', 'Projects'].map((item, i) => (
              <a key={item} href="#"
                className={`hover:text-gray-900 transition-colors ${item === 'Home' ? 'border-b-2 border-gray-900 pb-0.5 text-gray-900' : ''}`}
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)', transition: `opacity 0.5s ease ${0.1 + i * 0.07}s, transform 0.5s ease ${0.1 + i * 0.07}s` }}>
                {item}
              </a>
            ))}

            {/* Explore dropdown */}
            <div className="relative"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)', transition: 'opacity 0.5s ease 0.38s, transform 0.5s ease 0.38s' }}>
              <button className="flex items-center gap-1 hover:text-gray-900 transition-colors" onClick={() => setPagesOpen(!pagesOpen)}>
                Explore
                <svg className={`w-6 h-6 transition-transform duration-300 ${pagesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="absolute top-9 left-0 bg-white border border-gray-100 shadow-lg rounded-xl py-2 w-48 z-50"
                style={{ opacity: pagesOpen ? 1 : 0, transform: pagesOpen ? 'translateY(0) scaleY(1)' : 'translateY(-8px) scaleY(0.95)', transformOrigin: 'top', pointerEvents: pagesOpen ? 'auto' : 'none', transition: 'opacity 0.2s ease, transform 0.2s ease' }}>
                {['Blog', 'Portfolio', 'FAQ', 'Working Process'].map(item => (
                  <a key={item} href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">{item}</a>
                ))}
              </div>
            </div>

            <a href="#" className="hover:text-gray-900 transition-colors"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)', transition: 'opacity 0.5s ease 0.45s, transform 0.5s ease 0.45s' }}>
              Contact
            </a>
          </div>

          {/* Phone — desktop */}
          <div className="hidden md:flex items-center gap-2"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)', transition: 'opacity 0.5s ease 0.52s, transform 0.5s ease 0.52s' }}>
            <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 leading-none">Call Any Time</p>
              <p className="text-md font-bold text-gray-900 leading-tight">22 (00) 356 7890</p>
            </div>
          </div>

          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer — slides right to left ── */}
      <div
        className="md:hidden fixed top-16 right-0 h-[calc(100vh-64px)] w-[280px] sm:w-80 bg-white border-l border-gray-100 shadow-2xl flex flex-col z-50 overflow-y-auto"
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 0.38s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Nav items */}
        <div className="flex flex-col px-6 pt-4 pb-2">
          {[
            { label: 'Home', active: true },
            { label: 'About Us' },
            { label: 'Services' },
            { label: 'Projects' },
          ].map(({ label, active }, i) => (
            <a key={label} href="#" onClick={closeMenu}
              className={`py-3.5 text-[15px] font-semibold border-b border-gray-100 transition-colors ${active ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateX(0)' : 'translateX(24px)', transition: `opacity 0.35s ease ${0.06 + i * 0.06}s, transform 0.35s ease ${0.06 + i * 0.06}s` }}>
              {label}
            </a>
          ))}

          {/* Explore accordion */}
          <div className="border-b border-gray-100"
            style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateX(0)' : 'translateX(24px)', transition: 'opacity 0.35s ease 0.3s, transform 0.35s ease 0.3s' }}>
            <button
              className="w-full flex items-center justify-between py-3.5 text-[15px] font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMobilePagesOpen(!mobilePagesOpen)}>
              Explore
              <svg className={`w-4 h-4 transition-transform duration-300 ${mobilePagesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {/* Sub items */}
            <div className="overflow-hidden"
              style={{ maxHeight: mobilePagesOpen ? '200px' : '0', opacity: mobilePagesOpen ? 1 : 0, transition: 'max-height 0.3s ease, opacity 0.25s ease' }}>
              <div className="pb-2 pl-3 flex flex-col gap-1">
                {['Blog', 'Portfolio', 'FAQ', 'Working Process'].map(item => (
                  <a key={item} href="#" onClick={closeMenu}
                    className="py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </div>

          <a href="#" onClick={closeMenu}
            className="py-3.5 text-[15px] font-semibold border-b border-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
            style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateX(0)' : 'translateX(24px)', transition: 'opacity 0.35s ease 0.36s, transform 0.35s ease 0.36s' }}>
            Contact
          </a>
        </div>

        {/* Phone at bottom */}
        <div className="mt-auto px-6 py-6 border-t border-gray-100"
          style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateX(0)' : 'translateX(24px)', transition: 'opacity 0.35s ease 0.42s, transform 0.35s ease 0.42s' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
            </div>
            <div>
              <p className="text-[11px] text-gray-500 leading-none">Call Any Time</p>
              <p className="text-[15px] font-bold text-gray-900 leading-tight">22 (00) 356 7890</p>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop — blocks scroll and closes menu on tap */}
      <div
        className="md:hidden fixed inset-0 top-16 bg-black/30 z-40 backdrop-blur-[2px]"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none', transition: 'opacity 0.3s ease' }}
        onClick={closeMenu}
      />

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}

export default Navbar