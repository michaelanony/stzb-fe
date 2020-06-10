import React ,{useState}from 'react';import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  
import { withRouter, Link } from "react-router-dom"
import './MenuBar.scss'
import { Layout, Menu } from 'antd';
const {Sider } = Layout;
const { SubMenu } = Menu;
const MenuBar: React.FC<{}> = () => {
    const [state, setState] = useState<boolean>(false)

    const onCollapse = (collapsed:boolean) => {
        setState(collapsed)
      };
    return (
        <Sider collapsible collapsed={state} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/member">所有成员信息</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="个人">
            <Menu.Item key="3"><Link to="/member">个人信息</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/member">考勤信息</Link></Menu.Item>
      
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="管理录入">
            <Menu.Item key="6">成员考勤记录</Menu.Item>
            <Menu.Item key="8">成员管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
}
export default withRouter(MenuBar);
