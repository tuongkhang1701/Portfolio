import About from '@/components/About';
import Cta from '@/components/Cta';
import Hero from '@/components/Hero';
import Review from '@/components/Review';
import Services from '@/components/Services';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Review />
      <Cta />
    </main>
  );
}
