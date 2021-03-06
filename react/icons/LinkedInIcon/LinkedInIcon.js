import svgMarkup from './LinkedInIcon.svg';
import svgMarkupFilled from './LinkedInIconFilled.svg';

import React, { PropTypes } from 'react';
import Icon from '../icon';

export default function LinkedInIcon({ filled, ...props }) {
  const markup = filled ? svgMarkupFilled : svgMarkup;

  return <Icon markup={markup} {...props} />;
}

LinkedInIcon.displayName = 'LinkedInIcon';

LinkedInIcon.propTypes = {
  filled: PropTypes.bool
};

LinkedInIcon.defaultProps = {
  filled: false
};
