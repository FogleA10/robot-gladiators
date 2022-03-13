//var playerName= 'Clank McKrank';
var playerName = window.prompt("What is your robort's name?");
var playerHealth =100;
var playerAttack =10;
var playerMoney = 10;

// You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth =50;
var enemyAttack =12;

if (enemyHealth >0) {
    break;
    //if the enemy-robot has health points, continue to fight
}

for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log (i);
    console.log(enemyNames[i]+ "is at" + i + "index");
}


for (var i=0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames [i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    
    //call fight function with enemy-robot
    fight(enemyNames[i]);
}

//fight function
var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0){
    

    //ask the player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? 'FIGHT' or 'SKIP' to choose.");

     // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm(" Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + "has decided to skip this fight. Goodbye!");

            //subtract money from  playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
         // remove enemy's health by subtracting that amount set in the playerAttack variable 
         enemyHealth = enemyHealth - playerAttack;
         console.log(
             playerName + "attacked " + enemyNames + ". " + enemyNames + "now has " + enemyHealth + "health remaining."
 
         );

         // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died");

               //award player money for winning
               playerMoney = playerMoney + 20;
               //leave while() loop since enemy is dead
               break;
           }else {
              window.alert(enemyNames + "still has " + enemyHealth + " health left.");
          }

            //remove player's health by subtracting the amount set in the enemyAttack variable 
          
             playerHealth = playerHealth - enemyAttack;
            console.log(
             enemyNames + "attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );


        //check player's health 
        if (playerHealth <= 0) {
        window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
        }

        //pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        
        //reset enemyHealth before starting new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;

        //pass the pickedEnemyName variable's value into the fight function, where it will asssuje the value of the enemyName parameter
        fight(pickedEnemyName);

        else{
            window.alert(" You have lost your robot in battle! Game Over!");
            break;
        }
    }
    
        //{
           // window.alert(playerName + " has died!");
            //leave while() loop if player is dead
            break;
        }  else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
     } 

     //end of while loop
        };    //end of fight function

         
 
         




          
        



    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
   
        

        else {
            window.alert(playerName + "still has " + playerHealth + " health left.");
        }
       
    }

        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
        //if player did not choose 1 or 2 in prompt
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert(" You need to choose a valid option. Try again!");
    };
    //run fight function to start game






    //Subract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    //Log a resulting message to the soncsole so we know that it worked.
    //put new code under this

    console.log(enemyName + " attacked" + playerName + ". " + playerName + "now has" + playerHealth + " health remaining.");
    // check player's health

    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
        break;

    }
    else {
        window.alert(playerName + "still has" + playerHealth + " health left");
    }


    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    
    }
  

    //Subract the value of `enemyAttack` form the value of `playerHealth` and use that result to update the value in the `playerHealh` variable.
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health remaining."
    );
    // put new code under this
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has" + enemyHealth + " health remaining."
    );




for(var i=0; i < enemyName.length; i++){
    fight(enemyNames[i]);

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    //enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + "attack " + enemyName + ". " + enemyName + "now has " + enemyHealth + " health remaining."
    );

    var playerMoney = 10;

}
