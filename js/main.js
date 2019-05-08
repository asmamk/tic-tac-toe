// declare 2 variables to use it on board of game 
//declare variable to count times of pressing board of game 
//declare variable to stop playing after winner 
//declare array to store id of x or i in the index of array
let plyer1 = 'X';
let plyer2 = 'O';
let count = 1 ;
let gameOver=false;
    let game = [
        ' ' , ' ' ,' ', //0 1 2
        ' ' , ' ' ,' ', //3 4 5
        ' ' , ' ' ,' ' //6 7 8 
    ];
// function to play game by click on the board of game
    $('.item').click(games)
     function games (event) {
        if(gameOver==false){
        const position = $(event.target).attr("id");
        if(count %2== 0 ){
            $(event.target).text(plyer2);
            game[position] = plyer2
        }else{
            $(event.target).text(plyer1);
            game[position] = plyer1
        }
        $(event.target).off('click')
                console.log(count)
        count++;
        //calling the checkWinner function to check how is winner by end the game
        checkWinner();
    }//end if Game Over
}
    //checkWinner function to check how is winner 
    const checkWinner = function(a){
        let win = false; 
        let players = ["X","O"];
        players.forEach(function(p){
            if(game[0] === p && game[1] === p && game[2] === p){ 
                win = true;
                gameOver=true;   
            }else if (game[3] === p && game[4] === p && game[5] === p){
                win = true;
                gameOver=true;
            }else if(game[6] === p && game[7] === p && game[8] === p){
                win = true;
                gameOver=true;
            }else if(game[0] === p && game[4] === p && game[8] === p){
                win = true;
                gameOver=true;
            }else if(game[2] === p && game[4] === p && game[6] === p){
                win = true;
                gameOver=true;
            }else if(game[0] === p && game[3] === p && game[6] === p){
                win = true;
                gameOver=true;
            }else if(game[1] === p && game[4] === p && game[7] === p){
                win = true;
                gameOver=true;
            }else if(game[2] === p && game[5] === p && game[8] === p){
                win = true;
                gameOver=true;
            }
        
            if(win === true){
                swal( " Congratulation", p+' is winner ',"success");
                // alert("Player "+ p + " winner " );
                win = false;
            }
            // condation for tie if all boxes is full
            if(count >=10){
                swal("Tie"," ", "success");
                //alert("Tie");
            }
            //
        recordWin();
        });
        
       
    }
  
     // function clear all X & O by button restart
     function restart(){
         count = 1;
         game = [
            ' ' , ' ' ,' ', //0
            ' ' , ' ' ,' ', //1
            ' ' , ' ' ,' ' //2
        ]; 
        $('.item').text('');
        // location.reload();
        gameOver=false; 
        $('.item').off('click') 
        $('.item').click(games)
    }

    $('#res').click(restart);

/// functions for second html page 
    function start(){ 
       
       $('.item').off('click') 
       $('.item').click(games)
   }

   $('#res').click(restart);


   //  score for winne both X & O
   function recordWin(winner){
       let xWon=0;
       let oWin=0;

    if (winner === "X"){
        xWon++;
        
    }else if (winner === "O"){
      
        oWin++;
    }
    $("#px").text("Player X : " +xWon);
    $("#po").text("Player O : " +oWin);

}


    

            

    
    


 