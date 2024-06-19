import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Problem from "@/components/Problem";
import Testimonial from "@/components/Testimonials1";
import Testimonials11 from "@/components/Testimonials11";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <Testimonial />
      <Testimonials11 />
      <Footer />
    </>
  );
}
