import styles from './Rating.less';
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import StarIcon from '../icons/StarIcon/StarIcon';
import halfStar from './halfStar.svg';
import Icon from '../icons/icon';

const foo = () => {
  return (
    <StarIcon filled={true} className={styles.yellow} />

);
};

const bar = rating => {
  for (let i = 0; i <= 5; i++) {

  }

  /*

  if rating > 3.5
  round = 3

  for i <= 3
    filled

   */
};

export default function Rating({ rating, className, ...restProps }) {
  return (
    <div {...restProps} className={classnames(styles.root, className)}>
      <StarIcon filled={true} className={styles.yellow} />
      <StarIcon filled={true} className={styles.yellow} />
      <StarIcon filled={true} className={styles.yellow} />
      <StarIcon filled={true} className={styles.yellow} />
      <Icon markup={halfStar} className={styles.filled} />
      {foo()}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.node.number,
  className: PropTypes.string
};
