import About from "@/components/About/About";
import MyInfo from "@/components/About/MyInfo/MyInfo";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import Main from "@/components/Main/Main";
import { Metadata } from "next";
import React from "react";
import { AboutStructuredData } from "../../structured/AboutData";
export const metadata: Metadata = {
  title: "О себе | Fullstack разработчик Emka",
  description:
    "Fullstack разработчик с 2020 года. Мой путь в IT, навыки и опыт. Готов к фриланс-проектам и сотрудничеству.",
};
const page = () => {
  return (
    <>
      <head>
        <AboutStructuredData />
      </head>
      <Layout>
        <Header></Header>
        <Main>
          <About></About>
          <MyInfo></MyInfo>
        </Main>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default page;
