import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Banner from "../components/Banner";
import FunFacts from "../components/FunFacts";
import CtaTwo from "../components/CtaTwo";
import CtaThree from "../components/CtaThree";
import Video from "../components/Video";
// pages/index.tsx
import prisma from "../lib/prisma";
// import Pricing from "../components/Pricing";
// import AppShots from "../components/AppShots";
import { useSession, signIn, signOut } from "next-auth/react";
import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import BlogHome from "../components/BlogHome";
// import Clients from "../components/Clients";
// import CtaOne from "../components/CtaOne";
import Footer from "../components/Footer";
import { getSession } from "next-auth/react";

const HomePage = () => {
  const { data } = useSession();
  if (!data) {
    return <buttton onClick={() => signIn()}>CLick me</buttton>;
  }
  console.log(data);
  return (
    <Layout pageTitle="Robin Tiles">
      <Header />
      <MobileMenu />
      <Banner />
      <Features />
      {/* <CtaTwo /> */}
      <CtaThree />
      {/* need to check */}
      <Video />
      <FunFacts />
      {/* <AppShots /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Clients /> */}
      {/* <BlogHome /> */}
      {/* <CtaOne /> */}
      <Footer />
    </Layout>
  );
};

export default HomePage;
