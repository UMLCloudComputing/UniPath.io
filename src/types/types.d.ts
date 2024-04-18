interface Semester {
    id: number,
    title: string,
    _courses: Course[],
    otherSemesters: Semester[]
}

interface Course {
    id: number,
    name: string,
    num: string
    credits: number
}

interface SemesterInput {
    id: number,
    title: string,
    courses: Course[]
}