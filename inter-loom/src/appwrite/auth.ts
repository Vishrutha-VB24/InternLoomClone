import { conf } from "@/conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    logout() {
      throw new Error("Method not implemented.");
    }
    client = new Client();
    account: Account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectID);
        this.account = new Account(this.client);
    }

    async login({ email, password }: { email: string; password: string }) {
        try {
            // Clear any existing sessions before logging in
            await this.account.deleteSessions();
    
            // Create a new session
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Login Error:", error.message);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
