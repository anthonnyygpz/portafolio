import { Button } from "../components/button";
import { ArrowRight } from "lucide-react";
import useUser from "../hooks/useUser";
import useHeader from "../hooks/useHeader";

export const TitleMain = () => {
  const { avatar_url, loading } = useUser();
  const { scrollSection } = useHeader();

  if (loading) return <div>Cargando...</div>;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="main">
      <div className="2xl:justify-center 2xl:p-2 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hola, soy <span>Vicente Antonio Gallegos Palafox</span>
              </h1>
              <p className="max-w-[600px] text-stone-500 text-muted-foreground md:text-xl">
                Desarrollador Web full stack especializado en crear aplicaciones
                completas, dominando tanto frontend como bakcend.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div>
                <Button
                  onClick={() => scrollSection("projects")}
                  className="bg-brown-500 hover:bg-brown-600 active:bg-brown-700 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium  shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => scrollSection("contact-me")}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input text-white hover:text-black hover:bg-white px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contáctame
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted bg-muted md:w-[300px] lg:w-[400px]">
              <img
                src={avatar_url}
                alt="Profile"
                className="object-cover  w-[200px] md:w-[300px] lg:w-[400px] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
