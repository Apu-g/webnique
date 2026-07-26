"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import QuipSection from "../components/QuipSection";
import ServicesSection from "../components/ServicesSection";
import CtaBand from "../components/CtaBand";
import Process from "../components/Process";
import ClientLogos from "../components/ClientLogos";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import AmbientBackground from "../components/AmbientBackground";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);

  const handlePreloaderComplete = () => {
    setLoading(false);
    // Small delay before hero animations start
    setTimeout(() => setHeroVisible(true), 150);
  };

  // Skip preloader after first visit (or in dev on hot reload)
  useEffect(() => {
    const seen = sessionStorage.getItem("webnique-preloader-seen");
    if (seen) {
      setLoading(false);
      setHeroVisible(true);
    }
  }, []);

  const onPreloaderDone = () => {
    sessionStorage.setItem("webnique-preloader-seen", "1");
    handlePreloaderComplete();
  };

  return (
    <>
      <Head>
        <title>Web Application Development Services | Webnique Digital Solutions Private Limited</title>
        <meta
          name="description"
          content="Get custom web application development services with Webnique Digital Solutions Private Limited. Scalable, secure, and user-friendly apps tailored to your business needs."
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#F67963" />
        <meta name="author" content="Webnique Digital Solutions Private Limited" />
        <link rel="canonical" href="https://www.webniqueds.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Web Application Development Services | Webnique Digital Solutions Private Limited" />
        <meta property="og:description" content="Get custom web application development services with Webnique Digital Solutions Private Limited. Scalable, secure, and user-friendly apps tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webniqueds.com/" />
        <meta property="og:site_name" content="Webnique Digital Solutions Private Limited" />
        <meta property="og:image" content="https://www.webniqueds.com/images/logo/logo.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Application Development Services | Webnique Digital Solutions Private Limited" />
        <meta name="twitter:description" content="Get custom web application development services with Webnique Digital Solutions Private Limited. Scalable, secure, and user-friendly apps tailored to your business needs." />
        <meta name="twitter:image" content="https://www.webniqueds.com/images/logo/logo.png" />

        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Webnique Digital Solutions Private Limited" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>

      {/* Preloader */}
      {loading && <Preloader onComplete={onPreloaderDone} />}

      {/* Main content — hidden until preloader finishes */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.4s ease",
          position: "relative",
          zIndex: 2,
        }}
      >
        <AmbientBackground />
        <Navbar showProducts />
        <main id="main-content">
          <Hero isVisible={heroVisible} />
          <AboutSection />
          <QuipSection />
          <ServicesSection />
          <CtaBand />
          <Process />
          <ClientLogos />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
}
