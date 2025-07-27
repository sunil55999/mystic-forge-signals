import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart, 
  Shield, 
  CreditCard, 
  Bitcoin, 
  Copy, 
  CheckCircle,
  Star,
  Crown,
  ArrowLeft
} from 'lucide-react';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<'paypal' | 'crypto' | null>(null);
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock data - in real app this would come from the group buy selection
  const dealData = {
    name: "Elite Traders Mega Bundle",
    channels: ["Dragon's Eye", "Phoenix Rising", "Thunder Bolt", "Mystic Flow", "Shadow Strike"],
    originalPrice: 250,
    groupPrice: 45,
    discount: 82,
    organizer: "TraderMaster",
    winRate: 94,
  };

  const cryptoWallets = {
    BTC: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    ETH: "0x742d35Cc6634C0532925a3b8D0c0Bd54E8FfFF4C",
    USDT: "0x742d35Cc6634C0532925a3b8D0c0Bd54E8FfFF4C",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handlePurchase = async () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-portal">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Group Buy
          </Button>
          
          <div className="text-center">
            <Badge className="mb-4 bg-crimson/20 text-crimson border-crimson/30">
              <ShoppingCart className="h-3 w-3 mr-1" />
              Secure Checkout
            </Badge>
            <h1 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 shimmer-text">
              🏛️ Trading Altar
            </h1>
            <p className="text-muted-foreground">
              Complete your group buy purchase securely
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="floating-card border-mystic-purple/30 sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg font-bold mystic-text-glow">
                  📦 Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">{dealData.name}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Crown className="h-3 w-3 text-accent" />
                    <span className="text-sm text-muted-foreground">by {dealData.organizer}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">{dealData.winRate}% Win Rate</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Included Channels:</h4>
                  {dealData.channels.map((channel) => (
                    <div key={channel} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">• {channel}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Regular Price</span>
                    <span className="line-through">${dealData.originalPrice}/mo</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Group Discount</span>
                    <span className="text-crimson">-{dealData.discount}%</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-crimson">${dealData.groupPrice}/mo</span>
                  </div>
                </div>

                <Badge className="w-full justify-center bg-gradient-gold text-black">
                  💰 You save ${dealData.originalPrice - dealData.groupPrice}/month
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* User Information */}
            <Card className="floating-card border-mystic-purple/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold mystic-text-glow">
                  👤 Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-mystic-purple font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="trader@example.com"
                      className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple"
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      You'll receive access details and receipts here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="floating-card border-mystic-purple/30">
              <CardHeader>
                <CardTitle className="text-lg font-bold mystic-text-glow">
                  💳 Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* PayPal Option */}
                <div 
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPayment === 'paypal' 
                      ? 'border-blue-500 bg-blue-500/10' 
                      : 'border-muted hover:border-blue-500/50'
                  }`}
                  onClick={() => setSelectedPayment('paypal')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                      {selectedPayment === 'paypal' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <CreditCard className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">PayPal</span>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      Instant
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 ml-9">
                    Pay securely with PayPal. Instant access upon payment.
                  </p>
                </div>

                {/* Crypto Option */}
                <div 
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPayment === 'crypto' 
                      ? 'border-accent bg-accent/10' 
                      : 'border-muted hover:border-accent/50'
                  }`}
                  onClick={() => setSelectedPayment('crypto')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
                      {selectedPayment === 'crypto' && (
                        <div className="w-3 h-3 rounded-full bg-accent" />
                      )}
                    </div>
                    <Bitcoin className="h-5 w-5 text-accent" />
                    <span className="font-medium">Cryptocurrency</span>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      Manual
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 ml-9">
                    Pay with BTC, ETH, or USDT. Manual verification required.
                  </p>
                </div>

                {/* Crypto Wallet Addresses */}
                {selectedPayment === 'crypto' && (
                  <div className="mt-4 p-4 bg-background/50 rounded-lg border border-accent/30">
                    <h4 className="font-medium mb-3 text-accent">Choose your cryptocurrency:</h4>
                    <div className="space-y-3">
                      {Object.entries(cryptoWallets).map(([crypto, address]) => (
                        <div key={crypto} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{crypto}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(address)}
                              className="border-accent/50 hover:bg-accent/20"
                            >
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </Button>
                          </div>
                          <div className="bg-background/30 p-2 rounded text-xs font-mono break-all">
                            {address}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">
                      💡 Send exactly <strong>${dealData.groupPrice}</strong> in your chosen cryptocurrency. 
                      Access will be granted within 1-2 hours after payment verification.
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="floating-card border-emerald-500/30 bg-emerald-500/5">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="font-medium text-emerald-400">Secure Payment</p>
                    <p className="text-sm text-muted-foreground">
                      Your payment is protected and processed securely. All group organizers are verified.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Complete Purchase Button */}
            <Button
              onClick={handlePurchase}
              disabled={!selectedPayment || !email || isProcessing}
              className="w-full py-6 text-lg crimson-glow bg-gradient-crimson hover:bg-crimson"
            >
              {isProcessing ? (
                <>Processing...</>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Complete Purchase - ${dealData.groupPrice}/mo
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;