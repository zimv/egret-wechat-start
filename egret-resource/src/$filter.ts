//白边投影滤镜
const whiteBorderShadowFilter = (()=>{
    const distance = 0;           /// 阴影的偏移距离，以像素为单位
    const angle = 0;              /// 阴影的角度，0 到 360 度
    const color = 0xffffff;        /// 阴影的颜色，不包含透明度
    const alpha = 1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定
    const quality = 0; //应用滤镜的次数。暂未实现。
    const blurX = 10;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
    const blurY = 10;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
    const strength = 10;                /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
    const inner = false;            /// 指定发光是否为内侧发光
    const knockout = false;            /// 指定对象是否具有挖空效果
    return new egret.DropShadowFilter( distance, angle, color, alpha, blurX, blurY,
    strength, quality, inner, knockout );
})();
//文字阴影黑色投影滤镜
const blackTextShadowFilter = (()=>{
    const distance = 10;           /// 阴影的偏移距离，以像素为单位
    const angle = 90;              /// 阴影的角度，0 到 360 度
    const color = 0x000000;        /// 阴影的颜色，不包含透明度
    const alpha = 0.8;             /// 光晕的颜色透明度，是对 color 参数的透明度设定
    const quality = 0; //应用滤镜的次数。暂未实现。
    const blurX = 0;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
    const blurY = 0;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
    const strength = 1;                /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
    const inner = false;            /// 指定发光是否为内侧发光
    const knockout = false;            /// 指定对象是否具有挖空效果
    return new egret.DropShadowFilter( distance, angle, color, alpha, blurX, blurY,
    strength, quality, inner, knockout );
})();

//灰色滤镜
const colorGrayFilter = (()=>{
    const colorMatrix = [
            0.3,0.5,0,0,0,
            0.3,0.5,0,0,0,
            0.3,0.5,0,0,0,
            0,0,0,1,0
        ];
    return new egret.ColorMatrixFilter(colorMatrix);
})();
