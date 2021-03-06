import React from 'react';
import { Link } from 'gatsby';

import Layout from 'views/components/layout';
import Image from 'views/components/image';
import SEO from 'views/components/seo';
import FontAwesome from 'views/components/icons/font-awesome';
import { StyledDiv } from './index.styled';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <FontAwesome />
    <StyledDiv />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/Fido/">Fido</Link>
  </Layout>
);

export default Home;
