import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

export const typeORMconfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: process.env.IP,
	username: process.env.USER,
	password: process.env.PAS,
	port: 5432,
	database: 'sum2213',
	entities: [__dirname + '/../**/*.entity.{js, ts}'],
	autoLoadEntities: true,
    synchronize: true
};
