import React from 'react';
import { storiesOf } from '@storybook/react';

import FontAwesome from './index';

const stories = storiesOf('components/icons/font-awesome', module);
stories.add('default', () => <div style={{ fontSize: '100px', margin: '50px' }}><FontAwesome /></div>);
