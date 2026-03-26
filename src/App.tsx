import { useState, useEffect, useRef } from 'react'
import MenuIcon from './components/MenuIcon'
import CloseIcon from './components/CloseIcon'
import SectionHome from './sections/SectionHome'
import SectionProjects from './sections/SectionProjects'
import SectionBranding from './sections/SectionBranding'
import SectionAether from './sections/SectionAether'
import SectionContact from './sections/SectionContact'

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
    { name: 'ABOUT', img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2670&auto=format&fit=crop', hoverBg: 'rgba(90, 155, 122, 0.15)', textColor: '#4A8B6A' },
    { name: 'PROJECTS', img: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2487&auto=format&fit=crop', hoverBg: 'rgba(196, 122, 58, 0.15)', textColor: '#B8712A' },
    { name: 'BRANDING', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop', hoverBg: 'rgba(180, 96, 128, 0.15)', textColor: '#A45070' },
    { name: 'CONTACT', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop', hoverBg: 'rgba(96, 112, 180, 0.15)', textColor: '#5060A4' },
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
          <span className="block text-sm transition-transform duration-300 group-hover:scale-105">ANTERIA</span>
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
