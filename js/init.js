define(["ajax"],function(ajax){
    function init(){
        var  btn=document.getElementById("btn");
        var inputs=document.getElementsByTagName("input");
        btn.onclick=function(){
            ajax.ajax({
                method:"get",
                url:"1.php",
                data:{
                    username:inputs[0].value,
                    password:inputs[1].value
                },
                success:function(data){
                    var obj=JSON.parse(data);
                    alert(obj.message);
                },
                error:function(msg){
                    alert(msg);
                }
            });
        }
    }

    return {
        init:init
    };
});