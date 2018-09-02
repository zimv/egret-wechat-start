class $util{
    //定位和设置宽高
    public static setLayout(obj, {x,y,w,h}){
        obj.x = x || 0;
        obj.y = y || 0;
        obj.width = w || 0;
        obj.height = h || 0;
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /*按钮设置点击效果*/
    public static btnActive(btn, cb){
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            if(btn.$lockClickRepeat) return;
            btn.alpha=0.8;
            btn.y++;
            btn.$lockClickRepeat = true;
            setTimeout(()=>{btn.alpha=1;btn.y--;},300);
            setTimeout(()=>{
                cb&&cb();
                btn.$lockClickRepeat = false;
            },500);
        });
    }
    /*按钮绑定点击*/
    public static bindBtnClick(btn, cb){
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            cb&&cb()
        });
    }

    /*根据属性值获取数组对象 */
    public static getItemFromAttr(attr, val, arr){
        let r = null;
        arr.forEach((item)=>{
            if(item[attr] == val) r = item;
        })
        return r;
    }
}