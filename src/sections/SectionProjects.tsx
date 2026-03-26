import { useState, useEffect } from 'react'
import CloseIcon from '../components/CloseIcon'

const SectionProjects = () => {
  const allProjects = [
    { id: 1, title: 'MONOLITH', tag: 'Web Interface', year: '2025', image: 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=1200',
      detailImages: [
        'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'A minimalist digital experience platform focusing on spatial web design. Exploring the boundaries between virtual and physical realms.'
    },
    { id: 2, title: 'ECLIPSE', tag: 'E-Commerce', year: '2024', image: 'https://images.unsplash.com/photo-1598379051512-8809e5b228f4?auto=format&fit=crop&q=80&w=1200',
      detailImages: [
        'https://images.unsplash.com/photo-1598379051512-8809e5b228f4?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'Redefining online retail with a dark-mode focused, immersive shopping experience.'
    },
    { id: 3, title: 'SYNTAX', tag: 'Brand Identity', year: '2024', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
      detailImages: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'Comprehensive brand identity for an architectural firm focusing on raw materials.'
    },
    { id: 4, title: 'HORIZON', tag: 'Mobile App', year: '2023', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200',
      detailImages: [
        'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1501696461415-6bd6660c6742?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'A mobile application that simplifies wellness routines into beautiful micro-interactions.'
    },
    { id: 5, title: 'AESTHETE', tag: 'Editorial', year: '2023', image: 'https://images.unsplash.com/photo-1520694478166-daaaaaec95b4?auto=format&fit=crop&q=80&w=1200',
      detailImages: [
        'https://images.unsplash.com/photo-1520694478166-daaaaaec95b4?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'Digital editorial magazine showcasing avant-garde art and culture.'
    },
    { id: 6, title: 'LUMINA', tag: 'Photography', year: '2023', image: 'https://images.unsplash.com/photo-1501696461415-6bd6660c6742?auto=format&fit=crop&q=80&w=1200',
      detailImages: [
        'https://images.unsplash.com/photo-1501696461415-6bd6660c6742?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'Minimalist photography portfolio prioritizing natural light and shadows.'
    },
    { id: 7, title: 'VOID', tag: 'Installation', year: '2022', image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=1200',
      detailImages: [
        'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=1200'
      ],
      description: 'Interactive sound and light installation featured in Seoul.'
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(allProjects.length / itemsPerPage)

  const currentProjects = allProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Detail View State
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProject])

  return (
    <div className="flex flex-col min-h-screen border-b border-borderWarm bg-primary relative overflow-hidden">

      {/* ---------------- PROJECT DETAIL OVERLAY ---------------- */}
      <div
        className={`fixed inset-0 z-50 bg-[#FFFFFF] overflow-y-auto hide-scroll transition-transform duration-[1s] ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col items-center
        ${selectedProject ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {selectedProject && (
          <div className="w-full max-w-[1700px] mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-32 relative">

            {/* Header / Close Button */}
            <div className="flex justify-between items-center mb-24 sticky top-16 z-20 w-full">
              <span className="text-xs tracking-[0.4em] uppercase text-textMuted font-medium bg-[#FFFFFF]/80 px-4 py-2 backdrop-blur-sm rounded-full">
                {selectedProject.tag} — {selectedProject.year}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="group flex gap-4 items-center text-xs tracking-widest uppercase text-textMain hover:text-[#C4A882] transition-colors bg-[#FFFFFF]/80 pl-4 backdrop-blur-sm rounded-full pr-1 py-1"
              >
                <span className="hidden md:inline-block font-medium">Close Project</span>
                <div className="w-10 h-10 rounded-full border border-borderWarm flex items-center justify-center group-hover:border-[#C4A882] transition-colors bg-[#FFFFFF]">
                  <CloseIcon />
                </div>
              </button>
            </div>

            {/* Title & Description */}
            <div className="max-w-4xl mb-32 text-textMain relative z-10">
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-none mb-12 animate-slide-up">
                {selectedProject.title}
              </h1>
              <p className="text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-textMuted animate-slide-up delay-200">
                {selectedProject.description}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="flex flex-col gap-12 md:gap-32 pb-32 w-full animate-slide-up delay-300">
              {selectedProject.detailImages.map((img, idx) => (
                <div key={idx} className="w-full relative overflow-hidden bg-gray-100 transition-transform duration-700 hover:scale-[1.01] rounded-[2rem]">
                  <img src={img} alt={`${selectedProject.title} detail ${idx + 1}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>

            <div className="text-center pb-32">
              <button onClick={() => setSelectedProject(null)} className="text-sm tracking-[0.3em] font-medium text-textMain border-b border-textMain pb-2 hover:text-[#C4A882] hover:border-[#C4A882] transition-colors">
                RETURN TO EXHIBITION
              </button>
            </div>

          </div>
        )}
      </div>

      {/* ---------------- EXHIBITION LIST VIEW ---------------- */}
      <div className={`w-full flex flex-col lg:flex-row relative transition-all duration-[1.2s] ease-[cubic-bezier(0.85,0,0.15,1)] ${selectedProject ? 'scale-95 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}>

        {/* Left: Project List */}
        <div className="w-full lg:w-1/2 px-8 md:pl-44 md:pr-16 lg:pr-24 py-24 md:py-32 flex flex-col justify-between relative z-10 min-h-screen">

          <div>
            <h2 className="text-xs tracking-[0.4em] text-textLight mb-20 uppercase">
              Exhibition / Works
            </h2>

            <div className="flex flex-col">
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(project)}
                  className="group relative border-b border-borderWarm py-8 md:py-10 flex flex-col justify-center cursor-pointer transition-colors hover:border-[#A39B8F]"
                >
                  <div className="flex justify-between items-end">
                    <h3 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left
                      ${hoveredProject === project.id ? 'text-textMain scale-[1.05]' : 'text-textLight'}`}>
                      {project.title}
                    </h3>
                    <span className={`text-xs md:text-sm tabular-nums tracking-widest transition-colors duration-700
                      ${hoveredProject === project.id ? 'text-textMain' : 'text-textLight'}`}>
                      {project.year}
                    </span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${hoveredProject === project.id ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-sm tracking-widest uppercase text-textMuted flex items-center gap-4">
                      {project.tag}
                      <span className="w-8 h-px bg-textMuted block transition-all duration-500 group-hover:w-16"></span>
                      <span className="text-[10px] hover:text-textMain">VIEW PROJECT</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="mt-24 flex items-center gap-8">
            <span className="text-xs tracking-widest text-textMuted uppercase">Page</span>
            <div className="flex gap-4">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-light transition-all duration-500
                    ${currentPage === idx + 1 ? 'bg-textMain text-primary' : 'border border-borderWarm text-textMain hover:border-textMain'}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Sticky Image Preview (Desktop) */}
        <div className="hidden lg:block w-1/2 h-screen sticky top-0 right-0 p-12 lg:p-16">
          <div className="w-full h-full rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden bg-[#E2DED0] relative shadow-lg">
            {currentProjects.map((project) => (
              <img
                key={project.id}
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none grayscale'}`}
              />
            ))}

            {/* Default state when nothing hovered */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700
              ${hoveredProject === null ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="flex flex-col items-center gap-4 text-[#A39B8F] opacity-60">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span className="text-[10px] tracking-[0.4em] uppercase">
                  Hover & Click to view
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionProjects
