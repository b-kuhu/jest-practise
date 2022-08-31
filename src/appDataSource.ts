import { DataSource } from "typeorm"
import { Animal } from "./entities/animal.entity";

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Kuhub*28",
    database: "test",
    entities: [Animal],
    logging: true,
    synchronize: true,
    dropSchema:true,
    migrationsRun:true
})
console.log('Database connected');