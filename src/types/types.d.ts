import { Schema } from "MAIN/amplify/data/resource";

export interface SemesterComponentProps {
  id: string;
  title: string;
  classes: Schema["Class"]["type"][];
}
