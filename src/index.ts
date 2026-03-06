import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";

// 1. Setup the connection pool using your Neon URL
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// 2. Create the required Prisma 7 adapter
const adapter = new PrismaPg(pool);

// 3. Initialize the client with the adapter
const client = new PrismaClient({ adapter });

async function createUser() {
  
    const user = await client.user.create({
      data: {
        username: "kapghv",
        password: "456454",
        firstName: "Kapil",
        lastName: "yadav",
        age: 20,
        city: "Bhopal"
      }
    });
    console.log(user);
}
createUser();