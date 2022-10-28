import express from "express";
import { getCursos, addCursos, updateCursos, deleteCursos } from "../controllers/cursos.js";

const router = express.Router();

router.get("/", getCursos);

router.post("/", addCursos);

router.put("/:id", updateCursos);

router.delete("/:id", deleteCursos);

export default router;