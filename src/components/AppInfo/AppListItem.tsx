import React from 'react';
import { Button, Row, Col } from 'antd';

import Badge from '../Badge';
import ButtonStatus from '../ButtonStatus';
import './AppListItem.styles.scss';

export interface IProps {
  appTitle?: string;
  revenue?: number;
  badgeInfo?: number;
  status: 'off' | 'sandbox' | 'live';
}

const AppListItem = (props: IProps) => {
  const { appTitle, revenue, badgeInfo, status } = props;

  return (
    <div className="app-info-item">
      <Row className="app-info-row" gutter={16}>
        <Col span={10} className="app-info-title">
          <div>
            <img
              src={require('../../assets/images/unity.png')}
              className="app-info-title--icon"
              alt="app-info-icon"
            />
            <span>{appTitle}</span>
          </div>
        </Col>
        <Col span={1} className="app-info-revenue">
          <div>
            <span>${revenue}</span>
          </div>
        </Col>
        <Col span={2} className="app-info-badge">
          <div>{badgeInfo && <Badge count={badgeInfo} />}</div>
        </Col>
        <Col span={4}>
          <div>
            <Button className="app-info-action-button" icon="setting" />
            <Button className="app-info-action-button" icon="info-circle" />
            <Button className="app-info-action-button" icon="bar-chart" />
          </div>
        </Col>
        <Col span={6} className="app-info-status">
          <ButtonStatus status={status} />
        </Col>
        <Col span={1}>
          <Button className="app-info-action-button" icon="ellipsis" />
        </Col>
      </Row>
    </div>
  );
};

export default AppListItem;
