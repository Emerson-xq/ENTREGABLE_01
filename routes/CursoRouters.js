import express from "express";
import {
  obtenerCursos,
  obtenerCursoPorId,
  crearCurso,
  actualizarCurso,
  eliminarCurso
} from "../controllers/cursoController.js";

const router = express.Router();

router.get("/", obtenerCursos);
router.get("/:id", obtenerCursoPorId);
router.post("/", crearCurso);
router.put("/:id", actualizarCurso);
router.delete("/:id", eliminarCurso);

export default router;
