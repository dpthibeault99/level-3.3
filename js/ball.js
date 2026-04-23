class Ball {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.x = canvas.width / 2;
        this.y = canvas.height / 2;

        this.radius = 50;
        this.color = "#6c14ba";

        this.speedX = 0;
        this.speedY = 0;
    }

    drawBall() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }

    moveBall() {
        this.speedX = -5;
        // this.speedY = 5;
    }

    left() {
        return this.x - this.radius;
    }

    right() {
        return this.x + this.radius;
    }

    top() {
        return this.y - this.radius;
    }

    bottom() {
        return this.y + this.radius;
    }

    collisionCheck(obj) {
        if (
            this.left() < obj.right() &&
            this.right() > obj.left() &&
            this.top() < obj.bottom() &&
            this.bottom() > obj.top()
        ) {
            return true;
        }

        return false;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // RIGHT WALL
        if (this.x + this.radius > this.canvas.width) {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.color = "#e42222";
            console.log("P1 Score", p1Score)
            p1Score++;
            // context.fillStyle = "#000000";
            // context.font = "30px Arial";
            // context.fillText("X", 325, 50);
        }

        // LEFT WALL
        if (this.x - this.radius < 0) {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.color = "#3700ff";
            console.log("P2 Score", p2Score)
            p2Score++;
        }

        // BOTTOM WALL
        if (this.y + this.radius > this.canvas.height) {
            this.y = this.canvas.height - this.radius;
            this.speedY = -this.speedY;
            this.color = "#48fd42";
        }

        // TOP WALL
        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.speedY = -this.speedY;
            this.color = "#ffa600";
        }
    }
}
