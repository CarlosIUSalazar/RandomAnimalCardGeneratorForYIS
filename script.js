function display_random_image() 
{
     var theImages = [{
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/1Bored.png",
        //width: "240",
        //height: "160"
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/2Joyful.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/3Worried.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/4Peaceful.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/5Fearful.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/6Mad.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/7Proud.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/8Polite.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/9Boastful.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/10Enthusiastic.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/11Tired.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/12Nervous.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/13Confused.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/14Excited.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/15Humorous.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/16Surprised.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/17Disgusted.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/18Silly.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/19Anxious.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/20Sad.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/21Rude.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/22Mysterious.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/23Angry.png",
    }, {
        src: "https://icarlospro.com/wp-content/RandomCommotionCards/img/24Annoyed.png",
    }, 
];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        //preBuffer[i].width = theImages[i].width;
        //preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
//document.body.appendChild(newImage);

document.querySelector(".target").appendChild(newImage)

}


// https://icarlospro.com/wp-content/RandomCommotionCards/img/1Bored.png
// https://icarlospro.com/wp-content/RandomCommotionCards/img/2Joyful.png
// https://icarlospro.com/wp-content/RandomCommotionCards/img/3Worried.png


// #wordbox {
//     /*opacity: 0;*/
//     margin: 30px auto 0;
//     display: block;
//     width: 300px;
//     height: 40px;
//     font-size: 30px;
//     text-align: center;
//     background: #fff;
//     border-radius: 6px;
//     color: black;
//     transition: 1s linear;
// }