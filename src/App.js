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
	const getCodeParam = searchParams.get('code');

	const navigate = useNavigate();

	useEffect(() =>{
		if(!getCodeParam || getCodeParam.length < 0){
			return;
		}
		
		// validate token
		fetch("http://localhost:3030/api/user/auth/discord/exchange", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				code: getCodeParam,
			}),
		}).then(response => response.json()).then(response =>{
			if(response.status === "FAIL"){
				return console.log(response.message);
			}
			if(response.status === "OK"){
				console.log(response);
				// setUserToken(response.data.userToken);
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
