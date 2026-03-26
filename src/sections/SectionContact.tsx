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

export default SectionContact
