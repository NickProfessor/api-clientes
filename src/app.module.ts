import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [CustomersModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
