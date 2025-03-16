// import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import React, { useState } from 'react';
// import useGroups from '../../hooks/useGroups';
// import './profile.css';

// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
// 	return {
// 		key,
// 		icon,
// 		children,
// 		label,
// 	};
// }

// const items = [
// 	getItem('Profile', '1', <PieChartOutlined />),
// 	getItem('Groups', 'sub1', <UserOutlined />, [
// 		getItem('gr1', '3'),
// 		getItem('gr2', '4'),
// 		getItem('gr3', '5'),
// 	]),
// ];

// const Profile = () => {
// 	const [collapsed, setCollapsed] = useState(false);
// 	const {
// 		token: { colorBgContainer, borderRadiusLG },
// 	} = theme.useToken();

// 	const [group, setGroup] = useState('');

// 	const { groups, groupsLoading, groupsError } = useGroups(group);

// 	return (
// 		<Layout
// 			style={{
// 				minHeight: '100vh',
// 			}}
// 		>
// 			<Sider
// 				collapsible
// 				collapsed={collapsed}
// 				onCollapse={value => setCollapsed(value)}
// 			>
// 				<div className='demo-logo-vertical' />
// 				<Menu
// 					theme='dark'
// 					defaultSelectedKeys={['1']}
// 					mode='inline'
// 					items={items}
// 				/>
// 			</Sider>
// 			<Layout>
// 				<Header
// 					style={{
// 						padding: 0,
// 						background: colorBgContainer,
// 					}}
// 				>
// 					<div>
// 						<div className='profile'>
// 							<div className='header-search'>
// 								<input
// 									type='text'
// 									value={group}
// 									placeholder='Search...'
// 									onChange={e => setGroup(e.target.value)}
// 								/>

// 								{group.length > 0 && (
// 									<div className='header-users'>
// 										{groups &&
// 											groups.map((group, index) => (
// 												<p key={index}>
// 													{group.name}
// 												</p>
// 											))}
// 										{groupsLoading && <p>Loading...</p>}
// 										{groupsError && (
// 											<p style={{ color: 'red' }}>
// 												{groupsError.message}
// 											</p>
// 										)}
// 									</div>
// 								)}
// 							</div>
// 						</div>
// 					</div>
// 				</Header>

// 				<Content
// 					style={{
// 						margin: '0 16px',
// 					}}
// 				>
// 					<Breadcrumb
// 						style={{
// 							margin: '16px 0',
// 						}}
// 					>
// 						<Breadcrumb.Item>User</Breadcrumb.Item>
// 						<Breadcrumb.Item>Bill</Breadcrumb.Item>
// 					</Breadcrumb>
// 					<div
// 						style={{
// 							padding: 24,
// 							minHeight: 360,
// 							background: colorBgContainer,
// 							borderRadius: borderRadiusLG,
// 						}}
// 					>
// 						Bill is a cat.
// 					</div>
// 				</Content>
// 				<Footer
// 					style={{
// 						textAlign: 'center',
// 					}}
// 				></Footer>
// 			</Layout>
// 		</Layout>
// 	);
// };

// export default Profile;

import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import useGroups from '../../hooks/useGroups';
import './profile.css';

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
	const { user } = useAuthContext();
	const [collapsed, setCollapsed] = useState(false);
	const [group, setGroup] = useState('');

	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const { groups, groupsLoading, groupsError } = useGroups(group);

	return (
		<Layout style={{ minHeight: '100vh' }}>
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
				>
					<div>
						<div className='profile'>
							<div className='header-search'>
								<input
									type='text'
									value={group}
									placeholder='Search...'
									onChange={e => setGroup(e.target.value)}
								/>

								{group.length > 0 && (
									<div className='header-users'>
										{groups &&
											groups.map((group, index) => (
												<p key={index}>
													{group.name}
												</p>
											))}
										{groupsLoading && <p>Loading...</p>}
										{groupsError && (
											<p style={{ color: 'red' }}>
												{groupsError.message}
											</p>
										)}
									</div>
								)}
							</div>
						</div>
					</div>
				</Header>

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
						<Breadcrumb.Item>
							{user ? user.username : 'No User'}
						</Breadcrumb.Item>{' '}
					</Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						{user
							? `${user.username} is logged in.`
							: 'You are not logged in.'}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}></Footer>
			</Layout>
		</Layout>
	);
};

export default Profile;
