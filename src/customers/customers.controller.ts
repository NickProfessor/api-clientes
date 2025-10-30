import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UpsertCustomersDTO } from "./dto/UpsertCustomers.dto";
import { CustomersService } from "./customers.service";

@Controller('/customers')
export class CustomersController{
    constructor(private customerService: CustomersService){}
    @Get()
    get(){
        return this.customerService.get()
    }

    @Post()
    create(@Body() customer: UpsertCustomersDTO){
        return this.customerService.create(customer)
    }

    @Put(':id')
    update(@Param('id') id, @Body() customer: UpsertCustomersDTO){
        return this.customerService.update(id, customer)
    }

    @Delete(':id')
    delete(@Param('id') id){
        return this.customerService.delete(id)
    }
}