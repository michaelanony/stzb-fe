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
import { BrowserRouter as Router, Route, Switch, Redirect ,withRouter} from 'react-router-dom';
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
asfassf

        </div >
    )
}

export default withRouter(Index);