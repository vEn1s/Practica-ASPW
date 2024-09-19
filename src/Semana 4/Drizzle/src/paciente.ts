import { eq } from 'drizzle-orm';
import { createConnection } from './db';
import { pacientes } from './schema';

export async function updatePaciente(id: number, data: Partial<typeof pacientes.$inferSelect>) {
  const db = await createConnection();
  await db.update(pacientes).set(data).where(eq(pacientes.ID, id));
}


export async function deletePaciente(id: number) {
  const db = await createConnection();
  await db.delete(pacientes).where(eq(pacientes.ID, id));
}
