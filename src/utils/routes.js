const student = {
  home: '/student/home', // * Dashboard Home - Student
  allTests: '/student/test/all', // * Dashboard All Tests for student
  takeTest: '/student/test/:id', // * Take a test
};

const examiner = {
  home: '/examiner/home', // * Dashboard Home - Examiner
  createTest: '/examiner/test/new', // * Create a test
  viewTest: '/examiner/exams-details/:examId', // * view a test
};

const general = {
  profile: '/profile',
};

export { student, general, examiner };
