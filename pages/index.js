import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../components/Layout";
import AboutSection from "../components/sections/AboutSection";
import Banner from "../components/sections/Banner";
import Contact from "../components/sections/Contact";
import HomeSection from "../components/sections/HomeSection";
import JourneySection from "../components/sections/JourneySection";
import Loader from "../components/sections/Loader";
import Loader2 from "../components/sections/Loader2";
import Menu from "../components/sections/Menu";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Loader /> */}
      {/* <Loader2 /> */}
      <HomeSection />
      <AboutSection />
      <Banner />
      <JourneySection />
      <Menu />
      <Contact />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.js"
      />
      <Script defer src="/js/animate.js" />
    </Layout>
  );
}
