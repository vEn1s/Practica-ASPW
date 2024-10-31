import { eq } from 'drizzle-orm';
import { createConnection } from './db';
import { tipoExamenes } from './schema';


export async function updateTipoExamen(id: number, data: Partial<typeof tipoExamenes.$inferSelect>) {
  const db = await createConnection();
  await db.update(tipoExamenes).set(data).where(eq(tipoExamenes.ID, id));
}


export async function deleteTipoExamen(id: number) {
  const db = await createConnection();
  await db.delete(tipoExamenes).where(eq(tipoExamenes.ID, id));
}
