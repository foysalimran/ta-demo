import type { NextPage } from "next";
import Head from "next/head";
import Accordion from "../../components/Home/Accordion/Accordion";
import DemoPage from "../../components/Home/DemoPage/DemoPage";
import HeroBgAnimated from "../../components/Home/Hero/HeroBgAnimated";
import Layout from "../../components/Layout";
import data from "../../public/data.json";

const Home: NextPage = () => {
  const { statesman }: any = data;
  const { hero, demo, faq } = statesman[0];

  return (
    <Layout
      title="Wonted"
      description="Multipurpose landing page for ThemeAtelier"
      keywords="book, ebook, author, writer, html, css, javascript, jquery, scss, landing"
    >
      <HeroBgAnimated hero={hero} />
      <DemoPage demo={demo} />
      <Accordion faq={faq} />
    </Layout>
  );
};

export default Home;
