// const promise1=new Promise((resolve,reject)=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res=> res.json())
//         .then(data=> {
//             console.log(data)
//             resolve(data)
//         })
// });


// const promise2=new Promise((resolve,reject)=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res=> res.json())
//         .then(data=> {
//             resolve(data)
//         })
// });

// Promise.all([promise1, promise2]).then(result=> console.log(result)).catch(err=>console.error("error"));

function firsst(userid){
    console.log("Into the First Function");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userid:userid,name:"xxx"});
        },1000);
    })
}

function second(user){
    console.log("Into the second one");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["hello","hai","welcome","great"]);
        },1000)
    })
}

function third(services){
    console.log("Into third one");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let cost=services.reduce((a,b)=>{
                return a+100;
            },0)

            resolve(cost);
        },1000)
    })
}

firsst(2).then(userdata=>{
    console.log(userdata);
    return second(userdata);
}).then(service=>{
    console.log(service);
    return third(service);
}).then(data=>{
    console.log(data);
})