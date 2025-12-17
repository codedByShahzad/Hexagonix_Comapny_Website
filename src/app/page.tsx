import TrustSection from '@/sections/TrustSection'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import MeetingSection from '@/sections/MeetingSection'
import TeamSection from '@/sections/TeamSection'
import WayOfBuildingSection from '@/sections/WayOfBuildingSection'
import DevelopmentApproachSection from '@/sections/DevelopmentApproachSection'
import RecentWorkSection from '@/sections/RecentWorkSection'
import TimelinePage from '@/sections/TimelinePage'
import OurTechStackSection from '@/sections/OutTechStackSection'
import FeaturedResources from '@/sections/FeaturedResources'
import HireBanner from '@/components/HireBanner'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <MeetingSection />
      <TeamSection />
      <RecentWorkSection /> // Fix 
      <WayOfBuildingSection /> // Fix 
      <DevelopmentApproachSection />
      <OurTechStackSection />
      <TimelinePage />
      <FeaturedResources />
      <HireBanner />
    </div>
  )
}

export default HomePage