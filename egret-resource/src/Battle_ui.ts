
class Battle_ui extends Base {
    public el_layout = {
        bg: {x:0, y:0, w:750, h:1634},
        back: {x:46, y:33, w:46, h:48},
        go: { x: 251, y: 488, w: 248, h: 94 },
        ready: { x: 197, y: 360, w:359, h: 90 },
        round: {x: 311, y: 1300, w: 126, h: 30}
    }
    public RES_battle;
    public RES_common;
    public isSucces = true;
    //当前页面元素对象
    public $el = {
        ready: Object(egret.Bitmap),
        go: Object(egret.Bitmap),
        round:Object(egret.Bitmap)
    };
    public constructor() {
        super();
        const that = this;
        this.RES_battle = RES.getRes('battle');
        this.RES_common= RES.getRes('common');

    }
    public readyGo(){
        this.$el.ready.visible = true;
        setTimeout(()=>{
            this.$el.ready.visible = false;
            this.$el.go.visible = true;
            setTimeout(()=>{
                this.$el.go.visible = false;
            }, 700);
        }, 800);
    }

    public createView(): void {

        //背景
        let RES_bg = new egret.Bitmap( RES.getRes('listbg') );
        $util.setLayout(RES_bg, this.el_layout['bg']);
        this.$main.PageBg.addChild(RES_bg);//加载到main的PageBg里去，保证背景不滚动

        //顶部元素必传值
        this.$firstEleY = this.el_layout.back.y;
        
        let back = new egret.Bitmap( this.RES_common.getTexture('back') );
        $util.setLayout(back, this.el_layout.back)
        this.addChild(back);
        $util.btnActive(back, ()=>{
            this.$main.back();
        })

        this.$el.round = this.fastBitmap(this.RES_battle, 'round');
        
        this.$el['ready'] = this.fastBitmap(this.RES_battle, 'ready');//ready
        this.$el['go'] = this.fastBitmap(this.RES_battle, 'go');//Go
        this.$el['ready'].visible = false;
        this.$el['go'].visible = false;
        
        this.pageContentCenter(true);
    }
   
    //快速创建
    private fastBitmap(resObj, name){
        let RES_bitmap = new egret.Bitmap( resObj.getTexture(name) );
        $util.setLayout(RES_bitmap, this.el_layout[name]);
        this.addChild(RES_bitmap);
        return RES_bitmap;
    }
}
