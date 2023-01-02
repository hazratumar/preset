import React, { useState } from 'react'
import { Button, Menu, Layout } from 'antd'
const { Sider } = Layout;
import { LeftOutlined, RightOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Sider style={{ background: "white", height: "100vh" }} trigger={null} collapsible collapsed={collapsed}>
            <div style={{ display: "flex", justifyContent: "right", height: "64px", alignItems: "center" }}>
                <Button
                    onClick={toggleCollapsed}
                    style={{ marginRight: "-20px" }}
                >
                    {collapsed ? <RightOutlined /> : <LeftOutlined />}
                </Button>
            </div>
            <Menu
                mode="inline"
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
    )
}

export default Sidebar