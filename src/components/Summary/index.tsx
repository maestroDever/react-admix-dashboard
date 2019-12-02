import React, { ReactElement } from 'react';
import { Row, Col, Icon } from 'antd';
import Badge from '../Badge';
import './styles.scss';

export type TSummaryInfo = {
  icon: string;
  title: string;
  value: string;
  badgeInfo: number;
};

export interface IProps {
  data: TSummaryInfo[];
}

const Summary = ({ data }: IProps): ReactElement => {
  const colSpan = 24 / data.length;

  return (
    <>
      <Row className="row-summary">
        {data.map((item: TSummaryInfo, index: number) => (
          <Col span={colSpan} className="col-summary-item" key={index}>
            <div className="flex align-center">
              <Icon className="col-summary-item--icon" type={item.icon} />
              <span className="col-summary-item--title">{item.title}</span>
            </div>
            <div className="flex align-center">
              <span className="col-summary-item--value">{item.value}</span>
              <Badge count={item.badgeInfo} />
            </div>
          </Col>
        ))}
      </Row>
      <div className="row-view-all">View all data &#9660;</div>
    </>
  );
};

export default Summary;
