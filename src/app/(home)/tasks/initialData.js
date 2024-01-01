export const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Complete the Tasks Page', important: true, checked: false},
        'task-2': { id: 'task-2', content: 'Transfer the Backend Stack to Amplify 2.0', important: true, checked: false},
        'class-1': { id: 'class-1', content: "COMP.4220 - Machine Learning", important: true, checked: false},
        'class-2': {id: 'class-2', content: "COMP.2040 - Computing IV", important: false, checked: true},
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do List',
            tasksIds: ['task-1', 'task-2'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Classes to Register',
            tasksIds: ['class-1', 'class-2'],
        },
    },
    columnOrder: ['column-1', 'column-2'],
};