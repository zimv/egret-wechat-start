
class Battle extends Battle_ui {
    public constructor({$main, param}) {
        super();
        this.$param = param;
        this.$main = $main;

        this.init();
    }

    private init() {
        this.createView();
        this.readyGo();
        egret.Tween.get(this.$el.round,{loop: true}).to({y: 0}, 10000);
    }
   
    public onDestroy() {
        console.log('battle destroy')
    }

}
