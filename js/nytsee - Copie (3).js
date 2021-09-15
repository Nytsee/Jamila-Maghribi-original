  $(function () { // wait for document ready


  $('body').jpreLoader({
    splashID: "#logo_befor_loading",
    splashFunction: function() {
        //passing Splash Screen script to jPreLoader
                               }
  }, function() { //jPreLoader callback function
    InitNiceScroll();
    initScroller();
    if($("#socialBox_header").length){
        TweenMax.staggerFromTo("#socialBox_header .socialElem", 0.4, {opacity:0, y:20}, {opacity:1, y:0}, 0.1);
    }
  });


    
    function isMobile() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return true;
        }
        else {
            return false;
        }
    }


  function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }    

  if(iOS()){
    $(".contentHeader").addClass("iOS-device");
  }


$(window).resize(function(){
  if(!isMobile()){    
    location.reload();
  }
});

function InitNiceScroll(){

var nicesx = $("html").niceScroll({
    touchbehavior:false,
  cursorcolor:"#fff",
  cursoropacitymax:1,
  autohidemode:false,
  cursorborder: "0px solid #fff",
  cursorborderradius: '0px',
  boxzoom:true,
  horizrailenabled:false,
  enabletranslate3d:true,
  smoothscroll: '1000',
  mousescrollstep: 25,
  scrollspeed :100,
  /*background: "#000",*/
  zindex:'99999999',
  cursorwidth: "10px",
    styler:"fb"
  });
}



  $("#menuHamb").click(function(){
    if($(this).find("input").prop('checked')){
      $('body').addClass('navigation_on');
    }else{
      $('body').removeClass('navigation_on');
    }
  })


  $("#mainmenu .menu li").click(function(){
    mainMenu_link = $(this).find("a").attr("href");
    if(mainMenu_link != "#"){      
      document.location.href = mainMenu_link;
    }else{
      return false;
    }
  })

setTimeout(function(){
 //$('body').toggleClass('open');
},2000)


      var card = $("#section_fullVideo_bg");
      var EfX = 200 ;
      var EfY = 200 ;

      card.mousemove(function(e){
         var parentOffset = $(this).offset();
         var relX = ((e.pageX - parentOffset.left) - $(this).innerWidth()/2)/EfX;
         var relY = -((e.pageY - parentOffset.top) - $(this).height()/2)/EfY;
         //console.log(relX);
        $(this).find(".sloganContent").removeClass("cardNotranslate").attr("style", "transform: rotateY("+relX+"deg) rotateX("+relY+"deg);-webkit-transform: rotateY("+relX+"deg) rotateX("+relY+"deg);-moz-transform: rotateY("+relX+"deg) rotateX("+relY+"deg)");
      }).mouseleave(function(){
          $(this).find(".sloganContent").addClass("cardNotranslate")
      })
     


var mghribiOriginal_txt = $("#txtMghribi");
var caracterMghribi = '<span>' + mghribiOriginal_txt.text().split('').join('</span><span>') + '</span>';
mghribiOriginal_txt.empty().html(caracterMghribi)



$('select').formSelect();




var owl = $('.demoApp');
              owl.owlCarousel({
                stagePadding: 0,
                margin: 0,
                nav: false,
                dots:false,
                loop: true,
                autoplay: false,
                onDragged: callback,
                items:3,
                autoHeight:true,
                startPosition:3,
                center: true,
                    responsive:{
                      300:{
                          items:2
                      },                      
                      400:{
                          items:2
                      },
                      700:{
                          items:2
                      },                      
                      1000:{
                          items:5
                      },
                      1200:{
                          items:6
                      }
                    }
               })

            owl.owlCarousel({
                onDragged: callback
            });

            initCTA_demoSlider = $('.demoApp .active.center .item').attr("data-userID");
            $(".to_creations_link a").attr("href","artiste.php?id_cat="+initCTA_demoSlider);


            
            function callback(event) {
                    // Provided by the core
                    /*var element   = event.target;         // DOM element, in this example .owl-carousel
                    var name      = event.type;           // Name of the event, in this example dragged
                    var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
                    var items     = event.item.count;     // Number of items
                    // Provided by the navigation plugin
                    var pages     = event.page.count;     // Number of pages
                    var page      = event.page.index;     // Position of the current page
                    var size      = event.page.size;      // Number of items per page*/
                    var item      = event.item.index;     // Position of the current item
                    $(".item").removeClass("upOpacityItem");
                    currentUserID =  $(".item:eq("+item+")").attr("data-userID");
                    $(".to_creations_link a").attr("href","artiste.php?id_cat="+currentUserID);
                    $(".item:eq("+item+")").addClass("upOpacityItem");



            }

                    $('.demoApp .item').click(function(){
                      currentUserID =  $(this).attr("data-userID");
                      $(".to_creations_link a").attr("href","artiste.php?id_cat="+currentUserID);
                      document.location.href="artiste.php?id_cat="+currentUserID ;
                    })

            


//***** Animation Home intro *******//



initScroller = function(){
    // init
 var controller = new ScrollMagic.Controller(),
        blockTween,
        scene;
    



      intro = new TweenMax.staggerFrom('.txtLine', 0.5, {
        css: {
          y: 250,
          /*rotationX: '-90',*/
          opacity:0
        }, delay:1
      },0.1);   

      thepack = new TweenMax.from('.thepack', 0.5, {
        css: {
          scale:0,
          opacity:0
        }, delay:1.2
      });        


    
        new ScrollMagic.Scene({
          triggerElement : "#section_fullVideo_bg",
            duration: "100%",
            offset : $(window).width() <= 425  ? "-100px" : "-150px",
            triggerHook : 0.9,
          })
        .setTween([intro,thepack])
        .on("progress", function (e) {
            if(e.progress.toFixed(1) == 1.0){
               //$(".contentHeader").hide();
            }else{              
               //$(".contentHeader").show();
            }
          })
        .addTo(controller);
    
    

    $('li[id^="select-options"]').on('touchend', function (e) {
       e.stopPropagation();
    });


     //Build scene

$(window).scroll(function() {

    var scrollTop = $(this).scrollTop();
    
    if (scrollTop > 50) {
        
     new TweenMax.to('.mouseDown', 0.5, {
        css: {
          //transform: 'translateY(' + 100 + 'px)'
          opacity:0
          //ease:Linear.easeNone
        }, delay:0
      });  

    } else {
     
        new TweenMax.to('.mouseDown', 0.5, {
        css: {
          //transform: 'translateY(' + 100 + 'px)'
          y :0,
          opacity:1
          //ease:Linear.easeNone
        }, delay:0
      });  


    }
    
});
    




        //Build scene
    leftside = new TweenMax.from('#leftside', 1.5, {
        css: {
          //transform: 'translate(0)'
          //left:"40%",
          //opacity:0
          width:"0%"
        }
      });
    
   cercle = new TweenMax.to('#cercle', 2, {
        css: {
          //transform: 'translate(0)'
          //left:"40%",
          //opacity:0
          //width:"0%"
          scale:"70%",
          ease:Bounce.easeOuteaseOut
        }, delay:1.5
      });
    
    txtIndepht = new TweenMax.to('.contentHeader', 0, {   
      css :{
        display: "none",
      }, delay:2
    })
    
     moroccanLife = new TweenMax.from('.spacerTxt', 1, {
        css: {
          //transform: 'translate(0)'
          scale:0.5,
          opacity:0,
          rotationX: '-90', 
        },delay:0
      });

       bigTxt = new TweenMax.staggerTo('.bigTxt span em', 0.5, {
        css: {
          transform: 'translateY(0)'
        }, delay:1
      },0.2);
    
    rightside = new TweenMax.from('#rightside', 1.5, {
        css: {
          //transform: 'translate(0)'
          //left:"40%",
          //opacity:0
          width:"0%"
        }, delay:0.3
      });    

    bgHalfer = new TweenMax.from('#bgHalfer', 1.5, {
        css: {
          //transform: 'translate(0)'
          //left:"40%",
          opacity:1,
          width:"0%",
          right:"30%"
          //rotation:5,
          //right:"-10%",
          //scale:1.5
        }, delay:0.3
      });    


      btnAjouter_black = new TweenMax.from('#ajouter_btn .before', 0.5, {
        css: {
          width:"0px"
          //scale:1.5
        }, delay:1.8
      }); 

     btnAjouter = new TweenMax.from('#ajouter_btn .after', 0.5, {
        css: {
          width:"0px"
          //scale:1.5
        }, delay:2.1
      }); 

      TweenMax.set($('#ajouter_btn img'), {opacity:0});
      btnAjouter_reveal_img = new TweenMax.to('#ajouter_btn img', 0, {
        css: {
          opacity:1
        }, delay:2.5
      }); 

      btnAjouter_reveal = new TweenMax.to('#ajouter_btn .after', 1, {
        css: {
          left:"100%"
          //scale:1.5
        }, delay:2.5
      }); 


      copierColler_btn = new TweenMax.from('.copierColler_btn', 1, {
        css: {
             y: 100,
             opacity : 0
        }, delay:4
      }); 
      
      

    

       modeleMen = new TweenMax.staggerFrom('#model_men img', 0.5, {
        css: {
          transform: 'translateX(-50px)',
          opacity:0
        }, delay:1
      },0.2);   


       windowTab = new TweenMax.staggerFrom('.windowTab', 0.5, {
        css: {
          //transform: 'translateY(100px)',
          scale:0,
          opacity:0
        }, delay:3
      },0.2);   


       fire = new TweenMax.staggerFrom('.fire', 0.5, {
        css: {
          //transform: 'translateY(100px)',
          scale:0,
          opacity:0
        }, delay:1.5
      },0.2);   


       


       cp_right_txt = new TweenMax.staggerFrom('.totop-ny-cp', 0.5, {
        css: {
          transform: 'translateY(50px)',
          opacity:0
        }, delay:1.8
      },0.2);    


    
        new ScrollMagic.Scene({
            //offset: $('#fly-right').offset().top - 100,
            triggerElement : "#section_copy_past",
            duration: "210%",
            triggerHook : 0
          })
        .setTween([modeleMen,moroccanLife,fire,cp_right_txt,btnAjouter_black,btnAjouter,btnAjouter_reveal,btnAjouter_reveal_img,windowTab,bgHalfer,bigTxt,txtIndepht,copierColler_btn])
        .setPin("#section_copy_past")
        .addTo(controller);
    






    
    



    //Build scene

     animateSpans_mghribiOriginal = new TweenMax.staggerFrom('#section_with_pattern .boxed #txtMghribi span', 2, {
        css: {
           y:"100%",
           opacity:0
        }, delay:1.8
      },0.2);   
    
      mghribi_original = new TweenMax.from('#mghribi_original', 1.5, {
        css: {
          //transform: 'translateY(' + 100 + 'px)'
          opacity:0,
          scale:2
        },delay:6
      });

     opacitySpan_iwwalli = new TweenMax.to('#section_with_pattern  span', 2.5, {
        css: {
           opacity:0.5,
        }, delay: 6
      });  
    
     patternBox_cta = new TweenMax.from('.patternBox_cta', 1, {
        css: {
           scale:0,
        }, delay: 7
      });      


        new ScrollMagic.Scene({
            //offset: $('#fly-right').offset().top - 100,
            triggerElement : "#section_with_pattern #txtMghribi",
            duration: "100%",
            offset: "-200px",
            triggerHook : 1
          })
        .setTween([mghribi_original,animateSpans_mghribiOriginal,opacitySpan_iwwalli,patternBox_cta])
        .addTo(controller);













  












    //Build scene
  

     miracleBox = new TweenMax.staggerFrom('.miracleBox', 1.5, {
        css: {
           scale: 0,
           rotation:7,
           opacity:0
        }, delay:1.8
      },0.2);  

      handOf_miracle = new TweenMax.from('#section_miracles #picto_miracles img:eq(0)', 1.5, {
        css: {
          //transform: 'translateY(' + 100 + 'px)'
          opacity:1,
          bottom:"-30%"
        },delay:$(window).width() <= 425  ? 5 : 2.5,
      });   


      if( $(window).width() <= 425 ){

      }  

    
        new ScrollMagic.Scene({
            //offset: $('#fly-right').offset().top - 100,
            triggerElement : "#section_miracles",
            duration: "100%",
            offset: $(window).width() <= 425  ? 0 : "-200px",
            triggerHook : 1
          })
        .setTween([miracleBox,handOf_miracle])
        .addTo(controller);



    //Build scene


      kit_bg_parallax = new TweenMax.from('#section_kitJamila',20, {
        css: {
          //transform: 'translateY(' + 100 + 'px)'
          opacity:1,
          backgroundPosition: "center bottom", ease:Linear.easeNone
        },delay:2.5
      });     

      awwel_raibi = new TweenMax.from('#awel_raibi_fel_3alam',20, {
        css: {
          //transform: 'translateY(' + 100 + 'px)'
           scale: 0.8,
           rotation:10,
           ease:Linear.easeNone
        },delay:2.5
      });      

     packsMemories = new TweenMax.staggerFrom('#album_memories .elemMemory', 10, {
        css: {
           scale: 0,
           rotation:7,
           y:150,
           opacity:0
        }, delay:6
      },1);  

      kitJamila_cta = new TweenMax.from('.kitJamila_cta',5, {
        css: {
          //transform: 'translateY(' + 100 + 'px)'
           scale: 0.3,
           opacity:0,
           rotation:10,
           ease:Linear.easeNone
        },delay:15
      });     

    
        new ScrollMagic.Scene({
            //offset: $('#fly-right').offset().top - 100,
            triggerElement : "#section_kitJamila",
            duration:$(window).width() <= 425  ? "200%" : "100%",
            triggerHook : 1
          })
        .setTween([kit_bg_parallax,awwel_raibi,packsMemories,kitJamila_cta])
        .addTo(controller);



    //Build scene



     txt_stopMotion = new TweenMax.staggerFrom('.txt_stopMotion', 5, {
        css: {
           y:100,
           opacity:0
        }, delay:10
      },3); 

     pseudo_stopMotion = new TweenMax.staggerFrom($('.txt_stopMotion span .bgSpan'), 5, {
        css: {
           width:"0%"
        }, delay:20
      },2);     

      moul7anoota =  new TweenMax.from('#layersMoul7anoot', 10, {
        css: {
           y:100,
           opacity:0
        }, delay:30
      });


      original_cta =  new TweenMax.from('.original_cta', 10, {
        css: {
           scale:0,
           opacity:0
        }, delay:20
      });

     /*bg_section_stopMotion = new TweenMax.to('#whitebg_stopmotion', 5, {
        css: {
           opacity:0
        }, delay:10
      },2); */ 
    
      /*imgsStopmotion = new TweenMax.staggerFrom('.medias_stopMotion img', 5, {
        css: {
           y:150,
           opacity:0
        }, delay:20
      },2); */


        new ScrollMagic.Scene({
            //offset: $('#fly-right').offset().top - 100,
            triggerElement : "#section_stopMotion",
            duration: "100%",
            triggerHook : 1
          })
        .setTween([txt_stopMotion,moul7anoota,pseudo_stopMotion,original_cta])
        .addTo(controller);









      //Build scene
    
     cropped_part = new TweenMax.to('#layersMoul7anoot img:eq(1)', 20, {
        css: {
          //rotationX: '-90'
          scale : 0.8
        },delay:4
      });
     moul7anoot_ = new TweenMax.to('#layersMoul7anoot img:eq(3)', 20, {
        css: {
          //rotationX: '-90'
          left : "-100%",
          scale : 0.5
        },delay:25
      });

     fou9ia = new TweenMax.from('#layersMoul7anoot img:eq(2)', 20, {
        css: {
          //rotationX: '-90'
          left : "100%",
          scale : 0.5
        },delay:26
      });

     cropped_part_move = new TweenMax.to('#layersMoul7anoot img:eq(1)', 15, {
        css: {
          //rotationX: '-90'
          scale : 0.8
          //top:"42%"
        },delay:45
      });   

      cropped_part_seconde_move = new TweenMax.to('#layersMoul7anoot img:eq(1)', 15, {
        css: {
          //rotationX: '-90'
          scale: 1
        },delay:55
      }); 


      cropped_part_third_move = new TweenMax.to('#layersMoul7anoot img:eq(1)', 15, {
        css: {
          //rotationX: '-90'
          top:"42.5%"
          /*left:"20.55%"*/
        },delay:65
      }); 

      timeGain = new TweenMax.to('#layersMoul7anoot img:eq(1)', 10, {
        css: {
          /*left:"20.55%"*/
          opacity:1
        },delay:95
      }); 
    
        new ScrollMagic.Scene({
            triggerElement : "#layersMoul7anoot",
            /*triggerElement : "#section_stopMotion",*/
            duration: "190%",
            triggerHook : 0
          })
        .setTween([cropped_part,moul7anoot_,fou9ia,cropped_part_move,cropped_part_seconde_move,cropped_part_third_move,timeGain])
        .setPin("#layersMoul7anoot")
        .offset("-50px")
        .addTo(controller);







    //Build scene
     transparentBox = new TweenMax.from('.transparentBox .title', 6, {
        css: {
           y:150,
           opacity:0
        }, delay:0
      },1);  
    

     revealTxt_8mm = new TweenMax.staggerTo('.transparentBox .boldTxt span em', 4, {
        css: {
          transform: 'translateY(0)'
        }, delay:5
      },1.8);



        new ScrollMagic.Scene({
            //offset: $('#fly-right').offset().top - 100,
            triggerElement : "#section_8mmEffect .leftBox",
            duration:"70%",
            triggerHook : 0.6
          })
        .setTween([transparentBox,revealTxt_8mm])
        .addTo(controller);

        











//Build scene
      pinkBox = new TweenMax.from('.pinkBox', 10, {
        css: {
           y:450,
           opacity:1
        }, delay:5
      },1); 

     pinkBox_title = new TweenMax.from('.pinkBox .title', 1.8, {
        css: {
           y:100,
           opacity:0
        }, delay: 8
      },1);

     pinkBox_txt_reveal = new TweenMax.staggerTo('.pinkBox .boldTxt span em', 4, {
        css: {
          transform: 'translateY(0)'
        }, delay: 9
      },1.5);


     pinkBox_smTxt = new TweenMax.from('.pinkBox .smTxt', 1.8, {
        css: {
           y:50,
           opacity:0
        }, delay: 11
      },1);   

     selfmade_cta = new TweenMax.from('.selfmade_cta', 2.5, {
        css: {
           scale:0,
           opacity:0
        }, delay: 11
      });   


        new ScrollMagic.Scene({
            //offset: $('#fly-right').offset().top - 100,
            triggerElement : "#section_8mmEffect .rightBox",
            duration:"100%",
            triggerHook : $(window).width() <= 425  ? 1 : 0.8,
          })
        .setTween([pinkBox_title,pinkBox,pinkBox_txt_reveal,pinkBox_smTxt,selfmade_cta])
        //.offset("350px")
        .addTo(controller);




    
    //Build scene
    works = new TweenMax.from('#works', 1.5, {
        css: {
          //transform: 'translate(0)'
          left:"40%",
          opacity:0
        }
      });
    
        new ScrollMagic.Scene({
            //offset: $('#fly-right').offset().top - 100,
            triggerElement : "#works",
            duration: "80%",
            triggerHook : 1
          })
        .setTween(works)
        .addTo(controller);
    
    
     //Build scene
    clients = new TweenMax.from('#clients', 1.5, {
        css: {
          //transform: 'translate(0)'
          letterSpacing:"100px",
          opacity:1
        }
      });
    
       new ScrollMagic.Scene({
            //offset: $('#fly-right').offset().top - 100,
            triggerElement : "#clients",
            duration: "50%",
            triggerHook : 1
          })
        .setTween(clients)
        .addTo(controller);
    

}



















tpl_audioPlayer = '<div id="containerr"><div id="player" class="bg-gradient-omar"><audio id="song"><source src="" type="audio/mp3" /></audio><div id="info"><h1>Pressure</h1><h2>Faical Adali</h2></div><div id="controls"><div class="group" id="r1"><a class="big" id="play" href="" title=""><i class="fas fa-play"></i></a></div><div class="group" id="time"><div class="static"><label></label><span id="currentTime">00:00</span><span id="totalTime">00:00</span></div></div><div class="group" id="seekHolder"><div id="timeLabel">00:00</div><div class="static rangeContainer"><label></label><div class="rangeHorizontal stripes" id="seek"></div><div id="seekFill" class="stripes"></div><div id="seekDrag"></div></div></div><div class="group" id="right"><a id="mute" href="" title=""><label class="expandable">VOL</label><i class="fas fa-volume-up" id="volumeIcon"></i></a><a id="loop" href="" title=""><label class="expandable">LOOP</label><i class="fas fa-ban" id="loopIcon"></i></a></div></div></div></div>';



initAudio = function(statusPlayer){
  var AudioModel = function (_song) {
  var isPlaying = statusPlayer ? true : false;
  var song = _song;
  
  var a = {};
  
  a.getSong = function() {
    return song;
  };
  
  a.currentTime = function() {
    return song.currentTime;
  };
  
  a.duration = function() {
    return song.duration;
  };
  
  a.setTime = function(time) {
    song.currentTime = time;
  };
  
  a.play = function() {
    isPlaying = true;
    song.play();
  };
  
  a.pause = function() {
    isPlaying = false;
    song.pause();
  };
  
  a.playing = function() {
    return isPlaying;
  };
  
  a.getLoop = function() {
    return song.loop;
  };
  
  a.setLoop = function(loop) {
    song.loop = loop;
  };
  
  a.setVolume = function(vol) {
    song.volume = vol;
  };
  
  a.getVolume = function() {
    return song.volume;
  };
  
  a.seekTo = function(time) {
    song.currentTime = time;
  };
  
  var reset = function() {
    if (!song.loop) {
      a.seekTo(0);
      a.pause();
    }
  };
  
  song.addEventListener("ended", function(event) { reset() }, false);
  
  return a;
}(document.getElementById("song"));

var AudioView = function(model) {
  var playBtn = document.getElementById("play");
  var currentTime = document.getElementById("currentTime");
  var totalTime = document.getElementById("totalTime");
  var seekBg = document.getElementById("seek");
  var seekHolder = document.getElementById("seekHolder");
  var seekFill = document.getElementById("seekFill");
  var seekDrag = document.getElementById("seekDrag");
  var volumeIcon = document.getElementById("volumeIcon");
  var loopIcon = document.getElementById("loopIcon");
  var timeLabel = document.getElementById("timeLabel");
  
  var formatTime = function(i) {
    var minutes = Math.floor(i/60);
    var seconds = Math.floor(i%60);
    return ((minutes < 10) ? ("0" + minutes) : minutes) + ":" + ((seconds < 10) ? ("0" + seconds) : seconds);
  };
  
  var play = function() {
    playBtn.innerHTML = "<i class='fas fa-pause'></i>";
  };
  
  var pause = function() {
    pauseBtn.innerHTML = "<i class='fas fa-play'></i>";
  };
  
  var updateTime = function() {
    currentTime.innerHTML = formatTime(model.currentTime());
    timeLabel.innerHTML = currentTime.innerHTML;
    if (Math.round((1-(model.currentTime()/model.duration()))*(seekBg.offsetWidth))+3<timeLabel.offsetWidth/2) {
      timeLabel.style.left = (seekHolder.offsetWidth-timeLabel.offsetWidth) + "px";
    } else if (Math.round(((model.currentTime()/model.duration()))*(seekBg.offsetWidth)+3)<timeLabel.offsetWidth/2) {
      timeLabel.style.left="0px";
    } else {
      timeLabel.style.left = Math.round(((model.currentTime()/model.duration()))*(seekBg.offsetWidth)+3-timeLabel.offsetWidth/2) + "px";
    }
    seekFill.style.width = Math.round((model.currentTime()/model.duration())*(seekBg.offsetWidth-2))+"px";
    seekDrag.style.left = Math.round((model.currentTime()/model.duration())*(seekBg.offsetWidth-2))+"px";
  };
  
  var updateVolume = function() {
    if (model.getVolume() === 0) {
      volumeIcon.className = "fas fa-volume-off";
    } else if (Math.round(model.getVolume()) === 0) {
      volumeIcon.className = "fas fa-volume-down";
    } else {
      volumeIcon.className = "fas fa-volume-up";
    }
  };
  
  var a = {};
  
  var timeProxy = function(event) {
    updateTime(this);
  }

  a.updateLoop = function() {
    if (model.getLoop()) {
      loopIcon.className = "fas fa-undo-alt";
    } else {
      loopIcon.className = "fas fa-ban";
    }
  };
  
  a.listen = function() {
    model.getSong().addEventListener("timeupdate", timeProxy, false);
  };
  
  a.stopListening = function() {
    model.getSong().removeEventListener("timeupdate", timeProxy, false);
  }
  
  a.dragSeek = function(mousePos) {
    var dragTime = (mousePos.x/seekBg.offsetWidth)*model.duration();
    timeLabel.innerHTML = formatTime(dragTime);
    if (Math.round((1-(dragTime/model.duration()))*(seekBg.offsetWidth))+3<timeLabel.offsetWidth/2) {
      timeLabel.style.left = (seekHolder.offsetWidth-timeLabel.offsetWidth) + "px";
    } else if (Math.round(((dragTime/model.duration()))*(seekBg.offsetWidth)+3)<timeLabel.offsetWidth/2) {
      timeLabel.style.left="0px";
    } else {
      timeLabel.style.left = Math.round(((dragTime/model.duration()))*(seekBg.offsetWidth)+3-timeLabel.offsetWidth/2) + "px";
    }
    seekFill.style.width = Math.round((dragTime/model.duration())*(seekBg.offsetWidth-2))+"px";
    seekDrag.style.left = Math.round((dragTime/model.duration())*(seekBg.offsetWidth-2))+"px";
  };
  
  var init = function() {
    totalTime.innerHTML = formatTime(song.duration);
    
    if (this.autoPlay) {
      this.play();
    }
    model.getSong().addEventListener("play", function(event) { play(); }, false);
    model.getSong().addEventListener("pause", function(event) { pause(); }, false);
    model.getSong().addEventListener("ended", function(event) { if (!model.loop()) pause(); }, false);
    model.getSong().addEventListener("volumechange", function(event) { updateVolume(); }, false);
    a.listen();
  };
  
  model.getSong().addEventListener("canplaythrough", function(event) { init(); }, false);
  
  return a;
}(AudioModel);

var AudioControl = function(model, view) {
  var playBtn = document.getElementById("play");
  var seekBg = document.getElementById("seek");
  var seekHolder = document.getElementById("seekHolder");
  var seekFill = document.getElementById("seekFill");
  var seekDrag = document.getElementById("seekDrag");
  var muteBtn = document.getElementById("mute");
  var volumeIcon = document.getElementById("volumeIcon");
  var loopBtn = document.getElementById("loop");
  var loopIcon = document.getElementById("loopIcon");
  var timeLabel = document.getElementById("timeLabel");
  
  var togglePlay = function(event) {
    event.preventDefault();
    if (model.playing()) {
      model.pause();
    } else {
      model.play();
    }
  };
  
  var toggleLoop = function(event) {
    event.preventDefault();
    model.setLoop(!model.getLoop());
    view.updateLoop();
  };


  
  var toggleVolume = function(event) {
    event.preventDefault();
    if (model.getVolume()==1) {
      model.setVolume(0.49);
    } else if (model.getVolume()==0.49) {
      model.setVolume(0);
    } else {
      model.setVolume(1);
    }
  };
  
  var getMousePos = function(evt, element) {
    var rect = element.getBoundingClientRect();
    var root = document.documentElement;
    
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    
    return {x:mouseX, y:mouseY};
  };
  
  var startSeek = function(event) {
    event.preventDefault();
    view.stopListening();
    document.addEventListener("mousemove", seekProxy, false);
    document.addEventListener("mouseup", endSeekProxy, false);
  };
  
  var seekProxy = function(event) {
    seek(event);
  };
  
  var endSeekProxy = function(event) {
    endSeek(event);
  };
  
  var seek = function(event) {
    event.preventDefault();
    view.dragSeek(getMousePos(event, seekBg));
  };
  
  var endSeek = function(event) {
    event.preventDefault();
    view.listen();
    document.removeEventListener("mousemove", seekProxy, false);
    document.removeEventListener("mouseup", endSeekProxy, false);
    var mousePos = getMousePos(event, seekBg);
    model.seekTo((mousePos.x/seekBg.offsetWidth)*model.duration());
  };
  
  playBtn.addEventListener("click", function(event) { togglePlay(event); }, false);
  loopBtn.addEventListener("click", function(event) { toggleLoop(event); }, false);
  muteBtn.addEventListener("click", function(event) { toggleVolume(event); }, false);
  seekBg.addEventListener("mousedown", function(event) { startSeek(event); }, false);
  seekFill.addEventListener("mousedown", function(event) { startSeek(event); }, false);
  seekDrag.addEventListener("mousedown", function(event) { startSeek(event); }, false);
  
  return {};
}(AudioModel, AudioView);
}





galSys_tpl = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--share" title="Share"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>';
$("#siteWrapper").append(galSys_tpl)


var openPhotoSwipe = function(elemGallery, idxPhoto) {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [];
 
   elemGallery.find("img").each(function(){
     
     PushNew_img = {
       src : $(this).attr("src"),
       w :  $(this).attr("width"),
       h :  $(this).attr("height")
     }
     
     items.push(PushNew_img)
   })
    
    // define options (if needed)
    var options = {      
        history: false,
        focus: false,
        index: idxPhoto,
        shareEl: false,
        zoomEl: true,
        tapToClose: false,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

//openPhotoSwipe();
//document.getElementById('btn').onclick = openPhotoSwipe;



currentCat = $("#section_listing_creation").attr("data-cat");

if(currentCat == "video"){
   //Lity system ON.
}


if(currentCat == "photo"){
      //Overlay | pseudo tag on images for hover effect - .itemBox
    $(".gallery_ny .itemBox").click(function(){
      reactiveImg = $(this).parents('div[class^="gallery_ny"]').eq(0).find(".itemBox").index($(this));
      //alert(reactiveImg)
      openPhotoSwipe($(this).parents('div[class^="gallery_ny"]').eq(0), reactiveImg)
    })
}


if(currentCat == "audio"){
   $(".gallery_ny .itemBox").click(function(){
    
    ParentItemBox = $(this).parent();
    idxItemBox = $(this).index();

    $(this).append("<div class='loader'></div>");
    ParentItemBox.find('.itemBox').find(".played").remove();


     if($("body #containerr").length){
        $("#containerr").animate({"bottom":"-100px"}, function(){
          $("body #containerr").remove();
          $("body").append(tpl_audioPlayer);
        })
     }else{      
         $("body").append(tpl_audioPlayer);
     }
     

     audioFile_ = $(this).attr("data-url");
     Title_audioFile_ = $(this).attr("data-title");
     artist_audioFile_ = $(this).attr("data-artist");



     setTimeout(function(){

     //alert(audioFile_)
     $("#containerr #player #song source").attr('src', audioFile_);
     $("#containerr #player #song").attr('src', audioFile_);
     $("#containerr #info h1").html(Title_audioFile_);
     $("#containerr #info h2").html(artist_audioFile_);
     //Initialized with true to trigger play fonctionalities
     initAudio(true);
  


      $("#song")[0].addEventListener('canplaythrough', function() { 
        $("#song")[0].play();
        $("#play").trigger( "click" );
        $('.gallery_ny .itemBox .loader').remove();
        ParentItemBox.find('.itemBox').eq(idxItemBox).append("<div class='played'></div>");
      }, false);

      $("#containerr").animate({"bottom":0});
     },900)


   })
}


//Classic
/*$(".gallery_ny img").click(function(){
  reactiveImg = $(this).parents('div[class^="gallery_ny"]').eq(0).find("img").index($(this));
  openPhotoSwipe($(this).parents('div[class^="gallery_ny"]').eq(0), reactiveImg)
})*/
  

$(".soloList select").on("change", function(){
    //$("#siteWrapper").fadeOut(600);
    elemSelect = $(this);
    elemSelect.parents("form").submit();
})



  }) /*End Main function*/






    

    