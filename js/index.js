$(function(event) {

    var playerOneScore = 0;
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

    function mouseAim() {
        $(".levelScreen").mousemove(function(event) {
        })
    }


    function hitTarget(enemy) {
        $("." + enemy).on("click", function() {
            $("." + enemy).remove();
            console.log("I am dead");
            playerOneScore++;
            console.log(playerOneScore);
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
    animateDiv(".enemy0",2000);
    animateDiv(".enemy1",2000);
    animateDiv(".enemy2",2000);
    mouseAim();
    console.log($(".enemy0").offset());
    console.log($(".enemy1").offset());
    console.log($(".enemy2").offset());
})
