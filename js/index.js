$(function(event) {
   var States = {inGame: "IN_GAME", menu: "MENU"}

    var state = States.menu;

    var playerOneScore = 0;
    var levelNum = 0; // The level the player is on
    var gameScore = 0; // Is the highscore of the player
    var objCount = 0;
    var enemyArea = $(".levelScreen");
    var enemyAreaWidth = enemyArea.width();
    var enemyAreaheight = enemyArea.height();
    var objWidth = 50;
    var objHeight = 50;
    var maxX = enemyAreaWidth - objWidth;
    var maxY = enemyAreaheight - objHeight;
    var enemy = "enemy" + this.objCount;

    function Enemy(colour) {
        this.objCount = objCount;
        this.width = objWidth;
        this.height = objHeight;
        this.left = randomise(maxX);
        this.top = randomise(maxY);
        this.colour = colour;

        var enemy = "enemy" + this.objCount;
        $(".levelScreen").append("<div class='" + enemy + "'>Enemy</div>");
        hitTarget(enemy);
        objCount++;

        $(".enemy" + this.objCount).css({
            backgroundColor: colour,
            position: "absolute",
            width: this.width,
            height: this.height,
            display: "inline-block",
            textAlign: "center",
            left: this.left,
            top: this.top
        });
    };


    function Menu() {
        this.objCount = objCount;
        this.width = objWidth;
        this.height = objHeight;
        this.left = 100;
        this.top = 100;

        var menu = "menu" + this.objCount;
        $(".levelScreen").append("<div class='" + menu + "'>Menu</div>");
        hitTarget(enemy); // records clicks!
        objCount++;

        $(".menu" + this.objCount).css({
          backgroundColor: "red",
            position: "absolute",
            width: this.width,
            height: this.height,
            display: "inline-block",
            textAlign: "center",
            left: this.left,
            top: this.top
        });
    };

    function mouseAim() {
        $(".levelScreen").mousemove(function(event) {
            //console.log("Coodinates of mouse: " + event.pageX + ", " + event.pageY);
            //console.log("Coodinates of mouse: " + event.clientX + ", " + event.clientY);
        })
    }

    function hitTarget(enemy) {
        $("." + enemy).on("click", function() {
            $("." + enemy).remove();
            console.log("I am dead");
            playerOneScore++;
        })
    }

    function detectCollision(myclass) {

    }

    function makeNewPosition(myclass) {
        // Get viewport dimensions (remove the dimension of the div)
        var nh = Math.floor(Math.random() * maxY);
        var nw = Math.floor(Math.random() * maxX);
        return [nh, nw];
    }


    function animateDiv(myclass, speed) {
        var newq = makeNewPosition(myclass);
        $(myclass).animate({
            top: newq[0],
            left: newq[1]
        }, speed, function() {
            animateDiv(myclass, speed);
        });
    };

    function randomise(maxLength) {
        return Math.floor(Math.random() * maxLength);
    }

    var enemy1 = new Enemy("red");
    var enemy2 = new Enemy("green");
    var enemy3 = new Enemy("yellow");
    var menu = new Menu();



  function update_game() {
  animateDiv(".enemy0",1000);
  animateDiv(".enemy1",1000);
  animateDiv(".enemy2",1000);
  mouseAim();
  console.log($(".enemy0").offset());
  console.log($(".enemy1").offset());
  console.log($(".enemy2").offset());

  }

  function update_menu() {

       $(".levelScreen").append("<div class='"+menu+"'>Menu</div>");

  }

  switch (state) {
    case States.inGame:
        update_game();
      break;
    case States.menu:
      update_menu();
      break;
    default:
      console.log("state: " + state);

  }

  })
