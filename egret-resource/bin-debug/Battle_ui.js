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
var Battle_ui = (function (_super) {
    __extends(Battle_ui, _super);
    function Battle_ui() {
        var _this = _super.call(this) || this;
        //$代表形状和文字绘制
        _this.RES_layout = {
            bg: { x: 0, y: 0, w: 750, h: 1634 },
            $p1avatar: { x: 31, y: 56, w: 80, h: 80 },
            p1gender: { x: 30, y: 119, w: 25, h: 25 },
            $p1name: { x: 30, y: 148, w: 200, h: 29 },
            $p1lv: { x: 95, y: 51, w: 71, h: 26 },
            $p1blood: { x: 94, y: 82, w: 212, h: 44 },
            $p1Role: { x: 47, y: 210, w: 320, h: 767 },
            $p1SkillShow: {
                x: -20, y: 611, w: 307, h: 140,
                lose: { x: 57, y: -20, w: 250, h: 40 },
                win: { x: 120, y: -20, w: 106, h: 40 },
                skillName: { x: 28, y: 42, w: 178, h: 37 },
                skillStyle: { x: 240, y: 30, w: 60, h: 60 },
                baseIcon: { x: 124, y: 100, w: 60, h: 60 }
            },
            $p2avatar: { x: 639, y: 56, w: 80, h: 80 },
            p2gender: { x: 695, y: 119, w: 25, h: 25 },
            $p2name: { x: 511, y: 148, w: 209, h: 29 },
            $p2lv: { x: 584, y: 51, w: 71, h: 26 },
            $p2blood: { x: 446, y: 82, w: 212, h: 44 },
            $p2Role: { x: 382, y: 210, w: 320, h: 767 },
            $p2SkillShow: {
                x: 462, y: 611, w: 307, h: 140,
                lose: { x: 0, y: -20, w: 250, h: 40 },
                win: { x: 121, y: -20, w: 106, h: 40 },
                skillName: { x: 102, y: 42, w: 178, h: 37 },
                skillStyle: { x: 12, y: 30, w: 60, h: 60 },
                baseIcon: { x: 124, y: 100, w: 60, h: 60 }
            },
            $attackEnemy: { x: 647, y: 200, w: 103, h: 234 },
            vs: { x: 296, y: 76, w: 158, h: 57 },
            round: { x: 311, y: 61, w: 126, h: 30 },
            go: { x: 251, y: 488, w: 248, h: 94 },
            ready: { x: 197, y: 360, w: 359, h: 90 },
            skillbg1: { x: 31, y: 946, w: 277, h: 153 },
            skillbg2: { x: 31, y: 1130, w: 277, h: 153 },
            skillbg3: { x: 445, y: 946, w: 277, h: 153 },
            skillbg4: { x: 445, y: 1130, w: 277, h: 153 },
            skill1: { x: 60, y: 968, w: 219, h: 110 },
            skill2: { x: 60, y: 1152, w: 219, h: 110 },
            skill3: { x: 474, y: 968, w: 219, h: 110 },
            skill4: { x: 474, y: 1152, w: 219, h: 110 },
            skillicon1: { x: 90, y: 980, w: 71, h: 71 },
            skillicon2: { x: 90, y: 1160, w: 71, h: 71 },
            skillicon3: { x: 522, y: 980, w: 71, h: 71 },
            skillicon4: { x: 518, y: 1162, w: 71, h: 71 },
            skillPic1: { x: 186, y: 990, w: 60, h: 60 },
            skillPic2: { x: 186, y: 1173, w: 60, h: 60 },
            skillPic3: { x: 599, y: 990, w: 60, h: 60 },
            skillPic4: { x: 599, y: 1173, w: 60, h: 60 },
            okbg: { x: 288, y: 784, w: 175, h: 176 },
            ok: { x: 305, y: 797, w: 142, h: 142 },
            ok_hover: { x: 305, y: 797, w: 142, h: 142 },
            layer: {
                goldPosi: { x: 67, y: 265, w: 123, h: 123 },
                expPosi: { x: 264, y: 265, w: 123, h: 123 },
                backPosi: { x: 59, y: 461, w: 214, h: 92 },
                helpBtnPosi: { x: 374, y: 461, w: 214, h: 92 },
                helpPosi: { x: 58, y: 253, w: 530, h: 127 },
                $gold: { x: 155, y: 361, w: 100, h: 28 },
                $exp: { x: 357, y: 361, w: 100, h: 28 },
                $eye: { x: 460, y: 361, w: 100, h: 28 },
            },
        };
        _this.isSucces = true;
        //当前页面元素对象
        _this.$el = {
            ready: Object(egret.Bitmap),
            go: Object(egret.Bitmap),
            roundTime: [],
            skills: [],
            ok_bg: Object(egret.Bitmap),
            ok: Object(egret.Bitmap),
            ok_hover: Object(egret.Bitmap),
            p1blood: Object(eui.Rect),
            p1bloodFill: Object(eui.Rect),
            p2blood: Object(eui.Rect),
            p2bloodFill: Object(eui.Rect),
            p1Role: Object(egret.DisplayObjectContainer),
            p2Role: Object(egret.DisplayObjectContainer),
            roundNum: Object(egret.DisplayObjectContainer),
            $p1SkillShow: Object(egret.DisplayObjectContainer),
            $p2SkillShow: Object(egret.DisplayObjectContainer),
            skillPic1: Object(egret.Bitmap),
            skillPic2: Object(egret.Bitmap),
            skillPic3: Object(egret.Bitmap),
            skillPic4: Object(egret.Bitmap),
            attackEnemy: Object(egret.DisplayObjectContainer),
        };
        var that = _this;
        _this.RES_battle = RES.getRes('battle');
        _this.RES_common = RES.getRes('common');
        //仅仅是动画需要放在这里面执行
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this);
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
    Battle_ui.prototype.bloodFrame = function (p, role, pBlood) {
        if (p.curBloodWidth > p.lastBloodWidth) {
            //按照比例减少，避免减血持续时间不统一
            var val = (p.curBloodWidth - p.lastBloodWidth) / 10;
            if (val < 1)
                val = 1;
            p.curBloodWidth -= val;
            if (p.curBloodWidth < p.lastBloodWidth)
                p.curBloodWidth = p.lastBloodWidth; //超出范围设置为相同
            //减血的时候透明效果
            if (role.alpha <= 0)
                role.alpha = 1;
            role.alpha -= 0.1;
            this.updateBlood(pBlood, p.bloodWidth, p.curBloodWidth);
        }
        else {
            role.alpha = 1;
        }
    };
    Battle_ui.prototype.onEnterFrame = function (frameTime) {
        var frameCount = this.frameCount();
        this.bloodFrame(this.$data.one, this.$el.p1Role, this.$el.p1blood);
        this.bloodFrame(this.$data.two, this.$el.p2Role, this.$el.p2blood);
        if (this.$data.one.roleList) {
            for (var i = 0; i < this.$data.one.roleList.length; i++) {
                if (this.$data.one.curBlood / this.$data.one.blood * 100 >= parseInt(this.$data.one.roleList[i].blood_percent)) {
                    this.$el.p1Role.texture = this.$data.one.roleList[i].Texture;
                    break;
                }
            }
        }
        if (this.$data.two.roleList) {
            for (var i = 0; i < this.$data.two.roleList.length; i++) {
                if (this.$data.two.curBlood / this.$data.two.blood * 100 >= parseInt(this.$data.two.roleList[i].blood_percent)) {
                    this.$el.p2Role.texture = this.$data.two.roleList[i].Texture;
                    this.$el.p2Role.anchorOffsetX = this.$el.p2Role.width; //修改锚点位置
                    this.$el.p2Role.scaleX = -1;
                    break;
                }
            }
        }
        if (this.$data.roundTime >= -1) {
            this.$el['roundTime'].forEach(function (item) {
                item.visible = false;
            });
            if (this.$data.roundTime > -1) {
                this.$el['roundTime'][this.$data.roundTime].visible = true;
            }
        }
    };
    Battle_ui.prototype.createView = function () {
        var _this = this;
        RES.getResByUrl(this.$data.background_pic, function (texture) {
            var RES_bg = new egret.Bitmap(texture);
            $util.setLayout(RES_bg, _this.RES_layout['bg']);
            _this.$main.PageBg.addChild(RES_bg); //加载到main的PageBg里去，保证背景不滚动
        }, this, RES.ResourceItem.TYPE_IMAGE);
        //顶部元素必传值
        this.$firstEleY = this.RES_layout.$p1blood.y;
        //对战信息：回合数，血条，用户。 _下划线代表需要动态更新的视图
        this.drawBlood('p1blood'); //先绘制方便被挡住
        this.drawBlood('p2blood'); //先绘制方便被挡住
        this.drawBloodLine(this.$el.p1blood, this.$data.one.blood); //绘制血条格
        this.drawBloodLine(this.$el.p2blood, this.$data.two.blood);
        this.drawRole('p1Role');
        this.drawRole('p2Role');
        this.drawRole2Skill();
        this.drawSkillShow('$p1SkillShow');
        this.drawSkillShow('$p2SkillShow');
        this.drawRoundText();
        this.fastBitmap(this.RES_battle, 'round'); //round
        this.$el['ready'] = this.fastBitmap(this.RES_battle, 'ready'); //ready
        this.$el['go'] = this.fastBitmap(this.RES_battle, 'go'); //Go
        this.$el['ready'].visible = false;
        this.$el['go'].visible = false;
        var skillbg1 = new egret.Bitmap(this.RES_battle.getTexture('skill_left'));
        $util.setLayout(skillbg1, this.RES_layout['skillbg1']);
        var skillbg2 = new egret.Bitmap(this.RES_battle.getTexture('skill_left'));
        $util.setLayout(skillbg2, this.RES_layout['skillbg2']);
        var skillbg3 = new egret.Bitmap(this.RES_battle.getTexture('skill_right'));
        $util.setLayout(skillbg3, this.RES_layout['skillbg3']);
        var skillbg4 = new egret.Bitmap(this.RES_battle.getTexture('skill_right'));
        $util.setLayout(skillbg4, this.RES_layout['skillbg4']);
        this.addChild(skillbg1);
        this.addChild(skillbg2);
        this.addChild(skillbg3);
        this.addChild(skillbg4);
        this.skillBtn();
        this.$el.skillPic1 = new egret.Bitmap();
        $util.setLayout(this.$el.skillPic1, this.RES_layout['skillPic1']);
        this.$el.skillPic2 = new egret.Bitmap();
        $util.setLayout(this.$el.skillPic2, this.RES_layout['skillPic2']);
        this.$el.skillPic3 = new egret.Bitmap();
        $util.setLayout(this.$el.skillPic3, this.RES_layout['skillPic3']);
        this.$el.skillPic4 = new egret.Bitmap();
        $util.setLayout(this.$el.skillPic4, this.RES_layout['skillPic4']);
        this.addChild(this.$el.skillPic1);
        this.addChild(this.$el.skillPic2);
        this.addChild(this.$el.skillPic3);
        this.addChild(this.$el.skillPic4);
        // this.fastBitmap(this.RES_battle, 'skillPic1');//skillPic1
        // this.fastBitmap(this.RES_battle, 'skillPic2');//skillPic2
        // this.fastBitmap(this.RES_battle, 'skillPic3');//skillPic3
        // this.fastBitmap(this.RES_battle, 'skillPic4');//skillPic4
        var skillicon1 = new egret.Bitmap(this.RES_battle.getTexture('attack1'));
        $util.setLayout(skillicon1, this.RES_layout['skillicon1']);
        var skillicon2 = new egret.Bitmap(this.RES_battle.getTexture('attack2'));
        $util.setLayout(skillicon2, this.RES_layout['skillicon2']);
        var skillicon3 = new egret.Bitmap(this.RES_battle.getTexture('defend1'));
        $util.setLayout(skillicon3, this.RES_layout['skillicon3']);
        var skillicon4 = new egret.Bitmap(this.RES_battle.getTexture('defend2'));
        $util.setLayout(skillicon4, this.RES_layout['skillicon4']);
        this.addChild(skillicon1);
        this.addChild(skillicon2);
        this.addChild(skillicon3);
        this.addChild(skillicon4);
        //回合倒计时
        this.roundTimer();
        this.pageContentCenter(true);
    };
    Battle_ui.prototype.createUserInfo = function () {
        //用户1
        this.drawAvatar(this.$data.one.avatar, '$p1avatar');
        this.drawGender(this.$data.one.gender, 'p1gender');
        this.drawUsername(this.$data.one.nickname, '$p1name', 'left');
        this.drawLevel(this.$data.one.level, '$p1lv');
        //用户2
        this.drawAvatar(this.$data.two.avatar, '$p2avatar');
        this.drawGender(this.$data.two.gender, 'p2gender');
        this.drawUsername(this.$data.two.nickname, '$p2name', 'right');
        this.drawLevel(this.$data.two.level, '$p2lv');
        //初始化血
        this.updateBlood(this.$el.p1blood, this.$data.one.bloodWidth, this.$data.one.curBloodWidth);
        this.updateBlood(this.$el.p2blood, this.$data.two.bloodWidth, this.$data.two.curBloodWidth);
    };
    Battle_ui.prototype.drawSkillShow = function (name) {
        var _this = this;
        var that = this;
        var showCon = new egret.DisplayObjectContainer();
        $util.setLayout(showCon, this.RES_layout[name]);
        showCon.visible = false;
        this.addChild(showCon);
        var bg = new egret.Bitmap(this.RES_battle.getTexture('skill_result'));
        bg.width = showCon.width;
        bg.height = showCon.height;
        if (name == '$p1SkillShow') {
            //翻转
            bg.anchorOffsetX = bg.width; //修改锚点位置
            bg.scaleX = -1;
        }
        showCon.addChild(bg);
        var winText = new egret.Bitmap(this.RES_common.getTexture('win'));
        $util.setLayout(winText, this.RES_layout[name].win);
        var loseText = new egret.DisplayObjectContainer();
        $util.setLayout(loseText, this.RES_layout[name].lose);
        loseText.visible = false;
        winText.visible = false;
        showCon.addChild(winText);
        showCon.addChild(loseText);
        //技能名称
        var skillName = new egret.TextField();
        $util.setLayout(skillName, this.RES_layout[name].skillName);
        skillName.textColor = 0xffffff;
        skillName.size = 40;
        skillName.filters = [blackTextShadowFilter];
        skillName.textAlign = 'center';
        showCon.addChild(skillName);
        //技能样式
        var skillStyle = new egret.Bitmap();
        $util.setLayout(skillStyle, this.RES_layout[name].skillStyle);
        skillStyle.filters = [whiteBorderShadowFilter];
        showCon.addChild(skillStyle);
        //技能基础icon
        var baseIcon = new egret.Bitmap();
        $util.setLayout(baseIcon, this.RES_layout[name].baseIcon);
        baseIcon.filters = [whiteBorderShadowFilter];
        showCon.addChild(baseIcon);
        showCon['showTie'] = function (skillText, skillTexture, baseIconTexture) {
            bg.filters = [];
            showCon.visible = true;
            skillName.text = skillText;
            skillStyle.texture = skillTexture;
            baseIcon.texture = baseIconTexture;
            ani();
        };
        showCon['showWin'] = function (skillText, skillTexture, baseIconTexture) {
            bg.filters = [];
            showCon.visible = true;
            winText.visible = true;
            skillName.text = skillText;
            skillStyle.texture = skillTexture;
            baseIcon.texture = baseIconTexture;
            ani();
        };
        showCon['showLose'] = function (reduce, skillText, skillTexture, baseIconTexture) {
            skillName.text = skillText;
            skillStyle.texture = skillTexture;
            baseIcon.texture = baseIconTexture;
            bg.filters = [colorBattleGrayFilter]; //灰色滤镜
            loseText.removeChildren(); //先清空
            var No = reduce.toString().split("");
            var _reduce = new egret.Bitmap(_this.RES_common.getTexture("reduce"));
            var leftStart = (loseText.width - 33 * No.length - 27) / 2;
            $util.setLayout(_reduce, {
                x: leftStart,
                y: 11,
                w: 27,
                h: 17
            });
            loseText.addChild(_reduce);
            No.map(function (num, index) {
                var RES_num = new egret.Bitmap(_this.RES_common.getTexture("wr" + num));
                var layout = {
                    x: leftStart + (index + 1) * 24,
                    y: 0,
                    w: 42,
                    h: 40
                };
                $util.setLayout(RES_num, layout);
                loseText.addChild(RES_num);
            });
            showCon.visible = true;
            loseText.visible = true;
            ani();
        };
        showCon['hideShow'] = function () {
            winText.visible = false;
            loseText.visible = false;
            showCon.visible = false;
        };
        function ani() {
            var tw = egret.Tween.get(showCon);
            var xHide = 0, offsetX = 0;
            if (name == '$p1SkillShow') {
                xHide = that.RES_layout[name].x - that.RES_layout[name].w;
                showCon.x = xHide;
                offsetX = that.RES_layout[name].x + 50;
            }
            else {
                xHide = that.RES_layout[name].x + that.RES_layout[name].w;
                showCon.x = xHide;
                offsetX = that.RES_layout[name].x - 50;
            }
            tw.to({ x: offsetX }, 250).to({ x: that.RES_layout[name].x }, 50).wait(3000).to({ x: xHide }, 300).call(function () {
                showCon['hideShow']();
            });
        }
        this.$el[name] = showCon;
    };
    Battle_ui.prototype.drawRole2Skill = function () {
        var attackEnemy = new egret.DisplayObjectContainer();
        $util.setLayout(attackEnemy, this.RES_layout.$attackEnemy);
        this.addChild(attackEnemy);
        var bg = new egret.Bitmap(this.RES_battle.getTexture('attackEnemy'));
        bg.width = this.RES_layout.$attackEnemy.w;
        bg.height = this.RES_layout.$attackEnemy.h;
        attackEnemy.addChild(bg);
        var att1 = new egret.TextField();
        att1.textColor = 0xffffff;
        att1.size = 28;
        att1.textAlign = 'center';
        $util.setLayout(att1, {
            x: 46,
            y: 8,
            w: this.RES_layout.$attackEnemy.w - 46,
            h: this.RES_layout.$attackEnemy.h - 8 * 2
        });
        attackEnemy.addChild(att1);
        var att2 = new egret.TextField();
        att2.textColor = 0xffffff;
        att2.size = 28;
        att2.textAlign = 'center';
        $util.setLayout(att2, {
            x: 46,
            y: 74,
            w: this.RES_layout.$attackEnemy.w - 46,
            h: this.RES_layout.$attackEnemy.h - 8 * 2
        });
        attackEnemy.addChild(att2);
        var def1 = new egret.TextField();
        def1.textColor = 0xffffff;
        def1.size = 28;
        def1.textAlign = 'center';
        $util.setLayout(def1, {
            x: 46,
            y: 140,
            w: this.RES_layout.$attackEnemy.w - 46,
            h: this.RES_layout.$attackEnemy.h - 8 * 2
        });
        attackEnemy.addChild(def1);
        var def2 = new egret.TextField();
        def2.textColor = 0xffffff;
        def2.size = 28;
        def2.textAlign = 'center';
        $util.setLayout(def2, {
            x: 46,
            y: 200,
            w: this.RES_layout.$attackEnemy.w - 46,
            h: this.RES_layout.$attackEnemy.h - 8 * 2
        });
        attackEnemy.addChild(def2);
        attackEnemy['setSkillVal'] = function (skill) {
            att1.text = skill[0];
            att2.text = skill[1];
            def1.text = skill[2];
            def2.text = skill[3];
        };
        this.$el.attackEnemy = attackEnemy;
    };
    Battle_ui.prototype.drawRole = function (name) {
        var roleCon = new egret.DisplayObjectContainer();
        $util.setLayout(roleCon, this.RES_layout['$' + name]);
        this.addChild(roleCon);
        this.$el[name] = new egret.Bitmap();
        roleCon.addChild(this.$el[name]);
    };
    Battle_ui.prototype.createLayer = function (layerObj) {
        var _this = this;
        //layer
        var RES_layer = RES.getRes('layer');
        var layerCon = new egret.DisplayObjectContainer();
        var RES_success = new egret.Bitmap(RES_layer.getTexture('success'));
        var RES_back = new egret.Bitmap(RES_layer.getTexture('back'));
        var RES_fail = new egret.Bitmap(RES_layer.getTexture('fail'));
        var RES_helpBtn = new egret.Bitmap(RES_layer.getTexture('help_btn'));
        var RES_help = new egret.Bitmap(RES_layer.getTexture('help'));
        var RES_gold = new egret.Bitmap(RES_layer.getTexture('coin'));
        var RES_exp = new egret.Bitmap(RES_layer.getTexture('exp'));
        this.$el['layerCon'] = layerCon;
        this.$el['RES_back'] = RES_back;
        this.$el['RES_helpBtn'] = RES_helpBtn;
        $util.setLayout(RES_back, this.RES_layout.layer.backPosi);
        $util.setLayout(RES_helpBtn, this.RES_layout.layer.helpBtnPosi);
        $util.setLayout(RES_help, this.RES_layout.layer.helpPosi);
        $util.setLayout(RES_gold, this.RES_layout.layer.goldPosi);
        $util.setLayout(RES_exp, this.RES_layout.layer.expPosi);
        if (layerObj.type === 'success') {
            layerCon.addChild(RES_success);
            if (layerObj.gold && layerObj.gold != -1) {
                layerCon.addChild(RES_gold);
                this.setCoinVal("$gold", layerObj.gold);
            }
            if (layerObj.exp && layerObj.exp != -1) {
                layerCon.addChild(RES_exp);
                this.setCoinVal("$exp", layerObj.exp);
            }
        }
        else {
            layerCon.addChild(RES_fail);
            layerCon.addChild(RES_help);
            layerCon.addChild(RES_helpBtn);
        }
        layerCon.addChild(RES_back);
        if (layerObj.type === 'success') {
            var Tween = egret.Tween.get(RES_back);
            Tween.to({ x: 215, y: 469 });
        }
        this.$el['RES_back'].touchEnabled = true;
        this.$el['RES_helpBtn'].touchEnabled = true;
        this.$el['RES_back'].addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.$el['RES_back'].onClick();
        }, this);
        this.$el['RES_helpBtn'].addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.$el['RES_helpBtn'].onClick();
        }, this);
        this.$main.Layer.addContent(layerCon);
    };
    Battle_ui.prototype.setCoinVal = function (name, val) {
        var valTxt = new egret.TextField();
        valTxt.text = val;
        valTxt.textColor = 0xFFFFFF;
        valTxt.size = 33;
        $util.setLayout(valTxt, this.RES_layout.layer[name]);
        this.$el['layerCon'].addChild(valTxt);
    };
    //0-10先载入，并存储在数组里
    Battle_ui.prototype.roundTimer = function () {
        for (var i = 0; i < 10; i++) {
            var time = new egret.Bitmap(this.RES_common.getTexture("pr" + i));
            $util.setLayout(time, {
                x: (this.width - 91) / 2,
                y: 492,
                w: 91,
                h: 86
            });
            this.addChild(time);
            time.visible = false;
            this.$el.roundTime.push(time);
        }
        //10
        var ten = new egret.DisplayObjectContainer();
        $util.setLayout(ten, {
            x: (this.width - 170) / 2,
            y: 492,
            w: 170,
            h: 86
        });
        this.addChild(ten);
        ten.visible = false;
        this.$el.roundTime.push(ten);
        var time1 = new egret.Bitmap(this.RES_common.getTexture("pr1"));
        $util.setLayout(time1, {
            x: 0,
            y: 0,
            w: 91,
            h: 86
        });
        ten.addChild(time1);
        var time0 = new egret.Bitmap(this.RES_common.getTexture("pr0"));
        $util.setLayout(time0, {
            x: 80,
            y: 0,
            w: 91,
            h: 86
        });
        ten.addChild(time0);
    };
    //技能按钮
    Battle_ui.prototype.skillBtn = function () {
        var btnLayout = {
            x: 0,
            y: 0,
            w: this.RES_layout['skill1'].w,
            h: this.RES_layout['skill1'].h
        };
        var attackLayout = {
            x: -20,
            y: -20,
            w: 46,
            h: 46
        };
        var that = this;
        this.$el.skills.push(createBtn('skill1', 'skill1_hover'));
        this.$el.skills.push(createBtn('skill2', 'skill2_hover'));
        this.$el.skills.push(createBtn('skill3', 'skill3_hover'));
        this.$el.skills.push(createBtn('skill4', 'skill4_hover'));
        function createBtn(skill, skill_hover) {
            var skillBtn = new egret.DisplayObjectContainer();
            $util.setLayout(skillBtn, that.RES_layout[skill]);
            that.addChild(skillBtn);
            var skillDefault = new egret.Bitmap(that.RES_battle.getTexture('skill'));
            $util.setLayout(skillDefault, btnLayout);
            skillBtn.addChild(skillDefault);
            var hover = new egret.Bitmap(that.RES_battle.getTexture('skill_hover'));
            $util.setLayout(hover, btnLayout);
            skillBtn.addChild(hover);
            hover.visible = false; //默认隐藏
            hover.name = 'hover';
            //hideHover控制隐藏
            skillBtn['hideHover'] = function () {
                hover.visible = false;
            };
            skillBtn['showHover'] = function () {
                hover.visible = true;
            };
            //技能伤害值
            var attackBg = new eui.Rect();
            $util.setLayout(attackBg, attackLayout);
            attackBg.ellipseWidth = attackBg.width;
            attackBg.ellipseHeight = attackBg.height;
            attackBg.fillColor = 0xffffff;
            attackBg.strokeWeight = 4;
            attackBg.strokeColor = 0xf95077;
            skillBtn.addChild(attackBg);
            var val = new egret.TextField();
            val.textAlign = 'center';
            val.size = 20;
            val.textColor = 0xf95077;
            $util.setLayout(val, {
                x: -20,
                y: -7,
                w: attackLayout.w,
                h: 20
            });
            skillBtn.addChild(val);
            skillBtn['setAttack'] = function (text) {
                val.text = text;
            };
            return skillBtn;
        }
        //确定按钮
        this.$el.ok_bg = this.fastBitmap(this.RES_battle, 'okbg'); //okbg
        this.$el.ok = this.fastBitmap(this.RES_battle, 'ok'); //ok
        this.$el.ok_hover = this.fastBitmap(this.RES_battle, 'ok_hover'); //ok_hover
        this.$el.ok_bg.visible = false;
        this.$el.ok.visible = false;
        this.$el.ok_hover.visible = false;
    };
    //当前回合显示
    Battle_ui.prototype.drawRoundText = function () {
        var round = new eui.Rect();
        $util.setLayout(round, this.RES_layout.vs);
        this.addChild(round);
        var RES_vs = new egret.Bitmap(this.RES_battle.getTexture('vs'));
        var vsLayout = {
            x: 0,
            y: 0,
            w: this.RES_layout.vs.w,
            h: this.RES_layout.vs.h
        };
        $util.setLayout(RES_vs, vsLayout);
        round.addChild(RES_vs);
        var roundNum = new egret.DisplayObjectContainer();
        $util.setLayout(roundNum, vsLayout);
        round.addChild(roundNum);
        this.$el.roundNum = roundNum;
        this.roundText();
    };
    Battle_ui.prototype.roundText = function () {
        var _this = this;
        //号
        this.$el.roundNum.removeChildren(); //先清空
        var No = this.$data.battle.round.toString().split("");
        No.map(function (num, index) {
            var RES_num = new egret.Bitmap(_this.RES_common.getTexture("pb" + num));
            var layout = {
                x: (_this.RES_layout.vs.w - 33 * No.length) / 2 + index * 33,
                y: (_this.RES_layout.vs.h - 34) / 2,
                w: 39,
                h: 34
            };
            $util.setLayout(RES_num, layout);
            _this.$el.roundNum.addChild(RES_num);
        });
    };
    //更新绘制血条值
    Battle_ui.prototype.updateBlood = function (blood, all, cur) {
        var bloodWidth = cur / all * (blood.width - 8); //计算出比例的血条宽度
        var layout = {
            w: bloodWidth,
            h: blood.height - 8,
            x: blood.name == 'p1blood' ? blood.width - bloodWidth - 4 : 4,
            y: 4
        };
        $util.setLayout(blood.getChildByName('bloodFill'), layout); //找到blood下的血条设置宽高和位置
    };
    //绘制血条
    Battle_ui.prototype.drawBlood = function (name) {
        this.$el[name] = new eui.Rect();
        this.$el[name].name = name;
        this.$el[name].fillAlpha = 0;
        this.$el[name].strokeWeight = 4;
        this.$el[name].strokeColor = 0x000000;
        $util.setLayout(this.$el[name], this.RES_layout["$" + name]);
        this.addChild(this.$el[name]);
        //里面填充的剩余血值元素
        this.$el[name + "Fill"] = new eui.Rect();
        this.$el[name + "Fill"].name = 'bloodFill';
        this.$el[name + "Fill"].fillColor = 0xE41D54;
        this.$el[name].addChild(this.$el[name + "Fill"]);
    };
    //绘制血条格子
    Battle_ui.prototype.drawBloodLine = function (pBlood, pBloodMax) {
        var lineSpace = (pBlood.width - 4) / pBloodMax; //计算出间距
        //血条格子
        for (var i = 1; i < pBloodMax; i++) {
            var line = new eui.Rect();
            line.fillColor = 0x3a0c04;
            line.alpha = 0.9;
            $util.setLayout(line, {
                w: 3,
                h: 20,
                x: lineSpace * i,
                y: 0
            });
            pBlood.addChild(line);
        }
    };
    //等级
    Battle_ui.prototype.drawLevel = function (lv, layoutName) {
        var rect = new eui.Rect();
        rect.ellipseWidth = 10; //设置圆角参数
        rect.ellipseHeight = 10;
        rect.fillColor = 0xf7f040;
        rect.strokeWeight = 1;
        rect.strokeColor = 0x000000;
        $util.setLayout(rect, this.RES_layout[layoutName]);
        this.addChild(rect);
        //text
        var textLv = new egret.TextField();
        textLv.text = "Lv." + lv;
        textLv.textColor = 0x000000;
        textLv.size = 24;
        textLv.textAlign = 'center';
        $util.setLayout(textLv, {
            w: this.RES_layout[layoutName].w,
            h: this.RES_layout[layoutName].h,
            x: 0,
            y: 2
        });
        rect.addChild(textLv);
    };
    //用户名
    Battle_ui.prototype.drawUsername = function (name, layoutName, direction) {
        var username = new egret.TextField();
        username.text = name;
        username.textColor = 0x000000;
        username.textAlign = direction;
        username.size = 28;
        $util.setLayout(username, this.RES_layout[layoutName]);
        this.addChild(username);
    };
    //绘制性别
    Battle_ui.prototype.drawGender = function (gender, layoutName) {
        var genderName = 'male';
        if (gender == 2)
            genderName = 'female';
        var RES_gender = new egret.Bitmap(this.RES_common.getTexture(genderName));
        ;
        $util.setLayout(RES_gender, this.RES_layout[layoutName]);
        this.addChild(RES_gender);
    };
    //绘制头像
    Battle_ui.prototype.drawAvatar = function (avatarUrl, layoutName) {
        var _this = this;
        var rect = new eui.Rect();
        rect.ellipseWidth = this.RES_layout[layoutName].w;
        rect.ellipseHeight = this.RES_layout[layoutName].h;
        rect.fillColor = 0xffffff;
        $util.setLayout(rect, this.RES_layout[layoutName]);
        var avatar;
        //载入头像
        RES.getResByUrl(avatarUrl, function (texture) {
            avatar = new egret.Bitmap(texture);
            var layout = {
                x: 2,
                y: 2,
                w: _this.RES_layout[layoutName].w - 4,
                h: _this.RES_layout[layoutName].h - 4,
            };
            $util.setLayout(avatar, layout);
            rect.addChild(avatar);
            //使用遮罩
            var mask = new eui.Rect();
            mask.ellipseWidth = layout.w; //设置圆角参数
            mask.ellipseHeight = layout.h;
            mask.fillColor = 0x000000;
            $util.setLayout(mask, layout);
            rect.addChild(mask);
            avatar.mask = mask;
        }, this, RES.ResourceItem.TYPE_IMAGE);
        this.addChild(rect);
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
