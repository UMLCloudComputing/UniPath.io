import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rules below
specify that owners, authenticated via your Auth resource can "create",
"read", "update", and "delete" their own records. Public users,
authenticated via an API key, can only "read" records.
=========================================================================*/
const schema = a.schema({
  Organization: a
    .model({
      id: a.id(),
      name: a.string(),
      location: a.string(),
      courseCatalog: a.hasOne("CourseCatalog", "orgId"),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.guest().to(["read"]),
      allow
        .groups(["ADMIN", "OWNER"])
        .to(["create", "update", "delete", "read"]),
    ]),
  CourseCatalog: a
    .model({
      id: a.id(),
      orgId: a.id(),
      org: a.belongsTo("Organization", "orgId"),
      courses: a.hasMany("Course", "catalogId"),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),
  Course: a
    .model({
      id: a.id(),
      name: a.string(),
      code: a.string(),
      credits: a.integer(),
      grade: a.string(),
      catalogId: a.id(),
      catalog: a.belongsTo("CourseCatalog", "catalogId"),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),
  Pathway: a
    .model({
      id: a.id(),
      name: a.string(),
      degree: a.string(),
      yog: a.string(),
      institution: a.string(),
      degreeLevel: a.string(),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      semesters: a.hasMany("Semester", "pathwayId"),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),
  Class: a
    .model({
      id: a.id(),
      name: a.string(),
      code: a.string(),
      credits: a.integer(),
      grade: a.string(),
      semesterId: a.id(),
      org: a.belongsTo("Semester", "semesterId"),
    })
    .authorization((allow) => allow.owner()),
  Semester: a
    .model({
      name: a.string(),
      classes: a.hasMany("Class", "semesterId"),
      pathwayId: a.id(),
      pathway: a.belongsTo("Pathway", "pathwayId"),
    })
    .authorization((allow) => [allow.owner(), allow.guest().to(["read"])]),
  User: a
    .model({
      id: a.id(),
      email: a.string(),
      name: a.string(),
      pathways: a.hasMany("Pathway", "userId"),
    })
    .authorization((allow) => [allow.owner(), allow.group("ADMIN")]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
