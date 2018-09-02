var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Base = (function (_super) {
    __extends(Base, _super);
    function Base() {
        var _this = _super.call(this) || this;
        _this.$firstEleY = 0;
        _this.$frameCount = 0;
        _this.width = 750;
        _this.height = 1334;
        _this.$data = {};
        return _this;
    }
    Base.prototype.pageContentCenter = function (needCenter) {
        if (needCenter === void 0) { needCenter = false; }
        var measuredHeight = this.measuredHeight + this.$firstEleY;
        //如果舞台高度大于内容高度，内容垂直居中。 框架测量的实际高度：measuredHeight，不包含容器第一个元素的y偏移量
        if (needCenter && this.$main.stage.stageHeight > measuredHeight) {
            this.$main.SV.y = (this.$main.stage.stageHeight - measuredHeight) / 2;
            this.$main.baseContent.y = (this.$main.stage.stageHeight - measuredHeight) / 2;
        }
        else {
            this.$main.SV.y = 0;
            this.$main.baseContent.y;
        }
        this.height = measuredHeight + 50; //50底部间距
    };
    Base.prototype.frameCount = function () {
        if (this.$frameCount >= 60)
            this.$frameCount = 0;
        this.$frameCount++;
        return this.$frameCount;
    };
    Base.prototype.onDestroy = function () {
        console.log('onDestroy');
    };
    return Base;
}(egret.Sprite));
__reflect(Base.prototype, "Base");
