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
var GlobalData = {
    user: Object({}),
    userSaveData: {
        currentStep: 0,
        maxPower: 0,
        currentPower: 0
    }
};
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
        window['main'] = this;
        API.main = this;
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
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.enterGame = function (res) {
        var _this = this;
        if (res.query.page == $page.battle && res.query.battleNo) {
            if (this.initComplete) {
                this.friendBattleStart(res);
            }
            else {
                this.initPage = function () {
                    _this.friendBattleStart(res);
                };
            }
        }
    };
    Main.prototype.friendBattleStart = function (res) {
        var _this = this;
        if (!GlobalData.user['hasReadGuide']) {
            this.guidePage.show(function () {
                _this.changePage($page.battle, { battleNo: res.query.battleNo, battleType: 'friend', stageId: res.query.stageId, monsterId: res.query.monsterId });
            });
        }
        else
            this.changePage($page.battle, { battleNo: res.query.battleNo, battleType: 'friend', stageId: res.query.stageId, monsterId: res.query.monsterId });
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
        //章节
        if (page == $page.chapterList) {
            var chapterList = new ChapterList({ $main: this, param: param });
            this.SV.setContent(chapterList);
            this.SV.scrollTop = 0; //滚动位置重置
        }
        //战斗
        if (page == $page.battle) {
            var battle = new Battle({ $main: this, param: param });
            this.baseContent.addChild(battle);
        }
        //战斗邀请房间页面
        if (page == $page.battleRoom) {
            var battleRoom = new BattleRoom({ $main: this, param: param });
            this.baseContent.addChild(battleRoom);
        }
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.authorize()];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
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
    Main.pages = {};
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
