import React from 'react';
import { graphql } from 'gatsby'
import PropTypes from "prop-types";
import Layout from '../components/layout/Layout';

import BM2020 from '../sections/2020';
import SplitView from '../components/SplitView';
import Contact from '../sections/contact';

export const VirtualPageTemplate = ({ title }) => (
  <>
    <div className="pt-10 -mt-10" />
    <SplitView
      left={
        <div className="mt-5">
          <BM2020></BM2020>
        </div>
      }
      right={
        <div className="mt-5" id="contact">
          <Contact></Contact>
        </div>
      }
    />
  </>
);

VirtualPageTemplate.propTypes = {
};

const VirtualPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <VirtualPageTemplate
      />
    </Layout>
  );
};

VirtualPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default VirtualPage;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
