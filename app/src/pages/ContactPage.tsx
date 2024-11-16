import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';

const ContactsPage: React.FC = () => {
	const [editingContact, setEditingContact] = useState(null);

	const refreshContacts = () => {
		setEditingContact(null);
	};

	return (
		<div>
			<div
				style={{
					backgroundColor: '#ffffff',
					padding: '20px',
					borderRadius: '8px',
					boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
					marginBottom: '20px',
				}}>
				<ContactForm contact={editingContact} onSave={refreshContacts} />
			</div>
			<div
				style={{
					backgroundColor: '#f4f6f8',
					padding: '20px',
					borderRadius: '8px',
					boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.05)',
				}}>
				<ContactTable onEdit={(contact : any) => setEditingContact(contact)} />
			</div>
		</div>
	);
};

export default ContactsPage;
