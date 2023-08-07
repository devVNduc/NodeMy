// Phần 1: Kiểu dữ liệu
// Bài 1
console.log("BootCamp4 thực hành buổi 14")
console.log(12346)
var name = "Nguyen Trong Duc"
var age = 21
var address = "Ha Noi"
console.log(name)
console.log(age)
console.log(address)

// Bai 2
var human = {
    name: "Nguyen Trong Duc",
    gender: "Male",
    age: 19,
    address: "Ha Noi",
    phone: "0915049907"
};
console.log(human)
var a = human.name
var b = human["gender"]
console.log(a)
console.log(b)
human.name = "Nguyen Thu Ha"
human["gender"] = "Female"
var c = human.name
var d = human["gender"]
console.log(c)
console.log(d)
human.ethnic = "kinh"
console.log(human)

// Bai 3
var user = {
    ten: 'tung',
    tuoi: 20
}
console.log(user.ten)
console.log(user.tuoi)
user.ho = 'Nguyen'
user.tuoi = 30
console.log(user)
var monthSalary = {
    January: 1000,
    February: 4000,
    March: 5400,
    April: 6040,
    May: 1700,
    June: 1000,
    July: 8000,
    August: 1600,
    September: 1000,
    October: 1700,
    November: 1903,
    December: 9050
}
var result1 = 0;
var i = 0;
for (let name in monthSalary) {
    i++
    if (i <= 3) {
        result1 += monthSalary[name];
    }
}
var n = 0;
var resultAVG = 0;
var sumMonth = 12;
for (let name in monthSalary) {
    n++
    if (n <= 12) {
     resultAVG += monthSalary[name];
    }
}
console.log(resultAVG)
console.log(resultAVG / sumMonth)

// Bai 5.1
var x = [1, 3, 5];
x[0] = x[2]; // [5,3,5}
x[1] = x[0]; // [5,5,5]
console.log(x);

// Bai 5.2
var x = [1, 3, 5];
var y = [0, 5, 7];
x[0] = x[1] + y[2];
y[1] = y[2] - x[0];
console.log(x); 

// Bai 5.3
var x = [1, 3, 5, 8];
x[0] = x[x.length - 1];
console.log(x);

// Bai 5.4
var x = [1, 3, 5, 8];
var temp = x[x.length - 1];
x[x.length - 1] = x[0];
x[0] = temp;
console.log(x);
// Bai 6
var arr = [1, 6, 8, 7, 6, 9]
console.log("So luong phan tu co trong array la: " + arr.length) 
var fistItem = arr[0]
var lastItem = arr[arr.length - 1]
console.log(fistItem)
console.log(lastItem)
arr.push(5)
console.log(arr)
arr[0] = 10
arr[arr.length-1] = 10
console.log(arr)

// Bai 7
var arr2 = [1, 6, 8, 7, 10, [6, 8, 7, 4, 3, 5], 3]
var fatherFLitem = arr2[0] + arr2[arr2.length - 1]
var subarr2 = arr2[5]
var childFLitem = subarr2[0] + subarr2[subarr2.length - 1]
console.log(fatherFLitem)
console.log(childFLitem) 
subarr2.push(10)
var childFLitem2 = subarr2[0] + subarr2[subarr2.length-1]
console.log(childFLitem2) 
// Array:
// Array[value1, value2, value3,...]
// push: them cuoi  
// pop: bo cuoi
// unshift: them dau
// shift: bo dau
// splice: them va xoa item o vi tri index
// concat: noi cac mang lai voi nhau
// join: noi mang voi ky tu
// indexOf: truy xuat phan tu tai vi tri index
// lastIndexOf: giong index nhung lay phan tu cuoi
// filter: loc mang theo dieu kien
// map: thay doi mang thanh mang moi dua tren dieu kien
// find: tim phan tu phu hop voi dieu kien va tra ve 1 gia tri
// reduce: cong don
// sort: sap xep 
// slice: lay mang con (tao thanh 1 mang con)
