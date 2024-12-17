import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Listing from "@/components/Listing";
import { blogData, ExperienceData, ExpertiseData, ProjetsData } from "@/data/data";


export default function Home() {
  return (
    <>
     <Header/>
     <HeroSection/>
     {/* projet */}
     <Listing type="projet" data={ProjetsData}/>
     {/* Expertise */}
     <Listing type="expertise" data={ ExpertiseData }/>
     {/* defis ou Experience */}
     <Listing type="experience" data={ExperienceData}/>
     {/* blog */}
     <Listing type="blog" data={blogData}/>
     <Footer/>
    </>
  );
}
