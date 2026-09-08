import express from "express"
import cors from "cors";
import pool from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/posts", async (req, res) => { 
    try {
        const result = await pool.query(`
            SELECT id, title, slug, published_at
            FROM posts
            ORDER BY published_at DESC
            `);

            res.json(result.rows);
    } catch (error) { 
        console.error(error);

        res.status(500).json({
            error: "Failed to retrieve posts"
        });
    }
})

app.listen(3000, () => { 
    console.log("Server running on port 3000");
})
