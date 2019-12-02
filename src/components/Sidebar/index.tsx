import React, { ReactElement } from 'react';
import { Layout, Menu, Icon } from 'antd';

import AdmixLogo from '../../assets/images/logo.png';
import './styles.scss';

type TMenu = {
  icon: string;
  text: string;
};

const items: TMenu[] = [
  { icon: 'home', text: 'my apps' },
  { icon: 'pie-chart', text: 'reports' },
  { icon: 'file-text', text: 'docs' },
  { icon: 'caret-down', text: 'download' },
  { icon: 'profile', text: 'my profile' },
];

const menuItems: ReactElement[] = [];

items.forEach((item: TMenu, index: number) => {
  menuItems.push(
    <Menu.Item key={index} className="sidebar-item">
      <Icon className="side-item-icon" type={item.icon} theme="filled" />
      <span className="uppercase">{item.text}</span>
    </Menu.Item>,
  );
});

const Sidebar = (): ReactElement => {
  return (
    <Layout.Sider className="side-container">
      <div className="logo">
        <img className="side-logo" src={AdmixLogo} alt="Admix Logo" />
      </div>
      <Menu
        className="sidebar-menu"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
      >
        {menuItems}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
