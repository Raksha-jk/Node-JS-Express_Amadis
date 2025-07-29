const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const users = [];
const port = 4000;

app.use(express.json());

app.get('/logins', (req, res) => {
    res.json(users);
});

app.post('/logins', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash('password', salt);
        console.log('Salt:', salt);
        console.log('Hashed Password:', hashedPassword);

        const user = { name: 'Raksha', password: hashedPassword };
        console.log("Data inserted");
        users.push(user);

        res.status(201).send("User added");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating user");
    }
});
const userRouter=require('./routers/users');
app.use('/users',userRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
