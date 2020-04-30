
$(document).ready(function(){

  var move = 1;      // intialle  value for click
  
   // to access th table
  $("#board tr td").click(function() {  
    if ($(this).text()=="" ) { //if table is empty
      if ((move%2)==1) { $(this).append("X"); } // if move %2==1 it's the first click and 3rd  and 5....  put "X"  else the second click and 4 put "O" and.... 
      else { $(this).append("O"); }
      move++;
        
        
    //     display the winner with alert
      if (checkForWinner()!=-1 && checkForWinner()!="") { 
	
          if (checkForWinner()=="X") { 
               
              $("#board").fadeOut("slow");
              $("#final-screen").fadeTo("slow",1);
              $("#winner").text("Player 1 wins!");
          }
        
          else if(checkForWinner()=="O") { 
                
              $("#board").fadeOut("slow");
              $("#final-screen").fadeTo("slow",1);
              $("#winner").text("Player 2 wins!");
          }else{
              $("#board").fadeOut("slow");
              $("#final-screen").fadeTo("slow",1);
              $("#winner").text("it's a tie");
              
          }
         
      }
    }
      
      
  });
   

    

  function checkForWinner() {
    var s1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
    var s2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
    var s3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
    var s4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
    var s5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
    var s6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
    var s7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
    var s8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
    var s9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
    // check rows
    if      ((s1==s2) && (s2==s3)) { return s3; }
    else if ((s4==s5) && (s5==s6)) { return s6; }	
    else if ((s7==s8) && (s8==s9)) { return s9; }
    // check columns
    else if ((s1==s4) && (s4==s7)) { return s7; }
    else if ((s2==s5) && (s5==s8)) { return s8; }
    else if ((s3==s6) && (s6==s9)) { return s9; }
    // check diagonals
    else if ((s1==s5) && (s5==s9)) { return s9; }
    else if ((s3==s5) && (s5==s7)) { return s7; }
    // no winner
    return -1
  }
    
    
    
    function clearBoard() {
    var c00 = $("#c00").text("");
    var c01 = $("#c01").text("");
    var c02 = $("#c02").text("");
    var c10 = $("#c10").text("");
    var c11 = $("#c11").text("");
    var c12 = $("#c12").text("");
    var c20 = $("#c20").text("");
    var c21 = $("#c21").text("");
    var c22 = $("#c22").text("");
    var turn = 0;
  }
    
       
  
    $("#new-game").click(function(e){
        e.preventDefault();
    
        clearBoard();
    
        $("#final-screen").hide();
    
        $("#choice").hide();
    
        $("#board").fadeTo("slow",1);
  });

});
