import React from 'react'
import {Divider, Card, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'
import LocationItem from './LocationItem';

function returnWhole(length) {
  var stars = [];
  for(var i = 0; i < length; i++) {
      stars.push(<Icon name="star" className="style-star"/>);
  };
  return stars;
};

function returnHalf(length) {
  var stars = [];
  for(var i = 0; i < length; i++) {
      stars.push(<Icon name="star half" className="style-star"/>);
  };
  return stars;
};

let la_array = [
{
  src: 'images/music-plaza.jpg',
  link: 'https://www.yelp.com/biz/music-plaza-los-angeles',
  name: 'Music Plaza',
  dollar: '$$',
  miles: '14.1 miles',
  map: 'https://www.google.com/maps/dir/928+S+Western+Ave+%23107,+Los+Angeles,+CA+90006/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.092581,-118.3035473,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b88659a62e85:0x2be4a2626272ece0!2m2!1d-118.3083861!2d34.0551603!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '928 S Western Ave #107, Los Angeles, CA 90006',
  description: '"Tons of merch for all Kpop fans, including hard to find items. Has BT21 merchandise not sold in Line store (hand sanitizers, computer keyboards, and VTxBT21 makeup). Possible free gifts such as photo cards during check out."'
}, 
{
  src: 'images/choice-music.jpg',
  link: 'https://www.yelp.com/biz/choice-music-los-angeles-4?osq=Choice+Records',
  name: 'Choice Music',
  dollar: '$$',
  miles: '14.3 miles',
  map: 'https://www.google.com/maps/dir/3250+W+Olympic+Blvd+%23323,+Los+Angeles,+CA+90006/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1037278,-118.3032176,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b88783ce6d75:0x826b94d8608f5a46!2m2!1d-118.3083861!2d34.0522795!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '3250 W Olympic Blvd Ste 323 Los Angeles, CA 90006',
  description: '"Smaller than Music Plaza, but had more shirts (mostly Big Bang/BTS) and maybe slightly cheaper. People have gotten free photocards/posters at checkout."'
}, 
{
  src: 'images/music-town.jpg',
  link: 'https://www.yelp.com/biz/k-pop-music-town-los-angeles?osq=bts',
  name: 'K-POP Music Town',
  dollar: '$$',
  miles: '14.6 miles',
  map: 'https://www.google.com/maps/dir/621+S+Western+Ave+%23213,+Los+Angeles,+CA+90005/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1120039,-118.3079495,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b89ac12b10c3:0xb000b6bd36533ee3!2m2!1d-118.3095299!2d34.0627765!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '621 S Western Ave Ste 213 Los Angeles, CA 90005',
  description: '"Slightly more expensive than Music Plaza/Choice Music. Sells mainly BTS things. Cool tip is that posters are $4.99 per CD purchase or $7.99 without."'
},
{
  src: 'images/line.jpg',
  link: 'https://www.yelp.com/biz/line-friends-los-angeles-4?osq=bts',
  name: 'Line Friends ',
  dollar: '$$$',
  miles: '15.7 miles',
  map: 'https://www.google.com/maps/dir/6922+Hollywood+Blvd+%23101,+Los+Angeles,+CA+90028/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1120039,-118.3079495,12z/data=!4m14!4m13!1m5!1m1!1s0x80c2bf215d13818d:0x22e9863a2c899d6f!2m2!1d-118.3409535!2d34.1010528!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '6922 Hollywood Blvd Ste 101 Los Angeles, CA 90028',
  description: 'They posted on twitter that they will be reopening in May. But all we can really do is wait for another official announcememt confirming a specific opening date.'
},
{
  src: 'images/place5.jpg',
  link: 'https://www.universalstudioshollywood.com/',
  name: 'Universal Studios Hollywood',
  miles: '14.7 miles',
  map: 'https://www.google.com/maps/dir/100+Universal+City+Plaza,+North+Hollywood,+CA+91602/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1307236,-118.3345124,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2be4e82d46b55:0x18aba6d0ac2d8c5d!2m2!1d-118.3520161!2d34.1361918!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '100 Universal City Plaza, Universal City, CA 91608',
  description: 'Amusement park with a cinema theme. Highly recommend going on the Studio Tour and Harry Potter rides. Cost is $114/ticket.'
}, 
{
  src: 'images/place6.jpg',
  link: 'https://disneyland.disney.go.com/destinations/disneyland/',
  name: 'Disneyland Park',
  miles: '35.2 miles',
  map: 'https://www.google.com/maps/dir/1313+Disneyland+Dr,+Anaheim,+CA+92802/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@33.9880446,-118.2910826,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80dd282a8a96a7bb:0x33ec3e341f580ea0!2m2!1d-117.9263991!2d33.8153959!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '1313 Disneyland Dr, Anaheim, CA 92802',
  description: 'In Anaheim, long drive to Pasadena. One park is $129/ticket. Both parks is $179/ticket.'
},
{
  src: 'images/fame.jpg',
  link: 'http://www.walkoffame.com/',
  name: 'Hollywood Walk of Fame',
  miles: '15.2 miles',
  map: 'https://www.google.com/maps/dir/Hollywood+Blvd+%26+N+Highland+Ave,+Los+Angeles,+CA+90028/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1164638,-118.3265661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2bf2394637777:0xf13df01b6fcefedc!2m2!1d-118.3387191!2d34.1015539!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: 'N Highland Ave &, Hollywood Blvd, Los Angeles, CA 90028',
  description: 'BTS filmed here during AHL. The Line store is also nearby.'
}, 
{
  src: 'images/place8.jpg',
  link: 'https://hollywoodsign.org/',
  name: 'Hollywood Sign',
  miles: '15.3 miles',
  map: 'https://www.google.com/maps/dir/Hollywood+Sign,+Los+Angeles,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1164638,-118.3265661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2bf0a45505a7d:0xabb7acc626709843!2m2!1d-118.3215482!2d34.1341151!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: 'Los Angeles, CA 90068',
  description: 'There are hiking trails up to the sign.'
},
{
  src: 'images/art.jpg',
  link: 'https://www.lacma.org/',
  name: 'Los Angeles County Museum of Art',
  miles: '16.6 miles',
  map: 'https://www.google.com/maps/dir/5905+Wilshire+Blvd,+Los+Angeles,+CA+90036/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1164638,-118.3265661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b923396bcd39:0x9c5b671bb1ad0a6f!2m2!1d-118.3588851!2d34.0637913!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '5905 Wilshire Blvd, Los Angeles, CA 90036',
  description: 'BTS was spotted here back in 2014. Cost is $16-$25/ticket.'
},
{
  src: 'images/manhattan.jpg',
  link: 'https://www.timeout.com/los-angeles/manhattan-beach',
  name: 'Manhattan Beach',
  miles: '30.7 miles',
  map: 'https://www.google.com/maps/dir/Manhattan+Beach,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.0232126,-118.460039,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b3c5e2b0632f:0x70351d4f4154520!2m2!1d-118.4109089!2d33.8847361!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: 'Manhattan Beach, California 90266',
 description: 'The beach that BTS went to during AHL.'
},
{
  src: 'images/grove.jpg',
  link: 'https://thegrovela.com/',
  name: 'The Grove',
  miles: '16.3 miles',
  map: 'https://www.google.com/maps/dir/The+Grove,+The+Grove+Drive,+Los+Angeles,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.0801842,-118.33302,14.32z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b92fc2d303c3:0xc3906f8fff88db6e!2m2!1d-118.3578454!2d34.0720919!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '189 The Grove Drive, Los Angeles, CA 90036',
  description: 'BTS was here too.'
},
{
  src: 'images/concert-hall.jpg',
  link: 'https://www.laphil.com/',
  name: 'Walt Disney Concert Hall',
  miles: '10.7 miles',
  map: 'https://www.google.com/maps/dir/Walt+Disney+Concert+Hall,+111+S+Grand+Ave,+Los+Angeles,+CA+90012/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1082963,-118.2896141,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c64d77b1cbb5:0xbe92003a7e859c3c!2m2!1d-118.2499213!2d34.0553468!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '111 S Grand Ave, Los Angeles, CA 90012',
  description: 'Recreate this RM picture.'
},
{
  src: 'images/place9.jpg',
  link: 'https://santamonicapier.org/',
  name: 'Santa Monica Pier',
  miles: '25.8 miles',
  map: 'https://www.google.com/maps/dir/Santa+Monica+Pier,+200+Santa+Monica+Pier,+Santa+Monica,+CA+90401/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1164638,-118.3265661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2a4d74d5ea79b:0xcd9a111aced18f4d!2m2!1d-118.4961411!2d34.0100873!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '200 Santa Monica Pier, Santa Monica, CA 90401',
  description: 'Restaurant, amusement park, beach.'
},
{
  src: 'images/place10.jpg',
  link: 'http://www.getty.edu/',
  name: 'The Getty',
  miles: '24.4 miles',
  map: 'https://www.google.com/maps/dir/1200+Getty+Center+Dr,+Los+Angeles,+CA+90049/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1164638,-118.3265661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2bcd76914c3ad:0x76d124ab7a01ce81!2m2!1d-118.4749687!2d34.0886602!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '1200 Getty Center Dr, Los Angeles, CA 90049',
  description: 'Famous, sizable free museum highlighting American & European art, architecture & manicured gardens.'
},
{
  src: 'images/place11.jpg',
  link: 'https://www.laparks.org/griffithpark',
  name: 'Griffith Park',
  miles: '9.8 miles',
  map: 'https://www.google.com/maps/dir/4730+Crystal+Springs+Dr,+Los+Angeles,+CA+90027/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1164638,-118.3265661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c08ea296b841:0x5030fc6064b8e8d1!2m2!1d-118.2802771!2d34.1328912!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '4730 Crystal Springs Dr, Los Angeles, CA 90027',
  description: 'Urban oasis featuring hiking & equestrian trails, plus city views, the Greek Theatre & L.A. Zoo.'
},
{
  src: 'images/catalina.jpg',
  link: 'https://www.visitcatalinaisland.com/',
  name: 'Catalina Island',
  miles: '33.6 miles',
  map: 'https://www.google.com/maps/dir/Catalina+Island+Express+Terminal,+Swinford+Street,+Wilmington,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@33.9667684,-118.4740963,9.27z/data=!4m14!4m13!1m5!1m1!1s0x80dd363f815b77e9:0xbdb6dbe1d1829b78!2m2!1d-118.2763812!2d33.7496756!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: 'Santa Catalina Island, Los Angeles, CA 90036',
  description: 'One hour from Long Beach on the Catalina Express ($6 round trip, book in advance!). Many island activities, such as touring the island, scuba diving, parasailing, hiking, ziplining, shopping, spas, beaches.'
},
{
  src: 'images/place13.jpg',
  link: 'https://www.farmersmarketla.com/',
  name: 'LA Farmers Market',
  miles: '16.7 miles',
  map: 'https://www.google.com/maps/dir/6333+W+3rd+St,+Los+Angeles,+CA+90036/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1164638,-118.3265661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b931ac8ef5df:0x9daf9bab6369cd0f!2m2!1d-118.3602751!2d34.0722795!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '6333 W 3rd St, Los Angeles, CA 90036',
  description: 'Historic plaza for gourmet foods & shops.'
}, 
{
  src: 'images/place14.jpg',
  link: 'https://rodeodrive-bh.com/',
  name: 'Rodeo Drive',
  miles: '23.5 miles',
  map: 'https://www.google.com/maps/dir/Rodeo+Dr,+California/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1164638,-118.3265661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2bbe4659bc7ed:0xf08801746af568dc!2m2!1d-118.4036591!2d34.0698392!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: 'Beverly Hills, California; Los Angeles, California',
  description: 'High price, high quality fashion and accessories.'
}, 
{
  src: 'images/place15.jpg',
  link: 'https://melroseavenue-shop.com/',
  name: 'Melrose Avenue',
  miles: '17.0 miles',
  map: 'https://www.google.com/maps/dir/Melrose+Ave,+California/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1164638,-118.3265661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b8d3b1e0287d:0x9cc32be17df028b8!2m2!1d-118.3366144!2d34.0834706!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: 'Avenue in Los Angeles County, California',
  description: 'Good place to take aesthetic pictures.'
},
{
  src: 'images/knotts.jpg',
  link: 'https://www.knotts.com/',
  name: "Knott's Berry Farm",
  miles: '30.9 miles',
  map: 'https://www.google.com/maps/dir/8039+Beach+Blvd,+Buena+Park,+CA+90620/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.0030502,-118.2305173,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80dd2be12c94aec7:0x13ef40f2809efd6!2m2!1d-118.0019781!2d33.8443639!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '8039 Beach Blvd, Buena Park, CA 90620',
  description: "Super fun theme park with tons of rollercoasters. Tbh I liked it more than Disneyland/Six Flags. Ryan and Shane from Buzzfeed at everything boysenberry here. Online tickets are $49."
},
{
  src: 'images/jvp.jpg',
  link: 'http://japanesevillageplaza.net/directories',
  name: 'Little Tokyo - Japanese Village Plaza',
  miles: '11.4 miles',
  map: 'https://www.google.com/maps/dir/335+E+2nd+St,+Los+Angeles,+CA+90012/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1051516,-118.2739639,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c647e35171bb:0x472799571444b4c6!2m2!1d-118.2406728!2d34.048931!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '335 E 2nd St, Los Angeles, CA 90012',
  description: 'Go to the Japanese Village Plaza for Japanese eateries, markets, retailers, offices & gift shops.'
},
{
  src: 'images/wax.jpg',
  link: 'https://www.hollywoodwaxmuseum.com/',
  name: 'Hollywood Wax Museum',
  miles: '15.2 miles',
  map: 'https://www.google.com/maps/dir/6767+Hollywood+Blvd,+Los+Angeles,+CA+90028/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1051516,-118.2739639,12z/data=!4m14!4m13!1m5!1m1!1s0x80c2bf23981db32b:0x534f5d2107cdb86f!2m2!1d-118.338119!2d34.1019213!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '6767 Hollywood Blvd, Los Angeles, CA 90028',
  description: 'Take pictures with your favorite celebrities. Tickets: $13 for under 11, $23 for regular.'
},
{
  src: 'images/venice.jpg',
  link: 'https://californiathroughmylens.com/venice-canals-near-venice-beach',
  name: 'Venice Canals',
  miles: '26.8.0 miles',
  map: 'https://www.google.com/maps/dir/Venice+Canals,+Venice,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.0726201,-118.460382,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2baa2bf5a7289:0x96e7291be897f918!2m2!1d-118.4676805!2d33.9835027!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: 'Venice Canals, CA',
  description: 'Great place for a walk.'
},
{
  src: 'images/six-flags.jpg',
  link: 'https://www.sixflags.com/magicmountain',
  name: 'Six Flags Magic Mountain',
  miles: '35.2 miles',
  map: 'https://www.google.com/maps/dir/26101+Magic+Mountain+Pkwy,+Valencia,+CA+91355/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.2897553,-118.6558834,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c280afc7bf4f99:0xfad54fb436b824a0!2m2!1d-118.5893952!2d34.4213616!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '26101 Magic Mountain Pkwy, Valencia, CA 91355',
  description: 'Rollercoasters! Long lines on weekends. Ticket: $65 online.'
}
];

let pa_array = [
{
  src: 'images/location1.jpg',
  link: 'https://www.groupon.com/deals/neon-retro-arcade',
  name: 'Neon Retro Arcade',
  miles: '2.0 miles',
  map: 'https://www.google.com/maps/dir/28+S+Raymond+Ave,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1537124,-118.1674292,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c3703440cfbd:0xcfa54a9f418accf0!2m2!1d-118.1486143!2d34.1451793!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '28 S Raymond Ave, Pasadena, CA 91105',
  description: "Loaded with over 50 vintage arcade and pinball machines. In lieu of bulky tokens, you'll pay $10 an hour for unlimited games; get a full day for $25, (Click for Groupon link - up to 38% off)."
},
{
  src: 'images/location2.jpg',
  link: 'https://www.huntington.org/',
  name: 'The Huntington Library, Art Collections, and Botanical Gardens',
  miles: '5.5 miles',
  map: 'https://www.google.com/maps/dir/The+Huntington+Library,+Art+Collections,+and+Botanical+Gardens,+Oxford+Road,+San+Marino,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1456945,-118.1759242,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2db4d02615c73:0xb328d70c295f1904!2m2!1d-118.1145242!2d34.1290452!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '1151 Oxford Rd, San Marino, CA 91108',
  description: 'Cultural center with galleries & gardens. Expansive complex housing art galleries with famous works, rare-book collections & lush gardens. Tickets: $13-$29, student discount available'
},
{
  src: 'images/location3.jpg',
  link: 'https://www.nortonsimon.org/',
  name: 'Norton Simon Museum',
  miles: '1.4 miles',
  map: 'https://www.google.com/maps/dir/Norton+Simon+Museum,+West+Colorado+Boulevard,+Pasadena,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1520924,-118.1735072,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c39e03ba9591:0x9222a2e54e367ec6!2m2!1d-118.1596776!2d34.1459383!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '411 W Colorado Blvd, Pasadena, CA 91105',
  description: 'One of the greatest private art collections on display, with pieces by Rembrandt, Goya, Degas, Monet, van Gogh, and Picasso. Tickets: Free for students, $15 for adult.'
},
{
  src: 'images/location4.jpg',
  link: 'https://www.descansogardens.org/',
  name: 'Descanso Gardens',
  miles: '6.0 miles',
  map: 'https://www.google.com/maps/dir/1418+Descanso+Dr,+La+Ca%C3%B1ada+Flintridge,+CA+91011/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1797167,-118.2023305,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2ea0417031d8d:0x142b44983b77fde0!2m2!1d-118.2111971!2d34.2014172!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '1418 Descanso Dr, La Cañada Flintridge, CA 91011',
  description: 'Picturesque botanic gardens & oak forests showcasing native plants, water features & a casual cafe. Ticket: $6 student ticket, $9 general admission'
},
{
  src: 'images/location5.jpg',
  link: 'https://www.hikespeak.com/trails/eaton-canyon-falls/',
  name: 'Eaton Canyon Falls Trail',
  miles: '5.9 miles',
  map: 'https://www.google.com/maps/dir/Eaton+Canyon+Falls+Trail,+Altadena,+CA+91001/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1708346,-118.168549,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2dd3028275a71:0xf9e163baa3011426!2m2!1d-118.102501!2d34.194609!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: 'Eaton Canyon Falls Trail, Altadena, CA 91001',
  description: "If you hike all the way to the waterfall, it's about 4.4 miles, which takes about 2 hours. Have to cross a few streams, so your feet might get wet. But the waterfall is worth it."
},
{
  src: 'images/location6.jpg',
  link: 'https://gamblehouse.org/',
  name: 'The Gamble House',
  miles: '1.0 miles',
  map: 'https://www.google.com/maps/dir/4+Westmoreland+Pl,+Pasadena,+CA+91103/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1541457,-118.1730125,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c3a04400c961:0xde064f27229120ce!2m2!1d-118.1609298!2d34.1516319!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '4 Westmoreland Pl, Pasadena, CA 91103',
  description: "Also known as the David B. Gamble House, is an iconic American Craftsman home in Pasadena. Featured as Doc Brown's abode in the Back to the Future trilogy. 1 hour guided tour: $12.50 for students, $15 for adults"
},
{
  src: 'images/location7.jpg',
  link: 'https://www.sangabrielmissionchurch.org/',
  name: 'San Gabriel Mission',
  miles: '9.9 miles',
  map: 'https://www.google.com/maps/dir/428+S+Mission+Dr,+San+Gabriel,+CA+91776/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1280209,-118.1645849,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2dad40ef3fb63:0xc6ba7ec42f1eb797!2m2!1d-118.1074142!2d34.0971693!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '428 S Mission Dr, San Gabriel, CA 91776',
  description: 'Founded in 1771, this Catholic mission with gardens & a museum has self-guided tours & a gift shop.'
},
{
  src: 'images/location8.jpg',
  link: 'https://pacificasiamuseum.usc.edu/',
  name: 'USC Pacific Asia Museum',
  miles: '2.4 miles',
  map: 'https://www.google.com/maps/dir/46+N+Los+Robles+Ave,+Pasadena,+CA+91101/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1544852,-118.1630195,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c368d22da8cb:0xa7cbaaec3cf84d76!2m2!1d-118.1408404!2d34.1467237!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '46 N Los Robles Ave, Pasadena, CA 91101',
  description: 'Museum with research library relating to Asian & Pacific art & culture in a Chinese-style building. Tickets: $7 for students, $10 for adults.'
},
{
  src: 'images/location9.jpg',
  link: 'https://www.oldpasadena.org/',
  name: 'Old Town Pasadena',
  miles: '1.8 miles',
  map: 'https://www.google.com/maps/dir/Old+Pasadena,+Pasadena,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1539916,-118.168999,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c37171756b67:0xd70ec25fdc147235!2m2!1d-118.1517653!2d34.1458891!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '23 E. Colorado Boulevard, Suite 200, Pasadena, CA 91105',
  description: "Farmer’s Market every Sunday with free kids’ activities. 200+ specialty boutiques, 100+ restaurants."
},
{
  src: 'images/location10.jpg',
  link: 'http://www.arlingtongardenpasadena.com/',
  name: 'Arlington Garden in Pasadena',
  miles: '2.6 miles',
  map: 'https://www.google.com/maps/dir/275+Arlington+Dr,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1452497,-118.1789389,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c481aadb13c9:0x398348570fd4c94f!2m2!1d-118.1556549!2d34.1286249!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '275 Arlington Dr, Pasadena, CA 91105',
  description: '3-acre, admission-free formal garden featuring Mediterranean & Californian trees & succulents.  Home to a variety of rare and endangered California-native plant species.'
},
{
  src: 'images/location11.jpg',
  link: 'https://www.jpl.nasa.gov/events/tours/views/',
  name: 'Jet Propulsion Lab',
  miles: '4.3 miles',
  map: 'https://www.google.com/maps/dir/4800+Oak+Grove+Dr,+La+Ca%C3%B1ada+Flintridge,+CA+91011/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1759959,-118.1872795,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c271c0667679:0x7426554ab4b839d1!2m2!1d-118.1750391!2d34.1989513!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '4800 Oak Grove Dr., Pasadena, CA 91109',
  description: 'Free tours, but must make reservations in advance.'
},
{
  src: 'images/location12.jpg',
  link: 'https://pasadena.edu/community/flea-market/',
  name: 'Pasadena City College Flea Market',
  miles: '4.3 miles',
  map: 'https://www.google.com/maps/dir/1570+E+Colorado+Blvd,+Pasadena,+CA+91106/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1528171,-118.1614931,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c356bc31cd2d:0xc4c6d25f9a1c5d68!2m2!1d-118.1191895!2d34.1440134!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '1570 E. Colorado Blvd, Pasadena, CA 91106',
  description: 'Takes place the first Sunday of every month (next one is 5/5) from 8am to 3pm, features tons of great vendors and is FREE to enter. Parking is just $2.'
}
];

const Locations = () => {
  // called for every item in array
  const places_la = la_array.map(yelp => {
    return (
      <Grid.Column>
      <Item.Group>
        <LocationItem 
        yelp={yelp}
        />
      </Item.Group>
      </Grid.Column>
    );
  });

  const places_pa = pa_array.map(yelp => {
    return (
      <Grid.Column>
      <Item.Group>
        <LocationItem 
        yelp={yelp}
        />
      </Item.Group>
      </Grid.Column>
    );
  });
  
  return (
      <div className="image-gallery">
          <Segment basic>
            <p>
              There are lots of things to do in LA. Be prepared for a lot of walking and waiting in traffic. 
              Many of these locations are from this <a target="_blank" href="https://docs.google.com/document/u/1/d/1xCC6CLX1L_ek9urQgDbQaRjaYrfkyzk2hHfPpyKA6Q8/mobilebasic?fbclid=IwAR3D-bq_wwzx84cAFSzGwQkWhW_v8rAZ5x6Ggbc5SwjMzA630Ym_DKnu9BE">guide</a>,
              so be sure to check it out for more places to go. The distance is from the location to the Rose Bowl Stadium, and if you click on the link you can find directions on Google Maps.
            </p>
          </Segment>
            
          <Divider horizontal className="calc-divider">PASADENA</Divider>
            <Grid stackable columns={4}>
                {places_pa}
            </Grid>
          <Divider horizontal className="calc-divider">LOS ANGELES</Divider>
            <Grid stackable columns={4}>
                {places_la}
            </Grid>

      </div>
      
  );
};

export default Locations;