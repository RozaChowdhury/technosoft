const Students = require('./Students');
const Teachers = require('./Teachers');


const s1 = new Students('jOHn', 20, 'USA', 'mobile');
const t1 = new Teachers('Jane', 24, 'USA', 'mobile');

s1.showMyDetails();
s1.changeCourse('mobile');
s1.showMyDetails();
// t1.addGrade(1,'a');
// t1.showMyDetails();
t1.changeTeachingCourse('mobile');
t1.showMyDetails();
/*
    idValue = 0
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s1.enrollment('jOHn', 20, 'USA', 'mobile');
/*
        idValue = 1
        student = {
        sName : 'john',
        sAge : 20,
        sCountry : 'USA',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : 'Mobile',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s1.showMyDetails();
// s1.changeCourse('qa');
// s1.showMyDetails();
// s1.makePayment(500);

// const s2 = new Students('Gigi', 20, 'USA', 'QA');
// /*
//     idValue = 0;
//     student = {
//         sName : '',
//         sAge : 0,
//         sCountry : '',
//         sId : 0,
//         sGrade : '',
//         sCourseDetails : {
//             courseName : '',
//             coursePrice : 0,
//             courseLength : 0,
//         },
//         sBalance : 0
//     }
// */

// // s2.enrollment('Gigi', 20, 'USA', 'QA');


// s2.showMyDetails();


// const s3 = new Students('kiAN', 21, 'uSa', 'moBiLE');

// s3.showMyDetails();

