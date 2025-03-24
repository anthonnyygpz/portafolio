import { Button } from "../components/button";
import { Menu, X } from "lucide-react";
import useHeader from "../hooks/useHeader";

export const Header = () => {
  const {
    toggleMenu,
    isMenuOpen,
    setIsMenuOpen,
    scrollSection,
    gmailCopyButton,
    tooltipText,
    showTooltip,
    setShowTooltip,
  } = useHeader();

  return (
    <header className="p-2 md:p-4 bg-black/10 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between w-full items-center text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-stone-400">
            Anthonyygpz
          </h1>

          {/* Boton hamburguesa para movil */}
          <button className="md:hidden p-2 text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu de navegacion para escritorio */}
          <nav className="hidden md:block">
            <ul className="flex gap-1">
              <li>
                <Button
                  className="btn-brown-outline py-1 px-2 transition rounded"
                  onClick={() => scrollSection("main")}
                >
                  Inicio
                </Button>
              </li>
              <li>
                <Button
                  className="btn-brown-outline py-1 px-2 transition rounded"
                  onClick={() => scrollSection("about-me")}
                >
                  Sobre mi
                </Button>
              </li>
              <li>
                <Button
                  className="btn-brown-outline py-1 px-2 transition rounded"
                  onClick={() => scrollSection("skills")}
                >
                  Habilidades
                </Button>
              </li>
              <li>
                <Button
                  className="btn-brown-outline py-1 px-2 transition rounded"
                  onClick={() => scrollSection("projects")}
                >
                  Proyectos
                </Button>
              </li>
              <li>
                <Button
                  className="btn-brown py-1 px-2 transition text-black rounded "
                  onClick={() => scrollSection("contact-me")}
                >
                  Contactame
                </Button>
              </li>

              <li>
                {/* gmail */}
                <div className="relative inline-block">
                  <Button
                    onClick={gmailCopyButton}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 fill-white "
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
                    </svg>
                  </Button>
                  {showTooltip && (
                    <div className="absolute top-full left-18 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap">
                      {tooltipText}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  )}
                </div>
              </li>

              <li>
                {/* linkedin */}
                <Button
                  href="http://www.linkedin.com/in/antonio-gallegos-palafox-848288296"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.9 8.7 6.3 8.1 6.3 7.3C6.3 6.5 6.9 5.9 7.7 5.9C8.5 5.9 9.1 6.5 9.1 7.3C9.1 8.1 8.5 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.7 14.8 12 14 12C13.2 12 12.5 12.7 12.5 13.5V17H10V10H12.5V11C12.8 10.4 13.8 10 14.5 10C16.4 10 18 11.6 18 13.5V17Z" />
                  </svg>
                </Button>
              </li>
              <li>
                {/* github */}
                <Button href="https://github.com/anthonnyygpz" target="_blank">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.1 20.08 9.26 21.3C9.76 21.4 9.94 21.1 9.94 20.84C9.94 20.61 9.94 19.97 9.94 19.12C6.96 19.67 6.36 17.8 6.36 17.8C5.9 16.68 5.24 16.38 5.24 16.38C4.34 15.79 5.3 15.8 5.3 15.8C6.28 15.86 6.82 16.78 6.82 16.78C7.7 18.18 9.14 17.84 9.96 17.58C10.06 16.94 10.34 16.5 10.64 16.26C8.26 16.02 5.76 15.18 5.76 11.4C5.76 10.28 6.16 9.36 6.84 8.64C6.72 8.38 6.36 7.44 6.94 6.08C6.94 6.08 7.76 5.82 9.94 7.1C10.6 6.9 11.3 6.8 12 6.8C12.7 6.8 13.4 6.9 14.06 7.1C16.24 5.82 17.06 6.08 17.06 6.08C17.64 7.44 17.28 8.38 17.16 8.64C17.84 9.36 18.24 10.28 18.24 11.4C18.24 15.2 15.74 16 13.34 16.24C13.72 16.54 14.06 17.12 14.06 18.02C14.06 19.3 14.06 20.52 14.06 20.84C14.06 21.1 14.24 21.4 14.76 21.3C18.9 20.08 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
                      fill="#e6ebec"
                    />
                  </svg>
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Menu movil despegable */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 transition-all duration-300 ease-in-out">
            <ul className="flex flex-col gap-2">
              <li>
                <Button
                  className="btn-brown-outline w-full transition text-white hover:text-black py-1 rounded "
                  onClick={() => {
                    scrollSection("main");
                    setIsMenuOpen(false);
                  }}
                >
                  Inicio
                </Button>
              </li>
              <li>
                <Button
                  className="btn-brown-outline w-full transition text-white hover:text-black py-1 rounded "
                  onClick={() => {
                    scrollSection("skills");
                    setIsMenuOpen(false);
                  }}
                >
                  Habilidades
                </Button>
              </li>
              <li>
                <Button
                  className="btn-brown-outline w-full transition text-white hover:text-black py-1 rounded "
                  onClick={() => {
                    scrollSection("projects");
                    setIsMenuOpen(false);
                  }}
                >
                  Proyectos
                </Button>
              </li>
              <li>
                <Button
                  className="btn-brown w-full transition text-black hover:text-white py-1 rounded "
                  onClick={() => {
                    scrollSection("contact-me");
                    setIsMenuOpen(false);
                  }}
                >
                  Contactame
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
