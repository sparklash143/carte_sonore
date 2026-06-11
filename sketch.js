let myMap; // on déclare une variable pour notre carte
const mappa = new Mappa('Leaflet'); // on fait appel à la librairie js Leaflet

let mousePos; // variable pour la souris

// coordonnées de la foret de brocéliande
let foret_lat = 48.00657272338867;
let foret_lng = -2.2863337993621826;



// position de départ
let initial_lat = foret_lat;// latitude de départ
let initial_lng =  foret_lng;// longitude de départ


// coordonnées de notre 1e zone = tombeau de merlin
let zone1_lat = 48.002492110104235; // latitude
let zone1_lng = -2.281618416309357; // longitude

// coordonnées de notre 2e zone = table ronde
let zone2_lat = 48.0135828226732; // latitude 
let zone2_lng = -2.3261833190917973; // longitude

// coordonnées de notre 3e zone = arthur
let zone3_lat = 48.03750228881836; // latitude 
let zone3_lng = -2.1477718353271484; // longitude

// coordonnées de notre 4e zone = graal
let zone4_lat = 48.01199755584885; // latitude 
let zone4_lng = -2.2879579067230225; // longitude

// coordonnées de notre 5e zone = viviane dame-lac
let zone5_lat = 48.018454194606235;
let zone5_lng = -2.1798964020752143;

// coordonnées de notre 6e zone = morgane
let zone6_lat = 48.04134803801557;
let zone6_lng = -2.2223818302154545;

// coordonnées de notre 7e zone = jouvence
let zone7_lat = 48.02078633581978 ;
let zone7_lng = -2.2247743606567387;

// coordonnées de notre 8e zone = cerf
let zone8_lat = 48.00049012641628;
let zone8_lng = -2.251853942871094;

// coordonnées de notre 9e zone = dragon
let zone9_lat = 48.00573078824471;
let zone9_lng = -2.2601276519404756;

// coordonnées de notre 10e zone = chêne
let zone10_lat = 48.0163387562822;
let zone10_lng = -2.255802154541016 ;


let zone1Pos; 
let zone2Pos; 
let zone3Pos; 
let zone4Pos; 
let zone5Pos;
let zone6Pos;
let zone7Pos;
let zone8Pos;
let zone9Pos;
let zone10Pos;
let calcul_diametre_zone1;
let calcul_diametre_zone2;
let calcul_diametre_zone3;
let calcul_diametre_zone4;
let calcul_diametre_zone5;
let calcul_diametre_zone6;
let calcul_diametre_zone7;
let calcul_diametre_zone8;
let calcul_diametre_zone9;
let calcul_diametre_zone10;


// Calcul des distances
let distance_zone1_avatar;
let distance_zone2_avatar;
let distance_zone3_avatar;
let distance_zone4_avatar;
let distance_zone5_avatar;
let distance_zone6_avatar;
let distance_zone7_avatar;
let distance_zone8_avatar;
let distance_zone9_avatar;
let distance_zone10_avatar;


// Calcul des zones
let diametreSource1_lat = 48.00278733106708; 
let diametreSource1_lng = -2.2745132446289067; 

let diametreSource2_lat = 48.010367380622924 ; 
let diametreSource2_lng = -2.3270744830369954; 

let diametreSource3_lat = 48.04257464691527 
let diametreSource3_lng = -2.1454560756683354;

let diametreSource4_lat = 48.01199755584885;
let diametreSource4_lng = -2.293798997998238;

let diametreSource5_lat = 48.02233724700561; 
let diametreSource5_lng = -2.175180315971375;

let diametreSource6_lat = 48.03912607998011; 
let diametreSource6_lng = -2.218919768929482;

let diametreSource7_lat = 48.023286697368526;
let diametreSource7_lng = -2.225965261459351;

let diametreSource8_lat = 47.999800945073034;
let diametreSource8_lng = -2.247734069824219;

let diametreSource9_lat = 48.00769367402618;
let diametreSource9_lng = -2.2589745372533803;

let diametreSource10_lat = 48.00769367402618;
let diametreSource10_lng = -2.2589745372533803;

let diametre_zone1;
let diametre_zone2;
let diametre_zone3;
let diametre_zone4;
let diametre_zone5;
let diametre_zone6;
let diametre_zone7;
let diametre_zone8;
let diametre_zone9;
let diametre_zone10;

//////////////////// Variables pour nos médias
let sound1; // on déclare la variable sound1 pour notre son1
let img1; // on déclare une variable pour l'image représentant  notre source 1

let sound2;
let img2; 
let sound3;
let img3; 
let sound4;
let img4; 
let sound5;
let img5; 
let sound6;
let img6; 
let sound7;
let img7; 
let sound8;
let img8; 
let sound9;
let img9; 
let sound10;
let img10; 

let user;

// variable pour le déplacement réaliste de l'avatar
// positions initiales de l'avatar
let avatar_easing_lat = foret_lat;
let avatar_easing_lng = foret_lng;
let avatar_target_lat = foret_lat;
let avatar_target_lng = foret_lng;
let easing = 0.5;
let avatarEasing;// position XY de l'avatar

let avatarLat;
let avatarLng;



function preload() {
  // Load a sound file
  sound1 = loadSound('sounds/merlin.mp3'); // on charge un fichier audio dans la variable sound1
  sound1.amp(0.3); 
  
  sound2 = loadSound('sounds/table.mp3');
  sound2.amp(0.3); 
  
  sound3 = loadSound('sounds/arthur.mp3');
  sound3.amp(0.3); 
  
  sound4 = loadSound('sounds/graal.mp3');
  sound4.amp(0.3);
  
  sound5 = loadSound('sounds/dame-lac.mp3');
  sound5.amp(0.3); 
  
  sound6 = loadSound('sounds/morgane.mp3');
  sound6.amp(0.3); 
  
  sound7 = loadSound('sounds/jouvence.mp3');
  sound7.amp(0.3); 
  
  sound8 = loadSound('sounds/cerf.mp3');
  sound8.amp(0.3); 
  
  sound9 = loadSound('sounds/dragons.mp3');
  sound9.amp(0.3); 
  
  sound10 = loadSound('sounds/chene.mp3');
  sound10.amp(0.3); 
 
  
  img1 = loadImage('assets/merlin.png'); // on charge un fichier png dans la variable img1
  img2 = loadImage('assets/table-ronde.png');
  img3 = loadImage('assets/arthur.png');
  img4 = loadImage('assets/graal.png');
  img5 = loadImage('assets/dame-lac.png');
  img6 = loadImage('assets/morgane.png');
  img7 = loadImage('assets/jouvence.png');
  img8 = loadImage('assets/cerf.png');
  img9 = loadImage('assets/dragon.png');
  img10 = loadImage('assets/chene.png');
  
  user = loadImage('assets/pere-fouras.png');
}

// Lets put all our map options in a single object
// lat and lng are the starting point for the map.
const options = {
  lat: initial_lat,
  lng: initial_lng,
  zoom: 13,// zoom de départ
  style: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(720,720); 

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
    
 textAlign(CENTER);// on justifie au centre notre texte
 imageMode(CENTER); // poitn d'ancrage central pour notre image
} // fin de la fonction setup

function draw() {

  ////////////////////////////////////////////////////////
  // Ne pas toucher à la zone ci-dessous
  ////////////////////////////////////////////////////////
  
  // Clear the previous canvas on every frame
  clear();
  
  mousePos = myMap.fromPointToLatLng(mouseX,mouseY);// on convertit la position de la souris en coordonnées gps      
  
  // on calcule en permanence le déplacement réaliste de l'avatar (effet easing)
  let dx = avatar_target_lat - avatar_easing_lat;
  avatar_easing_lat += dx * easing;

  let dy = avatar_target_lng - avatar_easing_lng;
  avatar_easing_lng += dy *   easing;
  // fin du calcul
  let avatarEasing = myMap.latLngToPixel(avatar_easing_lat, avatar_easing_lng);

  // on récupère la position gps où l'utilisateur a cliqué  
  if(mouseIsPressed){
    avatarPos = myMap.latLngToPixel(mousePos.lat, mousePos.lng); // on récupère la position en pixels de la position gps de l'avatar // sans easing
    let avatarPosX = avatarPos.x;  // on met à jour avatarPosX
    let avatarPosY = avatarPos.y; // on met à jour avatarPosY   
    avatar_target_lat = mousePos.lat;     
    avatar_target_lng = mousePos.lng;
  }
  ////////////////////////////////////////////////////////
  
       
  ////////////////////////////////////////////////////////
  // on calcule en pixel les positions et dimensions de la zone 1  
  ////////////////////////////////////////////////////////
  zone1Pos = myMap.latLngToPixel(zone1_lat, zone1_lng);// on convertit la position gps de la zone 1 en une position XY 
  calcul_diametre_zone1 = myMap.latLngToPixel(diametreSource1_lat,diametreSource1_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone1 = dist(zone1Pos.x,zone1Pos.y,calcul_diametre_zone1.x,calcul_diametre_zone1.y);
  
  ////////////////////////////////////////////////////////
  // on calcule en pixel les positions et dimensions de la zone 2  
  ////////////////////////////////////////////////////////
  zone2Pos = myMap.latLngToPixel(zone2_lat, zone2_lng);// on convertit la position gps de la zone 2 en une position XY 
  calcul_diametre_zone2 = myMap.latLngToPixel(diametreSource2_lat,diametreSource2_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone2 = dist(zone2Pos.x,zone2Pos.y,calcul_diametre_zone2.x,calcul_diametre_zone2.y);

  
  
  // on calcule en pixel les positions et dimensions de la zone 3  
  ////////////////////////////////////////////////////////
  zone3Pos = myMap.latLngToPixel(zone3_lat, zone3_lng);// on convertit la position gps de la zone 1 en une position XY 
  calcul_diametre_zone3 = myMap.latLngToPixel(diametreSource3_lat,diametreSource3_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone3 = dist(zone3Pos.x,zone3Pos.y,calcul_diametre_zone3.x,calcul_diametre_zone3.y);
  
  
    ////////////////////////////////////////////////////////
  // on calcule en pixel les positions et dimensions de la zone 4  
  ////////////////////////////////////////////////////////
  zone4Pos = myMap.latLngToPixel(zone4_lat, zone4_lng);// on convertit la position gps de la zone 1 en une position XY 
  calcul_diametre_zone4 = myMap.latLngToPixel(diametreSource4_lat,diametreSource4_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone4 = dist(zone4Pos.x,zone4Pos.y,calcul_diametre_zone4.x,calcul_diametre_zone4.y);
  
////////////////////////////////////////////////////////
  // on calcule en pixel les positions et dimensions de la zone 5  
  ////////////////////////////////////////////////////////
  zone5Pos = myMap.latLngToPixel(zone5_lat, zone5_lng);// on convertit la position gps de la zone 1 en une position XY 
  calcul_diametre_zone5 = myMap.latLngToPixel(diametreSource5_lat,diametreSource5_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone5 = dist(zone5Pos.x,zone5Pos.y,calcul_diametre_zone5.x,calcul_diametre_zone5.y);


  ////////////////////////////////////////////////////////
  // on calcule en pixel les positions et dimensions de la zone 6  
  ////////////////////////////////////////////////////////
  zone6Pos = myMap.latLngToPixel(zone6_lat, zone6_lng);// on convertit la position gps de la zone 1 en une position XY 
  calcul_diametre_zone6 = myMap.latLngToPixel(diametreSource6_lat,diametreSource6_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone6 = dist(zone6Pos.x,zone6Pos.y,calcul_diametre_zone6.x,calcul_diametre_zone6.y);
  
  
  ////////////////////////////////////////////////////////
  // on calcule en pixel les positions et dimensions de la zone 7  
  ////////////////////////////////////////////////////////
  zone7Pos = myMap.latLngToPixel(zone7_lat, zone7_lng);// on convertit la position gps de la zone 1 en une position XY 
  calcul_diametre_zone7 = myMap.latLngToPixel(diametreSource7_lat,diametreSource7_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone7 = dist(zone7Pos.x,zone7Pos.y,calcul_diametre_zone7.x,calcul_diametre_zone7.y);
  
  
    ////////////////////////////////////////////////////////
  // on calcule en pixel les positions et dimensions de la zone 8  
  ////////////////////////////////////////////////////////
  zone8Pos = myMap.latLngToPixel(zone8_lat, zone8_lng);// on convertit la position gps de la zone 1 en une position XY 
  calcul_diametre_zone8 = myMap.latLngToPixel(diametreSource8_lat,diametreSource8_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone8 = dist(zone8Pos.x,zone8Pos.y,calcul_diametre_zone8.x,calcul_diametre_zone8.y);
  
      ////////////////////////////////////////////////////////
  // on calcule en pixel les positions et dimensions de la zone 9  
  ////////////////////////////////////////////////////////
  zone9Pos = myMap.latLngToPixel(zone9_lat, zone9_lng);// on convertit la position gps de la zone 1 en une position XY 
  calcul_diametre_zone9 = myMap.latLngToPixel(diametreSource9_lat,diametreSource9_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone9 = dist(zone9Pos.x,zone9Pos.y,calcul_diametre_zone9.x,calcul_diametre_zone9.y);
  
        ////////////////////////////////////////////////////////
  // on calcule en pixel les positions et dimensions de la zone 10  
  ////////////////////////////////////////////////////////
  zone10Pos = myMap.latLngToPixel(zone10_lat, zone10_lng);// on convertit la position gps de la zone 1 en une position XY 
  calcul_diametre_zone10 = myMap.latLngToPixel(diametreSource10_lat,diametreSource10_lng); // on récupère la position en pixel du point d'entrée de la zone 1
  // on calcule le diamètre de la zone
  diametre_zone10 = dist(zone10Pos.x,zone10Pos.y,calcul_diametre_zone10.x,calcul_diametre_zone10.y);
  
  
  
  
  ///////////////////////////// Ajout Mathieu
  let zoom = myMap.zoom();
  //print("zoom = " + zoom);
  let img_size = map(zoom,0.1,13,50,100);
  img_size = constrain(img_size,0,200);
  //print("img_size = " + img_size);
  //////////////////////
  
  ////////////////////////////////////////////////////////
  // on dessine la zone 1  
  ////////////////////////////////////////////////////////
  //fill(255,0,0);
  noFill();
  //circle(zone1Pos.x,zone1Pos.y,40);
  
  // on dessine l'un des points d'entrée de la zone 1
  fill(0,0,255)
  //circle(calcul_diametre_zone1.x,calcul_diametre_zone1.y,10)
  
  // on dessine la zone 1
  stroke(0,0,255);
  noFill(); 
  //circle(zone1Pos.x,zone1Pos.y,diametre_zone1);
  push();
  tint(255,175);
  //image(img1,zone1Pos.x,zone1Pos.y,diametre_zone1*2,diametre_zone1*2);
  image(img1,zone1Pos.x,zone1Pos.y,diametre_zone1*2.25,diametre_zone1*2.25);  
  pop();
  
    ////////////////////////////////////////////////////////
  // on dessine la zone 2  
  ////////////////////////////////////////////////////////
  //fill(255,0,0);
  noFill();
  //circle(zone2Pos.x,zone2Pos.y,40);
  
  // on dessine l'un des points d'entrée de la zone 2
  fill(0,0,255)
  //circle(calcul_diametre_zone2.x,calcul_diametre_zone2.y,10)
  
  // on dessine la zone 2
  stroke(0,0,255);
  noFill(); 
  //circle(zone2Pos.x,zone2Pos.y,diametre_zone2);
  push();
  tint(255,175);
  //image(img1,zone1Pos.x,zone1Pos.y,diametre_zone1*2,diametre_zone1*2);
  image(img2,zone2Pos.x,zone2Pos.y,diametre_zone2*2.25,diametre_zone2*2.25);  
  pop();
  
  
   ////////////////////////////////////////////////////////
  // on dessine la zone 3  
  ////////////////////////////////////////////////////////

  // on dessine l'un des points d'entrée de la zone 1
  fill(0,0,255)
  //circle(calcul_diametre_zone3.x,calcul_diametre_zone3.y,10)
  
  // on dessine la zone 3
  stroke(0,0,255);
  noFill(); 
  //circle(zone3Pos.x,zone3Pos.y,diametre_zone3);
  push();
  tint(255,175);
  //image(img1,zone1Pos.x,zone1Pos.y,diametre_zone1*2,diametre_zone1*2);
  image(img3,zone3Pos.x,zone3Pos.y,diametre_zone3*2.25,diametre_zone3*2.25);  
  pop();
  
     ////////////////////////////////////////////////////////
  // on dessine la zone 4  
  ////////////////////////////////////////////////////////
  
  // on dessine l'un des points d'entrée de la zone 4
  fill(0,0,255)
  //circle(calcul_diametre_zone4.x,calcul_diametre_zone4.y,10)
  
  // on dessine la zone 4
  stroke(0,0,255);
  noFill(); 
  //circle(zone4Pos.x,zone4Pos.y,diametre_zone4);
  push();
  tint(255,175);
  //image(img1,zone1Pos.x,zone1Pos.y,diametre_zone1*2,diametre_zone1*2);
  image(img4,zone4Pos.x,zone4Pos.y,diametre_zone4*2.25,diametre_zone4*2.25);  
  pop();
  
       ////////////////////////////////////////////////////////
  // on dessine la zone 5
  ////////////////////////////////////////////////////////
  
  // on dessine l'un des points d'entrée de la zone 4
  fill(0,0,255)
  //circle(calcul_diametre_zone5.x,calcul_diametre_zone5.y,10)
  
  // on dessine la zone 5
  stroke(0,0,255);
  noFill(); 
  //circle(zone5Pos.x,zone5Pos.y,diametre_zone5);
  push();
  tint(255,175);
  image(img5,zone5Pos.x,zone5Pos.y,diametre_zone5*2,diametre_zone5*2);
  //image(img5,zone5Pos.x,zone5Pos.y,diametre_zone5*2.25,diametre_zone5*2.25);  
  pop();
  
  
  ////////////////////////////////////////////////////////
  // on dessine la zone 6
  ////////////////////////////////////////////////////////
  
  // on dessine l'un des points d'entrée de la zone 4
  fill(0,0,255)
  //circle(calcul_diametre_zone6.x,calcul_diametre_zone6.y,10)
  
  // on dessine la zone 6
  stroke(0,0,255);
  noFill(); 
  //circle(zone6Pos.x,zone6Pos.y,diametre_zone6);
  push();
  tint(255,175);
  image(img6,zone6Pos.x,zone6Pos.y,diametre_zone6*2,diametre_zone6*2);
  //image(img5,zone5Pos.x,zone5Pos.y,diametre_zone5*2.25,diametre_zone5*2.25);  
  pop();
  
  ////////////////////////////////////////////////////////
  // on dessine la zone 7
  ////////////////////////////////////////////////////////
  
  // on dessine l'un des points d'entrée de la zone 7
  fill(0,0,255)
  //circle(calcul_diametre_zone7.x,calcul_diametre_zone7.y,10)
  
  // on dessine la zone 7
  stroke(0,0,255);
  noFill(); 
  //circle(zone7Pos.x,zone7Pos.y,diametre_zone7);
  push();
  tint(255,175);
  image(img7,zone7Pos.x,zone7Pos.y,diametre_zone7*2,diametre_zone7*2);
  //image(img5,zone5Pos.x,zone5Pos.y,diametre_zone5*2.25,diametre_zone5*2.25);  
  pop();
  
  
    ////////////////////////////////////////////////////////
  // on dessine la zone 8
  ////////////////////////////////////////////////////////
  
  // on dessine l'un des points d'entrée de la zone 7
  fill(0,0,255)
  //circle(calcul_diametre_zone8.x,calcul_diametre_zone8.y,10)
  
  // on dessine la zone 7
  stroke(0,0,255);
  noFill(); 
  //circle(zone8Pos.x,zone8Pos.y,diametre_zone8);
  push();
  tint(255,175);
  image(img8,zone8Pos.x,zone8Pos.y,diametre_zone8*2,diametre_zone8*2);
  //image(img5,zone5Pos.x,zone5Pos.y,diametre_zone5*2.25,diametre_zone5*2.25);  
  pop();
  
  
      ////////////////////////////////////////////////////////
  // on dessine la zone 9
  ////////////////////////////////////////////////////////
  
  // on dessine l'un des points d'entrée de la zone 7
  fill(0,0,255)
  //circle(calcul_diametre_zone9.x,calcul_diametre_zone9.y,10)
  
  // on dessine la zone 7
  stroke(0,0,255);
  noFill(); 
  //circle(zone9Pos.x,zone9Pos.y,diametre_zone9);
  push();
  tint(255,175);
  image(img9,zone9Pos.x,zone9Pos.y,diametre_zone9*2,diametre_zone9*2);
  //image(img5,zone5Pos.x,zone5Pos.y,diametre_zone5*2.25,diametre_zone5*2.25);  
  pop();
  
  
        ////////////////////////////////////////////////////////
  // on dessine la zone 10
  ////////////////////////////////////////////////////////
  
  // on dessine l'un des points d'entrée de la zone 7
  fill(0,0,255)
  //circle(calcul_diametre_zone10.x,calcul_diametre_zone10.y,10)
  
  // on dessine la zone 7
  stroke(0,0,255);
  noFill(); 
  //circle(zone10Pos.x,zone10Pos.y,diametre_zone10);
  push();
  tint(255,175);
  image(img10,zone10Pos.x,zone10Pos.y,diametre_zone10*2,diametre_zone10*2);
  
  //image(img5,zone5Pos.x,zone5Pos.y,diametre_zone5*2.25,diametre_zone5*2.25);  
  pop();
  
  
  
  ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 1
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 1
  distance_zone1_avatar = abs(zone1_lat-avatar_easing_lat)+abs(zone1_lng-avatar_easing_lng);// avec easing 

 // AUDIO 1
 if(distance_zone1_avatar<0.0030470443227088584  && !sound1.isPlaying()){
    sound1.play();
    print("l'avatar est entré dans la zone 1")
  } 
 
 if(distance_zone1_avatar>0.0030470443227088584  && sound1.isPlaying()){
    sound1.stop();
    print("l'avatar est sorti dans la zone 1")
  } 
  if(distance_zone1_avatar<0.0030470443227088584){
     let sound1_volume = map(distance_zone1_avatar,0,0.0030470443227088584,1,0);
     sound1.amp(sound1_volume)
  }
  

  ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 2
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 2
  distance_zone2_avatar = abs(zone2_lat-avatar_easing_lat)+abs(zone2_lng-avatar_easing_lng);// avec easing 

//////AUDIO 2

 if(distance_zone2_avatar<0.0030470443227088584  && !sound2.isPlaying()){
    sound2.play();
    print("l'avatar est entré dans la zone 2")
  } 
 
 if(distance_zone2_avatar>0.0030470443227088584  && sound2.isPlaying()){
    sound2.stop();
    print("l'avatar est sorti dans la zone 2")
  } 
  if(distance_zone2_avatar<0.0030470443227088584){
     let sound2_volume = map(distance_zone2_avatar,0,0.0030470443227088584,1,0);
     sound2.amp(sound2_volume)
    }
  
  
  
   ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 3
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 3
  distance_zone3_avatar = abs(zone3_lat-avatar_easing_lat)+abs(zone3_lng-avatar_easing_lng);// avec easing 

 // AUDIO 3
 if(distance_zone3_avatar<0.0030470443227088584  && !sound3.isPlaying()){
    sound3.play();
    print("l'avatar est entré dans la zone 3")
  } 
 
 if(distance_zone3_avatar>0.0030470443227088584  && sound3.isPlaying()){
    sound3.stop();
    print("l'avatar est sorti dans la zone 3")
  } 
  if(distance_zone3_avatar<0.0030470443227088584){
     let sound3_volume = map(distance_zone3_avatar,0,0.0030470443227088584,1,0);
     sound3.amp(sound3_volume)
  }
  
     ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 4
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 4
  distance_zone4_avatar = abs(zone4_lat-avatar_easing_lat)+abs(zone4_lng-avatar_easing_lng);// avec easing 

 // AUDIO 4
 if(distance_zone4_avatar<0.0030470443227088584  && !sound4.isPlaying()){
    sound4.play();
    print("l'avatar est entré dans la zone 4")
  } 
 
 if(distance_zone4_avatar>0.0030470443227088584  && sound4.isPlaying()){
    sound4.stop();
    print("l'avatar est sorti dans la zone 4")
  } 
  if(distance_zone4_avatar<0.0030470443227088584){
     let sound4_volume = map(distance_zone4_avatar,0,0.0030470443227088584,1,0);
     sound4.amp(sound4_volume)
  }
  
  ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 5
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 4
  distance_zone5_avatar = abs(zone5_lat-avatar_easing_lat)+abs(zone5_lng-avatar_easing_lng);// avec easing 

 // AUDIO 5
 if(distance_zone5_avatar<0.0030470443227088584  && !sound5.isPlaying()){
    sound5.play();
    print("l'avatar est entré dans la zone 5")
  } 
 
 if(distance_zone5_avatar>0.0030470443227088584  && sound5.isPlaying()){
    sound5.stop();
    print("l'avatar est sorti dans la zone 5")
  } 
  if(distance_zone5_avatar<0.0030470443227088584){
     let sound5_volume = map(distance_zone5_avatar,0,0.0030470443227088584,1,0);
     sound5.amp(sound5_volume)
  }
  
    ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 6
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 6
  distance_zone6_avatar = abs(zone6_lat-avatar_easing_lat)+abs(zone6_lng-avatar_easing_lng);// avec easing 

 // AUDIO 6
 if(distance_zone6_avatar<0.0030470443227088584  && !sound6.isPlaying()){
    sound6.play();
    print("l'avatar est entré dans la zone 6")
  } 
 
 if(distance_zone6_avatar>0.0030470443227088584  && sound6.isPlaying()){
    sound6.stop();
    print("l'avatar est sorti dans la zone 6")
  } 
  if(distance_zone6_avatar<0.0030470443227088584){
     let sound6_volume = map(distance_zone6_avatar,0,0.0030470443227088584,1,0);
     sound6.amp(sound6_volume)
  }
  
  
      ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 7
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 7
  distance_zone7_avatar = abs(zone7_lat-avatar_easing_lat)+abs(zone7_lng-avatar_easing_lng);// avec easing 

 // AUDIO 6
 if(distance_zone7_avatar<0.0030470443227088584  && !sound7.isPlaying()){
    sound7.play();
    print("l'avatar est entré dans la zone 7")
  } 
 
 if(distance_zone7_avatar>0.0030470443227088584  && sound7.isPlaying()){
    sound7.stop();
    print("l'avatar est sorti dans la zone 7")
  } 
  if(distance_zone7_avatar<0.0030470443227088584){
     let sound7_volume = map(distance_zone7_avatar,0,0.0030470443227088584,1,0);
     sound7.amp(sound7_volume)
  }
  
  
        ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 8
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 7
  distance_zone8_avatar = abs(zone8_lat-avatar_easing_lat)+abs(zone8_lng-avatar_easing_lng);// avec easing 

 // AUDIO 6
 if(distance_zone8_avatar<0.0030470443227088584  && !sound8.isPlaying()){
    sound8.play();
    print("l'avatar est entré dans la zone 8")
  } 
 
 if(distance_zone8_avatar>0.0030470443227088584  && sound8.isPlaying()){
    sound8.stop();
    print("l'avatar est sorti dans la zone 8")
  } 
  if(distance_zone8_avatar<0.0030470443227088584){
     let sound8_volume = map(distance_zone8_avatar,0,0.0030470443227088584,1,0);
     sound8.amp(sound8_volume)
  }

  
          ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 9
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 7
  distance_zone9_avatar = abs(zone9_lat-avatar_easing_lat)+abs(zone9_lng-avatar_easing_lng);// avec easing 

 // AUDIO 6
 if(distance_zone9_avatar<0.0030470443227088584  && !sound9.isPlaying()){
    sound9.play();
    print("l'avatar est entré dans la zone 9")
  } 
 
 if(distance_zone9_avatar>0.0030470443227088584  && sound9.isPlaying()){
    sound9.stop();
    print("l'avatar est sorti dans la zone 9")
  } 
  if(distance_zone9_avatar<0.0030470443227088584){
     let sound9_volume = map(distance_zone9_avatar,0,0.0030470443227088584,1,0);
     sound9.amp(sound9_volume)
  }
  
   ////////////////////////////////////////////////////////
  // Interactivité audio de la zone 10
  ////////////////////////////////////////////////////////
  // on calcule la distance entre l'avatar et le centre de la zone 7
  distance_zone10_avatar = abs(zone10_lat-avatar_easing_lat)+abs(zone10_lng-avatar_easing_lng);// avec easing 

 // AUDIO 6
 if(distance_zone10_avatar<0.0030470443227088584  && !sound10.isPlaying()){
    sound10.play();
    print("l'avatar est entré dans la zone 10")
  } 
 
 if(distance_zone10_avatar>0.0030470443227088584  && sound10.isPlaying()){
    sound10.stop();
    print("l'avatar est sorti dans la zone 10")
  } 
  if(distance_zone10_avatar<0.0030470443227088584){
     let sound10_volume = map(distance_zone10_avatar,0,0.0030470443227088584,1,0);
     sound10.amp(sound10_volume)
  }

   
 ////////////////////////////////////////////////////////
 //avatar
 ////////////////////////////////////////////////////////
  image(user,avatarEasing.x,avatarEasing.y,diametre_zone1*1,diametre_zone1*1);
  

} // fin du draw

function mouseReleased(){
    print("mousePos.lat = " + mousePos.lat);// on imprime dans la console la latitude de la position gps où se situe la souris  
    print("mousePos.lng = " + mousePos.lng);// on imprime dans la console la longitude de la position gps où se situe la souris 
    //print("distance_zone2_avatar = " + distance_zone2_avatar);
    print("//////////////////////");// on ajoute une démarcation entre chaque clic

}
