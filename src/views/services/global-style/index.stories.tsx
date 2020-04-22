import React from 'react';
import { storiesOf } from '@storybook/react';

import GlobalStyle from './index';

storiesOf('services/global-style', module)
.add('default', () => (
  <>
    <GlobalStyle />
    <h1>xxxxx</h1>
    <div>xxxxx</div>
  </>
))
;
