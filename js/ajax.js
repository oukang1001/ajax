define(function(){
    function ajax({method="get",url, data,success,error}){
        var xhr;
        try{
            xhr=new XMLHttpRequest();
        }catch(e){
            xhr=new ActiveXObject("Microsoft.XMLHTTP");
        }
        if(method=="get"&&data){
            url+="?"+this.toInquireString(data);
        }
        xhr.open(method,url,true);
        xhr.onreadystatechange=function(){
            if(this.readyState==4){
                if(this.status==200){
                    success(this.responseText);
                }else{
                    error(this.status);
                }
            }
        }
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        if(method=="post"&&data){
            xhr.send(toInquireString(data));
        }else{
            xhr.send();
        }
        
    }
    function toInquireString(data){
        var str="";
        for(let i in data){
            str+=i+"="+data[i]+"&";
        }
        str=str.substring(0,str.length-1);
        return str;
    }
    return {
        ajax:ajax,
        toInquireString:toInquireString
    };
});