/**
 * http请求的封装
 **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var $api = (function () {
    function $api() {
        this.hostMain = CONFIG.main;
        this.hostPassport = CONFIG.passport;
        this.checkSession = this.get('/step-web/user/check/session');
        this.checkLogin = this.get('/account/hasLogin');
        this.login = this.post('/account/login');
        this.saveUserInfo = this.post('/account/save'); //保存个人信息
        this.getUser = this.get('/user/userinfo'); //获取个人信息
        this.saveStep = this.post('/step/save'); //保存步数
        this.transformEnergy = this.get('/step/transformIntoGold'); //能量转换为金币
        this.getStages = this.post('/chapter/stages'); //获取当前章节
        this.getStageDetail = this.post('/battle/stage/detail'); //获取关卡数据
        this.startMonsterBattle = this.post('/battle/battleMonster'); //开始和怪物对战
        this.skillMonster = this.post('/battle/skillMonster'); //技能操作
        //好友对战
        this.friendBattleStages = this.get('/battle/loadBattleStages'); //好友对战场景
        this.createFriendBallte = this.get('/battle/getBattleNo'); //创建对战
        this.friendJoinBattle = this.post('/battle/battleFriend'); //好友加入对战
        this.checkFriendJoinBattle = this.post('/battle/getBattleFriend'); //轮询是否有好友加入到战斗房间
        this.skillFriendBattle = this.post('/battle/skillFriend'); //好友对战发招
        this.roundResultFriendBattle = this.post('/battle/getSkillFriendResult'); //轮询一轮好友对战结果
        this.getAllUserAchievement = this.get('/achievement/getAllUserAchievement'); //获取所有成就
        this.getAllChapter = this.get('/chapter/all'); //首页所有章节
        this.readGuide = this.post('/user/readGuide'); //引导页记录
        this.receiveChapterBonus = this.post('/chapter/receiveChapterBonus'); //领取三星奖励
        //每日奖励
        this.getdailyBonus = this.get('/dailyBonus/all'); //获取每日奖励列表
        this.getBonus = this.get('/dailyBonus/receive'); //获取每日奖励
    }
    // 请求成功后，根据errcode处理结果
    $api.prototype.requestSuccess = function (errCallbacks, success, res) {
        var _this = this;
        // 如果有预先设置的errcode的处理，则优先处理
        if (errCallbacks[res.errcode]) {
            errCallbacks[res.errcode]();
        }
        else if (res.errcode != 0) {
            if (res.errcode == 530) {
                console.log(res.errmsg);
                this.main.wxLogin(function () {
                    _this.main.reload();
                });
            }
            else {
                var err = '请求失败';
                if (res && res.errmsg)
                    err = res.errmsg;
                wx.showToast({
                    title: err,
                    icon: 'none',
                    duration: 2000
                });
            }
            success(null);
        }
        else {
            success(res.data);
        }
    };
    ;
    $api.prototype.getHead = function () {
        var _head = {
            "token": this.getSess(),
            "timestamp": new Date().getTime(),
            "userId": wx.getStorageSync('userId') || '',
            "channel": "",
            "channelCode": "self",
            "pushId": "",
            "initStamp": "",
            "device": "",
            "deviceId": "",
            "systemVersion": "",
            "comeFrom": "qieluanbu",
            "platformId": "4",
            "appName": "healthstep",
            "appVersion": "",
            "extra": "" //额外参数，后续做ABTesting等场景的时候会用到，也可以做一些额外的业务需求字段，视各业务而定
        };
        return JSON.stringify(_head);
    };
    // 给data加上一些公共参数
    $api.prototype.getData = function (data) {
        data = data || {};
        return data;
    };
    $api.prototype.getSess = function () {
        // 从storage中获取sess
        try {
            return wx.getStorageSync('stepSession') || '';
        }
        catch (e) {
            return '';
        }
    };
    /**
     * 请求
     * 必须配置参数：url（请求地址），默认是问诊接口地址，若不是则地址要写全，否则只写路径，eg："/profile" -> "https://ylt.medlinker.com/profile"，"https://passport.medlinker.com/profile" -> "https://passport.medlinker.com/profile"
     * 可选参数：
     *      data: obj，请求参数
     *      success: func，请求成功，且errcode为0的回调，传入请求成功的数据，不包括code，后台返回结果中的res.data，不是微信给的res.data，即微信的res.data.data
     *      errCallbacks: obj，请求成功，但errcode不为0，errcode为key，对应一个处理函数
     *      fail: func，请求失败的回调
     *      complete: func，请求完成的回调

    function post(params) {
        params.method = 'POST';
        request(params);
    }
    **/
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
            //console.log(params);
            wx.request({
                url: params.url,
                data: that.getData(params.data),
                method: params.method || 'POST',
                header: {
                    _head: that.getHead()
                },
                success: function (res) {
                    if (!success)
                        success = resolve;
                    that.requestSuccess(errCallbacks, success, res.data);
                },
                fail: function () {
                    if (params.fail) {
                        params.fail();
                    }
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
