class Loading extends Base {
    //一共有多少资源加载
    private loadLength = 0;
    //当前加载了多少资源
    private loadedLength = 0;
    private preText;
    //$代表形状和文字绘制
    private RES_layout = {
       
    };
    public constructor({$main}) {
        super();
        this.$main = $main;
        this.stageWidth = this.$main.stage.stageWidth;
        this.stageHeight = this.$main.stage.stageHeight;
        this.createView();
        this.visible = false;//默认隐藏
    }
    public stageWidth;
    public stageHeight;
    private createView(){
        //背景
        let rect = new eui.Rect();
        rect.fillColor = 0x000000;
        rect.alpha = 0.9;
        $util.setLayout(rect, {
            w: this.stageWidth,
            h: this.stageHeight,
            x: 0,
            y: 0
        });
        this.addChild(rect);
        //文案
        this.preText = new egret.TextField();
        $util.setLayout(this.preText, {
            w: this.stageWidth,
            h: 20,
            x: 0,
            y: 300
        });
        this.addChild(this.preText);
        this.preText.textColor = 0xffffff;
        this.preText.textAlign = "center";
    }
    public addContent(obj){//obj视图对象
        obj.name = 'content';
        //居中
        obj.x = (this.stageWidth-obj.width)/2;
        obj.y = (this.stageHeight-obj.height)/2;
        this.addChild(obj);
        return this;
    }
    public removeContent(){//清除内部内容
        let content = this.getChildByName('content');
        this.removeChild(content);
        content = null;//去除引用
        return this;
    }
    public show(){
        this.visible = true;
        return this;
    }
    public hide(){
        this.visible = false;
        return this;
    }
    public clearHide(){//藏并清除内容
        this.visible = false;
        this.removeContent();
        return this;
    }
    /**
     * 预加载图片资源
     * 
     */
    public preloader(images){
        const that = this;
        this.loadLength = 0;//重置
        if(images.length > 0) that.show();
        return new Promise((resolve, reject)=>{
            //一共有多少资源加载
            this.loadLength = this.loadLength + images.length;
            //当前加载了多少资源
            this.loadedLength = 0;

            let onComplete = function(e){
                that.loadedLength++;

                that.preText.text = `Loading...${that.loadedLength}/${that.loadLength}`;
                if(that.loadedLength == that.loadLength){
                    that.hide();
                    resolve();
                }
            }
            that.preText.text = `Loading...${that.loadedLength}/${that.loadLength}`;
            for(let j=0; j<images.length; j++) {
                let img = new Image();
                img.onload = img.onerror = onComplete;
                img.src = images[j];
            }
        })
    }
}
