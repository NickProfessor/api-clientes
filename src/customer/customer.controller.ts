import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UpsertCustomerDTO } from "./dto/UpsertCustomer.dto";
import { CustomerService } from "./customer.service";

@Controller('/customer')
export class CustomerController{
    constructor(private customerService: CustomerService){}
    @Get()
    get(){
        return this.customerService.findAll()
    }

    @Post()
    create(@Body() customer: UpsertCustomerDTO){
        return this.customerService.createCustomer(customer)
    }

    @Put(':id')
    update(@Param('id') id, @Body() customer: UpsertCustomerDTO){
        return this.customerService.updateCustomer(id, customer)
    }

    @Delete(':id')
    delete(@Param('id') id){
        return this.customerService.removeCustomer(id)
    }
}