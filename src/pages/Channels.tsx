import { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { ChannelCard } from '@/components/ui/channel-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  User, 
  Package, 
  Users, 
  ShoppingCart,
  Star,
  Zap
} from 'lucide-react';

const Channels = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [bundleItems, setBundleItems] = useState<string[]>([]);

  const channels = [
    {
      name: "Dragon's Eye",
      price: "$25/mo",
      winrate: 94,
      assets: ["XAU/USD", "EUR/USD"],
      lastSignal: "2 hours ago",
      description: "Elite gold trading signals with ancient wisdom",
      isPopular: true,
    },
    {
      name: "Shadow Strike",
      price: "$20/mo",
      winrate: 87,
      assets: ["GBP/USD", "USD/JPY"],
      lastSignal: "45 min ago",
      description: "Swift forex strikes in the shadows",
    },
    {
      name: "Mystic Flow",
      price: "$18/mo",
      winrate: 91,
      assets: ["EUR/GBP", "AUD/USD"],
      lastSignal: "1 hour ago",
      description: "Flowing with market currents",
    },
    {
      name: "Phoenix Rising",
      price: "$30/mo",
      winrate: 96,
      assets: ["BTC/USD", "ETH/USD"],
      lastSignal: "30 min ago",
      description: "Crypto signals from the ashes of volatility",
      isPopular: true,
    },
    {
      name: "Thunder Bolt",
      price: "$22/mo",
      winrate: 89,
      assets: ["USD/CAD", "NZD/USD"],
      lastSignal: "1.5 hours ago",
      description: "Lightning-fast scalping signals",
    },
    {
      name: "Zen Master",
      price: "$15/mo",
      winrate: 85,
      assets: ["EUR/USD", "GBP/JPY"],
      lastSignal: "3 hours ago",
      description: "Balanced approach to forex trading",
    },
  ];

  const groupBuyDeals = [
    {
      name: "Elite Traders Bundle",
      originalPrice: "$150/mo",
      groupPrice: "$30/mo",
      slotsLeft: 3,
      totalSlots: 10,
      timeLeft: "2 days",
      channels: ["Dragon's Eye", "Phoenix Rising", "Thunder Bolt"],
    },
    {
      name: "Forex Masters Pack",
      originalPrice: "$85/mo",
      groupPrice: "$18/mo",
      slotsLeft: 7,
      totalSlots: 15,
      timeLeft: "5 days",
      channels: ["Shadow Strike", "Mystic Flow", "Zen Master"],
    },
  ];

  const addToBundle = (channelName: string) => {
    if (!bundleItems.includes(channelName)) {
      setBundleItems([...bundleItems, channelName]);
    }
  };

  const removeFromBundle = (channelName: string) => {
    setBundleItems(bundleItems.filter(item => item !== channelName));
  };

  const calculateBundleDiscount = (count: number) => {
    if (count >= 5) return 25;
    if (count >= 3) return 15;
    if (count >= 2) return 10;
    return 0;
  };

  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    channel.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-portal">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-6 shimmer-text">
            Channels & Access Options
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="text-mystic-purple font-semibold">Solo.</span>{' '}
            <span className="text-accent font-semibold">Custom.</span>{' '}
            <span className="text-crimson font-semibold">United.</span>{' '}
            Choose your trading path.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search channels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-mystic-purple/30 focus:border-mystic-purple"
              />
            </div>
            <Button variant="outline" className="border-mystic-purple/50 hover:bg-mystic-purple/20">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="solo" className="space-y-8">
            <TabsList className="grid w-full md:w-fit grid-cols-3 bg-card border border-mystic-purple/30">
              <TabsTrigger value="solo" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Solo Channels</span>
              </TabsTrigger>
              <TabsTrigger value="bundle" className="flex items-center space-x-2">
                <Package className="h-4 w-4" />
                <span>Bundle Builder</span>
              </TabsTrigger>
              <TabsTrigger value="group" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Group Buy</span>
              </TabsTrigger>
            </TabsList>

            {/* Solo Channels */}
            <TabsContent value="solo" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredChannels.map((channel) => (
                  <ChannelCard 
                    key={channel.name} 
                    {...channel}
                    onAddToBundle={() => addToBundle(channel.name)}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Bundle Builder */}
            <TabsContent value="bundle" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Available Channels */}
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-2xl font-bold mystic-text-glow">Available Channels</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredChannels.map((channel) => (
                      <ChannelCard 
                        key={channel.name} 
                        {...channel}
                        onAddToBundle={() => addToBundle(channel.name)}
                      />
                    ))}
                  </div>
                </div>

                {/* Bundle Cart */}
                <div className="space-y-6">
                  <Card className="floating-card border-accent/30 bg-gradient-to-b from-card to-accent/5">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <ShoppingCart className="h-5 w-5 text-accent" />
                        <h3 className="font-bold text-lg">Your Bundle</h3>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {bundleItems.length === 0 ? (
                        <p className="text-muted-foreground text-sm">
                          Add channels to build your custom bundle
                        </p>
                      ) : (
                        <>
                          {bundleItems.map((item) => (
                            <div key={item} className="flex items-center justify-between p-2 bg-background/50 rounded">
                              <span className="text-sm">{item}</span>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeFromBundle(item)}
                                className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                              >
                                ×
                              </Button>
                            </div>
                          ))}
                          
                          {bundleItems.length >= 2 && (
                            <div className="pt-4 border-t border-accent/20">
                              <Badge className="bg-gradient-gold text-black">
                                <Star className="h-3 w-3 mr-1" />
                                {calculateBundleDiscount(bundleItems.length)}% Bundle Discount
                              </Badge>
                            </div>
                          )}
                          
                          <Button className="w-full mystic-glow bg-gradient-mystic">
                            <Zap className="h-4 w-4 mr-2" />
                            Create Bundle
                          </Button>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Group Buy */}
            <TabsContent value="group" className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mystic-text-glow">Active Group Buy Deals</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {groupBuyDeals.map((deal) => (
                    <Card key={deal.name} className="floating-card border-crimson/30 bg-gradient-to-b from-card to-crimson/5">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-lg">{deal.name}</h4>
                            <p className="text-muted-foreground text-sm">
                              {deal.channels.join(' • ')}
                            </p>
                          </div>
                          <Badge className="bg-crimson/20 text-crimson border-crimson/30">
                            {deal.timeLeft} left
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground">Regular Price</p>
                            <p className="line-through text-muted-foreground">{deal.originalPrice}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">Group Price</p>
                            <p className="text-xl font-bold text-crimson">{deal.groupPrice}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Spots filled</span>
                            <span>{deal.totalSlots - deal.slotsLeft}/{deal.totalSlots}</span>
                          </div>
                          <div className="w-full bg-background/50 rounded-full h-2">
                            <div 
                              className="bg-gradient-crimson h-2 rounded-full transition-all"
                              style={{ width: `${((deal.totalSlots - deal.slotsLeft) / deal.totalSlots) * 100}%` }}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {deal.slotsLeft} spots remaining
                          </p>
                        </div>
                        
                        <Button className="w-full crimson-glow bg-gradient-crimson hover:bg-crimson">
                          <Users className="h-4 w-4 mr-2" />
                          Join Group ({deal.groupPrice})
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Channels;