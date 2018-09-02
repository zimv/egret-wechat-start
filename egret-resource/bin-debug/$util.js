var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var $util = (function () {
    function $util() {
    }
    //定位和设置宽高
    $util.setLayout = function (obj, _a) {
        var x = _a.x, y = _a.y, w = _a.w, h = _a.h;
        obj.x = x || 0;
        obj.y = y || 0;
        obj.width = w || 0;
        obj.height = h || 0;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    $util.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /*按钮设置点击效果*/
    $util.btnActive = function (btn, cb) {
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (btn.$lockClickRepeat)
                return;
            btn.alpha = 0.8;
            btn.y++;
            btn.$lockClickRepeat = true;
            setTimeout(function () { btn.alpha = 1; btn.y--; }, 300);
            setTimeout(function () {
                cb && cb();
                btn.$lockClickRepeat = false;
            }, 500);
        });
    };
    /*按钮绑定点击*/
    $util.bindBtnClick = function (btn, cb) {
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            cb && cb();
        });
    };
    /*根据属性值获取数组对象 */
    $util.getItemFromAttr = function (attr, val, arr) {
        var r = null;
        arr.forEach(function (item) {
            if (item[attr] == val)
                r = item;
        });
        return r;
    };
    return $util;
}());
__reflect($util.prototype, "$util");
