import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { UpsertEmployeeDTO } from './dto/UpsertEmployee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: UpsertEmployeeDTO) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeeService.(+id);
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpsertEmployeeDTO) {
    return this.employeeService.updateEmployee(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.removeEmployee(+id);
  }
}
