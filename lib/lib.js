/**
 * Created by wgw on 2017/10/25.
 */

;(function (window , document) {

    //版本号 暂时用随机数 上线后用固定值
    //var _version = Math.random();
    var _version = 20170110-1;
    /**
     * 加载文件
     */
    window.includeFile = function(file){
        var files = typeof file == "string" ? [file]:file;
        for (var i = 0; i < files.length; i++) {
            var name = files[i].replace(/^\s|\s$/g, "");
            var att = name.split('.');
            var ext = att[att.length - 1].toLowerCase();
            var isCSS = ext == "css";
            var tag = isCSS ? "link" : "script";
            var attr = isCSS ? " type='text/css' rel='stylesheet' " : " language='javascript' type='text/javascript' ";
            var link = (isCSS ? "href" : "src") + "='" + name + '?' + _version +"'";
            document.write("<" + tag + attr + link + "></" + tag + ">");
        }
    } ;

    /**
     *  获取当前JS文件路径
     * @returns {*}
     */
    function getJsUrl(){
        var js = document.scripts;
        var jsPath;
        for(var i=0;i<js.length;i++){
            if(js[i].src.indexOf("lib.js") > -1){
                jsPath=js[i].src.substring(0,js[i].src.lastIndexOf("/")) + "/";
            }
        }
        return jsPath;
    };
    var comPath = getJsUrl();

    /**
     * 获取目录 不准确 凑合这用
     * @returns {string}
     */
    function getPath(){
        var url = location.href ;
        var length = url.length > comPath.length ? url.length : comPath.length;
        var deffNum = 0 ;
        for(var i = 0 ; i < length ; i++){
            if(url[i] == '/') deffNum = i + 1 ;
            if(url[i] != comPath[i]){
                break;
            }
        };
        return comPath.substring(0 , deffNum);
    }


    //项目根目录路径
    window._PATH_ = getPath();

    //lib目录
    window._LIBPATH_ = comPath ;

    //加载框架公共文件
    includeFile([comPath + 'css/alert.css', comPath + 'js/jquery-3.0.0.min.js',comPath + 'js/function.js',comPath + 'js/alert.js', comPath + 'js/handlebars-v4.0.10.js']);

    window.onload = function(){
        document.body.addEventListener('touchstart', function () {});
    }
})(window , document);


