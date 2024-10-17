

//start details section
let doc=$("#singer h2")
doc.click(function(){
   // console.log("welcome");
   $("#singer p").slideToggle(500)
   $("#singer2 p").slideUp(500)
   $("#singer3 p").slideUp(500)
   $("#singer4 p").slideUp(500)

   
})
let doc2=$("#singer2 h2")
doc2.click(function(){
   // console.log("welcome");
   $("#singer2 p").slideToggle(500)
   $("#singer p").slideUp(500)
   $("#singer3 p").slideUp(500)
   $("#singer4 p").slideUp(500)
   
})
let doc3=$("#singer3 h2")
doc3.click(function(){
   console.log("welcome");
   $("#singer3 p").slideToggle(500)
   $("#singer p").slideUp(500)
   $("#singer2 p").slideUp(500)
   $("#singer4 p").slideUp(500)
   
})
let doc4=$("#singer4 h2")
doc4.click(function(){
   console.log("welcome");
   $("#singer4 p").slideToggle(500)
   $("#singer p").slideUp(500)
   $("#singer3 p").slideUp(500)
   $("#singer2 p").slideUp(500)
})


//end details section


// start date section
var s = 60;
var m =59;
var h =12;
var d =-100;
var el = document.getElementById('s-counter');
var men=document.getElementById("m-counter")
var hou=document.getElementById("h-counter")
var day=document.getElementById("d-counter")
function decrementSeconds() {
    s -= 1;
    el.innerText =s +" " + "s" ;
    men.innerText = m +" " + "m";
    hou.innerText = h +" " + "h";
    day.innerText = d +" " + "D";
    if (s==0){
      s=60;
      m-=1
      if(m==0){
         m=59
         h-=1
      }
      if(h==1){
         h=12
         d+=1/2
      }
      if (day==0) {
         console.log("time out");
         el.innerText = "You have been here for " + 0 + " seconds.";
         men.innerText = "You have been here for " + 0 + " minute.";
         hou.innerText = "You have been here for " + 0 + " hours.";
         day.innerText = "You have been here for " + 0 + " hours.";
         
      }
   }
   
   }
var cancel = setInterval(decrementSeconds, 1000);
// end date section


// contact page
i = 100;
$(document).ready(function(){
  $("textarea").keypress(function(){
   // console.log("welcome");
   
   if(i==0){
      console.log("your available character finished");
      $("#counter").text("your available character finished");
   }
else{
     $("#counter").text(i -= 1);
}
  })
})
