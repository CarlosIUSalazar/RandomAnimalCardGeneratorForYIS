function display_random_image() 
{
     var theImages = [{
        src: "./img/1Octopus.png",
        //width: "240",
        //height: "160"
    }, {
        src: "./img/2Squirrel.png",
    }, {
        src: "./img/3Pig.png",
    }, {
        src: "./img/4Monkey.png",
    }, {
        src: "./img/5Elephant.png",
    }, {
        src: "./img/6Cat.png",
    }, {
        src: "./img/7Penguin.png",
    }, {
        src: "./img/8Crab.png",
    }, {
        src: "./img/9Snake.png",
    }, {
        src: "./img/10Horse.png",
    }, {
        src: "./img/11Lion.png",
    }, {
        src: "./img/12Lion2.png",
    }, {
        src: "./img/13Giraffe.png",
    }, {
        src: "./img/14Hippo.png",
    }, {
        src: "./img/15Alligator.png",
    }, {
        src: "./img/16Bear.png",
    }, {
        src: "./img/17Elephant.png",
    }, {
        src: "./img/18Monkey.png",
    }, {
        src: "./img/19Snake.png",
    }, {
        src: "./img/20Tiger.png",
    } 
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