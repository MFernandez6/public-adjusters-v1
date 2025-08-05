import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "What to Do After a Hurricane: A Complete Guide",
    excerpt:
      "Hurricane season can be devastating for property owners. Learn the essential steps to take immediately after a hurricane to protect your claim.",
    category: "Hurricane Claims",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 2,
    title: "Understanding Business Interruption Claims",
    excerpt:
      "Business interruption insurance can be complex. Discover what's covered, how to document losses, and maximize your recovery.",
    category: "Business Claims",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "Fire Damage Claims: What Insurance Companies Don't Tell You",
    excerpt:
      "Fire damage claims often involve hidden costs and complex documentation. Learn the secrets to maximizing your fire damage settlement.",
    category: "Fire Claims",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 4,
    title: "Water Damage Claims: From Assessment to Settlement",
    excerpt:
      "Water damage can be deceptive. Learn how to properly document water damage and ensure you receive full compensation.",
    category: "Water Damage",
    date: "2024-01-01",
    readTime: "8 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 5,
    title: "When to Hire a Public Adjuster: The Complete Guide",
    excerpt:
      "Not sure if you need a public adjuster? Learn when hiring a public adjuster makes sense and how to choose the right one.",
    category: "Public Adjusting",
    date: "2023-12-28",
    readTime: "4 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 6,
    title: "Storm Damage Claims: Maximizing Your Recovery",
    excerpt:
      "Storm damage can affect multiple areas of your property. Learn how to document all damage and maximize your storm claim.",
    category: "Storm Claims",
    date: "2023-12-20",
    readTime: "6 min read",
    image: "/api/placeholder/400/250",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Blog & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about insurance claims, public adjusting, and how to
            maximize your settlement. Expert insights and practical advice.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="mb-4">
                  Featured Article
                </Badge>
                <h2 className="text-3xl font-bold text-primary">
                  What to Do After a Hurricane: A Complete Guide
                </h2>
                <p className="text-lg text-muted-foreground">
                  Hurricane season can be devastating for property owners. Learn
                  the essential steps to take immediately after a hurricane to
                  protect your claim and ensure you receive the maximum
                  settlement possible.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>January 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/blog/hurricane-guide">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <span className="text-muted-foreground">Featured Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
                    <span className="text-muted-foreground">Blog Image</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <Card className="border-0 shadow-xl bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest tips, updates, and
                expert advice on insurance claims and public adjusting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Categories */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Browse by Category
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Hurricane Claims",
              "Business Claims",
              "Fire Claims",
              "Water Damage",
              "Storm Claims",
              "Public Adjusting",
              "Insurance Tips",
              "Claim Process",
            ].map((category) => (
              <Button key={category} asChild variant="outline" className="h-12">
                <Link
                  href={`/blog/category/${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {category}
                </Link>
              </Button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
