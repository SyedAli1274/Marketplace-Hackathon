import PopularProducts from "@/components/AboutPopularProducts";
import AboutUs from "@/components/AboutUs";
import BrandFeatures from "@/components/BrandFeatures";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";

export default function About() {
  return (
    <>
    <TopHeader />
    <Header />
    <Navbar />
    <AboutUs/>
    <BrandFeatures/>
    <PopularProducts/>
    <Footer/>
    </>
  );
}
