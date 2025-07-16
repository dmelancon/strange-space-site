import { useEffect, useState } from 'react';

const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Different section counts for mobile vs desktop
  const mobileSections = 4;  // Mobile has fewer sections
  const desktopSections = 3; // Desktop has more sections
  const totalSections = isMobile ? mobileSections : desktopSections;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.snap-container');
      if (container) {
        const scrollTop = container.scrollTop;
        const sectionHeight = window.innerHeight;
        const currentSection = Math.round(scrollTop / sectionHeight);
        setActiveSection(Math.min(currentSection, totalSections - 1));
      }
    };

    const container = document.querySelector('.snap-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [totalSections]);

  const scrollToSection = (sectionIndex: number) => {
    const container = document.querySelector('.snap-container');
    if (container) {
      const sectionHeight = window.innerHeight;
      container.scrollTo({
        top: sectionHeight * sectionIndex,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed left-1 md:left-auto md:right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-2 md:space-y-4">
      {Array.from({ length: totalSections }, (_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all duration-300 p-0 ${
            activeSection === index
              ? 'bg-white scale-125'
              : 'bg-white/30 hover:bg-white/60'
          } `}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots; 