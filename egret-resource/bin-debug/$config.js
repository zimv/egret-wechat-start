var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var $config = (function () {
    function $config() {
        this.env = 'dev'; //dev or product
        this.hosts = {
            passport: {
                dev: 'https://sso-dev.doctorwork.com',
                qa: 'https://sso-qa.doctorwork.com',
                pre: 'https://sso-pre.doctorwork.com',
                product: 'https://sso.doctorwork.com'
            },
            main: {
                dev: 'https://c-dev.doctorwork.com/health-game/v1',
                qa: 'https://c-qa.doctorwork.com',
                pre: 'https://step.developer.doctorwork.com',
                product: 'https://step.doctorwork.com'
            }
        };
        this.envKey = this.env || 'product';
        this.passport = this.hosts.passport[this.envKey];
        this.main = this.hosts.main[this.envKey];
        this.appInfo = {
            appId: 'wxfa7f3a3e96954e2c',
            appSecret: '317722b48c90ad0d2c89b8c7aed8a9b7'
        };
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
