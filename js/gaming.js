class gaming {
    constructor(fn = false, speed = 1, frame = 10) {
        this.fn = fn;
        this.speed = speed;
        this.frame = frame;
        this.color = [4 * this.speed, 2 * this.speed, this.speed];
        this.color_n = [0, 2, 4];
        this.color_list = [1, -4, 2, -2, 4, -1];
    }
    stop() {
        this.stop_flag = true;
        return this;
    }
    start() {
        this.stop_flag = false;
        this.loop();
        return this;
    }
    view() {
        if (this.fn === false) return;
        else if (typeof this.fn == "function") this.fn(this.color[0], this.color[1], this.color[2]);
        else this.fn.css({
            "cssText": "background-color: rgb(" + this.color[0] + ", " + this.color[1] + ", " + this.color[2] + ")!important"
        });
    }
    change(i) {
        if (this.color[i] <= 255 - 4 * this.speed && this.color[i] >= 4 * this.speed) return;
        this.color[i] -= this.color_list[this.color_n[i]] * this.speed;
        this.color_n[i]++;
        if (this.color_n[i] == 6) this.color_n[i] = 0;
    }
    loop() {
        if (this.stop_flag) return;
        for (let i = 0; i < 3; i++) this.color[i] += this.color_list[this.color_n[i]] * this.speed;
        for (let i = 0; i < 3; i++) this.change(i);
        this.view();
        var that = this;
        setTimeout(
            function() {
                that.loop();
            }, this.frame);
    }
}