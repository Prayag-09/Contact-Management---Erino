import React, { useState } from 'react';
import { Box, Button, TextField, InputAdornment } from '@mui/material';
import {
	AccountCircle,
	Email,
	Phone,
	Work,
	Business,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { createContact, updateContact } from '../service/api';

interface ContactFormProps {
	contact: any | null;
	onSave: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onSave }) => {
	const [formData, setFormData] = useState({
		username: contact?.username || '',
		email: contact?.email || '',
		phoneNumber: contact?.phoneNumber || '',
		company: contact?.company || '',
		jobTitle: contact?.jobTitle || '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (contact) {
			await updateContact(contact.id, formData);
		} else {
			await createContact(formData);
		}
		onSave();
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<Box
				component='form'
				onSubmit={handleSubmit}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					backgroundColor: 'white',
					padding: 3,
					borderRadius: 2,
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
				}}>
				<TextField
					label='Username'
					name='username'
					value={formData.username}
					onChange={handleChange}
					fullWidth
					variant='outlined'
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position='start'>
									<AccountCircle />
								</InputAdornment>
							),
						},
					}}
				/>
				<TextField
					label='Email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					fullWidth
					variant='outlined'
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position='start'>
									<Email />
								</InputAdornment>
							),
						},
					}}
				/>
				<TextField
					label='Phone Number'
					name='phoneNumber'
					value={formData.phoneNumber}
					onChange={handleChange}
					fullWidth
					variant='outlined'
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position='start'>
									<Phone />
								</InputAdornment>
							),
						},
					}}
				/>
				<TextField
					label='Company'
					name='company'
					value={formData.company}
					onChange={handleChange}
					fullWidth
					variant='outlined'
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position='start'>
									<Business />
								</InputAdornment>
							),
						},
					}}
				/>
				<TextField
					label='Job Title'
					name='jobTitle'
					value={formData.jobTitle}
					onChange={handleChange}
					fullWidth
					variant='outlined'
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position='start'>
									<Work />
								</InputAdornment>
							),
						},
					}}
				/>
				<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<Button
						variant='contained'
						color='primary'
						type='submit'
						sx={{
							padding: '10px 20px',
							borderRadius: '20px',
							textTransform: 'none',
						}}>
						{contact ? 'Update Contact' : 'Add Contact'}
					</Button>
				</motion.div>
			</Box>
		</motion.div>
	);
};

export default ContactForm;
