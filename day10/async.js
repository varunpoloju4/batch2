// let p1 =  new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//     resolve("Success");
// });
// console.log(p2);
// p2.then((res)=>{
//     console.log(res);
// }).catch(err=> console.log(err))

let p3 = new Promise((resolve , reject)=>{
    reject("Failures");
});

p3.then(res=>console.log(res))
.catch(err=>console.log(err))
.finally(()=>console.log("final"))

function fetchUsers(){
    let response=fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);
    response.then(res=>{
        //console.log(res)
        //onsole.log(res.json());
        return res.json().then(data=>{
            console.log(data);
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();

