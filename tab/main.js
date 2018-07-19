$(function(){
    var tabs = $(".tabs");
    var tabs1 = $(".tabs1");
    tabs.each(function(){
        var tab = $(this),
             menu = tab.find(".menu li"),
             content = tab.find(".content>div");
        menu.hover(function(){
            var me = $(this),
                index = me.index();
            menu.removeClass("active");
            me.addClass("active");
            content.hide();
            content.eq(index).show();
        });
    });
    tabs1.each(function () {
        var tab1=$(this),
            menu1=tab1.find(".menu li"),
            content1=tab1.find(".content>div");
        menu1.click(function () {
            var me1=$(this),
                index1=me1.index();
            menu1.removeClass("active");
            me1.addClass("active");
            content1.hide();
            content1.eq(index1).show();
        })
    })
});