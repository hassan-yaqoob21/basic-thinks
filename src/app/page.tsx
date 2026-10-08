import { About } from "@/components/About";
import { AISolutions } from "@/components/AISolutions";
import { Contact } from "@/components/Contact";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Socials } from "@/components/Socials";
import { VideoShowcase } from "@/components/VideoShowcase";
import { WebShowcase } from "@/components/WebShowcase";
import { WhyBasicThinks } from "@/components/WhyBasicThinks";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <CredibilityStrip />
      <Services />
      <Portfolio />
      <VideoShowcase />
      <WebShowcase />
      <AISolutions />
      <WhyBasicThinks />
      <Process />
      <About />
      <Socials />
      <Contact />
    </main>
  );
}
