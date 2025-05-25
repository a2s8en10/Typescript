// sync programming
console.log("sync programming");

function task1() {
  console.log("task 1...");
}
function task2() {
  console.log("task 2...");
}

// task1();
// task2();

// async programming
console.log("async programming");

function task11() {
  setTimeout(() => {
    console.log("task 11...");
  }, 2000);
}
function task12() {
  console.log("task 12...");
}

// task11();
// task12();

// Promises
console.log("Promises----------");

const fetchData = (value: boolean): Promise<String> => {
  return new Promise((resolve, reject) => {
    if (value) {
      setTimeout(() => {
        resolve("Promise SuccessFull...");
      }, 1000);
    } else {
      reject("Promise Failure...");
    }
  });
};

// Chaining promise
// fetchData(true)
//   .then((data) => {
//     console.log("Success:", data);
//     return "get remaining data";
//   })
//   .then((data1) => {
//     console.log("more data:", data1);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// nested promise
fetchData(true)
  .then((data) => {
    console.log("Success:", data);

    fetchData(false)
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error1) => {
        console.log("Error : ", error1);
      });
  })
  .catch((error) => {
    console.log("Error:", error);
  });
