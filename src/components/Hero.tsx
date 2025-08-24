import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import headshotImage from "@/assets/professional-headshot.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-accent font-medium mb-2">Hello, I'm</p>
              <h1 className="gradient-text mb-4">
                Manjul Solanke
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Full Stack Developer & UI/UX Designer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              I craft digital experiences that blend beautiful design with robust functionality. 
              Passionate about creating innovative solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="btn-gradient"
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                <Mail className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
              
              <Button variant="ghost" className="group">
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden card-elegant">
                <img
                  src={headshotImage}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-accent-light rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full opacity-30 animate-pulse delay-75"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;