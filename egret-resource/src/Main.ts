//全局数据写到此对象当中
const GlobalData = {
}
class Main extends eui.UILayer {
    public PageBg;//出现需要不滚动的页面背景，往它里面添加元素
    public SV;//页面容器，可以滚动
    public baseContent;//基础容器不可滚动
    public Layer;//遮罩
    public Loading;//预加载弹框
    public initComplete = false;
    public initPage;
    public $popstate = [];//记录历史路由
    protected createChildren(): void {
        super.createChildren();

        this.enterGame(wx.getLaunchOptionsSync());
        wx.onShow((res)=>{
            console.log('wxOnShow');
            console.log(res);
            this.enterGame(res);
        })

        /*
        1、如果加载的外部头像服务器不支持跨域，那么无法使用webgl，如果服务器支持跨域，那么加载前需要设置  egret.ImageLoader.crossOrigin = "anonymous"
        2、如果加载的外部头像服务器不支持跨域，使用canvas,那么加载前需要设置  egret.ImageLoader.crossOrigin = "anonymous"，如果服务器支持跨域，那就直接加载
         */
        egret.ImageLoader.crossOrigin = "anonymous";//支持跨域

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private enterGame(res){
        //微信转发设置参数 page=list，进入小程序就会直接打开list页面
        if(res.query.page == $page.list){
            this.changePage($page.list, {})
        }
    }

    private initElement(){
        this.PageBg = new egret.DisplayObjectContainer();
        this.stage.addChild(this.PageBg);

        this.SV = new egret.ScrollView();
        this.SV.width = this.stage.stageWidth;
        this.SV.height = this.stage.stageHeight;
        this.stage.addChild(this.SV);

        this.baseContent = new egret.DisplayObjectContainer();
        this.stage.addChild(this.baseContent);

        this.Layer = new Layer({$main: this});
        this.Layer.name = 'layer';
        this.stage.addChild(this.Layer);

        this.Loading = new Loading({$main: this});
        this.Loading.name = 'loading';
        this.stage.addChild(this.Loading);
    }

    private async runGame() {

        await this.loadResource();
        //await this.authorize();有appId的情况下授权才能使用
        this.initElement();
        if(this.initPage) this.initPage();
        else this.changePage($page.index);

        this.initComplete = true;
    }

    public reload(){
        let cur = this.$popstate[this.$popstate.length-1];
        this.changePage(cur.page, cur.param, false);
    }
    public back(){
        //如果后退不了直接返回首页
        if(this.$popstate.length<2){
            this.changePage($page.index, {}, false);
            return;
        }
        this.$popstate.splice(this.$popstate.length-1, 1);
        let cur = this.$popstate[this.$popstate.length-1];
        this.changePage(cur.page, cur.param, false);
    }
    public clearPopstate(){
        this.$popstate = [];
    }
    public changePage(page, param = {}, update=true){//是否更新路由，返回和刷新不需要路由记录
        //钩子函数
        this.SV.$children[0] && this.SV.$children[0].onDestroy();
        this.baseContent.$children[0] && this.baseContent.$children[0].onDestroy();

        this.SV.removeContent();//移除上个页面
        this.PageBg.removeChildren();
        this.baseContent.removeChildren();
        
        if(update){
            //记录路由
            this.$popstate.push({
                page: page,
                param: param,
            })
        }
        
        //首页
        if(page == $page.index){
            const indexView = new Index({$main: this});
            this.SV.setContent(indexView);
            //清除历史，再加入首页记录
            this.clearPopstate();
            this.$popstate.push({
                page: page,
                param: param,
            })
            this.SV.scrollTop = 0;//滚动位置重置
        }
        //列表页
        if(page == $page.list){
            const list = new List({$main: this, param: param});
            this.SV.setContent(list);
            this.SV.scrollTop = 0;//滚动位置重置
        }
        //战斗页
        if(page == $page.battle){
            const battle = new Battle({$main: this, param: param});
            this.baseContent.addChild(battle);
        }
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
    private async authorize(){
        const res = await wxPromise.getSetting();
        console.log(res);
        if(!res['authSetting']['scope.userInfo']) {
            const u = await this.getWxUserInfo();//必然授权了才会返回
        }
    }
    public async getWxUserInfo(){
        return new Promise((resolve, reject) => {
            let button = wx.createUserInfoButton({
                type: 'text',
                text: '点击获取用户信息',
                style: {
                    left: 10,
                    top: 76,
                    width: 200,
                    height: 40,
                    lineHeight: 40,
                    backgroundColor: '#ff0000',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: 16,
                    borderRadius: 4
                }
            })
            button['onTap']((wxUser) => {
                button['hide']();
                console.log(wxUser)
            })
            button['show']();
        })
    }
    
}
