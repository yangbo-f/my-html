window.onload=function(){
//确保HTML加载完后再加载js
    var myImage = document.querySelector('img');
    //获取图片这个对象，然后把图片放到myImage这个变量里
    myImage.onclick = function(){
    //myImage的点击事件
        var mySrc = myImage.getAttribute('src');
        //myImage的图片路径就是变量mySrc的路径
        if(mySrc === 'images/2.jpg'){
        //如果mySrc的路径是‘images/2.jpg’
            myImage.setAttribute('src','images/3.jpg');
            //myImage的路径就变为‘images/3.jpg’
            //alert('我被点击了');
        }else{
            myImage.setAttribute('src','images/2.jpg');
            //如果myImage的路径不是‘images/2.jpg’，则把myImage的路径变为‘images/2.jpg’
        }
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = '欢迎你,' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome,' + storedName;
}

myButton.onclick = function() {
  setUserName();
}