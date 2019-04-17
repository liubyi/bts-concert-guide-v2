import React from 'react'
import { Card, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'
import TouristGridItem from './TouristGridItem';
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

let yelpArray1 = [
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
}
];

let yelpArray2 = [
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
  address: 'Manhattan BeachCalifornia 90266',
 description: 'The beach that BTS went to during AHL.'
},
{
  src: 'images/catalina.jpg',
  link: 'https://www.visitcatalinaisland.com/',
  name: 'Catalina Island',
  miles: '33.6 miles',
  map: 'https://www.google.com/maps/dir/Catalina+Island+Express+Terminal,+Swinford+Street,+Wilmington,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@33.9667684,-118.4740963,9.27z/data=!4m14!4m13!1m5!1m1!1s0x80dd363f815b77e9:0xbdb6dbe1d1829b78!2m2!1d-118.2763812!2d33.7496756!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '189 The Grove Drive Los Angeles, CA 90036',
  description: 'One hour from Long Beach on the Catalina Express ($6 round trip, book in advance!). Many island activities, such as touring the island, scuba diving, parasailing, hiking, ziplining, shopping, spas, beaches.'
},
{
  src: 'images/grove.jpg',
  link: 'https://thegrovela.com/',
  name: 'The Grove',
  miles: '16.3 miles',
  map: 'https://www.google.com/maps/dir/The+Grove,+The+Grove+Drive,+Los+Angeles,+CA/Rose+Bowl+Stadium,+Rose+Bowl+Drive,+Pasadena,+CA/@34.0801842,-118.33302,14.32z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80c2b92fc2d303c3:0xc3906f8fff88db6e!2m2!1d-118.3578454!2d34.0720919!1m5!1m1!1s0x80c2c3a428b91491:0x4c4ffdc71c2abf2f!2m2!1d-118.1676462!2d34.1613284!3e0',
  address: '189 The Grove Drive Los Angeles, CA 90036',
  description: 'BTS was here too.'
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
}
];

let yelpArray3 = [
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
}
];
const TouristGrid = () => {
  // called for every item in array
  const col1 = yelpArray1.map(yelp => {
    return (
      <Item.Group>
        <TouristGridItem 
        yelp={yelp}
        />
      </Item.Group>
    );
  });
  const col2 = yelpArray2.map(yelp => {
    return (
      <Item.Group>
        <TouristGridItem 
        yelp={yelp}
        />
      </Item.Group>
    );
  });
  const col3 = yelpArray3.map(yelp => {
    return (
      <Item.Group>
        <TouristGridItem 
        yelp={yelp}
        />
      </Item.Group>
    );
  });
  const col4 = yelpArray2.map(yelp => {
    return (
        <Card>
          <Image src={yelp.src} />
          <Card.Content>
            <Card.Description textAlign='center'>{yelp.name}</Card.Description>
          </Card.Content>
        </Card>
    );
  });
  const col5 = yelpArray1.map(yelp => {
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

          <Segment>
            <p>
              There are lots of things to do in LA. Be prepared for a lot of walking and waiting in traffic. 
              Many of these locations are from this <a target="_blank" href="https://docs.google.com/document/u/1/d/1xCC6CLX1L_ek9urQgDbQaRjaYrfkyzk2hHfPpyKA6Q8/mobilebasic?fbclid=IwAR3D-bq_wwzx84cAFSzGwQkWhW_v8rAZ5x6Ggbc5SwjMzA630Ym_DKnu9BE">guide</a>,
              so be sure to check it out for more places to go. The distance is from the location to the Rose Bowl Stadium, and if you click on the link you can find the address of the location.
            </p>
          </Segment>
            <Grid stackable columns={3}>
              <Grid.Column>
                {col1}
              </Grid.Column>
              <Grid.Column>
                {col2}
              </Grid.Column>
              <Grid.Column>
                {col3}
              </Grid.Column>
            </Grid>
      </div>
      
  );
};

export default TouristGrid;

        // <Card.Group itemsPerRow={3}>
        //   {col4}
        // </Card.Group>

        // <Grid stackable columns={4}>
        //         {col5}
        // </Grid>