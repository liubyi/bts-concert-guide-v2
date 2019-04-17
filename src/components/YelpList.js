import React from 'react'
import {Divider, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'
import YelpItem from './YelpItem';

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

let yelpArray1 = [
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
  description: 'If you guys are into mukbangs or corndogs, DEFINITELY check out Myungrang Hot Dogs! They are the famous korean hot dogs with mozarella cheese pulls that every korean mukbanger has been eating and it is only $3-$5 each! Lines are long but so worth it!'
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
  description: 'Cool lunch joint by the Pasadena Convention Center.'
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
  src: 'images/food14.jpg', 
  link: 'https://www.yelp.com/biz/caf%C3%A9-86-pasadena-2',
  name: 'Café 86',
  dollar: '$',
  numWholeStars: returnWhole(4),
  numHalfStars: returnHalf(1),
  miles: '1.8 miles',
  map: 'https://www.google.com/maps/dir/36+W+Colorado+Blvd,+Pasadena,+CA+91105/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.1538318,-118.1687871,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2c371109c57b5:0x39ed2526d1f2a942!2m2!1d-118.151331!2d34.1454169!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '36 W Colorado Blvd Pasadena, CA 91105',
  description: 'Five stars specifically for the ube cupcake with flan on top.'
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
  description: 'This taco truck only sells tacos and each taco is $1.64. There are seven meat options (asada, al pastor, carnitas, chicharron, cabeza, lengua, and pollo) and they also sell horchata and pineapple water.'
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
}
];

let yelpArray2 = [
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
  description: 'Highly recommend Tea Master Matcha Cafe in Little Tokyo. They have really bomb matcha soft serve (I also saw BTS posters at a chicken shop right next to it xD)'
}
];

const YelpList = () => {
  // called for every item in array
  const col1 = yelpArray1.map(yelp => {
    return (
      <Item.Group>
        <YelpItem 
        yelp={yelp}
        />
      </Item.Group>
    );
  });
  const col2 = yelpArray2.map(yelp => {
    return (
      <Item.Group>
        <YelpItem 
        yelp={yelp}
        />
      </Item.Group>
    );
  });
  return (
      <div className="image-gallery">
          <Segment basic>
            <p>
              There are lots of places to eat in LA. Many people recommend going to Koreatown or Little Tokyo.
              You can find restaurants from Buzzfeed's Worth It 
              series from this <a target="_blank" href="https://docs.google.com/spreadsheets/d/1Nby6OVTT8M9RtbrvETIO84Lo8A9iBJs-eVSqXpr3ZDg/edit#gid=0">spreadsheet</a>,
              (compiled by Reddit user <a target="_blank" href="https://www.reddit.com/r/FoodNYC/comments/9u9q46/i_made_a_giant_spreadsheet_of_every_dish_from/">u/pauseforasecond</a>)
              such as the <a target="_blank" href="https://www.youtube.com/watch?v=2GZrPR5Ajrs&index=1&list=PL5vtqDuUM1DlngI3_qX9SFT_U9eIKyk3o">$3 sushi from Sushi Stop</a>. Below
              are some restaurants recommended by ARMYs, as well as restaurants close to the Rose Bowl Stadium. The
              distance is from the restaurant to the Rose Bowl Stadium, and if you click on the link you can find the address of the location.
            </p>
          <Divider horizontal className="calc-divider">PLACES NEAR PASADENA</Divider>
          </Segment>
          <Segment>
            <Grid stackable columns={2}>
              <Grid.Column>
                {col1}
              </Grid.Column>
              <Grid.Column>
                {col2}
              </Grid.Column>
            </Grid>
          </Segment>
      </div>
      
  );
};

export default YelpList;