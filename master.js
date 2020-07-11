//check if we have local storage color option

let mainColor = localStorage.getItem('color_option');

//local storage not empty so we can set it

if(mainColor !== null){
    
    document.documentElement.style.setProperty("--main--color",localStorage.getItem('color_option'));
    
    //remove active class from color list
    document.querySelectorAll('.color_list li').forEach(Element => {
        
            Element.classList.remove('active');
            //add active class on element with data-color === local storage items
            if(Element.dataset.color === localStorage.getItem('color_option')){
               
                //add active class
                Element.classList.add('.active');
            }
    });
}

//setting-box
//toggle spin class on Icon

let gearButton = document.querySelector(".togge_setting .fa-gear");

gearButton.onclick = function(){
    
    //toggle gear to rotate 
    this.classList.toggle("fa-spin");
    document.querySelector(".setting_box").classList.toggle("open");
}
//switch color

const colorLest = document.querySelectorAll('.color_list li');

colorLest.forEach(li =>{
    
    li.addEventListener("click",(e) => {
        
        //set coor in root
        document.documentElement.style.setProperty("--main--color",e.target.dataset.color);
        
        //set color in local storage
        localStorage.setItem('color_option',e.target.dataset.color);
        
        handleActive(e);
    });
})

//random background option;
let randomback = true;

//variabe to control interval

let backgroundInterval;

//switch random background

//check if there local storage random backgrounds

let backgroundLocalStorage = localStorage.getItem('background_option');

//check if background local storage is empty

if(backgroundLocalStorage !== null){
    
    if(backgroundLocalStorage === 'true'){
        
        randomback = true;
        
    }else{
        
         randomback = true;
    }
    
    //remove all active class from all spans
    document.querySelectorAll('.random_background_box span').forEach(ele => {
       
        ele.classList.remove('active');
    });
    
    if(backgroundLocalStorage === 'true'){
     
       document.querySelector('.random_background_box .yes').classList.add('active');
    }else{

      document.querySelector('.random_background_box .no').classList.add('active');    
    }

}

const randomBackgrounds = document.querySelectorAll('.random_background_box span');

randomBackgrounds.forEach(span =>{
    
    span.addEventListener("click",(e) => {
        
        handleActive(e);
        
        if(e.target.dataset.backgrounds === 'yes'){
            
            randomback = true;
            randomImgs();
            localStorage.setItem('background_option',true);
        }else{
            
            randomback = false;
            clearInterval(backgroundInterval);
            localStorage.setItem('background_option',false);
        }
    });
})

//select landing page element

let landPage = document.querySelector(".landing_page");

//get array of imgs

let imgsArray=["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg","imgs/5.jpg"];


//function to random imgs

function randomImgs() {
    
    if(randomback === true){
        
        //intervel to show different img

        backgroundInterval = setInterval(() => {
    
            //get random number to choice imgs randomly

            let randomImg = Math.floor(Math.random() * imgsArray.length);

            //get imgs 
            landPage.style.backgroundImage = 'url('+imgsArray[randomImg]+')';

        },1000);

    }
    
}


//select skills
let ourSkills = document.querySelector('.skills');
window.onscroll = function() {
    
    //skills offset top
    let skillOffsetTop = ourSkills.offsetTop;
    
    //skills outer higth
    let skillsOuterHeigth = ourSkills.offsetHeight;
    
    //window heigth
    let windowHeigth = this.innerHeight;
    
    //window scroll top
    let skillScrollTop = this.pageYOffset;
    
    if(skillScrollTop > (skillOffsetTop + skillsOuterHeigth - windowHeigth)){
        
        let allSkills = document.querySelectorAll('.skill_box .skill_progress span');
    
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
            
        });
    }
}

//create popUp with the img

let ourGalary = document.querySelectorAll('.galary_div .container .imges_box img');

ourGalary.forEach(img => {
    
    img.addEventListener('click',(e) => {
        
        
        //create overlay element
        let overlay = document.createElement('div');
        overlay.className = 'popup_overay';
        
        //append overlay to body
        document.body.appendChild(overlay);
        
        //create the popUp
        let popupBox = document.createElement('div');
        
        //add class to popup box
        popupBox.className = 'popup_box'; 
        
        if(img.alt !== null){
            
            //create hidding
            let imgHidding = document.createElement('h3');
            
            //create text for hidding
            let imgText = document.createTextNode(img.alt);
            
            //append text to hidding 
            imgHidding.appendChild(imgText);
            
            //append the hidding to popup box
            popupBox.appendChild(imgHidding);
        }
        
        //create the img
        let popupImg = document.createElement('img');
        
        //set img src
        popupImg.src = img.src;
        
        //add img to popup box
        popupBox.appendChild(popupImg);
        
        //append popup box to body
        document.body.appendChild(popupBox);
        
        //create close span
        let closeSpan = document.createElement('span');
        
        //create the close span text 
         let closeSpanText = document.createTextNode('X');
        
        //append text to close span
        closeSpan.appendChild(closeSpanText);
        
        //add class to close span
        closeSpan.className = 'close_span';
        
        //add close span to popup box
        popupBox.appendChild(closeSpan);
    });
    
});

//close popup
 document.addEventListener('click',(e) => {
     
     if(e.target.className == 'close_span'){
         
         e.target.parentNode.remove();
         document.querySelector('.popup_overay').remove();
     }
 });


//select bulls

const bulls = document.querySelectorAll('.nav_bull .bull');

//select links

const links = document.querySelectorAll('.links a');



function scrollToAnyWhere(elements) {
    
    elements.forEach(ele =>{
    
    ele.addEventListener('click',(e) => {
    
     e.preventDefault();
     document.querySelector(e.target.dataset.section).scrollIntoView({
       
         behavior:'smooth'
     });
  }); 
});
}

scrollToAnyWhere(bulls);

scrollToAnyWhere(links);

//Handle Active Function
function handleActive(ev){
 
    //remove active class from all spans
    ev.target.parentElement.querySelectorAll('.active') .forEach(Element => {
        Element.classList.remove('active');
    });
        
    //add active class to pressed color
    ev.target.classList.add('active');
}

//bullets option

let bulletsSpan = document.querySelectorAll('.Bullets_option span');

let bulltesContanier = document.querySelector('.nav_bull');

let bulteLocalStorge = localStorage.getItem('bulltes_option');

if(bulteLocalStorge !== null){
    
    bulletsSpan.forEach(span => {
        
        span.classList.remove('active');
    });
    
    if(bulteLocalStorge === 'block'){
        bulltesContanier.style.display = 'block';
        document.querySelector('.Bullets_option .yes').classList.add('active');
    }else{
        bulltesContanier.style.display = 'none';
        document.querySelector('.Bullets_option .no').classList.add('active');
    }
}

bulletsSpan.forEach(span => {
    
    span.addEventListener('click' , (e) => {
        
        if(span.dataset.bullets === 'show'){
            
            bulltesContanier.style.display ='block';
            localStorage.setItem('bulltes_option','block');
        }
        else{
            bulltesContanier.style.display ='none';
            localStorage.setItem('bulltes_option','none');
        }
        handleActive(e);
    });
});

//reset button
document.querySelector('.setting_box .reset').onclick = function(){
    
    // localStorage.clear();
    localStorage.removeItem('bulltes_option');
    localStorage.removeItem('color_option');
    localStorage.removeItem('background_option');
    
    window.location.reload();
};

//toggle menu

let toggleMenuBotton = document.querySelector('.header_area .toggle_minu');
let tlinks = document.querySelector('.header_area .links');

toggleMenuBotton.onclick = function(e){
    
  e.stopPropagation();
  this.classList.toggle('minu_active');
  tlinks.classList.toggle('open');
    
};

//click any where to close menu
document.addEventListener('click', (e) =>{
   
    if(e.target !== toggleMenuBotton && e.target !== tlinks ){
        
        //check if menu is open or not
        if(tlinks.classList.contains('open')){
           toggleMenuBotton.classList.toggle('minu_active');
           tlinks.classList.toggle('open'); 
        }
    }
});

//stop propagation on menu
tlinks.onclick = function(e){
   
    e.stopPropagation();
};