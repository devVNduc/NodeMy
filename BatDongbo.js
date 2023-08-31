// async function api1() {
//   console.log("Khoi tao API1");
//   console.log("Xu ly 1");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data 1");
//     }, 3000);
//   });
// }
// async function api2() {
//   console.log("Khoi tao API2");
//   console.log("Xu ly 2");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data 2");
//     }, 3000);
//   });
// }
// (async function() {
//     console.log('main 1')
//     await api1().then(function(data) {
//         console.log(data);
//     })
//     await api2().then(function (data) {
//       console.log(data);
//     });
//     console.log('main 2')
// })()

// test
// class counter {
//   constructor(init) {
//     this.init = init;
//     this.presentInit = init;
//   }
//   increment() {
//     this.presentInit += 1;
//     return this.presentInit;
//   }
//   decrement() {
//     this.presentInit -= 1;
//     return this.presentInit;
//   }
//   reset() {
//     this.presentInit = this.init;
//     return this.presentInit;
//   }
// }
// const counterNumber = function () {
//   return new counter(5);
// };
// const myCounter = counterNumber();
// console.log(myCounter.increment());
// var createCounter = function (init) {
//   let presentCount = init;
//   return {
//     increment: () => ++presentCount,
//     decrement: () => --presentCount,
//     reset: () => presentCount = init,
//   };
// };
// var counter = createCounter(5);
// console.log(counter.increment()); // 6 đặt 1 biến để tăng
// console.log(counter.reset());  // 5 reset lai biến đó
// console.log(counter.decrement());  // 4 giảm biến vừa reset

// var createCounter = function (init) {
//   let countNumber = init;
//   function increment() {
//     return ++countNumber;
//   }
//   function decrement() {
//     return --countNumber;
//   }
//   function reset() {
//     return (countNumber = init);
//   }
//   return { increment, decrement, reset };
// };
// const counter3 = createCounter(5);
// counter3.increment();
// counter3.decrement();
// counter3.reset();
// const promise1 = new Promise((resolve, reject) => {
//     console.log("Duc")
//     setTimeout(() =>
//     console.log("hello"),
//         resolve("Hello"), 5000)
// })
// const promise2 = new Promise((resolve, reject) => {
//     console.log("Ha");

//     setTimeout(() =>
//     console.log("world"),
//         resolve("World"), 4000);
// });
// (async () => {
//     console.log("timelap")
//     const p1 = await promise1;
//     const p2 = await promise2;
//     console.log();
//     console.log("timeleap")

// })();

// async function test1() {
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("world");
//   }, 5000);
//   console.log("I love you");
// }
// (async () => {
//   console.log("abc");
//     test1();
//   console.log("The end");
// })();
// bất đồng bộ luôn in ra sau cùng
// async function abc() {
//   console.log(8);
//     Promise.resolve(2).then(console.log);
//     // BDB
//     Promise.resolve(4).then(console.log);
//     Promise.resolve(10).then(console.log);
//     // BDB
//   console.log(3);
// }
// setTimeout(() => {
//   console.log(1);
// }, 0);
// abc();
// queueMicrotask(() => {
//   console.log(0);
// });

// console.log(6);
class Component {
  constructor(names, age) {
    this.age = age + `${typeof Coder}`.length;
    this.names = names + "?";
  }
  getname() {
    return this.names + "!!!";
  }
  getAge() {
    return ++this.age;
  }
}

class Coder extends Component {
  constructor(names, age) {
    super(names, age);
    this.age = age + 10;
    this.names = names + "<3";
  }
}
const a = new Coder("Ha", 21);
console.log("Return của con: ");
console.log(a);
// nhận return của cha nếu code của chính nó ko có thêm code thay đổi giá trị
// nhận return của chính nó nếu sau super() có 1 đoạn code làm thay đổi giá trị
console.log(
  "Return của cha khi nhận thằng biến chưa return của thằng con, và con dùng nó để gọi hàm (truyền giá trị và hàm của cha): "
);
console.log(a.getname());
console.log(a.getAge());
// biến của a truyền vào getAge sẽ là return của cha nếu sau super ko có code
// biến của a truyền vào getAge sẽ là return của con nếu sau super có code

var person = {
  age: 18
}
console.log(person["age"])

var number = 1;
function count(number) {
  number++
}
count()
console.log(number)
usecallback
usememol