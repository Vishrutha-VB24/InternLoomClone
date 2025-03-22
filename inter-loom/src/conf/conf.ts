import { Client, Account, Databases, ID } from "appwrite";

// Load environment variables
const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT),
  appWriteDbId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteUserCollectionId: String(import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID),
  // appWriteTeamId: String(import.meta.env.VITE_APPWRITE_TEAM_ID),
};

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint(conf.appWriteUrl)
  .setProject(conf.appWriteProjectID);

// Initialize Appwrite Services
const account = new Account(client);
const databases = new Databases(client);
// const teams = new Teams(client); 

console.log("Appwrite Config:", conf);

export { conf, client, account, databases, ID };
// const conf = {
//   appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//   appWriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT),
// }

// console.log(conf);

// export default conf;