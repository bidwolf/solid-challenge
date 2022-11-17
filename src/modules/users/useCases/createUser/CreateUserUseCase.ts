import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email);
    if(userExists){
      throw new Error("Cannot create user, this user email already exists in our system.")
    }
    const createdUser = this.usersRepository.create({email,name})
    return createdUser;
  }
}

export { CreateUserUseCase };
