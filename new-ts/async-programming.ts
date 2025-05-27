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

fetchNewData(true)
  .then((data) => {
    console.log("Data : ", data);
  })
  .catch((error) => {
    console.log("Error : ", error);
  });

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

// nested promise--------------
// console.log("nested promise--------------");

// fetchData(true)
//   .then((data) => {
//     console.log("Success:", data);

//     fetchData(false)
//       .then((data) => {
//         console.log("Success:", data);
//       })
//       .catch((error1) => {
//         console.log("Error : ", error1);
//       });
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// async await ------------------------
console.log("async await ------------------------");

async function fetchNewData(value: boolean): Promise<string> {
  return "Data are Fetch";
}

// Single Time use the Promise
fetchNewData(true)
  .then((data) => {
    console.log("Data : ", data);
  })
  .catch((error) => {
    console.log("Error : ", error);
  });

// multiple time use the Promise
async function getFetchNewData(): Promise<void> {
  try {
    const data = await fetchNewData(true);
    const data1 = await fetchNewData(false);
  } catch (error) {
    console.log("Error : ", error);
  }
}

// Working With api using fetch

interface Post {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
}

async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // json data
    const posts: Post[] = await response.json();
    return posts;
  } catch (error: any) {
    console.log("Error : ", error);
    throw new Error(error);
  }
}

fetchPosts()
  .then((data) => {
    console.log("Post : ", data);
  })
  .catch((error) => {
    console.log("error : ", error);
  });

// concurrent promises with promise.all
async function taskPro1() {
  console.log("task 1...");
  return "task Promise 1";
}
async function taskPro2() {
  console.log("task 2...");
  return "task Promise 2";
}

async function fetchPro(): Promise<[string, string]> {
  const [pro1, pro2] = await Promise.all([
    taskPro1(),
    taskPro2()
  ]);

  return [pro1, pro2];
}

fetchPro()
  .then((data) => {
    console.log("data : ", data);
  })
  .catch((error) => {
    console.log("error : ", error);
  });