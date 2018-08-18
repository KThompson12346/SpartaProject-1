$(function(event) {

    var objCount = 0;
    var enemyArea = $(".levelScreen");
    var enemyAreaWidth = enemyArea.width();
    var enemyAreaheight = enemyArea.height();
    var maxX = enemyAreaWidth - 100;
    var maxY = enemyAreaheight - 100;
    var enemy = "enemy" + this.objCount;

    function Enemy(width, height, colour) {
        this.objCount = objCount;
        this.width = width;
        this.height = height;
        this.left = randomise(enemyAreaWidth - width);
        this.top = randomise(enemyAreaheight - height);
        this.colour = colour;

        var enemy = "enemy" + this.objCount;
        $(".levelScreen").append("<div class='" + enemy + "'>Enemy</div>");
        hitTarget(enemy);
        objCount++;

        $(".enemy" + this.objCount).css({
            backgroundColor: colour,
            position: "absolute",
            width: width,
            height: height,
            display: "inline-block",
            textAlign: "center",

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
        })
    }

    Enemy.prototype.moveHorizontal = function(offset) {
        var elem = ".enemy" + this.objCount;
        var id = setInterval(frame, 10);

        function frame() {
            if (offset == 590) {
                clearInterval(id);
            } else {
                offset++;
                $(elem).offset({
                    left: offset
                })
            }
        }
    }

    Enemy.prototype.moveVertical = function(offset) {
        var elem = ".enemy" + this.objCount;
        var id = setInterval(frame, 10);

        function frame() {
            if (offset == 590) {
                clearInterval(id);
            } else {
                offset++;
                $(elem).offset({
                    top: offset
                })
            }
        }
    }

    function detectCollision() {
        var targetTop, targetLeft, targetRight, targetBottom;
        var target2Top, target2Left, target2Right, target2Bottom;

        targetTop = target.offset().top;
        targetLeft = target.offset().left;
        targetRight = Number(target.offset().left) + Number(target.width() * 50);
        targetBottom = Number(target.offset().top) + Number(target.height() * 50);

        target2Top = target2.offset().top;
        target2Left = target2.offset().left;
        target2Right = Number(target2.offset().left) + Number(target2.width());
        target2Bottom = Number(target2.offset().top) + Number(target2.height());

        if (target.right > target2.left && target.left < target2.right && target.top < target2.bottom && target.bottom > target2.top) {
            console.log("A collision!!");
        }
    }

    function makeNewPosition(myclass) {
        // Get viewport dimensions (remove the dimension of the div)
        // var enemy = ".enemy" + this.objCount;
        // var enemyArea = $(".levelScreen");
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

    var enemy1 = new Enemy(50, 50, "red");
    var enemy2 = new Enemy(100, 100, "green");
    var enemy3 = new Enemy(100, 100, "yellow");

    // console.log(enemy1);
    // console.log(enemy2);
    // console.log(enemy3);
    animateDiv(".enemy0",1000);
    animateDiv(".enemy1",1000);
    animateDiv(".enemy2",1000);
    $(".enemy0").offset({top: 0, left: 0});
    $(".enemy1").offset({top: 2000, left: 2000});
    $(".enemy2").position({top: 500, left: 500});
    // enemy2.animateDiv(100);
    mouseAim();
    console.log($(".enemy0").offset());
    console.log($(".enemy1").offset());
    console.log($(".enemy2").offset());
})
