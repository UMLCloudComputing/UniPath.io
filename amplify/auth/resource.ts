import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * When used alongside data, it is automatically configured as an auth provider for data
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({

    // Auth policies
    loginWith: {
        email: true,

        // Social providers
        // externalProviders: {

        //     // Google
        //     google: {
        //         clientId: secret('GOOGLE_CLIENT_ID'),
        //         clientSecret: secret('GOOGLE_CLIENT_SECRET')
        //     },

        //     callbackUrls: [
        //         'http://localhost:3000/home',
        //         'https://main.d3c5lsis3camij.amplifyapp.com/home'
        //     ],
        //     logoutUrls: [
        //         'http://localhost:3000/', 
        //         'https://main.d3c5lsis3camij.amplifyapp.com'
        //     ],
        // },
    },

    // Specify user pool settings
    userAttributes: {
            // birthdate: {
            //     required: false,
            //     mutable: true,
            // },
            // email : {
            //     required: true,
            //     mutable: true,
            // },
            // preferredUsername: {
            //     required: false,
            //     mutable: true,
            // },
            // nickname: {
            //     required: false,
            //     mutable: true,
            // },
    
            

    },
});
