// PHẦN 1:ARRAY METHOD CƠ BẢN
// Bài 1:
var data2 = [1, 1, 3, 4, 4, 5, 6, 7, 9]
data2.push(8)
data2.push(10)
data2.unshift(5)
data2[5] = 11
data2.splice(4, 1, 2, 5)
console.log(data2)

// Bai 2:
var data03 = ['Cam', 'Xoài', 'Mít', 'Bưởi', 'Dưa gang', 'Quýt']
var data03p2 = data03
console.log(data03p2)
var indexFind
var data03b2 = data03.findIndex(function name(params) {
    return params == "Dưa gang"
})
console.log(data03b2)
data03.splice(data03b2, 1,"Dưa hấu")
console.log(data03p2)

var data03Length = data03.length
console.log(data03Length)
data03.splice((data03Length / 2), 0, 'Mận')
data03.unshift("Dứa")
data03.push("Chanh")
console.log(data03)

// Bai 3
const persons = [
    { firstname: "Đào", lastname: "Văn Anh" },
    { firstname: "Trần", lastname: "Huy" },
    { firstname: "Lê", lastname: "Hoàng" }
]; 

var newPersons = []
newPersons.push({ firstname: 'Nguyen', lastname: "Thu Ha" },
    { firstname: 'Nguyen', lastname: "Trong Duc" },
    { firstname: 'Dinh', lastname: "Van Nam" },
    { firstname: "Trần", lastname: "Huy" }
)
console.log(newPersons)
var firstname = "Trần"
var lastname = "Huy"
newPersons.filter(function name(params) {
    if (params.firstname === firstname && params.lastname === lastname) {
        params.firstname = "Nguyễn"
        params.lastname = "Hoàng"
    }
})
newPersons.map(function (person) {
    person.address = "Ha Noi"
})
console.log(newPersons)

// Bai 4
var sumNumber = 0;
var arr2 = ['4', '6', 1, 2, 3, 5, 'y', 't', 5]
var arrayNumber = arr2.filter(function (a) {
    if (typeof a === "number") {
        return a
    }
})
var sumResult = arrayNumber.reduce(function (currentReusult, index) {
    currentReusult += index
    return currentReusult
}, 0)
console.log(sumResult)

// Bai 5
var list1 = [3, 6, 7, 9, 5]
var list2 = [3, 5, 7, 8, 6, 6, 7]
var list3 = list1.concat(list2)
console.log(list3)
var sumList3 = list3.reduce(function (currentReusult, index) {
    currentReusult += index
    return currentReusult
}, 0)
console.log(sumList3)
var sortList3 = list3.sort(function (a, b) {
    if (a > b) return -1
    if (a < b) return 1
    if (a == b) return 0
})
console.log(sortList3)

// Bai 6
console.log("Bai 6")
var data = [1, 9, 2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6, 9, 10, 10, 19]
var duplicates = []
for (let x = 0; x < data.length; x++) {
    for (let y = x + 1; y < data.length; y++) {
        if ((data[x] == data[y]) && !duplicates.includes(data[x])) {
            duplicates.push(data[x])
        }
    }
}
console.log(duplicates)

// Bai 7
var array = [1,2, 5, 7, 8, 9, 15]
var evenArray = array.filter(function (x) {
    return x % 2 == 0
})
console.log(evenArray)

var oldArray = array.filter(function (x) {
    return x % 2 != 0
})
console.log(oldArray)

var biggerFive = array.filter(function (x) {
    return x > 5
})  
console.log(biggerFive)

var divideFive = array.filter(function (x) {
    return x % 5 == 0
})
console.log(divideFive)
var biggerFiveAddOne = biggerFive.map(function (x) {
    return x+=1
})
console.log(biggerFiveAddOne)

var sliceArrayAt3 = array.slice(3, array.length)
console.log(sliceArrayAt3)

array.splice(2, 1)
array.push(10)
console.log(array)

var itemMutiple2Array = []
var itemMutiple2 = function (x) {
    itemMutiple2Array.push(x*2)
} 
array.forEach(function (x) {
    return itemMutiple2(x)
})
console.log(itemMutiple2Array)

// Bai 8
var arr = [1, 8, 5, 2, 7, 6, 9, 2, 6]
var increase = arr.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    if (a = b) return 0
})
console.log(increase)

var decrease = arr.sort(function (a, b) {
    if (a < b) return 1
    if (a > b) return -1
    if (a = b) return 0
})
console.log(decrease)

// Bai 9
var array = [1, 3, 7, 8, 9, 0, 10, 3, 2]; 
var increase9 = array.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    if (a = b) return 0
})
console.log(increase9)
var itemMutiple29 = array.map(function (a) {
    return a*2
})
console.log(itemMutiple29)

var array3 = [1, 2, 3, 5, 1]
array.unshift(array3)
array.splice(5, 0, array3)
var newArray = array.flat()
console.log(newArray)
var evenItem = newArray.filter(function (a) {
    return a%2==0
})
var oldItem = newArray.filter(function (a) {
    return a % 2 != 0
})
console.log(evenItem)
console.log(oldItem)
var halfArraylenght = newArray.length / 2
newArray.splice(halfArraylenght, 0, 5)
console.log(newArray)


// Bai 10
console.log("BAI 10")
var array2 = [1, 4, 2, 4, 5, 7, 8, 3, 6, 4, 9, 1, 6, 5];
array2.pop()
array2.unshift(12)
console.log(array2)
array2.splice(2, 4)
console.log(array2)
console.log(array2.slice(3, 8))

// bai 11
console.log('BAI 11')
var array3 = [1, 4, 2, 4, 5, 7, 8, 3, 6, 4, 9, 1, 6, 5, 4, 3, 8, 9];
var newArray = array3.filter(function (a) {
    return a % 2 == 0
})
console.log(newArray)
var newArray2 = array3.filter(function (a) {
    if (a % 2 != 0 && a > 3) {
        return a
    }
})
console.log(newArray2)

// Bai 12
var array1 = [1, 5, 2, 6, 2, 8, 9, 4, 6, 2, 3, 5, 7, 9, 3, 2, 75, 6, 4, 3, 7, 5, 2, 4, 13];
var findFirstIndex7 = array1.findIndex(function (a,index) {
    if (a === 7) {
        return index
    }
})
console.log(findFirstIndex7)
var findLastIndex7 = array1.lastIndexOf(7)
console.log(findLastIndex7)
var decreaseArray = array1.sort(function (a, b) {
    if (a > b) { return -1 }
    if (a < b) { return 1 }
    if (a == b) { return 0 }
})
console.log(decreaseArray)
var increaseArray = array1.sort(function (a, b) {
    if (a > b) { return 1 }
    if (a < b) { return -1 }
    if (a == b) { return 0 }
})
console.log(increaseArray)

var array2 = array1.filter(function name(item) {
    if (item > 5) {
        return item
    }
})
console.log(array2)

var array3 = array2.filter(function name(item) {
    if (item > 5 && (item+2)%3==0) {
        return item
    }
}) 
console.log(array3)

// Bai 13
console.log('BAI 13')
var hoaQua = [
{ ten:'Xoài', sx:'China', sl:'100'},
{ ten:'Xoài', sx:'VietNam', sl:'130' },
{ ten:'Xoài', sx:'ThaiLan', sl:'100' },
{ ten:'Cam', sx:'China', sl:'200' },
{ ten:'Cam', sx:'ThaiLan', sl:'150' },
{ ten:'Nho', sx:'VietNam', sl:'120' },
{ ten:'Xoài', sx:'ThaiLan', sl:'100' },
]
var mdVN = hoaQua.filter(function (item) {
    if (item.sx === 'VietNam')
        { return item }
})
console.log(mdVN)

var mdSlH100 = hoaQua.filter(function name(params) {
    if (params.sl > 100) {
        return params
    }
})
console.log(mdSlH100)

var name = "Xoài"
function findFruit(name) {
    var thisFruit = hoaQua.filter(function (params) {
        if (params.ten === name)
        {
            return params
        }
    })
    console.log(thisFruit)
}
findFruit(name)

var country = "VietNam"
function findCountry(country) {
    var thisFruitC = hoaQua.filter(function name(params) {
        if (params.sx === country)
        {
            return country
            }
    })
    console.log(thisFruitC)
}
findCountry(country)

// Bai 14
var arr = [1, 4, 2, 5, 7, 2, 8, '23', 3, 8, 6, 'a', 3, 9, 'd', "c", 11, 'f', 'r', 35, 'g', 'b', 42, 'k', 'j', 'h', '11']
var arrayNumber = []
var arrayString = []
arr.filter(function (item) {
    if (typeof item === "number") {
        arrayNumber.push(item)
        arrayNumber.sort(function (a, b) {
            if (a > b) { return 1 }
            if (a < b) { return -1 }
            if (a == b) { return 0 }
        })
        
    }
    else if(typeof item === "string") {
        arrayString.push(item)  
        arrayString.sort(function (a, b) {
            if (a > b) { return 1 }
            if (a < b) { return -1 }
            if (a == b) { return 0 }
        })
        
    }
})
var sumNumber = arrayNumber.reduce(function (sum, item) {
    sum += item
    return sum
}, 0)
console.log("SumNumber:" + sumNumber)
var sumString = arrayString.reduce(function (sum, item) {
    sum += item
    return sum
}, 0)
console.log("SumString:" + sumString)
console.log(arrayNumber)
console.log(arrayString)  

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
var checkPrime =  arr.filter(function (item) {
    if (typeof item === "number" && isPrime(item)) {
        return item
    }
})
console.log(checkPrime)

// Bai 15
console.log('BAI 15')
var result = []
var data = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6, 3]
function countDuplicate(data) {
    for (let index = 0; index < data.length; index++) {
        var count = 0
        var item = data[index]
        for (const item of data) {
            if (item == data[index]) {
                count++;
            }
        }
        var countNow = count
        result.push({
            phanTu: item,
            lapLai: countNow
        })
    }
    console.log(result)
}
countDuplicate(data)

// Bai them nodemy
var arr = [
    { name: 'Duy', toan: 10, ly: 5 },
    { name: 'Nam', toan: 10, ly: 1 },
    { name: 'Khai', toan: 7, ly: 1 },
    { name: 'Toan', toan: 4, ly: 2 },
    { name: 'Dung', toan: 4, ly: 4 },
    { name: 'Duc', toan: 1, ly: 10 },
    { name: 'Hung', toan: 1, ly: 10 }
]

var chuan = {
    A: 8,
    B: 6,
    C: 4
}
// B1: Hãy map để thêm tổng điểm vào mỗi object trong arr

console.log("Them tong diem: ")
arr.map(function (arr) {
    arr.TongDiem = arr.toan + arr.ly
})
console.log(arr)
// B2: Hãy phân loại ra mức A B C cho từng môn toán, lý,  VD: Toán 7: hạng B => {name: 'Duy', toan: 9, ly: 5, hangToan: B, hangLy: C}
console.log("Phan hang: ")
arr.map(function (item) {
    if (item.toan > chuan.A) {
        item.hangToan = "A"
           
    }
    else if (item.toan > chuan.B) {
        item.hangToan = "B"        
    }
    else {
        item.hangToan = "C"        
    }
    if (item.ly > chuan.A) {
        item.hangLy = "A"

    }
    else if (item.ly > chuan.B) {
        item.hangLy = "B"
    }
    else {
        item.hangLy = "C"
    }
       
})
console.log(arr)
// B3: Sắp xếp các bạn có điểm toán giảm dần
console.log("Sap xep diem toan giam dan: ")
arr.sort(function (a, b) {
    if (a.toan > b.toan) { return -1 }
    if (a.toan < b.toan) { return 1 }
    if (a.toan == b.toan) { return 0 }
})
console.log(arr)
// B4: Sắp xếp các bạn có điểm Lý tăng dần
console.log("Sap xep diem ly tang dan: ")
arr.sort(function (a, b) {
    if (a.ly > b.ly) { return 1 }
    if (a.ly < b.ly) { return -1 }
    if (a.ly == b.ly) { return 0 }
})
console.log(arr)

// B5: Hãy sắp xếp các bạn có điểm Toán giảm dần, Nếu điểm toán bằng nhau thì sắp xếp theo Lý giảm dần
console.log("Nếu điểm toán bằng nhau thì sắp xếp theo Lý giảm dần: ")
arr.sort(function (a, b) {
    if (a.toan > b.toan) { return -1 }
    if (a.toan < b.toan) { return 1 }
    if (a.toan == b.toan) {
        if (a.ly > b.ly) { return -1 }
        if (a.ly < b.ly) { return 1 }
        if (a.ly == b.ly) { return 0 }
    }
})
console.log(arr)
// B6: Hãy lọc ra danh sách các bạn có Chuẩn A Toán
console.log("Danh sách các bạn có Chuẩn A Toán: ")
var AHangToan = arr.filter(function (a) {
    if (a.hangToan == "A") {
        return a.name
    }
})
console.log(AHangToan)
// B7: Hãy lọc ra danh sách các bạn có Chuẩn C Lý
console.log("Danh sách các bạn có Chuẩn C Ly: ")
var AHangLy = arr.filter(function (a) {
    if (a.hangLy == "C") {
        return a.name
    }
})
console.log(AHangLy)
// B8 Tìm bạn có điểm Lý thấp nhất,
console.log('Bạn có điểm Lý thấp nhất :')
arr.sort(function (a, b) {
    if (a.ly > b.ly) { return 1 }
    if (a.ly < b.ly) { return -1 }
    if (a.ly == b.ly) { return 0 }
})
for (const item of arr) {
    if (item.ly == arr[0].ly) {
        console.log(item.name)
    }
}
// B9 Tìm bạn có điểm Toán thấp nhất
console.log("Bạn có điểm Toán thấp nhất: ")
for (const item of arr) {
    if (item.toan == arr[arr.length - 1].toan){
        console.log(item.name)
    }
}
// B10: Tìm bạn có tổng điểm cao nhất
console.log('Bạn có tổng điểm cao nhất: ')
arr.sort(function (a, b) {
    if (a.TongDiem > b.TongDiem) { return 1 }
    if (a.TongDiem < b.TongDiem) { return -1 }
    if (a.TongDiem == b.TongDiem) { return 0 }
})
for (const item of arr) {
    if (item.TongDiem == arr[arr.length - 1].TongDiem) {
        console.log(item.name)
    }
}
 