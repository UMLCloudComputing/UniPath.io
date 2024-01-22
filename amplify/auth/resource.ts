import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * When used alongside data, it is automatically configured as an auth provider for data
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,

    // add social providers
    externalProviders: {
    /**
     * first, create your secrets using `amplify sandbox secret`
     * then, import `secret` from `@aws-amplify/backend`
     * @see https://docs.amplify.aws/gen2/deploy-and-host/sandbox-environments/features/#setting-secrets
     */
      // CREATE AN .ENV.LOCAL FILE FOR LOCAL DEVELOPMENT ON SANDBOX
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_ID,
        scopes: ['email']
      },

    // configure callback and logout URLs
    callbackUrls: ['http://localhost:3000/', 'https://main.d3c5lsis3camij.amplifyapp.com/'],
    logoutUrls: ['http://localhost:3000/', 'https://main.d3c5lsis3camij.amplifyapp.com/'],
    },
  },
  /**
   * enable multifactor authentication
   * @see https://docs.amplify.aws/gen2/build-a-backend/auth/manage-mfa
   */
  // multifactor: {
  //   mode: 'OPTIONAL',
  //   sms: {
  //     smsMessage: (code) => `Your verification code is ${code}`,
  //   },
  // },
  userAttributes: {
    /** request additional attributes for your app's users */
    // profilePicture: {
    //   mutable: true,
    //   required: false,
    // },
  },
});
