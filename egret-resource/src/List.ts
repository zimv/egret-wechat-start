
class List extends List_ui {
    public constructor({$main, param}) {
        super();
        this.$main = $main;
        this.$param = param;
        this.createView();
    }
    public onDestroy() {
        console.log('list destroy')
    }
}
