import { DailySparkCarousel } from '@/components/DailySparkCarousel';
import BlogArticle from '@/components/BlogArticle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Blog Header */}
      <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white">
        {/* Top Utility Bar */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between text-xs md:text-sm opacity-90">
            <a
              href="https://phoneaddictiongone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-white/30 hover:decoration-white"
            >
              Phoneaddiction.com
            </a>
            <div className="flex items-center gap-2">
              <span className="opacity-90">powered by</span>
              <a
                href="https://promotionocean.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-white/30 hover:decoration-white"
              >
                promotionocean.com
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center">
            <p className="uppercase tracking-widest text-white/80 text-sm md:text-base mb-3">
              Breaking free from digital dependency through mindful wellness practices
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              PHONE ADDICTION
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Breaking free from digital dependency through mindful wellness practices
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Daily Spark Tool Section */}
        <div className="mb-12">
          <DailySparkCarousel />
        </div>
      </div>

      <section aria-label="PhoneAway Article" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <BlogArticle />
      </section>
    </div>
  );
};

export default Index;
