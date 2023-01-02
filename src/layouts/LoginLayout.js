import React from 'react'
import { Layout } from 'antd';
const { Footer, Content } = Layout;
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const LoginLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ background: "yellow" }}><Outlet /></Content>
        <Footer style={{ background: "pink" }}>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default LoginLayout