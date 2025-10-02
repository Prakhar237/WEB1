import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DailyWisdomTool from '@/components/DailyWisdomTool';
import youtubeThumbnail from '@/assets/youtube-thumbnail.jpg';

export function DailySparkCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={prevSlide}
        aria-label="Previous content"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={nextSlide}
        aria-label="Next content"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Content */}
      <div className="overflow-hidden">
        {currentSlide === 0 && (
          <div className="animate-in fade-in-0 duration-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-primary">Your Daily Spark Tool</h2>
            </div>
            <DailyWisdomTool />
          </div>
        )}
        
        {currentSlide === 1 && (
          <div className="animate-in fade-in-0 duration-300 flex justify-center items-center min-h-[400px] bg-gradient-to-br from-background to-muted/20 rounded-lg border">
            <div className="w-full max-w-4xl px-8">
              <h3 className="text-2xl font-bold text-center mb-6">Featured Video</h3>
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/BfV5Ga9ffPE"
                  title="Phone Addiction Video"
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
        
        {currentSlide === 2 && (
          <div className="animate-in fade-in-0 duration-300 flex justify-center items-center min-h-[400px] bg-gradient-to-br from-background to-muted/20 rounded-lg border">
            <div className="w-full max-w-4xl px-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Image Preview</h3>
              <div className="relative inline-block">
                <img
                  src={youtubeThumbnail}
                  alt="Phone Addiction Video Thumbnail"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}