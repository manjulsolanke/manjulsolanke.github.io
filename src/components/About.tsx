import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code, Briefcase } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "JavaScript", "HTML/CSS",
    "Tailwind CSS", "Next.js", "Express.js", "MongoDB", "PostgreSQL", "Git",
    "AWS", "Docker", "Figma", "UI/UX Design"
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "Google UX Design Certificate", issuer: "Google", year: "2022" },
    { name: "Meta Frontend Developer", issuer: "Meta", year: "2023" }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Background */}
          <Card className="card-elegant p-8">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold">Background</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                scalable applications and intuitive user interfaces. My journey began with a 
                passion for problem-solving and has evolved into expertise across the full 
                development stack.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying current with the 
                latest technologies to deliver exceptional user experiences.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="card-elegant p-8">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Computer Science</h4>
                  <p className="text-muted-foreground">University of Technology</p>
                  <p className="text-sm text-muted-foreground">2018 - 2022 | GPA: 3.8/4.0</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">UI/UX Design Bootcamp</h4>
                  <p className="text-muted-foreground">Design Institute</p>
                  <p className="text-sm text-muted-foreground">2022 | Certificate of Excellence</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card className="card-elegant p-8 mb-12">
          <CardContent className="p-0">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold">Skills & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="card-elegant p-8">
          <CardContent className="p-0">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-accent mr-3" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-accent font-medium">{cert.year}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;