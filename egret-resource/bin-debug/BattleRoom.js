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
var BattleRoom = (function (_super) {
    __extends(BattleRoom, _super);
    function BattleRoom(_a) {
        var $main = _a.$main, param = _a.param;
        var _this = _super.call(this) || this;
        var that = _this;
        _this.$param = param;
        //this.$param.stageId = 'stage1';
        _this.$main = $main;
        _this.$data = {
            battle: {}
        };
        _this.getStages();
        return _this;
    }
    BattleRoom.prototype.init = function () {
        var _this = this;
        this.createView();
        this.setSkill(this.$data.stage[0].monster.monsterSkillList);
        this.silder(this.$data.stage);
        this.$el.fight.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.createBattle(_this.$data.stage[0].stageId, _this.$data.stage[0].monster.monsterId);
        }, this);
    };
    BattleRoom.prototype.getStages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API.friendBattleStages()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.$data.stage = res;
                            //滑块
                            this.init();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BattleRoom.prototype.createBattle = function (stageId, monsterId) {
        return __awaiter(this, void 0, void 0, function () {
            var battleNo, res2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, API.createFriendBallte({
                            stageId: stageId,
                            monsterId: monsterId
                        })];
                    case 1:
                        battleNo = _a.sent();
                        if (!battleNo)
                            return [2 /*return*/];
                        this.$data.battle.no = battleNo;
                        console.log(battleNo);
                        return [4 /*yield*/, API.friendJoinBattle({
                                data: {
                                    battleNo: battleNo,
                                    monsterId: monsterId,
                                    beforeShare: true
                                }
                            })];
                    case 2:
                        res2 = _a.sent();
                        if (res2) {
                        }
                        //微信转发
                        wx.shareAppMessage({
                            title: '邀请对战',
                            query: "battleNo=" + battleNo + "&page=" + $page.battle + "&stageId=" + stageId + "&monsterId=" + monsterId
                        });
                        this.$main.changePage($page.wait, { battleNo: battleNo, stageId: stageId, monsterId: monsterId });
                        return [2 /*return*/];
                }
            });
        });
    };
    return BattleRoom;
}(BattleRoom_ui));
__reflect(BattleRoom.prototype, "BattleRoom");
