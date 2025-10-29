import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateCustomersDTO } from "./dto/CreateCustomers.dto";
import { CustomersService } from "./customers.service";

@Controller('/customers')
export class CustomersController{
    constructor(private customerService: CustomersService){}
    @Get()
    get(){
        return this.customerService.get()
    }

    @Post()
    create(@Body() customer: CreateCustomersDTO){
        return this.customerService.create(customer)
    }

    @Put(':id')
    update(@Param('id') id, @Body() customer){
        return this.customerService.update(id, customer)
    }

    @Delete(':id')
    delete(@Param('id') id){
        return this.customerService.delete(id)
    }
}