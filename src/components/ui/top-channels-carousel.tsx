import { ChannelCard } from '@/components/ui/channel-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

interface Channel {
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
}

interface TopChannelsCarouselProps {
  channels: Channel[];
}

export const TopChannelsCarousel = ({ channels }: TopChannelsCarouselProps) => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {channels.map((channel, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ChannelCard {...channel} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-mystic-purple/50 hover:bg-mystic-purple/20" />
        <CarouselNext className="border-mystic-purple/50 hover:bg-mystic-purple/20" />
      </Carousel>
    </div>
  );
};