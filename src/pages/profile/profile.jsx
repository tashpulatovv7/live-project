import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
const items = [
	getItem('Profile', '1', <PieChartOutlined />),
	getItem('Groups', 'sub1', <UserOutlined />, [
		getItem('gr1', '3'),
		getItem('gr2', '4'),
		getItem('gr3', '5'),
	]),
];
const Profile = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout
			style={{
				minHeight: '100vh',
			}}
		>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={value => setCollapsed(value)}
			>
				<div className='demo-logo-vertical' />
				<Menu
					theme='dark'
					defaultSelectedKeys={['1']}
					mode='inline'
					items={items}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				/>
				<Content
					style={{
						margin: '0 16px',
					}}
				>
					<Breadcrumb
						style={{
							margin: '16px 0',
						}}
					>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						Bill is a cat.
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}
				></Footer>
			</Layout>
		</Layout>
	);
};
export default Profile;
