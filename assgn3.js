function loadrepo(url){
  console.log("1");
  return new Promise(function(t,f){
    var xhr;
    if(window.XMLHttpRequest){
      xhr=new XMLHttpRequest();
    }
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4 && xhr.status==200){
        console.log("1");
        t(JSON.parse(xhr.responseText).items[0]);
      }
    }
    xhr.onerror=function(){
      console.log("2");
      f("Error in finding!");
    }
  })

  xhr.open("GET", url, true);
  xhr.send();
}


var val = $("#repo_name").val();
loadrepo("https://api.github.com/search/repositories?q="+val)
  .then(function(res){console.log("23")}, function(res){console.log(res)});
