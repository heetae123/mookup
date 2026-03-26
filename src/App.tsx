import { useState, useEffect, useRef } from 'react'

// --- Icons ---
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// --- Sections ---
const SectionHome = () => (
  <div className="flex flex-col w-full">
    {/* 1. Hero */}
    <div className="relative flex flex-col justify-center min-h-screen border-b border-borderWarm overflow-hidden px-8 md:px-16 lg:px-24 md:pl-44">
      <div className="absolute inset-0 z-[-1] w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-10 grayscale mix-blend-multiply"
          alt="Background"
        />
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.9] mb-8 animate-slide-up text-textMain">
          SHAPING<br />
          <span className="text-textMuted font-serif italic">THE</span> VOID.
        </h1>
        <p className="max-w-xl text-textMuted font-light text-lg md:text-xl leading-relaxed animate-slide-up delay-200">
          우리는 존재하지 않는 것을 상상하고, 불필요한 것을 덜어내어
          가장 본질적이고 아름다운 브랜드 경험을 디자인합니다.
        </p>
        <div className="mt-16 animate-slide-up delay-300">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="flex items-center gap-4 text-sm tracking-widest uppercase text-textMain hover:text-hoverAccent transition-colors group"
          >
            Scroll to Explore
            <span className="transform group-hover:translate-y-2 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-90">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* 2. Masonry Works */}
    <div className="py-24 md:py-32 border-b border-borderWarm md:pl-28">
      <div className="w-full max-w-[1700px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-textMain">Selected<br />Works.</h2>
          <button className="text-xs tracking-widest uppercase text-textMuted hover:text-textMain transition-colors flex items-center gap-2">
            View All <span>→</span>
          </button>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {[
            'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1598379051512-8809e5b228f4?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1520694478166-daaaaaec95b4?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1501696461415-6bd6660c6742?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800',
          ].map((url, i) => (
            <div key={i} className="break-inside-avoid relative group overflow-hidden bg-gray-100">
              <img
                src={url}
                className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                alt={`Work ${i + 1}`}
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* 3. Capabilities */}
    <div className="py-24 md:py-32 border-b border-borderWarm md:pl-28 bg-primary">
      <div className="w-full max-w-[1700px] mx-auto px-8 md:px-16 lg:px-24 text-left">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-textMain">Our<br />Capabilities.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { title: 'Strategy', icon: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7z', desc: 'Defining the core of your brand' },
            { title: 'Design', icon: 'M12 19l7-7 3 3-7 7-3-3z', desc: 'Translating strategy into visual language' },
            { title: 'Development', icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6', desc: 'Building robust digital experiences' },
            { title: 'Direction', icon: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z', desc: 'Leading content creation & shoots' },
          ].map((cap, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 border border-borderWarm shadow-sm hover:shadow-md transition-transform hover:-translate-y-1 duration-300 cursor-default">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border bg-[#F9F9F9] text-textMain border-borderWarm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={cap.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-3 text-textMain">{cap.title}</h3>
              <p className="text-textMuted text-sm font-light leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* 4. Contact Form */}
    <div className="py-32 md:py-40 md:pl-28">
      <div className="w-full max-w-2xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-light tracking-tight text-textMain mb-20">프로젝트 문의하기</h2>
        <form
          className="w-full flex flex-col gap-12"
          onSubmit={(e) => { e.preventDefault(); alert('문의가 접수되었습니다.') }}
        >
          <div className="flex flex-col md:flex-row gap-12 text-left">
            <div className="flex flex-col flex-1 relative group">
              <label className="text-sm text-textMain mb-4">이름</label>
              <input type="text" placeholder="이름을 입력하세요." className="bg-transparent border-b border-textMain pb-3 text-sm focus:outline-none focus:border-hoverAccent transition-colors placeholder:text-textMuted" />
            </div>
            <div className="flex flex-col flex-1 relative group">
              <label className="text-sm text-textMain mb-4">이메일 *</label>
              <input type="email" placeholder="이메일 주소를 입력하세요." required className="bg-transparent border-b border-textMain pb-3 text-sm focus:outline-none focus:border-hoverAccent transition-colors placeholder:text-textMuted" />
            </div>
          </div>
          <div className="flex flex-col relative group text-left">
            <label className="text-sm text-textMain mb-4">전화번호</label>
            <input type="tel" placeholder="전화번호를 입력하세요." className="bg-transparent border-b border-textMain pb-3 text-sm focus:outline-none focus:border-hoverAccent transition-colors placeholder:text-textMuted" />
          </div>
          <div className="flex flex-col relative group text-left">
            <label className="text-sm text-textMain mb-4">어떤 프로젝트를 준비 중이신가요?</label>
            <input type="text" placeholder="간단한 예산 규모나 서비스 내용을 입력해주세요." className="bg-transparent border-b border-textMain pb-3 text-sm focus:outline-none focus:border-hoverAccent transition-colors placeholder:text-textMuted" />
          </div>
          <div className="mt-8">
            <button type="submit" className="border border-textMain px-16 py-4 text-sm font-medium tracking-widest hover:bg-textMain hover:text-primary transition-colors">제출</button>
          </div>
        </form>
      </div>
    </div>
  </div>
)

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

const SectionBranding = () => {
  const books = [
    {
      id: 1,
      title: 'THE ESSENCE OF SILENCE',
      subtitle: 'Aether Studio Monograph Volume I',
      author: 'Aether Studio',
      price: '$45.00',
      description: 'A comprehensive journey through our defining projects. This 240-page cloth-bound monograph explores the philosophy of minimalism and negative space in modern brand identity design. Contains exclusive interviews, conceptual sketches, and high-resolution photography of our most iconic works.',
      coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200',
      detailImages: [
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200',
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200'
      ],
      details: ['240 Pages', 'Hardcover Cloth Bound', 'English / Korean', '240 x 310 mm']
    }
  ]

  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null)

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedBook) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedBook])

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-32 md:pl-28 relative">
      <div className="w-full max-w-[1700px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* BRANDING PHILOSOPHY SECTION */}
        <div className="mb-32 md:mb-48">
          <h2 className="text-xs tracking-[0.3em] text-textLight mb-16">BRANDING PHILOSOPHY</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="animate-slide-up">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light leading-snug tracking-tight text-textMain">
                <span className="font-serif italic text-textMuted">Silence</span> is<br />the ultimate<br />sophistication.
              </h3>
            </div>
            <div className="flex flex-col gap-8 text-textMuted font-light leading-relaxed animate-slide-up delay-200">
              <p className="text-lg md:text-xl">
                복잡성이 지배하는 세상에서, 단순함은 가장 강력한 차별화 전략입니다. 하나의 선, 하나의 여백에도 분명한 존재의 이유가 있어야 합니다.
              </p>
              <p>
                우리는 브랜드의 핵심 메시지를 가장 정제된 시각 언어로 번역합니다. 불필요한 장식을 덜어내고 본질에 집중할 때, 브랜드는 비로소 고유의 목소리를 냅니다. 극도의 미니멀리즘은 차가운 결핍이 아닌, 여유롭고 세련된 충만함을 의미합니다.
              </p>
              <div className="w-full h-px bg-borderWarm mt-8" />
              <div className="flex justify-between text-sm uppercase tracking-widest text-textMuted">
                <span>Strategy</span>
                <span>Identity</span>
                <span>Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* PUBLICATIONS / STORE SECTION */}
        <div className="pt-24 border-t border-borderWarm relative z-10">
          <h2 className="text-xs tracking-[0.3em] text-textLight mb-16 flex justify-between items-end">
            <span>PUBLICATIONS & GOODS</span>
            <span className="text-[10px] hidden md:block">WORLDWIDE SHIPPING</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {books.map(book => (
              <div 
                key={book.id} 
                onClick={() => setSelectedBook(book)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Book Cover Container */}
                <div className="w-full md:w-4/5 lg:w-3/4 aspect-[3/4] bg-[#EAE8E0] relative overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700 mx-auto md:mx-0">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  {/* Subtle hover overlay badge */}
                  <div className="absolute bottom-6 right-6 bg-textMain text-[#FFFFFF] text-[10px] tracking-widest px-4 py-2 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    VIEW DETAILS
                  </div>
                </div>
                
                {/* Book Info */}
                <div className="flex flex-col gap-2 relative pl-2 md:pl-0">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-xl md:text-2xl font-light tracking-tight text-textMain group-hover:text-hoverAccent transition-colors">
                      {book.title}
                    </h4>
                  </div>
                  <p className="text-xs tracking-widest text-textMuted mt-1 mb-2">{book.subtitle}</p>
                  <span className="text-sm font-medium text-textMain">{book.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ---------------- BOOK DETAIL FULLSCREEN OVERLAY ---------------- */}
      <div 
        className={`fixed inset-0 z-50 bg-[#FFFFFF] overflow-y-auto hide-scroll transition-transform duration-[1s] ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col items-center
        ${selectedBook ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {selectedBook && (
          <div className="w-full max-w-[1700px] mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-32 relative">
            
            {/* Header / Close Button */}
            <div className="flex justify-between items-center mb-16 sticky top-16 z-20 w-full">
              <span className="text-xs tracking-[0.4em] uppercase text-textMuted font-medium bg-[#FFFFFF]/90 px-5 py-2 backdrop-blur-md rounded-full border border-borderWarm/50 hidden md:block shadow-sm">
                STORE / {selectedBook.title}
              </span>
              <span className="text-xs tracking-[0.4em] uppercase text-textMuted font-medium md:hidden">
                STORE
              </span>
              <button 
                onClick={() => setSelectedBook(null)}
                className="group flex gap-4 items-center text-xs tracking-widest uppercase text-textMain hover:text-[#C4A882] transition-colors bg-[#FFFFFF]/90 pl-5 backdrop-blur-md rounded-full pr-1 py-1 border border-borderWarm/50 shadow-sm"
              >
                <span className="hidden md:inline-block font-medium">Close</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-95 transition-transform bg-[#FFFFFF]">
                  <CloseIcon />
                </div>
              </button>
            </div>

            {/* Split Product View */}
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32 h-auto lg:h-[75vh]">
              {/* Left: Product Image Area (Book Cover) */}
              <div className="w-full lg:w-1/2 h-[60vh] lg:h-full relative bg-[#EAE8E0] rounded-2xl overflow-hidden shadow-2xl animate-slide-up flex flex-col justify-center items-center">
                <img src={selectedBook.coverImage} className="w-[80%] h-[80%] object-cover mix-blend-multiply shadow-2xl" alt={selectedBook.title} />
              </div>
              
              {/* Right: Product Info & Purchase Action */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center animate-slide-up delay-100 pb-16 lg:pb-0">
                <p className="text-xs tracking-[0.3em] text-textLight uppercase mb-6">{selectedBook.subtitle}</p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-textMain leading-[1.1] mb-8">
                  {selectedBook.title}
                </h1>
                
                <p className="text-3xl font-light text-textMain mb-12">
                  {selectedBook.price}
                </p>

                <p className="text-base text-[#706A61] leading-relaxed font-light mb-12 max-w-xl">
                  {selectedBook.description}
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs tracking-widest text-textMuted border-t border-b border-borderWarm py-8 mb-12">
                  {selectedBook.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-borderWarm"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <button onClick={() => {
                  alert(`Added to cart: ${selectedBook.title}`);
                  setSelectedBook(null);
                }} className="bg-textMain text-primary px-10 py-6 text-sm tracking-[0.3em] font-medium hover:bg-[#C4A882] transition-colors duration-500 w-full md:w-max group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-[150%]">
                    PURCHASE BOOK
                  </span>
                  <span className="absolute inset-0 z-0 flex items-center justify-center translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    SECURE CHECKOUT
                  </span>
                </button>
              </div>
            </div>

            {/* Below the fold: Table of Contents */}
            <div className="w-full max-w-4xl mx-auto pt-24 mt-8 border-t border-borderWarm animate-slide-up delay-300">
              <h3 className="text-xs tracking-[0.4em] text-textMain uppercase mb-16 text-center font-medium">Table of Contents</h3>
              <div className="flex flex-col gap-8">
                {[
                  { chapter: '01', title: 'The Genesis of Silence', page: '008' },
                  { chapter: '02', title: 'Typography as Negative Space', page: '042' },
                  { chapter: '03', title: 'Selected Works: 2020—2024', page: '096' },
                  { chapter: '04', title: 'Interviews & Reflections', page: '180' },
                  { chapter: '05', title: 'The Future of Minimalism', page: '224' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-baseline group hover:text-hoverAccent cursor-default">
                    <span className="text-xs text-textMuted w-12">{item.chapter}</span>
                    <span className="text-lg md:text-xl font-light text-textMain group-hover:tracking-widest transition-all duration-[0.8s] flex-grow mx-6 border-b border-dashed border-borderWarm" style={{ position: 'relative', top: '-6px' }}>
                      <span className="bg-[#FFFFFF] pr-4 relative top-[6px]">{item.title}</span>
                    </span>
                    <span className="text-xs tabular-nums text-textMuted bg-[#FFFFFF] pl-4">{item.page}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

const SectionAether = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen py-24 md:pl-28 bg-[#FFFFFF] overflow-hidden relative">
      <style>{`
        @keyframes marqueeHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideDownLine {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>

      {/* Background Marquee Text for Horizontal Aesthetic */}
      <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-[0.03]' : 'opacity-0'}`}>
        <div 
          className="whitespace-nowrap flex w-max"
          style={{ animation: 'marqueeHorizontal 40s linear infinite' }}
        >
          <span className="text-[12rem] md:text-[20rem] font-light text-textMain tracking-tighter mx-8">HELLO</span>
          <span className="text-[12rem] md:text-[20rem] font-serif italic text-textMain tracking-tighter mx-8">BONJOUR</span>
          <span className="text-[12rem] md:text-[20rem] font-light text-textMain tracking-tighter mx-8">안녕하세요</span>
          <span className="text-[12rem] md:text-[20rem] font-serif italic text-textMain tracking-tighter mx-8">HOLA</span>
          {/* Duplicate for infinite loop */}
          <span className="text-[12rem] md:text-[20rem] font-light text-textMain tracking-tighter mx-8">HELLO</span>
          <span className="text-[12rem] md:text-[20rem] font-serif italic text-textMain tracking-tighter mx-8">BONJOUR</span>
          <span className="text-[12rem] md:text-[20rem] font-light text-textMain tracking-tighter mx-8">안녕하세요</span>
          <span className="text-[12rem] md:text-[20rem] font-serif italic text-textMain tracking-tighter mx-8">HOLA</span>
        </div>
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center text-center relative z-10">
        <div className="overflow-hidden mb-8">
          <span className={`block text-xs uppercase tracking-[0.4em] text-textLight transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            Nice to meet you
          </span>
        </div>

        <div className="overflow-hidden w-full mb-10">
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-textMain leading-[1.3] md:leading-[1.2] transition-transform duration-[1.5s] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            안녕하세요, <br className="hidden md:block"/>우리는 <span className="font-serif italic text-textMuted inline-block hover:scale-105 transition-transform duration-300 cursor-default">에테르</span>입니다.
          </h2>
        </div>

        <div className={`max-w-2xl mx-auto space-y-6 text-sm md:text-base text-[#706A61] font-light leading-relaxed transition-all duration-1000 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p>
            보이지 않는 생각과 아이디어에 숨결을 불어넣어, 가장 직관적이고 아름다운 브랜드 경험을 조각하는 크리에이티브 스튜디오입니다. 복잡함을 덜어낸 자리에서 본질이 빛을 발하도록 단순하고 직관적으로 디자인합니다.
          </p>
        </div>
        
        <div className={`mt-20 transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-px h-24 bg-borderWarm mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-textMain" style={{ animation: 'slideDownLine 2s ease-in-out infinite' }}></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

const SectionContact = () => (
  <div className="flex flex-col min-h-screen justify-between pt-24 pb-12 md:pl-28">
    <div className="w-full max-w-[1700px] mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-xs tracking-[0.3em] text-textLight mb-16 animate-slide-up">CONTACT US</h2>
      <div className="flex-grow flex flex-col justify-center animate-slide-up delay-100">
        <a href="mailto:hello@aether.studio" className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-textMain hover:text-hoverAccent transition-colors inline-block w-max">
          hello@<br className="md:hidden" />aether.studio
        </a>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-borderWarm pt-12">
          <div>
            <h4 className="text-xs tracking-widest text-textLight mb-4">LOCATION</h4>
            <p className="font-light text-[#525252] leading-relaxed">
              서울특별시 용산구<br />이태원로 42길 19, 3층
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest text-textLight mb-4">INQUIRIES</h4>
            <p className="font-light text-[#525252] leading-relaxed">
              +82 (0)2-1234-5678<br />Mon-Fri 10am - 6pm (KST)
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest text-textLight mb-4">SOCIALS</h4>
            <div className="flex flex-col gap-2 font-light text-[#525252]">
              <a href="#" className="hover:text-hoverAccent transition-colors w-max nav-link">Instagram</a>
              <a href="#" className="hover:text-hoverAccent transition-colors w-max nav-link">Behance</a>
              <a href="#" className="hover:text-hoverAccent transition-colors w-max nav-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// --- Main App ---
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('HOME')
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrollingDown(currentScrollY > prevScrollY.current && currentScrollY > 50)
      prevScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  const menuItems = [
    { name: 'ABOUT',    img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2670&auto=format&fit=crop', hoverBg: 'rgba(90, 155, 122, 0.15)', textColor: '#4A8B6A' },
    { name: 'PROJECTS', img: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2487&auto=format&fit=crop', hoverBg: 'rgba(196, 122, 58, 0.15)',  textColor: '#B8712A' },
    { name: 'BRANDING', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop', hoverBg: 'rgba(180, 96, 128, 0.15)', textColor: '#A45070' },
    { name: 'CONTACT',  img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop', hoverBg: 'rgba(96, 112, 180, 0.15)', textColor: '#5060A4' },
  ]
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const handleNavClick = (item: string) => {
    setActiveSection(item)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'HOME': return <SectionHome />
      case 'PROJECTS': return <SectionProjects />
      case 'BRANDING': return <SectionBranding />
      case 'ABOUT': return <SectionAether />
      case 'CONTACT': return <SectionContact />
      default: return <SectionHome />
    }
  }

  return (
    <div className="flex min-h-screen bg-primary text-textMain font-sans selection:bg-hoverAccent selection:text-white">

      {/* Desktop Left Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 w-28 h-screen border-r border-borderWarm bg-primary z-50 flex-col items-center py-10 hide-scroll">
        <div
          onClick={() => handleNavClick('HOME')}
          className="cursor-pointer font-serif tracking-[0.2em] mt-8 group text-center leading-tight flex flex-col gap-1 text-textMain"
        >
          <span className="block text-sm transition-transform duration-300 group-hover:scale-105">AETHER</span>
          <span className="block text-sm transition-transform duration-300 group-hover:scale-105">STUDIO</span>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="my-auto p-3 text-textMain rounded-full hover:bg-black/5 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </aside>

      {/* Mobile Top Nav */}
      <div className={`md:hidden fixed top-0 left-0 w-full bg-primary border-b border-borderWarm z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${isScrollingDown && !menuOpen ? '-translate-y-full' : 'translate-y-0'}`}>
        <div
          onClick={() => handleNavClick('HOME')}
          className="font-serif tracking-[0.2em] text-sm text-textMain cursor-pointer"
        >
          AETHER
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-textMain focus:outline-none">
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Right Social Links */}
      <div className="hidden md:flex fixed bottom-0 right-0 w-28 h-screen flex-col justify-end items-center pb-12 z-40 bg-transparent pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
          <div className="transform -rotate-90 text-[10px] tracking-[0.2em] font-medium text-textMain mb-10 whitespace-nowrap">FOLLOW ME</div>
          <div className="w-px h-10 bg-[#D4D4D4] mb-6" />
          <div className="flex flex-col gap-5 text-textMain items-center">
            <a href="#" aria-label="Twitter" className="hover:text-hoverAccent transition-transform transform hover:scale-110">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-hoverAccent transition-transform transform hover:scale-110">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-hoverAccent transition-transform transform hover:scale-110">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full min-h-screen relative z-0 pt-16 md:pt-0 overflow-x-hidden">
        <div className="w-full">
          <div key={activeSection} className="w-full">
            {renderContent()}
          </div>
        </div>
      </main>

      {/* Fullscreen Menu Overlay */}
      <div className={`fixed inset-0 z-40 flex flex-col md:flex-row transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] bg-primary ${menuOpen ? 'translate-y-0 translate-x-0' : '-translate-y-full md:-translate-x-full md:translate-y-0'}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className={`md:hidden absolute top-4 right-6 z-50 p-2 text-textMain focus:outline-none transition-opacity duration-700 delay-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          aria-label="Close Menu"
        >
          <CloseIcon />
        </button>
        {menuItems.map((item, idx) => {
          const isHovered = hoveredItem === item.name
          return (
            <div
              key={item.name}
              onClick={() => handleNavClick(item.name)}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="flex-1 flex justify-center items-center cursor-pointer border-b md:border-b-0 md:border-r border-[#E5E5E5] relative overflow-hidden"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              {/* 배경 이미지 */}
              <div
                className="absolute inset-0 bg-cover bg-center select-none pointer-events-none grayscale"
                style={{
                  backgroundImage: `url(${item.img})`,
                  opacity: isHovered ? 0.3 : 0,
                  transition: 'opacity 1s ease',
                }}
              />
              {/* 은은한 컬러 tint */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: isHovered ? item.hoverBg : 'transparent',
                  transition: 'background-color 0.8s ease',
                }}
              />
              <span
                className={`relative z-10 text-xl md:text-3xl font-light tracking-[0.2em] transform transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  ${isHovered ? 'scale-110 drop-shadow-md' : 'scale-100'}
                `}
                style={{
                  color: isHovered ? item.textColor : '#706A61',
                  transitionDelay: `${menuOpen ? idx * 100 + 300 : 0}ms`,
                }}
              >
                {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
