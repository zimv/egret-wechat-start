class Index extends Index_ui {
    public constructor({$main}) {
        super();
        this.$main = $main;
        this.init();
    }
    private init() {
       
        this.createView();

        setInterval(()=>{
        this.$data.gold = (Math.random()*10000).toString();
        }, 3000)
    }
   
    public onDestroy() {
        console.log('index destroy')
    }
    
}
