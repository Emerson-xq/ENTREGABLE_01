import CursoModel from "../models/cursosModel.js";

export const obtenerCursos = (req, res) => {
  CursoModel.obtenerTodos((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const obtenerCursoPorId = (req, res) => {
  const { id } = req.params;
  CursoModel.obtenerPorId(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

export const crearCurso = (req, res) => {
  CursoModel.crear(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, mensaje: "✅ Curso creado correctamente" });
  });
};

export const actualizarCurso = (req, res) => {
  const { id } = req.params;
  CursoModel.actualizar(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: "Curso actualizado correctamente" });
  });
};

export const eliminarCurso = (req, res) => {
  const { id } = req.params;
  CursoModel.eliminar(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: "Curso eliminado correctamente" });
  });
};
