import express from 'express';
import sharp from 'sharp';
import routes from './routes/route';

const app = express();
const port = 5000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}/api/250/250/fjord.jpg`);
});

export default app;
