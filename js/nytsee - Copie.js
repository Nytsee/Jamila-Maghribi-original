  $(function () { // wait for document ready


  $('body').jpreLoader({
    splashID: "#logo_befor_loading",
    splashFunction: function() {
        //passing Splash Screen script to jPreLoader
                               }
  }, function() { //jPreLoader callback function
    InitNiceScroll();
    initScroller();
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






//***** Animation Home intro *******//



initScroller = function(){

$(window).scrollTop(0);

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




  }) /*End Main function*/
    

    