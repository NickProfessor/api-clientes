import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'api-loja',
    autoLoadEntities: true,
    synchronize: true
  }),
  CustomerModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
