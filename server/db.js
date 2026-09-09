import pg from "pg";

const { Pool } = pg;

const pool = new Pool({ 
    user: "postgres",
    host: "localhost",
    database: "personal_blog",
    password: "Ou$mane76037603",
    port: 5432,
})

export default pool

