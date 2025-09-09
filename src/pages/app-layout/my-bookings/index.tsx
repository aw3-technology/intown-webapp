import { AppLayoutContent } from '@/components/custom/app-layout-content';
import { ExploreCard } from '@/components/custom/explore-card';
import { TextAnimate } from '@/components/magicui/text-animate';

export const MyBookings = () => {
  return (
    <AppLayoutContent
      title={
        <div className='flex items-center gap-2'>
          <TextAnimate animation="blurInUp" delay={0.1} duration={0.1} by="character" once as="h1" className='leading-8 font-normal'>
          My Bookings
          </TextAnimate>

          <TextAnimate animation="blurInUp" delay={0.3} duration={0.1} by="character" once as="span" className='text-xl md:text-2xl lg:text-3xl text-foreground/70 leading-5'>
            (5)
          </TextAnimate>
        </div>
      
      }
      description={
        <TextAnimate animation="blurInUp" delay={0.3} duration={0.1} by="character" once as="p" className='text-foreground/70 leading-5'>
          Your confirmed bookings and travel itineraries
        </TextAnimate>
      }
    >
      <div className="flex flex-col gap-3">
        <TextAnimate animation="blurInUp" delay={0.1} duration={0.1} by="character" once as="span" className='text-foreground/60 leading-5'>Yesterday</TextAnimate>
        
        <ExploreCard
          className="p-2"
          title="5-Day Los Angeles Adventure"
          description="15 Mar - 20 Mar 2025 • 2 travellers • 1 room"
          subText="2 travellers • 1 room"
          image="/images/los-angeles-hollywood.png"
          iconSymbol="🚕"
          imageSize="large"
          delay={0.1}
        />
      </div>
      <div className="flex flex-col gap-3">
        <TextAnimate animation="blurInUp" delay={0.2} duration={0.1} by="character" once as="span" className='text-foreground/60 leading-5'>Previous 7 days</TextAnimate>
        <ExploreCard
          className="p-2"
          title="Hollywood Studio Tour Package"
          description="22 May - 27 May 2025 • 2 travellers • VIP Access"
          subText="2 travellers • VIP Access"
          image="/images/los-angeles-hollywood.png"
          iconSymbol="🎬"
          imageSize="large"
          delay={0.1}
        />
        <ExploreCard
          className="p-2"
          title="Santa Monica Beach Resort Stay"
          description="4 Feb - 11 Feb 2025 • 4 travellers • 2 rooms"
          subText="4 travellers • 2 rooms"
          image="/images/los-angeles-hotel.png"
          iconSymbol="🏖️"
          imageSize="large"
          delay={0.2}
        />
        <ExploreCard
          className="p-2"
          title="Beverly Hills Luxury Experience"
          description="1 Apr - 5 Apr 2025 • 2 travellers • Suite"
          subText="2 travellers • Suite"
          image="/images/los-angeles-restaurant.png"
          iconSymbol="🥂"
          imageSize="large"
          delay={0.3}
        />
      </div>
      <div className="flex flex-col gap-3">
        <TextAnimate animation="blurInUp" delay={0.3} duration={0.1} by="character" once as="span" className='text-foreground/60 leading-5'>Previous 30 days</TextAnimate>
        <ExploreCard
          className="p-2"
          title="Griffith Observatory & Downtown LA Tour"
          description="16 May - 22 May 2025 • 2 travellers • Private Guide"
          subText="2 travellers • Private Guide"
          image="/images/los-angeles-griffith-observatory.png"
          iconSymbol="🔭"
          imageSize="large"
          delay={0.4}
        />
      </div>
    </AppLayoutContent>
  );
};
