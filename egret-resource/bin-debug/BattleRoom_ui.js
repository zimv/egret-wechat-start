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
var BattleRoom_ui = (function (_super) {
    __extends(BattleRoom_ui, _super);
    function BattleRoom_ui() {
        var _this = _super.call(this) || this;
        //$代表形状和文字绘制
        _this.RES_layout = {
            bg: { x: 0, y: 0, w: 750, h: 1665 },
            back: { x: 49, y: 54, w: 46, h: 48 },
            title: { x: 137, y: 63, w: 478, h: 40 },
            rectBg: {
                x: 47, y: 148, w: 657, h: 1014,
                title: { x: 192, y: 27, w: 272, h: 53 },
                stageWrapper: { x: 0, y: 85, w: 657, h: 293 },
                stageWrapperInner: { x: 0, y: 85, w: 657, h: 293 },
                intro: {
                    x: 29, y: 413, w: 600, h: 569,
                    skillPic: { x: 27, y: 20, w: 97, h: 97 },
                    skillName: { x: 156, y: 20, w: 344, h: 30 },
                    skillDesc: { x: 156, y: 65, w: 344, h: 50 },
                },
            },
            fight: { x: 49, y: 1191, w: 657, h: 111 },
            slider: {},
            bingCenter: { x: 163, y: 0, w: 293, h: 293 },
            lock: { x: 118, y: 114, w: 58, h: 65 }
        };
        _this.bingConList = [];
        _this.RES_bingList = []; //bing对象列表
        _this.centerIndex = 0;
        _this.startIndex = 0;
        _this.isSucces = true;
        //当前页面元素对象
        _this.$el = {
            mainCon: Object(egret.DisplayObjectContainer),
            intro: [{ pic: Object(egret.Bitmap), name: Object(egret.TextField), desc: Object(egret.TextField) }, {}, {}, {}],
            fight: Object(egret.Bitmap),
            slider: Object(egret.DisplayObjectContainer)
        };
        var that = _this;
        _this.RES_battleroom = RES.getRes('battleroom');
        _this.RES_common = RES.getRes('common');
        return _this;
    }
    BattleRoom_ui.prototype.createView = function () {
        var _this = this;
        //背景
        var RES_bg = new egret.Bitmap(RES.getRes('indexbg'));
        $util.setLayout(RES_bg, this.RES_layout['bg']);
        RES_bg.fillMode = egret.BitmapFillMode.REPEAT;
        this.$main.PageBg.addChild(RES_bg); //加载到main的PageBg里去，保证背景不滚动
        //顶部元素必传值
        this.$firstEleY = this.RES_layout.back.y;
        var back = new egret.Bitmap(this.RES_common.getTexture('back'));
        $util.setLayout(back, this.RES_layout.back);
        this.addChild(back);
        $util.btnActive(back, function () {
            _this.$main.back();
        });
        this.fastBitmap(this.RES_battleroom, 'title');
        this.rectBg(); //内容页面背景
        this.rectBgChild();
        this.$el.fight = this.fastBitmap(this.RES_battleroom, 'fight');
        this.$el.fight.touchEnabled = true;
        this.pageContentCenter(true);
    };
    BattleRoom_ui.prototype.rectBgChild = function () {
        //病种名称标题
        // let RES_stageTitle = new egret.Bitmap( this.RES_battleroom.getTexture('stageTitle') );
        // $util.setLayout(RES_stageTitle, this.RES_layout.rectBg.title);
        // this.$el.mainCon.addChild(RES_stageTitle);
        //技能介绍
        //背景
        var introBg = new eui.Rect();
        introBg.ellipseWidth = 24; //设置圆角参数
        introBg.ellipseHeight = 24;
        introBg.fillColor = 0x2D60C8;
        introBg.fillAlpha = 0.45;
        $util.setLayout(introBg, this.RES_layout.rectBg.intro);
        this.$el.mainCon.addChild(introBg);
        this.skillIntro(0);
        this.skillIntro(1);
        this.skillIntro(2);
        this.skillIntro(3);
    };
    BattleRoom_ui.prototype.setSkill = function (skills) {
        var _this = this;
        skills.forEach(function (item, index) {
            _this.$el.intro[index]['name'].text = item.skillName;
            _this.$el.intro[index]['desc'].text = item.skillDesc;
            (function (pic, i) {
                RES.getResByUrl(pic, function (texture) {
                    _this.$el.intro[index]['pic'].texture = texture;
                }, _this, RES.ResourceItem.TYPE_IMAGE);
            })(item.pic, index);
        });
    };
    BattleRoom_ui.prototype.silder = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sliderCon, slider, len, centerIndex, allCenterIndex, bingCenter, startIndex, i, i, xStep, i, setBingImg, touchStartX, canMove;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sliderCon = new eui.Rect();
                        $util.setLayout(sliderCon, this.RES_layout.rectBg.stageWrapper);
                        slider = new egret.DisplayObjectContainer();
                        $util.setLayout(slider, this.RES_layout.rectBg.stageWrapperInner);
                        this.$el.mainCon.addChild(slider);
                        this.$el.mainCon.addChild(sliderCon);
                        //使用遮罩
                        slider.mask = sliderCon;
                        this.$el.slider = slider;
                        len = arr.length;
                        centerIndex = 0;
                        allCenterIndex = Math.floor((len * 2 - 1) / 2);
                        bingCenter = this.RES_layout['bingCenter'] //中间位置坐标
                        ;
                        startIndex = len / 2;
                        if (len === 0) {
                            //如果长度为零  直接返回
                            return [2 /*return*/];
                        }
                        if (len % 2 !== 0) {
                            centerIndex = Math.floor(len / 2);
                            startIndex = Math.floor(len / 2);
                        }
                        else {
                            centerIndex = len / 2 - 1;
                        }
                        //如果从第一开始就排中间 centerIndex = 0  startIndex = len -1 - centerIndex
                        //显示解锁到的位置
                        centerIndex = 0;
                        for (i = 0; i < len; i++) {
                            if (arr[i].status === 1) {
                                centerIndex += 1;
                            }
                        }
                        if (centerIndex > 0) {
                            centerIndex = centerIndex - 1;
                        }
                        startIndex = len - 1 - centerIndex;
                        this.centerIndex = centerIndex;
                        this.startIndex = startIndex;
                        //生成所有需要用到的坐标和宽高数据 
                        for (i = 0; i < len * 2 - 1; i++) {
                            xStep = bingCenter.x + (i - allCenterIndex) * 100;
                            if (i > allCenterIndex) {
                                xStep = bingCenter.x + (i - allCenterIndex) * 100;
                            }
                            this.RES_layout.slider["bing" + i] = {
                                x: xStep,
                                y: bingCenter.y + Math.abs(i - allCenterIndex) * 14,
                                w: bingCenter.w - Math.abs(i - allCenterIndex) * 27,
                                h: bingCenter.h - Math.abs(i - allCenterIndex) * 27
                            };
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < len)) return [3 /*break*/, 4];
                        // i+ startIndex 初始化需要渲染的位置
                        this.bingConList.push(this.fastContainer("bing" + (i + startIndex)));
                        return [4 /*yield*/, this.setBingImg(i, arr)];
                    case 2:
                        setBingImg = _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.addBing(arr);
                        slider.touchEnabled = true;
                        touchStartX = 0;
                        slider.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                            touchStartX = e.$stageX;
                        }, this);
                        canMove = true;
                        slider.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
                            if (!canMove) {
                                return;
                            }
                            if (Math.abs(e.$stageX - touchStartX) <= 30) {
                                return;
                            }
                            canMove = false;
                            var step = 0;
                            if (e.$stageX - touchStartX > 0) {
                                if (startIndex >= len - 1) {
                                    canMove = true;
                                    return;
                                }
                                startIndex += 1;
                                step = -1;
                            }
                            else {
                                if (startIndex <= 0) {
                                    canMove = true;
                                    return;
                                }
                                startIndex -= 1;
                                step = 1;
                            }
                            var twConList = [];
                            var teList = [];
                            //添加运动对象
                            for (var i = 0; i < len; i++) {
                                twConList.push(egret.Tween.get(_this.bingConList[i]));
                                teList.push(egret.Tween.get(_this.RES_bingList[i]));
                            }
                            //开始运动
                            for (var i = 0; i < len; i++) {
                                if (_this.bingConList[i].getChildByName('lock')) {
                                    _this.bingConList[i].getChildByName('lock').visible = false;
                                }
                                if (_this.bingConList[len - startIndex - 1].getChildByName('lock')) {
                                    _this.bingConList[len - startIndex - 1].getChildByName('lock').visible = true;
                                }
                                twConList[i].to({
                                    x: _this.RES_layout.slider["bing" + (startIndex + i)].x,
                                    y: _this.RES_layout.slider["bing" + (startIndex + i)].y
                                }, 300, egret.Ease.sineInOut);
                                teList[i].to({ width: _this.RES_layout.slider["bing" + (startIndex + i)].w, height: _this.RES_layout.slider["bing" + (startIndex + i)].h }, 300, egret.Ease.sineInOut);
                            }
                            setTimeout(function () {
                                canMove = true;
                            }, 300);
                            setTimeout(function () {
                                //切换z坐标
                                slider.setChildIndex(_this.bingConList[allCenterIndex - startIndex], 100);
                                _this.setSkill(arr[allCenterIndex - startIndex].monster.monsterSkillList);
                            }, 200);
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    BattleRoom_ui.prototype.addBing = function (arr) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            if (i < this.centerIndex) {
                this.$el.slider.addChild(this.bingConList[i]);
                this.bingConList[i].addChild(this.RES_bingList[i]);
            }
            else if (i >= this.centerIndex) {
                this.$el.slider.addChild(this.bingConList[len - i - 1 + this.centerIndex]); //从后往前添加
                this.bingConList[len - i - 1 + this.centerIndex].addChild(this.RES_bingList[len - i - 1 + this.centerIndex]);
            }
        }
        //添加锁
        for (var i = 0; i < len; i++) {
            if (arr[i].status !== 1) {
                this.bingConList[i].addChild(this.fastLockBitmap());
            }
        }
        //初始化显示中间锁
        if (this.bingConList[this.centerIndex].getChildByName('lock')) {
            this.bingConList[this.centerIndex].getChildByName('lock').visible = true; //初始化显示lock
        }
        //初始化设置攻击方法
        this.setSkill(arr[this.centerIndex].monster.monsterSkillList);
    };
    BattleRoom_ui.prototype.setBingImg = function (index, arr) {
        var _this = this;
        return new Promise(function (resolve) {
            RES.getResByUrl(arr[index].monster.pic, function (texture) {
                var layout = {
                    x: 0,
                    y: 0,
                    h: this.RES_layout.slider["bing" + (index + this.startIndex)].h,
                    w: this.RES_layout.slider["bing" + (index + this.startIndex)].w
                };
                var chapterimg = new egret.Bitmap(texture);
                $util.setLayout(chapterimg, layout);
                this.RES_bingList[index] = chapterimg;
                resolve();
                // if(this.RES_bingList.length == arr.length){
                //     //全部添加完  执行下一步
                //     this.addBing(arr);
                // }
            }, _this, RES.ResourceItem.TYPE_IMAGE);
        });
    };
    BattleRoom_ui.prototype.skillIntro = function (index) {
        var intro = new egret.DisplayObjectContainer();
        $util.setLayout(intro, this.RES_layout.rectBg.intro);
        this.$el.mainCon.addChild(intro);
        //头像容器
        var skillPicRect = new eui.Rect();
        skillPicRect.ellipseWidth = this.RES_layout.rectBg.intro.skillPic.w;
        skillPicRect.ellipseHeight = this.RES_layout.rectBg.intro.skillPic.h;
        skillPicRect.fillColor = 0xffffff;
        $util.setLayout(skillPicRect, this.RES_layout.rectBg.intro.skillPic);
        //技能图片
        var skillPic = new egret.Bitmap();
        var layout = {
            x: 2,
            y: 2,
            w: this.RES_layout.rectBg.intro.skillPic.w - 4,
            h: this.RES_layout.rectBg.intro.skillPic.h - 4,
        };
        $util.setLayout(skillPic, layout);
        skillPicRect.addChild(skillPic);
        //使用遮罩
        var mask = new eui.Rect();
        mask.ellipseWidth = layout.w; //设置圆角参数
        mask.ellipseHeight = layout.h;
        mask.fillColor = 0x000000;
        $util.setLayout(mask, layout);
        skillPicRect.addChild(mask);
        skillPic.mask = mask;
        intro.addChild(skillPicRect);
        //技能名称
        var skillName = new egret.TextField();
        skillName.textColor = 0xffffff;
        skillName.size = 28;
        $util.setLayout(skillName, this.RES_layout.rectBg.intro.skillName);
        intro.addChild(skillName);
        //技能描述
        var skillDesc = new egret.TextField();
        skillDesc.textColor = 0xffffff;
        skillDesc.size = 22;
        $util.setLayout(skillDesc, this.RES_layout.rectBg.intro.skillDesc);
        intro.addChild(skillDesc);
        //根据排序高度修改
        skillPicRect.y = this.RES_layout.rectBg.intro.skillPic.y + index * 144;
        skillName.y = this.RES_layout.rectBg.intro.skillName.y + index * 144;
        skillDesc.y = this.RES_layout.rectBg.intro.skillDesc.y + index * 144;
        this.$el.intro[index]['pic'] = skillPic;
        this.$el.intro[index]['name'] = skillName;
        this.$el.intro[index]['desc'] = skillDesc;
    };
    BattleRoom_ui.prototype.rectBg = function () {
        var rect = new eui.Rect();
        rect.ellipseWidth = 24; //设置圆角参数
        rect.ellipseHeight = 24;
        rect.fillColor = 0x8DFFF0;
        rect.fillAlpha = 0.76;
        $util.setLayout(rect, this.RES_layout.rectBg);
        this.addChild(rect);
        var mainCon = new egret.DisplayObjectContainer();
        $util.setLayout(mainCon, this.RES_layout.rectBg);
        this.addChild(mainCon);
        this.$el.mainCon = mainCon;
    };
    //快速创建
    BattleRoom_ui.prototype.fastBitmap = function (resObj, name) {
        var RES_bitmap = new egret.Bitmap(resObj.getTexture(name));
        $util.setLayout(RES_bitmap, this.RES_layout[name]);
        this.addChild(RES_bitmap);
        return RES_bitmap;
    };
    //快速创建Container
    BattleRoom_ui.prototype.fastContainer = function (name) {
        var RES_con = new egret.DisplayObjectContainer();
        $util.setLayout(RES_con, this.RES_layout.slider[name]);
        return RES_con;
    };
    // 自定义创建Bitmap
    BattleRoom_ui.prototype.fastOtherBitmap = function (posiName, name) {
        var layout = {
            x: 0,
            y: 0,
            h: this.RES_layout.slider[posiName].h,
            w: this.RES_layout.slider[posiName].w
        };
        var RES_bitmap = new egret.Bitmap(RES.getRes(name));
        $util.setLayout(RES_bitmap, layout);
        return RES_bitmap;
    };
    BattleRoom_ui.prototype.fastLockBitmap = function () {
        var layout = {
            x: (this.RES_layout['bingCenter'].w - this.RES_layout['lock'].w) / 2,
            y: (this.RES_layout['bingCenter'].h - this.RES_layout['lock'].h) / 2,
            h: this.RES_layout['lock'].h,
            w: this.RES_layout['lock'].w
        };
        var RES_bitmap = new egret.Bitmap(this.RES_common.getTexture('lock'));
        $util.setLayout(RES_bitmap, layout);
        RES_bitmap.name = 'lock';
        RES_bitmap.visible = false;
        return RES_bitmap;
    };
    return BattleRoom_ui;
}(Base));
__reflect(BattleRoom_ui.prototype, "BattleRoom_ui");
