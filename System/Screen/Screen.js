export class Screen {

    static canvas = document.getElementById('screen');
    static ctx = Screen.canvas.getContext("2d");

    static write(x, y, color, text) {
        ctx.font = "16px monospace";
        ctx.fillStyle = color;
        ctx.fillText(text, Math.round(x), Math.round(y));
    }

    static clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    static fill(x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }


}
