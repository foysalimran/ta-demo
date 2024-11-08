import type { NextPage } from "next";
import Accordion from "../../components/Home/Accordion/Accordion";
import DemoPage from "../../components/Home/DemoPage/DemoPage";
import HeroBgAnimated from "../../components/Home/Hero/HeroBgAnimated";
import Layout from "../../components/Layout";
import test from "../../public/data.json";

const Home: NextPage = () => {
  const { essentialWp }: any = test;
  const { hero, demo, faq } = essentialWp[0];  

  return (
    <Layout
      title="Event Bundle"
      description="The Events Calendar Addons Bundle"
      keywords="	calendar, carousel, elementor, events, grid, layouts, multilingual, no-coding, organizer, plugin, responsive, seo, showcase, venue, wordpress"
    >
      <HeroBgAnimated hero={hero} />
      <DemoPage demo={demo} />
      <Accordion faq={faq} />
    </Layout>
  );
};

export default Home;
