/**
 * http请求的封装
 **/

class $api {
    private hostMain = CONFIG.main;

    public login = this.post('/login');
    
    private get(url, setHost = null) {
        return this.setRequest('GET', url, setHost)
    }
    private post(url, setHost = null) {
        return this.setRequest('POST', url, setHost)
    }

    private setRequest(method, url, setHost = null){
        let host = this.hostMain;
        if(setHost) host = setHost;
        return (params = null)=>{
            params = params || {};
            params.method = method;
            params.url = url;
            if (params.url.indexOf('http:') != 0 && params.url.indexOf('https:') != 0 ) {
                params.url = host + url;
            }
            return this.request(params);
        }
    }

    // 请求方法
    private request (params) {
        let errCallbacks = params.errCallbacks || {};
        let success = params.success || false;
        const that = this;

        return new Promise((resolve, reject) => {
            wx.request({
                url: params.url,
                data: params.data,
                method: params.method || 'POST',
                success: function(res){
                    //兼容两种写法
                    if(params.success){
                        success();
                    }else resolve(res);
                },
                fail: function() {
                    wx.showToast({
                        title: '请求失败',
                        icon: 'none',
                        duration: 2000
                    });
                },
                complete: function() {
                    params.complete && params.complete();
                }
            });
        })
    };
}
const API = new $api();