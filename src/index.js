// import "core-js/stable";
// import "regenerator-runtime/runtime";

// import {fib} from './utils/generator.js';
import "./styles/index.scss";

let isIncludes = [1,2,3].includes(2)
console.log(isIncludes);

// for (var x of fib(10)) {
//     console.log(x); // 依次输出0, 1, 1, 2, 3, ...
// }
//
// let fib5 = fib(5)
// console.dir(fib5.next())
//
// console.log(process.env.NODE_ENV);

async function asyncFn(){
  const res = await new Promise((resolve, reject) => {
    // error()
    setTimeout(() => {
      resolve(1700  )
    }, 2000)
  })
  console.dir(res);
}

asyncFn()

window.addEventListener('unhandledrejection', e => {
  console.log("unhandledrejection", e);
})

window.addEventListener('error', args => {
  console.dir(args);
  return false;
})

window.onerror = function(msg, url, line, col, error){
  console.dir(msg);
  return false;
}

a = b.c.d
