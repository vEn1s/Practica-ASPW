import { mysqlTable, int, varchar, text, serial } from 'drizzle-orm/mysql-core';


export const pacientes = mysqlTable('paciente', {
  ID: serial('id').primaryKey(),  
  Nombre: varchar('nombre', { length: 255 }).notNull(),
  Identificacion: int('identificacion').notNull(),
});


export const resultados = mysqlTable('resultado', {
    ID: serial('id').primaryKey(),
    ID_Paciente: int('id_paciente').notNull(),
    ID_TipoExamen: int('id_tipo_examen').notNull(),
    Resultadoss: text('resultadoss').notNull(),
    ValorPagado: int('valorpagado').notNull(),  
    Observacion: text('observacion').notNull(),
  });
  

export const tipoExamenes = mysqlTable('tipo_examen', {
  ID: serial('id').primaryKey(),  
  Descripcion: varchar('descripcion', { length: 255 }).notNull(),
  Indicaciones: varchar('indicaciones', { length: 255 }).notNull(),
});
