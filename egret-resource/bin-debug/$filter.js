//奖章投阴
var dropShadowFilter = (function () {
    var distance = 16; /// 阴影的偏移距离，以像素为单位
    var angle = 45; /// 阴影的角度，0 到 360 度
    var color = 0x000000; /// 阴影的颜色，不包含透明度
    var alpha = 0.7; /// 光晕的颜色透明度，是对 color 参数的透明度设定
    var quality = 0; //应用滤镜的次数。暂未实现。
    var blurX = 0; /// 水平模糊量。有效值为 0 到 255.0（浮点）
    var blurY = 0; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
    var strength = 0.65; /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
    var inner = false; /// 指定发光是否为内侧发光
    var knockout = false; /// 指定对象是否具有挖空效果
    return new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY, strength, quality, inner, knockout);
})();
//白边投影滤镜
var whiteBorderShadowFilter = (function () {
    var distance = 0; /// 阴影的偏移距离，以像素为单位
    var angle = 0; /// 阴影的角度，0 到 360 度
    var color = 0xffffff; /// 阴影的颜色，不包含透明度
    var alpha = 1; /// 光晕的颜色透明度，是对 color 参数的透明度设定
    var quality = 0; //应用滤镜的次数。暂未实现。
    var blurX = 10; /// 水平模糊量。有效值为 0 到 255.0（浮点）
    var blurY = 10; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
    var strength = 10; /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
    var inner = false; /// 指定发光是否为内侧发光
    var knockout = false; /// 指定对象是否具有挖空效果
    return new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY, strength, quality, inner, knockout);
})();
//文字阴影黑色投影滤镜
var blackTextShadowFilter = (function () {
    var distance = 10; /// 阴影的偏移距离，以像素为单位
    var angle = 90; /// 阴影的角度，0 到 360 度
    var color = 0x000000; /// 阴影的颜色，不包含透明度
    var alpha = 0.8; /// 光晕的颜色透明度，是对 color 参数的透明度设定
    var quality = 0; //应用滤镜的次数。暂未实现。
    var blurX = 0; /// 水平模糊量。有效值为 0 到 255.0（浮点）
    var blurY = 0; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
    var strength = 1; /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
    var inner = false; /// 指定发光是否为内侧发光
    var knockout = false; /// 指定对象是否具有挖空效果
    return new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY, strength, quality, inner, knockout);
})();
//奖章灰色滤镜
var colorGrayFilter = (function () {
    var colorMatrix = [
        0.3, 0.5, 0, 0, 0,
        0.3, 0.5, 0, 0, 0,
        0.3, 0.5, 0, 0, 0,
        0, 0, 0, 1, 0
    ];
    return new egret.ColorMatrixFilter(colorMatrix);
})();
//战斗亮牌背板灰色滤镜
var colorBattleGrayFilter = (function () {
    var colorMatrix = [
        0.3, 0.8, 0, 0, 0,
        0.3, 0.8, 0, 0, 0,
        0.3, 0.8, 0, 0, 0,
        0, 0, 0, 1, 0
    ];
    return new egret.ColorMatrixFilter(colorMatrix);
})();
