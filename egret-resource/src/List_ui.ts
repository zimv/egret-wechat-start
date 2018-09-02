class List_ui extends Base {
    //$代表形状和文字绘制
    public RES_layout = {
        bg: {x:0, y:0, w:750, h:1634},
        back: {x:46, y:33, w:46, h:48},
        item: {
            x:54, y:100, w:645, h:263,
            No: {x:100, y:100, w:53, h:44},
        }
    }
    public RES_list;
    public RES_common;
    public $el = {
        got: Object(egret.Bitmap),
        get: Object(egret.Bitmap),
        unget: Object(egret.Bitmap),
    }
    public $data = {
       list: [{No:'1'},{No:'2'},{No:'3'},{No:'4'},{No:'5'},{No:'6'}]
    }
    public constructor() {
        super();
        this.RES_list = RES.getRes('list');
        this.RES_common= RES.getRes('common');
    }
    
    public async createView() {
        //背景
        let RES_bg = new egret.Bitmap( RES.getRes('listbg') );
        $util.setLayout(RES_bg, this.RES_layout['bg']);
        this.$main.PageBg.addChild(RES_bg);//加载到main的PageBg里去，保证背景不滚动
        
        //顶部元素必传值
        this.$firstEleY = this.RES_layout.back.y;

        let back = new egret.Bitmap( this.RES_common.getTexture('back') );
        $util.setLayout(back, this.RES_layout.back)
        this.addChild(back);
        $util.btnActive(back, ()=>{
            this.$main.back();
        })
        //绘制关卡
        this.itemList();
        this.pageContentCenter();
    }
    //绘制关卡列表
    private itemList(){
        this.$data.list.map((item, index)=>{
            //容器
            let itemCon = new egret.DisplayObjectContainer();
            let layout = {
                x: this.RES_layout.item.x,
                y: this.RES_layout.item.y + index * 280,
                w: this.RES_layout.item.w,
                h: this.RES_layout.item.h
            }
            $util.setLayout(itemCon, layout);
            this.addChild(itemCon);

            //背景色块
            let block = new eui.Rect();
            block.ellipseWidth = 40;
            block.ellipseHeight = 40;
            block.width = itemCon.width;
            block.height = itemCon.height;
            block.fillColor = 0x88c664;
            itemCon.addChild(block);
            let block2 = new eui.Rect();
            block2.ellipseWidth = 40;
            block2.ellipseHeight = 40;
            block2.width = itemCon.width;
            block2.height = itemCon.height;
            block2.fillColor = 0x88c664;
            block2.alpha = 0 + 0.1*index;
            itemCon.addChild(block2);
            //背景
            let RES_item = new egret.Bitmap( this.RES_list.getTexture('item') );
            itemCon.addChild(RES_item);

            let No = new egret.TextField();
            $util.setLayout(No, this.RES_layout.item.No);
            No.textColor = 0xffffff;
            No.size = 40;
            No.text = item.No;            
            itemCon.addChild(No);
            
            itemCon.touchEnabled = true;
            itemCon.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
                this.$main.changePage($page.battle)
            }, this);
            
        })
    }
    //快速创建
    private fastBitmap(resObj, name){
        let RES_bitmap = new egret.Bitmap( resObj.getTexture(name) );
        $util.setLayout(RES_bitmap, this.RES_layout[name]);
        this.addChild(RES_bitmap);
        return RES_bitmap;
    }
}
