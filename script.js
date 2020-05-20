let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    },
];
//console log to see the objects:
console.log(submissions);


let addSubmission = (array, newName, newScore, newDate) => {
    if (newScore >= 60) {
        pass = true;
    } else {
        pass = false;
    }
    let person = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: pass,
    };
    array.push(person);
};
addSubmission(submissions, "Pat", 50, "2020-01-01");
// console log the new submission
console.log(submissions);


let deleteSubmissionByIndex = (array, index) => {
    index = [4];
    array.splice(index, 4);
};
deleteSubmissionByIndex(submissions, 4);
//showing the object taken out of array
console.log(submissions);



let deleteSubmissionByName = (array, name) => {
    let index = array.indexOf(name);
    array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Jill");
// Take Jill out of the array
console.log(submissions);



let editSubmission = (array, index, score) => {
    newScore = score;
    array[index].score = newScore;

    if (score >= 60) {
        pass = true;
    } else {
        pass = false;
    }
};
//editSubmission(submissions, 2, 68);
// "Jack's" score changed
console.log(submissions);


let findSubmissionByName = (array, name) => {
    return array.name === "Joe";
};
findSubmissionByName(submissions, "Joe");
// finding object by name "Joe"
console.log(submissions.find(findSubmissionByName));


let findLowestScore = array => {
    let lowestScore = array[0];
    array.forEach((element) => {
        if (element.score < lowestScore.score) {
            lowestScore = element
        }
        console.log(lowestScore);
    });
    return lowestScore;
}
findLowestScore(submissions);

let findAverageScore = array => {
    var sum = 0;
    for (var i of array) {
        sum += i.score;
    }
    var numbersCnt = array.length;
    return (sum / numbersCnt);
}
//finding the average scores
console.log(findAverageScore(submissions));


let filterPassing = array => {
return array.passed === true;
}
filterPassing(submissions);
let filtered = submissions.filter(filterPassing);
// log the two with passing scores
console.log(filtered);


let filter90AndAbove = array => {
    return array.score >= 90;
}
filter90AndAbove(submissions);
let above90 = submissions.filter(filter90AndAbove);
//log the objects with score >=90
console.log(above90);
