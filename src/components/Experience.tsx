import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      role: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      responsibilities: [
        "Led development of enterprise web applications serving 10k+ users",
        "Mentored junior developers and conducted code reviews",
        "Architected scalable microservices using Node.js and React",
        "Improved application performance by 40% through optimization"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      id: 2,
      company: "Digital Innovations",
      role: "Frontend Developer",
      duration: "2020 - 2022",
      location: "Remote",
      type: "Full-time",
      responsibilities: [
        "Developed responsive web applications using React and Vue.js",
        "Collaborated with UX designers to implement pixel-perfect designs",
        "Integrated third-party APIs and payment gateways",
        "Maintained 95%+ code coverage through comprehensive testing"
      ],
      technologies: ["Vue.js", "React", "JavaScript", "Sass", "Jest"]
    },
    {
      id: 3,
      company: "StartupXYZ",
      role: "Junior Developer",
      duration: "2019 - 2020",
      location: "New York, NY",
      type: "Full-time",
      responsibilities: [
        "Built and maintained company website and internal tools",
        "Participated in agile development processes",
        "Learned modern web development best practices",
        "Contributed to open-source projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Git"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the amazing teams I've worked with
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                  <Building className="w-4 h-4 text-accent-foreground" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{exp.type}</Badge>
                          <Badge variant="outline">{exp.duration}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <h4 className="text-lg text-accent font-medium">{exp.company}</h4>
                        <div className="flex items-center text-muted-foreground text-sm mt-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                          <Calendar className="w-4 h-4 ml-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;