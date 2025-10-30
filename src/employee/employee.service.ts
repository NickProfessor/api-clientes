import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertEmployeeDTO } from './dto/UpsertEmployee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>
  ){}

  findAll() {
    return this.employeeRepo.find()
  }

  // findOne(id: number) {
  //   const response = this.employeeRepo.findOne(id)
  //   if(!response){
  //     throw new NotFoundException("Funcionário não encontrado")
  //   }
  //   return response
  // }
  
    createEmployee(data: Partial<Employee>) {
      const customer = this.employeeRepo.create(data);
      return this.employeeRepo.save(customer);
    }
  
    async updateEmployee(id: number, body: Partial<Employee>) {
      await this.employeeRepo.update(id, body);
      return this.employeeRepo.findOne({ where: { id } });
    }
  
    async removeEmployee(id: number) {
      const old = await this.employeeRepo.findOne({ where: { id } });
      if (old) await this.employeeRepo.delete(id);
      return old;
    }
}
