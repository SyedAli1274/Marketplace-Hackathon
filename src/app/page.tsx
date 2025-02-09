import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Navbar from "@/components/Navbar";
import OurProducts from "@/components/OurProducts";
import PopularStyles from "@/components/Popular";
import ProductCards from "@/components/ProductCards";
import TopCategories from "@/components/TopCategories";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return (
    <>
    <TopHeader />
    <Header />
    <Navbar />
    <Hero />
    <Logos />
    <ProductCards/>
    <PopularStyles />
    <TopCategories/>
    <OurProducts/>
    <Footer/>
    </>
  );
}
