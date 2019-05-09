$(window).load(function() {

    var newsrc1 = 1,
        newsrc2 = 1,
        newsrc3 = 1,
        hide = 1;

    function playSound(i){
        var id = ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10', '#11', '#12', '#13', '#14', '#15'];
        var track = ['#audio1', '#audio2', '#audio3', '#audio4', '#audio5', '#audio6', '#audio7', '#audio8', '#audio9', '#audio10', '#audio11', '#audio12', '#audio13', '#audio14', '#audio15'];
         
        $(id[i]).click(function(){ 
             $(track[i])[0].play();
        });      
    } 
    
    function loopThroughAudio(){
        for (var i =0; i <= 14; i++){
           playSound(i);
        }
    } 

    function changeImage() {   
        $('#orbit1').click(function(){   
            if ( newsrc1 === 1 ) {
            $('#orbit1').attr("src","img/lol-pizza.gif");
            newsrc1  = 2;
            } else {
            $('#orbit1').attr("src","img/lol-hotdog.gif");
            newsrc1  = 1;
            }
        }); 
        $('#orbit2').click(function(){   
            if ( newsrc2 == 1 ) {
            document.images["orbit2"].src = "img/lol-x.gif";
            newsrc2  = 2;
            } else {
            document.images["orbit2"].src = "img/lol-taco.gif";
            newsrc2  = 1;
            }
        });
        $('#orbit3').click(function(){   
            if ( newsrc3 == 1 ) {
            document.images["orbit3"].src = "img/lol-icecream.gif";
            newsrc3  = 2;
            } else {
            document.images["orbit3"].src = "img/lol-burger.gif";
            newsrc3  = 1;
            }
        });         
    }

    function toggleTweetTicker() {
        $("img[src='img/lol-trophy.gif']").click(function(){
            if ( hide === 1) {
            $('#tweetticker1').addClass('hidden'); 
            $('#bells6')[0].play();
            hide = 2;   
            } else if ( hide === 2) {
            $('#tweetticker2').addClass('hidden');
            $('#bells11')[0].play();
            hide = 3;    
            } else if ( hide === 3) {
            $('#tweetticker3').addClass('hidden'); 
            $('#bells10')[0].play();
            hide = 4;   
            } else if ( hide === 4) {
            $('#tweetticker4').addClass('hidden');
            $('#audio16')[0].play(); 
            hide = 5;  
            } else if ( hide === 5) {
            $('#tweetticker1, #tweetticker2, #tweetticker3, #tweetticker4').removeClass('hidden');
            $('#bells5')[0].play();
            hide = 1;     
            }  
        });
    }

    $(".audio-mixer div").each(function() {
        $(this).circulate({
            speed: Math.floor(Math.random()*300) + 100,
            height: Math.floor(Math.random()*1000) - 470,
            width: Math.floor(Math.random()*1000) - 470
        });
    }).click(function() {
        $(this).circulate({
            speed: Math.floor(Math.random()*300) + 100,
            height: Math.floor(Math.random()*1000) - 470,
            width: Math.floor(Math.random()*1000) - 470
        });
    });
        
    $("#lol").click(function() {
        if ($(this).text() == "LOL") {
            $("#spinning-text span").circulate({
                loop: true,
                width: 650,
                height: 10
            });
            $(this).text("LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOL");
            $('#audio16')[0].play();
        } else {
            $("#spinning-text span").circulate("Stop");
            $(this).text("LOL");
        }       
    });   
    
     $("#bff").click(function() {
        if ($(this).text() == "BFF") {
            $('#audio17')[0].play();
            $(this).text("BROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
        } else {
            $(this).text("BFF");
        }       
    }); 

    $("#wtf").click(function() {
       $('#audio14')[0].play();           
    }); 

    $("#prize").css("left", $("#prize").position().left).circulate({
            sizeAdjustment: 160,
            speed: 2000,
            width: -820,
            height: 50,
            loop: true,
            zIndexValues: [1, 50, 50, 1]
    });

    function startOrbitOne() {
        $("#orbit1").circulate({
            speed: 4000,
            height: 100,
            width: -700,
            sizeAdjustment: 40,
            loop: true,
            zIndexValues: [1, 1, 3, 3]
        });
    }
    
    function startOrbitTwo() {
        $("#orbit2").circulate({
            speed: 4000,
            height: 120,
            width: -700,
            sizeAdjustment: 35,
            loop: true,
            zIndexValues: [2, 2, 2, 2]
        })
    }
    
    function startOrbitThree() {
        $("#orbit3").circulate({
            speed: 4000,
            height: 140,
            width: -700,
            sizeAdjustment: 30,
            loop: true,
            zIndexValues: [3, 3, 1, 1]
        }).fadeIn();
    }
            
    loopThroughAudio();
    changeImage();  
    toggleTweetTicker();      
    startOrbitOne();
    setTimeout(startOrbitTwo, 2000);
    setTimeout(startOrbitThree, 4000);
 
 
   // function swapReplace(){
   //      $("img[src='img/lol-hotdog.gif']").click(function () {
   //          $('#orbit1').attr("src","img/lol-pizza.gif");
   //      });
   //      $('#sphere-area img').click(function(){
   //          $('#orbit2').attr('src', 'img/lol-x.gif');
   //      });
   //      $('#orbit3').click(function(){
   //          $(this).attr('src', 'img/lol-icecream.gif');
   //      });
   //  } 
    
});

