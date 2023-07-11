import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import Layout from '../components/layout/Layout'

import BM2023 from '../sections/2023'
import SplitView from '../components/SplitView'
import Contact from '../sections/contact'
import Heading from '../components/Heading'

import DRAMA_IMAGE from '../images/Beach-Service-drama.jpg'

export const IndexPageTemplate = ({ title, subheading, intro }) => (
  <>
    <div className="pt-10 -mt-10" />
    <SplitView
      left={
        <div className="mt-5">
          <BM2023 title={title} subheading={subheading} intro={intro}></BM2023>
        </div>
      }
      right={
        <div className="mt-5">
          <Heading>What is Beach Mission?</Heading>
          <p className="text-l lg:text-xl mt-6 font-light">
            The Port St Mary SU Beach Mission was founded in 1901 and is a well-established event
            with excellent support from local authorities and churches. Since the decline of tourism
            in the area, the mission now works almost entirely with local children and young people,
            some of whom travel from other parts of the island. Around 250 children and young people
            attend daily to enjoy activities including games, crafts, drama, interactive Bible
            teaching, music and outings.
          </p>

          <img
            className="p-5 pr-10 lg:p-10"
            src={DRAMA_IMAGE}
            alt="Drama at a beach service during beach mission"
          ></img>
          <div className="mt-5" id="contact">
            <Contact></Contact>
          </div>
        </div>
      }
    />
  </>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
        intro
      }
    }
  }
`
