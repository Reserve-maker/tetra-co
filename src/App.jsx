export default function TetraCoLandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#2F4F3E] font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#F5F1E8]/80 border-b border-[#D8D2C8] z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
  <img
    src="/logo.png"
    alt="Tetra & Co."
    className="w-8 h-8 md:w-10 md:h-10 object-contain"
  />

  <span className="text-2xl font-bebas tracking-[0.2em] uppercase">
  Tetra & Co.
</span>
</div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
  <a href="#about" className="hover:text-white transition">
    About
  </a>

  <a href="#services" className="hover:text-white transition">
    Services
  </a>

  <a href="#contact" className="hover:text-white transition">
    Contact
  </a>
</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,122,101,0.12),transparent_60%)]" />

        <div className="text-center z-10 max-w-4xl">
          <p className="uppercase tracking-[0.5em] text-[#5E6D63] text-sm mb-6">
            Baju Yang Bikin A DAMN!
          </p>

          <h1 className="text-5xl md:text-8xl font-black uppercase leading-normal mb-6">
  Tetra & Co.
</h1>

          <p className="text-[#5E6D63] text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Baju Custom yang bisa dipesan sesukamu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285183009971"
              target="_blank"
              className="px-8 py-4 border border-[#A8B5A2] text-[#4E5F52] rounded-2xl hover:bg-[#5F7A65] hover:text-white transition duration-300"
            >
              Konsultasi Gratis
            </a>

            <a
              href="#services"
              className="px-8 py-4 border border-[#A8B5A2] text-[#4E5F52] rounded-2xl hover:bg-[#5F7A65] hover:text-white transition duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 border-t border-[#D8D2C8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-[#7A847D] text-sm mb-4">
              About The Brand
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
              Built for modern streetwear culture.
            </h2>
          </div>

          <div>
            <p className="text-[#5E6D63] leading-relaxed text-lg">
              Tetra & Co. adalah baju custom yang bikin kamu A DAMN! BRO!
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-28 px-6 bg-[#F8F4EC] border-t border-[#D8D2C8]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.4em] text-[#7A847D] text-sm mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase">
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Custom T-Shirt',
              'Hoodie & Crewneck',
              'Jersey Printing',
              'Screen Printing & Embroidery',
            ].map((service) => (
              <div
                key={service}
                className="border border-[#D8D2C8] rounded-3xl p-8 hover:border-[#9CAF9A] transition duration-300 hover:-translate-y-2 bg-[#F8F4EC]"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 mb-6" />

                <h3 className="text-xl font-bold uppercase mb-4">
                  {service}
                </h3>

                <p className="text-[#5E6D63] leading-relaxed text-sm">
                  Pesen Sekarang biar kamu segera bisa punya hidup t&ram dan A DAMN!
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-28 px-6 border-t border-[#D8D2C8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="uppercase tracking-[0.4em] text-[#7A847D] text-sm mb-4">
                Upcoming Catalog
              </p>

              <h2 className="text-4xl md:text-6xl font-black uppercase">
                Product Preview
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-[4/5] rounded-3xl border border-[#D8D2C8] bg-[#E7E1D6] flex items-center justify-center text-[#7A847D] uppercase tracking-[0.3em]"
              >
                Coming Soon
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-[#F8F4EC] text-[#4E5F52]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-[#6B756E] text-sm mb-6">
            Ready To Start?
          </p>

          <h2 className="text-4xl md:text-7xl font-black uppercase leading-tight mb-8">
            Let’s build your apparel identity.
          </h2>

          <a
            href="https://wa.me/6285183009971"
            target="_blank"
            className="inline-block px-10 py-5 border border-[#A8B5A2] text-[#4E5F52] rounded-2xl uppercase tracking-widest font-bold hover:bg-[#5F7A65] hover:text-white transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-12 px-6 border-t border-[#D8D2C8] text-[#7A847D]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-[#4E5F52] uppercase tracking-[0.3em] font-black">
            Tetra & Co.
          </h2>

          <div className="flex items-center gap-6 text-sm">
  <a
  href="https://instagram.com"
  target="_blank"
  className="flex items-center gap-2 text-[#5E6D63] hover:text-[#2F4F3E] transition duration-300"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
    alt="Instagram"
    className="w-4 h-4 opacity-70"
  />
  <span>Instagram</span>
</a>

  <a
  href="https://wa.me/6285183009971"
  target="_blank"
  className="flex items-center gap-2 text-[#5E6D63] hover:text-[#2F4F3E] transition duration-300"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    className="w-4 h-4 opacity-70"
  />
  <span>WhatsApp</span>
</a>
</div>
        </div>
      </footer>
    </div>
  )
}
