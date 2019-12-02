import React, { ReactElement } from "react";

import AppListItem, { IProps as IAppListItemProps } from "./AppListItem";
import "./styles.scss";

export interface IProps {
  data: IAppListItemProps[];
}

const AppInfo = (props: IProps): ReactElement => {
  const { data } = props;

  return (
    <div className="app-list-container">
      {data.map((item: IAppListItemProps, index: number) => (
        <AppListItem key={index} {...item} />
      ))}
    </div>
  );
};

export default AppInfo;
