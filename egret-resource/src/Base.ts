class Base extends egret.Sprite {
    public $main;
    public $param;
    public $data;
    public $firstEleY = 0;
    public $frameCount = 0;
    public constructor() {
        super();
        this.width = 750;
        this.height = 1334;
        this.$data = {};
    }

    public pageContentCenter(needCenter = false){
        const measuredHeight = this.measuredHeight + this.$firstEleY;
        //如果舞台高度大于内容高度，内容垂直居中。 框架测量的实际高度：measuredHeight，不包含容器第一个元素的y偏移量
        if(needCenter && this.$main.stage.stageHeight > measuredHeight){
            this.$main.SV.y = (this.$main.stage.stageHeight - measuredHeight)/2;
            this.$main.baseContent.y = (this.$main.stage.stageHeight - measuredHeight)/2;
        }else{
            this.$main.SV.y = 0;
            this.$main.baseContent.y;
        }
        this.height = measuredHeight + 50;//50底部间距
    }
    public frameCount(){
        if(this.$frameCount>=60) this.$frameCount = 0;
        this.$frameCount++;
        return this.$frameCount;
    }

    public onDestroy(){//钩子函数 页面卸载时
        console.log('onDestroy');
    }
    
}