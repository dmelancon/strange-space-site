import "./App.css";
import logo from "./assets/StrangeSpace_White_Thin_v02.png";
import OrbitDiagram from "./components/OrbitDiagram";
import VimeoEmbed from "./components/VimeoEmbed";
import NavigationDots from "./components/NavigationDots";

function App() {
  return (
    <div className="snap-container bg-gray-950">
      <NavigationDots />
      
      {/* First Page - Logo */}
      <section className="snap-section">
         <div className="flex flex-col items-center justify-center md:gap-8 gap-8  max-w-xl">
          <div className="text-center">
            <img
              src={logo}
              alt="Strange.Space Logo"
              className="mx-auto w-full h-auto max-w-[273px]"
            />
          </div>
          <div className="text-center max-w-4xl mx-auto px-6">
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-klavika">
              Strange.Space is a creative technology studio that builds digital
              experiences for screens and spaces.
            </p>
          </div>
          <div className="text-center max-w-2xl mx-auto px-0">
            <div className="hidden sm:flex items-center justify-center space-x-4 md:space-x-2 text-white text-lg md:text-xl lg:text-xl font-klavika uppercase">
              <span className="inline-flex items-center">🏁 YOU</span>
              <span className="text-xl">→</span>
              <span className="inline-flex items-center">🤝 STRANGE.SPACE</span>
              <span className="text-xl ">→</span>
              <span className="inline-flex items-center">🎨 DESIGN</span>
              <span className="text-xl ">→</span>
              <span className="inline-flex items-center">🛠️ BUILD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Second Page - Headline */}
      {/* <section className="snap-section">
        <div className="text-center max-w-4xl mx-auto px-6">
          <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-klavika">
            Strange.space is a creative technology studio that builds digital
            experiences for screens and spaces.
          </p>
        </div>
      </section> */}

      {/* Third Page - Process */}
      <section className="snap-section sm:hidden ">
        <div className="text-center max-w-6xl mx-auto px-6">
          <div className="hidden md:flex items-center justify-center space-x-4 md:space-x-8 text-white text-lg md:text-2xl lg:text-3xl font-klavika uppercase">
            <span className=" inline-flex items-center">🏁 YOU</span>
            <span className="text-xl md:text-3xl lg:text-4xl">→</span>
            <span className="inline-flex items-center">🤝 STRANGE.SPACE</span>
            <span className="text-xl md:text-3xl lg:text-4xl">→</span>
            <span className="inline-flex items-center">🎨 DESIGN</span>
            <span className="text-xl md:text-3xl lg:text-4xl">→</span>
            <span className="inline-flex items-center">🛠️ BUILD</span>
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="md:hidden mt-8">
            <div className="flex flex-col items-center space-y-6 text-white text-xl font-klavika uppercase">
              <div className="flex items-center space-x-4">
                <span>🏁 YOU</span>
              </div>
              <div className="text-2xl">↓</div>
              <div className="flex items-center space-x-4">
                <span>🤝 STRANGE.SPACE</span>
              </div>
              <div className="text-2xl">↓</div>
              <div className="flex items-center space-x-4">
                <span>🎨 DESIGN</span>
              </div>
              <div className="text-2xl">↓</div>
              <div className="flex items-center space-x-4">
                <span>🛠️ BUILD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Page - Orbit Diagram */}
      <section className="snap-section">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <OrbitDiagram />
          <div className="mt-8 max-w-xl text-center">
            <p className="text-white text-base md:text-lg font-klavika">
              We take on production-heavy scopes
              <br />
              so our partners can stay focused on
              <br />
              vision, strategy, and client relationships
            </p>
          </div>
        </div>
      </section>
      {/* Fifth Page - REEL */}
      <section className="snap-section ">
        <div className="flex flex-col items-center justify-center w-full h-full px-6 ">
          <VimeoEmbed 
            videoId="916812001" 
            title="Strange.Space Reel"
            className="w-full"
          />
           <div className="text-center max-w-4xl mx-auto px-6">
          <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-klavika mt-12">
           Contact us at <a href="mailto:hello@strange.space">hello@strange.space</a>
          </p>
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
