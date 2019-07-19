
import Server from './server';

const app = new Server().app;
const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});