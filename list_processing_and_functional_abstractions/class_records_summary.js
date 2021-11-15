let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const reducer = (elem1, elem2) => elem1 + elem2;
const smallest = (result, value) => (result <= value ? result : value);
const largest = (result, value) => (result >= value ? result : value);

function generateClassRecordSummary(scores) {
  let result = {};
  result.studentGrades = [];
  result.exams = [];
  let totalExamScore = 0;
  let totalExerciseScore = 0;
  let score = 0;
  let counter = 0;


  for (let prop in scores) {
    totalExamScore = getTotalExamScore(scores[prop].scores.exams);
    totalExerciseScore = getTotalExerciseScore(scores[prop].scores.exercises);
    score = (Math.round(totalExamScore + totalExerciseScore));
    result.studentGrades.push(letterGrade(score));
    if (counter < 4) result.exams.push(getExamSummary(arrayCreator(scores, counter)));
    counter++;
  }

  return result;
}

function arrayCreator(object, iterator) {
  let result = [];
  for (let prop in object) {
    result.push(object[prop].scores.exams[iterator]);
  }
  return result;
}

function getExamSummary(exams) {
  let result = {};
  result.average = (exams.reduce(reducer) / exams.length);
  result.minimum = exams.reduce(smallest);
  result.maximum = exams.reduce(largest);
  return result;
}

console.log(getExamSummary([90, 50, 88, 100, 50]));

function letterGrade(score) {
  if (score >= 93) {
    return `${score} (A)`;
  } else if (score >= 85) {
    return `${score} (B)`;
  } else if (score >= 77) {
    return `${score} (C)`;
  } else if (score >= 69) {
    return `${score} (D)`;
  } else if (score >= 60) {
    return `${score} (E)`;
  } else {
    return `${score} (F)`;
  }
}

function getTotalExamScore(array) {
  return (array.reduce(reducer) / array.length) * .65;
}

function getTotalExerciseScore(array) {
  return (array.reduce(reducer)) * .35;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/
