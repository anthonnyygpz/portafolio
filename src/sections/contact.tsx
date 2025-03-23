export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-brown-700">Contáctame</span>
        </h2>
        <p className="text-center text-brown-500 mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? ¡Hablemos sobre cómo puedo ayudarte!
        </p>

        <div className="max-w-md mx-auto bg-deep  rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col gap-4">
              <a
                href="mailto:tu@email.com"
                className="flex items-center border border-white text-white gap-3 p-3 rounded-md hover:bg-muted transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white "
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
                </svg>
                <span>anthonyygpz@gmail.com</span>
              </a>
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-white text-white gap-3 p-3 rounded-md hover:bg-muted transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.1 20.08 9.26 21.3C9.76 21.4 9.94 21.1 9.94 20.84C9.94 20.61 9.94 19.97 9.94 19.12C6.96 19.67 6.36 17.8 6.36 17.8C5.9 16.68 5.24 16.38 5.24 16.38C4.34 15.79 5.3 15.8 5.3 15.8C6.28 15.86 6.82 16.78 6.82 16.78C7.7 18.18 9.14 17.84 9.96 17.58C10.06 16.94 10.34 16.5 10.64 16.26C8.26 16.02 5.76 15.18 5.76 11.4C5.76 10.28 6.16 9.36 6.84 8.64C6.72 8.38 6.36 7.44 6.94 6.08C6.94 6.08 7.76 5.82 9.94 7.1C10.6 6.9 11.3 6.8 12 6.8C12.7 6.8 13.4 6.9 14.06 7.1C16.24 5.82 17.06 6.08 17.06 6.08C17.64 7.44 17.28 8.38 17.16 8.64C17.84 9.36 18.24 10.28 18.24 11.4C18.24 15.2 15.74 16 13.34 16.24C13.72 16.54 14.06 17.12 14.06 18.02C14.06 19.3 14.06 20.52 14.06 20.84C14.06 21.1 14.24 21.4 14.76 21.3C18.9 20.08 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
                    fill="#e6ebec"
                  />
                </svg>

                <span>github.com/tuusuario</span>
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-white text-white rounded-md hover:bg-muted transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.9 8.7 6.3 8.1 6.3 7.3C6.3 6.5 6.9 5.9 7.7 5.9C8.5 5.9 9.1 6.5 9.1 7.3C9.1 8.1 8.5 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.7 14.8 12 14 12C13.2 12 12.5 12.7 12.5 13.5V17H10V10H12.5V11C12.8 10.4 13.8 10 14.5 10C16.4 10 18 11.6 18 13.5V17Z" />
                </svg>
                <span>linkedin.com/in/tuusuario</span>
              </a>
            </div>

            <div className="mt-8">
              <button className="w-full bg-white rounded p-2">
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
