import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertEmployeeDTO } from './dto/UpsertEmployee.dto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(private employeeRepository: EmployeeRepository){}
  create(createEmployeeDto: UpsertEmployeeDTO) {
    return this.employeeRepository.create(createEmployeeDto)
  }

  findAll() {
    return this.employeeRepository.findAll()
  }

  findOne(id: number) {
    const response = this.employeeRepository.findOne(id)
    if(!response){
      throw new NotFoundException("Funcionário não encontrado")
    }
    return response
  }

  update(id: number, updateEmployeeDto: UpsertEmployeeDTO) {
    const response = this.employeeRepository.update(id, updateEmployeeDto)
    if(!response){
      throw new NotFoundException("Funcionário não encontrado")
    }
    return response 
  }

  remove(id: number) {
    const response = this.employeeRepository.remove(id)
    if(!response){
      throw new NotFoundException("Funcionário não encontrado")
    }
    return response
  }
}
