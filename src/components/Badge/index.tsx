import React from 'react';
import classNames from 'classnames';

import './styles.scss';

export interface IProps {
  count: number;
}

const Badge = (props: IProps) => {
  const { count } = props;
  const badgeClasses = classNames(
    'badge-info',
    count > 0 ? 'badge-success' : 'badge-danger',
  );

  return (
    <div className="badge-container col-summary-item--badge">
      <span className={badgeClasses}>
        {count > 0 ? `+${count}%` : `${count}%`}
      </span>
    </div>
  );
};

export default Badge;
