import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { ChannelCard } from '@/components/ui/channel-card';
import { TopChannelsCarousel } from '@/components/ui/top-channels-carousel';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap, 
  Star, 
  Shield, 
  Crown,
  Sparkles
} from 'lucide-react';
import heroImage from '@/assets/hero-mystic.jpg';

const Home = () => {
  const topChannels = [
    {
      name: "Dragon's Eye",
      price: "$25/mo",
      winrate: 94,
      assets: ["XAU/USD", "EUR/USD"],
      lastSignal: "2 hours ago",
      description: "Elite gold trading signals with ancient wisdom",
      isPopular: true,
      platform: 'telegram' as const,
      spotsLeft: 3,
    },
    {
      name: "Shadow Strike",
      price: "$20/mo",
      winrate: 87,
      assets: ["GBP/USD", "USD/JPY"],
      lastSignal: "45 min ago",
      description: "Swift forex strikes in the shadows",
      platform: 'discord' as const,
    },
    {
      name: "Mystic Flow",
      price: "$18/mo",
      winrate: 91,
      assets: ["EUR/GBP", "AUD/USD"],
      lastSignal: "1 hour ago",
      description: "Flowing with market currents",
      platform: 'telegram' as const,
      spotsLeft: 1,
    },
  ];

  const features = [
    {
      icon: Crown,
      title: "200+ Premium Channels",
      description: "Access to exclusive signals from master traders worldwide",
    },
    {
      icon: Users,
      title: "Group Buy Power",
      description: "Join forces with other traders for discounted access",
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Lightning-fast signal delivery via Telegram & Discord",
    },
    {
      icon: Shield,
      title: "Verified Performance",
      description: "All channels tracked and verified for transparency",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-portal" />
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full pulse-glow"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                backgroundColor: i % 3 === 0 ? 'hsl(var(--mystic-purple))' : 
                                i % 3 === 1 ? 'hsl(var(--gold))' : 'hsl(var(--crimson))',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 4 + 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-mystic-purple/20 text-mystic-purple border-mystic-purple/30">
            <Sparkles className="h-3 w-3 mr-1" />
            Premium Trading Platform
          </Badge>
          
          <div className="flex items-center justify-center mb-4">
            <div className="ninja-float mr-4">
              🥷
            </div>
            <h1 className="text-5xl md:text-7xl font-cinzel font-bold shimmer-text">
              Unlock the Forbidden Signals
            </h1>
            <div className="ninja-float ml-4">
              ⚡
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access 200+ channels through <span className="text-accent font-semibold">solo mastery</span>, 
            <span className="text-mystic-purple font-semibold"> custom bundles</span>, or 
            <span className="text-crimson font-semibold"> group orders</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/channels">
              <Button size="lg" className="bg-gradient-mystic hover:bg-mystic-purple-dark spark-trail btn-ripple">
                <TrendingUp className="h-5 w-5 mr-2" />
                Browse Channels
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/group-buy">
              <Button size="lg" variant="outline" className="gold-glow border-accent text-accent hover:bg-accent/20 btn-ripple">
                <Users className="h-5 w-5 mr-2" />
                Join a Group Buy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mystic-text-glow">
              Why Choose Mystic Signals?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Step into a realm where ancient wisdom meets modern trading technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="floating-card border-mystic-purple/30 bg-card/50">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-gradient-mystic rounded-lg flex items-center justify-center mystic-glow">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performing Channels */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mystic-text-glow">
              🔥 Top Performing Channels
            </h2>
            <p className="text-muted-foreground text-lg">
              Elite signals from master traders with proven track records
            </p>
          </div>

          <TopChannelsCarousel channels={topChannels} />

          <div className="text-center mt-12">
            <Link to="/channels">
              <Button size="lg" variant="outline" className="mystic-glow border-mystic-purple text-mystic-purple hover:bg-mystic-purple/20">
                View All Channels
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bundle Builder Teaser */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="floating-card border-accent/30 bg-gradient-to-r from-card/90 to-accent/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-gold opacity-5" />
            <CardContent className="relative p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center gold-glow">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 gold-text-glow">
                🧩 Custom Bundle Builder
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create your perfect signal collection. Mix and match channels, get volume discounts, 
                and build your ultimate trading arsenal.
              </p>
              <Link to="/channels">
                <Button size="lg" className="gold-glow bg-gradient-gold text-black hover:bg-gold-dark">
                  Start Building
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Group Buy Advantages */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-crimson/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🤝 <span className="text-crimson">United We Trade</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join group buys to access premium channels at fraction of the cost. 
            Community power unlocks exclusive deals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Up to 80% OFF", desc: "Massive savings through group power" },
              { title: "Instant Access", desc: "Get signals immediately after payment" },
              { title: "Verified Groups", desc: "Safe and secure group buying" },
            ].map((item) => (
              <Card key={item.title} className="border-crimson/30 bg-crimson/5">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-lg text-crimson mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link to="/group-buy">
            <Button size="lg" className="crimson-glow bg-gradient-crimson hover:bg-crimson">
              <Users className="h-5 w-5 mr-2" />
              Explore Group Buys
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;