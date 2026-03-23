import pgPromise from "pg-promise";


const pgp = pgPromise()
const db = pgp('postgresql://dba:dba@paybank-db:5432/UserDB');


export async function obterCpf() {

    const query = `SELECT cpf FROM public."User";`

    const result = await db.oneOrNone(query);
    return result;
}