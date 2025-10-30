import { IsEmail, IsString, MinLength } from "class-validator"

export class UpsertCustomersDTO{
    @IsString({message: "Name need a string value"})
    @MinLength(3, {message: "Min 3 chars"})
    name: string

    @IsEmail(undefined, {message: "Email need a valid email!"})
    email: string
}