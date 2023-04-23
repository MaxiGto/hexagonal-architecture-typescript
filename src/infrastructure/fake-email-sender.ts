import { EmailSender } from "../domain/email-sender";

export class FakeEmailSender implements EmailSender {
    send(email: string, text: string): Promise <void> {
        console.log(`Simulating email to ${email}, text: ${text}`);
        return Promise.resolve();
    }

}