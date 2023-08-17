// import mongoose from 'mongoose'

// const URI='mongodb+srv://matias:123@cluster0.a32foug.mongodb.net/'

// mongoose.connect(URI)
// .then(db=>console.log('Conectado a la base de datos mongodb '))
// .catch(err=>console.log(err));


// export default mongoose


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde .env

const URI = process.env.MONGO_URI;

mongoose
  .connect(URI)
  .then((db) => console.log('Conectado a la base de datos MongoDB'))
  .catch((err) => console.log(err));

export default mongoose;
