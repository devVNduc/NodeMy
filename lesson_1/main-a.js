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
// //fake api
// function getComments() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(comments)
//         })
        
//     })
// }
// function getUserByIds(usersId) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             let result = users.filter(function (users) {
//                 return usersId.includes(users.id);
//             })
//             resolve(result)
//         },1000)
//      }
//     )
// }
// getComments()
//     .then(function (comment) {
//         let usersId = comment.map(function (user) {
//             return user.user_id
//         })
//         return getUserByIds(usersId)
//             .then(function (data) {
//                 return {
//                     USERS: users,
//                     COMMENTS: comments,
//                 }
//             })
//     })
//     .then(function (data) {
//         console.log(data)
//         let displayData = document.getElementById("data")
//         let htmls = '';
//         data.COMMENTS.forEach(function (COMMENTS) {
//             let datas = data.USERS.find(function (USERS) {
//                 return USERS.id === COMMENTS.user_id
//             })
//             console.log(datas)
//             htmls += `<li>${datas.name}: ${COMMENTS.content}</li>`
//         })
//         displayData.innerHTML = htmls
//     })
// let postsAPI = "https://jsonplaceholder.typicode.com/posts";
// fetch(postsAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         let htmls = data.map(function (infor) {
//             return `<li>
//             <h1>${infor.title}</h1>
//             <span>${infor.body}</span>
//             </li>`
//         })
//         let html = htmls.join(" ")
//         document.getElementById("data2").innerHTML = html
//     })
// let CourseAPI = "http://localhost:3000/course";
// fetch(courseAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     // .then(function (data) {
//     //     console.log(data)
//     // })
//     .then(function (data) {
//         let htmls = data.map(function (infor) {
//             return `
//             <li>
//             <h1>${infor.title}</h1>
//             <span>${infor.descriptions}</span>
//             </li>
//             `
//         })
//         let html = htmls.join(" ")
//         document.getElementById("data3").innerHTML = html
//     })

// let promise123 = new Promise(function (resolve, reject) {
//     reject()
//     resolve()

// })
// promise123
//     .then(function () {
//         console.log('Success')
//     })
//     .catch(function () {
//         console.log("Error");
//     })
//     .finally(function () {
//         console.log('done')
//     })
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