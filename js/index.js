$(function(event) {

  var health = $("#health");
  var playerOneScore = 0;
  var objCount = 0;
  var enemyArea = $("#mainGame");
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
      $("#mainGame").append("<div class='" + enemy + "'>Enemy</div>");
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
  }

  function hitTarget(enemy) {
      $("." + enemy).on("click", function() {
          $("." + enemy).remove();
          console.log("I am dead");
          playerOneScore++;
          console.log(playerOneScore);
          $(".score").text("Score: " + playerOneScore);
      })
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

// Menu screen button click events.
  function startGame() {// Function to bring user to the game window.
    $("#menuStart").on("click", function(){
      
      $("#mainGame").show(); // when the start game button is clicked on the mainMenu screen the game window is shown.
      $(".gameButtons").show(); // Shows the in game navigation controls when in the game window.
      $("#mainMenu").hide(); // when the start game button is clicked on the mainMenu screen the menu window is hidden.
      $(".score").show();
    });
  }

  function levelStartBtn() { // A button with a click event listener that will "run" the animation loop when clicked.
    $("#startLevel").one("click", function(){
      var enemy1 = new Enemy("red");
      var enemy2 = new Enemy("green");
      var enemy3 = new Enemy("yellow");
      var enemy4 = new Enemy("white");
      var enemy5 = new Enemy("orange");
      var enemy6 = new Enemy("blue");
      var enemy7 = new Enemy("maroon");
      var enemy8 = new Enemy("purple");
      var enemy9 = new Enemy("grey");
      var enemy10 = new Enemy("lime");
      var enemy11 = new Enemy("olive");
      var enemy12 = new Enemy("aqua");
      var enemy13 = new Enemy("magenta");
      var enemy14 = new Enemy("silver");
      var enemy15 = new Enemy("gold");
      var enemy16 = new Enemy("indigo");
      var enemy17 = new Enemy("khaki");
      var enemy18 = new Enemy("darkKhaki");
      var enemy19 = new Enemy("darkViolet");
      var enemy20 = new Enemy("deepskyblue");
      var enemy21 = new Enemy("powderblue");
      var enemy22 = new Enemy("blueviolet");
      var enemy23 = new Enemy("mocassin");
      animateDiv(".enemy0",1000);
      animateDiv(".enemy1",1000);
      animateDiv(".enemy2",600);
      animateDiv(".enemy3",1000);
      animateDiv(".enemy4",500);
      animateDiv(".enemy5",600);
      animateDiv(".enemy6",900);
      animateDiv(".enemy7",1000);
      animateDiv(".enemy8",2000);
      animateDiv(".enemy9",500);
      animateDiv(".enemy10",2000);
      animateDiv(".enemy11",500);
      animateDiv(".enemy12",1000);
      animateDiv(".enemy13",100);
      animateDiv(".enemy14",700);
      animateDiv(".enemy15",2000);
      animateDiv(".enemy16",2000);
      animateDiv(".enemy17",1000);
      animateDiv(".enemy18",2000);
      animateDiv(".enemy19",2000);
      animateDiv(".enemy20",500);
      animateDiv(".enemy21",2000);
      animateDiv(".enemy22",500);
    });
  }

  startGame();
  levelStartBtn();
})
