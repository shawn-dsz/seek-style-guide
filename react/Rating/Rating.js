import styles from './Rating.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import StarIcon from '../icons/StarIcon/StarIcon';
import halfStar from './halfStar.svg';
import Icon from '../icons/icon';

const getPercent = (rating, i) => Math.round(Math.min(Math.max(rating - i, 0), 1) * 100);

const getStar = (percent, i, restProps) => {
  const props = {
    key: i,
    svgClassName: classnames(styles.icon, restProps.className)
  };
  if (percent >= 75) {
    return <StarIcon filled={true} {...props} />;
  }

  if (percent >= 25) {
    return <Icon markup={halfStar} {...props} />;
  }

  return <StarIcon {...props} />;
};

const renderStars = (rating, props) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const percent = getPercent(rating, i);
    stars.push(getStar(percent, i, props));
  }

  return stars;
};

const Rating = ({ rating, ...restProps }) => {
  return (
    <div {...restProps} className={classnames(styles.root)}>
      {renderStars(rating, restProps)}
    </div>
  );
};

Rating.displayName = 'Rating';

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
  svgClassName: PropTypes.string
};

export default Rating;
