<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <title>Maghribi Original | Manifesto</title>



        <link href="../preprod/css/validationEngine.jquery.css" rel="stylesheet" type="text/css" /> 

        <link type="text/css" rel="stylesheet" href="../preprod/css/modernizer.css"  media="screen,projection"/>
        <link href="../preprod/css/style.css" rel="stylesheet" type="text/css" />
        <link href="../preprod/css/all.css" rel="stylesheet" type="text/css" />

        <!-- Owl Stylesheets -->
        <link rel="stylesheet" href="../preprod/css/owl.carousel.min.css">
        <link rel="stylesheet" href="../preprod/css/owl.theme.default.min.css">

        <link href="../preprod/css/lity.css" rel="stylesheet" type="text/css" />       


    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="../preprod/js/tm.min.js"></script>
    <script type="text/javascript" src="../preprod/js/sm.min.js"></script>
    <script type="text/javascript" src="../preprod/js/animationg.js"></script>
    <script type="text/javascript" src="../preprod/js/debug.min.js"></script>




    </head>
    <body>




<div id="siteWrapper">  <!-- End Sitewrapper -->


<!-- <div id="menuHamb">  
<div class="menu cross menu--1">
    <label>
      <input type="checkbox">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="0" />
        <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
        <path class="line--2" d="M0 50h70" />
        <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
      </svg>
    </label>
  </div>
</div> -->



<nav id="mainmenu">
  <ul class="menu">
    <li data-text="HOME"><a href="./">HOME</a></li>
    <li data-text="MAGHRIBI ORIGINAL"><a href="maghribi-original.php">MAGHRIBI ORIGINAL</a></li>
    <li data-text="JAMILA & CREATORS"><a href="creators.php">JAMILA & CREATORS</a></li>
    <li data-text="JAM"><a href="jam.php">JAM</a></li>
    <!-- <li data-text="JAMILA & YOU">JAMILA & YOU</li>
    <li data-text="KIT JAMILA">KIT JAMILA</li> -->
  </ul>
</nav>

<div id="section_jam_header">
  <div id="bannerJam"><img src="../preprod/images/jam_header.png" alt=""/></div>
  <div id="parallax_video_jam" class="wbg">


    <div class="manifesto_video_play">
      <a href="https://www.youtube.com/watch?v=Pu5kIqFERZY" title="" data-lity="">
        <i class="fas fa-play-circle"></i>
      </a>
    </div>

  </div>

  <div id="audioBox">
    <i class="fal fa-volume-slash off"></i>
    <i class="fal fa-volume on"></i>
    <audio id="audioLP" preload="auto" autoplay>
      <!-- <source src="maghri-bioriginal-beat.mp3.ogg" type="audio/ogg"> -->
      <source src="maghri-bioriginal-beat.mp3" type="audio/mpeg">
    </audio>
  </div>  


    <div id="contSteps_jam">
      <div class="boxed">
        <div class="stepsImgs">
         <div class="stepBox"><img src="../preprod/images/1_telechargi.png" alt="" /></div>
         <div class="stepBox"><img src="../preprod/images/2_freestyli.png" alt="" /></div>
         <div class="stepBox"><img src="../preprod/images/3_posti.png" alt="" /></div>
        </div>
      </div>
    </div>

</div>

<div id="section_cont_gains_form">
  <div class="boxed formChalleng_section">
    <div class="gain_and_concept_box"><img src="../preprod/images/concepte_jam.png" alt="" /></div>




    <div id="contForm_challenge">
      <div class="row">
        <form class="col s12 generic_form" action="../preprod/services/user_to_mp3.php" method="post">
          <div class="row">
            <div class="input-field col m6 s12">
              <input  id="first_name" type="text" name="nom" class="validate[required] text-input">
              <label for="first_name">Nom</label>
            </div>
            <div class="input-field col m6 s12">
              <input id="last_name" type="text" name="prenom" class="validate[required] text-input">
              <label for="last_name">Prénom</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="telephone" type="tel" name="telephone" class="validate[required,custom[integer],minSize[10],maxSize[10],custom[phoneStrict]] text-input">
              <label for="telephone">Téléphone</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="text" name="email" class="validate[required,custom[email]] text-input">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row talignCenter">
            <p>
              <label>
                <input type="checkbox" class="filled-in validate[required]" name="termes" />
                <span>J'ai lu et j'accepte les termes et <a href="pdf/reglement.pdf" target="_blank">conditions de participation</a></span>
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" class="filled-in validate[required]" name="conditions" />
                <span>Je confirme avoir plus de 18 ans</span>
              </label>
            </p>                
          </div>
          <button type="submit" id="subform_challenge" class="animatedbox" value="Submit">Téléchargi l’instru</button>
        </form>

      </div>
    </div>
    
    
  </div>
  <div id="footer_jam">
    <img src="../preprod/images/footer_jam.png" alt="" />
  </div>
</div>




<!-- Footer general main site -->
<!-- <div id="section_preFooter">
<div class="content">
  <div class="box"><a href="maghribi-original.php" title=""><img src="../preprod/images/jamila_and_you.jpg" alt=""/></a></div>
  <div class="box"><a href="index.php" title=""><img src="../preprod/images/jamila_footer.jpg" alt=""/></a></div>
  <div class="box"><a href="creators.php" title=""><img src="../preprod/images/jamila_and_creator.jpg" alt=""/></a></div>
</div>
</div> -->




<div id="section_footer">
  <div class="boxed">
   <div class="socialBox_footer">
       <div class="socialBox_footer">
         <div class="socialElem"><a href="https://www.facebook.com/RaibiJamila" target="_blank" title=""><i class="fab fa-facebook-f"></i></a></div>
         <div class="socialElem"><a href="https://www.instagram.com/maghribi_original/" target="_blank" title=""><i class="fab fa-instagram"></i></a></div>
         <div class="socialElem"><a href="https://www.youtube.com/user/JamilaOfficiel" target="_blank" title=""><i class="fab fa-youtube"></i></a></div>
       </div>
       <p><b>Privacy Policy & Terms and Argeements</b> | Please note that much of the content displayed on this website blogs is user generated. View our privacy policy and agreements for.</p>
   </div>
  </div>
</div>





</div>  <!-- End Sitewrapper -->



     <script src="../preprod/js/jquery.validationEngine-fr.js" type="text/javascript" charset="utf-8"></script>
     <script src="../preprod/js/jquery.validationEngine.js" type="text/javascript" charset="utf-8"></script>
     
     <script type="text/javascript" src="../preprod/js/gallerysys.js"></script> 
     <script type="text/javascript" src="../preprod/js/nytsee.js"></script>
     <script type="text/javascript" src="../preprod/js/core.nytsee.js"></script>
     <script type="text/javascript" src="../preprod/js/materialize.min.js"></script> 

    
    <script src="../preprod/js/owl.carousel.js"></script>  
    <script src="../preprod/js/lity.js"></script>     



    <!-- This section is for Splash Screen -->
    <script src="../preprod/js/jpreLoader.js"></script>
    <div id="logo_befor_loading">
      <span>Maghribi Original</span>
      <img src="../preprod/images/logo.svg" alt="" />
    </div>
    <!-- End of Splash Screen -->


    </body>
</html>

</html>