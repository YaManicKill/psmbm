import React from 'react';
import Layout from '../components/layout/Layout';

import BM2020 from '../sections/2020';
import BM2021 from '../sections/2021';
import Contact from '../sections/contact';

export default () => (
  <Layout>
    <BM2021></BM2021>
    <BM2020></BM2020>
  </Layout>
);
