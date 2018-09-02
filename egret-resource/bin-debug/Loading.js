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
var Loading = (function (_super) {
    __extends(Loading, _super);
    function Loading(_a) {
        var $main = _a.$main;
        var _this = _super.call(this) || this;
        //一共有多少资源加载
        _this.loadLength = 0;
        //当前加载了多少资源
        _this.loadedLength = 0;
        //$代表形状和文字绘制
        _this.RES_layout = {};
        _this.$main = $main;
        _this.stageWidth = _this.$main.stage.stageWidth;
        _this.stageHeight = _this.$main.stage.stageHeight;
        _this.createView();
        _this.visible = false; //默认隐藏
        return _this;
    }
    Loading.prototype.createView = function () {
        //背景
        var rect = new eui.Rect();
        rect.fillColor = 0x000000;
        rect.alpha = 0.9;
        $util.setLayout(rect, {
            w: this.stageWidth,
            h: this.stageHeight,
            x: 0,
            y: 0
        });
        this.addChild(rect);
        //文案
        this.preText = new egret.TextField();
        $util.setLayout(this.preText, {
            w: this.stageWidth,
            h: 20,
            x: 0,
            y: 300
        });
        this.addChild(this.preText);
        this.preText.textColor = 0xffffff;
        this.preText.textAlign = "center";
    };
    Loading.prototype.addContent = function (obj) {
        obj.name = 'content';
        //居中
        obj.x = (this.stageWidth - obj.width) / 2;
        obj.y = (this.stageHeight - obj.height) / 2;
        this.addChild(obj);
        return this;
    };
    Loading.prototype.removeContent = function () {
        var content = this.getChildByName('content');
        this.removeChild(content);
        content = null; //去除引用
        return this;
    };
    Loading.prototype.show = function () {
        this.visible = true;
        return this;
    };
    Loading.prototype.hide = function () {
        this.visible = false;
        return this;
    };
    Loading.prototype.clearHide = function () {
        this.visible = false;
        this.removeContent();
        return this;
    };
    /**
     * 预加载图片资源
     *
     */
    Loading.prototype.preloader = function (images) {
        var _this = this;
        var that = this;
        this.loadLength = 0; //重置
        if (images.length > 0)
            that.show();
        return new Promise(function (resolve, reject) {
            //一共有多少资源加载
            _this.loadLength = _this.loadLength + images.length;
            //当前加载了多少资源
            _this.loadedLength = 0;
            var onComplete = function (e) {
                that.loadedLength++;
                that.preText.text = "Loading..." + that.loadedLength + "/" + that.loadLength;
                if (that.loadedLength == that.loadLength) {
                    that.hide();
                    resolve();
                }
            };
            that.preText.text = "Loading..." + that.loadedLength + "/" + that.loadLength;
            for (var j = 0; j < images.length; j++) {
                var img = new Image();
                img.onload = img.onerror = onComplete;
                img.src = images[j];
            }
        });
    };
    return Loading;
}(Base));
__reflect(Loading.prototype, "Loading");
