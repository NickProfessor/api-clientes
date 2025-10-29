import { IsEmail, IsNumber, IsString, MinLength } from "class-validator"

export class CreateCustomersDTO{
    @IsNumber()
    id: number

    @IsString()
    @MinLength(3)
    name: string

    @IsEmail()
    email: string
}