// Sample data for the tables in each accordion
export const accordionData = [
  {
    title: 'Fall 2019',
    rows: [
      { id: 'EECE.1070', name: 'EECE.1070', credits: 3, grade: 'A' },
      { id: 'MATH.1310', name: 'MATH.1310', credits: 3, grade: 'A' },
      { id: 'PHYS.1410', name: 'PHYS.1410', credits: 3, grade: 'A' },
      { id: 'PHYS.1410L', name: 'PHYS.1410L', credits: 3, grade: 'A' },
      { id: 'HONR.1100', name: 'HONR.1100', credits: 3, grade: 'A' }
    ]
  },
  {
    title: 'Spring 2020',
    rows: [
      { id: 'MATH.1320', name: 'MATH.1320', credits: 3, grade: 'A' },
      { id: 'PHYS.1440', name: 'PHYS.1440', credits: 3, grade: 'A' },
      { id: 'PHYS.1440L', name: 'PHYS.1440L', credits: 3, grade: 'A' },
      { id: 'ENGL.1020', name: 'ENGL.1020', credits: 3, grade: 'A' },
      { id: 'CHEM.1210', name: 'CHEM.1210', credits: 3, grade: 'A' },
      { id: 'CHEM.1230L', name: 'CHEM.1230L', credits: 3, grade: 'A' }
    ]
  },
  {
    title: 'Fall 2020',
    rows: [
      { id: 'EECE.2010', name: 'EECE.2010', credits: 3, grade: 'A' },
      { id: 'EECE.2070', name: 'EECE.2070', credits: 3, grade: 'A' },
      { id: 'EECE.2160', name: 'EECE.2160', credits: 3, grade: 'A' },
      { id: 'MATH.2310', name: 'MATH.2310', credits: 3, grade: 'A' },
      { id: 'EECE.2460', name: 'EECE.2460', credits: 3, grade: 'A' }
    ]
  },
  {
    title: 'Spring 2021',
    rows: [
      { id: 'EECE.2020', name: 'EECE.2020', credits: 3, grade: 'A' },
      { id: 'EECE.2080', name: 'EECE.2080', credits: 3, grade: 'A' },
      { id: 'EECE.2650', name: 'EECE.2650', credits: 3, grade: 'A' },
      { id: 'ECON.2020', name: 'ECON.2020', credits: 3, grade: 'A' },
      { id: 'MATH.2340', name: 'MATH.2340', credits: 3, grade: 'A' }
    ]
  },
  {
    title: 'Fall 2021',
    rows: [
      { id: 'EECE.3110', name: 'EECE.3110', credits: 3, grade: 'A' },
      { id: 'EECE.3620', name: 'EECE.3620', credits: 3, grade: 'A' },
      { id: 'EECE.3640', name: 'EECE.3640', credits: 3, grade: 'A' },
      { id: 'EECE.3650', name: 'EECE.3650', credits: 3, grade: 'A' },
      { id: 'PHIL.3340', name: 'PHIL.3340', credits: 3, grade: 'A' }
    ]
  },
  {
    title: 'Spring 2022',
    rows: [
      { id: 'EECE.3120', name: 'EECE.3120', credits: 3, grade: 'A' },
      { id: 'EECE.3170', name: 'EECE.3170', credits: 3, grade: 'A' },
      { id: 'EECE.3600', name: 'EECE.3600', credits: 3, grade: 'A' },
      { id: 'EECE.3630', name: 'EECE.3630', credits: 3, grade: 'A' },
      { id: 'EECE.3660', name: 'EECE.3660', credits: 3, grade: 'A' }
    ]
  },
  {
    title: 'Fall 2022',
    rows: [
      { id: 'EECE.3991', name: 'EECE.3991', credits: 3, grade: 'A' },
      { id: 'EECE.4610', name: 'EECE.4610', credits: 3, grade: 'A' },
      { id: 'EECE.3550', name: 'EECE.3550', credits: 3, grade: 'A' }
    ]
  },
  {
    title: 'Spring 2023',
    rows: [
      { id: 'EECE.4130', name: 'EECE.4130', credits: 3, grade: 'A' },
      { id: 'EECE.4991', name: 'EECE.4991', credits: 3, grade: 'A' }
    ]
  }
];

export const pathwayData = {
  pathways: [
    {
      "title": "Computer Science",
      "degree": "Bachelor of Science",
    },
    {
      "title": "Mechanical Engineering",
      "degree": "Bachelor of Engineering",
    }
  ]
}

export const mockPathwayApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pathwayData);
    }, 500);
  });
};

export const testingSemesters = {
  semesters: [
    {
      id: 1,
      semesterTitle: 'Fall 2019',
      courses: [
        { id: 1, num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
        { id: 2, num: "MATH.1310", name: "Calculus I", credits: 3 },
        { id: 3, num: "PHYS.1410", name: "Physics I", credits: 3 },
        { id: 4, num: "PHYS.1410L", name: "Physics I Lab", credits: 1 },
        { id: 5, num: "HONR.1100", name: "Honors Seminar", credits: 3 }
      ]
    },
    {
      id: 2,
      semesterTitle: 'Spring 2020',
      courses: [
        { id: 6, num: "MATH.1320", name: "Calculus II", credits: 3 },
        { id: 7, num: "PHYS.1440", name: "Physics II", credits: 3 },
        { id: 8, num: "PHYS.1440L", name: "Physics II Lab", credits: 1 },
        { id: 9, num: "ENGL.1020", name: "English Composition", credits: 3 },
        { id: 10, num: "CHEM.1210", name: "General Chemistry", credits: 3 },
        { id: 11, num: "CHEM.1230L", name: "General Chemistry Lab", credits: 1 }
      ]
    },
    {
      id: 3,
      semesterTitle: 'Fall 2020',
      courses: [
        { id: 12, num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
        { id: 13, num: "MATH.1310", name: "Calculus I", credits: 3 },
        { id: 14, num: "PHYS.1410", name: "Physics I", credits: 3 },
        { id: 15, num: "PHYS.1410L", name: "Physics I Lab", credits: 1 },
        { id: 16, num: "HONR.1100", name: "Honors Seminar", credits: 3 }
      ]
    },
    {
      id: 4,
      semesterTitle: 'Spring 2021',
      courses: [
        { id: 17, num: "MATH.1320", name: "Calculus II", credits: 3 },
        { id: 18, num: "PHYS.1440", name: "Physics II", credits: 3 },
        { id: 19, num: "PHYS.1440L", name: "Physics II Lab", credits: 1 },
        { id: 20, num: "ENGL.1020", name: "English Composition", credits: 3 },

      ]
    }]
}