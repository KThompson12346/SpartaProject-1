$(function(event){

   var objCount = 0;


   function Enemy(width, height, left, top, colour) {
     var enemy = $(".enemy")[this.objCount];
       $(".levelScreen").append("<div class='enemy' id='donthit'>dddddd</div>");
       this.objCount = objCount;
       this.width = width;
       this.height = height;
       this.left = left;
       this.top = top;
       this.colour = colour;
       objCount++;
       $(".enemy").css({
         backgroundColor: colour,
         position: "relative",
         width: width,
         height: height,
         display: "inline-block",
       });
   };

   function mouseAim() {
     $(".levelScreen").mousemove(function(event){
       console.log("Coodinates of mouse: " + event.pageX + ", " + event.pageY);
       console.log("Coodinates of mouse: " + event.clientX + ", " + event.clientY);
     })
   }

   function hitTarget() {
     $(".enemy").on("click", function(){
       console.log("I am clicked");
     })
   }

   function enemyMovement(){
     var random = Math.floor((Math.random() * 150) + 1);

   }

   Enemy.prototype.moveHorizontal = function(offset) {

      var elem = $(".enemy")[this.objCount];
      console.log(elem);
      var id = setInterval(frame, 10);
      function frame() {
        if (offset == 590) {
          clearInterval(id);
        } else {
        offset++;
        elem.style.top = offset + "px";
        }
      }
    }


   Enemy.prototype.moveVertical = function(offset) {
     var elem = $("#donthit.enemy")[this.objCount];
     console.log(elem);
     var id = setInterval(frame, 10);
     function frame() {
       if (offset == 660.797) {
       clearInterval(id);
       } else {
         offset++;
         elem.style.left = offset + "px";
       }
     }
   }

   var target1 = new Enemy(100,70,10,10, "red");
   var target2 = new Enemy(100,70,10,10, "yellow");
   target1.moveHorizontal(100);
   target2.moveVertical(100);
   mouseAim();
   hitTarget();



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
    // (Element1.right > Element2.left && Element1.left < Element2.right && Element1.top < Element2.bottom && Element1.bottom > Element2.top)
    if (target.right > target2.left && target.left < target2.right && target.top < target2.bottom && target.bottom > target2.top) {
      console.log("A collision!!");
    }

  }

})
