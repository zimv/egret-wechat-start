class Wx{
    public getUserInfo(){}
    public login(params: Object){}
    public request(params: Object){}
    public getStorageSync(str: string){}
    public setStorageSync(str: string, str2: string){}
    public showLoading(params: Object){}
    public showToast(params: Object){}
    public hideLoading(){}
    public getWeRunData(params: Object){}
    public createUserInfoButton(params: Object){}
    public shareAppMessage(params: Object){}
    public onShow(params: Function){}
    public getLaunchOptionsSync(){}
    public exitMiniProgram(params: Function){}
    public getSetting(params: Function){}
    public createOpenSettingButton(params: Object){}
    public checkSession(params: Object){}
}

if (!window.wx) {
    window.wx = new Wx();
}

declare let wx: Wx;
declare interface Window {
    wx: Wx
}

const wxPromiseBase = (api)=> {
    return (params = null) => {
        return new Promise((resolve, reject) => {
            wx[api]({
                success: (res)=>{
                    params && params.success && params.success(res);
                    resolve(res);
                },
                fail(res){
                    if(res && typeof res) res.wxFail = true;
                    resolve(res || null);
                }
            });
        })
    }
}
const wxPromise = {
    login: wxPromiseBase('login'),
    getWeRunData: wxPromiseBase('getWeRunData'),
    getUserInfo: wxPromiseBase('getUserInfo'),
    getSetting: wxPromiseBase('getSetting'),
    checkSession: wxPromiseBase('checkSession')
}