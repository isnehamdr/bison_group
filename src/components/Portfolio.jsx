import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    category: "Web Development",
    date: "August 23, 2025",
    title: "SmartCity Traffic Solution",
    description: "AI-powered sensors reduced downtown traffic congestion by 35% weekly.",
    image: "https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68a8d02d50c1399d195e2285_Work%20Thumbnail4.jpg",
    link: "/portfolio/smartcity-traffic-solution"
  },
  {
    id: 2,
    category: "Web Development",
    date: "August 23, 2025",
    title: "ShopEasy E-Commerce Platform",
    description: "Boosted online sales 200% with lightning-fast, mobile-friendly checkout flows.",
    image: "https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68b35ad3c1cd99f5b1a47999_Portfolios%20Image2.jpg",
    link: "/portfolio/shopeasy-e-commerce-platform"
  },
  {
    id: 3,
    category: "Web Development",
    date: "August 23, 2025",
    title: "MedTrack Healthcare App",
    description: "Doctor-patient communication with secure messaging and appointment tracking.",
    image: "https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68a8ce8b7d0302aff8503cf5_Work%20Thumbnail2.jpg",
    link: "/portfolio/medtrack-healthcare-app"
  },
  {
    id: 4,
    category: "Web Development",
    date: "August 23, 2025",
    title: "EduPlay Learning Portal",
    description: "Interactive STEM games increased student engagement by 4X in classrooms.",
    image: "https://cdn.prod.website-files.com/688a6c3373e0fdb14fbef689/68a8ce127eb5a6e00915f3c7_Work%20Thumbnail1.jpg",
    link: "/portfolio/eduplay-learning-portal"
  }
];

function SubtitleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="8" height="8" rx="1" />
      <rect x="14" y="2" width="8" height="8" rx="1" />
      <rect x="2" y="14" width="8" height="8" rx="1" />
      <rect x="14" y="14" width="8" height="8" rx="1" />
    </svg>
  );
}

export default function PortfolioSticky() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-20 md:py-28 lg:py-32"
    >
      {/* Sticky Container */}
      <div className="sticky top-[100px] z-10 text-center">
        
        {/* Top Content - Title Section */}
        <div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Subtitle Badge */}
          <div className="flex justify-center items-center gap-2 mb-4 text-center">
            <SubtitleIcon />
            <span className="text-sm font-medium text-gray-800 tracking-wide ">
              Portfolio
            </span>
          </div>

          {/* Main Title */}
          <p className="text-4xl sm:text-5xl  font-semibold text-gray-900 leading-tight tracking-tight mb-0">
            Explore Our Real Works
          </p>
        </div>

        {/* Bottom Content - Ticker Carousel */}
        <div 
          className="overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
          }}
        >
          {/* Ticker Wrapper */}
          <div className="portfolio-ticker-wrapper">
            <div className="portfolio-ticker">
              <div className="portfolio-ticker-flex">
                <div className="portfolio-inner-ticker flex gap-6 px-4 sm:px-6 lg:px-8 animate-scroll">
                  
                  {projects.map((project, index) => (
                    <div 
                      key={project.id} 
                      className="portfolio-card flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw]"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + index * 0.1}s`
                      }}
                    >
                      <div className="portfolio-card-single">
                        {/* Thumbnail Link */}
                        <a 
                          href={project.link}
                          className="portfolio-thumbnail-wrapper block relative overflow-hidden rounded-lg group"
                        >
                          {/* Image */}
                          <div className="aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />

                          {/* View Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                              View
                            </div>
                          </div>

                          {/* Category & Date */}
                          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-xs sm:text-sm">
                            <span className="font-medium">{project.category}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                            <span className="opacity-90">{project.date}</span>
                          </div>
                        </a>

                        {/* Typography */}
                        <div className="mt-4">
                          <a 
                            href={project.link}
                            className="block text-lg sm:text-xl md:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300 mb-2"
                          >
                            {project.title}
                          </a>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Duplicate first 2 cards for infinite scroll effect */}
                  {projects.slice(0, 2).map((project) => (
                    <div 
                      key={`duplicate-${project.id}`} 
                      className="portfolio-card flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw]"
                    >
                      <div className="portfolio-card-single">
                        <a 
                          href={project.link}
                          className="portfolio-thumbnail-wrapper block relative overflow-hidden rounded-lg group"
                        >
                          <div className="aspect-[4/3] overflow-hidden rounded-lg">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                              View
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-xs sm:text-sm">
                            <span className="font-medium">{project.category}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                            <span className="opacity-90">{project.date}</span>
                          </div>
                        </a>
                        <div className="mt-4">
                          <a 
                            href={project.link}
                            className="block text-lg sm:text-xl md:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-300 mb-2"
                          >
                            {project.title}
                          </a>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 1.5rem));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}