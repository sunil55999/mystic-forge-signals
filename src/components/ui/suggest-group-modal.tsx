import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, Plus } from 'lucide-react';

interface SuggestGroupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SuggestGroupModal = ({ open, onOpenChange }: SuggestGroupModalProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');

  const availableTags = ['Gold', 'Crypto', 'Forex', 'Scalping', 'Swing', 'Day Trading', 'Signals', 'Analysis'];

  const addTag = (tag: string) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-gradient-to-b from-card to-card/90 border-mystic-purple/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-cinzel font-bold mystic-text-glow text-center">
            📜 Suggest a Group Buy
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="channelName" className="text-mystic-purple font-medium">
              Channel/Bundle Name *
            </Label>
            <Input
              id="channelName"
              placeholder="Elite Dragon Signals Bundle"
              className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-mystic-purple font-medium">
              Description *
            </Label>
            <Textarea
              id="description"
              placeholder="Premium forex signals with 90%+ win rate..."
              className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple min-h-[100px]"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="organizer" className="text-mystic-purple font-medium">
                Organizer Name
              </Label>
              <Input
                id="organizer"
                placeholder="TradeMaster (optional)"
                className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="minSlots" className="text-mystic-purple font-medium">
                Min Slots Required *
              </Label>
              <Select required>
                <SelectTrigger className="bg-background/50 border-mystic-purple/30">
                  <SelectValue placeholder="Select min slots" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 People</SelectItem>
                  <SelectItem value="10">10 People</SelectItem>
                  <SelectItem value="15">15 People</SelectItem>
                  <SelectItem value="20">20 People</SelectItem>
                  <SelectItem value="25">25 People</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price" className="text-mystic-purple font-medium">
              Suggested Group Price (USD/month) *
            </Label>
            <Input
              id="price"
              type="number"
              placeholder="45"
              className="bg-background/50 border-mystic-purple/30 focus:border-mystic-purple"
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="text-mystic-purple font-medium">Tags</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-mystic-purple/20 text-mystic-purple border-mystic-purple/30 pr-1"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 hover:bg-mystic-purple/30 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Select value={currentTag} onValueChange={setCurrentTag}>
                <SelectTrigger className="bg-background/50 border-mystic-purple/30">
                  <SelectValue placeholder="Add tags..." />
                </SelectTrigger>
                <SelectContent>
                  {availableTags.filter(tag => !tags.includes(tag)).map((tag) => (
                    <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => addTag(currentTag)}
                className="border-mystic-purple/50 hover:bg-mystic-purple/20"
                disabled={!currentTag || tags.includes(currentTag)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full mystic-glow bg-gradient-mystic hover:bg-mystic-purple-dark"
          >
            📜 Post Suggestion
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};