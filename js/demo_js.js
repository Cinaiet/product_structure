/**
 * Created by Administrator on 2017/10/25.
 */


$(document).ready(function () {
    var data = [
        {name:'1'},
        {name:'2'}
    ];

    var tpl = $('#con-tmp').html();
    var cmp = Handlebars.compile(tpl);

    $('#content').html(cmp(data));
});