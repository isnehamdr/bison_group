import { useState, useRef } from "react";

// Added image URL and description for each service
const services = [
  { 
    id: "01", 
    title: "Web Design", 
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&q=80",
    description: "We craft visually stunning, user-centric websites that captivate your audience and elevate your brand identity across every device."
  },
  { 
    id: "02", 
    title: "Web Development", 
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80",
    description: "Robust, scalable, and lightning-fast web applications built with modern technologies to power your business growth."
  },
  { 
    id: "03", 
    title: "Branding", 
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=80",
    description: "Strategic brand identity design that tells your story, connects emotionally with customers, and stands out in the market."
  },
  { 
    id: "04", 
    title: "Product Design", 
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&q=80",
    description: "End-to-end product design from concept to launch, blending beautiful aesthetics with intuitive user experiences."
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Servicesn() {
  const [hoveredId, setHoveredId] = useState(null);
  const imageRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (id, e) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredId(id);
    
    if (imageRef.current) {
      imageRef.current.style.opacity = "1";
      // Added rotation (-8deg) and zoom (scale 1.15) for dynamic entrance
      imageRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(1.15) rotate(-8deg)`;
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredId(null);
      if (imageRef.current) {
        imageRef.current.style.opacity = "0";
        // Smaller scale and no rotation when hidden for smooth exit
        imageRef.current.style.transform = `translate3d(-500px, -500px, 0) translate(-50%, -50%) scale(0.6) rotate(0deg)`;
      }
    }, 50); 
  };

  const handleMouseMove = (e) => {
    if (hoveredId && imageRef.current) {
      // Keep rotation and zoom while following cursor
      imageRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(1.15) rotate(-8deg)`;
    }
  };

  const hoveredService = services.find((s) => s.id === hoveredId);

  return (
    <div
      className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-24 overflow-hidden relative"
    >
      {/* ── Cursor Following Image with Rotation & Zoom ── */}
      <img
        ref={imageRef}
        src={hoveredService?.image}
        alt=""
        className="fixed top-0 left-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[220px] object-cover rounded-2xl pointer-events-none z-50 shadow-2xl ring-1 ring-white/10"
        style={{
          opacity: 0,
          transform: `translate3d(-500px, -500px, 0) translate(-50%, -50%) scale(0.6) rotate(0deg)`,
          // Smooth transition for all transform properties including rotation and scale
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
        }}
      />

      {/* ── Header ── */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-16 sm:mb-24 relative z-10">
        <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8 bg-white/5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/70"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
            Services
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight tracking-tight mb-5">
          Your Needs, Our Expertise
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
          Your Vision, Our Expertise — Together, we bring ideas to life with
          tailored solutions that deliver real results. Let's build something
          amazing.
        </p>
      </div>

      {/* ── Services List ── */}
      <div 
        className="w-full max-w-6xl relative z-10"
        onMouseMove={handleMouseMove}
      >
        {services.map((service, index) => {
          const isHovered = hoveredId === service.id;
          return (
            <div
              key={service.id}
              onMouseEnter={(e) => handleMouseEnter(service.id, e)}
              onMouseLeave={handleMouseLeave}
              className="group border-t border-white/10 cursor-pointer transition-all duration-300"
              style={{
                borderBottom:
                  index === services.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : undefined,
              }}
            >
              {/* Top Row: Number + Title + Arrow */}
              <div className="flex items-center justify-between py-6 sm:py-8 md:py-10">
                <div className="flex items-center gap-3 sm:gap-5">
                  <span className="text-white/40 text-xs sm:text-sm font-semibold tracking-widest self-start mt-1.5 sm:mt-2">
                    {service.id}
                  </span>
                  <p
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white transition-all duration-300"
                    style={{
                      opacity: hoveredId && !isHovered ? 0.4 : 1,
                    }}
                  >
                    {service.title}
                  </p>
                </div>

                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300"
                  style={{
                    background: isHovered
                      ? "rgba(255,255,255,0.15)"
                      : "transparent",
                    borderColor: isHovered
                      ? "rgba(255,255,255,0.6)"
                      : "rgba(255,255,255,0.3)",
                    transform: isHovered ? "rotate(-45deg)" : "rotate(0deg)",
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <ArrowIcon />
                </button>
              </div>

              {/* ── Dropdown Description ── */}
              <div
                className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  maxHeight: isHovered ? "200px" : "0px",
                  opacity: isHovered ? 1 : 0,
                  paddingBottom: isHovered ? "24px" : "0px",
                }}
              >
                <div className="pl-0 sm:pl-[52px] md:pl-[68px] pr-4 sm:pr-8 md:pr-12 max-w-3xl">
                  <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}