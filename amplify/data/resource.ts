import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { User } from 'aws-cdk-lib/aws-iam';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Organization: a
    .model({
      OrganizationId: a.id(),
      name: a.string(),
      courses: a.hasMany("Course", "organizationId"),
      pathways: a.hasMany("Pathway", "organizationId"),
      admins: a.hasMany("User", "organizationId"),
    })
    .authorization((allow) => [allow.guest()]),
  User: a
    .model({
      UserId: a.id(),
      name: a.string(),
      organizationId: a.id(),
      organization: a.belongsTo("Organization", "organizationId"),
      courses: a.hasMany("Course", "userId"),
      pathways: a.hasMany("Pathway", "userId"),
      tasks: a.hasMany("Tasks", "userId"),
    })
    .authorization((allow) => [allow.guest()]),
  Course: a
    .model({
      CourseId: a.id(),
      name: a.string(),
      code: a.string(),
      credits: a.integer(),
      grade: a.string(),
      organizationId: a.id(),
      organization: a.belongsTo("Organization", "organizationId"),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      semesterId: a.id(),
      semester: a.belongsTo("Semester", "semesterId"),
    })
    .authorization((allow) => [allow.guest()]),
  Pathway: a
    .model({
      PathwayId: a.id(),
      name: a.string(),
      degree: a.string(),
      yog: a.string(),
      institution: a.string(),
      degreeLevel: a.string(),
      organizationId: a.id(),
      organization: a.belongsTo("Organization", "organizationId"),
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      semesters: a.hasMany("Semester", "pathwayId"),
    })
    .authorization((allow) => [allow.guest()]),
  Semester: a
    .model({
      SemesterId: a.id(),
      name: a.string(),
      pathwayId: a.id(),
      pathway: a.belongsTo("Pathway", "pathwayId"),
      courses: a.hasMany("Course", "semesterId"),
    })
    .authorization((allow) => [allow.guest()]),
  Tasks: a
    .model({
      userId: a.id(),
      user: a.belongsTo("User", "userId"),
      TaskId: a.id(),
      title: a.string(),
      details: a.string(),
      date: a.date(),
      important: a.boolean(),
      done: a.boolean(),
    })
    .authorization((allow) => [allow.authenticated()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
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
