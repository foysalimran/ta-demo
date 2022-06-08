import type { NextPage } from "next";
import Head from "next/head";
import Accordion from "../../components/Home/Accordion/Accordion";
import DemoPage from "../../components/Home/DemoPage/DemoPage";
import HeroBgAnimated from "../../components/Home/Hero/HeroBgAnimated";
import Layout from "../../components/Layout";
import test from "../../public/ipsum.json";

const Home: NextPage = () => {
  const { ipsum }: any = test;
  const { hero, demo, faq, primaryBtn, secondaryBtn } = ipsum[0];

  return (
    <Layout>
            <Head>
                <style>
                   
                </style>
            </Head>
      <HeroBgAnimated hero={hero} primaryBtn={primaryBtn} secondaryBtn={secondaryBtn} />
      <DemoPage demo={demo} />
      <Accordion faq={faq} />
    </Layout>
  );
};

export default Home;
