import React, { useState } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import './styles.scss';

export interface IProps {
  status: string;
}

const ButtonStatus = (props: IProps) => {
  const [status, setStatus] = useState(props.status);

  const handleStatusChange = (e: RadioChangeEvent) => {
    setStatus(e.target.value);
  };

  return (
    <Radio.Group
      className="button-status-radio-group"
      value={status}
      onChange={handleStatusChange}
    >
      <Radio.Button value="off">Off</Radio.Button>
      <Radio.Button value="sandbox">Sandbox</Radio.Button>
      <Radio.Button value="live">Live</Radio.Button>
    </Radio.Group>
  );
};

export default ButtonStatus;
