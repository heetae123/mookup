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
        <h2 className="text-3xl font-light tracking-tight text-textMain mb-20">시공견적 문의하기</h2>
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
            <label className="text-sm text-textMain mb-4">어떤 시공을 준비 중이신가요?</label>
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

export default SectionHome
