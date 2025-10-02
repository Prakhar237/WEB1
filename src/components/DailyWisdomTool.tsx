import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const DailyWisdomTool = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false]);
  const [showAffiliate, setShowAffiliate] = useState(false);

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = checked;
    setCheckedItems(newCheckedItems);
  };

  const allItemsChecked = checkedItems.every(item => item);

  const handleSparkClick = () => {
    if (allItemsChecked) {
      setShowAffiliate(true);
    }
  };

  const todoItems = [
    "Turn off all unnecessary notifications",
    "Set specific phone-free hours daily", 
    "Add to ForgetCheck.com"
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-16">
      <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-card to-secondary/20">
        <div className="grid md:grid-cols-2 min-h-[400px]">
          {/* Left Side - Daily Wisdom */}
          <div className="bg-gradient-to-br from-wisdom-card to-primary/5 p-10 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-moon-accent"></div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3 tracking-tight">Your Daily Wisdom</h2>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">(Powered by BiblePeaceFinder.com)</p>
            </div>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-moon-primary to-primary flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-moon-accent to-accent relative overflow-hidden shadow-inner">
                      <div className="absolute right-2 top-2 w-7 h-7 rounded-full bg-gradient-to-br from-moon-primary to-primary shadow-sm"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-14 h-4 bg-gradient-to-r from-moon-primary/60 to-primary/60 rounded-full blur-sm"></div>
                  </div>
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-3 bg-gradient-to-r from-moon-primary/40 to-primary/40 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <blockquote className="text-xl text-foreground leading-relaxed mb-4 font-medium italic">
                  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
                </blockquote>
                <cite className="text-sm font-semibold text-primary">- Philippians 4:6</cite>
              </div>
            </div>
            
            <p className="text-center text-foreground/90 font-medium text-lg leading-relaxed">
              Finding peace in letting go of digital distractions and trusting in God's presence.
            </p>
          </div>

          {/* Right Side - Daily Action */}
          <div className="bg-gradient-to-br from-action-card to-accent/5 p-10 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-success-green"></div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3 tracking-tight">Your Daily Action</h2>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">(Powered by ForgetCheck.com)</p>
            </div>
            
            <div className="space-y-5 mb-8">
              {todoItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors border border-border/50">
                  <Checkbox
                    id={`todo-${index}`}
                    checked={checkedItems[index]}
                    onCheckedChange={(checked) => handleCheckboxChange(index, checked as boolean)}
                    className="w-6 h-6 flex-shrink-0"
                  />
                  <label 
                    htmlFor={`todo-${index}`}
                    className="text-foreground cursor-pointer flex-1 font-medium"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>

            {todoItems[2] && (
              <div className="mt-6">
                <Button variant="outline" className="w-full py-3 text-lg font-medium border-2 hover:bg-accent/10 hover:border-accent transition-all">
                  Add to ForgetCheck.com
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Bottom Button */}
        <div className="bg-gradient-to-r from-card to-secondary/30 p-8 text-center border-t border-border/50">
          <Button 
            onClick={handleSparkClick}
            disabled={!allItemsChecked}
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-12 py-4 text-xl font-semibold rounded-full disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            ✨ Spark Your Daily Insight & Action!
          </Button>
        </div>
      </Card>

      {/* Premium Wellness Selection */}
      {showAffiliate && (
        <div className="mt-12 p-10 bg-gradient-to-br from-primary/5 via-background to-secondary/10 rounded-3xl border-0 shadow-2xl relative overflow-hidden animate-bounce-in">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10 animate-shine"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-4 animate-pulse-scale">
                Transform Your Life Today
              </h3>
              <p className="text-xl font-poppins text-muted-foreground mb-2">Choose Your Premium Wellness Journey</p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-pulse"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { 
                  emoji: "🧘", 
                  title: "Mental Peace Mastery", 
                  subtitle: "Find Inner Calm",
                  gradient: "from-blue-500/20 via-blue-400/10 to-blue-300/20",
                  border: "border-blue-400/30",
                  text: "text-blue-600",
                  shadow: "shadow-blue-500/25"
                },
                { 
                  emoji: "💜", 
                  title: "Digital Detox Elite", 
                  subtitle: "Reclaim Your Time",
                  gradient: "from-purple-500/20 via-purple-400/10 to-purple-300/20",
                  border: "border-purple-400/30",
                  text: "text-purple-600",
                  shadow: "shadow-purple-500/25"
                },
                { 
                  emoji: "💧", 
                  title: "Focus Accelerator", 
                  subtitle: "Enhance Clarity",
                  gradient: "from-cyan-500/20 via-cyan-400/10 to-cyan-300/20",
                  border: "border-cyan-400/30",
                  text: "text-cyan-600",
                  shadow: "shadow-cyan-500/25"
                }
              ].map((item, index) => (
                <div key={index} className={`group relative animate-bounce-in`} style={{animationDelay: `${index * 0.2}s`}}>
                  <Button 
                    variant="outline" 
                    className={`h-32 w-full bg-gradient-to-br ${item.gradient} hover:scale-110 border-2 ${item.border} ${item.text} font-montserrat font-semibold text-lg rounded-3xl transition-all duration-500 transform hover:rotate-2 hover:${item.shadow} shadow-xl relative overflow-hidden`}
                    onClick={() => window.open('https://www.amazon.in/AKAI-MPK-Mini-Play-MK3/dp/B09NQBDGT3/?_encoding=UTF8&pd_rd_w=8LHp9&content-id=amzn1.sym.509965a2-791b-4055-b876-943397d37ed3%3Aamzn1.symc.fc11ad14-99c1-406b-aa77-051d0ba1aade&pf_rd_p=509965a2-791b-4055-b876-943397d37ed3&pf_rd_r=MY8RBC4Y9CB19WCPAXCF&pd_rd_wg=mPu40&pd_rd_r=30e9510d-d889-40ea-b071-3b080dea34ff&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d', '_blank')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-4xl animate-bounce">{item.emoji}</span>
                      <span className="font-playfair font-bold">{item.title}</span>
                      <span className="text-sm opacity-75 font-poppins">{item.subtitle}</span>
                    </div>
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { 
                  emoji: "🧡", 
                  title: "Productivity Powerhouse", 
                  subtitle: "Natural Enhancement",
                  gradient: "from-orange-500/20 via-orange-400/10 to-orange-300/20",
                  border: "border-orange-400/30",
                  text: "text-orange-600",
                  shadow: "shadow-orange-500/25"
                },
                { 
                  emoji: "💗", 
                  title: "Mindfulness Mastery", 
                  subtitle: "Deep Awareness",
                  gradient: "from-pink-500/20 via-pink-400/10 to-pink-300/20",
                  border: "border-pink-400/30",
                  text: "text-pink-600",
                  shadow: "shadow-pink-500/25"
                }
              ].map((item, index) => (
                <div key={index} className={`group relative animate-bounce-in`} style={{animationDelay: `${(index + 3) * 0.2}s`}}>
                  <Button 
                    variant="outline" 
                    className={`h-28 w-full bg-gradient-to-br ${item.gradient} hover:scale-105 border-2 ${item.border} ${item.text} font-montserrat font-semibold text-lg rounded-3xl transition-all duration-500 transform hover:-rotate-1 hover:${item.shadow} shadow-lg relative overflow-hidden`}
                    onClick={() => window.open('https://www.amazon.in/AKAI-MPK-Mini-Play-MK3/dp/B09NQBDGT3/?_encoding=UTF8&pd_rd_w=8LHp9&content-id=amzn1.sym.509965a2-791b-4055-b876-943397d37ed3%3Aamzn1.symc.fc11ad14-99c1-406b-aa77-051d0ba1aade&pf_rd_p=509965a2-791b-4055-b876-943397d37ed3&pf_rd_r=MY8RBC4Y9CB19WCPAXCF&pd_rd_wg=mPu40&pd_rd_r=30e9510d-d889-40ea-b071-3b080dea34ff&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d', '_blank')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-3xl animate-pulse">{item.emoji}</span>
                      <span className="font-playfair font-bold">{item.title}</span>
                      <span className="text-sm opacity-75 font-poppins">{item.subtitle}</span>
                    </div>
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 gap-6 animate-bounce-in" style={{animationDelay: '1s'}}>
              <div className="group relative">
                <Button 
                  variant="outline" 
                  className="h-36 w-full bg-gradient-to-br from-emerald-500/20 via-green-400/10 to-teal-300/20 hover:scale-105 border-2 border-emerald-400/40 text-emerald-700 font-montserrat font-bold text-xl rounded-3xl transition-all duration-700 transform hover:rotate-1 hover:shadow-emerald-500/30 shadow-2xl relative overflow-hidden"
                  onClick={() => window.open('https://www.amazon.in/AKAI-MPK-Mini-Play-MK3/dp/B09NQBDGT3/?_encoding=UTF8&pd_rd_w=8LHp9&content-id=amzn1.sym.509965a2-791b-4055-b876-943397d37ed3%3Aamzn1.symc.fc11ad14-99c1-406b-aa77-051d0ba1aade&pf_rd_p=509965a2-791b-4055-b876-943397d37ed3&pf_rd_r=MY8RBC4Y9CB19WCPAXCF&pd_rd_wg=mPu40&pd_rd_r=30e9510d-d889-40ea-b071-3b080dea34ff&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d', '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-5xl animate-float">🌱</span>
                    <span className="font-playfair font-bold text-center">Complete Digital Wellness Transformation</span>
                    <span className="text-base opacity-80 font-poppins text-center">Restore Balance • Boost Well-being • Transform Your Life</span>
                  </div>
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm font-poppins text-muted-foreground/70 italic">✨ Premium products curated for your wellness journey</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyWisdomTool;