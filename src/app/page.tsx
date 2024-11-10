
import Hero from "@/components/widgets/hero";

import About from "./about/page";
import ContactPage from "./contact/page";
import ProjectPage from "./project/page";
import ReviewsPage from "./review/page";
import Hero2 from "@/components/hero2";



export default function Home() {
  return (
    <>
  <Hero/>
  <Hero2/>
<About/>
<ProjectPage/>
<ReviewsPage/>
<ContactPage/>
    </>
  );
}
