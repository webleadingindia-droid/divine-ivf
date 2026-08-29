import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/page/Breadcrumb";
import { ConsultationBanner } from "@/components/page/ConsultationBanner";
import { blogPosts, getRelatedPosts } from "@/data/blog";
import { 
  Clock, User, Calendar, Tag, ArrowLeft, ArrowRight, 
  Share2, Bookmark, Heart, Sparkles, Phone, Mail, 
  MessageCircle, Stethoscope, Syringe, Pill, 
  Baby, Calendar as CalendarIcon, Shield, Award,
  ExternalLink, ChevronRight, HelpCircle
} from "lucide-react";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  // Services data for sidebar
  const services = [
    { name: "IVF Treatment", icon: Syringe, href: "/services/ivf", color: "rose" },
    { name: "IUI Treatment", icon: Stethoscope, href: "/services/iui", color: "pink" },
    { name: "ICSI Treatment", icon: Baby, href: "/services/icsi", color: "purple" },
    { name: "Egg Donation", icon: Pill, href: "/services/egg-donation", color: "rose" },
    { name: "Fertility Evaluation", icon: CalendarIcon, href: "/services/fertility-evaluation", color: "pink" },
    { name: "Pregnancy Care", icon: Shield, href: "/services/pregnancy-care", color: "purple" },
  ];

  return (
    <>
      {/* Modern Hero - Compact */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50 py-12 md:py-16 border-b border-rose-100">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" }, 
              { label: "Blog", href: "/blog" }, 
              { label: post.title }
            ]} 
          />
          
          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-medium text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                {post.category}
              </span>
              {post.featured && (
                <span className="text-xs font-medium text-white bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-1 rounded-full shadow-lg">
                  <Sparkles className="h-3 w-3 inline mr-1" />
                  Featured
                </span>
              )}
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-ink-500">
              <span className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
                  {post.author.charAt(0)}
                </div>
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 min-w-0">
              {/* Featured Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Share & Bookmark */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-100">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full hover:bg-rose-50 transition-colors text-ink-400 hover:text-rose-600">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-rose-50 transition-colors text-ink-400 hover:text-rose-600">
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-rose-50 transition-colors text-ink-400 hover:text-rose-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                <span className="text-xs text-ink-400">{post.readTime}</span>
              </div>

              {/* Article Content */}
              <article className="prose prose-rose max-w-none">
                <p className="text-lg text-ink-600 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
                
                <h2>Understanding the Journey</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h2>Key Insights</h2>
                <ul>
                  <li>Understanding the importance of timing in fertility treatment</li>
                  <li>How to prepare for your first consultation</li>
                  <li>Common misconceptions about fertility treatments</li>
                </ul>
                
                <h2>Expert Advice</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                  qui officia deserunt mollit anim id est laborum.
                </p>
                
                <blockquote>
                  <p>
                    "Every fertility journey is unique, and with the right guidance and support, 
                    there is always hope."
                  </p>
                  <footer>— Dr. Mandavi Rai</footer>
                </blockquote>
                
                <h2>Next Steps</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                  architecto beatae vitae dicta sunt explicabo.
                </p>
              </article>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-rose-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="h-4 w-4 text-ink-400" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-rose-50 text-rose-600 text-xs font-medium rounded-full hover:bg-rose-100 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-8 pt-6 border-t border-rose-100 flex flex-wrap justify-between gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-ink-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                >
                  All Articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-900">{post.author}</h4>
                    <p className="text-sm text-ink-500 mt-1">
                      Fertility Specialist at Divine IVF, Noida. Dedicated to helping couples achieve their dream of parenthood with compassionate care and advanced treatments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-ink-900 mb-6">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-rose-50"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-[10px] font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                            {related.category}
                          </span>
                          <h4 className="font-semibold text-ink-900 group-hover:text-rose-600 transition-colors mt-1 text-sm line-clamp-2">
                            {related.title}
                          </h4>
                          <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-rose-600 group-hover:gap-2 transition-all">
                            Read More
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0 space-y-6">
              {/* Contact Card - WhatsApp, Call, Email */}
              <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl shadow-rose-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Need Help?
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  Connect with us instantly. We're here to help you.
                </p>
                
                <div className="space-y-3">
                  <a
                    href="https://wa.me/917678451808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all rounded-xl px-4 py-3 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">WhatsApp</p>
                      <p className="text-xs text-white/70">Chat with us</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="tel:+917678451808"
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all rounded-xl px-4 py-3 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Call Us</p>
                      <p className="text-xs text-white/70">+91 7678451808</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="mailto:info@divineivf.com"
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all rounded-xl px-4 py-3 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Email Us</p>
                      <p className="text-xs text-white/70">info@divineivf.com</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Quick Consultation CTA */}
              <div className="bg-white rounded-2xl p-6 border border-rose-100 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-ink-900">Book Consultation</h3>
                </div>
                <p className="text-sm text-ink-500 mb-4">
                  Schedule a personalized consultation with Dr. Mandavi Rai.
                </p>
                <Link
                  href="/book-appointment"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Our Services */}
              <div className="bg-white rounded-2xl p-6 border border-rose-100 shadow-md">
                <h3 className="font-bold text-ink-900 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-rose-500" />
                  Our Services
                </h3>
                <div className="space-y-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const colorClasses = {
                      rose: "bg-rose-50 text-rose-600 hover:bg-rose-100",
                      pink: "bg-pink-50 text-pink-600 hover:bg-pink-100",
                      purple: "bg-purple-50 text-purple-600 hover:bg-purple-100",
                    };
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all ${colorClasses[service.color as keyof typeof colorClasses]}`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-medium flex-1">{service.name}</span>
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                <h3 className="font-bold text-ink-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-rose-500" />
                  Why Divine IVF?
                </h3>
                <ul className="space-y-2 text-sm text-ink-600">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">✓</span>
                    <span>95% success rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">✓</span>
                    <span>Advanced technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">✓</span>
                    <span>Personalized care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-0.5">✓</span>
                    <span>Experienced team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}