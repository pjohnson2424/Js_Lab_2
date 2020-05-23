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
// console.log(submissions);

const addSubmission = (array, newName, newScore, newDate) => {
    // Can be simplified to:
    let person = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60, // You can use an expression to set the value inline here.
        // The expression newScore >= 60 evaluates to either true or false.
    };
    array.push(person);
};
addSubmission(submissions, "Pat", 50, "2020-01-01");
addSubmission(submissions, "Bob", 55, "2020-01-01");
addSubmission(submissions, "Nancy", 68, "2020-01-01");
// console log the new submission
console.log(submissions);


// const deleteSubmissionByIndex = (array, index) => {
//     // The `index` argument here is telling the splice function
//     // the index at which to start changing the array.
//     // The number 1 is the delete count: the number of elements
//     // to delete using splice.
//     // Your solution was hard-coded to delete four items starting
//     // at index 4, every time. This solution here starts at 
//     // whatever index we tell it, and only removes 1 item.
//     array.splice(index, 1);
// };
// deleteSubmissionByIndex(submissions, 4);
// //showing the object taken out of array
// console.log(submissions);



// const deleteSubmissionByName = (array, name) => {
//     let index = array.indexOf(name);
//     array.splice(index, 1);
// };
// deleteSubmissionByName(submissions, "Jill");
// // Take Jill out of the array
// console.log(submissions);



const editSubmission = (array, index, score) => {
    array[index].score = score;

    if (score >= 60) {
        pass = true;
    } else {
        pass = false;
    }
};
editSubmission(submissions, 2, 68);
// "Jack's" score changed
console.log(submissions);


const findSubmissionByName = (array, name) => {
    let foundPerson = array.find(student => {
        return student.name === name;
    })
    return foundPerson;
};
findSubmissionByName(submissions, "Joe");
// finding object by name "Joe"
// console.log(submissions.find(findSubmissionByName));


const findLowestScore = array => {
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

const findAverageScore = array => {
    var sum = 0;
    for (var i of array) {
        sum += i.score;
    }
    return (sum / array.length);
}
//finding the average scores
console.log(findAverageScore(submissions));


// const filterPassing = object => {
//     return object.passed === true;
// }
// filterPassing(submissions);
// let filtered = submissions.filter(filterPassing);
// // log the two with passing scores
// console.log(filtered, "filtered");

// If you want to contain all of that login in one
// function, trying putting the `array.filter()` method
// inside of the `filterPassing` function. What you've done
// above on Line 122-128 works, but it's done it two different
// steps. This is one function that does all the work:
const filterPassing = (array) => {
    return array.filter(person => {
      return person.score >= 60;
    })
}  

const filter90AndAbove = array => {
    return array.score >= 90;
}
filter90AndAbove(submissions);
const above90 = submissions.filter(filter90AndAbove);
//log the objects with score >=90
console.log(above90);
