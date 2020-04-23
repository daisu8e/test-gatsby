import React from 'react';
import { storiesOf } from '@storybook/react';

import GlobalStyle from './index';

const stories = storiesOf('services/global-style', module);
stories.add('default', () => (
  <>
    <GlobalStyle />
    <h1>xxxxx</h1>
    <div>xxxxx</div>
  </>
));
