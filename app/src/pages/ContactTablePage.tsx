import React from 'react';
import { Box, Paper } from '@mui/material';
import ContactTable from '../components/ContactTable';

const ContactsTablePage: React.FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 4,
				alignItems: 'center',
				marginTop: 4,
			}}>
			<Paper
				sx={{
					padding: 3,
					boxShadow: 3,
					borderRadius: 2,
					backgroundColor: '#ffffff',
					width: '100%',
					maxWidth: 1000,
				}}>
				<ContactTable
					onEdit={(contact) => {
						console.log(contact);
					}}
				/>{' '}
			</Paper>
		</Box>
	);
};

export default ContactsTablePage;
