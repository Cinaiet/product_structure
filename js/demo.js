/**
 * Created by Administrator on 2017/10/25.
 */

$(document).ready(function () {


    $('#btn').click(function () {
        dialog.tusiSuccess('引入成功');
    });

    $('#error').click(function () {
        dialog.tusiError('失败了');
    });

});