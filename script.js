var winheight = 0;
var winwidth = 0;
var wintop = 0;
var winleft = 0;

var overlayDrawn = false;

window.addEventListener("load", function(){
    console.log("Hello AstroWorld");
    //wintop = document.getElementById('bginfo').offsetTop;
    //winleft = document.getElementById('bginfo').offsetLeft;
    winheight = document.body.clientHeight;
    winwidth = document.body.clientWidth;
    console.log("Height: " + winheight);
    console.log("Width: " + winwidth);
    console.log("Top: " + wintop);
    console.log("Left: " + winleft);

    if(winheight > winwidth){
        //This ls a vertical screen
        drawDarkOverlay();
        
    }

    //Booth A - Info
    var boothWinA = document.createElement('img');
    boothWinA.setAttribute('src', "/window-off/A-window-off.png");
    boothWinA.setAttribute('class','overlays');
    boothWinA.height = Math.round(88*(winheight/1080)+1);
    boothWinA.width = Math.round(184*(winwidth/1920));
    boothWinA.style.left = Math.round((176*(winwidth/1920))-0) + "px";
    boothWinA.style.top = Math.round((640*(winheight/1080))-0) + "px";
    boothWinA.style.cursor = "pointer";
    document.body.appendChild(boothWinA);
    boothWinA.addEventListener("mouseover", function() {
        boothWinA.setAttribute('src', '/window-on/A-window-on.png');
    });
    boothWinA.addEventListener("mouseleave", function() {
        boothWinA.setAttribute('src', "/window-off/A-window-off.png");
    });

    var boothA = document.createElement('img');
    boothA.setAttribute('src', "/booth/A.png");
    boothA.setAttribute('class','overlays');
    boothA.height = Math.round(104*(winheight/1080));
    boothA.width = Math.round(208*(winwidth/1920)+0);
    boothA.style.left = Math.round((160*(winwidth/1920))-0) + "px";
    boothA.style.top = Math.round((720*(winheight/1080))-0) + "px";
    boothA.style.cursor = "pointer";
    document.body.appendChild(boothA);
    boothA.addEventListener("mouseover", function() {
        boothWinA.setAttribute('src', '/window-on/A-window-on.png');
    });

    boothA.addEventListener("mouseleave", function() {
        boothWinA.setAttribute('src', "/window-off/A-window-off.png");
    });

    //Booth B - NFT
    var boothWinB = document.createElement('img');
    boothWinB.setAttribute('src', "/window-off/B-window-off.png");
    boothWinB.setAttribute('class','overlays');
    boothWinB.height = Math.round(88*(winheight/1080)+1);
    boothWinB.width = Math.ceil(160*(winwidth/1920));
    boothWinB.style.left = Math.round((544*(winwidth/1920))-0) + "px";
    boothWinB.style.top = Math.round((640*(winheight/1080))-0) + "px";
    document.body.appendChild(boothWinB);
    boothWinB.addEventListener("mouseover", function() {
        boothWinB.setAttribute('src', '/window-on/B-window-on.png');
    });
    boothWinB.addEventListener("mouseleave", function() {
        boothWinB.setAttribute('src', "/window-off/B-window-off.png");
    });

    var boothB = document.createElement('img');
    boothB.setAttribute('src', "/booth/B.png");
    boothB.setAttribute('class','overlays');
    boothB.height = Math.round(96*(winheight/1080));
    boothB.width = Math.round(160*(winwidth/1920));
    boothB.style.left = Math.round((544*(winwidth/1920))-0) + "px";
    boothB.style.top = Math.round((728*(winheight/1080))-0) + "px";
    document.body.appendChild(boothB);
    boothB.addEventListener("mouseover", function() {
        boothWinB.setAttribute('src', '/window-on/B-window-on.png');
    });

    boothB.addEventListener("mouseleave", function() {
        boothWinB.setAttribute('src', "/window-off/B-window-off.png");
    });

     //Booth C - Enter
     var boothWinC = document.createElement('img');
     boothWinC.setAttribute('src', "/window-off/C-window-off.png");
     boothWinC.setAttribute('class','overlays');
     boothWinC.height = Math.round(88*(winheight/1080)+1);
     boothWinC.width = Math.round(160*(winwidth/1920));
     boothWinC.style.left = Math.round((872*(winwidth/1920))-0) + "px";
     boothWinC.style.top = Math.round((640*(winheight/1080))-0) + "px";
     boothWinC.style.cursor = "pointer";
     document.body.appendChild(boothWinC);
     boothWinC.addEventListener("mouseover", function() {
         boothWinC.setAttribute('src', '/window-on/C-window-on.png');
     });
     boothWinC.addEventListener("mouseleave", function() {
         boothWinC.setAttribute('src', "/window-off/C-window-off.png");
     });
 
     var boothC = document.createElement('img');
     boothC.setAttribute('src', "/booth/C.png");
     boothC.setAttribute('class','overlays');
     boothC.height = Math.round(96*(winheight/1080));
     boothC.width = Math.round(160*(winwidth/1920));
     boothC.style.left = Math.round((872*(winwidth/1920))-0) + "px";
     boothC.style.top = Math.round((728*(winheight/1080))-0) + "px";
     boothC.style.cursor = "pointer";
     document.body.appendChild(boothC);
     boothC.addEventListener("mouseover", function() {
         boothWinC.setAttribute('src', '/window-on/C-window-on.png');
     });
 
     boothC.addEventListener("mouseleave", function() {
         boothWinC.setAttribute('src', "/window-off/C-window-off.png");
     });

    //Booth D - Parks
    var boothWinD = document.createElement('img');
    boothWinD.setAttribute('src', "/window-off/D-window-off.png");
    boothWinD.setAttribute('class','overlays');
    boothWinD.height = Math.round(88*(winheight/1080)+1);
    boothWinD.width = Math.round(184*(winwidth/1920));
    boothWinD.style.left = Math.round((1184*(winwidth/1920))-0) + "px";
    boothWinD.style.top = Math.round((640*(winheight/1080))-0) + "px";
    document.body.appendChild(boothWinD);
    boothWinD.addEventListener("mouseover", function() {
        boothWinD.setAttribute('src', '/window-on/D-window-on.png');
    });
    boothWinD.addEventListener("mouseleave", function() {
        boothWinD.setAttribute('src', "/window-off/D-window-off.png");
    });
    
    var boothD = document.createElement('img');
    boothD.setAttribute('src', "/booth/D.png");
    boothD.setAttribute('class','overlays');
    boothD.height = Math.round(104*(winheight/1080));
    boothD.width = Math.round(208*(winwidth/1920));
    boothD.style.left = Math.round((1176*(winwidth/1920))-0) + "px";
    boothD.style.top = Math.round((720*(winheight/1080))-0) + "px";
    document.body.appendChild(boothD);
    boothD.addEventListener("mouseover", function() {
        boothWinD.setAttribute('src', '/window-on/D-window-on.png');
    });

    boothD.addEventListener("mouseleave", function() {
        boothWinD.setAttribute('src', "/window-off/D-window-off.png");
    });

  
    //Trash Can
    var bin = document.createElement('img');
    bin.setAttribute('src', "/bin.png");
    bin.setAttribute('class','overlays2');
    bin.height = Math.round(104*(winheight/1080));
    bin.width = Math.round(64*(winwidth/1920));
    bin.style.left = Math.round((1152*(winwidth/1920))-0) + "px";
    bin.style.top = Math.round((736*(winheight/1080))-0) + "px";
    document.body.appendChild(bin);

    //Booth E - About
    var boothWinE = document.createElement('img');
    boothWinE.setAttribute('src', "/window-off/E-window-off.png");
    boothWinE.setAttribute('class','overlays');
    boothWinE.height = Math.round(88*(winheight/1080)+1);
    boothWinE.width = Math.round(208*(winwidth/1920));
    boothWinE.style.left = Math.round((1480*(winwidth/1920))-0) + "px";
    boothWinE.style.top = Math.round((640*(winheight/1080))-0) + "px";
    boothWinE.style.cursor = "pointer";
    document.body.appendChild(boothWinE);
    boothWinE.addEventListener("mouseover", function() {
        boothWinE.setAttribute('src', '/window-on/E-window-on.png');
    });
    boothWinE.addEventListener("mouseleave", function() {
        boothWinE.setAttribute('src', "/window-off/E-window-off.png");
    });

    var boothE = document.createElement('img');
    boothE.setAttribute('src', "/booth/E.png");
    boothE.setAttribute('class','overlays');
    boothE.height = Math.round(104*(winheight/1080));
    boothE.width = Math.round(232*(winwidth/1920));
    boothE.style.left = Math.round((1472*(winwidth/1920))-0) + "px";
    boothE.style.top = Math.round((720*(winheight/1080))-0) + "px";
    boothE.style.cursor = "pointer";
    document.body.appendChild(boothE);
    boothE.addEventListener("mouseover", function() {
        boothWinE.setAttribute('src', '/window-on/E-window-on.png');
    });

    boothE.addEventListener("mouseleave", function() {
        boothWinE.setAttribute('src', "/window-off/E-window-off.png");
    });

    boothWinA.setAttribute("id", "boothWinA");
    boothWinB.setAttribute("id", "boothWinB");
    boothWinC.setAttribute("id", "boothWinC");
    boothWinD.setAttribute("id", "boothWinD");
    boothWinE.setAttribute("id", "boothWinE");

    boothA.setAttribute("id", "boothA");
    boothB.setAttribute("id", "boothB");
    boothC.setAttribute("id", "boothC");
    boothD.setAttribute("id", "boothD");
    boothE.setAttribute("id", "boothE");
    
    bin.setAttribute("id", "bin");


    boothA.addEventListener("click", AClick);
    boothWinA.addEventListener("click", AClick);

    boothE.addEventListener("click", EClick);
    boothWinE.addEventListener("click", EClick);

    boothC.addEventListener("click", CClick);
    boothWinC.addEventListener("click", CClick);


});

function AClick(){
    window.open("https://t.me/astroworlddefi");
}

function BClick(){

}
function CClick(){
    drawDarkOverlay();
}
function DClick(){

}

function EClick(){
    window.open("https://twitter.com/AstroworldDeFi");
}

window.addEventListener('resize', function(event) {
    console.log("RESIZE DETECTED!")
    winheight = document.body.clientHeight;
    winwidth = document.body.clientWidth;
    console.log("Height: " + winheight);
    console.log("Width: " + winwidth);
    console.log("Top: " + wintop);
    console.log("Left: " + winleft);

    var boothWinA = document.getElementById("boothWinA");
    var boothWinB = document.getElementById("boothWinB");
    var boothWinC = document.getElementById("boothWinC");
    var boothWinD = document.getElementById("boothWinD");
    var boothWinE = document.getElementById("boothWinE");

    var boothA = document.getElementById("boothA");
    var boothB = document.getElementById("boothB");
    var boothC = document.getElementById("boothC");
    var boothD = document.getElementById("boothD");
    var boothE = document.getElementById("boothE");

    var bin = document.getElementById("bin");

    boothWinA.height = Math.round(88*(winheight/1080)+1);
    boothWinA.width = Math.round(184*(winwidth/1920));
    boothWinA.style.left = Math.round((176*(winwidth/1920))-0) + "px";
    boothWinA.style.top = Math.round((640*(winheight/1080))-0) + "px";

    boothA.height = Math.round(104*(winheight/1080));
    boothA.width = Math.round(208*(winwidth/1920)+0);
    boothA.style.left = Math.round((160*(winwidth/1920))-0) + "px";
    boothA.style.top = Math.round((720*(winheight/1080))-0) + "px";

    boothWinB.height = Math.round(88*(winheight/1080)+1);
    boothWinB.width = Math.ceil(160*(winwidth/1920));
    boothWinB.style.left = Math.round((544*(winwidth/1920))-0) + "px";
    boothWinB.style.top = Math.round((640*(winheight/1080))-0) + "px";

    boothB.height = Math.round(96*(winheight/1080));
    boothB.width = Math.round(160*(winwidth/1920));
    boothB.style.left = Math.round((544*(winwidth/1920))-0) + "px";
    boothB.style.top = Math.round((728*(winheight/1080))-0) + "px";

    boothWinC.height = Math.round(88*(winheight/1080)+1);
    boothWinC.width = Math.round(160*(winwidth/1920));
    boothWinC.style.left = Math.round((872*(winwidth/1920))-0) + "px";
    boothWinC.style.top = Math.round((640*(winheight/1080))-0) + "px";

    boothC.height = Math.round(96*(winheight/1080));
    boothC.width = Math.round(160*(winwidth/1920));
    boothC.style.left = Math.round((872*(winwidth/1920))-0) + "px";
    boothC.style.top = Math.round((728*(winheight/1080))-0) + "px";

    boothWinD.height = Math.round(88*(winheight/1080)+1);
    boothWinD.width = Math.round(184*(winwidth/1920));
    boothWinD.style.left = Math.round((1184*(winwidth/1920))-0) + "px";
    boothWinD.style.top = Math.round((640*(winheight/1080))-0) + "px";

    boothD.height = Math.round(104*(winheight/1080));
    boothD.width = Math.round(208*(winwidth/1920));
    boothD.style.left = Math.round((1176*(winwidth/1920))-0) + "px";
    boothD.style.top = Math.round((720*(winheight/1080))-0) + "px";

    boothWinE.height = Math.round(88*(winheight/1080)+1);
    boothWinE.width = Math.round(208*(winwidth/1920));
    boothWinE.style.left = Math.round((1480*(winwidth/1920))-0) + "px";
    boothWinE.style.top = Math.round((640*(winheight/1080))-0) + "px"

    boothE.height = Math.round(104*(winheight/1080));
    boothE.width = Math.round(232*(winwidth/1920));
    boothE.style.left = Math.round((1472*(winwidth/1920))-0) + "px";
    boothE.style.top = Math.round((720*(winheight/1080))-0) + "px";

    bin.height = Math.round(104*(winheight/1080));
    bin.width = Math.round(64*(winwidth/1920));
    bin.style.left = Math.round((1152*(winwidth/1920))-0) + "px";
    bin.style.top = Math.round((736*(winheight/1080))-0) + "px";
}, true);

document.addEventListener("mousewheel", this.mousewheel.bind(this), { passive: false });

function drawDarkOverlay(){
    winheight = document.body.clientHeight;
    winwidth = document.body.clientWidth;

    if(!overlayDrawn){
        var dimOverlay = document.createElement('img');
        dimOverlay.setAttribute('src', "/overlayBlack.png");
        dimOverlay.setAttribute('class','overlays3');
        dimOverlay.style.opacity = "0.5";
        dimOverlay.style.filter  = 'alpha(opacity=50)'; // IE fallback
        dimOverlay.height = winheight
        dimOverlay.width = winwidth
        dimOverlay.style.left = "0px";
        dimOverlay.style.top = "0px";
        document.body.appendChild(dimOverlay);
        dimOverlay.setAttribute("id", "dimOverlay");
        dimOverlay.addEventListener("click", function() {
            document.body.removeChild(dimOverlay);
            overlayDrawn = false;
        });
        overlayDrawn = true; 
    }else{
        console.log("Overlay already Drawn! ")
    }
}