import {DataSourceOptions} from "typeorm";

export const DbConfig = {
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    entities: [],
    database: 'test',
    bigNumberStrings: false,
    synchronize: true,

} as DataSourceOptions