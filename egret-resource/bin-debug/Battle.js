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
//page=battle&battleNo=442684647e264a6781d4cd79aac294cb&battleType=friend&stageId=stage1&monsterId=monster1
var Battle = (function (_super) {
    __extends(Battle, _super);
    function Battle(_a) {
        var $main = _a.$main, param = _a.param;
        var _this = _super.call(this) || this;
        _this.maxBloodWidth = _this.RES_layout.$p1blood.w - 8;
        var that = _this;
        _this.$param = param;
        //this.$param.stageId = 'stage1';
        _this.$main = $main;
        _this.$data = {
            two: { blood: 7, curBlood: 7, curBloodWidth: _this.maxBloodWidth, lastBloodWidth: _this.maxBloodWidth, bloodWidth: _this.maxBloodWidth },
            one: { blood: 7, curBlood: 7, curBloodWidth: _this.maxBloodWidth, lastBloodWidth: _this.maxBloodWidth, bloodWidth: _this.maxBloodWidth },
            roundTime: -1,
            roundOperateTime: -1,
            battle: {
                no: '',
                round: 1,
                roundSkillSended: 0 //当前回合招数发出了，记录一下
            },
            background_pic: '',
            battleJoinTimer: null,
            battleRoundResultTimer: null
        };
        _this.init();
        return _this;
    }
    Battle.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.$param.battleType == 'monster')) return [3 /*break*/, 2];
                        this.APISkill = 'skillMonster';
                        return [4 /*yield*/, this.monsterBattle()];
                    case 1:
                        _a.sent();
                        this.createView();
                        this.loadSkillPic();
                        this.setTwoSkill();
                        this.createUserInfo();
                        this.skillBtnEvent();
                        _a.label = 2;
                    case 2:
                        if (!(this.$param.battleType == 'friend')) return [3 /*break*/, 4];
                        this.$data.battle.no = this.$param.battleNo;
                        this.APISkill = 'skillFriendBattle';
                        return [4 /*yield*/, this.friendBattle()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Battle.prototype.friendBattle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.$param.monsterId);
                        return [4 /*yield*/, API.friendJoinBattle({
                                data: {
                                    battleNo: this.$data.battle.no,
                                    monsterId: this.$param.monsterId
                                }
                            })];
                    case 1:
                        res2 = _a.sent();
                        if (res2 === false) {
                            wx.showToast({
                                title: '该房间已经开战',
                                icon: 'none',
                                duration: 2000
                            });
                            this.$main.changePage($page.index);
                            return [2 /*return*/];
                        }
                        this.check();
                        return [2 /*return*/];
                }
            });
        });
    };
    Battle.prototype.onDestroy = function () {
        this.$data.battleRoundResultTimer && clearTimeout(this.$data.battleRoundResultTimer);
        this.$data.battleJoinTimer && clearTimeout(this.$data.battleJoinTimer);
    };
    Battle.prototype.check = function () {
        var that = this;
        //轮训好友加入战斗
        var checkRes = API.checkFriendJoinBattle({
            data: {
                battleNo: this.$data.battle.no,
                stageId: this.$param.stageId
            },
            success: function (res) {
                if (res && res.playerOne && res.playerTwo) {
                    that.$data.background_pic = res.backgroundPic;
                    var playerOne = void 0, playerTwo = void 0;
                    //自己永远在左边是one
                    if (res.playerTwo.userId == GlobalData.user.id) {
                        playerOne = res.playerTwo;
                        playerTwo = res.playerOne;
                    }
                    else {
                        playerOne = res.playerOne;
                        playerTwo = res.playerTwo;
                    }
                    //用户1基本信息
                    that.$data.one.roleList = JSON.parse(playerOne.percentPic);
                    that.$data.one.nickname = playerOne.nickname;
                    that.$data.one.avatar = playerOne.avatar;
                    that.$data.one.level = playerOne.level;
                    that.$data.one.gender = playerOne.gender;
                    that.$data.one.blood = playerOne.character.hp;
                    that.$data.one.curBlood = that.$data.one.blood;
                    that.$data.one.skills = playerOne.userSkillList;
                    that.$data.one.me = true;
                    //用户2基本信息
                    that.$data.two.roleList = JSON.parse(playerTwo.percentPic);
                    that.$data.two.nickname = playerTwo.nickname;
                    that.$data.two.avatar = playerTwo.avatar;
                    that.$data.two.level = playerTwo.level;
                    that.$data.two.gender = playerTwo.gender;
                    that.$data.two.blood = playerTwo.character.hp;
                    that.$data.two.curBlood = that.$data.two.blood;
                    that.$data.two.skills = playerTwo.userSkillList;
                    that.createView();
                    that.skillBtnEvent();
                    that.createUserInfo();
                    that.loadPic();
                    that.loadSkillPic();
                    that.setTwoSkill();
                    setTimeout(function () {
                        that.readyGo();
                    }, 1000);
                    setTimeout(function () {
                        that.roundCountdown();
                        that.checkFriendBattleResult();
                    }, 2500);
                }
                else {
                    that.$data.battleJoinTimer = setTimeout(function () {
                        that.check();
                    }, 2000);
                }
            }
        });
    };
    Battle.prototype.checkFriendBattleResult = function (enemyLose) {
        if (enemyLose === void 0) { enemyLose = 0; }
        console.log(this.$data.battle.no);
        var that = this;
        //轮训战斗结果
        var checkRes = API.roundResultFriendBattle({
            data: {
                battleNo: this.$data.battle.no,
                roundId: this.$data.battle.round,
                status: enemyLose
            },
            success: function (res) {
                console.log(res);
                if (res && res.roundId) {
                    that.$data.roundOperateTime = -1;
                    clearTimeout(that.$data.roundOperateTimer);
                    that.skillResult(res);
                }
                else {
                    that.$data.battleRoundResultTimer = setTimeout(function () {
                        that.checkFriendBattleResult();
                    }, 1000);
                }
            }
        });
    };
    Battle.prototype.monsterBattle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var that, res, player, monster, res2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, API.getStageDetail({
                                data: {
                                    stageId: this.$param.stageId
                                }
                            })];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2 /*return*/];
                        this.$data.background_pic = res['background_pic'];
                        this.$data.detail = res;
                        player = res['player'];
                        this.$data.one.roleList = JSON.parse(player.percentPic);
                        this.$data.one.nickname = player.nickname;
                        this.$data.one.avatar = player.avatar;
                        this.$data.one.level = player.level;
                        this.$data.one.gender = player.gender;
                        this.$data.one.blood = player.character.hp;
                        this.$data.one.curBlood = player.character.hp;
                        this.$data.one.skills = player.userSkillList;
                        this.$data.one.me = true;
                        monster = res['monster'];
                        this.$data.two.roleList = JSON.parse(monster.percentPic);
                        this.$data.two.avatar = monster.pic; //this.$data.two.pic;
                        this.$data.two.nickname = monster.name;
                        this.$data.two.level = '??';
                        this.$data.two.gender = 1;
                        this.$data.two.blood = monster.hp;
                        this.$data.two.curBlood = monster.hp;
                        this.$data.two.skills = monster.monsterSkillList;
                        this.loadPic();
                        return [4 /*yield*/, API.startMonsterBattle({
                                data: {
                                    stageId: this.$param.stageId
                                }
                            })];
                    case 2:
                        res2 = _a.sent();
                        if (res2) {
                            this.$data.battle.no = res2;
                            setTimeout(function () {
                                _this.readyGo();
                            }, 1000);
                            setTimeout(function () {
                                _this.roundCountdown();
                            }, 2500);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Battle.prototype.setTwoSkill = function () {
        var val = [0, 0, 0, 0];
        this.$data.two.skills.forEach(function (item) {
            val[item.skillType - 1] = item.att;
        });
        this.$el.attackEnemy.setSkillVal(val);
    };
    Battle.prototype.loadSkillPic = function () {
        var _this = this;
        var that = this;
        that.$data.one.skills.forEach(function (item) {
            if (item.skillType == 1)
                item.baseIconTexture = _this.RES_battle.getTexture('attack1');
            if (item.skillType == 2)
                item.baseIconTexture = _this.RES_battle.getTexture('attack2');
            if (item.skillType == 3)
                item.baseIconTexture = _this.RES_battle.getTexture('defend1');
            if (item.skillType == 4)
                item.baseIconTexture = _this.RES_battle.getTexture('defend2');
            RES.getResByUrl(item.pic, function (texture) {
                item.texture = texture;
                if (that.$data.one.me)
                    that.$el['skillPic' + item.skillType].texture = texture;
            }, that, RES.ResourceItem.TYPE_IMAGE);
        });
        that.$data.two.skills.forEach(function (item) {
            if (item.skillType == 1)
                item.baseIconTexture = _this.RES_battle.getTexture('attack1');
            if (item.skillType == 2)
                item.baseIconTexture = _this.RES_battle.getTexture('attack2');
            if (item.skillType == 3)
                item.baseIconTexture = _this.RES_battle.getTexture('defend1');
            if (item.skillType == 4)
                item.baseIconTexture = _this.RES_battle.getTexture('defend2');
            RES.getResByUrl(item.pic, function (texture) {
                item.texture = texture;
                if (that.$data.two.me)
                    that.$el['skillPic' + item.skillType].texture = texture;
            }, that, RES.ResourceItem.TYPE_IMAGE);
        });
    };
    Battle.prototype.loadPic = function () {
        var that = this;
        RES.getResByUrl(that.$data.one.roleList[0].pic, function (texture) {
            that.$data.one.roleList[0].Texture = texture;
        }, that, RES.ResourceItem.TYPE_IMAGE);
        RES.getResByUrl(that.$data.one.roleList[1].pic, function (texture) {
            that.$data.one.roleList[1].Texture = texture;
        }, that, RES.ResourceItem.TYPE_IMAGE);
        RES.getResByUrl(that.$data.one.roleList[2].pic, function (texture) {
            that.$data.one.roleList[2].Texture = texture;
        }, that, RES.ResourceItem.TYPE_IMAGE);
        RES.getResByUrl(that.$data.two.roleList[0].pic, function (texture) {
            that.$data.two.roleList[0].Texture = texture;
        }, that, RES.ResourceItem.TYPE_IMAGE);
        RES.getResByUrl(that.$data.two.roleList[1].pic, function (texture) {
            that.$data.two.roleList[1].Texture = texture;
        }, that, RES.ResourceItem.TYPE_IMAGE);
        RES.getResByUrl(that.$data.two.roleList[2].pic, function (texture) {
            that.$data.two.roleList[2].Texture = texture;
        }, that, RES.ResourceItem.TYPE_IMAGE);
    };
    //最大一个倒计时如果打怪自己没发招超时，会自动发skilltype：0代表未发招
    //如果好友对战，是没收到对方发招，就请求
    Battle.prototype.roundOperateCountdown = function () {
        var _this = this;
        if (this.$data.roundOperateTime == -1)
            return;
        if (this.$data.roundOperateTime == 0) {
            if (this.$param.battleType == 'monster') {
                this.sendSkill(0);
            }
            //没收到回合结束消息，并且我已经发招了，就请求对方输的接口
            if (this.$param.battleType == 'friend' && this.$data.battle.roundSkillSended == this.$data.battle.round) {
                this.checkFriendBattleResult(-1);
            }
            return;
        }
        this.$data.roundOperateTimer = setTimeout(function () {
            _this.$data.roundOperateTime--;
            _this.roundOperateCountdown();
        }, 1000);
    };
    Battle.prototype.roundCountdown = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            setTimeout(function () {
                _this._roundCountdown();
            }, delay);
        }
        else
            this._roundCountdown();
    };
    Battle.prototype._roundCountdown = function () {
        this.roundText(); //显示当前回合数
        this.$data.roundTime = 10;
        this._roundTime();
        if (this.$param.battleType == 'monster')
            this.$data.roundOperateTime = 12;
        if (this.$param.battleType == 'friend')
            this.$data.roundOperateTime = 15;
        this.roundOperateCountdown();
        this.skillBtnReset({ hide: true });
        this.skillBtnReset({ click: true });
        this.$el.ok.touchEnabled = true;
        this.$el.ok.visible = false;
        this.$el.ok_bg.visible = false;
    };
    Battle.prototype.roundEnd = function () {
        this.$data.roundTime = -1;
        clearTimeout(this.$data.roundTimer);
        if (this.$param.battleType == 'monster') {
            this.$data.roundOperateTime = -1;
            clearTimeout(this.$data.roundOperateTimer);
        }
        this.skillBtnReset({ unclick: true });
    };
    Battle.prototype._roundTime = function () {
        var _this = this;
        if (this.$data.roundTime <= -1)
            return;
        this.$data.roundTimer = setTimeout(function () {
            _this.$data.roundTime--;
            _this._roundTime();
        }, 1000);
    };
    //批量重置按钮状态
    Battle.prototype.skillBtnReset = function (_a) {
        var _b = _a.click, click = _b === void 0 ? false : _b, _c = _a.unclick, unclick = _c === void 0 ? false : _c, _d = _a.hide, hide = _d === void 0 ? false : _d;
        this.$el.skills.forEach(function (item) {
            if (unclick)
                item.touchEnabled = false; //不可点击
            if (click)
                item.touchEnabled = true; //可点击
            if (hide)
                item.hideHover(); //隐藏
        });
    };
    //技能按钮
    Battle.prototype.skillBtnEvent = function () {
        var _this = this;
        var that = this;
        this.$el.skills.forEach(function (skillBtn, index) {
            skillBtn.touchEnabled = false;
            skillBtn.setAttack($util.getItemFromAttr('skillType', index + 1, _this.$data.one.skills).att); //设置伤害值显示
            //通过touchEnabled控制可否点击
            skillBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                that.skillBtnReset({ hide: true });
                skillBtn.showHover();
                that.$el.ok.visible = true;
                that.$el.ok_bg.visible = true;
            }, that);
        });
        //点击显示按下去效果
        this.$el.ok.touchEnabled = true;
        this.$el.ok.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.$el.ok_hover.visible = true;
            if (_this.$param.battleType == 'friend' && _this.$data.roundOperateTime == 0)
                _this.checkFriendBattleResult(-1);
            else
                _this.sendSkill();
            setTimeout(function () {
                _this.$el.ok_hover.visible = false;
            }, 300);
        }, this);
    };
    //发送技能
    Battle.prototype.sendSkill = function (manualSkill) {
        if (manualSkill === void 0) { manualSkill = null; }
        return __awaiter(this, void 0, void 0, function () {
            var skill, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        skill = null;
                        this.$el.skills.forEach(function (skillBtn, index) {
                            if (skillBtn.getChildByName('hover').visible)
                                skill = index + 1;
                        });
                        if (manualSkill != null)
                            skill = manualSkill;
                        if (!(skill != null)) return [3 /*break*/, 2];
                        this.$el.ok.touchEnabled = false;
                        this.roundEnd();
                        this.$data.battle.roundSkillSended = this.$data.battle.round;
                        return [4 /*yield*/, API[this.APISkill]({
                                data: {
                                    battleNo: this.$data.battle.no,
                                    skillType: skill,
                                    roundId: this.$data.battle.round
                                }
                            })];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (res && this.$param.battleType == 'monster') {
                            this.skillResult(res);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Battle.prototype.changeBlood = function (_a, _b) {
        var changeOne = _a.changeOne, skillTypeOne = _a.skillTypeOne;
        var changeTwo = _b.changeTwo, skillTypeTwo = _b.skillTypeTwo;
        var oneSkill = $util.getItemFromAttr('skillType', skillTypeOne, this.$data.one.skills) || { skillName: '未出招', texture: null };
        var twoSkill = $util.getItemFromAttr('skillType', skillTypeTwo, this.$data.two.skills) || { skillName: '未出招', texture: null };
        if (changeOne == 0 && changeTwo == 0) {
            this.$el.$p1SkillShow.showTie(oneSkill.skillName, oneSkill.texture, oneSkill.baseIconTexture);
            this.$el.$p2SkillShow.showTie(twoSkill.skillName, twoSkill.texture, twoSkill.baseIconTexture);
            return;
        }
        if (changeOne == 0) {
            this.$el.$p1SkillShow.showWin(oneSkill.skillName, oneSkill.texture, oneSkill.baseIconTexture);
        }
        else {
            this.$el.$p1SkillShow.showLose(changeOne, oneSkill.skillName, oneSkill.texture, oneSkill.baseIconTexture);
        }
        if (changeTwo == 0) {
            this.$el.$p2SkillShow.showWin(twoSkill.skillName, twoSkill.texture, twoSkill.baseIconTexture);
        }
        else {
            this.$el.$p2SkillShow.showLose(changeTwo, twoSkill.skillName, twoSkill.texture, twoSkill.baseIconTexture);
        }
    };
    Battle.prototype.die = function () {
        if (this.$data.one.curBlood == 0)
            this.$el.p1Role.filters = [colorGrayFilter];
        if (this.$data.two.curBlood == 0)
            this.$el.p2Role.filters = [colorGrayFilter];
    };
    Battle.prototype.skillResult = function (res) {
        var _this = this;
        var that = this;
        if (this.$param.battleType == 'monster') {
            this.$data.battle.round = parseInt(res['roundId'] + 1);
            this.$data.one.curBlood = parseInt(res['currentBloodNumOne']);
            this.$data.two.curBlood = parseInt(res['currentBloodNumTwo']);
            this.changeBlood({ changeOne: Math.abs(parseInt(res['changeBloodNumOne'] || 0)), skillTypeOne: res.skillTypeOne }, { changeTwo: Math.abs(parseInt(res['changeBloodNumTwo'] || 0)), skillTypeTwo: res.skillTypeTwo });
            if (this.$data.one.curBlood == 0 || this.$data.two.curBlood == 0) {
                this.die();
                if (this.$data.one.curBlood == 0) {
                    this.createLayer({ type: 'fail' });
                }
                else {
                    var r = res['battleStageBonusResultVO'];
                    var exp = r.expIncrease;
                    var gold = r.goldIncrease;
                    this.createLayer({ type: 'success', gold: r.goldIncrease, exp: r.expIncrease });
                }
                this.$el['RES_helpBtn'].onClick = function () {
                    _this.$main.Layer.clearHide();
                    _this.$main.guidePage.show(function () {
                        _this.$main.back();
                    });
                };
                this.$el['RES_back'].onClick = function () { _this.$main.Layer.clearHide(); _this.$main.back(); };
                setTimeout(function () {
                    _this.$main.Layer.show();
                }, 2000);
            }
            else {
                this.roundCountdown(3000);
            }
        }
        if (this.$param.battleType == 'friend') {
            var oneP = void 0, twoP = void 0;
            if (res.playerTwo.userId == GlobalData.user.id) {
                oneP = res.playerTwo;
                twoP = res.playerOne;
            }
            else {
                oneP = res.playerOne;
                twoP = res.playerTwo;
            }
            this.$data.battle.round = parseInt(res['roundId'] + 1);
            this.$data.one.curBlood = parseInt(oneP['currentBloodNum']);
            this.$data.two.curBlood = parseInt(twoP['currentBloodNum']);
            this.changeBlood({ changeOne: Math.abs(parseInt(oneP['changeBloodNum'] || 0)), skillTypeOne: oneP.skillType }, { changeTwo: Math.abs(parseInt(twoP['changeBloodNum'] || 0)), skillTypeTwo: twoP.skillType });
            //结束
            if (this.$data.one.curBlood == 0 || this.$data.two.curBlood == 0) {
                this.die();
                if (this.$data.one.curBlood == 0 && this.$data.one.me) {
                    this.createLayer({ type: 'fail' });
                }
                else if (this.$data.two.curBlood == 0 && this.$data.two.me) {
                    this.createLayer({ type: 'fail' });
                }
                else
                    this.createLayer({ type: 'success' });
                this.$el['RES_back'].onClick = function () { _this.$main.Layer.clearHide(); _this.$main.changePage($page.index); };
                this.$el['RES_helpBtn'].onClick = function () {
                    _this.$main.Layer.clearHide();
                    _this.$main.guidePage.show(function () {
                        _this.$main.back();
                    });
                };
                setTimeout(function () {
                    _this.$main.Layer.show();
                }, 2000);
            }
            else {
                that.roundCountdown(3000);
                setTimeout(function () {
                    that.checkFriendBattleResult();
                }, 2000);
            }
        }
        this.$data.one.lastBloodWidth = Math.floor(this.$data.one.bloodWidth * (this.$data.one.curBlood / this.$data.one.blood));
        this.$data.two.lastBloodWidth = Math.floor(this.$data.two.bloodWidth * (this.$data.two.curBlood / this.$data.two.blood));
    };
    return Battle;
}(Battle_ui));
__reflect(Battle.prototype, "Battle");
