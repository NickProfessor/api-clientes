    import { Injectable, NotFoundException } from "@nestjs/common"
    import { CreateCustomersDTO } from "./dto/CreateCustomers.dto"
import { NotFoundError } from "rxjs"

    @Injectable()
    export class CustomersRepository{
        private customers: Customer[] = []
        
        get(){
            return this.customers
        }

        create(customer: CreateCustomersDTO){
            const last_customer = this.customers[this.customers.length - 1]
            const newId = last_customer ? last_customer.id + 1 : 1
            const newCustomer = new Customer
            newCustomer.id = newId
            newCustomer.name = customer.name
            newCustomer.email = customer.email
            this.customers.push(newCustomer)
            return newCustomer
        }

        update(id, body){
            const customerId = Number(id)
            const customerIndex = this.customers.findIndex(c => c.id === customerId)
            if (customerIndex === -1){
                return false
            }

            this.customers[customerIndex] = {...this.customers[customerIndex], ...body}
            return this.customers[customerIndex]
        }

        delete(id){
            const customerId = Number(id)
            const customerIndex = this.customers.findIndex(c => c.id === customerId)

            if(customerIndex === -1){
                return
            }

            const oldCustomer = this.customers[customerIndex]
            this.customers.splice(customerIndex, 1)
            return oldCustomer
        }
    }

    class Customer {
        id: number;
        name: string;
        email: string;
      }