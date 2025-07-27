import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Crown } from 'lucide-react';

interface SuggestionCardProps {
  id: number;
  title: string;
  description: string;
  organizer?: string;
  suggestedPrice: number;
  minSlots: number;
  tags: string[];
  votes: {
    interested: number;
    notInterested: number;
    spam: number;
  };
  userVote?: 'interested' | 'notInterested' | 'spam' | null;
  onVote: (suggestionId: number, voteType: 'interested' | 'notInterested' | 'spam') => void;
}

export const SuggestionCard = ({
  id,
  title,
  description,
  organizer,
  suggestedPrice,
  minSlots,
  tags,
  votes,
  userVote,
  onVote,
}: SuggestionCardProps) => {
  const totalVotes = votes.interested + votes.notInterested + votes.spam;
  const interestPercentage = totalVotes > 0 ? (votes.interested / totalVotes) * 100 : 0;

  const getVoteButtonClass = (voteType: string, isActive: boolean) => {
    const baseClass = "text-xs px-3 py-1 transition-all duration-200";
    if (isActive) {
      switch (voteType) {
        case 'interested':
          return `${baseClass} bg-crimson/30 text-crimson border-crimson/50 crimson-glow`;
        case 'notInterested':
          return `${baseClass} bg-muted/50 text-muted-foreground border-muted`;
        case 'spam':
          return `${baseClass} bg-destructive/30 text-destructive border-destructive/50`;
      }
    }
    return `${baseClass} hover:bg-background/30 border-muted-foreground/30`;
  };

  return (
    <Card className="floating-card border-mystic-purple/30 bg-gradient-to-b from-card/90 to-card/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-portal opacity-10" />
      
      <CardHeader className="relative space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-lg mystic-text-glow mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
          <Badge className="bg-gradient-gold text-black ml-2">
            ${suggestedPrice}/mo
          </Badge>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            {organizer && (
              <div className="flex items-center space-x-1">
                <Crown className="h-3 w-3 text-accent" />
                <span className="text-muted-foreground">{organizer}</span>
              </div>
            )}
            <span className="text-muted-foreground">Min: {minSlots} slots</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-mystic-purple/20 text-mystic-purple border-mystic-purple/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4">
        {/* Interest Level Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Community Interest</span>
            <span className="text-mystic-purple font-medium">{interestPercentage.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-background/50 rounded-full h-2">
            <div 
              className="bg-gradient-crimson h-2 rounded-full transition-all duration-1000"
              style={{ width: `${interestPercentage}%` }}
            />
          </div>
        </div>

        {/* Voting Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className={getVoteButtonClass('interested', userVote === 'interested')}
              onClick={() => onVote(id, 'interested')}
            >
              🔥 {votes.interested}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={getVoteButtonClass('notInterested', userVote === 'notInterested')}
              onClick={() => onVote(id, 'notInterested')}
            >
              👎 {votes.notInterested}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={getVoteButtonClass('spam', userVote === 'spam')}
              onClick={() => onVote(id, 'spam')}
            >
              🚫 {votes.spam}
            </Button>
          </div>
          
          {interestPercentage >= 70 && (
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              High Interest!
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};