import { conf } from "@/conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectID);
    this.account = new Account(this.client);

  }

  async createAccount({email, password, name}: {email: string; password: string, name: string}) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.login({email, password});
      } else {
        return  userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email, password}: {email: string; password: string}) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(" getCurrentUser error", error);
    }

    return null;
  }

  async logout() {

    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("logout error", error);
    }
  }
}

const authService = new AuthService();

export default authService