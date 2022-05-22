var db = firebase.database()
console.log(db)

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));

function myFunction() {
    var name = document.getElementById("name").value;
    

    var comment = document.getElementById("comment").value;
  
// creat random id
  random = generateString(5)
  db.ref("/Comments/"+ random +"/").update({ name: name, comment: comment })
  db.ref("/Comments/"+ random +"/").on("value",(data)=>{
    var name = data.val().name
    var comment = data.val().comment
    console.log(name)
    document.getElementById("username").innerHTML = name;
    document.getElementById("data").innerHTML = comment;
  })

  }
