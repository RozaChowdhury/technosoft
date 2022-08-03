const Members = require("./Members");
const { toTitleCase } = require("./MyStringFunctions");
const MyStringFunctions = require("./MyStringFunctions");
const Students = require("./Students");

const accessStudentClass = new Students();
const courseDetails = [
    {
        courseName : 'Automation',
        salary : 50000,
    },
    {
        courseName : 'QA',
        salary : 45000,
    },
    {
        courseName : 'Mobile',
        salary : 30000,
    }
]

class Teachers extends Members {

    static idValue = 0;

    teacher = {
        tId : 0,
        tCourseName : '',
        tSalary : 0
    }

    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */
     #isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }
    constructor(teacherName, teacherAge, teacherCountry, teacherCourseName) {
        super();
        if(teacherAge >= 21 && this.#isCourseNameValid(teacherCourseName)){
            const courseData = this.#isCourseNameValid(teacherCourseName);
            this.member.name = MyStringFunctions.toTitleCase(teacherName);
            this.member.age = teacherAge;
            this.member.location = teacherCountry.toUpperCase();
            this.teacher.tCourseName = courseData.courseName;
            this.teacher.tId = ++Teachers.idValue;
            this.teacher.tSalary = courseData.salary; 
        }
        else{
            console.log(`NOT ELIGIBLE FOR HIRE`);
        }
        // 
    }

    showMyDetails() {
        // code
        console.log(`\Teacher details:\nId: ${this.teacher.tId}`);
        super.showMyDetails();
        console.log(`Course name: ${this.teacher.tCourseName}\nSalary: $${this.teacher.tSalary}\n`);
    }

    changeTeachingCourse(newTeacherCourse) {
        // code
        const courseData = this.#isCourseNameValid(newTeacherCourse);
        if(this.#isCourseNameValid(newTeacherCourse) && this.teacher.tId !== 0){ // how to do != old course
            this.teacher.tCourseName = courseData.courseName;
            this.teacher.tSalary = courseData.salary;
            console.log(`\nTeacher course has been successfully changed to ${courseData.courseName}\n\nNew course details:`);
        }
        else if (!this.#isCourseNameValid(newTeacherCourse)){
            console.log('Invalid course name\nYour previously enrolled course details:');
        }
        else{
            console.log('You are already enrolled in the course');
        }

    }

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
    addGrade(studentId, grade) {
        // code
        const checkStudent = accessStudentClass.isStudentIdValid(studentId);
        if (this.isStudentIdValid(studentId) && accessStudentClass.studentGrade === ''){
            accessStudentClass.studentGrade = '';
            console.log(`Grade is successfully added to student ID -> ${studentId}\n Grade -> ${grade}`);
        }
        else if(accessStudentClass.studentGrade!== ''){
            console.log('Remove grade from student');
        }
        else{
            console.log(`Invalid student ID`);

        }
    }

    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
    removeGrade(studentId) {
        // code
        const checkStudent = accessStudentClass.isStudentIdValid(studentId);
        if (this.isStudentIdValid(studentId) && accessStudentClass.studentGrade !== ''){
            accessStudentClass.studentGrade = '';
            console.log(`Grade is successfully removed from student ID -> ${studentId}`);
        }
        else if(accessStudentClass.studentGrade === ''){
            console.log('Student has no grade');
        }
        else{
            console.log(`Invalid student ID`);

        }
    }


}
module.exports = Teachers;