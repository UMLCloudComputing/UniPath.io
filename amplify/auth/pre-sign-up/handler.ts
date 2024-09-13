import { PreSignUpTriggerHandler } from "aws-lambda";

export const handler: PreSignUpTriggerHandler = async (event) => {
  const args = event.request.clientMetadata;
  console.log(args);

  //   if (!args) {
  //     throw new Error("clientMetadata is required");
  //   }

  console.log("PreSignUp event: ", event, args);
  return event;
};
