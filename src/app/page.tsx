import { Navbar,Footer } from "@/components";
import {  Awards, ExploreCourses, HeroSection, OurClients, Stories, WeBest } from "./homepage/components";



export default function Home() {
  return (
    <main>
      
      <Navbar />
      <HeroSection/>
      <WeBest/><br/>
      <ExploreCourses /><br/>
      <Awards/>
      <Stories/>
      <OurClients />
      <Footer/>
      
    </main>
  );
}
