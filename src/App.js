import React from 'react';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen relative overflow-hidden">
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6 lg:p-8">
          <div className="text-2xl font-bold text-black">ORANZON</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-2">
              <div className="w-3 h-3 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer"></div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-orange-primary z-10 p-6">
            <div className="flex flex-col space-y-4 items-center">
              <div className="w-4 h-4 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer"></div>
              <div className="w-4 h-4 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer"></div>
              <div className="w-4 h-4 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer"></div>
              <div className="w-4 h-4 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer"></div>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center px-6 py-16 md:py-24 lg:py-32" style={{ minHeight: '80vh' }}>
          <div className="w-full max-w-4xl">
            <h1 className="hero-heading text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none mb-4">
              CRAFTING
            </h1>
            <h1 className="hero-heading text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none mb-4 whitespace-nowrap" style={{ paddingLeft: '20%' }}>
              YOUR <span className="outlined-text">DIGITAL</span>
            </h1>
            <h1 className="hero-heading text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none" style={{ paddingLeft: '50%' }}>
              <span className="text-black font-normal">©</span>IDENTITY
            </h1>
            <p className="text-black mt-8 max-w-md text-left leading-relaxed" style={{ fontSize: '14px' }}>
              Continuously endeavoring to craft<br />
              outstanding experiences and narrate<br />
              your story in a meaningful way.
            </p>
          </div>
        </div>

       
        
      </section>

      {/* Services Section */}
      <section className="bg-black py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <img 
              src="/images/icons/slider.png" 
              alt="Slider" 
              className="w-full max-w-7xl h-auto object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16">
            MEET <span className="outlined-text-white">OUR</span>
            <br />
            SERVICES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "UI/UX", subtitle: "DESIGN", description: "CREATING INTUITIVE AND ENGAGING INTERFACES THAT PRIORITIZE THE USER EXPERIENCE, FOCUSING ON USABILITY", icon: "webDesignIcon.png" },
              { title: "VISUAL", subtitle: "IDENTITY", description: "DEVELOPING COHESIVE BRAND IDENTITIES BY DESIGNING LOGOS, COLOR SCHEMES, TYPOGRAPHY AND VISUAL ELEMENTS", icon: "visual-icon.png" },
              { title: "DIGITAL", subtitle: "MARKETING", description: "DESIGNING ASSETS AND MATERIALS FOR DIGITAL MARKETING CAMPAIGNS TO COMMUNICATE MESSAGES EFFECTIVELY", icon: "digital-icon.png" },
              { title: "WEBSITE", subtitle: "DESIGN", description: "CREATION OF VISUALLY APPEALING AND FUNCTIONAL WEBSITES, ADAPTED TO CLIENTS' NEEDS AND EASY NAVIGATION", icon: "website-icon.png" }
            ].map((service, index) => (
              <div key={index} className="bg-orange-primary p-6 h-64 flex flex-col justify-between">
                <div className="mb-4">
                  <img 
                    src={`/images/icons/${service.icon}`} 
                    alt={`${service.title} ${service.subtitle} icon`}
                    className="w-8 h-8 object-contain mb-4"
                  />
                  <div className="text-black">
                    <h3 className="text-xl font-black">{service.title}</h3>
                    <h3 className="text-xl font-black">{service.subtitle}</h3>
                  </div>
                </div>
                <div className="text-black text-xs font-medium leading-tight">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="bg-black py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16">
            SELECTED
            <br />
            <span className="outlined-text-white-thin">WORK</span>
          </h2>
          
          <div className="space-y-6">
            {/* Headphone Image */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-600 h-80 md:h-96 relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="/images/Headphone.png" 
                alt="Headphone Design" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 text-white">
                <div className="text-sm font-medium">headphones</div>
              </div>
              <div className="absolute top-4 right-4 text-white">
                <div className="text-sm font-medium">visual identity 2024</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/images/icons/Link.png" 
                  alt="View project" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              {/* <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
                HEADPHONE PROJECT
              </div> */}
            </div>

            {/* Lens Image */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-600 h-80 md:h-96 relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="/images/Lens.png" 
                alt="Lens Photography" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 text-white">
                <div className="text-sm font-medium">Lens</div>
              </div>
              <div className="absolute top-4 right-4 text-white">
                <div className="text-sm font-medium">web design • 2023</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/images/icons/Link.png" 
                  alt="View project" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              {/* <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
                LENS PROJECT
              </div> */}
            </div>

            {/* Eletrik Image */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-600 h-80 md:h-96 relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="/images/Eletrik.png" 
                alt="Eletrik Design" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 text-white">
                <div className="text-sm font-medium">eletrik</div>
              </div>
              <div className="absolute top-4 right-4 text-white">
                <div className="text-sm font-medium">product design 2024</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/images/icons/Link.png" 
                  alt="View project" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
                ELETRIK PROJECT
              </div>
            </div>

            {/* Vista Image */}
            <div className="hero-gradient h-80 md:h-96 relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="/images/Vista.png" 
                alt="Vista Project" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 text-white">
                <div className="text-sm font-medium">vista</div>
              </div>
              <div className="absolute top-4 right-4 text-white">
                <div className="text-sm font-medium">web design 2024</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/images/icons/Link.png" 
                  alt="View project" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              {/* <div className="absolute bottom-4 right-4 text-black text-sm font-medium">
                VISTA PROJECT
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="">
        <div className="">
          <img 
            src="/images/LetsWorkTogether.png" 
            alt="Let's Work Together"
            className="w-full h-auto mb-8 object-cover"
          />
          
          {/* Footer Content */}
          <div className="bg-orange-primary px-8 py-12">
            <div className="max-w-7xl mx-auto">
              {/* Navigation and Social Links */}
              <div className="flex justify-between items-start mb-12">
                {/* Left Navigation */}
                <div className="flex flex-col space-y-2 text-black text-sm font-medium">
                  <a href="#" className="hover:opacity-70">HOME</a>
                  <a href="#" className="hover:opacity-70">ABOUT</a>
                  <a href="#" className="hover:opacity-70">PROJECTS</a>
                  <a href="#" className="hover:opacity-70">PRICING</a>
                  <a href="#" className="hover:opacity-70">CONTACT</a>
                  <a href="#" className="hover:opacity-70">BLOG</a>
                  <a href="#" className="hover:opacity-70">LICENSES</a>
                </div>
                
                {/* Right Social Links */}
                <div className="flex flex-col space-y-2 text-black text-sm font-medium">
                  <a href="#" className="hover:opacity-70">INSTAGRAM</a>
                  <a href="#" className="hover:opacity-70">LINKEDIN</a>
                  <a href="#" className="hover:opacity-70">TWITTER - X</a>
                  <a href="#" className="hover:opacity-70">+1 555-555-5555</a>
                  <a href="#" className="hover:opacity-70">HEY@ORANZON.COM</a>
                </div>
                
                {/* Contact Info */}
                <div className="flex flex-col space-y-2 text-black text-sm font-medium text-right">
                  <span>2101 VAN NESS AVE</span>
                  <span>SAN FRANCISCO - CA</span>
                  <span>9AM-6PM</span>
                </div>
              </div>
              
              {/* ORANZON Branding */}
              <div className="text-center">
                <img 
                  src="/images/ORANZON.png" 
                  alt="ORANZON"
                  className="mx-auto mb-8 h-24 md:h-32 object-contain"
                />
                <div className="flex justify-between items-center mt-8 text-black text-xs">
                  <span>CREATED BY LOWMAZE</span>
                  <span>POWERED BY WEBFLOW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
