import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Shared easing
  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px)' : 'translateY(32px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  })

  const fadeRight = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0px)' : 'translateX(40px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  })

  return (
    <section className="w-full sm:min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">

        {/* Left: Text Content */}
        <div className="flex flex-col gap-6 order-2 md:order-1">

          {/* Badge */}
          <div className="inline-flex" style={fadeUp(0.1)}>
            <span className="border border-gray-500 text-gray-700 text-md px-4 py-1.5 rounded-full font-medium tracking-wide">
              Creative Ideas That Inspire Growth
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-6xl font-semibold text-gray-900 leading-[62px] tracking-tight"
            style={fadeUp(0.22)}
          >
            World's Best Creative Agency Team
          </h1>

          {/* Subtext */}
          <p
            className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md font-normal"
            style={fadeUp(0.34)}
          >
            World's best creative agency team — crafting legendary brands through bold ideas, strategic genius, and flawless execution that dominates the global stage.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-5 mt-2" style={fadeUp(0.46)}>
            {/* Get Started — dual-text slide-up hover */}
            <button
              className="relative overflow-hidden bg-gray-900 text-white font-semibold text-lg px-6 py-3.5 rounded-lg group"
              style={{ isolation: 'isolate' }}
            >
              <span
                className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
              >
                Get Started
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
              >
                Get Started
              </span>
            </button>

            {/* Learn More */}
            <button className="bg-white hover:bg-black hover:text-white transition-colors duration-300 text-black border border-black font-semibold text-lg px-6 py-3.5 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Image with overlay reveal animation */}
        <div className="order-2 flex justify-center md:justify-end">
          <div
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
            style={fadeRight(0.3)}
          >
            {/* Image container with clip-path reveal */}
            <div
              className="relative z-10 rounded-2xl overflow-hidden shadow-xl mt-4 md:mt-0"
              style={{
                clipPath: visible ? 'inset(0% 0% 0% 0% round 16px)' : 'inset(0% 100% 0% 0% round 16px)',
                transition: 'clip-path 0.9s cubic-bezier(0.77,0,0.18,1) 0.25s',
              }}
            >
              <img
                src="/images/hero.png"
                alt="Creative professional at work"
                className="w-full h-[380px] sm:h-[440px] lg:h-[520px] object-cover object-center"
                style={{
                  transform: visible ? 'scale(1)' : 'scale(1.08)',
                  transition: 'transform 1.1s cubic-bezier(0.25,0.46,0.45,0.94) 0.25s',
                }}
              />
            </div>

            {/* Overlay left half — slides up */}
            {/* <div
              className="absolute inset-0 z-20 rounded-2xl pointer-events-none"
              style={{
                background: '#f5f5f5',
                clipPath: 'inset(0 50% 0 0)',
                transform: visible ? 'translateY(-100%)' : 'translateY(0%)',
                transition: 'transform 0.75s cubic-bezier(0.77,0,0.18,1) 0.2s',
              }}
            /> */}
            {/* Overlay right half — slides down */}
            {/* <div
              className="absolute inset-0 z-20 rounded-2xl pointer-events-none"
              style={{
                background: '#f5f5f5',
                clipPath: 'inset(0 0 0 50%)',
                transform: visible ? 'translateY(100%)' : 'translateY(0%)',
                transition: 'transform 0.75s cubic-bezier(0.77,0,0.18,1) 0.2s',
              }}
            /> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero