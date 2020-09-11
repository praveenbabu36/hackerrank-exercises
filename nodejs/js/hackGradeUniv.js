// problem solving - easy

gradingStudents = (grades) => {
  // Write your code here
  console.log(grades);
  let newGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    let diff = 5 - (grade % 5);
    if (diff < 3 && grade >= 38) {
      grade = grade + diff;
    }
    newGrades.push(grade);
    //console.log("New Grade:", grade);
  }
  return newGrades;
};

const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));
