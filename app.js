const express = require('express');
const app = express();
const userRoutes = require('./route/userRoute');
const db = require('./models');


app.use(express.json());

db.sequelize.sync()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

app.use('/api', userRoutes);

app.get('/',(req,res)=>{
  res.send("Hello");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
