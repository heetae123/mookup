import { useState, useEffect, useRef } from 'react'

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

export default SectionAether
