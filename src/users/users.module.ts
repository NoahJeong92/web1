import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [EmailModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
