import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isAdmin = this.usersRepository.findById(user_id);
    if(!isAdmin || !isAdmin.admin){
      throw new Error("You don't have permission to do that!");
    }
    const users=this.usersRepository.list()
    return users;
  }
}

export { ListAllUsersUseCase };
