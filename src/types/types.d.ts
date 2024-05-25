interface Semester {
    id: string,
    title: string,
    courses: Course[],
}

interface Course {
    id: string,
    name: string,
    num: string
    credits: number
}