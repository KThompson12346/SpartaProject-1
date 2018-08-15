$(function(event){

   var objCount = 0;

   function Enemy(width, height, left, top, colour) {
       this.objCount = objCount;
       this.width = width;
       this.height = height;
       this.left = left;
       this.top = top;
       this.colour = colour;

       var enemy = "enemy" + this.objCount;
       $(".levelScreen").append("<div class='"+enemy+"'>Enemy</div>");
       hitTarget(enemy);
       objCount++;

       $(".enemy" + this.objCount).css({
         backgroundColor: colour,
         position: "relative",
         width: width,
         height: height,
         display: "inline-block",
         textAlign: "center"
       });
   };

   function generateEnemies(amount) {
     
   }

   function mouseAim() {
     $(".levelScreen").mousemove(function(event){
       console.log("Coodinates of mouse: " + event.pageX + ", " + event.pageY);
       console.log("Coodinates of mouse: " + event.clientX + ", " + event.clientY);
     })
   }

   function hitTarget(enemy) {
     $("."+enemy).on("click", function(){
        $(".enemy").remove();
        console.log("I am dead");
     })
   }


   function enemyMovement(){
     var random = Math.floor((Math.random() * 150) + 1);
   }



   Enemy.prototype.moveHorizontal = function(offset) {
      var elem = ".enemy"+this.objCount;
      var id = setInterval(frame, 10);
      function frame() {
        if (offset == 590) {
          clearInterval(id);
        } else {
          offset++;
          $(elem).offset({left: offset})
        }
      }
    }

    Enemy.prototype.moveVertical = function(offset) {
      var elem = ".enemy"+this.objCount;
      var id = setInterval(frame, 10);
      function frame() {
        if (offset == 590) {
          clearInterval(id);
        } else {
          offset++;
          $(elem).offset({top: offset})
        }
      }
    }

  function detectCollision() {
    var targetTop, targetLeft, targetRight, targetBottom;
    var target2Top, target2Left, target2Right, target2Bottom;

    targetTop = target.offset().top;
    targetLeft = target.offset().left;
    targetRight = Number(target.offset().left) + Number(target.width());
    targetBottom = Number(target.offset().top) + Number(target.height());

    target2Top = target2.offset().top;
    target2Left = target2.offset().left;
    target2Right = Number(target2.offset().left) + Number(target2.width());
    target2Bottom = Number(target2.offset().top) + Number(target2.height());

    if (target.right > target2.left && target.left < target2.right && target.top < target2.bottom && target.bottom > target2.top) {
      console.log("A collision!!");
    }
  }

  var enemy1 = new Enemy(100,70,80,50, "red");
  var enemy2 = new Enemy(100,100,10,10, "green");
  console.log(enemy1);
  console.log(enemy2);
  enemy1.moveHorizontal(100);
  enemy2.moveVertical(100);
  mouseAim();
})
