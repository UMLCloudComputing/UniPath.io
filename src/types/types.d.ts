
export interface SemesterType {
  id: string;
  title: string;
  courses: CourseType[];
}

export interface CourseType {
  id: string;
  name: string;
  num: string;
  credits: number;
}

