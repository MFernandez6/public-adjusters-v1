"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const blogPosts = [
  {
    id: 1,
    titleKey: "blog.posts.hurricaneGuide.title",
    excerptKey: "blog.posts.hurricaneGuide.excerpt",
    categoryKey: "blog.category.hurricaneClaims",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 2,
    titleKey: "blog.posts.businessInterruption.title",
    excerptKey: "blog.posts.businessInterruption.excerpt",
    categoryKey: "blog.category.businessClaims",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    titleKey: "blog.posts.fireDamage.title",
    excerptKey: "blog.posts.fireDamage.excerpt",
    categoryKey: "blog.category.fireClaims",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 4,
    titleKey: "blog.posts.waterDamage.title",
    excerptKey: "blog.posts.waterDamage.excerpt",
    categoryKey: "blog.category.waterDamage",
    date: "2024-01-01",
    readTime: "8 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 5,
    titleKey: "blog.posts.hireAdjuster.title",
    excerptKey: "blog.posts.hireAdjuster.excerpt",
    categoryKey: "blog.category.publicAdjusting",
    date: "2023-12-28",
    readTime: "4 min read",
    image: "/api/placeholder/400/250",
  },
  {
    id: 6,
    titleKey: "blog.posts.stormDamage.title",
    excerptKey: "blog.posts.stormDamage.excerpt",
    categoryKey: "blog.category.stormClaims",
    date: "2023-12-20",
    readTime: "6 min read",
    image: "/api/placeholder/400/250",
  },
];

export default function BlogPage() {
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty(
        "--scroll-offset",
        scrollY.toString()
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image with Parallax */}
      <div className="fixed inset-0 z-0 parallax-bg">
        <Image
          src="/birdseye.jpg"
          alt="Aerial view background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content with Parallax Effect */}
      <div className="relative z-10 content-above-bg">
        <div className="py-20">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center space-y-6 mb-12 animate-fade-in-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                {t("blog.title")}
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                {t("blog.subtitle")}
              </p>
            </div>

            {/* Categories */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-white animate-fade-in-up animation-delay-100">
                {t("blog.browseByCategory")}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "blog.category.hurricaneClaims",
                  "blog.category.businessClaims",
                  "blog.category.fireClaims",
                  "blog.category.waterDamage",
                  "blog.category.stormClaims",
                  "blog.category.publicAdjusting",
                  "blog.category.insuranceTips",
                  "blog.category.claimProcess",
                ].map((categoryKey, index) => {
                  const category = t(categoryKey);
                  return (
                    <Button
                      key={categoryKey}
                      asChild
                      size="lg"
                      variant="secondary"
                      className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: `${(index + 2) * 100}ms` }}
                    >
                      <Link
                        href={`/blog/category/${category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {category}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </section>

            {/* Featured Post */}
            <section className="mb-16">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 animate-fade-in-up animation-delay-100">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <Badge variant="secondary" className="mb-4">
                      {t("blog.featuredArticle")}
                    </Badge>
                    <h2 className="text-3xl font-bold text-white">
                      {t("blog.featuredPostTitle")}
                    </h2>
                    <p className="text-lg text-gray-200">
                      {t("blog.featuredPostExcerpt")}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-200">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span>January 15, 2024</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-orange-400 drop-shadow-lg" />
                        <span>5 {t("blog.minRead")}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Link href="/blog/hurricane-guide">
                        {t("blog.readFullArticle")}
                        <ArrowRight className="h-4 w-4 ml-2 text-orange-400 drop-shadow-lg" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg h-64 flex items-center justify-center border border-white/20">
                    <span className="text-gray-200">Featured Image</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Blog Posts Grid */}
            <section>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <Card
                    key={post.id}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="bg-white/20 backdrop-blur-md rounded-lg h-48 flex items-center justify-center mb-4 border border-white/20">
                        <span className="text-gray-200">
                          {t("blog.blogImage")}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="outline"
                          className="border-white/20 text-white"
                        >
                          {t(post.categoryKey)}
                        </Badge>
                        <div className="flex items-center space-x-2 text-sm text-gray-200">
                          <Clock className="h-3 w-3 text-orange-400 drop-shadow-lg" />
                          <span>
                            {post.readTime.replace(
                              "min read",
                              t("blog.minRead")
                            )}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight text-white">
                        {t(post.titleKey)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-200 mb-4">{t(post.excerptKey)}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-200">
                          <Calendar className="h-3 w-3 text-orange-400 drop-shadow-lg" />
                          <span>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-gray-800"
                        >
                          <Link href={`/blog/${post.id}`}>
                            {t("common.readMore")}
                            <ArrowRight className="h-3 w-3 ml-1 text-orange-400 drop-shadow-lg" />
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
              <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in-up animation-delay-600">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {t("blog.stayUpdated")}
                  </h3>
                  <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                    {t("blog.newsletterDesc")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder={t("blog.emailPlaceholder")}
                      className="flex-1 px-4 py-2 rounded-md bg-white/20 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      size="lg"
                    >
                      {t("blog.subscribe")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
