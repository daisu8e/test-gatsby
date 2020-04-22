import React from 'react';
import { storiesOf } from '@storybook/react';

import SourceCodePro from './index';

const stories = storiesOf('services/fonts/source-code-pro', module);
stories.add('default', () => (
  <>
    <SourceCodePro />
    <div style={{ fontFamily: 'SourceCodePro' }}>
      I'm Daisuke Katsumata & Aug 22, 1981.
    </div>
  </>
));
