import CheckoutSection from "@/components/CheckoutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TopHeader from "@/components/TopHeader";

export default function Checkout(){
    return(
        <>
        <TopHeader />
        <Header/>
        <Navbar/>
        <CheckoutSection />
        <Footer/>
        </>
    )
}