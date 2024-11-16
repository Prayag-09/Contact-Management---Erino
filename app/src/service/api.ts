import axios from 'axios';

const baseURL = 'http://localhost:8000/api/contact/';
const api = axios.create({ baseURL });

export const getContacts = () => api.get('/');
export const createContact = (data: any) => api.post('/', data);
export const getContactById = (id: number) => api.get(`/${id}`);
export const updateContact = (id: number, data: any) => api.put(`/${id}`, data);
export const deleteContact = (id: number) => api.delete(`/${id}`);

export default api;
