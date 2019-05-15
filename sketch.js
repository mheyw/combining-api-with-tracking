var feedArray
var img
var imgLoaded
function preload()
{
    var dmUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=daily-mail&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var buzzUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=buzzfeed&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var ftUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=financial-times&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var foxUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=fox-news&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var metroUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=metro&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var mtvUrl = 'https://newsapi.org/v2/everything?' + 
        'sources=mtv-news&' + 
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var guardUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=the-guardian-uk&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'
    var redditUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=reddit-r-all&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'
    var mirrorUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=mirror&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'
    var ladBUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=the-lad-bible&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'
    var bbcUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=bbc-news&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'
    var cryptoUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=crypto-coins-news&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'
    var biUrl = 'https://newsapi.org/v2/top-headlines?'+
        'sources=business-insider-uk&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'
    var trumpUrl = 'https://newsapi.org/v2/everything?' +
        'q=Trump&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var brexitUrl = 'https://newsapi.org/v2/everything?' +
        'q=Brexit&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var russiaUrl = 'https://newsapi.org/v2/everything?' +
        'q=Russia&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var rightsUrl = 'https://newsapi.org/v2/everything?' +
        'q=Rights&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var breitUrl = 'https://newsapi.org/v2/everything?'+
        'sources=breitbart-news&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'
    var viceUrl = 'https://newsapi.org/v2/everything?'+
        'sources=vice-news&'+
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'
    var xUrl = 'https://newsapi.org/v2/everything?' +
        'q=Porn&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var socialUrl = 'https://newsapi.org/v2/everything?' +
        'q=Social&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var stabUrl = 'https://newsapi.org/v2/everything?' +
        'q=Stabbing&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var cambUrl = 'https://newsapi.org/v2/everything?' +
        'q=fake-news&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var justiceUrl = 'https://newsapi.org/v2/everything?' +
        'q=crime&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb';
    var darkUrl = 'https://newsapi.org/v2/everything?' +
        'q=dark-web&' +
        'sortBy=popularity&' +
        'apiKey=e2c1ab9a6eb34b68b3ad92daf3284ffb'

    feedArray = [loadJSON(dmUrl),loadJSON(buzzUrl),loadJSON(ftUrl),loadJSON(foxUrl),loadJSON(metroUrl),loadJSON(mtvUrl),loadJSON(guardUrl),loadJSON(redditUrl),loadJSON(mirrorUrl),loadJSON(mirrorUrl),loadJSON(ladBUrl),loadJSON(bbcUrl),loadJSON(cryptoUrl),loadJSON(biUrl),loadJSON(breitUrl),loadJSON(viceUrl)]
}

function setup()
{   
    imgLoaded = false
    createCanvas(1280,800);
    background(255);
    noCursor();
    setTimeout(imgLoad,100);
}
function draw()
{
    if(imgLoaded == true){
        image(img,faceX+faceW/2+random(0,10),faceY+faceH/2+random(0,10),img.width*15/faceW,img.height*15/faceH);
    }
}
function imgLoad(){
    //Loads image from webApi
    try{
        loadImage(
            feedArray[int(random(0,feedArray.length))]
            .articles[int(random(0,10))]
            .urlToImage,//path
            function(pic){ //success
                print(img=pic); 
            },
            loadImageErrorOverride);// failure
    } catch (e)
    {

    }
    displayImg();
    redraw();
    setTimeout(imgLoad,1);
}
function displayImg(){
    //Draws image on screen at position of detected face
    try{
        image(img,faceX+faceW/2,faceY+faceH/2,img.width*15/faceW,img.height*15/faceH);
        imgLoaded = true
    } catch (e)
    {
        imgLoaded = false  
    }
}
function loadImageErrorOverride(_errEvt){
    //Forces images to load avoiding CORS problems
    try{
        const pic = _errEvt.target;
        if(!pic.crossOrigin)
            return print('Failed to reload ' + pic.src + '!');
        print('Attempting to reload it as a tainted image now...');
        pic.crossOrigin = null, img.src = pic.src;
    } catch (e)
    {

    }
}