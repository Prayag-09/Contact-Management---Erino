import { Router } from 'express';
import {
	getContacts,
	createContact,
	updateContact,
	getContactById,
	deleteContact,
} from '../controllers/contactController';

const router = Router();

router.get('/contact', getContacts);
router.post('/contact', createContact);
router.get('/contact/:id', getContactById);
router.put('/contact/:id', updateContact);
router.delete('/contact/:id', deleteContact);

export default router;
