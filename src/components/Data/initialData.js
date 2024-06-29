export const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Complete the Tasks Page', date: 'January 14th, 2023', important: true, checked: false },
        'task-2': { id: 'task-2', content: 'Transfer the Backend Stack to Amplify 2.0', date: 'January 25th, 2023', important: true, checked: false },
        'class-1': { id: 'class-1', content: "COMP.4220 - Machine Learning", date: 'January 16th, 2023', important: true, checked: false },
        'class-2': { id: 'class-2', content: "COMP.2040 - Computing IV", date: 'January 16th, 2023', important: false, checked: true },
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Important',
            tasksIds: ['task-1', 'task-2', 'class-1'],
        },
        'column-2': {
            id: 'column-2',
            title: 'To Do List',
            tasksIds: ['task-1', 'task-2'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Classes to Register',
            tasksIds: ['class-1', 'class-2'],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

export const initialTasks = [
    {
        id: '1',
        title: "finish homework",
        details: "finish it by 11:59pm",
        date: "2024-06-23",
        important: false,
        done: false
    },
    {
        id: '2',
        title: "sfsdfs",
        details: "sdfsdf them",
        date: "2024-06-23",
        important: true,
        done: false
    },
    {
        id: '3',
        title: "Tangowe4ngoiretngsks",
        details: "io4kbgoi4qbgi them",
        date: "2024-06-23",
        important: true,
        done: false
    },
    {
        id: '4',
        title: "oi3bgib4ng5",
        details: "fiib435go'ib1345gib1gnish them",
        date: "2024-06-23",
        important: true,
        done: false
    },
    {
        id: '5',
        title: "oi13b'4goib134g",
        details: "j1b3;gjob13'gob them",
        date: "2024-06-23",
        important: true,
        done: false
    },
    {
        id: '6',
        title: "Tasks",
        details: "finish them",
        date: "2024-06-23",
        important: false,
        done: false
    },
    {
        id: '7',
        title: "Tasks",
        details: "finish them",
        date: "2024-23-23",
        important: false,
        done: false
    },
    {
        id: '8',
        title: "Tasks",
        details: "finish them",
        date: "2024-11-23",
        important: true,
        done: false
    },
    {
        id: '9',
        title: "Tasks",
        details: "finish them",
        date: "2024-06-23",
        important: false,
        done: false
    }
]