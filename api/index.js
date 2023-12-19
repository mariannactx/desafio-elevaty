import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/router.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use('/api/clientes', router);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
