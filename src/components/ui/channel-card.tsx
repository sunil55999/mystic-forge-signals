import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Plus, Eye, TrendingUp, Clock, DollarSign, Users, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ChannelCardProps {
  name: string;
  price: string;
  winrate: number;
  assets: string[];
  lastSignal: string;
  description?: string;
  isPopular?: boolean;
  avatar?: string;
  platform?: 'telegram' | 'discord';
  spotsLeft?: number;
  onAddToBundle?: () => void;
  onViewDetails?: () => void;
}

export const ChannelCard = ({
  name,
  price,
  winrate,
  assets,
  lastSignal,
  description,
  isPopular = false,
  avatar,
  platform = 'telegram',
  spotsLeft,
  onAddToBundle,
  onViewDetails,
}: ChannelCardProps) => {
  const [timeLeft, setTimeLeft] = useState(Math.floor(Math.random() * 24) + 1);

  useEffect(() => {
    if (spotsLeft && spotsLeft <= 5) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
      }, 3600000); // Update every hour
      return () => clearInterval(timer);
    }
  }, [spotsLeft]);
  return (
    <Card className="trading-card glassmorphic group relative border-mystic-purple/30 overflow-hidden">
      {isPopular && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-gold px-3 py-1 text-xs font-bold text-black rounded-bl-lg shimmer-text">
            🔥 POPULAR
          </div>
        </div>
      )}
      
      {spotsLeft && spotsLeft <= 5 && (
        <div className="absolute top-0 left-0 z-10">
          <div className="bg-gradient-crimson px-3 py-1 text-xs font-bold text-white rounded-br-lg countdown-pulse">
            ⏰ Only {spotsLeft} left!
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-portal opacity-10 group-hover:opacity-20 transition-all duration-500" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-mystic-purple rounded-full animate-pulse"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
      
      <CardHeader className="relative space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {avatar ? (
              <img src={avatar} alt={name} className="w-10 h-10 rounded-full border-2 border-mystic-purple/50" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-mystic flex items-center justify-center">
                <span className="text-white font-bold text-sm">{name.charAt(0)}</span>
              </div>
            )}
            <div>
              <h3 className="font-bold text-lg mystic-text-glow">{name}</h3>
              <div className="flex items-center space-x-2">
                {platform === 'telegram' ? (
                  <span className="text-xs text-blue-400">📱 Telegram</span>
                ) : (
                  <span className="text-xs text-indigo-400">🎮 Discord</span>
                )}
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-accent font-semibold">{price}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            {spotsLeft && (
              <div className="text-xs text-crimson font-bold countdown-pulse">
                {timeLeft}h left
              </div>
            )}
          </div>
        </div>
        
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </CardHeader>

      <CardContent className="relative space-y-4">
        {/* Win Rate */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Win Rate</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 bg-background/50 rounded-full h-2">
              <div 
                className="bg-gradient-mystic h-2 rounded-full transition-all duration-1000"
                style={{ width: `${winrate}%` }}
              />
            </div>
            <span className="text-sm font-bold text-mystic-purple">{winrate}%</span>
          </div>
        </div>

        {/* Assets */}
        <div className="space-y-2">
          <span className="text-sm text-muted-foreground">Assets</span>
          <div className="flex flex-wrap gap-1">
            {assets.map((asset) => (
              <Badge 
                key={asset} 
                variant="secondary" 
                className="text-xs bg-mystic-purple/20 text-mystic-purple border-mystic-purple/30"
              >
                {asset}
              </Badge>
            ))}
          </div>
        </div>

        {/* Last Signal */}
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="text-xs">Last signal: {lastSignal}</span>
        </div>
      </CardContent>

      <CardFooter className="relative space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-mystic-purple/50 hover:bg-mystic-purple/20 hover:border-mystic-purple btn-ripple"
          onClick={onViewDetails}
        >
          <Eye className="h-4 w-4 mr-2" />
          Details
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-gradient-mystic hover:bg-mystic-purple-dark spark-trail btn-ripple"
          onClick={onAddToBundle}
        >
          <Plus className="h-4 w-4 mr-2" />
          {spotsLeft ? 'Join' : 'Add'}
        </Button>
      </CardFooter>
    </Card>
  );
};