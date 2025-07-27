import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Crown,
  TrendingUp,
  Clock,
  Bell,
  CreditCard,
  Package,
  Zap,
  Star,
  Activity,
  BarChart3,
  Calendar,
  Users
} from 'lucide-react';

const Dashboard = () => {
  const subscriptions = [
    {
      name: "Dragon's Eye",
      status: "Active",
      renewsIn: "15 days",
      winRate: 94,
      totalSignals: 47,
      color: "mystic",
    },
    {
      name: "Shadow Strike",
      status: "Active", 
      renewsIn: "8 days",
      winRate: 87,
      totalSignals: 32,
      color: "crimson",
    },
    {
      name: "Elite Bundle",
      status: "Active",
      renewsIn: "22 days", 
      winRate: 91,
      totalSignals: 89,
      color: "gold",
    },
  ];

  const recentSignals = [
    {
      channel: "Dragon's Eye",
      pair: "XAU/USD",
      type: "BUY",
      time: "2 hours ago",
      status: "Running",
      profit: "+45 pips",
    },
    {
      channel: "Shadow Strike",
      pair: "EUR/USD", 
      type: "SELL",
      time: "4 hours ago",
      status: "Closed",
      profit: "+23 pips",
    },
    {
      channel: "Phoenix Rising",
      pair: "BTC/USD",
      type: "BUY",
      time: "6 hours ago", 
      status: "Closed",
      profit: "+127 pips",
    },
  ];

  const aiSuggestions = [
    {
      title: "Crypto Masters Bundle",
      description: "Based on your XAU/USD performance",
      discount: "20% OFF",
      channels: ["Phoenix Rising", "Crypto Wizard", "Bitcoin Oracle"],
    },
    {
      title: "Scalping Pro Pack",
      description: "Perfect for your trading style",
      discount: "15% OFF", 
      channels: ["Thunder Bolt", "Quick Strike", "Rapid Fire"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-portal">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-cinzel font-bold mystic-text-glow mb-2">
                Welcome back, Master Trader
              </h1>
              <p className="text-muted-foreground">
                Your trading sanctum awaits. Monitor your signals and expand your arsenal.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="mystic-glow rounded-lg p-4 bg-gradient-mystic">
                <Crown className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Active Subscriptions", value: "3", icon: Package, color: "mystic" },
            { label: "Total Signals", value: "168", icon: Activity, color: "gold" },
            { label: "Win Rate", value: "91%", icon: TrendingUp, color: "crimson" },
            { label: "Profit This Month", value: "+234 pips", icon: BarChart3, color: "mystic" },
          ].map((stat) => (
            <Card key={stat.label} className="floating-card border-mystic-purple/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold mystic-text-glow">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    stat.color === 'mystic' ? 'bg-gradient-mystic' :
                    stat.color === 'gold' ? 'bg-gradient-gold' : 
                    'bg-gradient-crimson'
                  } mystic-glow`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Subscriptions */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mystic-text-glow flex items-center">
              <Package className="h-6 w-6 mr-2" />
              Active Subscriptions
            </h2>
            
            <div className="space-y-4">
              {subscriptions.map((sub) => (
                <Card key={sub.name} className="floating-card border-mystic-purple/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg">{sub.name}</h3>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          {sub.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Renews in</p>
                        <p className="font-semibold">{sub.renewsIn}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Win Rate</p>
                        <div className="flex items-center space-x-2">
                          <Progress value={sub.winRate} className="flex-1" />
                          <span className="text-sm font-bold text-mystic-purple">{sub.winRate}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Signals</p>
                        <p className="text-lg font-bold">{sub.totalSignals}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Suggestions */}
            <Card className="floating-card border-accent/30 bg-gradient-to-b from-card to-accent/5">
              <CardHeader>
                <h3 className="font-bold text-lg flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-accent" />
                  🧠 AI Suggestions
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiSuggestions.map((suggestion) => (
                  <div key={suggestion.title} className="space-y-2 p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{suggestion.title}</h4>
                      <Badge className="bg-gradient-gold text-black text-xs">
                        {suggestion.discount}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{suggestion.description}</p>
                    <Button size="sm" className="w-full gold-glow bg-gradient-gold text-black hover:bg-gold-dark">
                      <Star className="h-3 w-3 mr-1" />
                      View Bundle
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="floating-card border-mystic-purple/30">
              <CardHeader>
                <h3 className="font-bold text-lg">Quick Actions</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-mystic-purple/50 hover:bg-mystic-purple/20">
                  <Package className="h-4 w-4 mr-2" />
                  Browse Channels
                </Button>
                <Button variant="outline" className="w-full justify-start border-mystic-purple/50 hover:bg-mystic-purple/20">
                  <Users className="h-4 w-4 mr-2" />
                  Join Group Buy
                </Button>
                <Button variant="outline" className="w-full justify-start border-mystic-purple/50 hover:bg-mystic-purple/20">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing & Plans
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Signals */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mystic-text-glow flex items-center">
            <Activity className="h-6 w-6 mr-2" />
            🕒 Recent Signal History
          </h2>
          
          <Card className="floating-card border-mystic-purple/30">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-mystic-purple/20">
                    <tr className="text-left">
                      <th className="p-4 font-semibold">Channel</th>
                      <th className="p-4 font-semibold">Pair</th>
                      <th className="p-4 font-semibold">Type</th>
                      <th className="p-4 font-semibold">Time</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSignals.map((signal, index) => (
                      <tr key={index} className="border-b border-mystic-purple/10 hover:bg-mystic-purple/5">
                        <td className="p-4 font-medium">{signal.channel}</td>
                        <td className="p-4">{signal.pair}</td>
                        <td className="p-4">
                          <Badge className={signal.type === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}>
                            {signal.type}
                          </Badge>
                        </td>
                        <td className="p-4 text-muted-foreground">{signal.time}</td>
                        <td className="p-4">
                          <Badge className={signal.status === 'Running' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'}>
                            {signal.status}
                          </Badge>
                        </td>
                        <td className="p-4 font-semibold text-emerald-400">{signal.profit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications */}
        <Card className="floating-card border-mystic-purple/30">
          <CardHeader>
            <h3 className="font-bold text-lg flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              🔔 Notifications & Renewals
            </h3>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { type: "renewal", message: "Dragon's Eye subscription renews in 15 days", time: "2 hours ago" },
              { type: "signal", message: "New signal from Shadow Strike: EUR/USD SELL", time: "4 hours ago" },
              { type: "achievement", message: "Congratulations! 90% win rate milestone reached", time: "1 day ago" },
            ].map((notification, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-background/50 rounded-lg">
                <div className={`p-2 rounded-full ${
                  notification.type === 'renewal' ? 'bg-accent/20' :
                  notification.type === 'signal' ? 'bg-mystic-purple/20' : 
                  'bg-emerald-500/20'
                }`}>
                  {notification.type === 'renewal' ? (
                    <Calendar className="h-4 w-4 text-accent" />
                  ) : notification.type === 'signal' ? (
                    <Zap className="h-4 w-4 text-mystic-purple" />
                  ) : (
                    <Star className="h-4 w-4 text-emerald-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;