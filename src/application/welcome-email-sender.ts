import { UserRepository } from "../domain/user-repository";

export class WelcomeEmailSender {

    constructor(private readonly userRepository: UserRepository){}

    async run(userId: string) {
        console.log("User", userId);
        const user = await this.userRepository.getById(userId);

        if(!user) throw new Error(`User id not found ${userId}`);

        console.log("User", user.email);
    }

}