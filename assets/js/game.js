//var playerName= 'Clank McKrank';
var playerName = window.prompt("What is your robort's name?");
var playerHealth =100;
var playerAttack =10;
var playerMoney = 10;

// You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth =50;
var enemyAttack =12;



for (var i = 0; i < enemyName.length; length i++) {
    console.log(enemyName[i]);
    console.log (i);
    console.log(enemyName[i]+ "is at" + i + "index");
}




//fight function
function fight() {
    //Alert players that they are stating the round
    window.alert("Welcome to Robot Gladiators!");

    //ask the player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting that amount set in the playerAttack variable 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + "attacked " + enemyName + ". " + enemyName + "now has " + enemyHealth + "health remaining."

        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died");

        } else {
            window.alert(enemyName + "still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable 
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + "attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + "still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm(" Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + "has decided to skip this fight. Goodbye!");

            //subtract money from  playerMoney for skipping
            playerMoney = playerMoney - 2;
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
    fight();





    //Subract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    //Log a resulting message to the soncsole so we know that it worked.
    //put new code under this
    // console.log(enemyName + " attacked" + playerName + ". " playerName + "now has" + playerHealth + " health remaining.");
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");

    }
    else {
        window.alert(playerName + "still has" + playerHealth + " health left");
    }


    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
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



}
for(var i=0; i < enemyNames.length; i++){
    fight(enemyName[i]);

fight(enemyRobot);

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
//enemyHealth = enemyHealth - playerAttack;

//Log a resulting message to the console so we know that it worked.
//console.log(
//playerName + "attack " + enemyName + ". " + enemyName + "now has " + enemyHealth + " health remaining."
//);

var playerMoney = 10;}
