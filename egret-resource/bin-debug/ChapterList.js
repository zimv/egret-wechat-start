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
var ChapterList = (function (_super) {
    __extends(ChapterList, _super);
    function ChapterList(_a) {
        var $main = _a.$main, param = _a.param;
        var _this = _super.call(this) || this;
        //$代表形状和文字绘制
        _this.RES_layout = {
            bg: { x: 0, y: 0, w: 750, h: 1634 },
            back: { x: 46, y: 33, w: 46, h: 48 },
            chapter: { x: 46, y: 97, w: 311, h: 64 },
            chapterNum: { x: 373, y: 97, w: 61, h: 52 },
            help: { x: 653, y: 99, w: 44, h: 44 },
            $getBg: { x: 51, y: 229, w: 649, h: 147 },
            getStar1: { x: 84, y: 244, w: 41, h: 41 },
            getStar2: { x: 130, y: 244, w: 41, h: 41 },
            getStar3: { x: 176, y: 244, w: 41, h: 41 },
            $progress: { x: 228, y: 255, w: 150, h: 26 },
            coin: { x: 80, y: 322, w: 62, h: 45 },
            $coinVal: { x: 151, y: 339, w: 100, h: 23 },
            exp: { x: 261, y: 323, w: 60, h: 43 },
            $expVal: { x: 334, y: 339, w: 120, h: 23 },
            get: { x: 499, y: 264, w: 179, h: 78 },
            got: { x: 499, y: 264, w: 179, h: 78 },
            unget: { x: 499, y: 264, w: 179, h: 78 },
            guankatiao: {
                x: 54, y: 438, w: 645, h: 263,
                child: {
                    win: { x: 26, y: 189, w: 120, h: 45 },
                    No: { x: 31, y: 25, w: 53, h: 44 },
                    title: { x: 31, y: 120, w: 400, h: 30 },
                    star1: { x: 495, y: 16, w: 41, h: 41 },
                    star2: { x: 539, y: 16, w: 41, h: 41 },
                    star3: { x: 583, y: 16, w: 41, h: 41 },
                    coin: { x: 306, y: 188, w: 62, h: 45 },
                    $coinVal: { x: 377, y: 205, w: 100, h: 23 },
                    exp: { x: 487, y: 189, w: 60, h: 43 },
                    $expVal: { x: 560, y: 205, w: 100, h: 23 }
                }
            },
        };
        _this.$el = {
            got: Object(egret.Bitmap),
            get: Object(egret.Bitmap),
            unget: Object(egret.Bitmap),
        };
        _this.$main = $main;
        _this.$param = param;
        _this.RES_chapter = RES.getRes('chapter');
        _this.RES_common = RES.getRes('common');
        _this.getDetails();
        return _this;
    }
    ChapterList.prototype.getDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API.getStages({
                            data: {
                                chapterId: this.$param.chapterId
                            }
                        })];
                    case 1:
                        res = _a.sent();
                        this.$data.detail = res;
                        this.$data.detail.bonus = JSON.parse(this.$data.detail.bonus);
                        return [4 /*yield*/, this.$main.Loading.preloader([res['stageList'][0].background_pic])];
                    case 2:
                        _a.sent();
                        this.createView();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChapterList.prototype.createView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var back;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //背景
                        RES.getResByUrl(this.$data.detail['stageList'][0].background_pic, function (texture) {
                            var RES_bg = new egret.Bitmap(texture);
                            $util.setLayout(RES_bg, _this.RES_layout['bg']);
                            _this.$main.PageBg.addChild(RES_bg); //加载到main的PageBg里去，保证背景不滚动
                        }, this, RES.ResourceItem.TYPE_IMAGE);
                        //顶部元素必传值
                        this.$firstEleY = this.RES_layout.back.y;
                        back = new egret.Bitmap(this.RES_common.getTexture('back'));
                        $util.setLayout(back, this.RES_layout.back);
                        this.addChild(back);
                        $util.btnActive(back, function () {
                            _this.$main.back();
                        });
                        this.fastBitmap(this.RES_chapter, 'chapter'); //章节字母显示
                        this.chapterNum(); //绘制章节号码
                        this.fastBitmap(this.RES_common, 'help'); //帮助按钮
                        return [4 /*yield*/, this.chapterTitle()];
                    case 1:
                        _a.sent(); //绘制章节标题
                        //章节奖励
                        this.drawJianglibg(); //章节奖励背版
                        this.jiangliStar(); //三星
                        this.fastBitmap(this.RES_common, 'coin'); //coin icon
                        this.fastBitmap(this.RES_common, 'exp'); //exp icon
                        this.$el.get = this.fastBitmap(this.RES_chapter, 'get');
                        this.$el.got = this.fastBitmap(this.RES_chapter, 'got');
                        this.$el.unget = this.fastBitmap(this.RES_chapter, 'unget');
                        this.$el.get.visible = false;
                        this.$el.got.visible = false;
                        this.$el.unget.visible = false;
                        //测试
                        // this.$data.detail.totalStar = 10;
                        // this.$data.detail.bonusReceived = true
                        this.drawJiangliVal({
                            gold: this.$data.detail.bonus.gold,
                            exp: this.$data.detail.bonus.exp,
                            total: this.$data.detail.stageList.length,
                            totalStar: this.$data.detail.totalStar,
                            bonusReceived: this.$data.detail.bonusReceived
                        }); //绘制章节奖励数据
                        this.$el.get.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            //领取三星奖励
                            _this.receiveChapterBonus();
                        }, this);
                        //绘制关卡
                        this.guankaList();
                        this.pageContentCenter();
                        return [2 /*return*/];
                }
            });
        });
    };
    //领取三星奖励
    ChapterList.prototype.receiveChapterBonus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.$param.chapterId);
                        return [4 /*yield*/, API.receiveChapterBonus({
                                data: {
                                    chapterId: this.$param.chapterId
                                }
                            })];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            console.log(res);
                            this.$el.got.visible = true;
                            this.$el.get.visible = false;
                            this.$el.unget.visible = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //绘制关卡列表
    ChapterList.prototype.guankaList = function () {
        var _this = this;
        //this.$data.detail.stageList = this.$data.detail.stageList.concat(this.$data.detail.stageList).concat(this.$data.detail.stageList).concat(this.$data.detail.stageList).concat(this.$data.detail.stageList).concat(this.$data.detail.stageList).concat(this.$data.detail.stageList);
        var preStatus = 1;
        this.$data.detail.stageList.map(function (item, index) {
            if (typeof item.bonus == 'string')
                item.bonus = JSON.parse(item.bonus);
            //容器
            var guankaBar = new egret.DisplayObjectContainer();
            var layout = {
                x: _this.RES_layout.guankatiao.x,
                y: _this.RES_layout.guankatiao.y + index * 280,
                w: _this.RES_layout.guankatiao.w,
                h: _this.RES_layout.guankatiao.h
            };
            $util.setLayout(guankaBar, layout);
            _this.addChild(guankaBar);
            //绘制关卡条内部
            //背景色块
            var block = new eui.Rect();
            block.ellipseWidth = 40;
            block.ellipseHeight = 40;
            block.width = guankaBar.width;
            block.height = guankaBar.height;
            block.fillColor = 0xBBC9FE;
            guankaBar.addChild(block);
            var block2 = new eui.Rect();
            block2.ellipseWidth = 40;
            block2.ellipseHeight = 40;
            block2.width = guankaBar.width;
            block2.height = guankaBar.height;
            block2.fillColor = 0x0000FF;
            block2.alpha = 0 + 0.1 * index;
            guankaBar.addChild(block2);
            //背景
            var RES_guankatiao = new egret.Bitmap(_this.RES_chapter.getTexture('guankatiao'));
            guankaBar.addChild(RES_guankatiao);
            //关卡号
            var No = item.stageOrder.toString().split("");
            if (No.length == 1)
                No.unshift('0');
            No.map(function (num, index) {
                var RES_num = new egret.Bitmap(_this.RES_common.getTexture("w" + num));
                var layout = {
                    x: _this.RES_layout.guankatiao.child.No.x + 53 * index,
                    y: _this.RES_layout.guankatiao.child.No.y,
                    w: _this.RES_layout.guankatiao.child.No.w,
                    h: _this.RES_layout.guankatiao.child.No.h
                };
                $util.setLayout(RES_num, layout);
                guankaBar.addChild(RES_num);
            });
            //star
            for (var i = 0; i < item.star; i++) {
                var RES_star = new egret.Bitmap(_this.RES_common.getTexture('star'));
                $util.setLayout(RES_star, _this.RES_layout.guankatiao.child["star" + (i + 1)]);
                guankaBar.addChild(RES_star);
            }
            //关卡标题
            var title = new egret.TextField();
            $util.setLayout(title, _this.RES_layout.guankatiao.child.title);
            title.textColor = 0xffffff;
            title.size = 30;
            title.text = item.content;
            guankaBar.addChild(title);
            //win
            if (item.status == 1) {
                var RES_win = new egret.Bitmap(_this.RES_chapter.getTexture('win'));
                $util.setLayout(RES_win, _this.RES_layout.guankatiao.child.win);
                guankaBar.addChild(RES_win);
            }
            //exp coin
            var RES_coin = new egret.Bitmap(_this.RES_common.getTexture('coin'));
            $util.setLayout(RES_coin, _this.RES_layout.guankatiao.child.coin);
            guankaBar.addChild(RES_coin);
            var RES_exp = new egret.Bitmap(_this.RES_common.getTexture('exp'));
            $util.setLayout(RES_exp, _this.RES_layout.guankatiao.child.exp);
            guankaBar.addChild(RES_exp);
            //金币
            var textCoin = new egret.TextField();
            textCoin.text = ": " + item.bonus.gold;
            textCoin.textColor = 0xffffff;
            textCoin.size = 28;
            $util.setLayout(textCoin, _this.RES_layout.guankatiao.child.$coinVal);
            guankaBar.addChild(textCoin);
            //经验
            var textExp = new egret.TextField();
            textExp.text = ": " + item.bonus.exp;
            textExp.textColor = 0xffffff;
            textExp.size = 28;
            $util.setLayout(textExp, _this.RES_layout.guankatiao.child.$expVal);
            guankaBar.addChild(textExp);
            //点击事件
            if (item.status == 0 && preStatus == 0) {
                var lock = new egret.Bitmap(_this.RES_common.getTexture('lock'));
                $util.setLayout(lock, {
                    x: guankaBar.x + (guankaBar.width - 66),
                    y: guankaBar.y + 20,
                    w: 46,
                    h: 52
                });
                _this.addChild(lock);
                guankaBar.filters = [colorGrayFilter];
            }
            else {
                guankaBar.touchEnabled = true;
                guankaBar.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    if (!GlobalData.user.hasReadGuide) {
                        _this.$main.guidePage.show(function () {
                            _this.$main.changePage($page.battle, { stageId: item.stageId, battleType: 'monster' });
                        });
                    }
                    else {
                        _this.$main.changePage($page.battle, { stageId: item.stageId, battleType: 'monster' });
                    }
                }, _this);
            }
            preStatus = item.status;
        });
    };
    //奖励条表单值
    ChapterList.prototype.drawJiangliVal = function (_a) {
        var _b = _a.gold, gold = _b === void 0 ? 0 : _b, _c = _a.exp, exp = _c === void 0 ? 0 : _c, _d = _a.totalStar, totalStar = _d === void 0 ? 0 : _d, _e = _a.total, total = _e === void 0 ? 0 : _e, _f = _a.bonusReceived, bonusReceived = _f === void 0 ? false : _f;
        //进度
        var progr = new egret.TextField();
        progr.text = "(" + totalStar + "/" + total + ")";
        progr.textColor = 0xffffff;
        progr.size = 28;
        $util.setLayout(progr, this.RES_layout.$progress);
        this.addChild(progr);
        //金币
        var textCoin = new egret.TextField();
        textCoin.text = ": " + gold;
        textCoin.textColor = 0xffffff;
        textCoin.size = 28;
        $util.setLayout(textCoin, this.RES_layout.$coinVal);
        this.addChild(textCoin);
        //经验
        var textExp = new egret.TextField();
        textExp.text = ": " + exp;
        textExp.textColor = 0xffffff;
        textExp.size = 28;
        $util.setLayout(textExp, this.RES_layout.$expVal);
        this.addChild(textExp);
        //领取按钮
        if (bonusReceived) {
            //已领取
            this.$el.got.visible = true;
            this.$el.get.visible = false;
            this.$el.unget.visible = false;
        }
        else {
            //没领取
            if (totalStar < total) {
                //不可领取
                this.$el.get.visible = false;
                this.$el.got.visible = false;
                this.$el.unget.visible = true;
            }
            else {
                //可领取
                this.$el.get.visible = true;
                this.$el.got.visible = false;
                this.$el.unget.visible = false;
                this.$el.get.touchEnabled = true;
            }
        }
    };
    //章节奖励星星
    ChapterList.prototype.jiangliStar = function () {
        var RES_star1 = new egret.Bitmap(this.RES_common.getTexture('star'));
        $util.setLayout(RES_star1, this.RES_layout['getStar1']);
        this.addChild(RES_star1);
        var RES_star2 = new egret.Bitmap(this.RES_common.getTexture('star'));
        $util.setLayout(RES_star2, this.RES_layout['getStar2']);
        this.addChild(RES_star2);
        var RES_star3 = new egret.Bitmap(this.RES_common.getTexture('star'));
        $util.setLayout(RES_star3, this.RES_layout['getStar3']);
        this.addChild(RES_star3);
    };
    //章节奖励条背景
    ChapterList.prototype.drawJianglibg = function () {
        var rect = new eui.Rect();
        rect.ellipseWidth = 24; //设置圆角参数
        rect.ellipseHeight = 24;
        rect.fillColor = 0x4c5d93;
        rect.fillAlpha = 0.6;
        $util.setLayout(rect, this.RES_layout.$getBg);
        this.addChild(rect);
    };
    //绘制章节标题，需要动态计算位置 保证居中
    ChapterList.prototype.chapterTitle = function () {
        var _this = this;
        // let RES_chapter = new egret.Bitmap( RES.getRes('chapter-title') );
        // RES_chapter.x = (this.$main.stage.$stageWidth-RES_chapter.width)/2;
        // RES_chapter.y = 169;
        // this.addChild(RES_chapter);
        //let res = 'https://avatar-qiniu.doctorwork.com/o_1cm4v8obijsh1qgub30qqer96i.png'
        return new Promise(function (resolve) {
            RES.getResByUrl(_this.$param.title, function (texture) {
                var RES_chapter = new egret.Bitmap(texture);
                RES_chapter.x = (this.$main.stage.$stageWidth - RES_chapter.width) / 2;
                RES_chapter.y = 169;
                this.addChild(RES_chapter);
                resolve();
            }, _this, RES.ResourceItem.TYPE_IMAGE);
        });
    };
    //绘制章节号码
    ChapterList.prototype.chapterNum = function () {
        var _this = this;
        if (this.$param.chapterNum) {
            this.$param.chapterNum.toString().split("").map(function (num, index) {
                var RES_num = new egret.Bitmap(_this.RES_common.getTexture("r" + num));
                var layout = {
                    x: _this.RES_layout['chapterNum'].x + 61 * index,
                    y: _this.RES_layout['chapterNum'].y,
                    w: _this.RES_layout['chapterNum'].w,
                    h: _this.RES_layout['chapterNum'].h
                };
                $util.setLayout(RES_num, layout);
                _this.addChild(RES_num);
            });
        }
    };
    //快速创建
    ChapterList.prototype.fastBitmap = function (resObj, name) {
        var RES_bitmap = new egret.Bitmap(resObj.getTexture(name));
        $util.setLayout(RES_bitmap, this.RES_layout[name]);
        this.addChild(RES_bitmap);
        return RES_bitmap;
    };
    return ChapterList;
}(Base));
__reflect(ChapterList.prototype, "ChapterList");
