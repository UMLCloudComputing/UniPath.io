import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Organization: a
    .model({
      id: a.id(),
      name: a.string(),
      location: a.customType({
        streetAddress: a.string(),
        city: a.string(),
        state: a.string(),
        zipCode: a.string()
      }),
      courseCatalog: a.hasOne("CourseCatalog", "orgId"),
      users: a.string().array()
    })
    .authorization((allow) => [
      allow.owner(),
      allow.guest().to(["read"]),
      allow.ownersDefinedIn("users")
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
    .authorization((allow) => [allow.owner()]),
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
      id: a.id(),
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
    Task: a
    .model({
      id: a.id(),
      title: a.string(),
      details: a.string(),
      date: a.date(),
      important: a.boolean(),
      done: a.boolean(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "iam",
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
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
