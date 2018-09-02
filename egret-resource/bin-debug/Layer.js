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
var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer(_a) {
        var $main = _a.$main;
        var _this = _super.call(this) || this;
        //$代表形状和文字绘制
        _this.RES_layout = {};
        _this.$main = $main;
        _this.stageWidth = _this.$main.stage.stageWidth;
        _this.stageHeight = _this.$main.stage.stageHeight;
        _this.createView();
        _this.visible = false; //默认隐藏
        return _this;
    }
    Layer.prototype.createView = function () {
        var rect = new eui.Rect();
        rect.fillColor = 0x000000;
        rect.alpha = 0.7;
        $util.setLayout(rect, {
            w: this.stageWidth,
            h: this.stageHeight,
            x: 0,
            y: 0
        });
        this.addChild(rect);
    };
    Layer.prototype.addContent = function (obj) {
        obj.name = 'content';
        //居中
        obj.x = (this.stageWidth - obj.width) / 2;
        obj.y = (this.stageHeight - obj.height) / 2;
        this.addChild(obj);
        return this;
    };
    Layer.prototype.removeContent = function () {
        var _this = this;
        this.$children.forEach(function (item) {
            if (item.name == 'content') {
                _this.removeChild(item);
            }
        });
        return this;
    };
    Layer.prototype.show = function () {
        this.visible = true;
        return this;
    };
    Layer.prototype.hide = function () {
        this.visible = false;
        return this;
    };
    Layer.prototype.clearHide = function () {
        this.visible = false;
        this.removeContent();
        return this;
    };
    return Layer;
}(Base));
__reflect(Layer.prototype, "Layer");
