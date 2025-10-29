import { HttpCode, Injectable, NotFoundException, Res } from "@nestjs/common"
import { CustomersRepository } from "./customers.repository"
import { NotFoundError } from "rxjs";

@Injectable()
export class CustomersService{
    constructor(private customersRepository: CustomersRepository){}
    get(){
        return this.customersRepository.get()
    }

    create(customer){
        return this.customersRepository.create(customer)
    }
    
    update(id, body){
        const response = this.customersRepository.update(id, body);
        if(!response){
            throw new NotFoundException("Usuário não encontrado")
        }
        return {message: "Usuário atualizado!", user: response}
    }

    
    delete(id){
        
        const response = this.customersRepository.delete(id)

        if(!response){
            throw new NotFoundException("Usuario nao encontrado")
        }
        
        return {message: "Usuário deletado com sucesso!", user: response}
    }
}