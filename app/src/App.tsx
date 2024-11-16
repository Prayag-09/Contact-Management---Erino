import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
	CssBaseline,
	Container,
	Box,
	Typography,
	Button,
	createTheme,
	ThemeProvider,
} from '@mui/material';
import ContactFormPage from './pages/ContactPage';
import ContactsTablePage from './pages/ContactTablePage';

const theme = createTheme({
	typography: {
		h1: {
			fontSize: '3rem',
			fontWeight: 700,
			textAlign: 'center',
			color: '#ffffff',
		},
	},
	palette: {
		primary: {
			main: '#111827',
		},
		secondary: {
			main: '#111827',
		},
		background: {
			default: '#f3f4f6',
		},
	},
});

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Box
					sx={{
						minHeight: '100vh',
						background: 'linear-gradient(to bottom, #111827, #f3f4f6)',
						py: 5,
					}}>
					<Container maxWidth='md'>
						<Box mb={4}>
							<Typography variant='h1'>Contact Management</Typography>
						</Box>
						<Box display='flex' justifyContent='center' gap={2} mb={4}>
							<Link to='/contact' style={{ textDecoration: 'none' }}>
								<Button variant='contained' color='primary'>
									Go to Contact Form
								</Button>
							</Link>
							<Link to='/table' style={{ textDecoration: 'none' }}>
								<Button variant='contained' color='secondary'>
									View Contacts Table
								</Button>
							</Link>
						</Box>
						<Routes>
							<Route path='/contact' element={<ContactFormPage />} />
							<Route path='/table' element={<ContactsTablePage />} />
						</Routes>
					</Container>
				</Box>
			</Router>
		</ThemeProvider>
	);
};

export default App;
