export class LoginModel{
    EmailId: string;
    Password: string;
    constructor(EmailId: string, Password: string){
        this.EmailId = EmailId;
        this.Password = Password;
    }
}