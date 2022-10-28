import { db } from "../db.js";

export const getCursos = (_, res) => {
    const q = "SELECT * FROM cursos";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addCursos = (req, res) => {
    const q = 
        "INSERT INTO cursos(`nomeCursos`, `professorResp`, `categoria`, `descricao`, `imagem`) VALUES(?)";

        const values = [
            req.body.nomeCursos,
            req.body.professorResp,
            req.body.categoria,
            req.body.descricao,
            req.body.imagem,
        ];
         db.query(q, [values], (err) => {
            if (err) return res.json(err);

            return res.status(200).json("Curso cadastrado com sucesso!")
         });
};

export const updateCursos = (req, res) => {
    const q =
      "UPDATE cursos SET `nomeCursos` = ?, `professorResp` = ?, `categoria` = ?, `descricao` = ?, `imagem` = ? WHERE `idcursos` = ?";
  
    const values = [
        req.body.nomeCursos,
        req.body.professorResp,
        req.body.categoria,
        req.body.descricao,
        req.body.imagem,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Curso atualizado com sucesso.");
    });
  };

  export const deleteCursos = (req, res) => {
    const q = "DELETE FROM cursos WHERE `idcursos` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Curso deletado com sucesso.");
    });
  };
