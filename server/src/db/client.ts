import * as mysql2 from "https://deno.land/x/mysql2/mod.ts";

// config
import { DATABASE, TABLE } from "./config.ts";

//const client = await new Client();

const client = mysql2.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "P@ssw0rd@@",
    database: "quiz",
    connectionLimit: 4,
  });

const run = async () => {
    // create database (if not created before)
    await client.execute(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`);
    // select db
    await client.execute(`USE ${DATABASE}`);
  
    // delete table if it exists before
    await client.execute(`DROP TABLE IF EXISTS ${TABLE.CATEGORY}`);
    // create table
    await client.execute(`
    CREATE TABLE ${TABLE.CATEGORY} (
        categoryId int NOT NULL AUTO_INCREMENT,
        categoryName varchar(120) DEFAULT NULL,
        PRIMARY KEY (categoryId)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    
    `);
  };
  
//run();

export default client;

// CREATE TABLE `category` (
//     `categoryId` int NOT NULL AUTO_INCREMENT,
//     `categoryName` varchar(120) DEFAULT NULL,
//     PRIMARY KEY (`categoryId`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  

// CREATE TABLE `quiz` (
//     `quizId` int NOT NULL AUTO_INCREMENT,
//     `quizName` varchar(120) DEFAULT NULL,
//     `categoryId` int DEFAULT NULL,
//     `numberofQuestions` int DEFAULT NULL,
//     PRIMARY KEY (`quizId`),
//     UNIQUE KEY `quizId_UNIQUE` (`quizId`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  

// CREATE TABLE `userDetails` (
//     `userId` int NOT NULL AUTO_INCREMENT,
//     `username` varchar(45) DEFAULT NULL,
//     `useremail` varchar(45) DEFAULT NULL,
//     `userDetailscol` varchar(45) DEFAULT NULL,
//     PRIMARY KEY (`userId`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  

// CREATE TABLE `userquiz` (
//     `user-quizId` int NOT NULL AUTO_INCREMENT,
//     `categoryId` int DEFAULT NULL,
//     `quizId` varchar(45) DEFAULT NULL,
//     `userId` varchar(45) DEFAULT NULL,
//     PRIMARY KEY (`user-quizId`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  