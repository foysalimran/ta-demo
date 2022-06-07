import type { NextPage } from 'next'
import Accordion from '../components/Home/Accordion/Accordion';
import DemoPage from '../components/Home/DemoPage/DemoPage';
import HeroBgAnimated from '../components/Home/Hero/HeroBgAnimated';
import Layout from '../components/Layout';
import test from "../public/ipsum.json"

const Home: NextPage = () => {
  const {nilam}:any = test;
  const {hero, demo, faq} = nilam[0];
  
  return (
    <Layout>
      <HeroBgAnimated hero={hero} />
      <DemoPage demo={demo} />
      <Accordion faq={faq} />
    </Layout>
  )
}

export default Home
