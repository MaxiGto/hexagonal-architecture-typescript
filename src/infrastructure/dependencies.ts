import { WelcomeEmailSender } from "../application/welcome-email-sender";
import { InMemoryUserRepository } from "./in-memory-user-repository";
import { UserController } from "./user-controller";

const inMemoryUserRepository = new InMemoryUserRepository();
export const welcomeEmailSender = new WelcomeEmailSender(inMemoryUserRepository);
export const userController = new UserController(welcomeEmailSender);