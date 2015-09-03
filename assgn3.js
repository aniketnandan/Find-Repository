function loadrepo(url){
  console.log("1");
  return new Promise(function(t,f){
    var xhr;
    if(window.XMLHttpRequest){
      xhr=new XMLHttpRequest();
    }
    xhr.onload=function(){
      if(xhr.readyState==4 && xhr.status==200){
        console.log("1");
        t(console.log(JSON.parse(xhr.responseText).items[0]));
      }
    }
    xhr.onerror=function(){
      console.log("2");
      var er=new Error("There is an error!");
      f(er);
    }
    xhr.open("GET", url, true);
    xhr.send();
  })
}

var val = document.querySelector("#repo_name").value;
loadrepo("https://api.github.com/search/repositories?q="+val)
  .then(function(res){
    console.log("23");
  },
        function(res){
          alert(res);
        })
  .catch(function(){
    alert("Promise is rejected!");
  })
