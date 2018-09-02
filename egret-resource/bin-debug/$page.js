var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var $page = (function () {
    function $page() {
    }
    $page.index = 'index';
    $page.chapterList = 'chapterList';
    $page.battle = 'battle';
    $page.battleRoom = 'battleRoom';
    $page.wait = 'wait';
    $page.medal = 'medal';
    $page.medalDetail = 'medalDetail';
    return $page;
}());
__reflect($page.prototype, "$page");
