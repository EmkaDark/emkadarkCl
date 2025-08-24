import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import Hero from "../components/Hero/Hero";
import Main from "@/components/Main/Main";
import Stack from "@/components/stack/Stack";
import FeedBack from "@/components/Feedback/FeedBack";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import { PersonStructuredData } from "@/structured/LayoutData.tsx";
export const metadata: Metadata = {
  title: "Главная | Создание сайтов и веб-приложений",
  description:
    "Fullstack разработчик Emka. Создаю современные сайты, веб-приложения и интернет-магазины. Специализация: Next.js, Nest.js, React, TypeScript.",
  keywords:
    "Emka Dark, заказать сайт, купить сайт, создание сайтов, программист , программирование, react , next,nest",
};
export default function Home() {
  return (
    <>
      <head>
        <PersonStructuredData />
       


      </head>
      <Layout>
        <Header></Header>
        <Main>
          <Hero></Hero>
          <Stack></Stack>
          <FeedBack></FeedBack>
        </Main>
        <Footer></Footer>
      </Layout>
    </>
  );
}
