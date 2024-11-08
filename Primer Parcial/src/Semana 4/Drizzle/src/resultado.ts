import { eq } from 'drizzle-orm';
import { createConnection } from './db';
import { resultados } from './schema';

export async function updateResultado(id: number, data: Partial<typeof resultados.$inferSelect>) {
  const db = await createConnection();
  await db.update(resultados).set(data).where(eq(resultados.ID, id));
}


export async function deleteResultado(id: number) {
  const db = await createConnection();
  await db.delete(resultados).where(eq(resultados.ID, id));
}
