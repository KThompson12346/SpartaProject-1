$(function(event) {

    var objCount = 0;

    function Enemy(width, height, colour) {
        this.objCount = objCount;
        this.width = width;
        this.height = height;
        this.left = randomise($(".levelScreen").width() - width);
        console.log(this.left + "left");
        this.top = randomise($(".levelScreen").height() - height);
        console.log(this.left + "top");
        console.log(this.left);
        console.log(this.top);
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
            textAlign: "center"
        });
    };

    Enemy.prototype.newEnemyPos = function() {
        var enemy = ".enemy" + this.objCount;
        var enemyArea = $(".levelScreen");
        var maxX = enemyArea.width() - $(enemy).width();
        var maxY = enemyArea.height() - $(enemy).height();
        var newX = Math.floor(Math.random() * maxX);
        var newY = Math.floor(Math.random() * maxY);
        var XandY = [newX, newY];
        return XandY;
    }

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
        var enemy = ".enemy" + this.objCount;
        var enemyArea = $(".levelScreen");
        var maxX = enemyArea.width() - 100;
        var maxY = enemyArea.height() - 100;
        // var h = $(".levelScreen").height() - myclass.height;
        // var w = $(".levelScreen").width() * 0.8;

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

    var enemy1 = new Enemy(100, 100, "red");
    var enemy2 = new Enemy(100, 100, "green");
    var enemy3 = new Enemy(100, 100, "yellow");
    // console.log(enemy1);
    // console.log(enemy2);
    // console.log(enemy3);
    animateDiv('.enemy0',1000);
    animateDiv('.enemy1',1000);
    animateDiv('.enemy2',1000);
    // enemy2.animateDiv(100);
    //mouseAim();
})
