import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFBF9]">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
