var a = "Nguyen Trong Duc"
var b = {
    head: 1,
    leg: 4
}
var c = [1, 2, 3, 4, 5]
var d = null
var e = undefined
var f = -1
var g = function () {
    return 1
}
var boolean = true; 
var num = 10;
var result = `Ket qua kiem tra cua ban la: ${num}`
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(boolean)
console.log(result)
var name = 1
switch (name) {
    case 1:
        break;
    default:
        break;
}
function cong(a,b) {
    
}
// 6 giá trị mang falcy : false, 0, "", null, undefined, NaN
var check = false;
if ({hi: 1}.keys) {
console.log("ye")
} else {
    console.log("Hi")
} 
var arr = [3,1,8,2]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}
var person = {
    name: 'duc',
    age: 18
}
for (var x in person) {
    console.log(person[x])
}































//switch case để xét trường hợp
// var money = 9
// var money = 10
// var x = 10
// number -3 2 0 1.2 -1.2 NaN
// string 
// var name = "duc"
// var classes = `nodemy ${x}`
// array [value,value]
// object {key1: value1, key2: value2}
// fucntion
// undefint
// null
// random cac so tu 30 den 100
// function random(min, max) {
//     var rd = min + (Math.random() * (max - min))
//     var result = Math.round(rd)
//     return result
// }
// console.log(random(30, 100));
//
// function sum(a, b, c) {
//     a = (isNaN(Number(a))) ? 0 : a
//     b = (isNaN(Number(b))) ? 0 : b
//     c = (isNaN(Number(c))) ? 0 : c
//     return a + b + c
// }
// console.log(sum(10, 10, "duc"))
//
// function Yourname(name) {
//     Your_name = `Your name is ${name}`
//     return Your_name
// }
// console.log(Yourname("Nguyen Trong Duc"))
// const b = [1, 2, 3, "cho", 4, 5, 6, "cho", "meo"]
// const b = [...new set(a)]
// b.length = "cho".length
// console.log(b)
// tim so be hon trong 2 so
// function compare(a, b) {
//     var min
//     if (a < b) (
//         min = a
//     )
//     else (
//         min = b
//     )
//     return min
// }
// result = compare(10, 20)
// console.log(result)

// var diem = 5
// diem > 9 ? console.log("Xuat sac") : (diem > 8 ? console.log("Gioi") : (diem > 5 ? console.log("kha") : (diem > 2
//     ? console.log("Trung binh") : console.log("Nhap diem khong hop le"))))










// Cho 1 data có tên sản phẩm và giá sản phẩm thực hiện:
//     + Giảm giá 50 % tất cả sản phẩm
//     + Rồi sắp xếp các sản phẩm có giá giảm dần
//     + Vốn gara bỏ ra (lợi nhuận gấp đôi)
//     + Tìm ra các sản phẩm thuộc hãng xe Huynhdai
//     + Tìm ra sản phẩm có giá cao nhất và giá thấp nhất
//     + Thêm sản phẩm vao giữa danh sách
//     + Cộng giá danh sách lên 1000

// var priceList = [
//     {
//         product: "Audi A8",
//         price: 9000
//     },


//     {
//         product: "Kia Cerato",
//         price: 2000
//     },
//     {
//         product: "Merc C300",
//         price: 7000
//     },
//     {
//         product: "Huynhdai Accent",
//         price: 3000
//     },


//     {
//         product: "Huynhdai Santafe",
//         price: 5555
//     }
// ]
// console.log(priceList)
// + Giảm giá 50 % tất cả sản phẩm
// var saleProduct = priceList.map(function (obj) {
//     return {
//         product: obj.product,
//         price: Math.round(obj.price / 2)
//     }
// })
// console.log(saleProduct)
// console.log("Danh sách sau khi sắp xếp giá: ")

// var sortPrice = saleProduct.sort(function (start, end) {
//     if (start.price > end.price) {
//         return 1
//     }

//     if (start.price < end.price) {
//         return -1
//     }
//     return 0
// })
// console.log(sortPrice)
// console.log("Vốn Gara phải bỏ ra đầu tư có lời")
// var investment = priceList.reduce(function (sum, item) {
//     sum += item.price
//     return sum
// },0)
// console.log(investment * 2)
// console.log("Hang xe Huynhdai")
// var huynhdaiProduct = priceList.filter(function (item) {
//     return item.product.includes("Huynhdai")
// })
// console.log(huynhdaiProduct)
//     + Tìm ra sản phẩm có giá cao nhất và giá thấp nhất
//     + Thêm sản phẩm vao vi tri thu 3 giữa danh sách
//     + Cộng giá danh sách lên 1000
// console.log("San pham co gia thap nhat: ")
// console.log(sortPrice.slice(0, 1))
// console.log("San pham co gia cao nhat: ")
// console.log(sortPrice.slice(sortPrice.length-1))