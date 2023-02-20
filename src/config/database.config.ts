import {DataSourceOptions} from "typeorm";
import {User} from "../users/entities/user.entity";

export const DbConfig = {
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    entities: [User],
    database: 'books_db',
    bigNumberStrings: false,
    synchronize: true,

} as DataSourceOptions