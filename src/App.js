import logo from './logo.svg';
import './App.css';
import VideoBackground from './components/VideoBackground';
import { ChakraProvider } from '@chakra-ui/react'
import Router from './routes/router';

function App() {
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
