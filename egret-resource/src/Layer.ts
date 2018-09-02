class Layer extends Base {
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
        var rect = new eui.Rect();
            rect.fillColor = 0x000000;
            rect.alpha = 0.7;
            $util.setLayout(rect, {
                w: this.stageWidth,
                h: this.stageHeight,
                x: 0,
                y: 0
            });
            this.addChild(rect);
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
        this.$children.forEach((item)=>{
            if(item.name=='content'){
                this.removeChild(item);
            }
        })
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
}
