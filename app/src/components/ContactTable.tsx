import React, { useEffect, useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Button,
	Typography,
	Box,
	TableSortLabel,
	TablePagination,
} from '@mui/material';
import { getContacts, deleteContact } from '../service/api';

interface Contact {
	id: number;
	username: string;
	email: string;
	phoneNumber: string;
	company: string;
	jobTitle: string;
}

const ContactTable: React.FC<{ onEdit: (contact: Contact) => void }> = ({
	onEdit,
}) => {
	const [contacts, setContacts] = useState<Contact[]>([]);

	const [page, setPage] = useState(0); // Pagination: current page
	const [rowsPerPage, setRowsPerPage] = useState(10); // Pagination: rows per page

	const [order, setOrder] = useState<'asc' | 'desc'>('asc'); // Sorting order
	const [orderBy, setOrderBy] = useState<keyof Contact>('username'); // Column to sort by

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const response = await getContacts();
				setContacts(response.data);
			} catch (error) {
				console.error('Error fetching contacts', error);
			}
		};
		fetchContacts();
	}, []);

	const handleDelete = async (id: number) => {
		try {
			await deleteContact(id);
			setContacts(contacts.filter((contact) => contact.id !== id));
		} catch (error) {
			console.error('Error deleting contact', error);
		}
	};

	const handleRequestSort = (property: keyof Contact) => {
		const isAscending = orderBy === property && order === 'asc';
		setOrder(isAscending ? 'desc' : 'asc');
		setOrderBy(property);
	};

	// Comparator function for sorting
	const descendingComparator = <T,>(a: T, b: T, orderBy: keyof T) => {
		if (b[orderBy] < a[orderBy]) return -1;
		if (b[orderBy] > a[orderBy]) return 1;
		return 0;
	};

	const getComparator = <T,>(
		order: 'asc' | 'desc',
		orderBy: keyof T
	): ((a: T, b: T) => number) =>
		order === 'desc'
			? (a, b) => descendingComparator(a, b, orderBy)
			: (a, b) => -descendingComparator(a, b, orderBy);

	// Apply sorting to contacts
	const sortedContacts = React.useMemo(
		() => contacts.slice().sort(getComparator(order, orderBy)),
		[contacts, order, orderBy]
	);

	// Handle page change
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	// Handle rows per page change
	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Box
			sx={{
				maxWidth: '100%',
				overflowX: 'auto',
				boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
				p: 2,
			}}>
			<Typography
				variant='h4'
				sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
				Contact List
			</Typography>
			<Table
				sx={{
					minWidth: 650,
					border: '4px solid #000000',
					overflow: 'hidden',
				}}>
				<TableHead>
					<TableRow
						sx={{
							backgroundColor: '#1976d2',
							color: '#fff',
							textAlign: 'center',
						}}>
						{[
							{ id: 'username', label: 'Username' },
							{ id: 'email', label: 'Email' },
							{ id: 'phoneNumber', label: 'Phone' },
							{ id: 'company', label: 'Company' },
							{ id: 'jobTitle', label: 'Job Title' },
						].map((column) => (
							<TableCell
								key={column.id}
								sortDirection={orderBy === column.id ? order : false}
								sx={{ fontWeight: 'bold', border: '1px solid #ddd' }}>
								<TableSortLabel
									active={orderBy === column.id}
									direction={orderBy === column.id ? order : 'asc'}
									onClick={() => handleRequestSort(column.id as keyof Contact)}>
									{column.label}
								</TableSortLabel>
							</TableCell>
						))}
						<TableCell sx={{ fontWeight: 'bold', border: '1px solid #ddd' }}>
							Actions
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{sortedContacts
						.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((contact) => (
							<TableRow
								key={contact.id}
								sx={{
									'&:hover': {
										backgroundColor: '#eeee',
										cursor: 'pointer',
									},
								}}>
								<TableCell
									sx={{ border: '1px solid #ddd', textAlign: 'center' }}>
									{contact.username}
								</TableCell>
								<TableCell
									sx={{ border: '1px solid #ddd', textAlign: 'center' }}>
									{contact.email}
								</TableCell>
								<TableCell
									sx={{ border: '1px solid #ddd', textAlign: 'center' }}>
									{contact.phoneNumber}
								</TableCell>
								<TableCell
									sx={{ border: '1px solid #ddd', textAlign: 'center' }}>
									{contact.company}
								</TableCell>
								<TableCell
									sx={{ border: '1px solid #ddd', textAlign: 'center' }}>
									{contact.jobTitle}
								</TableCell>
								<TableCell
									sx={{ border: '1px solid #ddd', textAlign: 'center' }}>
									<Button
										onClick={() => onEdit(contact)}
										variant='contained'
										color='primary'
										sx={{ mr: 1 }}>
										Edit
									</Button>
									<Button
										onClick={() => handleDelete(contact.id)}
										variant='outlined'
										color='secondary'>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component='div'
				count={contacts.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Box>
	);
};

export default ContactTable;
