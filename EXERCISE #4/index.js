//Nama : Kilis, Vannesa Zevania
//Exercise #04


//1. Promise

let condition = true;
let helloWorld = new Promise((resolve) => {
    setTimeOut(()=> {
        resolve("Hello World!");
    }, 2000);
});


async function messages(){
    const msg = await helloWorld;
    console.log(msg);
}


//2. Fetch

function ambilDataUser(){
    fetch("https://reqres.in/api/users")
    .then(function(response){
        return response.json();
    })
    .then(function (users){
        console.log(users.data);
        
    });
}
console.log(ambilDataUser());


//3. Async Await

async function ambilDataUser(){
    await fetch("https://reqres.in//api/users")
    .then(function (response){
        return response.json();
    })
        .then(function(users){
            console.log(users.data);
        });
    }
console.log(ambilDataUser());


//4. Axios

axios.get("https://reqres.in/api/users.json") 
.then(response => (this.info = response.ambilDataUser));