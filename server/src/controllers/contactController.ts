import { Request, Response } from 'express';
import { prisma } from '../db/prismaClient';

export const createContact = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { username, email, phoneNumber, company, jobTitle } = req.body;
	try {
		const existingContact = await prisma.contact.findUnique({
			where: { username },
		});
		if (existingContact) {
			res
				.status(400)
				.json({ error: 'Contact with this username already exists' });
			return;
		}
		const newContact = await prisma.contact.create({
			data: {
				username,
				email,
				phoneNumber,
				company,
				jobTitle,
			},
		});
		res.status(201).json(newContact);
	} catch (error) {
		res.status(500).json({ error: 'Failed to create contact' });
	}
};

export const getContacts = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const contacts = await prisma.contact.findMany();
		res.status(200).json(contacts);
	} catch (error) {
		res.status(500).json({ error: 'Failed to retrieve contacts' });
	}
};

export const getContactById = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;
	try {
		const contactById = await prisma.contact.findUnique({
			where: { id: parseInt(id, 10) },
		});
		if (!contactById) {
			res.status(404).json({ error: 'Contact not found' });
			return;
		}
		res.status(200).json(contactById);
	} catch (error) {
		res.status(500).json({ error: 'Failed to retrieve contact' });
	}
};

export const updateContact = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;
	const { username, email, phoneNumber, company, jobTitle } = req.body;
	try {
		const contact = await prisma.contact.findUnique({
			where: { id: parseInt(id, 10) },
		});
		if (!contact) {
			res.status(404).json({ error: 'Contact not found' });
			return;
		}
		const updatedContact = await prisma.contact.update({
			where: { id: parseInt(id, 10) },
			data: {
				username,
				email,
				phoneNumber,
				company,
				jobTitle,
			},
		});
		res.status(200).json(updatedContact);
	} catch (error) {
		res.status(500).json({ error: 'Failed to update contact' });
	}
};

export const deleteContact = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;
	try {
		const contact = await prisma.contact.findUnique({
			where: { id: parseInt(id, 10) },
		});
		if (!contact) {
			res.status(404).json({ error: 'Contact not found' });
			return;
		}
		await prisma.contact.delete({
			where: { id: parseInt(id, 10) },
		});
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: 'Failed to delete contact' });
	}
};
