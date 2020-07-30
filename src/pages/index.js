import React from 'react';
import Layout from '../components/layout/Layout';

import Intro from '../sections/intro'
import Feedback from '../sections/feedback/index';
import About from '../sections/about';

export default () => (
  <Layout>
    <Intro></Intro>
    <About></About>
    <Feedback></Feedback>
  </Layout>
);
