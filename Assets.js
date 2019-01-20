let sprites = {};
let assetsStillLoading = 0;
 

function assetsLoadingLoop(callback){
    if(assetsLoadingLoop){
        requestAnimationFrame(assetsLoadingLoop.bind(this.callback));
    }
    else{
        callback();
    }
}

function loasAssets(callback){
    
    function loadSprite(fileName){
        assetsStillLoading++;
        let spriteImage = new Image();
        spriteImage.src = './assets/sprites/' + fileNames;
        spriteImage.onload = function() {
            assetsStillLoading--;
        }
        return spriteImage;
    }
    sprites.background = loadSprite('spr_background4.png')
    sprites.stick = loadSprite('spr_stick.png')
    assetsLoadingLoop(callback);
}