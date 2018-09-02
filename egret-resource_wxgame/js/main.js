var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
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
var Battle_ui = (function (_super) {
    __extends(Battle_ui, _super);
    function Battle_ui() {
        var _this = _super.call(this) || this;
        //$代表形状和文字绘制
        _this.RES_layout = {
            bg: { x: 0, y: 0, w: 750, h: 1634 },
            back: { x: 46, y: 33, w: 46, h: 48 },
            go: { x: 251, y: 488, w: 248, h: 94 },
            ready: { x: 197, y: 360, w: 359, h: 90 },
            round: { x: 311, y: 1300, w: 126, h: 30 }
        };
        _this.isSucces = true;
        //当前页面元素对象
        _this.$el = {
            ready: Object(egret.Bitmap),
            go: Object(egret.Bitmap),
            round: Object(egret.Bitmap)
        };
        var that = _this;
        _this.RES_battle = RES.getRes('battle');
        _this.RES_common = RES.getRes('common');
        return _this;
    }
    Battle_ui.prototype.readyGo = function () {
        var _this = this;
        this.$el.ready.visible = true;
        setTimeout(function () {
            _this.$el.ready.visible = false;
            _this.$el.go.visible = true;
            setTimeout(function () {
                _this.$el.go.visible = false;
            }, 700);
        }, 800);
    };
    Battle_ui.prototype.createView = function () {
        var _this = this;
        //背景
        var RES_bg = new egret.Bitmap(RES.getRes('listbg'));
        $util.setLayout(RES_bg, this.RES_layout['bg']);
        this.$main.PageBg.addChild(RES_bg); //加载到main的PageBg里去，保证背景不滚动
        //顶部元素必传值
        this.$firstEleY = this.RES_layout.back.y;
        var back = new egret.Bitmap(this.RES_common.getTexture('back'));
        $util.setLayout(back, this.RES_layout.back);
        this.addChild(back);
        $util.btnActive(back, function () {
            _this.$main.back();
        });
        this.$el.round = this.fastBitmap(this.RES_battle, 'round');
        this.$el['ready'] = this.fastBitmap(this.RES_battle, 'ready'); //ready
        this.$el['go'] = this.fastBitmap(this.RES_battle, 'go'); //Go
        this.$el['ready'].visible = false;
        this.$el['go'].visible = false;
        this.pageContentCenter(true);
    };
    //快速创建
    Battle_ui.prototype.fastBitmap = function (resObj, name) {
        var RES_bitmap = new egret.Bitmap(resObj.getTexture(name));
        $util.setLayout(RES_bitmap, this.RES_layout[name]);
        this.addChild(RES_bitmap);
        return RES_bitmap;
    };
    return Battle_ui;
}(Base));
__reflect(Battle_ui.prototype, "Battle_ui");
var Index_ui = (function (_super) {
    __extends(Index_ui, _super);
    function Index_ui() {
        var _this = _super.call(this) || this;
        //$代表形状和文字绘制
        _this.RES_layout = {
            indexbg: { x: 0, y: 0, w: 750, h: 1665 },
            bg: { x: 0, y: 50, w: 750, h: 553 },
            msg: { x: 100, y: 700, w: 471, h: 104 },
            gold: { x: 300, y: 100, w: 300, h: 39 }
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
            var _this = this;
            var RES_bg, toList;
            return __generator(this, function (_a) {
                RES_bg = new egret.Bitmap(RES.getRes('indexbg'));
                $util.setLayout(RES_bg, this.RES_layout['indexbg']);
                RES_bg.fillMode = egret.BitmapFillMode.REPEAT;
                this.$main.PageBg.addChild(RES_bg); //加载到main的PageBg里去，保证背景不滚动
                //顶部元素必传值
                this.$firstEleY = this.RES_layout.gold.y;
                this.fastBitmap('bg');
                this.fastBitmap('msg');
                this.$el.gold = this.drawGoldText();
                toList = new egret.TextField();
                toList.text = "点我进入列表页!";
                toList.textColor = 0x000000;
                toList.x = 200;
                toList.y = 300;
                this.addChild(toList);
                toList.touchEnabled = true;
                toList.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    _this.$main.changePage($page.list);
                }, this);
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
        textField.textColor = 0x000000;
        textField.size = 26;
        textField.textAlign = 'center';
        $util.setLayout(textField, this.RES_layout.gold);
        this.addChild(textField);
        return textField;
    };
    return Index_ui;
}(Base));
__reflect(Index_ui.prototype, "Index_ui");
var $config = (function () {
    function $config() {
        this.env = 'dev'; //dev or product
        this.hosts = {
            dev: 'https://xxxx.com',
            product: 'https://xxxxxxx.com'
        };
        this.envKey = this.env || 'product';
        this.main = this.hosts[this.envKey];
        this.gender = {
            male: 1,
            female: 2,
            unknown: 0
        };
    }
    return $config;
}());
__reflect($config.prototype, "$config");
var CONFIG = new $config();
var List_ui = (function (_super) {
    __extends(List_ui, _super);
    function List_ui() {
        var _this = _super.call(this) || this;
        //$代表形状和文字绘制
        _this.RES_layout = {
            bg: { x: 0, y: 0, w: 750, h: 1634 },
            back: { x: 46, y: 33, w: 46, h: 48 },
            item: {
                x: 54, y: 100, w: 645, h: 263,
                No: { x: 100, y: 100, w: 53, h: 44 },
            }
        };
        _this.$el = {
            got: Object(egret.Bitmap),
            get: Object(egret.Bitmap),
            unget: Object(egret.Bitmap),
        };
        _this.$data = {
            list: [{ No: '1' }, { No: '2' }, { No: '3' }, { No: '4' }, { No: '5' }, { No: '6' }]
        };
        _this.RES_list = RES.getRes('list');
        _this.RES_common = RES.getRes('common');
        return _this;
    }
    List_ui.prototype.createView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var RES_bg, back;
            return __generator(this, function (_a) {
                RES_bg = new egret.Bitmap(RES.getRes('listbg'));
                $util.setLayout(RES_bg, this.RES_layout['bg']);
                this.$main.PageBg.addChild(RES_bg); //加载到main的PageBg里去，保证背景不滚动
                //顶部元素必传值
                this.$firstEleY = this.RES_layout.back.y;
                back = new egret.Bitmap(this.RES_common.getTexture('back'));
                $util.setLayout(back, this.RES_layout.back);
                this.addChild(back);
                $util.btnActive(back, function () {
                    _this.$main.back();
                });
                //绘制关卡
                this.itemList();
                this.pageContentCenter();
                return [2 /*return*/];
            });
        });
    };
    //绘制关卡列表
    List_ui.prototype.itemList = function () {
        var _this = this;
        this.$data.list.map(function (item, index) {
            //容器
            var itemCon = new egret.DisplayObjectContainer();
            var layout = {
                x: _this.RES_layout.item.x,
                y: _this.RES_layout.item.y + index * 280,
                w: _this.RES_layout.item.w,
                h: _this.RES_layout.item.h
            };
            $util.setLayout(itemCon, layout);
            _this.addChild(itemCon);
            //背景色块
            var block = new eui.Rect();
            block.ellipseWidth = 40;
            block.ellipseHeight = 40;
            block.width = itemCon.width;
            block.height = itemCon.height;
            block.fillColor = 0x88c664;
            itemCon.addChild(block);
            var block2 = new eui.Rect();
            block2.ellipseWidth = 40;
            block2.ellipseHeight = 40;
            block2.width = itemCon.width;
            block2.height = itemCon.height;
            block2.fillColor = 0x88c664;
            block2.alpha = 0 + 0.1 * index;
            itemCon.addChild(block2);
            //背景
            var RES_item = new egret.Bitmap(_this.RES_list.getTexture('item'));
            itemCon.addChild(RES_item);
            var No = new egret.TextField();
            $util.setLayout(No, _this.RES_layout.item.No);
            No.textColor = 0xffffff;
            No.size = 40;
            No.text = item.No;
            itemCon.addChild(No);
            itemCon.touchEnabled = true;
            itemCon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.$main.changePage($page.battle);
            }, _this);
        });
    };
    //快速创建
    List_ui.prototype.fastBitmap = function (resObj, name) {
        var RES_bitmap = new egret.Bitmap(resObj.getTexture(name));
        $util.setLayout(RES_bitmap, this.RES_layout[name]);
        this.addChild(RES_bitmap);
        return RES_bitmap;
    };
    return List_ui;
}(Base));
__reflect(List_ui.prototype, "List_ui");
var Index = (function (_super) {
    __extends(Index, _super);
    function Index(_a) {
        var $main = _a.$main;
        var _this = _super.call(this) || this;
        _this.$main = $main;
        _this.init();
        return _this;
    }
    Index.prototype.init = function () {
        var _this = this;
        this.createView();
        setTimeout(function () {
            _this.$data.gold = '3000';
        }, 3000);
    };
    Index.prototype.onDestroy = function () {
        console.log('index destroy');
    };
    return Index;
}(Index_ui));
__reflect(Index.prototype, "Index");
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
//灰色滤镜
var colorGrayFilter = (function () {
    var colorMatrix = [
        0.3, 0.5, 0, 0, 0,
        0.3, 0.5, 0, 0, 0,
        0.3, 0.5, 0, 0, 0,
        0, 0, 0, 1, 0
    ];
    return new egret.ColorMatrixFilter(colorMatrix);
})();
var Battle = (function (_super) {
    __extends(Battle, _super);
    function Battle(_a) {
        var $main = _a.$main, param = _a.param;
        var _this = _super.call(this) || this;
        _this.$param = param;
        _this.$main = $main;
        _this.init();
        return _this;
    }
    Battle.prototype.init = function () {
        this.createView();
        this.readyGo();
        egret.Tween.get(this.$el.round, { loop: true }).to({ y: 0 }, 10000);
    };
    Battle.prototype.onDestroy = function () {
        console.log('battle destroy');
    };
    return Battle;
}(Battle_ui));
__reflect(Battle.prototype, "Battle");
var $page = (function () {
    function $page() {
    }
    $page.index = 'index';
    $page.list = 'list';
    $page.battle = 'battle';
    return $page;
}());
__reflect($page.prototype, "$page");
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
/**
 * http请求的封装
 **/
var $api = (function () {
    function $api() {
        this.hostMain = CONFIG.main;
        this.login = this.post('/login');
    }
    $api.prototype.get = function (url, setHost) {
        if (setHost === void 0) { setHost = null; }
        return this.setRequest('GET', url, setHost);
    };
    $api.prototype.post = function (url, setHost) {
        if (setHost === void 0) { setHost = null; }
        return this.setRequest('POST', url, setHost);
    };
    $api.prototype.setRequest = function (method, url, setHost) {
        var _this = this;
        if (setHost === void 0) { setHost = null; }
        var host = this.hostMain;
        if (setHost)
            host = setHost;
        return function (params) {
            if (params === void 0) { params = null; }
            params = params || {};
            params.method = method;
            params.url = url;
            if (params.url.indexOf('http:') != 0 && params.url.indexOf('https:') != 0) {
                params.url = host + url;
            }
            return _this.request(params);
        };
    };
    // 请求方法
    $api.prototype.request = function (params) {
        var errCallbacks = params.errCallbacks || {};
        var success = params.success || false;
        var that = this;
        return new Promise(function (resolve, reject) {
            wx.request({
                url: params.url,
                data: params.data,
                method: params.method || 'POST',
                success: function (res) {
                    //兼容两种写法
                    if (params.success) {
                        success();
                    }
                    else
                        resolve(res);
                },
                fail: function () {
                    wx.showToast({
                        title: '请求失败',
                        icon: 'none',
                        duration: 2000
                    });
                },
                complete: function () {
                    params.complete && params.complete();
                }
            });
        });
    };
    ;
    return $api;
}());
__reflect($api.prototype, "$api");
var API = new $api();
var List = (function (_super) {
    __extends(List, _super);
    function List(_a) {
        var $main = _a.$main, param = _a.param;
        var _this = _super.call(this) || this;
        _this.$main = $main;
        _this.$param = param;
        _this.createView();
        return _this;
    }
    List.prototype.onDestroy = function () {
        console.log('list destroy');
    };
    return List;
}(List_ui));
__reflect(List.prototype, "List");
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
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
//全局数据写到此对象当中
var GlobalData = {};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initComplete = false;
        _this.$popstate = []; //记录历史路由
        return _this;
    }
    Main.prototype.createChildren = function () {
        var _this = this;
        _super.prototype.createChildren.call(this);
        this.enterGame(wx.getLaunchOptionsSync());
        wx.onShow(function (res) {
            console.log('wxOnShow');
            console.log(res);
            _this.enterGame(res);
        });
        /*
        1、如果加载的外部头像服务器不支持跨域，那么无法使用webgl，如果服务器支持跨域，那么加载前需要设置  egret.ImageLoader.crossOrigin = "anonymous"
        2、如果加载的外部头像服务器不支持跨域，使用canvas,那么加载前需要设置  egret.ImageLoader.crossOrigin = "anonymous"，如果服务器支持跨域，那就直接加载
         */
        egret.ImageLoader.crossOrigin = "anonymous"; //支持跨域
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.enterGame = function (res) {
        //微信转发设置参数 page=list，进入小程序就会直接打开list页面
        if (res.query.page == $page.list) {
            this.changePage($page.list, {});
        }
    };
    Main.prototype.initElement = function () {
        this.PageBg = new egret.DisplayObjectContainer();
        this.stage.addChild(this.PageBg);
        this.SV = new egret.ScrollView();
        this.SV.width = this.stage.stageWidth;
        this.SV.height = this.stage.stageHeight;
        this.stage.addChild(this.SV);
        this.baseContent = new egret.DisplayObjectContainer();
        this.stage.addChild(this.baseContent);
        this.Layer = new Layer({ $main: this });
        this.Layer.name = 'layer';
        this.stage.addChild(this.Layer);
        this.Loading = new Loading({ $main: this });
        this.Loading.name = 'loading';
        this.stage.addChild(this.Loading);
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        //await this.authorize();有appId的情况下授权才能使用
                        this.initElement();
                        if (this.initPage)
                            this.initPage();
                        else
                            this.changePage($page.index);
                        this.initComplete = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.reload = function () {
        var cur = this.$popstate[this.$popstate.length - 1];
        this.changePage(cur.page, cur.param, false);
    };
    Main.prototype.back = function () {
        //如果后退不了直接返回首页
        if (this.$popstate.length < 2) {
            this.changePage($page.index, {}, false);
            return;
        }
        this.$popstate.splice(this.$popstate.length - 1, 1);
        var cur = this.$popstate[this.$popstate.length - 1];
        this.changePage(cur.page, cur.param, false);
    };
    Main.prototype.clearPopstate = function () {
        this.$popstate = [];
    };
    Main.prototype.changePage = function (page, param, update) {
        if (param === void 0) { param = {}; }
        if (update === void 0) { update = true; }
        //钩子函数
        this.SV.$children[0] && this.SV.$children[0].onDestroy();
        this.baseContent.$children[0] && this.baseContent.$children[0].onDestroy();
        this.SV.removeContent(); //移除上个页面
        this.PageBg.removeChildren();
        this.baseContent.removeChildren();
        if (update) {
            //记录路由
            this.$popstate.push({
                page: page,
                param: param,
            });
        }
        //首页
        if (page == $page.index) {
            var indexView = new Index({ $main: this });
            this.SV.setContent(indexView);
            //清除历史，再加入首页记录
            this.clearPopstate();
            this.$popstate.push({
                page: page,
                param: param,
            });
            this.SV.scrollTop = 0; //滚动位置重置
        }
        //列表页
        if (page == $page.list) {
            var list = new List({ $main: this, param: param });
            this.SV.setContent(list);
            this.SV.scrollTop = 0; //滚动位置重置
        }
        //战斗页
        if (page == $page.battle) {
            var battle = new Battle({ $main: this, param: param });
            this.baseContent.addChild(battle);
        }
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.authorize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, u;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, wxPromise.getSetting()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (!!res['authSetting']['scope.userInfo']) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getWxUserInfo()];
                    case 2:
                        u = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.getWxUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var button = wx.createUserInfoButton({
                            type: 'text',
                            text: '点击获取用户信息',
                            style: {
                                left: 10,
                                top: 76,
                                width: 200,
                                height: 40,
                                lineHeight: 40,
                                backgroundColor: '#ff0000',
                                color: '#ffffff',
                                textAlign: 'center',
                                fontSize: 16,
                                borderRadius: 4
                            }
                        });
                        button['onTap'](function (wxUser) {
                            button['hide']();
                            console.log(wxUser);
                        });
                        button['show']();
                    })];
            });
        });
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.request = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    DebugPlatform.prototype.getStorageSync = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var Wx = (function () {
    function Wx() {
    }
    Wx.prototype.getUserInfo = function () { };
    Wx.prototype.login = function (params) { };
    Wx.prototype.request = function (params) { };
    Wx.prototype.getStorageSync = function (str) { };
    Wx.prototype.setStorageSync = function (str, str2) { };
    Wx.prototype.showLoading = function (params) { };
    Wx.prototype.showToast = function (params) { };
    Wx.prototype.hideLoading = function () { };
    Wx.prototype.getWeRunData = function (params) { };
    Wx.prototype.createUserInfoButton = function (params) { };
    Wx.prototype.shareAppMessage = function (params) { };
    Wx.prototype.onShow = function (params) { };
    Wx.prototype.getLaunchOptionsSync = function () { };
    Wx.prototype.exitMiniProgram = function (params) { };
    Wx.prototype.getSetting = function (params) { };
    Wx.prototype.createOpenSettingButton = function (params) { };
    Wx.prototype.checkSession = function (params) { };
    return Wx;
}());
__reflect(Wx.prototype, "Wx");
if (!window.wx) {
    window.wx = new Wx();
}
var wxPromiseBase = function (api) {
    return function (params) {
        if (params === void 0) { params = null; }
        return new Promise(function (resolve, reject) {
            wx[api]({
                success: function (res) {
                    params && params.success && params.success(res);
                    resolve(res);
                },
                fail: function (res) {
                    if (res && typeof res)
                        res.wxFail = true;
                    resolve(res || null);
                }
            });
        });
    };
};
var wxPromise = {
    login: wxPromiseBase('login'),
    getWeRunData: wxPromiseBase('getWeRunData'),
    getUserInfo: wxPromiseBase('getUserInfo'),
    getSetting: wxPromiseBase('getSetting'),
    checkSession: wxPromiseBase('checkSession')
};
;window.Main = Main;