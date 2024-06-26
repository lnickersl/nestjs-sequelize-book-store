import { Injectable } from '@nestjs/common';
import {User} from '../../models/User';
import {InjectModel} from '@nestjs/sequelize';
import {CreateUserDto} from './dto/create-user.dto';
import {UsersModule} from './users.module';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll();
        return users;
    }
}
