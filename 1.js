allUser = ["Arnob","Rohit" , "Kholi", "Mandi"]

 function issAllUserPresent(user){
    if (allUser.includes(user)){
        console.log(`The ${user} is valid`)
    }
    else{
        console.log(`The ${user} is not valid`)
    }
 }

 issAllUserPresent("Arnob");

 issAllUserPresent("Someone");      