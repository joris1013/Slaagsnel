import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import USPs from "@/components/USPs";
import Prijzen from "@/components/Prijzen";
import Examens from "@/components/Examens";
import InschrijfForm from "@/components/InschrijfForm";
import GoogleMaps from "@/components/GoogleMaps";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <USPs />
        <Prijzen />
        <Examens />
        <InschrijfForm />
        <GoogleMaps />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
