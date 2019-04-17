import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'images/free1.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/photo.php?fbid=422924148279589&set=gm.1630664257036873&type=3&eid=ARCFPgWHRM8xtvMAoZ0nmeds54qgXPt-To0xgXozMjCEvFCzR5e5EzmFgkEkZLhT4eKpx8pTrwZm4yip&ifg=1'>
  Kristy Wong: Hey guys! I’ve seen so many generous people making posts about giving out freebies on the concert dates, and I’ve been wanting to do the same but I didn’t know what I would want to pass out. But today, I’m sure all of you guys saw the donut holes post, and from that I got inspired to also pass out some treats 😂. So I’ll be making BT21 themed sugar cookies like the ones in the picture below (photo credit to the owner; not my photo). I’ll be passing them out at Rose Bowl on 5/4, one free for each person and if you want more, it’s $1 per cookie after the free one so I don’t go completely broke (I’ll also have a tip jar hehe) 😅. Anyway, comment if you’re interested so I know how much I have to make 💜 Also if you’re also selling or passing out freebies and would like to trade with my cookies, that’ll be cool 😋</a> },
  
  { src: 'images/free16.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1642501262519839/'>
  Lis PC: For anyone attending 05/04: I will be passing out freebies the day of the concert!! Freebies include a goodie bag with the photocard below and 4 other ones(that aren't transparent) + candy.
Time and location are still being determined and I will likely not know until the day of the concert. I will post updates and locations on my twitter so follow me there! @ honey_yoongi 
https://twitter.com/honey_yoongi
Follow me on Instagram: https://instagram.com/p/BvifAkBArBV/ (I will have roughly 250 of these freebies to hand out, limited to one per person and first come first serve)</a>},

  { src: 'images/free26.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/photo.php?fbid=10157607562199893&set=pcb.1645342735569025&type=3&theater&ifg=1'>
  Annie Li: Hello! Sandy Li and I are making these as freebies. We will be at the Rose Bowl on 5/5 and passing them out randomly, on a first come first serve basis. We're not sure if we are leaving as is or turning them to pins. I will update our location on Twitter (@bearlysafe) or on IG (@accompannie). Thank you!
[EDIT] Hello! Thank you for everyone's interest ☺️ I added some pictures to show the sizes of these. They're made from mini perler beads. Also, we won't be making a lot of the bt21 ones. Sorry!</a>},

  { src: 'images/free24.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1648815561888409/'>
  Katherine Sandoval: I’m so excited for May that I got started on my freebies early! My sister and I will be handing out these photo prints and lomo cards at the concert 🥰 over +450 prints so far!</a>},

  { src: 'images/free3.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1642589789177653/'>
  Rachele Lim: Hi! I’ve decided to give out goodie bags for the Speak Yourself tour!!!!🤗 I probably will be going both days to get merch, but I’m definitely going on 5/5!!! The goodie bags will include transparent photocards of the individual members(google form below), stickers of Jin (pic down below), and little snacks/candies!💜 I will tweet my location the day of the concerts so follow me on twitter @breadgenie1004 to be updated!!! If you want to trade goodie bags please pm me your bias so I can save one for you!!! If I run out of photocards don’t worry, I’ll give away the rest of my stickers cause I ordered a couple thousand😱😂💜💜💜 So please let me know if your interested thank you!!!!!😋
https://forms.gle/9iKqFJdSkkCEToJD7 
USE THIS FORM IF YOU WANT TO RESERVE A GOODIE BAG! WILL BE LIMITED RESERVATIONS!
*edit: GOODIE BAG RESERVATION CLOSE*</a> },
  
  { src: 'images/free4.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1641536215949677/'>
  Alissa Way: Hi everyone!! My friends and I decided that we wanted to pass out little goodie bags, before the May 4th concert begins, that would include homemade PCs and stickers (& a few candies too 🤗). 
I’ve been editing some pc designs and I wanted to share my “Sailor Joon” card with you all, as we decided on a meme theme haha 😂 Please let me know if you’re interested in getting one of our goodie bags so I can get an estimate of how many we would have to put together! Thank you!! 🥰</a> },
  
  { src: 'images/free5.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1636954563074509/'>
  Cat Truong: Hello beautiful ARMYs✨💜 I’ve been seeing many people making goodie bags for the concert and it makes me so happy to see everyone spreading nothing but love and for our boys! I’ve also been preparing goodie bags and I’ll have well over one thousand to hand out, split between both showings (500+ for Saturday and 500+ for Sunday). I’ve prepared them with stickers that I designed and made (including special “speak yourself” stickers that I made exclusively for the concert!), and a photocard! During both days of the concert I will super busy but I will be updating my location on my Instagram story so hopefully many of you can find me & snag a goodie bag! 💕🤗 
my Instagram is @glimmerofhobi 
💜💜💜 I cant wait to meet many of you!! Can May come any faster?!? 💜💜💜
</a>},

  { src: 'images/free6.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1649592431810722/'>
  Pia Mayorca: Hello fellow army’s 💜💜 I’ll be giving away this goodie bag at the concert May 4th and 5th. We can also trade !!! I’ll be updating my location on Twitter and Instagram on those days so you can follow me @pianya83 IG: pianyan . The bag includes 1 postcard 3 mini pictures , 1 bts member pic. 2 bt21 stickers made by #glimmerofhobi. I can’t wait to see you all at the concert ! 💜💜</a>},

  { src: 'images/free7.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1622002141236418/'>
  Crystal Thao: I’m having a friend make 200 pins for me as part of my goodie bags to hand out in LA. Is anyone else doing freebies/goodie bags? Would love to see what everyone is doing 💜</a>},


  { src: 'images/free8.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1637418866361412/'>
  Angiee Lagunas: Hey guys! Me and my sister will giving out some goodie bags on May 5th concert Only! We would appreciate to know what kind of photo cards you guys would like! We will updating more on twitter through @/btsspeakyourslf Also if anyone is interested let me know down in the comments 😀
</a>},

  { src: 'images/free9.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1655057984597500/'>
  Cassie Bell Hey everyone! ☺️ I will be attending the 5/5 stop and giving out little goodie bags! It's nothing much, but I LOVE packaging things like this, so I hope you will enjoy receiving it.😊

I don't know the final number I'll be able to make yet, but they will generally be split into three categories:
Trades (Closed for now)
With pin purchase (see below)
First come, first served 
I may be stopping by on the 4th; if so, I'll bring a couple along then too~💛
I'll also be selling an enamel pin ($9). Check out the preview from the back! 
I'll be posting updates on IG & Twitter @candidcassie, so feel free to follow. I'll post again here for those who might just use Facebook ^^
Can't wait to meet you at the concert!💜</a>},

  { src: 'images/free10.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1640653232704642/'>
  Timmy Cruz: Hey Guys If You're Interested in my goody bags please fill up the form 💜 https://docs.google.com/forms/d/e/1FAIpQLSebeL7DBT_qBZNfovoSbEVNfA4lxOoF1JgKaG8JWkN-MDksJQ/viewform?fbclid=IwAR0JTVL4qQO31Lq1i6fZevJz5QmoFODA97W4zjRcjVIoHrUjAeS_7GzGXr4</a>},

  { src: 'images/free11.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1640096879426944/'>
  Flo Tamez: Hello guys the stuff I ordered for the goodie bags I’m making should be here soon! I’m making 600 in total! Please follow me on Instagram at @sugaxbunnie !</a>},

  { src: 'images/free15.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1630896760346956/'>
  Melissa Nguyen: I'm gonna give out freebies at LA (May 4th)! My goodie bags include sticker, photocard and candies~ I wanna make a group chat to trade, if you interested direct my IG @izmelii💜i will update the time and place at my IG~</a>},

  { src: 'images/free14.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1651955644907734/'>
  Yadira Martinez: Update on goodie bags I’ll be handing out ☺️💜
Just need the candys🍭🍬🍫
I’m still waiting on the rest of the photocards, but I’m not worried about that. Just worried how I’m gonna carry loads of candy on an airplane or if I should just buy candy down in LA 😔🤷🏻‍♀️

-if interested in trading dm on fb or IG 💜</a>},

{ src: 'images/free12.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1638484362921529/'>
  Michelle Alavez: Hi everyone! I’ll be giving out free goodie bags May 4th and 5th at the Rosebowl in Pasadena! Feel free to fill out the form before April 10th to insure you’ll get a goodie bag! 💜 Follow me on twitter: @YoItsMich3ll3 or here on FB for the location ☺️
Here’s the link: https://docs.google.com/spreadsheets/d/17ITKavNIEGDcL-Q9I7HGLte53LGvlsIEh0grG354kWA/edit?fbclid=IwAR0t5_DgFiU-uw6p2bfw9mmqppdSyagSTIjld4qccOeTqSPWZUB1bnJHPIk#gid=0</a>},

  { src: 'images/free13.jpg', width: 1, height: 1, 
  caption: <a href='https://twitter.com/Yakichou_Art/status/1110788165143388160?fbclid=IwAR1jl8qirES1Bl__aJFGOXUW5PenHzpeibvi2O6299wMHzM7shOniXellmk'>
  For anyone attending the BTS Concert in LA Rose Bowl
Here is a list of Freebie givers during the event!
To add yourself enter the google dock your twitter handle and item you are giving away.
</a>},

  { src: 'images/free2.jpg', width: 0.5, height: 0.5, 
  caption: <a href='https://www.facebook.com/photo.php?fbid=1008948319291081&set=pcb.1628499647253334&type=3&ifg=1&__tn__=HH-R&eid=ARCu_xHjzLt14QzUy0CxvXvuBcDOs-0SyfmYBBnykI7MACspsw9BjUKRBUkHPxJFJOJJW8poS1DH-l2c'>
  ‎Adrena Moua‎: ill be giving away some cards for 5/4!! the photos below are some freebies I made. They just have to be printed! I heard that people wanted to do trade for trade and im totally up for that!! ill be updating on my snap and IG so follow me there!! IG@a.muahh
  [edit: finished my spreadsheet so go fill it out if you're TFTing :) link below] https://docs.google.com/spreadsheets/d/1iT9p89B2OthHXIUkkDE5LJVlfDd_-i5nwB4ULVXoOto/edit?fbclid=IwAR2nrE3xbZ0AVK8LY-K4iZ4PX7t_mBMm0SIbMDeB4a6DFo20L8JBpKeV5Pg#gid=0</a> },
  
  
  { src: 'images/free17.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1652192231550742/'>
  Jordyn Freshour: Hello guys!! I forgot to show you jimin photo cards! These are the type of cards I will be passing out! I also wanted to update you guys and say that I will be making keychains and buttons to sell at the concert if you are interested please DM me on insta @aye_its_jordynnn and let me know so I know how many to make! Also I will be posting where I'm at on my insta if you want a goodie bag! I'll post an update on the bags once I get them complete!!</a>},
  
  { src: 'images/free18.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1629638100472822/'>
  Tanya Sepulveda: FREE: i’m planning to make goody bags for the second day may 5Th and I’ll also be giving away lots of lomo cards dm me on insta (ok.tannie) if you are interested I’ll be updating my location on my insta the day of unless u want to trade for trade :)) (dm me ur bias on insta I’ll make a special goody bag before hand :))</a>},

  { src: 'images/free19.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1611937572242875/'>
  GAshmita Lal: My friends and I are going to the concert on May 4th and want to hand out little goodie bags. We were wondering how many people might want one so we know how many to make. So possibly like this or comment if you would be interested!
Its not much but they would have:
-lomo card
-decal stickers
-some other sticker(in pic below)
-(maybe bt21 sticker too, but those are pretty expensive)
I’ll update everyone near the day of what we’ll be wearing and where we’ll be so if you see us you can come grab one, I’ll probably drop my twt since it’ll be easier to update everyone! Twt down below
Thank you.
Edit: Sorry but these cannot be reserved. These will be first come first serve! So you will hopefully find us when I post where we are :)) I’ll make a new post closer to the concert with my twt and also add it to this post as well (if I remember 😂). We won’t be making too many as we spent quite a lot on tickets 😅 and the supplies add up but there will be a lot!
Another edit: Ok its official that we will be doing this so my twt is @bangtans_ash
I’ll update about our location on that acc! We will make 200 of these!</a>},

  { src: 'images/free20.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1639889349447697/'>
  Cynthia Vazquez: i'll be giving BTS buttons and pockys at the front door of the rose bowl stadium 5/5 ill have 100 buttons and some photocards (if i have time to print them, i hope yes) so comment if you want one 💜😊
My IG: cynthia.vzqz, 
ill be with 2 friends and a bt21 white shirt 💜💜</a>},
  
   { src: 'images/free21.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1633276170109015/'>
  Yadira Martinez: Hi guys ☺️💜
After some decision making, Ive decided to hand out freebies (photocards)on 5/5.
I will be flying into California so I’m limited to 100 goodies.
(Sorry 😭🥺)
Let me know if your interested so I can MAYBE try to have more....or less if not a lot of people are. 
Also, since it’s Cinco De Mayo I’ll be handing out photocards with Mexican candy ☺️🙌🏻🇲🇽
Follow me on Instagram for updates: moonchild_yaya
-anyone else handing out freebies let me know so we can trade ☺️💜- 
(NOO fansite photos will be used! )</a>},

   { src: 'images/free22.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1646882115415087/'>
  Vicky Kong: FREEBIES!!! Ya'll are probably tired of me for constantly posting about the same thing lol. But here I go again!
I'm passing out free souvenir tickets and yoonji pins on both days of Rose Bowl. If you are interested, please follow us on Twitter @ViMixBTS for more information!
DM or message me if you have any questions!</a>},

{ src: 'images/free23.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1650830991686866/'>
  Taylor Ash: FREEBIES and PREORDERS for transparent photocards of the Map of the Seoul: Persona concept photos! Hey guys!
Preorders close on Sunday, April 7 at 11:59pm EST. I’m offering FREEBIES for people going to the BTS concerts in LA & Chicago (both days in both locations). I’m also taking preorders for transparent photocards I’m making (ordered professionally) based on the concept photos from Map of the Seoul: Persona. The freebies are only available for people to pickup at the LA and Chicago concerts, but if you purchase the transparent photocards then shipping is available.
Preorders of the full package (4 sets of 8 transparent photocards - total of 32 photocards - based on the 4 versions of the concept photos) come with a free set of double-sided paper photocards and a free set of magnet photocards along with other stuff.
All info along with transparent photocard examples are in the form.
Whether you just want freebies or you want to purchase, you need to fill out the form :)
(If you've filled out a previous form for interest, this is the final form to preorder and to choose your bias for the freebies.</a>},

  { src: 'images/free25.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1630505267052772/'>
  Kay Rae Castillo: At LA and NJ I'm gonna give out freebies. 100 photocards for day 1 and day 2. 5 big cards for day 1 and day 2. (Those arnt official, theyre made by me).... I'll also be giving out official merch (probably new album + official posters) but I may do it like the 5th person to come gets an album, since they will be limited. Lemme know if your interested in that so I can get a good estimate of how much stuff I shud get.
(Pics are example of the photocards)</a>},

  

  { src: 'images/free22.jpg', width: 1, height: 1, 
  caption: <a href='https://www.facebook.com/groups/852207088215931/permalink/1634535869983045/'>
  Gemline Draw String Bag</a>},
  {src: 'images/bag16.jpg', width: 0.1, height: 0.1, caption: 'Clear bag from Daiso for $1.50'}
];


class Freebies extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0, currentText:"" };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 2;
  if (containerWidth >= 800) columns = 3;
  if (containerWidth >= 1100) columns = 4;
  if (containerWidth >= 1500) columns = 5;
  return columns;
}

  render() {
    return (
      <div className='image-gallery'>
        <div class="ui left aligned basic segment">
          <div class="ui segment">
            <h3 class="ui header">Freebies!</h3>
            <p>These are people who have said they are handing out freebies at the Rose Bowl Concert. I will update this
            as I find more people! Remember, be respectful to the ARMYs who put in time and money to 
            make these freebies. Don't blame them if they run out, don't be rude if your bias isn't on a freebie, only take
            one, and say thank you.</p>
          </div>
        </div>
        <Gallery photos={photos} onClick={this.openLightbox} columns={this.columns}/>
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          currentText={this.state.currentText}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}


export default Freebies;
