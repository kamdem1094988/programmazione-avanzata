import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur l\'API de gestion de grille !');
});

app.listen(port, () => {
  console.log(`Le serveur est lancé sur http://localhost:${port}`);
});
