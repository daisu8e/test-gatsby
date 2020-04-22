import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';

const stories = storiesOf('components/header', module);
stories.add('default', () => <Header siteTitle={'Site Title'} />);
