import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Plus, Eye, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface ChannelCardProps {
  name: string;
  price: string;
  winrate: number;
  assets: string[];
  lastSignal: string;
  description?: string;
  isPopular?: boolean;
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
  onAddToBundle,
  onViewDetails,
}: ChannelCardProps) => {
  return (
    <Card className="floating-card group relative bg-gradient-to-b from-card/90 to-card/50 border-mystic-purple/30 overflow-hidden">
      {isPopular && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-gold px-3 py-1 text-xs font-bold text-black rounded-bl-lg">
            🔥 POPULAR
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-portal opacity-20 group-hover:opacity-30 transition-opacity" />
      
      <CardHeader className="relative space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg mystic-text-glow">{name}</h3>
          <div className="flex items-center space-x-1 text-accent">
            <DollarSign className="h-4 w-4" />
            <span className="font-bold">{price}</span>
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
          className="flex-1 border-mystic-purple/50 hover:bg-mystic-purple/20 hover:border-mystic-purple"
          onClick={onViewDetails}
        >
          <Eye className="h-4 w-4 mr-2" />
          Details
        </Button>
        <Button
          size="sm"
          className="flex-1 mystic-glow bg-gradient-mystic hover:bg-mystic-purple-dark"
          onClick={onAddToBundle}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};