import { NetworkIcons } from "@/components/Button";
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
     <div  style={{zoom:1.2}} className="sticky top-[75vh]  z-50  left-0 right-0 grid place-content-center ">
       <NetworkIcons />
     </div>
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
