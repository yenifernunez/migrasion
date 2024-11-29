const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const blogRoutes = require('./router/blogrouter');
app.use('/api', blogRoutes);
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
