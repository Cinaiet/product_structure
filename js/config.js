/**
 * Created by Administrator on 2017/10/25.
 */


(function (w) {
    var apiHost='http://www.jhjvip.cn:8080';
    //var apiHost=' http://192.168.199.107:8081';
    //var apiHost=' http://192.168.199.104:8080';


    //配置项
    w.C={};
    //域名
    C.host=apiHost+'/mall/mobile/';

    //分享出去的url
    //C.share='http://192.168.199.200:3000/git/huifaShop/html/share_red_package.html';
    C.share='http://www.jhjvip.cn/gzh/html/share_red_package.html';

    //是否开启打印日志
    C.debug=true;
    //是否正在维护
    C.isWeihu=false;
    //手机验证正则
    C.phoneReg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    //邮箱验证正则
    C.emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    //安全码验证正则
    C.selfNumberReg = /^[0-9a-zA-Z]{8,16}$/;
    //发送验证码时间
    C.putCodeTime=60;


    //var token='2017091814287384479dc2fcbc776c4e34a1d9f9ad2b297b9d';
    //localStorage.setItem('token','20171011120297519793da493ee2884b22b6ed8da1921679ae');
    C.token=localStorage.getItem('token');

    //强制刷新当前页面
    C.version=Math.random();

    //接口
    C.interface={
        //折扣商城
        discount:'product/index'
    };
    //组合接口地址
    for (k in C.interface){
        C.interface[k]=C.host + C.interface[k];
    }


})(window);