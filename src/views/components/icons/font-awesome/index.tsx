import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';
import { Root } from './index.styled';

const FontAwesome = () => <Root><FontAwesomeIcon icon={faFontAwesomeFlag} /></Root>;

export default FontAwesome;
