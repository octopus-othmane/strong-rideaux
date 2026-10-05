import { HeroShutterExperience } from '@/components/sections/HeroShutterExperience';
import { SolutionsGrid } from '@/components/sections/SolutionsGrid';
import { PartnerLogos } from '@/components/sections/PartnerLogos';

import { WhyStrongRideaux } from '@/components/sections/WhyStrongRideaux';
import { BlogShowcase } from '@/components/sections/BlogShowcase';
import { ConstructionLoader } from '@/components/ui/ConstructionLoader';

export default function Home() {
  return (
    <ConstructionLoader>
      <HeroShutterExperience 
        mediaType="video" 
        mediaSrc="/video/strong-rideaux-about-video.mp4" 
      />
      <div className="relative z-10 bg-[#F3F1EC]">
        <SolutionsGrid />
        <PartnerLogos />
        <WhyStrongRideaux />
        <BlogShowcase />
      </div>
    </ConstructionLoader>
  );
}
