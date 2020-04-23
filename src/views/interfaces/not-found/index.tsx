import React from 'react';

import Layout from 'views/components/layout';
import SEO from 'views/components/seo';
import FontAwesome from 'views/components/icons/font-awesome';
import { StyledDiv } from './index.styled';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <FontAwesome />
    <StyledDiv />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
