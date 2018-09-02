var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
