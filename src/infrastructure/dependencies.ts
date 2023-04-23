import { WelcomeEmailSender } from "../application/welcome-email-sender";
import { UserController } from "./user-controller";

export const welcomeEmailSender = new WelcomeEmailSender();
export const userController = new UserController(welcomeEmailSender)