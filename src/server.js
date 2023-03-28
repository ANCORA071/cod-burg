import app from './app';
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`server rodando na porta ${PORT}`);
});
