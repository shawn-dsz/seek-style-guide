import styles from './Rating.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import StarIcon from '../icons/StarIcon/StarIcon';
import halfStar from './halfStar.svg';
import Icon from '../icons/icon';
import ScreenReaderOnly from '../Accessibility/ScreenReaderOnly';

const getPercent = (rating, position) => Math.round(Math.min(Math.max(rating - position, 0), 1) * 100);

const getStar = (percent, key, starClassName) => {
  const props = {
    key,
    className: styles.starContainer,
    svgClassName: starClassName
  };

  if (percent >= 75) {
    return <StarIcon filled={true} {...props} />;
  }

  if (percent >= 25) {
    return <Icon markup={halfStar} {...props} />;
  }

  return <StarIcon {...props} />;
};

const renderStars = (rating, starClassName) => {
  const stars = [];
  for (let position = 0; position < 5; position++) {
    const percent = getPercent(rating, position);
    stars.push(getStar(percent, position, starClassName));
  }

  return stars;
};

const Rating = ({ rating, starClassName, ...restProps }) => {
  return (
    <div {...restProps}>
      <ScreenReaderOnly>
        {rating} overall rating
      </ScreenReaderOnly>
      {renderStars(rating, starClassName)}
    </div>
  );
};

Rating.displayName = 'Rating';

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
  starClassName: PropTypes.string
};

export default Rating;
