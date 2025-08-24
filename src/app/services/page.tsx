import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import Main from "@/components/Main/Main";
import Hero from "@/components/Services/Hero/Hero";
import { Metadata } from "next";
import React from "react";
import { ServicesStructuredData } from "../../structured/ServicesData";
export const metadata: Metadata = {
  title: "Услуги | Разработка сайтов и приложений",
  description:
    "Услуги Fullstack разработчика: создание сайтов, веб-приложений, интернет-магазинов. Технологии: Next.js, Nest.js, React, TypeScript.",
};
const services = () => {
  return (
    <>
      <head>
        <ServicesStructuredData />
      </head>
      <Layout>
        <Header></Header>
        <Main>
          <Hero></Hero>
        </Main>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default services;
