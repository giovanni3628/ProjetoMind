import { db } from "../db.js";


export const getLogin = (req, res) => {
    const q = "SELECT * FROM usuarios";
    const email = req.body.email;
    const senha = req.body.senha;
    

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        const user = data.filter((user) => {
            return user.email == email
        })

        if(user.length == 0) {
            return res.status(404).json({msg: "Usuário não existe."})
        }

        if(user[0].senha == senha) {
            return res.status(200).json({msg: "Login realizado com sucesso"})
        }
        
    });
};

export const addLogin = (req, res) => {
    const q = 
        "INSERT INTO usuarios(`email`, `senha`) VALUES(?)";
        
        
        const values = [
            req.body.email,
            req.body.senha,
        ]; 
        console.log(values);
         db.query(q, [values], (err) => {
            if (err) return res.json(err);

            return res.status(200).json("Usuário cadastrado com sucesso!")
         });
};