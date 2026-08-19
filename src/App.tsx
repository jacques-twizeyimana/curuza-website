import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Features } from '@/components/Features';
import { EBM } from '@/components/EBM';
import { Inventory } from '@/components/Inventory';
import { Taxes } from '@/components/Taxes';
import { Reporting } from '@/components/Reporting';
import { InputVAT } from '@/components/InputVAT';
import { Trust } from '@/components/Trust';
import { Threshold } from '@/components/Threshold';
import { Download } from '@/components/Download';
import { Footer } from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();
  return (
    <div id="top" className="min-h-screen bg-cream-50 text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <EBM />
        <Inventory />
        <Taxes />
        <Reporting />
        <InputVAT />
        <Trust />
        <Threshold />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
