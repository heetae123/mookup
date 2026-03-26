import { useState, useEffect } from 'react'
import CloseIcon from '../components/CloseIcon'

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

export default SectionBranding
