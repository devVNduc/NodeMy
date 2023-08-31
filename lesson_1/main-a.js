// let users = [
//     {
//         id: 1,
//         name: "Toan",
//     },
//     {
//         id: 2,
//         name: "Dat",
//     },
//     {
//         id: 3,
//         name: "Duc",
//     },
//     //...
// ];
// let comments = [
//     {
//         id: 1,
//         user_id: 3,
//         content: 'Ngay mai chung ta hoc mon gi?'
//     },
//     {
//         id: 2,
//         user_id: 1,
//         content: 'Chung ta se hoc mon Javascript'
//     },
//     {
//         id: 3,
//         user_id: 3,
//         content: 'Vay chung ta hoc o phong may dung khong'
//     },
//     {
//         id: 4,
//         user_id: 2,
//         content: 'Dung roi do'
//     },
//     {
//         id: 5,
//         user_id: 2,
//         content: 'Mai kiem tra nua nhe!!!'
//     },
// ];
//CRUD by Fetch & REST API
let courseAPI = 'http://localhost:3000/course';
function start() {
    getCourses(renderCourses);
    handleCreateForm();
    getCourses();
}
start();
function getCourses(callback) {
    fetch(courseAPI)
        .then((response) => response.json())
        .then(callback)
}
function createCourse(dataCourse,callback) {
    let option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataCourse)
    }
    fetch(courseAPI, option)
        .then(function (dataCourse,callback) {
            return JSON.stringify(dataCourse)
        })
        .then(callback)
}
function renderCourses(courses) {
    let listCoursesBlock = document.querySelector("#list-courses")
    let html = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.title}</h4>
                <p>${course.descriptions}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            </li>
        `
    })
    console.log(html)
    console.log(courses)
    listCoursesBlock.innerHTML = html.join(' ')
}
function handleDeleteCourse(id) {
    let option = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    }
    fetch(courseAPI + "/" + id, option)
        .then(function (response) {
            return response.json();
        }) 
        .then(function () {
            getCourses(renderCourses);
        })
        // .then(function () {
        //     let deteleCourse = document.querySelector(".course-item-" + id)
        //     if (deteleCourse) {
        //         delecteCourse.remove();
        //     }
        // })
    
}
function handleCreateForm() {
    let creatbtn = document.querySelector('#create')
    creatbtn.onclick = function () {
        let title = document.querySelector('input[name="title"]').value
        console.log(title)
        let descriptions = document.querySelector('input[name="descriptions"]').value
        console.log(descriptions)
        let dataCourse = {
            title: title,
            descriptions: descriptions
        }
        createCourse(dataCourse, () => { 
            getCourses(renderCourses);
        })
        document.querySelector('input[name="title"]').value = "";
        document.querySelector('input[name="descriptions"]').value = "";
    }
    
    
}