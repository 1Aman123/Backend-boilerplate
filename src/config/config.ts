import * as mysqlDriver from 'mysql2';
  import {DataSourceOptions} from 'typeorm';
  import dotenv from 'dotenv';
  import  User from '../database/entities/User'
import UserRole from '../database/entities/UserRole';

  dotenv.config();      

  export function getConfig() {
   return {
    driver: mysqlDriver,
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "blogs",
    synchronize: false,
    migrations: ["src/database/migrations/*.ts"],
    entities: [User, UserRole],
} as DataSourceOptions;
}
