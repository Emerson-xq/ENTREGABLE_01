import conexion from "../DB/conexion.js";

const CursoModel = {
  obtenerTodos: (callback) => {
    const sql = `
      SELECT 
        curso.id, curso.titulo, curso.descripcion, curso.fecha_inicio, curso.fecha_fin, 
        curso.duracion_horas, curso.precio,
        docente.nombre AS docente, 
        subcategoria.nombre AS subcategoria,
        categoria.nombre AS categoria
      FROM curso
      JOIN docente ON curso.id_docente = docente.id
      JOIN subcategoria ON curso.id_subcategoria = subcategoria.id
      JOIN categoria ON subcategoria.id_categoria = categoria.id;
    `;
    conexion.query(sql, callback);
  },

  obtenerPorId: (id, callback) => {
    conexion.query("SELECT * FROM curso WHERE id = ?", [id], callback);
  },

  crear: (curso, callback) => {
    const sql = `
      INSERT INTO curso (titulo, descripcion, fecha_inicio, fecha_fin, duracion_horas, precio, id_docente, id_subcategoria)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    conexion.query(sql, [
      curso.titulo,
      curso.descripcion,
      curso.fecha_inicio,
      curso.fecha_fin,
      curso.duracion_horas,
      curso.precio,
      curso.id_docente,
      curso.id_subcategoria
    ], callback);
  },

  actualizar: (id, curso, callback) => {
    const sql = `
      UPDATE curso 
      SET titulo=?, descripcion=?, fecha_inicio=?, fecha_fin=?, duracion_horas=?, precio=?, id_docente=?, id_subcategoria=?
      WHERE id=?;
    `;
    conexion.query(sql, [
      curso.titulo,
      curso.descripcion,
      curso.fecha_inicio,
      curso.fecha_fin,
      curso.duracion_horas,
      curso.precio,
      curso.id_docente,
      curso.id_subcategoria,
      id
    ], callback);
  },

  eliminar: (id, callback) => {
    conexion.query("DELETE FROM curso WHERE id = ?", [id], callback);
  }
};

export default CursoModel;
