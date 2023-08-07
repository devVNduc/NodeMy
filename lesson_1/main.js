//String
/* lam viec voi mang
1. to string (chuyen 1 array sang string)
2. join (them ky tu giua cac phan tu)
3. pop (xoa phan tu bat dau tu cuoi mang tro di)
4. push (them phan tu vao cuoi mang)
5. shift (xoa phan tu bat dau tu dau mang)
6. unshift (them phan tu vao dau mang)
7. splicing (cat lay phan tu chi dinh,them phan tu vao vi tri chi dinh)
8. concat (noi chuoi)
9. slicing (cat phan tu o vi tri chi dinh va lay cac phan tu da cat, khong the them phan tu)
*/



//OBJECT

/*var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
    getName: function() {
        return myInfo.name;
    }
};
myInfo['my-email'] = 'Trongducstvn@gmail.com';
var mykey = 'address'
console.log(myInfo[mykey])
console.log(myInfo['my-email'])
console.log(myInfo.getName())
*/

//Object constructor

function User(firstName, LastName, avatar) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.LastName}`
    }
}
var user = new User('Duc', 'Nguyen', 'Avatar');
var user2 = new User('Dat', 'Nguyen', 'Avatar');
User.prototype.className = 'f8'
user.title = 'Chia se'
user.address = 'Ha Noi'
user2.comment = 'okeoke'
user2.address = 'Ho Chi Minh'
console.log(user)
console.log(user2)
//
// Làm bài tại đây
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}
// Ví dụ khi sử dụng
//date
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(year)
// console.log(month)
// console.log(day)
//
// function getNextYear() {
//     return new Date().getFullYear() + 1;
// }
// console.log(getNextYear())
//
/*function Animal(name, leg, speed) {
    this.name = name;
    this.leg = leg;
    this.speed = speed;
};
var parrot = new Animal('parrot',2,'30')
console.log(parrot)
*/
/*
math object
- Math.PI
- Math.round() lam tron so 
- Math.abs() 
- Math.ceil() lam tron tren 
- Math.floor() lam tron duoi
- Math.random() tra ve so thap phan nho hon 1
- Math.min() lay so lon nhay
- Math.max() lay so nho nhat

*/
// var result = [
//     1,
//     2,
//     3
// ]

// function getRandomItem(array) {
//     if (!Array.isArray(array)) return false;
//     var random = Math.floor(Math.random() * array.length);
//     return array[random];
// }

// console.log(getRandomItem(result))

// cau lệnh rẽ nhanh 
// function run(a) {
//     if(a % 3 == 0){
//         return 1
//     }

//     if(a % 5 == 0){
//         return 2
//     }
//     if(a % 15 == 0){
//         return 3
//     }

// }


// // Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3


// var course = {
//     name: 'Javascript',
//     coin: 250
// }
// Làm bài
function getCanVoteMessage(age) {
    return age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
}



// Kỳ vọng
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

//vong lap

//for loop
function getRandNumbers(min, max, length) {
    var array = [];
    for (var i = 0; i <= length; i++) {
        array.push(Math.floor(Math.random() * (max - min) + min))
    }
    return array
}
console.log(getRandNumbers(1, 100, 5))
//
// function getTotal(arr) {
//     var sum = 0 
//     for(var i = 0;i < arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// console.log(getTotal([1,2,3]))
//
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
console.log(typeof orders)
var orderLength = orders.length;
var sum = 0
function getTotal(orders) {
    for (var i = 0; i < orderLength; i++) {
        sum += orders[i].price;
    }
    return sum;
}
console.log(getTotal(orders))

//for/in loop
function run(object) {
    var array = []
    for (var key in object) {
        var a = `Thuộc tính ${key} có giá trị ${object[key]}`
        array.push(a)
    }
    return array
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
var myInfo = {
    name: 'Trong Duc',
    age: 18,
};
function run1(object) {
    var array = []
    for (var key in object) {
        var b = `Thuộc tính ${key} có giá trị ${object[key]}`
        array.push(b)
    }
    return array
}
console.log(run1(myInfo));
// while loop
var i = 0;
var isSuccess = false;
do {
    i++
    console.log('Nạp thẻ lần ' + i);
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 3)
// continue break
//đệ quy
var array = ['a', 'b', 'c', 'd']
console.log([...(new Set(array))]);
//
/*
    array methods
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/
//String
// # 1. Các cách tạo chuỗi
//   >> Cách 1: var fullName = 'Tran Trong Nam'
//   >> Cách 2: var fullName = new String('Tran Trong Nam')

//   - nên đùng cách số 1
//   - không nên dùng cách số 2 vì: 
//     + dài dòng hơn
//     + kiểu dữ liệu sẽ là object không phải string
//     + phải khởi tạo một đối tượng nên sẽ chậm hơn

// # 3. Template string ES6
//   - Sử dụng dấu ``
//   - đưa 1 biến vào trong chuỗi: ${}
//   VD: console.log(`tôi là: ${fullName}`)

// # 4. Làm việc với chuỗi
//   - Keyword: js string methods
//   - Một số thuộc tính và phương thức hay dùng
//     >> length
//     + trả về độ dài của một chuỗi
//     VD: fullName.length --> 14

//     >> indexOf()
//     + dùng để tìm vị trí
//     + tham số thứ 1: chuỗi cần tìm kiếm
//     + tham số thứ 2: vị trí bắt đầu tìm kiếm
//       nếu không truyền sẽ mặc định = 0
//     + tìm từ trái qua phải 
//     + không tìm thấy sẽ trả về -1
//     VD_1: fullName.indexOf('trong') --> 5
//     VD_2: fullName.indexOf('n') --> 3
//     VD_3: fullName.indexOf('n', 5) --> 8
//     VD_4: fullName.indexOf('dep trai') --> -1

//     >> lastIndexOf()
//     + giống với indexOf nhưng tìm kiếm từ phải qua trái

//     >> slice()
//     + dùng để cắt chuỗi
//     + tham số thứ 1: vị trí bắt đầu
//     + tham số thứ 2: vị trí kết thúc (mặc định là vị trí cuối cùng)
//     + cắt từ trái -> phải: 0, 1, 2, 3
//     + cắt từ phải -> trái: 0, -1, -2, -3

//     VD_1: fullName.slice(5, 10) --> 'Trong'
//     VD_2: fullName.slice(-3) --> 'Nam'

//     >> replace()
//     + dùng để thay thế chuỗi
//     + tham số thứ 1: chuỗi muốn tìm kiếm
//     + tham số thứ 2: chuỗi muốn thay thế

//     VD_1: fullName.replace('Nam', 'Minh') --> 'Tran Trong Minh'
//     VD_2: fullName.replace('n', '99') --> 'Tra99 Trong Nam'
//     VD_3: fullName.replace(/n/g, '99') --> 'Tra99 Tro99g Nam'

//     >> toUpperCase()
//     + dùng để chuyển tất cả thành chữ in hoa

//     VD: fullName.toUpperCase() --> TRAN TRONG NAM

//     >> toLowerCase()
//     + dùng để chuyển tất cả thành chữ thường

//     VD: fullName.toLowerCase() --> tran trong nam

//     >> trim()
//     + loại bỏ khoảng trắng ở hai đầu của chuỗi

//     >> Split
//     + dùng để chuyển đổi chuỗi thành một mảng
//     + tham số thứ nhất: điểm chung để cắt

//     VD_1: fullName.split(' ') --> ['Tran', 'Trong', 'Nam']
//     VD_2: fullName.split('') --> ['T', 'r', 'a', 'n', ' ', 'T', 'r', 'o', 'n', 'g', ' ', 'N', 'a', 'm']

//     >> charAt()
//     + lấy ra ký tự dự vào index

//     VD: fullName.charAt(0) --> T
//     VD: fullName.charAt(11) --> N
//1.length
var myString = 'Hoc JS tai F8!';
console.log(myString.length)
//2.find index
console.log(myString.search('JS'))
//vong lap

//for loop
function getRandNumbers(min, max, length) {
    var array = [];
    for (var i = 0; i <= length; i++) {
        array.push(Math.random() * (max - min) + min);
    }
    return array;
}
getRandNumbers(1, 100, 10)
console.log("🚀 ~ file: main.js:341 ~ getRandNumbers(1, 100, 10):", getRandNumbers(1, 100, 10))
//for loop
function getTotal(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
getTotal([4, 5, 3, 5])
console.log("🚀 ~ file: main.js:351 ~ getTotal([4, 5, 3, 5]):", getTotal([4, 5, 3, 5]))
//for in
function run(object) {
    var array = [];
    for (var key in object) {
        var a = ` Thuộc tính ${key} có giá trị ${object[key]} `
        array.push(a)
    }
    return array
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));
//for of
var myInfor = {
    name: 'Trong Duc',
    age: 21
}
for (var values of Object.values(myInfo)) {
    console.log(myInfo[values])
}
//while loop
//đệ quy
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log([...(new Set(array))]);
//1.xác định được điểm dừng
//2.logic handle => tạo ra điểm dừng
//làm 1 bài đệ quy
function GiaiThua(number) {
    if (number <= 0) {
        return 1;
    }
    return sum = number * GiaiThua(number - 1)
};
console.log(GiaiThua(6))
//dùng cơ chế của bộ nhớ stack
// array methods:
//     for each()
//     every()
//     some()
//     find()
//     filter()
//     Map()
//     reduce()
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 10
    },
    {
        id: 2,
        name: 'Html, Css',
        coin: 20
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 30
    },
    {
        id: 4,
        name: 'PHP',
        coin: 40
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 50
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 60
    },
];

//bài tập mảng 2
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]
// function getMostFavoriteSport(sports) {
//     var ListSports = sports.filter(function (sports) {
//         return sports.like > 5
//     })
//     return ListSports
// };
// Kỳ vọng
// console.log(getMostFavoriteSport(sports))
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
// var newCourses = courses.map(changeCourses);
// console.log(newCourses.join(''))
//reduce()
var i = 0;
function coinhandler(accumulator, currentValue, currentIndex) {
    i++;
    // console.table({
    //     'lượt chạy: ': i,
    //     'Biến tích trữ: ': currentValue
    // });
    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinhandler, 0)
console.log(totalCoin)
//thực hành reduce()

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 9
    },
]
function getTotalGold(sports) {
    var result = sports.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.gold;
    }, 0)
    return result
};
// Expected results
console.log(getTotalGold(sports)) // Output: 23
//luyện tập reduce()2
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Nguyen Trong Duc", //true
        "Writer": "Nguyen Trong Duc",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8", //IDMB
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Nguyen Trong Duc", //true
        "Writer": "Jonathan Nolan, Nguyen Trong Duc",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6", //IDMB
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Nguyen Trong Duc", //true
        "Writer": "Jonathan Nolan (screenplay), Nguyen Trong Duc (screenplay), Nguyen Trong Duc (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0", //IDMB
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Nguyen Trong Duc", //true
        "Writer": "Bob Kane (characters), David S. Goyer (story), Nguyen Trong Duc (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3", //IDMN
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
    }
];
//tinh diem imb cua cac bo phim co tac gia la nguyen trong duc
function calculateRating(watchList) {
    var listFilm = watchList.filter(function (watchList) {
        return watchList.Director === 'Nguyen Trong Duc'
    });
    var result = listFilm.reduce(function (accumulator, currentValue) {
        return accumulator + Number(currentValue.imdbRating) / listFilm.length;
    }, 0)
    return result
};
//su dung reduce de dem cac so trong mang (reduce tu custom)
//custom reduce
//truong hop chuyen gia tri khoi tao REDUCE2
Array.prototype.reduce2 = function (callback, results) {
    for (let i = 0; i < this.length; i++) {
        results = callback(results, this[i], i, this)
    }
    return results
}
//truong hop khong chuyen gia tri khoi tao REDUCE3
Array.prototype.reduce3 = function (callback, results) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        results = this[0]
    }

    for (; i < this.length; i++) {
        results = callback(results, this[i], i, this)
    }
    return results
}
//ap dung 
const arrayNumber = [1, 2, 3, 4, 5]
function sumArray(arrayNumber) {
    const result = arrayNumber.reduce3(function (results, currentValue, currentIndex, original) {
        return results + currentValue
    }, 0)
    return result
}
console.log('RESULT: ' + sumArray(arrayNumber))
// Expected results:
function arrToObj(arr) {
    return arr.reduce(function (convert, currentValue, currentItem, original) {
        convert[currentValue[0]] = currentValue[2];
        console.log('currentItem: ' + currentItem)
        console.log('original: ' + original)
        console.log(currentValue[0])
        return convert
    }, {});
};
//currentvalue chua gia tri cua array
var arr = [
    ['name', 'Sơn Đặng', 'Hà Nội'],
    ['age', 18, 20],
];
console.log(arrToObj(arr))
//include
let arrayCourse = ['a', 'b', 'c']
console.log(arrayCourse.includes('a', 1))
//custom Callback (map,reduce,foreach,filter,find)
//custom map                                                                        
var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
Array.prototype.map2 = function (callback) {
    var Output = []
    var arrayLenght = this.length;
    for (var i = 0; i < arrayLenght; i++) {
        var result = callback(i, this[i]);
        Output.push(result)
    }
    return Output;
}
var htmls = courses.map2(function (index, course) {
    return `<h2>${course}</h2>`
});
console.log(htmls.join(''))
var test = courses.map(function (course) {
    return `<h3>${course}</h3>`
});
console.log(test.join(''))
// custom Foreach
var Countries = [
    'Viet Nam ',
    'American',
    'Russia'
];
Array.prototype.forEach2 = function (callback) {
    let Output = [];
    let arrayLenght = this.length;
    for (var i = 0; i < arrayLenght; i++) {
        var result = callback(i, this[i])
        Output.push(result)
    }
    return Output
}
var customForeah = Countries.forEach2(function (Country, index) {
    return Country, index
})
console.log("🚀 ~ file: main.js:693 ~ customForeah ~ customForeah:", customForeah)
// console.log("🚀 ~ file: main.js:691 ~ customForeah ~ customForeah:", customForeah)
//custom find
Array.prototype.find = function (callback) {
    var length = this.length
    let result
    for (let i = 0; i < length; i++) {
        if (callback(this[i])) {
            result = this[i]
            break
        }
    }
    return result
}
var numberFinds = ['1', '2', '3', '4']
var found1 = numberFinds.find(function (numberFind) {
    if (numberFind > 10)
        return numberFind
})
console.log("🚀 ~ file: main.js:700 ~ found ~ found :", found1)
//custom filter
Array.prototype.filter = function (callback) {
    let arrayFilter = []
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback(this[index], index, this)
            if (result) {
                arrayFilter.push(this[index])
            }
        }
    }
    return arrayFilter
}
var found2 = numberFinds.filter(function (numberFind, index, array) {
    return array.length % 2 === 0
})
console.log("🚀 ~ file: main.js:717 ~ found2 ~ found2 :", found2)
//custom reduce
Array.prototype.reduce3 = function (callback, results) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        results = this[0]
    }

    for (; i < this.length; i++) {
        results = callback(results, this[i], i, this)
    }
    return results
}
//ap dung 
const arrayNumbers = [1, 2, 3, 4, 5]
function sumArray(arrayNumber) {
    const result = arrayNumber.reduce3(function (results, currentValue, currentIndex, original) {
        return results + currentValue
    }, 0)
    return result
}
console.log('RESULT: ' + sumArray(arrayNumber))
//custom myMap
const numbers = [1, 2, 3];
Array.prototype.myMap = function (cb) {
    var arrayMap = []
    let arrayLenght = this.length;
    var result
    for (let i = 0; i < arrayLenght; i++) {
        result = cb(this[i], i)
        arrayMap.push(result)
    }
    return arrayMap
}
console.log(numbers.myMap(function (number) {
    return number * 2;
}))
//HTML DOM
// 1.Element: ID, class, tag, CSS selector, HTML colectiond
// 2.Attribute
// 3.Text
var headingNode = document.querySelector('.heading')
console.log(headingNode)
//
var productsListElement = document.getElementsByClassName('.products-list');
console.log("🚀 ~ file: main.js:776 ~ productsListElement:", productsListElement)
var firstProductElement = document.querySelector('.products-list .product:first-child')
console.log("🚀 ~ file: main.js:778 ~ firstProductElement:", firstProductElement)
var buttonElements = document.getElementsByTagName(buttonElements)
console.log("🚀 ~ file: main.js:780 ~ buttonElements:", buttonElements)
//CSS DOM
document.querySelector('h1').classList.add('title')
if (document.querySelector('p').classList.contains('sub-title')
    === true) {
    document.querySelector('.sub-title').classList.replace('sub-title', 'content')
}
// document.querySelector('.sub-title').classList.replace('sub-title', 'content')

/* The above code is invalid JavaScript syntax. It appears to be a mix of JavaScript and another
language or tool that uses the ` */
var classBOX = document.querySelectorAll('div')
// console.log(typeof classBOX)
// console.log("🚀 ~ file: main.js:791 ~ classBOX:", classBOX)
classBOX.forEach(function (item, index) {
    return item.classList.add('box')
})
//mouse event
var eventColor = document.querySelector('button')
console.log("🚀 ~ file: main.js:798 ~ eventColor:", eventColor)
eventColor.onclick = function (eventColor) { 
    eventColor.target.style.color = '#fff'
}
////


