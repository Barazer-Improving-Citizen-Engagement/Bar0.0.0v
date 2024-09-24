import 'react-native-url-polyfill/auto'
import { ID, Account, Client, Avatars, Databases } from 'react-native-appwrite';

export const config ={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.kulture.barazer',
    projectId: '66ed31c9000a9650d207',
    databaseId: '66ed348e003ba166437b',
    userCollectionId: '66ed34ff002349a72a05',
    forumCollectionId: '66ed358a000f9b405411',
    storageId: '66ed39120025424f8276'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform)

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

   export const createUser = async ( email, password) => {
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password
        )
        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials()

        await signIn(email, password)

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                // name: email.split('@')[0],
                avatar: avatarUrl,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(), 
            } 
        )
        return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
        
    }

    export const signIn = async (email, password){
        try{
            const session = await account.createEmailPasswordSession(email, password)
            if(!session) throw Error;
            return session
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

export const getCurrentUser = async () =>{
    try{
        const currentAccount = await account.get();
        
        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            {
                where: [
                    ['accountId', '=', currentAccount.$id]
                ]
            }
        )
        if(!currentUser) throw Error;
        return currentUser.documents[0];


    }catch (error){
        console.log(error);
        // throw new Error(error);

    }

}
   // Function to check if there is an active session

export const checkActiveSession = async () => {
    try {
      const session = await account.getSession('current'); // Get the current session
      return session !== null; // Return true if there is an active session
    } catch (error) {
      // If there's an error (e.g., no active session), handle it appropriately
      if (error.code === 401) {
        return false; // No active session
      }
      throw error; // Re-throw other unexpected errors
    }
  };
  
  
  // Function to delete all sessions for the current user
  
  export const deleteSessions = async () => {
    try {
      // Get the list of all sessions
      const sessions = await account.listSessions();
  
      // Delete each session
      await Promise.all(
        sessions.sessions.map(async (session) => {
          await account.deleteSession(session.$id);
        })
      );
  
      console.log('All sessions deleted successfully');
    } catch (error) {
      console.error('Error deleting sessions:', error.message);
      throw error; // Re-throw the error for further handling
    }
  };
      

    