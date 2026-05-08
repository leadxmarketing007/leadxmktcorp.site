export default function LeadXMarketingWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/30 via-black to-black"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-red-500 text-sm mb-4">
              Lead Generation & Digital Growth
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Lead X <span className="text-red-500">Marketing</span> Corporation
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Helping businesses grow with powerful lead generation, digital marketing strategies, branding, and customer acquisition solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:6088669160"
                className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 transition font-semibold shadow-lg"
              >
                Call Now
              </a>

              <a
                href="mailto:leadxmarketingcorporation@gmail.com"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
              <h3 className="text-3xl font-bold text-red-500 mb-2">100+</h3>
              <p className="text-gray-300">Businesses Supported</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 mt-10">
              <h3 className="text-3xl font-bold text-red-500 mb-2">24/7</h3>
              <p className="text-gray-300">Marketing Support</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 -mt-4">
              <h3 className="text-3xl font-bold text-red-500 mb-2">ROI</h3>
              <p className="text-gray-300">Focused Campaigns</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 mt-6">
              <h3 className="text-3xl font-bold text-red-500 mb-2">Growth</h3>
              <p className="text-gray-300">Driven Strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Customized marketing solutions designed to increase visibility, generate leads, and scale your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Lead Generation',
              desc: 'High-quality lead generation systems tailored for businesses and entrepreneurs.',
            },
            {
              title: 'Social Media Marketing',
              desc: 'Build your online presence with strategic social media growth campaigns.',
            },
            {
              title: 'Brand Promotion',
              desc: 'Increase brand authority and customer trust with professional marketing strategies.',
            },
            {
              title: 'Custom Visiting Cards',
              desc: 'Premium quality business visiting cards available in affordable bundle packages for businesses and professionals.',
            },
            {
              title: 'Wedding Cards Printing',
              desc: 'Elegant and customized wedding invitation cards with premium print quality and modern designs.',
            },
            {
              title: 'Email Marketing',
              desc: 'Reach targeted audiences with optimized email campaigns and automation.',
            },
            {
              title: 'Business Consulting',
              desc: 'Expert consultation to help businesses improve marketing performance and conversions.',
            },
            {
              title: 'Digital Advertising',
              desc: 'Run optimized advertising campaigns across multiple digital platforms.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/50 transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-500">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-black py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Card Printing Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Affordable pricing for premium quality visiting cards and wedding cards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                qty: '100 Pieces',
                price: '$50',
                features: ['Premium Print Quality', 'Modern Designs', 'Fast Delivery'],
              },
              {
                qty: '500 Pieces',
                price: '$200',
                features: ['High Quality Material', 'Custom Branding', 'Bulk Discount'],
              },
              {
                qty: '1000 Pieces',
                price: '$350',
                features: ['Best Value Package', 'Professional Finishing', 'Business & Wedding Cards'],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:border-red-500/50 transition"
              >
                <h3 className="text-3xl font-bold mb-4 text-red-500">
                  {plan.qty}
                </h3>

                <div className="text-5xl font-black mb-6">{plan.price}</div>

                <ul className="space-y-3 text-gray-300 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <a
                  href="tel:6088669160"
                  className="inline-block px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 transition font-semibold"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About The Company</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              LeadX Marketing is focused on helping businesses grow faster through modern marketing techniques, strategic outreach, and performance-driven campaigns.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We work with businesses looking to improve customer acquisition, increase engagement, and strengthen their digital presence.
            </p>
          </div>

          <div className="bg-black rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-red-500">
              Company Information
            </h3>

            <div className="space-y-4 text-gray-300">
              <div>
                <span className="font-semibold text-white">Owner:</span>{' '}
                Rana Shehriyaar Ahmed
              </div>

              <div>
                <span className="font-semibold text-white">Business Address:</span>{' '}
                418 Broadway STE 4580 Albany NY 12207
              </div>

              <div>
                <span className="font-semibold text-white">EIN:</span>{' '}
                98-1824215
              </div>

              <div>
                <span className="font-semibold text-white">Phone:</span>{' '}
                6088669160
              </div>

              <div>
                <span className="font-semibold text-white">Email:</span>{' '}
                leadxmarketingcorporation@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-black mb-6">
          Ready To Grow Your Business?
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Contact LeadX Marketing today and start scaling your business with professional marketing solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:6088669160"
            className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 transition font-bold text-lg"
          >
            6088669160
          </a>

          <a
            href="mailto:leadxmarketingcorporation@gmail.com"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition font-bold text-lg"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 LeadX Marketing. All rights reserved. • www.leadxmkt.com
      </footer>
    </div>
  )
}
