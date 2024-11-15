import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);

const port = 8000;
app.listen(port, () => {
	console.log(`Server up at : http://localhost:${port}/`);
});
