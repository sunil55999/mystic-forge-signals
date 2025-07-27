import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users, 
  Clock, 
  DollarSign, 
  Star, 
  Shield, 
  Zap,
  TrendingUp,
  Crown,
  Timer
} from 'lucide-react';

const GroupBuy = () => {
  const groupDeals = [
    {
      id: 1,
      name: "Elite Traders Mega Bundle",
      description: "Premium signals from top-performing channels",
      originalPrice: 250,
      groupPrice: 45,
      discount: 82,
      slotsTotal: 20,
      slotsFilled: 17,
      timeLeft: "2 days 14 hours",
      channels: ["Dragon's Eye", "Phoenix Rising", "Thunder Bolt", "Mystic Flow", "Shadow Strike"],
      organizer: "TraderMaster",
      winRate: 94,
      participants: [
        { name: "Alex", avatar: "A" },
        { name: "Sarah", avatar: "S" },
        { name: "Mike", avatar: "M" },
        { name: "Lisa", avatar: "L" },
      ],
      isHot: true,
    },
    {
      id: 2,
      name: "Forex Masters Collection",
      description: "Professional forex signals for serious traders",
      originalPrice: 180,
      groupPrice: 35,
      discount: 81,
      slotsTotal: 15,
      slotsFilled: 9,
      timeLeft: "5 days 8 hours",
      channels: ["Shadow Strike", "Mystic Flow", "Zen Master", "Currency King"],
      organizer: "ForexPro",
      winRate: 89,
      participants: [
        { name: "John", avatar: "J" },
        { name: "Emma", avatar: "E" },
        { name: "David", avatar: "D" },
      ],
      isHot: false,
    },
    {
      id: 3,
      name: "Crypto Signals Vault",
      description: "Exclusive cryptocurrency trading signals",
      originalPrice: 320,
      groupPrice: 55,
      discount: 83,
      slotsTotal: 25,
      slotsFilled: 21,
      timeLeft: "1 day 6 hours",
      channels: ["Phoenix Rising", "Crypto Wizard", "Bitcoin Oracle", "Ethereum Elite", "Alt Coin Master"],
      organizer: "CryptoKing",
      winRate: 91,
      participants: [
        { name: "Tom", avatar: "T" },
        { name: "Anna", avatar: "A" },
        { name: "Chris", avatar: "C" },
        { name: "Maria", avatar: "M" },
        { name: "Ben", avatar: "B" },
      ],
      isHot: true,
    },
    {
      id: 4,
      name: "Scalping Specialists",
      description: "High-frequency trading signals for scalpers",
      originalPrice: 150,
      groupPrice: 28,
      discount: 81,
      slotsTotal: 12,
      slotsFilled: 4,
      timeLeft: "7 days 12 hours",
      channels: ["Quick Strike", "Rapid Fire", "Speed Demon"],
      organizer: "ScalpMaster",
      winRate: 86,
      participants: [
        { name: "Ryan", avatar: "R" },
        { name: "Kelly", avatar: "K" },
      ],
      isHot: false,
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Save up to 85%",
      description: "Access premium channels at fraction of regular price",
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Get signals immediately after successful group completion",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Protected payments and verified group organizers",
    },
    {
      icon: Users,
      title: "Community Power",
      description: "Join forces with fellow traders for better deals",
    },
  ];

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-gradient-crimson";
    if (percentage >= 60) return "bg-gradient-gold";
    return "bg-gradient-mystic";
  };

  const getTimeLeftColor = (timeLeft: string) => {
    if (timeLeft.includes("1 day") || timeLeft.includes("2 day")) return "text-crimson";
    if (timeLeft.includes("3 day") || timeLeft.includes("4 day")) return "text-accent";
    return "text-mystic-purple";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-portal">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-crimson/20 text-crimson border-crimson/30">
            <Users className="h-3 w-3 mr-1" />
            Group Buy Deals
          </Badge>
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-6 shimmer-text">
            🤝 United We Trade
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join forces with fellow traders to unlock premium signals at unbeatable prices. 
            Community power meets trading excellence.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 mystic-text-glow">
            Why Group Buy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="floating-card border-mystic-purple/30 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-mystic rounded-lg flex items-center justify-center mystic-glow">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Active Group Deals */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold mystic-text-glow">
              🔥 Active Group Deals
            </h2>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              {groupDeals.length} Live Deals
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {groupDeals.map((deal) => {
              const progressPercentage = (deal.slotsFilled / deal.slotsTotal) * 100;
              const slotsLeft = deal.slotsTotal - deal.slotsFilled;
              
              return (
                <Card 
                  key={deal.id} 
                  className={`floating-card overflow-hidden ${
                    deal.isHot ? 'border-crimson/50 bg-gradient-to-b from-card to-crimson/5' : 'border-mystic-purple/30'
                  }`}
                >
                  {deal.isHot && (
                    <div className="bg-gradient-crimson px-4 py-2 text-center">
                      <span className="text-white font-bold text-sm">🔥 HOT DEAL - FILLING FAST</span>
                    </div>
                  )}
                  
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2">{deal.name}</h3>
                        <p className="text-muted-foreground text-sm">{deal.description}</p>
                      </div>
                      <Badge className={`${getTimeLeftColor(deal.timeLeft)} border-current/30`}>
                        <Timer className="h-3 w-3 mr-1" />
                        {deal.timeLeft}
                      </Badge>
                    </div>

                    {/* Price Comparison */}
                    <div className="bg-background/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Regular Price</span>
                        <span className="line-through text-muted-foreground">${deal.originalPrice}/mo</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Group Price</span>
                        <span className="text-2xl font-bold text-crimson">${deal.groupPrice}/mo</span>
                      </div>
                      <Badge className="bg-gradient-gold text-black">
                        <Star className="h-3 w-3 mr-1" />
                        {deal.discount}% OFF
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Progress */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Spots filled</span>
                        <span className="font-medium">{deal.slotsFilled}/{deal.slotsTotal}</span>
                      </div>
                      <div className="w-full bg-background/50 rounded-full h-3">
                        <div 
                          className={`${getProgressColor(progressPercentage)} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {slotsLeft} spots remaining
                      </p>
                    </div>

                    {/* Channels */}
                    <div className="space-y-2">
                      <span className="text-sm font-medium">Included Channels</span>
                      <div className="flex flex-wrap gap-1">
                        {deal.channels.map((channel) => (
                          <Badge 
                            key={channel} 
                            variant="secondary" 
                            className="text-xs bg-mystic-purple/20 text-mystic-purple border-mystic-purple/30"
                          >
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Win Rate</p>
                        <p className="font-bold text-lg text-mystic-purple">{deal.winRate}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Organizer</p>
                        <div className="flex items-center justify-center space-x-1">
                          <Crown className="h-3 w-3 text-accent" />
                          <p className="font-bold text-sm">{deal.organizer}</p>
                        </div>
                      </div>
                    </div>

                    {/* Participants */}
                    <div className="space-y-2">
                      <span className="text-sm font-medium">Recent Participants</span>
                      <div className="flex items-center space-x-2">
                        {deal.participants.slice(0, 4).map((participant, index) => (
                          <Avatar key={index} className="h-8 w-8 border-2 border-mystic-purple/30">
                            <AvatarFallback className="text-xs bg-mystic-purple/20">
                              {participant.avatar}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        {deal.participants.length > 4 && (
                          <span className="text-xs text-muted-foreground">
                            +{deal.participants.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Join Button */}
                    <Button 
                      className={`w-full ${
                        deal.isHot 
                          ? 'crimson-glow bg-gradient-crimson hover:bg-crimson' 
                          : 'mystic-glow bg-gradient-mystic hover:bg-mystic-purple-dark'
                      }`}
                      disabled={slotsLeft === 0}
                    >
                      {slotsLeft === 0 ? (
                        <>Group Full</>
                      ) : (
                        <>
                          <Users className="h-4 w-4 mr-2" />
                          Join Group (${deal.groupPrice}/mo)
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 mystic-text-glow">
            How Group Buy Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Join a Group",
                description: "Choose a group deal and secure your spot. Payment is held securely until group fills.",
              },
              {
                step: "2", 
                title: "Group Fills Up",
                description: "Once all spots are filled, the group buy is activated and payments are processed.",
              },
              {
                step: "3",
                title: "Get Access",
                description: "Instantly receive access to all channels in the bundle at the discounted group price.",
              },
            ].map((step) => (
              <div key={step.step} className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-mystic rounded-full flex items-center justify-center mystic-glow">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroupBuy;