
function random(max = 60, min = 5) {
    return Math.floor(Math.random() * (max - min + 1) + min)    
}
var quantity = +prompt("misollar miqdorini kiriting");
 for (let i = 1; i <= quantity; i++) {
     let son1 = random();
     let son2 = random();
     let answer = +prompt(i + "chi misolni yeching " + son1 + "+" + son2 +"=?") ; 
     var pravilno = "noto`g`ri"
     if (answer === son1 + son2 ) {
         var pravilno = "to`g`ri"         
     } 
     console.log(i + " chi javobingiz " + pravilno);    
     
    }