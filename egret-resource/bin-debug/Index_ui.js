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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Index_ui = (function (_super) {
    __extends(Index_ui, _super);
    function Index_ui() {
        var _this = _super.call(this) || this;
        //$代表形状和文字绘制
        _this.RES_layout = {
            indexbg: { x: 0, y: 0, w: 750, h: 1665 },
            gold: { x: 441, y: 67, w: 57, h: 39 }
        };
        _this.$el = {
            gold: Object(egret.TextField)
        };
        _this.$data = {
            gold: '0'
        };
        _this.RES_index = RES.getRes('index');
        _this.RES_common = RES.getRes('common');
        return _this;
    }
    Index_ui.prototype.createView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var RES_bg;
            return __generator(this, function (_a) {
                RES_bg = new egret.Bitmap(RES.getRes('indexbg'));
                $util.setLayout(RES_bg, this.RES_layout['indexbg']);
                RES_bg.fillMode = egret.BitmapFillMode.REPEAT;
                this.$main.PageBg.addChild(RES_bg); //加载到main的PageBg里去，保证背景不滚动
                //顶部元素必传值
                this.$firstEleY = this.RES_layout.gold.y;
                this.$el.gold = this.drawGoldText();
                this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                this.pageContentCenter(true); //根据内容计算处理居中
                return [2 /*return*/];
            });
        });
    };
    Index_ui.prototype.onEnterFrame = function () {
        var num = parseInt(this.$el.gold.text);
        var currentGold = parseInt(this.$data.gold);
        var val = Math.floor(Math.abs(num - currentGold) / 10);
        if (val < 1)
            val = 1;
        if (num > currentGold)
            num -= val;
        if (num < currentGold)
            num += val;
        this.$el.gold.text = num;
    };
    //快速创建
    Index_ui.prototype.fastBitmap = function (name) {
        var RES_bitmap = new egret.Bitmap(this.RES_index.getTexture(name));
        $util.setLayout(RES_bitmap, this.RES_layout[name]);
        this.addChild(RES_bitmap);
        return RES_bitmap;
    };
    Index_ui.prototype.drawGoldText = function () {
        var textField = new egret.TextField();
        textField.text = this.$data.gold;
        textField.textColor = 0xffffff;
        textField.size = 26;
        textField.textAlign = 'center';
        $util.setLayout(textField, this.RES_layout.gold);
        this.addChild(textField);
        return textField;
    };
    return Index_ui;
}(Base));
__reflect(Index_ui.prototype, "Index_ui");
