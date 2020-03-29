// 変数宣言
let fps = 60
let frame = -100
let minute = 0

//img
for (var i = 0; i <= 25; i++) {
    eval('let img_select_jump_' + i)
    eval('let img_select_' + i)
}
let img_select_header
let img_select_headerRed
let img_select_back
let img_select_footer
for (var i = 0; i <= 10; i++) {
    eval('let img_select_timer_' + i)
    eval('let img_select_timer_' + i + 'w')
}
let img_select_timer_100
for (var i = 1; i <= 9; i++) {
    eval('let img_select_bar_box_' + i)
}
for (var i = 0; i <= 9; i++) {
    eval('let img_select_bar_center_' + i)
}
let selecting = 3 // 今選択しているBarの番号
let img_select_cursor_left
let img_select_cursor_right

//sound
let sound_dong
// let sound_dong_L
// let sound_dong_R
let sound_ka
// let sound_ka_L
// let sound_ka_R

function setup() {
    createCanvas(1280, 720)

    // img
    for (var i = 0; i <= 25; i++) {
        eval('img_select_jump_' + i + '= loadImage("assets/3_SongSelect/1_InChara/' + i + '.png")')
        eval('img_select_' + i + '= loadImage("assets/3_SongSelect/2_Chara/' + i + '.png")')
    }
    img_select_header = loadImage("assets/3_SongSelect/Header.png")
    img_select_headerRed = loadImage("assets/3_SongSelect/Header_Red.png")
    img_select_back = loadImage("assets/3_SongSelect/GenreBackground_5.png")
    img_select_footer = loadImage("assets/3_SongSelect/Footer.png")
    for (var i = 0; i <= 9; i++) {
        eval('img_select_timer_' + i + '= loadImage("assets/3_SongSelect/3_Timer/' + i + '.png")')
        eval('img_select_timer_' + i + 'w = loadImage("assets/3_SongSelect/3_Timer/' + i + 'w.png")')
    }
    img_select_timer_10 = img_select_timer_0
    img_select_timer_100 = loadImage("assets/3_SongSelect/3_Timer/100.png")
    for (var i = 1; i <= 9; i++) {
        eval('img_select_bar_box_' + i + '= loadImage("assets/3_SongSelect/5_Bar/Bar_Box_' + i + '.png")')
    }
    for (var i = 0; i <= 9; i++) {
        eval('img_select_bar_center_' + i + '= loadImage("assets/3_SongSelect/5_Bar/Bar_Center_' + i + '.png")')
    }
    img_select_cursor_left = loadImage("assets/3_SongSelect/6_Cursor/Cursor_Left.png")
    img_select_cursor_right = loadImage("assets/3_SongSelect/6_Cursor/Cursor_Right.png")

    //sound
    sound_dong = loadSound("assets/Sound/dongP1.ogg")
    sound_ka = loadSound("assets/Sound/kaP1.ogg")


    textSize(40)
    textAlign(CENTER)
    frameRate(fps)
}
function draw() {
    // フレームカウント
    frame++
    if (0 <= frame) {
        minute = frame / fps
    }

    // バックグラウンド
    image(img_select_back, -(frame % 1280 + 1280), 0)
    image(img_select_back, -(frame % 1280), 0)
    image(img_select_back, -(frame % 1280 - 1280), 0)

    // カテゴリ選択
    eval('image(img_select_bar_box_' + ((selecting + 3) % 8 + 1) + ', -48.5-9, 100)')
    eval('image(img_select_bar_box_' + ((selecting + 4) % 8 + 1) + ', 48.5-9, 100)')
    eval('image(img_select_bar_box_' + ((selecting + 5) % 8 + 1) + ', 148.5-9, 100)')
    eval('image(img_select_bar_box_' + ((selecting + 6) % 8 + 1) + ', 248.5-9, 100)')
    eval('image(img_select_bar_box_' + ((selecting + 7) % 8 + 1) + ', 348.5-9, 100)')
    eval('image(img_select_bar_center_' + ((selecting) % 8 + 1) + ', 448.5, 50)') // main
    eval('image(img_select_bar_box_' + ((selecting + 1) % 8 + 1) + ', 828.5+12, 100)')
    eval('image(img_select_bar_box_' + ((selecting + 2) % 8 + 1) + ', 928.5+12, 100)')
    eval('image(img_select_bar_box_' + ((selecting + 3) % 8 + 1) + ', 1028.5+12, 100)')
    eval('image(img_select_bar_box_' + ((selecting + 4) % 8 + 1) + ', 1128.5+12, 100)')
    eval('image(img_select_bar_box_' + ((selecting + 5) % 8 + 1) + ', 1228.5+12, 100)')

    // 矢印
    image(img_select_cursor_left, 370 - 25 * (minute % 1), 310)
    image(img_select_cursor_right, 820 + 25 * (minute % 1), 310)

    // 上下装飾
    image(img_select_header, 0, 0)
    image(img_select_footer, 0, 0)

    // ドンちゃん
    if (0 <= frame && frame <= 25) {
        eval("image(img_select_jump_" + frame + ", 0, 328)")
    } else if (25 < frame) {
        eval("image(img_select_" + frame % 26 + ", 0, 0)")
    }

    // 右上カウント
    if (minute <= 0) {
        image(img_select_timer_100, 0, 0)
    } else if (minute <= 10) {
        image(img_select_timer_9, 1147, 55)
    } else if (minute <= 20) {
        image(img_select_timer_8, 1147, 55)
    } else if (minute <= 30) {
        image(img_select_timer_7, 1147, 55)
    } else if (minute <= 40) {
        image(img_select_timer_6, 1147, 55)
    } else if (minute <= 50) {
        image(img_select_timer_5, 1147, 55)
    } else if (minute <= 60) {
        image(img_select_timer_4, 1147, 55)
    } else if (minute <= 70) {
        image(img_select_timer_3, 1147, 55)
    } else if (minute <= 80) {
        image(img_select_timer_2, 1147, 55)
    } else if (minute <= 90) {
        image(img_select_timer_1, 1147, 55)
    }
    // 右上カウント(赤)
    if (0 < minute && minute <= 90) {
        eval('image(img_select_timer_' + parseInt(10 - minute % 10) + ', 1193, 55)')
    } else if (90 < minute && minute <= 100) {
        image(img_select_headerRed, 0, 0)
        eval('image(img_select_timer_' + parseInt(10 - minute % 10) + 'w, 1170, 55)')
    } else if (100 < minute) {
        image(img_select_headerRed, 0, 0)
        image(img_select_timer_0w, 1170, 55)
    }


}
function keyTyped() {
    if (key === 'd') {
        selecting += 7
        sound_ka.pan(-1)
        sound_ka.play()
    } else if (key === 'k') {
        selecting += 1
        sound_ka.pan(1)
        sound_ka.play()
    }
}