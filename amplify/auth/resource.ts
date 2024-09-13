import { defineAuth, secret } from "@aws-amplify/backend";
import { preSignUp } from "./pre-sign-up/resource";
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
        attributeMapping: {
          email: "email",
          fullname: "name",
        },
        scopes: ["email"],
      },

      callbackUrls: [
        "http://localhost:3000",
        "https://unipath.io",
        "https://new-amplify.dlg3hfa689bpo.amplifyapp.com",
      ],
      logoutUrls: [
        "http://localhost:3000",
        "https://unipath.io",
        "https://new-amplify.dlg3hfa689bpo.amplifyapp.com",
      ],
    },
  },
  userAttributes: {
    "custom:role": {
      dataType: "String",
      mutable: true,
    },
    "custom:institution": {
      dataType: "String",
      mutable: true,
    },
    fullname: {
      mutable: true,
      required: true,
    },
  },
  triggers: {
    preSignUp,
  },
});
