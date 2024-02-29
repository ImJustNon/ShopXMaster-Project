import logo from './logo.svg';
import './App.css';
import VideoBackground from './components/VideoBackground';
import { ChakraProvider } from '@chakra-ui/react'
import Router from './routes/router';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setUserToken } from './utils/manageUserToken';

function App() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const getTokenParam = searchParams.get('token');

	const navigate = useNavigate();

	useEffect(() =>{
		if(!getTokenParam || getTokenParam.length < 0){
			return;
		}
		
		// validate token
		fetch("https://shopxmaster-api.nonlnwza.xyz/user/token/validate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userToken: getTokenParam,
			}),
		}).then(response => response.json()).then(response =>{
			if(response.status === "FAIL"){
				console.log(response.message);
			}
			if(response.status === "OK"){
				setUserToken(response.data.userToken);
			}
			navigate("/");
		}).catch(e =>{
			console.log(e);
			navigate("/");
		});
	}, []);

	return (
		<>
			<ChakraProvider>
				<VideoBackground />
				<div className="relative text-white text-center">
					<Router />
				</div>
			</ChakraProvider>
		</>
	);
}

export default App;
