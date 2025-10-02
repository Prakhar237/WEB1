import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, Calendar, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/phone-addiction-hero.jpg';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import img2 from '@/assets/phoneaway-2.jpg';
import img3 from '@/assets/phoneaway-3.jpg';

const BlogArticle = () => {
  return (
    <div className="w-full space-y-8">
      {/* Main Article */}
      <Card className="overflow-hidden border-0 shadow-2xl rounded-none">
        {/* Hero Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={heroImage} 
            alt="PhoneAway app limiting screen time" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className="bg-primary/90 text-primary-foreground mb-3">App Spotlight</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              PhoneAway: Limit Screen Time and Reclaim Your Focus
            </h1>
          </div>
        </div>

        <article className="p-8">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Editorial Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>4 min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Lead paragraph */}
            <p className="text-xl leading-relaxed text-foreground/90 mb-8 font-medium">
              PhoneAway is a simple, elegant digital wellness app that helps you set healthy screen time limits,
              build focus habits, and reclaim more hours in your day—without harsh lockouts or guilt.
            </p>

            <div className="not-prose my-8">
              <div className="mx-auto w-full max-w-2xl">
                <Carousel opts={{ loop: true, align: 'start' }} className="w-full">
                  <CarouselContent>
                    <CarouselItem className="basis-full">
                      <AspectRatio ratio={1}>
                        <img src={heroImage} alt="PhoneAway app preview - hero" className="h-full w-full object-cover rounded-xl border border-border" loading="lazy" />
                      </AspectRatio>
                    </CarouselItem>
                    <CarouselItem className="basis-full">
                      <AspectRatio ratio={1}>
                        <img src={img2} alt="PhoneAway app preview - focus mode" className="h-full w-full object-cover rounded-xl border border-border" loading="lazy" />
                      </AspectRatio>
                    </CarouselItem>
                    <CarouselItem className="basis-full">
                      <AspectRatio ratio={1}>
                        <img src={img3} alt="PhoneAway app preview - screen time insights" className="h-full w-full object-cover rounded-xl border border-border" loading="lazy" />
                      </AspectRatio>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
                </Carousel>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">What is PhoneAway?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              PhoneAway gently guides you toward mindful phone use. Set goals, start a focus session, and let the app
              fade distractions while keeping essential tools available. Beautiful insights keep you motivated over time.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Core features</h2>
            <ul className="space-y-2 text-foreground mb-6">
              <li>Smart daily limits with flexible grace periods</li>
              <li>App category blocks during focus sessions</li>
              <li>Scheduled downtime and a soothing bedtime mode</li>
              <li>Gentle nudge reminders and weekly progress insights</li>
              <li>Emergency bypass so critical apps still work</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">How it works</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Start with small goals. Choose your quiet hours, set a focus timer, and PhoneAway smoothly dims the noise—
              so you can be present for what matters. Over time, your usage trends and milestones become a source of
              encouragement, not pressure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Why it matters</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Healthy phone habits compound quickly. A few intentional limits can free up attention for family, deep work,
              and rest—without completely locking you out of what you need.
            </p>
            <ul className="space-y-2 text-foreground mb-6">
              <li>Reduce doomscrolling and idle pickups</li>
              <li>Protect deep‑work time with quick focus sessions</li>
              <li>Sleep better with a gentle wind‑down routine</li>
            </ul>

            <div className="not-prose mt-8">
              <Button asChild size="lg" className="group">
                <a href="https://preview--phoneaway-glass-peek.lovable.app/articles/phoneaway" aria-label="Read the full PhoneAway article" title="Read the full PhoneAway article">
                  Read more
                  <ArrowRight className="ml-1 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </article>
      </Card>

      {/* Blog Preview */}
      <Card className="p-8 bg-gradient-to-br from-secondary to-accent/10 border border-accent/20 hover:shadow-lg transition-all cursor-pointer group">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">Next Article</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                <span>5 min read</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              Break Phone Addiction in 5 Ways
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Discover practical, proven strategies to regain control over your digital life and 
              find peace in a connected world. From digital boundaries to mindful practices.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Badge variant="outline" className="mr-3">Digital Wellness</Badge>
              <span>Coming Soon</span>
            </div>
          </div>
          <div className="ml-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                5
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogArticle;