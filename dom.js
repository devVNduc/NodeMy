// Dom selector
// thuoc tinh:
// innerHTML
// outerHtml
// innerText
// outerText
// style(cssText)
// classList (add(),remove(),toggle(),contains())
// parentElement, children, childNode
// onclick

// Method
// getAttribute("class"), setAtrribute("class",aaaaaaa)
// addEvenlistiener('click'.function a(){})
// removeEvenlistiener('click',a)
// querySelector, getElementById,....
// document.createElement('H1') => DOM H1
// appendChild : them 1 cai dom thanh con cua minh
// removeChild :

// Event
// click, mouseup,mousedown, mousemove, mouseenter, mouseover, mouseleave, scroll
// keydown,keyup,keypress
// focus, blur, change(khi bo ra ngoai moi nhan), input(nhap la nhan, moi 1 phim la 1 su kien)
// load

// 3 cách add
// function inThongTinElement(e) {
// e.target đang ấn chuột
// e.currentTarget sự kiện hiện tại đang nghe
// e.keycode
// e.clientX tọa độ X của con trỏ chuột
// e.clientY tọa độ Y của con trỏ chuột
// e.preventDefault()
// e.stopPropagation() ngăn chăn lớp cha đc gián tiếp nghe sự kiện 
// }

// var title = document.querySelector('.title');
// var span = document.createElement('span'); //<span></span>
// span.innerHTML = 'NEW'; //<span>New</span>
// title.appendChild(span);

// offsetwitdh
// 1 ô input và 1 nút add
// nhập vào 1 input và sau khi ấn nút add thì bên dưới hiển thị 1 đối tượng chứa content của ô input và phải giữa màn hình 


var btn = document.querySelector("button");
btn.addEventListener('click', function addObject(e) {
    var areaAdd = document.getElementsByClassName("addContent")[0];
    var input = document.querySelector(".input").value;
    var newObj = document.createElement('span');
    newObj.innerHTML = input;
    areaAdd.appendChild(newObj);
    btn.removeEventListener('click',addObject)
})

function rgbToHex(rgb) {
    // Tách giá trị màu từ chuỗi RGB (ví dụ: "rgb(255, 0, 0)")
    var rgbValues = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    // Kiểm tra xem giá trị màu có hợp lệ hay không
    if (!rgbValues) {
        return rgb;
    }

    // Chuyển đổi giá trị màu sang dạng hexa
    var hex = "#" + ((1 << 24) | (rgbValues[1] << 16) | (rgbValues[2] << 8) | rgbValues[3]).toString(16).slice(1);

    return hex;
}

var examplColor = document.querySelectorAll(".event");
examplColor.forEach(function (element) {
    element.addEventListener("click", function changeColour(e) {
        var tg = e.target;
        var computedStyle = window.getComputedStyle(tg);
        var getColor = computedStyle.getPropertyValue("color");
        console.log(getColor)
        var input = document.querySelector(".CL");
        input.style.backgroundColor = rgbToHex(getColor);
       
    })
})
// tạo 1 thuật toán sắp xếp dữ liệu khi nhập số vào ô input
var arr = []
var input = document.querySelector(".sortContent");
var button = document.querySelectorAll(".btn2");
var count = 0;
button.forEach(function (element) {
    element.addEventListener(" click", function addToData(e) {
        var itemData = input.value;
        arr.push(itemData)
        const sortData = arr[0].split("")
        if (element.classList.contains("sortIn")) {
            sortData.sort(function(a,b) {
                if (a < b) return -1
                if (a > b) return 1
                if (a == b) return 0
            })
        } else {
            sortData.sort(function (a, b) {
                if (a < b) return 1
                if (a > b) return -1
                if (a == b) return 0
            })
        }
        console.log(sortData)
        var newData = document.createElement("span");
        var areaAdd = document.querySelector(".result");
        console.log("Truoc khi thay doi: " + count)
        if (count == 2) {
            while (areaAdd.firstChild) {
                areaAdd.removeChild(areaAdd.firstChild)
            }
            newData.innerHTML = sortData.join("")
            areaAdd.append(newData)
            console.log(count)
        } else {
        newData.innerHTML = sortData.join("")
        areaAdd.append(newData)
        console.log(count)
        }
        count = 2
    })
})
// Them sua xoa với DOM
 
