import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      summary: "Learn the best practices for structuring and scaling React applications for enterprise use cases.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "JavaScript", "Architecture"]
    },
    {
      id: 2,
      title: "Modern CSS Techniques for Responsive Design",
      summary: "Explore the latest CSS features and techniques for creating beautiful, responsive web layouts.",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Responsive", "Design"]
    },
    {
      id: 3,
      title: "TypeScript Best Practices in 2024",
      summary: "Discover advanced TypeScript patterns and practices that will make your code more maintainable.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "TypeScript",
      tags: ["TypeScript", "Best Practices", "Development"]
    },
    {
      id: 4,
      title: "Building a Design System with Tailwind CSS",
      summary: "Step-by-step guide to creating a comprehensive design system using Tailwind CSS and React components.",
      date: "2023-12-25",
      readTime: "12 min read",
      category: "Design System",
      tags: ["Tailwind", "Design System", "UI/UX"]
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">Blog</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className={`card-elegant group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className={`font-semibold mb-3 group-hover:text-accent transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;