import { Injectable, NotFoundException } from "@nestjs/common"
import { UpsertCustomersDTO } from "src/customers/dto/UpsertCustomers.dto"

@Injectable()
export class EmployeeRepository{
    private employees: Array<Employee> = []
    
    findAll(){
        return this.employees
    }

    findOne(id) {
        const employee = this.employees.find(e => e.id == id)
        if(!employee){
            return
        }
        return employee
      }
      
    create(employee: UpsertCustomersDTO){
        const last_employee = this.employees[this.employees.length - 1]
        const newId = last_employee ? last_employee.id + 1 : 1
        const newEmployee = new Employee
        newEmployee.id = newId
        newEmployee.name = employee.name
        newEmployee.email = employee.email
        this.employees.push(newEmployee)
        return newEmployee
    }

    update(id, employee) {
        const employeeId = Number(id)
        const employeeIndex = this.employees.findIndex(c => c.id === employeeId)
        if (employeeIndex === -1){
            return false
        }

        this.employees[employeeIndex] = {...this.employees[employeeIndex], ...employee}
        return this.employees[employeeIndex]
    }

    remove(id: number) {
        const employeeId = Number(id)
        const employeeIndex = this.employees.findIndex(c => c.id === employeeId)

        if(employeeIndex === -1){
            return
        }

        const oldemployee = this.employees[employeeIndex]
        this.employees.splice(employeeIndex, 1)
        return oldemployee
      }
}

class Employee {
    id: number;
    name: string;
    email: string;
  }