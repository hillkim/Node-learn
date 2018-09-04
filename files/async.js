
/* 1.
getUser(1, displayUser);


function displayBooks(books){
    console.log('Books', books);

}
function displayUser(user){

    getBooks(user.name,displayBooks);//avoiding call back hell by passing a function reference


} */


/* function getUser(id,callback){
    console.log("Reading this bastard from the db.........");
setTimeout(()=>{
return callback ({id : id, name:"Hillary",workethic:"none"});
    
},2000);

} */

//2.lets use some promises

/* getUser(1)
      .then(user => getBooks(user.name))
      .then(books=> console.log("Books ",books))
      .catch(err =>console.log('Error',err.message));
 */

//3.using async wait operation

async function displayBooks(){
    try{
        const user = await getUser(1);
        const books = await getBooks(user.name);
        console.log(books);
    }catch(err){

        console.log("Error :",err.message);
    }
 

}
//use the async function

displayBooks();



function getUser(id) {
  return  new Promise((resolve,reject)=>{
        console.log("Reading this bastard from the db.........");
        setTimeout(() => {
          resolve({ id: id, name: "Hillary", workethic: "none" });
           // reject(new Error('Couldnt get our guy'));
        }, 2000);

    });
    
}


//get books
/* function getBooks(username,callback){
    
    console.log(`Fetching books ${username} owns....`);
    setTimeout(()=>{


        callback(['Java Ap','Perl','Javascript','DOS','Soft Dev','Ansi C']);

    },3000);
}
 */

function getBooks(username) {
return new Promise((resolve,reject)=>{
    console.log(`Fetching books ${username} owns....`);
    setTimeout(() => {

        resolve(['Java Ap', 'Perl', 'Javascript', 'DOS', 'Soft Dev', 'Ansi C']);

    }, 3000);
});
    
}
