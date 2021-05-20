import React from 'react';
import Layout from '../components/layout/Layout';

import BM2020 from '../sections/2020';
import BM2021 from '../sections/2021';
import SplitView from '../components/SplitView';
import Contact from '../sections/contact';

import MALLMORE_IMAGE from '../images/mallmore.jpg';

const Index = () => (
  <Layout>
    <div className="pt-10 -mt-10" />
    <SplitView
      left={
        <div className="mt-5">
          <BM2021></BM2021>
          <div className="mt-5 lg:hidden" id="contact">
            <Contact></Contact>
          </div>
          <img className="p-10 lg:hidden" src={MALLMORE_IMAGE} alt="Front door of Mallmore"></img>
          <BM2020></BM2020>
        </div>
      }
      right={
        <div className="mt-5">
          
          <div className="mt-5 hidden lg:block" id="contactlg">
            <Contact />
          </div>
          
          <img
            className="pr-10 hidden lg:block"
            src={MALLMORE_IMAGE}
            alt="Front door of Mallmore"
          ></img>
        </div>
      }
      />
  </Layout>
);

export default Index;