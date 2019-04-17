import React from 'react'
import {List, Divider, Header, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'
import FoodItem from './FoodItem';

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

let food_pa = [
{
  src: 'images/food28.jpg', 
  link: 'https://www.yelp.com/biz/chris-korean-bbq-pasadena?osq=kbbq',
  name: 'Chris Korean Barbeque',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '4.7 miles',
  map: 'https://www.google.com/maps/dir/2063+E+Colorado+Blvd,+Pasadena,+CA+91107/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1541115,-118.1733809,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2dcabbf16ab8d:0x9493b97a736a2f40!2m2!1d-118.1080334!2d34.1463125!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '2063 E Colorado Blvd, Pasadena, CA 91107',
  description: "Good quality meats. Service may be a bit slow when busy. The pricing is reasonable as well for AYCE. There are 2 tiers, the classic for $26.99 and the premium which has seafood and better short ribs for about $30."
},
  {
  src: 'images/food12.jpg', 
  link: 'https://www.yelp.com/biz/dog-haus-biergarten-pasadena',
  name: 'Dog Haus Biergarten ',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '2.5 miles',
  map: 'https://www.google.com/maps/dir/93+E+Green+St,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1529343,-118.1660624,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c3703a498925:0xf334bae12b19688f!2m2!1d-118.148375!2d34.1446723!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '93 E Green St Pasadena, CA 91105',
  description: 'Cool lunch joint by the Pasadena Convention Center. They have the Impossible 2.0 burger for vegetarians. There are some street parking spots around the block. In additional there is a parking structure nearby.'
},
{
  src: 'images/food15.jpg', 
  link: 'https://www.yelp.com/biz/los-california-tacos-pasadena',
  name: 'Los California Tacos',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '2.9 miles',
  map: 'https://www.google.com/maps/dir/510+S+Fair+Oaks+Ave,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1490106,-118.1768097,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c37c83e18983:0xba6358cce34c6efe!2m2!1d-118.1498226!2d34.1371092!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '510 S Fair Oaks Ave Pasadena, CA 91105',
  description: 'This taco truck only sells tacos and each taco is $1.64. There are seven meat options (asada, al pastor, carnitas, chicharron, cabeza, lengua, and pollo).'
},
{
  src: 'images/food13.jpg', 
  link: 'https://www.yelp.com/biz/osawa-shabu-shabu-and-sushi-pasadena',
  name: 'Osawa Shabu Shabu & Sushi',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '1.9 miles',
  map: 'https://www.google.com/maps/dir/77+N+Raymond+Ave,+Pasadena,+CA+91103/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1539916,-118.1675792,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c3718e70f1f1:0x1de037af5f2edc7b!2m2!1d-118.1492372!2d34.1472713!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '77 N Raymond Ave Pasadena, CA 91103',
  description: 'Japanese, Sushi Bars'
},
{
  src: 'images/food16.jpg', 
  link: 'https://www.yelp.com/biz/lunasia-dim-sum-house-pasadena',
  name: 'Lunasia Dim Sum House',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '2.2 miles',
  map: 'https://www.google.com/maps/dir/239+E+Colorado+Blvd,+Pasadena,+CA+91101/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1535499,-118.1658634,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c36fb3bc4855:0x51e856ef74a02c6e!2m2!1d-118.1454848!2d34.1460415!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0f',
  address: '239 E Colorado Blvd Pasadena, CA 91101',
  description: 'Dim Sum, Cantonese'
},
{
  src: 'images/food17.jpg', 
  link: 'https://www.yelp.com/biz/ramen-tatsunoya-pasadena',
  name: 'Ramen Tatsunoya',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '1.9 miles',
  map: 'https://www.google.com/maps/dir/16+N+Fair+Oaks+Ave,+Pasadena,+CA+91103/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1539916,-118.1682777,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c371a074f421:0x1ae07247be3b6ee8!2m2!1d-118.1503113!2d34.1461583!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '16 N Fair Oaks Ave Pasadena, CA 91103',
  description: "Ramen Tatsunoya specializes in tonkotsu, pork bone broth, ramen. Recommendations: spicy ramen with extra chashu and egg, the tatsunoya roll, and Koku Tonkotsu."
},
{
  src: 'images/food21.jpg', 
  link: 'https://www.yelp.com/biz/blaze-fast-fired-pizza-pasadena',
  name: 'Blaze Fast-Fire’d Pizza',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '2.7 miles',
  map: 'https://www.google.com/maps/dir/667+E+Colorado+Blvd,+Pasadena,+CA+91101/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1536248,-118.1702854,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c3680eac3f8d:0x9f7b93383cb3430c!2m2!1d-118.136774!2d34.14606!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '667 East Colorado Blvd Pasadena, CA 91101',
  description: '$7.95 for a Build Your Own with unlimited toppings. Delicious crust, short wait time.'
},
{
  src: 'images/food22.jpg', 
  link: 'https://www.yelp.com/biz/art-science-cafe-pasadena-2',
  name: 'Art+Science Cafe',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '3.0 miles',
  map: 'https://www.google.com/maps/dir/101+S+Madison+Ave,+Pasadena,+CA+91101/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1513187,-118.1705404,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c367cacf3e09:0x19788625bd93dbd1!2m2!1d-118.1385776!2d34.1441449!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '101 S Madison Ave Pasadena, CA 91101',
  description: 'Coffee & Tea, Sushi Bars, Juice Bars & Smoothies. Sushi rolls are comparable to many decent restaurants around town.'
},
{
  src: 'images/food-bts.jpg', 
  link: 'https://www.yelp.com/biz/in-n-out-burger-glendale?osq=in+n+out',
  name: 'In-N-Out Burger',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '5.1 miles',
  map: 'https://www.google.com/maps/dir/310+Harvey+Dr,+Glendale,+CA+91206/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1514989,-118.1692903,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c173624b0e33:0x7c67a4167a58d447!2m2!1d-118.2273294!2d34.1486551!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '310 N Harvey Dr Glendale, CA 91206',
  description: "Actually located in Glendale, but it's the closest In-N-Out to Pasadena. Cheap but quality, delicious burgers."
},
{
  src: 'images/food27.jpg', 
  link: 'https://www.yelp.com/biz/king-of-ramen-pasadena-pasadena',
  name: 'King of Ramen Pasadena',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '5.5 miles',
  map: 'https://www.google.com/maps/dir/2391+E+Colorado+Blvd,+Pasadena,+CA+91107/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1542635,-118.1686574,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2dca87782fb07:0xe2fff3cafaf1b979!2m2!1d-118.1007347!2d34.146366!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '2391 E Colorado Blvd, Pasadena, CA 91107',
  description: "Cheap prices, generous portions. No credit card under $15. They develop their own kombu based broth (no meat products whatsoever), so it's vegetarian-friendly."
},
{
  src: 'images/food23.jpg', 
  link: 'https://www.groupon.com/deals/little-sheep-mongolian-hot-pot-pasadena-3',
  name: 'Little Sheep Mongolian Hot Pot',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '2.0 miles',
  map: 'https://www.google.com/maps/dir/45+S+Fair+Oaks+Ave,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1536091,-118.1683517,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c37101889595:0xaa48f28c890d4c44!2m2!1d-118.1506038!2d34.1449715!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '45 S Fair Oaks Ave Pasadena, CA 91105',
  description: 'Groupon deal: 40% off (Click the title to go to Groupon)'
},
{
  src: 'images/food26.jpg', 
  link: 'https://www.yelp.com/biz/roll-factory-by-straycat-pasadena-6',
  name: 'Roll factory by straycat ',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '1.8 miles',
  map: 'https://www.google.com/maps/dir/62+W+Union+St+%231,+Pasadena,+CA+91103/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1539916,-118.1690496,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c3715d421a9d:0x9ea209b000f51cf8!2m2!1d-118.1518572!2d34.1465975!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '62 W Union St Ste 1 Pasadena, CA 91103',
  description: 'Fresh Poke, sushi rolls, ice cream. 1) they have purple rice 2) portions are huge 3) service is super friendly 4) avocado at no extra charge'
},
{
  src: 'images/food14.jpg', 
  link: 'https://www.yelp.com/biz/caf%C3%A9-86-pasadena-2',
  name: 'Café 86',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '1.8 miles',
  map: 'https://www.google.com/maps/dir/36+W+Colorado+Blvd,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1538318,-118.1687871,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c371109c57b5:0x39ed2526d1f2a942!2m2!1d-118.151331!2d34.1454169!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '36 W Colorado Blvd Pasadena, CA 91105',
  description: 'Cafe 86 serves Ube pastries, drinks and dessert, such as ube truffle, ube cupcake with flan on top, ube bundt cake, and ube concha. Check in on Yelp to get a free Hibiscus Cooler with the purchase of a pastry!'
},
{
  src: 'images/food18.jpg', 
  link: 'https://www.yelp.com/biz/the-pie-hole-pasadena',
  name: 'The Pie Hole',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '1.9 miles',
  map: 'https://www.google.com/maps/dir/59+E+Colorado+Blvd,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1539916,-118.1677311,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c371b987e733:0x15e9146884b155c3!2m2!1d-118.1492225!2d34.1461875!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '59 E Colorado Blvd Pasadena, CA 91105',
  description: 'This was a Buzzfeed Worth It stop! Interesting flavors such as apple crumble, Matcha green tea, Earl Grey Pie, and Maple Custard.'
},
{
  src: 'images/food19.jpg', 
  link: 'https://www.yelp.com/biz/motto-tea-cafe-pasadena-2',
  name: 'Motto Tea Cafe ',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '1.8 miles',
  map: 'https://www.google.com/maps/dir/100+W+Green+St+%23101,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1514989,-118.1692438,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c370d7c9b029:0x1ce33ab15dff41e!2m2!1d-118.1526338!2d34.1443529!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '100 W Green St Unit 101 Pasadena, CA 91105',
  description: 'Motto offers a variety of tea (hot and iced) and fruit drinks such as Kyoto Uji Matcha, cheese foam teas, taro latte, etc as well as sweet and savory pancakes, such as soufflé pancakes (fluffy pancakes).'
},
{
  src: 'images/food20.jpg', 
  link: 'https://www.yelp.com/biz/colorado-donuts-los-angeles',
  name: 'Colorado Donuts',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '3.2 miles',
  map: 'https://www.google.com/maps/dir/1578+Colorado+Blvd+%2314,+Los+Angeles,+CA+90041/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.149858,-118.213122,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c3e0b9f6a3b1:0xca5fa056db01d7e9!2m2!1d-118.200896!2d34.1389848!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '1578 Colorado Blvd Ste 14 Los Angeles, CA 90041',
  description: 'We have Specialty Donuts, Ube Donuts, Ice Cream Donuts, Custom Donut orders, Texas Sized Donuts, and Croissant Donuts. Has vegan options! Free Yelp Check-in donut.'
},
{
  src: 'images/food24.jpg', 
  link: 'https://www.yelp.com/biz/milkie-and-snowie-pasadena-2',
  name: 'Milkie & Snowie',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '2.0 miles',
  map: 'https://www.google.com/maps/dir/61+S+Fair+Oaks+Ave+%23140,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1514917,-118.1683307,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c370fd0b4f4b:0xe1ffe2751b0c8b4d!2m2!1d-118.1509425!2d34.1447333!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '61 S Fair Oaks Ave Ste 140 Pasadena, CA 91105',
  description: 'Korean Bingsu (snow ice), Taiyaki (fish shaped waffle with ice cream) , waffles with mochi, Freshly brewed Milk Tea and coffee'
},
{
  src: 'images/food25.jpg', 
  link: 'https://www.yelp.com/biz/midori-matcha-cafe-pasadena',
  name: 'Midori Matcha Cafe ',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '1.9 miles',
  map: 'https://www.google.com/maps/dir/165+S+De+Lacey+Ave+%231049,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1514989,-118.1692903,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c370c8696d29:0x6481715bf944b317!2m2!1d-118.1525423!2d34.1432553!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '165 S De Lacey Ave Ste 1049 Pasadena, CA 91105',
  description: 'Nice tearoom/cafe. Has wifi!'
}
];


let food_la = [
{
  src: 'images/food1.jpg', 
  link: 'https://www.yelp.com/biz/ahgassi-gopchang-los-angeles-6?osq=Ahgassi+Gopchang',
  name: 'Ahgassi Gopchang',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '13.3 miles',
  map: 'https://www.google.com/maps/dir/3744+W+6th+St,+Los+Angeles,+CA+90005/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1118616,-118.3011348,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b89cb5bb0a1f:0xc3fd06b9459a25a9!2m2!1d-118.3039405!2d34.0633624!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '3744 W 6th St Los Angeles, CA 90005',
  description: 'KBBQ place mentioned by Jin. Ahgassi Gopchang is my favorite premium and NON-AYCE kbbq however it is quite $$$ but there are a lot of cheaper alternatives if you guys want ayce such as Bulgogi Hut!'
}, 
{
  src: 'images/food9.jpg', 
  link: 'https://www.yelp.com/biz/bulgogi-hut-los-angeles-3',
  name: 'Bulgogi Hut',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '13.3 miles',
  map: 'https://www.google.com/maps/dir/3600+Wilshire+Blvd+%23100C,+Los+Angeles,+CA+90010/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1045502,-118.3009832,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b8830a7d13db:0xf9888ef5c87967d2!2m2!1d-118.3036379!2d34.0605163!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '3600 Wilshire Blvd Ste 100C Los Angeles, CA 90010',
  description: 'AYCE KBBQ'
},
{
  src: 'images/food10.jpg', 
  link: 'https://www.yelp.com/biz/myungrang-hot-dog-california-market-la-los-angeles',
  name: 'Myungrang Hot Dog-California Market LA',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '14.6 miles',
  map: 'https://www.google.com/maps/dir/450+S+Western+Ave+%23313,+Los+Angeles,+CA+90020/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.113452,-118.3267376,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b89a4a16388b:0x9e1218d6be42b5aa!2m2!1d-118.3083861!2d34.0657222!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '450 S Western Ave Ste 313 Los Angeles, CA 90020',
  description: "If you guys are into mukbangs or corndogs, DEFINITELY check out Myungrang Hot Dogs! They are the famous korean hot dogs with mozarella cheese pulls and they're only $3-$5 each!"
},
{
  src: 'images/food29.jpg', 
  link: 'https://www.yelp.com/biz/eggslut-los-angeles-7?osq=egg+slut',
  name: 'Eggslut',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '11.1 miles',
  map: 'https://www.google.com/maps/dir/Grand+Central+Market,+317+South+Broadway,+Los+Angeles,+CA+90013/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1061139,-118.2896141,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c64b8e4372e7:0x489d4efdeb06d3d8!2m2!1d-118.2487951!2d34.050655!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '317 S Broadway Grand Central Market Los Angeles, CA 90013',
  description: "I really though BTS were mispronouncing 'egg salad' everytime they said they had Eggslut for lunch."
}, 
{
  src: 'images/food30.jpg', 
  link: 'https://www.yelp.com/biz/gogobop-korean-rice-bar-los-angeles?osq=best+places+to+eat',
  name: 'Gogobop Korean Rice Bar',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnWhole(1),
  miles: '13.1 miles',
  map: 'https://www.google.com/maps/dir/3456+Wilshire+Blvd,+Los+Angeles,+CA+90010/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1112466,-118.3033061,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b8827c3dfd4d:0xdb61f3b86b6a5aad!2m2!1d-118.2998999!2d34.0614727!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '3456 Wilshire Blvd, Los Angeles, CA 90010',
  description: "Build your own bowl. Lots of food for $10ish/bowl."
}, 
{
  src: 'images/food31.jpg', 
  link: 'https://www.yelp.com/biz/bbq-rice-korean-bbq-bowls-los-angeles-15?osq=kbbq+acye',
  name: 'BBQ + RICE Korean BBQ Bowls',
  dollar: '$',
  numWholeStars: returnWhole(5),
  numHalfStars: '',
  miles: '16.2 miles',
  map: 'https://www.google.com/maps/dir/7363+Sunset+Blvd,+Los+Angeles,+CA+90046/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1166058,-118.3285802,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2bedec8892639:0x2f483ff115177294!2m2!1d-118.3504481!2d34.0984361!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '7363 W Sunset Blvd, Los Angeles, CA 90046',
  description: "5 stars on Yelp. Everyone says the food and service is amazing. $9 for a large bowl of meat. "
}, 
{
  src: 'images/food2.jpg', 
  link: 'https://www.yelp.com/biz/sul-and-beans-los-angeles',
  name: 'Sul & Beans',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '13.6 miles',
  map: 'https://www.google.com/maps/dir/621+S+Western+Ave+%23208A,+Los+Angeles,+CA+90005/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1045502,-118.3039292,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b89ac12b10c3:0xb83d856197292ff0!2m2!1d-118.3095299!2d34.0627765!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '621 S Western Ave Ste 208A Los Angeles, CA 90005',
  description: 'Sul & beans for shaved ice IS DELECIOUS! (That and somi somi is in the same plaza BTS came to in American Hustle life and Jimin tried hanbok)'
}, 
{
  src: 'images/food3.jpg', 
  link: 'https://www.yelp.com/biz/rose-and-blanc-tea-room-los-angeles-4',
  name: 'Rose & Blanc Tea Room',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '14.3 miles',
  map: 'https://www.google.com/maps/dir/301+S+Western+Ave+%23202,+Los+Angeles,+CA+90020/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1121439,-118.3040426,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b899b8f09b25:0xcfabf15c2440a0cc!2m2!1d-118.3096191!2d34.0685744!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '301 S Western Ave Ste 202 Los Angeles, CA 90020',
  description: 'Rose & blanc is a tea room that is SUPER CUTE'
}, 
{
  src: 'images/food4.jpg', 
  link: 'https://www.yelp.com/biz/spoon-by-h-los-angeles',
  name: 'Spoon By H',
  dollar: '$',
  numWholeStars: returnWhole(3),
  numHalfStars: returnHalf(1),
  miles: '15.3 miles',
  map: 'https://www.google.com/maps/dir/7158+Beverly+Blvd,+Los+Angeles,+CA+90036/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1121439,-118.3225455,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b8d7cd4ad363:0x85011ccab5196e82!2m2!1d-118.3453971!2d34.0758447!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '7158 Beverly Blvd Los Angeles, CA 90036',
  description: 'Spoon by H everything they have is so good and instagramable (they have both desserts/drinks and food food)'
},
{
  src: 'images/food5.jpg', 
  link: 'https://www.yelp.com/biz/carrera-cafe-los-angeles',
  name: 'Carrera Cafe',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '16.7 miles',
  map: 'https://www.google.com/maps/dir/8251+Melrose+Ave,+Los+Angeles,+CA+90046/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.116688,-118.4081787,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2bec9e734d22f:0x1db8ee35dc73b4c4!2m2!1d-118.3692108!2d34.0838422!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '8251 Melrose Ave Los Angeles, CA 90046',
  description: 'You can print anything on your coffee.'
},
{
  src: 'images/food6.jpg', 
  link: 'https://www.yelp.com/biz/cafe-d-er-artesia',
  name: 'Cafe D.er',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '27.9 miles',
  map: 'https://www.google.com/maps/dir/17901+Pioneer+Blvd+Ste+L,+Artesia,+CA+90701/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.0147326,-118.2446729,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80dd2d0c1fe80413:0x60aed4261410b6da!2m2!1d-118.0831419!2d33.8677271!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '17901 Pioneer Blvd Ste L Artesia, CA 90701',
  description: 'Fluffiest pancakes!'
},
{
  src: 'images/food7.jpg', 
  link: 'https://www.yelp.com/biz/cafe-maji-artesia',
  name: 'Cafe Maji',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '28.2 miles',
  map: 'https://www.google.com/maps/dir/12232+Artesia+Blvd+%238,+Artesia,+CA+90701/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.0172158,-118.2446729,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80dd2d048330ce0b:0xc9b7400c002039cb!2m2!1d-118.071452!2d33.8726937!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '12232 E Artesia Blvd Ste 8 Artesia, CA 90701',
  description: 'Their banana latte is amazing!'
},
{
  src: 'images/food8.jpg', 
  link: 'https://www.yelp.com/biz/yellow-house-cafe-los-angeles',
  name: 'Yellow House Cafe',
  dollar: '$$',
  numWholeStars: returnWhole(4),
  numHalfStars: '',
  miles: '13.6 miles',
  map: 'https://www.google.com/maps/dir/234+S+Oxford+Ave,+Los+Angeles,+CA+90004/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1121439,-118.3031458,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b898fcec149b:0x62d92091efcc9f89!2m2!1d-118.3075869!2d34.0701425!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '234 S Oxford Ave Los Angeles, CA 90004',
  description: 'You can make your own smores there which is so fun!'
},
{
  src: 'images/food11.jpg', 
  link: 'https://www.yelp.com/biz/tea-master-matcha-cafe-and-green-tea-shop-los-angeles',
  name: 'Tea Master Matcha Cafe & Green Tea Shop',
  dollar: '$',
  numWholeStars: returnWhole(5),
  numHalfStars: '',
  miles: '12 miles',
  map: 'https://www.google.com/maps/dir/450+E+2nd+St,+Los+Angeles,+CA+90012/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1015407,-118.2739641,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c6385c786915:0x7570068d5d96923b!2m2!1d-118.2385981!2d34.0470848!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '450 E 2nd St Los Angeles, CA 90012',
  description: 'Highly recommend. They have really bomb matcha soft serve (I also saw BTS posters at a chicken shop right next to it xD)'
}
];


const FoodList = () => {
  const la_food = food_la.map(yelp => {
    return (
      <Grid.Column>
      <Item.Group>
        <FoodItem 
        yelp={yelp}
        />
        </Item.Group>
        </Grid.Column>
    );
  });
  const pa_food = food_pa.map(yelp => {
    return (
      <Grid.Column>
      <Item.Group>
        <FoodItem 
        yelp={yelp}
        />
      </Item.Group>
      </Grid.Column>
    );
  });
  return (
      <div className="image-gallery">
          <Segment basic>
            <List bulleted>

            <List.Item>
              There are lots of delicious restaurants in LA. Many people recommend going to Koreatown or Little Tokyo.
            </List.Item>

            <List.Item>
              For the Buzzfeed fans, you can find restaurants from Buzzfeed's Worth It 
              series from this <a target="_blank" href="https://docs.google.com/spreadsheets/d/1Nby6OVTT8M9RtbrvETIO84Lo8A9iBJs-eVSqXpr3ZDg/edit#gid=0">spreadsheet</a>,
              (compiled by Reddit user <a target="_blank" href="https://www.reddit.com/r/FoodNYC/comments/9u9q46/i_made_a_giant_spreadsheet_of_every_dish_from/">u/pauseforasecond</a>)
              such as the <a target="_blank" href="https://www.youtube.com/watch?v=2GZrPR5Ajrs&index=1&list=PL5vtqDuUM1DlngI3_qX9SFT_U9eIKyk3o">$3 sushi from Sushi Stop</a>.
            </List.Item>

            <List.Item>
              However, for people who want to stay around Pasadena before heading to the concert, there are lots of options too.
            </List.Item>


            <List.Item>
              There are many restaurants in Old Town Pasadena that are within 1 to 2 miles of the Rose Bowl Stadium.
              <List.List>
                <List.Item>Below are some restaurants I recommend. The distance is the number of miles to the Rose Bowl. Clicking on the distance link
                  will display the address, and clicking on the address will take you to Google maps. </List.Item>
                <List.Item>I listed a lot of cheap Asian food places and cafes (because these are the ones I plan to visit), but there are tons of other options listed on Yelp! 
                  Find them <a href="https://www.yelp.com/search?find_desc=&find_loc=rose%20bowl%20stadium" target="_blank"> here</a>.</List.Item>
                <List.Item>It's a nice ~40ish minute walk from these restaurants to the concert (to walk off the calories haha).</List.Item>
                <List.Item>Otherwise, you can take the shuttle that start running around 3:30pm, or Uber/Lyft to the stadium.</List.Item>
              </List.List>
            </List.Item>

            <List.Item>
              The restaurants outside of Pasadena (in LA) were recommendations by ARMYs on this <a href="https://www.facebook.com/groups/852207088215931/permalink/1617746451661987/" target="_blank"> Facebook post. </a>
            </List.Item>
            
          </List>

          </Segment>
          <Divider horizontal className="calc-divider">PASADENA</Divider>
            <Grid stackable columns={5}>
                {pa_food}
            </Grid>
          <Divider horizontal className="calc-divider">LOS ANGELES</Divider>
            <Grid stackable columns={5}>
                {la_food}
            </Grid>
      </div>
      
  );
};

export default FoodList;