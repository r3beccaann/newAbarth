// PRELOADER
$(window).on("load", function () {
    if ($("#preloader").length) {
        $("#preloader")
            .delay(1000)
            .fadeOut("slow", function () {
                $(this).remove();
            });
    }
});


// FLY IN TRANSITION
const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes() {
  // trigger point - where we want to start scrolling
  const triggerBottom = window.innerHeight / 5 * 4  
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top
      if(boxTop < triggerBottom) {
        box.classList.add('show')
      } else {
        box.classList.remove('show')
      }
    })
}

// COUNTER 
function isIntoView(elem)
{
    var documentViewTop = $(window).scrollTop();
    var documentViewBottom = documentViewTop + $(window).height();

    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).height();

   

    return ((elementBottom <= documentViewBottom) && (elementTop >= documentViewTop));
}

var isCounterRun = false;

$(document).ready(function() {

        if (!isCounterRun){
            $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
        isCounterRun = true;
        }
 
});


////////////////////////////// SECTION 1 /////////////////////////////

// MOBILE EXPLORE BUTTON TO AT A GLANCE SECTION - NO BACK BUTTON
$('#exploreBtn').click(function() {
    // do something when the button is clicked

    var content = 
    ` 
    
    <div class="row">
      <div class="col-lg-6">
        <img class="w-100 shadow" src="img/section1Img.jpeg" />
      </div>
      <div class="col-lg-6">
        <div class="p-5 mt-4">
            <h1 class="slide-left">AT A GLANCE</h1>
            <p>Embrace a new way of experiencing the road with the Abarth COMPETIZIONE.
<br><br>
            
                A Scorpion born to elevate emotions on the asphalt with 4 new colours and configurations.
               <br><br>
                <div class="wrap">
                
                <i class="fa-solid fa-arrow-down-long fa-bounce" style="color: #ffffff;"></i>
                  </div>
         
          </div>
      </div>
  </div>
  
    `

    console.log('test')
    $('#section1').html(content);
   
    return false;
});


// DESKTOP EXPLORE BUTTON TO AT A GLANCE SECTION 
document.addEventListener('click', e => {
    if (e.target.closest('#exploreBtnNEW')) {
        // .element has been clicked


        var explore = `
        <div class="projcard-container w-100">
        <div class="projcard projcard-blue projcard-split no-border">
          <div class="projcard-innerbox">
            <img class="projcard-img" src="img/section1Image.jpeg" />
      
            <div class="projcard-textbox">
              <div class="projcard-title text-white"><h1>AT A GLANCE</h1></div>
              <div class="projcard-subtitle text-white"><H3 class="bolder">The scorpion that stings.</H3></div>
              <div class="projcard-bar"></div>
              <div class="projcard-description text-white">Embrace a new way of experiencing the road with the Abarth COMPETIZIONE. A Scorpion born to elevate emotions on the asphalt with 4 new colours and configurations.<br><br>
                  <button type="button" class="btn btn-outline-light" id="exploreBack">BACK</button></div>
             
            </div>
          </div>
        </div>
        </div>
        

        `
    console.log('working')

    $('#section1NEW').html(explore);
   
    // return false;
    }
 }
) 

// MOBILE EXPLORE BACK BUTTON TO ORIGINAL STATE
document.addEventListener('click', e => {
    if (e.target.closest('#exploreBack')) {
        // .element has been clicked


        var back = `
        <div class="projcard-container w-100">
        <div class="projcard projcard-blue projcard-split no-border">
          <div class="projcard-innerbox">
            <img class="projcard-img" src="img/section1Image.jpeg" />
      
            <div class="projcard-textbox">
              <div class="projcard-title text-white"><h1>ABARTH</h1></div>
              <div class="projcard-subtitle text-white"><H3 class="bolder">QUALITY SINCE 1898.</H3></div>
              <div class="projcard-bar"></div>
              <div class="projcard-description text-white">The <i>NEW</i> Abarth Competizione - the latest addition to the Abarth family. With its 220 horsepower engine and aggressive styling, the Competizione is sure to turn heads wherever it goes.<br><br>
                  <button type="button" class="btn btn-outline-light" id="exploreBtnNEW">EXPLORE THE MODEL</button></div>
                  <div id="exploreBack"></div>
             
            </div>
          </div>
        </div>
        </div>

        `
    console.log('working')

    $('#section1NEW').html(back);
   
    // return false;
    }
 }
) 


//////////////////////////////////// BUTTONS FOR CONFIGURATOR ////////////////////////////////////

// RESET

document.addEventListener('click', e => {
    if (e.target.closest('#backBtn')) {
        // .element has been clicked


        var reset = `
        <h1 class="text-center pb-5 shadowText">CONFIGURE YOUR COMPETIZIONE</h1>
        <!-- <p class="text-center">SELECT A COLOUR</p> -->
        <p class="text-center" id="backBtn"></p>
        <p class="text-center" id="redBtn"></p>
        <p class="text-center" id="blackBtn"></p>
        <p class="text-center" id="yellowBtn"></p>
        <p class="text-center" id="greenBtn"></p>
<div class="container-fluid" id="cards">
    
    <div class="col-md-10 ">
        <div class="row">
            <div class="col-xl-3 col-lg-6" id="redBtn">
                <div class="card l-bg-red">
                    <div class="card-statistic-3 p-4">
                        <div class="card-icon card-icon-large"></div>
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Rosso Red</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                                
                            </div>
                            <div class=" text-right">
                                <span>Metalic Finish</span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6" id="blackBtn">
                <div class="card l-bg-black">
                    <div class="card-statistic-3 p-4">
                        <div class="card-icon card-icon-large"></div>
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Nuovo Black</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                                
                            </div>
                            <div class=" text-right">
                                <span>Satin Finish</span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6" id="yellowBtn">
                <div class="card l-bg-yellow">
                    <div class="card-statistic-3 p-4">
                        <div class="card-icon card-icon-large"></div>
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Modena Yellow</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                                
                            </div>
                            <div class=" text-right">
                                <span>Metalic Finish</span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6" id="greenBtn">
                <div class="card l-bg-green">
                    <div class="card-statistic-3 p-4">
                        <div class="card-icon card-icon-large"></div>
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Adrenaline Green</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                                
                            </div>
                            <div class=" text-right">
                                <span>Satin Finish</span>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
<h2 class="text-center bolder pt-4 shadowText">SELECT A COLOUR TO SEE A 3D INTERACTIVE MODEL</h2>
<p class="text-center">Colours are for illustration purposes only. These may differ slightly. We advise you to visit your local dealer for an accurate representation.</p>
</div>`
    console.log('test')

    $('#cardContainer').html(reset);
   
    // return false;
    }
 }
) 

// RED BUTTON

document.addEventListener('click', e => {
    if (e.target.closest('#redBtn')) {
        // .element has been clicked


        var content = `
        <h1 class="text-center shadowText">CONFIGURE YOUR COMPETIZIONE</h1>
        <p class="text-center" id="backBtn">GO BACK</p>
    <div class="container-fluid slide-left" id="cards">
    
    <div class="col-md-10 ">
    
        <div class="row">
            <div class="col-lg-6">
              <div >
                <model-viewer disable-zoom src="assets/redabarth.glb" alt="VR Headset" auto-rotate camera-controls ar ios-src="assets/redabarth.glb"></model-viewer>
          </div>
            </div>
            <div class="col-lg-6 pt-5">
              <div>
                  <h2 class="bolder text-center coloured-bg-red">ROSSO RED</h2>
                  <h2 class="text-center coloured-bg-red">METALIC FINISH</h2>
                  
                      
               
                </div>
                <div>
                <h5 class="italic-bold text-white text-center p-5">Click to rotate!</h5>
                </div>
                <div class="text-center">
                <p class="text-white">Sure to turn heads: Rosso Red is a color that is sure to make any car stand out. It is a color that is full of life and passion.</p>
                </div>
                <div class="text-center p-5">
                <a href="#contactUs"><button type="button" class="btn btn-outline-light">BOOK A TEST DRIVE</button></div></a>
                </div>
            </div>
        </div>
        
    </div>
    </div>`
    console.log('red')

    $('#cardContainer').html(content);
   
    // return false;
    }
 }
) 

// BLACK BUTTON

document.addEventListener('click', e => {
    if (e.target.closest('#blackBtn')) {
        // .element has been clicked


        var content = `
        <h1 class="text-center shadowText">CONFIGURE YOUR COMPETIZIONE</h1>
        <p class="text-center" id="backBtn">GO BACK</p>
    <div class="container-fluid slide-left" id="cards">
    
    <div class="col-md-10 ">
    
        <div class="row">
            <div class="col-lg-6">
              <div >
                <model-viewer disable-zoom src="assets/blackabarth.glb" alt="VR Headset" auto-rotate camera-controls ar ios-src="assets/blackabarth.glb"></model-viewer>
          </div>
            </div>
            <div class="col-lg-6 pt-5">
              <div>
                  <h2 class="bolder text-center coloured-bg-grey">NUOVO BLACK</h2>
                  <h2 class="text-center coloured-bg-grey">SATIN FINISH</h2>
                  
                      
               
                </div>
                <div>
                <h5 class="italic-bold text-white text-center p-5">Click to rotate!</h5>
                </div>
                <div class="text-center">
                <p class="text-white">Deep and rich: Nuovo Black is a color that is sure to catch your eye. It is a deep, rich black that has a hint of blue.</p>
                </div>
                <div class="text-center p-5">
                <a href="#contactUs"><button type="button" class="btn btn-outline-light">BOOK A TEST DRIVE</button></div></a>
                </div>
            </div>
        </div>
        
    </div>
    </div>`
    console.log('black')

    $('#cardContainer').html(content);
   
    // return false;
    }
 }
) 

// YELLOW BUTTON

document.addEventListener('click', e => {
    if (e.target.closest('#yellowBtn')) {
        // .element has been clicked


        var content = `
        <h1 class="text-center shadowText">CONFIGURE YOUR COMPETIZIONE</h1>
        <p class="text-center" id="backBtn">GO BACK</p>
    <div class="container-fluid slide-left" id="cards">
    
    <div class="col-md-10 ">
    
        <div class="row">
            <div class="col-lg-6">
              <div >
                <model-viewer disable-zoom src="assets/yellowabarth.glb" alt="VR Headset" auto-rotate camera-controls ar ios-src="assets/yellowabarth.glb"></model-viewer>
          </div>
            </div>
            <div class="col-lg-6 pt-5">
              <div>
                  <h2 class="bolder text-center coloured-bg-yellow">MODENA YELLOW</h2>
                  <h2 class="text-center coloured-bg-yellow">METALIC FINISH</h2>
                  
                      
               
                </div>
                <div>
                <h5 class="italic-bold text-white text-center p-5">Click to rotate!</h5>
                </div>
                <div class="text-center">
                <p class="text-white">Associated with energy, excitement, and passion: Modena Yellow is a color that is associated with energy, excitement, and passion. It is a color that is perfect for cars that are meant to be the envy of the road.</p>
                </div>
                <div class="text-center p-5">
                <a href="#contactUs"><button type="button" class="btn btn-outline-light">BOOK A TEST DRIVE</button></div></a>
                </div>
            </div>
        </div>
        
    </div>
    </div>`
    console.log('black')

    $('#cardContainer').html(content);
   
    // return false;
    }
 }
) 

// GREEN BUTTON

document.addEventListener('click', e => {
    if (e.target.closest('#greenBtn')) {
        // .element has been clicked


        var content = `
        <h1 class="text-center shadowText">CONFIGURE YOUR COMPETIZIONE</h1>
        <p class="text-center" id="backBtn">GO BACK</p>
    <div class="container-fluid slide-left" id="cards">
    
    <div class="col-md-10 ">
    
        <div class="row">
            <div class="col-lg-6">
              <div >
                <model-viewer disable-zoom src="assets/greenabarth.glb" alt="VR Headset" auto-rotate camera-controls ar ios-src="assets/greenabarth.glb"></model-viewer>
          </div>
            </div>
            <div class="col-lg-6 pt-5">
            <div>
                <h2 class="bolder text-center coloured-bg-green">ADRENALINE GREEN</h2>
                <h2 class="text-center coloured-bg-green">SATIN FINISH</h2>
                
                    
             
              </div>
              <div>
              <h5 class="italic-bold text-white text-center p-5">Click to rotate!</h5>
              </div>
              <div class="text-center">
              <p class="text-white">If you are looking for a car paint color that is sure to turn heads, then adrenaline green is the perfect choice for you. This bright, lime green color will make your car stand out from the crowd and give it a sense of speed and power.

              </p>
              </div>
              <div class="text-center p-5">
              <a href="#contactUs"><button type="button" class="btn btn-outline-light">BOOK A TEST DRIVE</button></div></a>
              </div>
          </div>
      </div>
      
  </div>
  </div>`
    console.log('black')

    $('#cardContainer').html(content);
   
    // return false;
    }
 }
) 

///////////////////////////////////// MAP JS ////////////////////////////////////

var map = L.map('map').setView([54.4229152, -4.1049372], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// ALL MARKERS 
// WOULD USUALLY USE JSON TO POPULATE THIS

// Arnold Clark Edinburgh Seafield Motorstore
var dealer1 = L.marker([55.9617423, -3.1308386]).addTo(map);

dealer1.bindPopup("<b>Arnold Clark Edinburgh Seafield Motorstore</b><br><a target='_blank' href='https://www.arnoldclark.com/find-a-dealer/edinburgh-seafield-motorstore/ref/arnbg'>Go to website.</a>");

// Mangoletsi
var dealer2 = L.marker([53.2476284, -2.374023]).addTo(map);

dealer2.bindPopup("<b>Mangoletsi</b><br><a target='_blank' href='https://www.mangoletsi.com/'>Go to website.</a>");

// Lipscomb Fiat Maidstone
var dealer3 = L.marker([51.3003986, 0.4937613]).addTo(map);

dealer3.bindPopup("<b>Lipscomb Fiat Maidstone</b><br><a target='_blank' href='https://www.lipscomb.co.uk/fiat/'>Go to website.</a>");

// Wilsons Fiat
var dealer4 = L.marker([51.3418998, -0.2634267]).addTo(map);

dealer4.bindPopup("<b>Wilsons Fiat</b><br><a target='_blank' href='https://www.wilsons.co.uk/fiat/'>Go to website.</a>");

// Huttons Ltd
var dealer5 = L.marker([51.308094, -5.3970996]).addTo(map);

dealer5.bindPopup("<b>Huttons Ltd</b><br><a target='_blank' href='https://www.huttons-fiat.co.uk/'>Go to website.</a>");

// Glyn Hopkins Fiat Abarth & MG St Albans
var dealer6 = L.marker([51.7526239, -0.2777448]).addTo(map);

dealer6.bindPopup("<b>Glyn Hopkins Fiat Abarth & MG St Albans</b><br><a target='_blank' href='https://www.glynhopkin.com/mg/our-locations/mg-st-albans/?infinity=ict2~net~gaw~cmp~16560479225~ag~150115366039~ar~664525305518~kw~mg%20st%20albans~mt~p~acr~2144749044&&utm_source=google&utm_medium=cpc&utm_campaign=G+|+S+|+MG+|+Brand&utm_content=16560479225&utm_adgroup150115366039&utm_term=mg%20st%20albans&utm_matchtype=p&utm_network=g&gclid=Cj0KCQjwoK2mBhDzARIsADGbjeoZMV0mnu93ra8BiTWx9kTt8jS-8O8zaO5tGKpjCve1xBkG41oXLTsaAmC0EALw_wcB&'>Go to website.</a>");
   
// D.Salmon Abarth
var dealer7 = L.marker([51.8944847, 0.8885987]).addTo(map);

dealer7.bindPopup("<b>D.Salmon Abarth</b><br><a target='_blank' href='https://www.dsalmon.co.uk/usedcars/abarth'>Go to website.</a>");

// Motorvogue Northampton
var dealer8 = L.marker([52.2526296, -0.9024878]).addTo(map);

dealer8.bindPopup("<b>Motorvogue Northampton</b><br><a target='_blank' href='https://www.motorvogue.co.uk/'>Go to website.</a>");

// Arnold Clark Falkirk Fiat / Abarth
var dealer9 = L.marker([56.0101782, -3.7497876]).addTo(map);

dealer9.bindPopup("<b>Arnold Clark Falkirk Fiat / Abarth</b><br><a target='_blank' href='https://www.arnoldclark.com/find-a-dealer/falkirk-fiat-abarth/ref/arneu'>Go to website.</a>");

// August Motors - Ssangyong, Fiat & Abarth
var dealer10 = L.marker([51.0711931, -1.8149712]).addTo(map);

dealer10.bindPopup("<b>August Motors - Ssangyong, Fiat & Abarth</b><br><a target='_blank' href='https://www.autotrader.co.uk/dealers/wiltshire/salisbury/august-motors-ssangyong-fiat-abarth-6964'>Go to website.</a>");

///////////////////////////////////////// FORM SUBMISSION ///////////////////////////////////////

// FAKE FORM SUBMISSION CLEARING & MESSAGE
$("#formSubmit").click(function(e) {            
    
        e.preventDefault();
        console.log('not submitted');
        $("#clearForm")[0].reset(); // clears the form
    
 });

 $("#subscribeSubmit").click(function(e) {            
    
    e.preventDefault();
    console.log('not submitted');
    $("#clearSubscribe")[0].reset(); // clears the form

});

$("#whatsapp").click(function(e) {            
    
    e.preventDefault();
   

});

