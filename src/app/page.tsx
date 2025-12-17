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
import HireBanner from '@/components/HireBanner'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <MeetingSection />
      <TeamSection />
      <RecentWorkSection /> 
      <WayOfBuildingSection /> 
      <DevelopmentApproachSection />
      <OurTechStackSection />
      <TimelinePage />
      <HireBanner />
    </div>
  )
}

export default HomePage