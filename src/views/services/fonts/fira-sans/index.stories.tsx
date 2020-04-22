import React from 'react';
import { storiesOf } from '@storybook/react';

import FiraSans from './index';

const stories = storiesOf('services/fonts/fira-sans', module);
stories.add('default', () => (
  <>
    <FiraSans />
    <div style={{ fontFamily: 'FiraSans' }}>
      I'm Daisuke Katsumata & Aug 22, 1981.
    </div>
  </>
));
