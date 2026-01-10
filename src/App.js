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
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none mb-4">
              CRAFTING
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none mb-4">
              YOUR <span className="outlined-text">DIGITAL</span>
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none">
              <span className="text-black font-normal">©</span>IDENTITY
            </h1>
            <p className="text-black mt-8 max-w-md text-left leading-relaxed" style={{ fontSize: '14px' }}>
              Continuously endeavoring to craft<br />
              outstanding experiences and narrate<br />
              your story in a meaningful way.
            </p>
          </div>
        </div>

       
        
        {/* Decorative Icons */}
        <div className="absolute top-8 left-8">
          <img 
            src="/images/icons/Vector (9).png" 
            alt="Decorative icon"
            className="w-6 h-6 object-contain opacity-60"
          />
        </div>
        
        <div className="absolute bottom-8 left-8">
          <img 
            src="/images/icons/Vector (9).png" 
            alt="Decorative icon"
            className="w-8 h-8 object-contain opacity-40"
          />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "BRAND", subtitle: "DESIGN", icon: "Vector.png" },
              { title: "WEB", subtitle: "IDENTITY", icon: "Vector (1).png" },
              { title: "DIGITAL", subtitle: "MARKETING", icon: "Vector (2).png" },
              { title: "MOTION", subtitle: "DESIGN", icon: "Vector (3).png" }
            ].map((service, index) => (
              <div key={index} className="hero-gradient p-8 h-48 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="text-black">
                    <h3 className="text-2xl font-black">{service.title}</h3>
                    <h3 className="text-2xl font-black">{service.subtitle}</h3>
                  </div>
                  <img 
                    src={`/images/icons/${service.icon}`} 
                    alt={`${service.title} ${service.subtitle} icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="text-black text-sm font-medium">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="bg-black py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16">
            SELECTED
            <br />
            <span className="gradient-text">WORK</span>
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
      <section className="hero-gradient py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-black mb-8">
            LET'S <span className="text-white">WORK</span> TOGETHER - LET'S
            <br />
            <span className="text-white">WORK</span> TOGETHER -
          </h2>
          
          <div className="mt-16">
            <h3 className="text-6xl md:text-8xl font-black text-black">
              ORANZON.
            </h3>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mt-12">
              <img 
                src="/images/icons/Vector (4).png" 
                alt="Social Media"
                className="w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              />
              <img 
                src="/images/icons/Vector (5).png" 
                alt="Social Media"
                className="w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              />
              <img 
                src="/images/icons/Vector (6).png" 
                alt="Social Media"
                className="w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              />
              <img 
                src="/images/icons/Vector (7).png" 
                alt="Social Media"
                className="w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              />
              <img 
                src="/images/icons/Vector (8).png" 
                alt="Social Media"
                className="w-6 h-6 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
