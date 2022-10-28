import express from "express";
import cursosRoutes from "./routes/cursos.js";
import loginRoutes from "./routes/login.js";
import cors from "cors";

//import bcrypt from "bcrypt";

const app = express();

//implentação Bcrypt
/* const users = [];
app.get('/users', (req, res) => {
    res.json(users)
});

app.post('/users', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.email, password: hashedPassword };
        users.push(user);
        res.status(201).send();
    }catch{
        res.status(500).send();
    }
}); */

app.use(express.json());
app.use(cors());

app.use("/", cursosRoutes);
app.use("/auth", loginRoutes);


app.listen(8800);