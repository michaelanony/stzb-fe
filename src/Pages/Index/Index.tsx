import React,{useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { RouteComponentProps } from "react-router"
import { withRouter } from "react-router-dom"
import TableInfo from "../../Components/TableInfo/TableInfo"
import './Index.scss'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Index: React.FC<RouteComponentProps> = () => {
    const [state, setState] = useState<boolean>(false)

    const onCollapse = (collapsed:boolean) => {
        
        setState(collapsed)
      };
    return (
        <div>
       <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={state} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div><TableInfo/></div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>STZB CMS ©2020</Footer>
        </Layout>
      </Layout>
        </div >
    )
}

export default withRouter(Index);