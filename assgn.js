function loadrepo(){
  var xhr;
  if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest();
  }
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
     // var jobj=eval("("+xhr.responseText+")");
     // var item=jobj.items[0].id;
      var json_parse=JSON.parse(xhr.responseText).items[0];
      var link_photo=json_parse.owner.avatar_url;
      var login=json_parse.owner.login;
      var repos_url="<a href='"+json_parse.owner.repos_url+"'>Repository URL</a>";
      var link_repo="<a href='https://github.com/"+login+"'>Repository Link</a>";
      var image="<img src="+link_photo+" height:'10px' width:'10px'>";
      document.querySelector(".div1").innerHTML=image;
      document.querySelector(".div2").innerHTML=link_repo;
      document.querySelector("#div3").innerHTML=repos_url;

    }
  }
  var val=document.querySelector("#repo_name").value;
  xhr.open("GET","https://api.github.com/search/repositories?q="+val,true);
  xhr.send();
}
