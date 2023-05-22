var avatarScore = 0
var nameScore = 0;
var telScore = 0
var imageScore = 0;
var videoScore = 0

function verifScore (){
    console.log(nameScore+imageScore+videoScore+telScore+avatarScore)
    if( nameScore+imageScore+videoScore+telScore+avatarScore == 440){
        document.querySelector('.boutonLevel').disabled = false;
    } else {
        document.querySelector('.boutonLevel').disabled = true;
    }
}

const changeAvatar = () => {
window.URL = window.URL || window.webkitURL || window.mozURL;
document.getElementById('file').onchange = function() {
    var url2 = URL.createObjectURL(this.files[0]);
    document.getElementById('avatar').src=  url2;

    if(document.getElementById('avatar').src.slice(-14) == "headAvatar.png") {
        avatarScore = 0;
        document.querySelector('.mask').style.width=  `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
    } else {
        avatarScore = (440/5)
        document.querySelector('.mask').style.width=  `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
    }
    verifScore()
};
}

const getVideo = () => {
window.URL = window.URL || window.webkitURL || window.mozURL;
    document.getElementById('file1').onchange = function() {
        var url = URL.createObjectURL(this.files[0]);
        document.getElementById('inputVideo').src = url;
        document.getElementById('labelVideo').innerHTML= document.getElementById('file1').value.slice(12)

        if(document.getElementById('inputVideo').src.length == 0) {
            document.getElementById('iconText').style.backgroundColor=  "#2d3436"
            videoScore = 0;
            document.querySelector('.mask').style.width= `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
        } else {
            document.getElementById('inputVideo').src.length > 0
            videoScore = (440/5)
            document.querySelector('.mask').style.width=  `${nameScore+imageScore+videoScore+telScore+avatarScore}px` 
        }
        verifScore()
    };
}


const getImage = () => {
window.URL = window.URL || window.webkitURL || window.mozURL;
document.getElementById('file2').onchange = function() {
    var url2 = URL.createObjectURL(this.files[0]);
    document.getElementById('inputImage').src=  url2;
    document.getElementById('labelImage').innerHTML= document.getElementById('file2').value.slice(12)
    if(document.getElementById('inputImage').src.slice(-11) == "joe-doe.jpg") {
        document.getElementById('iconText').style.backgroundColor=  "#2d3436"
        imageScore = 0;
        document.querySelector('.mask').style.width = `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
    } else {
        imageScore = (440/5)
        document.querySelector('.mask').style.width = `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
    }
    verifScore()          
};  
}

const deleteImg = () => {
    document.getElementById('inputImage').src = "./video/joe-doe.jpg";
    imageScore = 0;
    document.querySelector('.mask').style.width = `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
    document.getElementById('labelImage').textContent = "Select an image"
    verifScore()
}

const deleteVid = () => {
    document.getElementById('inputVideo').src = "./video/times-square.mp4";
    videoScore = 0;
    document.querySelector('.mask').style.width = `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
    document.getElementById('labelVideo').textContent = "Select a video"
    verifScore()
}


const getName = () => {
    var name = document.getElementById('inputText').value;
    if(name.length > 8){
        name = name.substring(0, 8) + "..."
    }
    document.getElementById('title').textContent=  "👋  " + name;
    document.getElementById('iconText').src= "./video/hello.png";
    document.getElementById('iconText').style.backgroundColor=  "#3ae374";
        if(name !== ""){
            nameScore=(440/5)
            document.querySelector('.mask').style.width = `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
        } else {
            document.getElementById('iconText').style.backgroundColor=  "#2d3436"
        nameScore = 0;
        document.getElementById('title').textContent=  "Nice Inputs";
        }
    document.querySelector('.mask').style.width=  `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
    verifScore()
}

const getPhone = () => {
    var phone = document.getElementById('inputTel').value;
    if(phone.substring(0,2) == '06'){
        document.getElementById('iconTel').src=  "./video/iphone.png";
        document.getElementById('iconTel').style.backgroundColor=  "#3ae374";
    } else {
        document.getElementById('iconTel').src=  "./video/old-phone.png";
        document.getElementById('iconTel').style.backgroundColor=  "#3ae374"
    }
    if(phone == "") {
        document.getElementById('iconTel').style.backgroundColor=  "#2d3436";
        telScore = 0;
    } else {
        if(phone !== ""){
            telScore=(440/5)
            document.querySelector('.mask').style.width=  `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
        } else {
            telScore = 0
        }
    }
    document.querySelector('.mask').style.width=  `${nameScore+imageScore+videoScore+telScore+avatarScore}px`
    verifScore();
}

function loadData(){
    document.getElementById('container').style.display = "none";
    document.getElementById('thanks').style.display = "flex";
    document.getElementById('thanksMessage').style.display = "flex";
}

function anotherMessage(){
    location.reload();
}