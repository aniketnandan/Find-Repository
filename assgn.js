function loadrepo(){
  var xhr;
  if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest();
  }
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
     // var jobj=eval("("+xhr.responseText+")");
     // var item=jobj.items[0].id;
      var item=JSON.parse(xhr.responseText).items[0].owner.avatar_url;
      document.querySelector(".div1").innerHTML="<a href='"+item+"'>Hello</a>";

    }
  }
  var val=document.querySelector("#repo_name").value;
  xhr.open("GET","https://api.github.com/search/repositories?q="+val,true);
  xhr.send();
}
