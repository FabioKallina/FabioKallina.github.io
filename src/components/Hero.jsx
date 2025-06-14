import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: 'url("../public/IMG_5723 copy.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight" style={{ textShadow: "0 0.05rem .5rem rgba(0, 0, 0, 0.5)" }}>
            <span className="opacity-0 animate-fade-in-delay-1">
              {" "}
              Fabio
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Kallina de Paula
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3" style={{ textShadow: "0 0.05rem .5rem rgba(0, 0, 0, 0.5)" }}>
            UBC Biology | Software Developer
          </p>
          <p className="text-lg md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3" style={{ textShadow: "0 0.05rem .5rem rgba(0, 0, 0, 0.5)" }}>
            Background pic: Sunshine Coast by Fabio Kallina
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button" style={{ boxShadow: "0 0.05rem .5rem rgba(0, 0, 0, 0.3)" }}>
                View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-md text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-7 w-7 text-blue-100" />
      </div>
    </section>
  );
};
