import React, { ReactElement } from 'react';
import { Button, Layout, Dropdown, Icon, Menu } from 'antd';

import Sidebar from '../../components/Sidebar';
import Summary from '../../components/Summary';
import AppInfoList from '../../components/AppInfo';
import { summaryData, appsData } from './mockData';
import './styles.scss';

const { Content, Footer } = Layout;

const Dashboard = (): ReactElement => {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Content className="content-container">
          <div className="content-overview">
            <div className="content-overview-header">
              <span className="content-overview-title">Overview</span>
              <Dropdown className="content-overview-dropdown" overlay={menu}>
                <Button>
                  Select Data <Icon type="down" />
                </Button>
              </Dropdown>
            </div>
            <div className="content-overview-body">
              <Summary data={summaryData} />
            </div>
          </div>
          <div className="content-apps">
            <div className="content-apps-header">
              <span className="content-apps-title">My apps</span>
              <Button className="content-apps-menu" icon="down" />
            </div>
            <div className="content-apps-body">
              <AppInfoList data={appsData} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
