import { Navigate } from 'react-router-dom';

const Login = () => {
	if (localStorage.getItem('token')) {
		return <Navigate to='/' replace />;
	}
	return <div>login</div>;
};

export default Login;
