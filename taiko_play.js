// 変数宣言
let fps = 48
let frame = -100
let minute = 0
for (var i = 0; i <= 25; i++) {
    eval('let img_select_jump_' + i)
    eval('let img_select_' + i)
}
let img_select_header
let img_select_back
let img_select_footer
for (var i = 0; i <= 9; i++) {
    eval('let img_select_timer_' + i)
    eval('let img_select_timer_' + i + 'w')
}
let img_select_timer_100


function setup() {
    createCanvas(1280, 720)
    for (var i = 0; i <= 25; i++) {
        eval('img_select_jump_' + i + '= loadImage("assets/3_SongSelect/1_InChara/' + i + '.png")')
        eval('img_select_' + i + '= loadImage("assets/3_SongSelect/2_Chara/' + i + '.png")')
    }
    img_select_header = loadImage("assets/3_SongSelect/Header.png")
    img_select_back = loadImage("assets/3_SongSelect/GenreBackground_5.png")
    img_select_footer = loadImage("assets/3_SongSelect/Footer.png")
    for (var i = 0; i <= 25; i++) {
        eval('img_select_timer_' + i + '= loadImage("assets/3_SongSelect/3_Timer/' + i + '.png")')
        eval('img_select_timer_' + i + 'w = loadImage("assets/3_SongSelect/3_Timer/' + i + 'w.png")')
    }
    img_select_timer_100 = loadImage("assets/3_SongSelect/3_Timer/100.png")


    textSize(40)
    textAlign(CENTER)
    frameRate(fps)
}
function draw() {
    frame++
    minute = frame / fps
    image(img_select_back, -(frame % 1280 + 1280), 0)
    image(img_select_back, -(frame % 1280), 0)
    image(img_select_back, -(frame % 1280 - 1280), 0)
    image(img_select_header, 0, 0)
    image(img_select_footer, 0, 0)
    if (0 <= frame && frame <= 25) {
        eval("image(img_select_jump_" + frame + ", 0, 328)")
    } else if (25 < frame) {
        eval("image(img_select_" + frame % 26 + ", 0, 0)")
    }
    if (minute <= 0) {
        image(img_select_timer_100, 0, 0)
    } else if (minute <= 10) {
        image(img_select_timer_9, 0, 0)
    } else if (minute <= 20) { } else if (minute <= 30) { }else if(minute <= 40){}else if(minute <= 50){}else if(minute <= 60){}else if(minute <= 70){}else if(minute <= 80){}else if(minute <= 90){}

}