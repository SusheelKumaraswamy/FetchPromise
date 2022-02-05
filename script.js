const promise1=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            resolve(data)
        })
});


const promise2=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(data=> {
            resolve(data)
        })
});

Promise.all([promise1, promise2]).then(result=> console.log(result)).catch(err=>console.error("error"));
