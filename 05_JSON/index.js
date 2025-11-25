
let userObj =
{
    username: "rabe3",
    grade: 100,
    passord: "Rabea1234",
    isConnected: true,
    address: {
        country: "Israel",
        city: "Tel Aviv",
        street: "Dizengoff"
    },
    allGrades: [{ csharp: 90 }, { cpp: 70 }, 100, 95, 85, 90]
}

let newGrade = userObj.grade + 10;
userObj.grade += 10;
userObj.id = 1000;

let userObj2 = userObj;
userObj2.grade = 0;
let grade1 = userObj.grade;

userObj.address.street = "";
userObj["address"].city = "Jerusalem";

let arr = [userObj, {
    username: "rabe3",
    grade: 100,
    passord: "Rabea1234",
    isConnected: true,
    address: {
        country: "Israel",
        city: "Tel Aviv",
        street: "Dizengoff"
    },
    allGrades: [{ csharp: 90 }, { cpp: 70 }, 100, 95, 85, 90]
}
]
arr[0].allGrades[1] = { CPP: 100 };
ARR[1].avg = 95;

let user2 = arr[1];
user2.passord = "1234";

