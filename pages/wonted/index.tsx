import type { NextPage } from "next";
import Accordion from "../../components/Home/Accordion/Accordion";
import DemoPage from "../../components/Home/DemoPage/DemoPage";
import DemoPageMulti from "../../components/Home/DemoPage/DemoPageMulti";
import HeroBgAnimated from "../../components/Home/Hero/HeroBgAnimated";
import Layout from "../../components/Layout";
import test from "../../public/data.json";

const Home: NextPage = () => {
  const { wonted }: any = test;
  const { hero, demo, faq } = wonted[0];  

  return (
    <Layout
      title="Wonted"
      description="Multipurpose landing page for ThemeAtelier"
      keywords="book, ebook, author, writer, html, css, javascript, jquery, scss, landing"
    >
      <HeroBgAnimated hero={hero} />
      <DemoPage demo={demo} />
      <DemoPageMulti demo={demo} />
      <Accordion faq={faq} />
    </Layout>
  );
};

export default Home;
