class Index extends Index_ui {
    public constructor({$main}) {
        super();
        this.$main = $main;
        this.init();
    }
    private init() {
       
        this.createView();

        setTimeout(()=>{
            this.$data.gold = '3000';
        }, 3000)
    }
   
    public onDestroy() {
        console.log('index destroy')
    }
    
}
