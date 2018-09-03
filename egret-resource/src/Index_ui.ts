class Index_ui extends Base {
    public el_layout = {
        indexbg: {x:0, y:0, w:750, h:1665},
        bg: {x:0, y:50, w:750, h:553},
        msg: {x:100, y:700, w:471, h:104},
        gold: {x:300, y:100, w:300, h:39}
    };
    public constructor() {
        super();
        this.RES_index = RES.getRes('index');
        this.RES_common = RES.getRes('common');

    }
    public RES_index;
    public RES_common;
    public $el = {
        gold: Object(egret.TextField)
    }
    public $data = {
        gold: '0'
    }

    public async createView() {

        //背景
        let RES_bg = new egret.Bitmap( RES.getRes('indexbg') );
        $util.setLayout(RES_bg, this.el_layout['indexbg']);
        RES_bg.fillMode = egret.BitmapFillMode.REPEAT;
        this.$main.PageBg.addChild(RES_bg);//加载到main的PageBg里去，保证背景不滚动
        //顶部元素必传值
        this.$firstEleY = this.el_layout.gold.y;

        this.fastBitmap('bg');
        let msg = this.fastBitmap('msg');
        msg.filters = [colorGrayFilter];//滤镜效果
        this.$el.gold = this.drawGoldText();

        let toList = new egret.TextField();
        toList.text = "点我进入列表页!";
        toList.textColor = 0x000000;
        toList.x = 200;
        toList.y = 300;
        this.addChild(toList);
        toList.touchEnabled = true;
        toList.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
            this.$main.changePage($page.list);
        }, this);

        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);

        this.pageContentCenter(true);//根据内容计算处理居中
    }

    private onEnterFrame(){//控制显示,不控制具体值
        let num = parseInt(this.$el.gold.text);
        const currentGold = parseInt(this.$data.gold);
        let val = Math.floor(Math.abs(num - currentGold) / 10);
        if(val<1) val = 1;
        if(num > currentGold) num-=val;
        if(num < currentGold) num+=val;
        this.$el.gold.text = num;
    }

  
    //快速创建
    private fastBitmap(name){
        let RES_bitmap = new egret.Bitmap( this.RES_index.getTexture(name) );
        $util.setLayout(RES_bitmap, this.el_layout[name]);
        this.addChild(RES_bitmap);
        return RES_bitmap;
    }

    private drawGoldText(){
        let textField = new egret.TextField();
        textField.text = this.$data.gold;
        textField.textColor = 0x000000;
        textField.size = 26;
        textField.textAlign = 'center';
        $util.setLayout(textField, this.el_layout.gold);
        this.addChild(textField);
        return textField
    }
    
}
