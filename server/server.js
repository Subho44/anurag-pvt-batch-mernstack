const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb = require('./config/db');
const cardRoutes = require('./routes/cardRoutes');

dotenv.config();
connectdb();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/cards',cardRoutes);

app.get('/',(req,res)=>{
    res.send('ecosmart city api running');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('server is running port 5000');
})