import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  findAll() {
    return this.customerRepo.find();
  }

  createCustomer(data: Partial<Customer>) {
    const customer = this.customerRepo.create(data);
    return this.customerRepo.save(customer);
  }

  async updateCustomer(id: number, body: Partial<Customer>) {
    await this.customerRepo.update(id, body);
    return this.customerRepo.findOne({ where: { id } });
  }

  async removeCustomer(id: number) {
    const old = await this.customerRepo.findOne({ where: { id } });
    if (old) await this.customerRepo.delete(id);
    return old;
  }
}
