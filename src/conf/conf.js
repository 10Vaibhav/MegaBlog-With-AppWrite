const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    api_key : String(import.meta.env.VITE_API_KEY)
}

// Add validation and debugging
Object.keys(conf).forEach(key => {
    if (!conf[key]) {
        console.error(`Missing configuration for ${key}`);
    } else {
        console.log(`${key}: ${conf[key]}`); // This will help debug the values
    }
});

export default conf;
