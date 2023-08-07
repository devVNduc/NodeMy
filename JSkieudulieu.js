// PHẦN 1: KIỂU DỮ LIỆU (CƠ BẢN)
console.log("PHẦN 1: KIỂU DỮ LIỆU (CƠ BẢN)")
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

// Array:
// Array[value1, value2, value3,...]
// push: them cuoi
// pop: bo cuoi
// unshift: them dau
// shift: bo dau
// splice: thêm và xoá tại index
// concat: nối mảng
// join: nối item thành chuỗi với ký tự
// indexOf: vị trí của phần tử
// lastIndexOf: tương tự indexOf nhưng lấy vị trí cuối
// filter: lọc mảng
// map: tạo mảng mới dựa trên mảng cũ
// find: lọc trả về 1 phần tử
// reduce: cộng dồn
// sort: sắp xếp các item trong mảng
// slice: lấy mảng con

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

// PHẦN 2: KIỂU DỮ LIỆU (NÂNG CAO)
console.log("PHẦN 2: KIỂU DỮ LIỆU (NÂNG CAO)")
// Bai 1:
var arr = [1, 2,'Nam','Hải', 5, 8, 'Huy', 3, 6,'Nấm'];
console.log(arr[0])
console.log(arr[3])
console.log(arr[5])
arr[2] = "Nguyễn Trọng Đức"
console.log(arr[2])
var firstItem = arr[0]
var lastItem = arr[arr.length - 1]
console.log("Phần tử đầu tiên là: " + firstItem)
console.log("Phần tử cuối cùng là: " + lastItem)

// Bai 2:
var arr2 = ['Lâm', 'Hải', 'Huy', 'Anh', 'Duy'];
console.log(arr2.length)
console.log(arr2[0])
console.log(arr2[arr2.length - 1])
var change = '';
change = arr2[0]
arr2[0] = arr2[arr2.length - 1]
arr2[arr2.length - 1] = change
arr2.splice(3, 1, "Anh");
console.log(arr2)

// Bai 3
var luongt5 = {
    Anh: 1222000,
    Duy: 2250000,
    Thai: 222225455
}
console.log(luongt5.Duy)
luongt5.Thai = 40000000

var sumSalary = 0;
for (const salary in luongt5) {
    sumSalary += luongt5[salary]
}
console.log(sumSalary)
luongt5.Truong = 4444444
console.log(luongt5)
for (const salary in luongt5) {
    sumSalary += luongt5[salary]
}
console.log("Tổng Lương Tháng 5 của Anh , Duy , Thái, Trường  là " + sumSalary)

// Bai 4
var arr004 = [1, 13, 5, 7, 8, 9, [6, 9, 12, 5], 10, [12, 21, 3], 24, 22];
var subarr41 = arr004[6]
var subarr42 = arr004[8]
subarr41[0]
subarr41[subarr41.length - 1]
subarr42[0]
subarr42[subarr42.length - 1]
var sumItemArr004 = arr004[0] + arr004[arr004.length - 1] + subarr41[0] + subarr41[subarr41.length - 1] + subarr42[0] + subarr42[subarr42.length - 1]
console.log(sumItemArr004)
arr004.push(2)
var sum2ItemArr004 = arr004[0] + arr004[arr004.length - 1] + subarr41[0] + subarr41[subarr41.length - 1] + subarr42[0] + subarr42[subarr42.length - 1]
console.log(sum2ItemArr004)
console.log(arr004)

// Bai 5
let arr51 = [1, 12, 3, 5, 7, 8, 9, 15, 2];
let arr52 = [7, 2, 3, 5, 3, 8, 9, 15, 2];
var change51 = ''
arr51[0]
arr51[arr51.length - 1]
change51 = arr51[0]
arr51[0] = arr51[arr51.length - 1]
arr51[arr51.length - 1] = change51
console.log(arr51)
var change52 = ''
arr52[0]
arr52[arr52.length - 1]
change52 = arr52[0]
arr52[0] = arr52[arr52.length - 1]
arr52[arr52.length - 1] = change52
console.log(arr52)
var sum = arr51[0] + arr51[arr51.length - 1] + arr52[0] + arr52[arr52.length - 1]
console.log(sum)
var differ = arr51[0] - arr51[arr51.length - 1] - arr52[0] - arr52[arr52.length - 1]
console.log(differ)
arr51.push(7, 9, 11, 13)
arr52.push(1, 5, 7)
console.log(arr51)
console.log(arr52)
var sumItemArr51 = 0;
for (const item in arr51) {
    sumItemArr51 += arr51[item]
}
var sumItemArr52 = 0;
for (const item in arr52) {
    sumItemArr52 += arr52[item]
}
console.log(sumItemArr51)
console.log(sumItemArr52)
var sum = arr51[0] + arr51[arr51.length - 1] + arr52[0] + arr52[arr52.length - 1]
console.log(sum)
var differ = arr51[0] - arr51[arr51.length - 1] - arr52[0] - arr52[arr52.length - 1]
console.log(differ)

// Bai 6
var Nodemy = [
    {
        ho: 'Nguyen',
        ten: 'A',
        class: 'b1',
        subject: [{ name: 'html' }, { name: 'css' }, { name: 'js' }]
    },
    {
        ho: 'Tran',
        ten: 'B',
        class: 'b2',
        subject: [{ name: 'React' }, { name: 'js' }]
    },
    {
        ho: 'Nguyen',
        ten: 'C',
        class: 'b3',
        subject: [{ name: 'css' }, { name: 'React' }]
    },
    {
        ho: 'Dang',
        ten: 'D',
        class: 'b1',
        subject: [{ name: 'html' }, { name: 'js' }, { name: 'React' }]
    }]
console.log("Họ và tên là: ")
for (const element of Nodemy) {
    console.log(element.ho)
    console.log(element.ten)
    console.log(" ")
}
for (const element of Nodemy) {
    for (const lesson of element.subject) {
        if (lesson.name == "html") {
            lesson.name = "Ruby"
        }
    }
}
Nodemy.push({
    ho: 'Hoang Van',
    ten: 'Duy',
    class: 'b4',
    subject: [{ name: 'html' }, { name: 'css' }, { name: 'js' }, { name: 'React' }]
})
console.log(Nodemy)
console.log("Tổng số môn học mà học viên đã học là: ")
var count = 0;
var arraylesson = new Set([]);
for (const element of Nodemy) {
    for (const lesson of element.subject) {
        arraylesson.add(lesson.name)
    }
}
for (const iterator of arraylesson) {
    // console.log(iterator)
    count+=1
}
console.log(count)

// Bai 8
user = {
    ten: 'tung',
    tuoi: 20,
    banBe: ['vy', 'tung', 'tuan'],
    diaChi: { tinh: 'HCM', quan: 'Q1' }
}
console.log(user.banBe)
let arraybanBe;
arraybanBe = user.banBe;
console.log(arraybanBe[arraybanBe.length-1])
console.log(user.diaChi)
console.log("Ten toi la " + user.ten + ",tôi " + user.tuoi + " tuổi, tôi ở " + user.diaChi.quan + " tinh " + user.diaChi.tinh)
user.diaChi.duong = "Nguyen Tuan"
user.banBe.push("thai")
console.log(user)

