import React from 'react';
import { render } from 'react-dom';
import {Header, List, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'
import FreebieItem from './FreebieItem';


const photos = [
  { src: 'images/free36.jpg', width: 1, height: 1, 
  social: 'Twitter: omichelle15',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1623036621132970/',
  description: "Michelle Ochoa: Ok, so I’ve been receiving a WHOLE bunch of DMs about the photocards im giving away. So I’m OFFICIALLY making a post . Lol Im going to be giving away over 10000 photocards. I will be in LA both days. But I will post on my Twitter (omichelle15) where my location will be. These photocards are FREE. I will just hand them out randomly. BUT If you want to do a trade, i will save a couple for you and we can meet in in a specific place:)"},

  { src: 'images/free1.jpg', width: 1, height: 1, 
  social: 'FB: Kristy Wong',
  link: 'https://www.facebook.com/photo.php?fbid=422924148279589&set=gm.1630664257036873&type=3&eid=ARCFPgWHRM8xtvMAoZ0nmeds54qgXPt-To0xgXozMjCEvFCzR5e5EzmFgkEkZLhT4eKpx8pTrwZm4yip&ifg=1',
  description: 'Kristy Wong: Hey guys! I\’ve seen so many generous people making posts about giving out freebies on the concert dates, and I\’ve been wanting to do the same but I didn\’t know what I would want to pass out. But today, I\’m sure all of you guys saw the donut holes post, and from that I got inspired to also pass out some treats. So I\’ll be making BT21 themed sugar cookies like the ones in the picture below (photo credit to the owner; not my photo). I\’ll be passing them out at Rose Bowl on 5/4, one free for each person and if you want more, it\’s $1 per cookie after the free one so I don\’t go completely broke (I\’ll also have a tip jar hehe). Anyway, comment if you\’re interested so I know how much I have to make. Also if you\’re also selling or passing out freebies and would like to trade with my cookies, that\’ll be cool'},
  
  { src: 'images/free16.jpg', width: 1, height: 1, 
  social:'Twitter: @ honey_yoongi',
  link:'https://www.facebook.com/groups/852207088215931/permalink/1642501262519839/',
  description: 'Lis PC: For anyone attending 05/04: I will be passing out freebies the day of the concert!! Freebies include a goodie bag with the photocard below and 4 other ones(that aren\'t transparent) + candy. Time and location are still being determined and I will likely not know until the day of the concert. I will post updates and locations on my twitter so follow me there! @ honey_yoongi https://twitter.com/honey_yoongi Follow me on Instagram: https://instagram.com/p/BvifAkBArBV/ (I will have roughly 250 of these freebies to hand out, limited to one per person and first come first serve)'},

  { src: 'images/free28.jpg', width: 1, height: 1, 
  social:'Twitter/IG: @dear_kimseokjin',
  link:'https://www.facebook.com/photo.php?fbid=2387228381510306&set=pcb.1663030703800228&type=3&theater&ifg=1',
  description: "Anne Ly: 안녕하세요 친구! My friends and I will be giving away freebies for the Speak Yourself Tour on May 5th at the Rose Bowl~ First 500 will be receiving 1. Photocard(s) 2. Sticker(s) 3. Purple/Pink ribbon Everyone that comes after will be getting just the ribbon Please follow me on Twitter/IG: @dear_kimseokjin I will post my location on the day of the concert so you can come find us to get your freebies💜 Hong Nhung Nguyen"},

  { src: 'images/free29.jpg', width: 1, height: 1, 
  social:'IG: @perlajinju7',
  link:'https://www.facebook.com/groups/852207088215931/permalink/1661510023952296/',
  description: "Perla Quezada: Hi Army! My sister and I are going to be doing trade for trade for the May 4th concert day. If you trade with us you will receive a transparent photocard of your bias as well as a pack of strawberry pocky. We only have a limited amount of pocky & photocards available to trade so it's first come first serve. The rest of the photocards *without pocky* we will be giving out as freebies. If you would like to trade with us please drop your IG below so that we can DM you the details. If you aren't trading and just want freebies follow my instagram @perlajinju7 for updates on our location."},

  { src: 'images/free38.jpg', width: 1, height: 1, 
  social:'IG: @fantasticdonuts',
  link:'https://www.facebook.com/groups/852207088215931/permalink/1629739683795997/',
  description: "Lily Ung: Hi all! I'm planning to make a handful of BT21 donut holes to pass out at the concert. Date tbd. Please let me know if you're interested so I can get an estimate! These are the same donuts that BTS themselves have eaten so you can say you had the same donuts 😉 ❗️I'll post the handout date and specific location on instagram @fantasticdonuts❗️"},

  { src: 'images/free26.jpg', width: 1, height: 1, 
  social: 'Twitter: @bearlysafe, IG: @accompannie',
  link: 'https://www.facebook.com/photo.php?fbid=10157607562199893&set=pcb.1645342735569025&type=3&theater&ifg=1',
  description: "Annie Li: Hello! Sandy Li and I are making these as freebies. We will be at the Rose Bowl on 5/5 and passing them out randomly, on a first come first serve basis. We\'re not sure if we are leaving as is or turning them to pins. I will update our location on Twitter (@bearlysafe) or on IG (@accompannie). Thank you![EDIT] Hello! Thank you for everyone\'s interest ☺I added some pictures to show the sizes of these. They\'re made from mini perler beads. Also, we won\'t be making a lot of the bt21 ones. Sorry!"},

  { src: 'images/free24.jpg', width: 1, height: 1, 
  social: 'IG: @katsandovaal',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1648815561888409/',
  description: "Katherine Sandoval: I’m so excited for May that I got started on my freebies early! My sister and I will be handing out these photo prints and lomo cards at the concert 🥰 over +450 prints so far!"},

{ src: 'images/free33.jpg', width: 1, height: 1, 
  social: 'IG: @pcosmes',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1653813824721916/',
  description: "Ingrid Cosmes-olazzo: i received my stickers today im so excited you guys!! i cant wait to meet alot of army's at the concert!! follow me on my ig @pcosmes ill be updating you guys that day on my ig, my 3year old and i will be giving these away on both days"},

  { src: 'images/free3.jpg', width: 1, height: 1, 
  social: 'Twitter: @breadgenie1004',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1642589789177653/',
  description: "Rachele Lim: Hi! I’ve decided to give out goodie bags for the Speak Yourself tour!!!! I probably will be going both days to get merch, but I’m definitely going on 5/5!!! The goodie bags will include transparent photocards of the individual members(google form below), stickers of Jin (pic down below), and little snacks/candies!💜 I will tweet my location the day of the concerts so follow me on twitter @breadgenie1004 to be updated!!! If you want to trade goodie bags please pm me your bias so I can save one for you!!! If I run out of photocards don’t worry, I’ll give away the rest of my stickers cause I ordered a couple thousand😱😂💜💜💜 So please let me know if your interested thank you!!!! https://forms.gle/9iKqFJdSkkCEToJD7  USE THIS FORM IF YOU WANT TO RESERVE A GOODIE BAG! WILL BE LIMITED RESERVATIONS! *edit: GOODIE BAG RESERVATION CLOSE*"},
  
  { src: 'images/free4.jpg', width: 1, height: 1, 
  social: 'IG/Twitter: @alissacatharina',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1641536215949677/',
  description: "Alissa Way: Hi everyone!! My friends and I decided that we wanted to pass out little goodie bags, before the May 4th concert begins, that would include homemade PCs and stickers (& a few candies too 🤗).  I’ve been editing some pc designs and I wanted to share my “Sailor Joon” card with you all, as we decided on a meme theme haha 😂 Please let me know if you’re interested in getting one of our goodie bags so I can get an estimate of how many we would have to put together! Thank you!!"},
  
  { src: 'images/free5.jpg', width: 1, height: 1, 
  social: 'IG: @glimmerofhobi',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1636954563074509/',
  description: "Cat Truong: Hello beautiful ARMYs✨💜 I’ve been seeing many people making goodie bags for the concert and it makes me so happy to see everyone spreading nothing but love and for our boys! I’ve also been preparing goodie bags and I’ll have well over one thousand to hand out, split between both showings (500+ for Saturday and 500+ for Sunday). I’ve prepared them with stickers that I designed and made (including special “speak yourself” stickers that I made exclusively for the concert!), and a photocard! During both days of the concert I will super busy but I will be updating my location on my Instagram story so hopefully many of you can find me & snag a goodie bag! 💕🤗 my Instagram is @glimmerofhobi 💜💜💜 I cant wait to meet many of you!! Can May come any faster?!? 💜💜💜"},

  { src: 'images/free6.jpg', width: 1, height: 1, 
  social: 'Twitter: @pianya83, IG: pianyan',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1649592431810722/',
  description: "Pia Mayorca: Hello fellow army’s 💜💜 I’ll be giving away this goodie bag at the concert May 4th and 5th. We can also trade !!! I’ll be updating my location on Twitter and Instagram on those days so you can follow me @pianya83 IG: pianyan . The bag includes 1 postcard 3 mini pictures , 1 bts member pic. 2 bt21 stickers made by #glimmerofhobi. I can’t wait to see you all at the concert ! 💜💜"},

  { src: 'images/free7.jpg', width: 1, height: 1, 
  social: 'Twitter: @xocryst',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1622002141236418/',
  description: "Crystal Thao: I’m having a friend make 200 pins for me as part of my goodie bags to hand out in LA. Is anyone else doing freebies/goodie bags? Would love to see what everyone is doing 💜"},

  { src: 'images/free9.jpg', width: 1, height: 1, 
  social: 'Twitter: @candidcassie',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1655057984597500/',
  description: "Cassie Bell Hey everyone! ☺️ I will be attending the 5/5 stop and giving out little goodie bags! It's nothing much, but I LOVE packaging things like this, so I hope you will enjoy receiving it.😊 I don't know the final number I'll be able to make yet, but they will generally be split into three categories: Trades (Closed for now) With pin purchase (see below) First come, first served I may be stopping by on the 4th; if so, I'll bring a couple along then too~💛 I'll also be selling an enamel pin ($9). Check out the preview from the back!  I'll be posting updates on IG & Twitter @candidcassie, so feel free to follow. I'll post again here for those who might just use Facebook ^^ Can't wait to meet you at the concert!💜"},

  { src: 'images/free11.jpg', width: 1, height: 1, 
  social: 'IG: @sugaxbunnie',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1640096879426944/',
  description: "Flo Tamez: Hello guys the stuff I ordered for the goodie bags I’m making should be here soon! I’m making 600 in total! Please follow me on Instagram at @sugaxbunnie !"},

  { src: 'images/free15.jpg', width: 1, height: 1, 
  social: 'IG: @izmelii',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1630896760346956/',
  description: "Melissa Nguyen: I'm gonna give out freebies at LA (May 4th)! My goodie bags include sticker, photocard and candies~ I wanna make a group chat to trade, if you interested direct my IG @izmelii💜i will update the time and place at my IG~"},

  { src: 'images/free14.jpg', width: 1, height: 1, 
  social: 'IG: moonchild_yaya',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1651955644907734/',
  description: "Yadira Martinez: Update on goodie bags I’ll be handing out ☺️💜 Just need the candys🍭🍬🍫 I’m still waiting on the rest of the photocards, but I’m not worried about that. Just worried how I’m gonna carry loads of candy on an airplane or if I should just buy candy down in LA 😔🤷🏻‍♀️ -if interested in trading dm on fb or IG 💜. Previous post: After some decision making, Ive decided to hand out freebies (photocards)on 5/5. I will be flying into California so I’m limited to 100 goodies. (Sorry 😭🥺) Let me know if your interested so I can MAYBE try to have more....or less if not a lot of people are.  Also, since it’s Cinco De Mayo I’ll be handing out photocards with Mexican candy ☺️🙌🏻🇲🇽 Follow me on Instagram for updates: moonchild_yaya -anyone else handing out freebies let me know so we can trade ☺️💜- (NOO fansite photos will be used! )"},

{ src: 'images/free34.jpg', width: 1, height: 1, 
  social: 'Twitter: @/minyoongidamn',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1629298433840122/',
  description: "Karina Cardenas: Hi guys! I will be handing out some laminated cards that I made on Saturday and Sunday! They also have their printed signatures on the back. I will have 200 cards, so 100 for each day. On Saturday I will be handing them out until maybe 2pm and all morning on Sunday ☺️ Hope to see some of you guys there and maybe trade with others! I will post my location on my Twitter @/minyoongidamn"},

  { src: 'images/free27.jpg', width: 1, height: 1, 
  social: 'IG: Angela Insatiable',
  link: 'https://www.facebook.com/groups/852207088215931/1664662490303716/?comment_id=1665780253525273&reply_comment_id=1665781036858528&notif_id=1555196895217384&notif_t=group_comment_mention',
  description: "Angela Insatiable: Photocards are here. I'll be there Sat & Sun."},

  { src: 'images/free31.jpg', width: 1, height: 1, 
  social: 'IG: @a.muahh',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1660572487379383/',
  description: "Adrena Moua: follow my IG @a.muahh for more updates!! time and location will also be posted on my IG the day of the concert! I am doing trades as well, so DM me if interested!!"},

    { src: 'images/free37.jpg', width: 1, height: 1, 
  social: 'FB: Jadelle Duhaylungsod',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1623678264402139/',
  description: "hello! ☺️ since everyone is handing out their own photo cards, i thought i might as well would too since there’s gonna be SO MANY of us at the concert. i will be handing them out for free!! first i need to know if anyone would be interested bc my photo cards are handmade so they aren’t perfect 😕 i print them out and cut them myself so the edges aren’t really straight. if you’re interested pls comment so i have an idea of how many to make! there will be a variety of different pics for each member 😊 im still not sure if i should go around and just hand them out or post where i’ll be on day of and you guys can come get them. also ill only be there for the 5/4 concert D: there also wont be much either bc printing these out costs $$ & i am a broke unemployed high school student so :,) OH AND THE PIC BELOW IS A REFERENCE OF HOW THEY LOOK LIKE!!! ive made a ton as gifts before or just to put on the back of my phone hehe. so if you think this is a good idea or are interested pls comment n__n thank you! 💗"},

  { src: 'images/free30.jpg', width: 1, height: 1, 
  social: 'IG: @ilyxm2, Twitter: @ilyxmh',
  link: 'https://www.facebook.com/groups/852207088215931/1663087927127839/?comment_id=1665795646857067&reply_comment_id=1665811003522198&notif_id=1555199198859391&notif_t=group_comment_mention',
  description: "Hannah Oberle: I designed this little army bomb sticker to go with my sticker packs I'll be handing out and I'm obsessed with how cute they turned out! Follow me on IG: @ilyxm2 or Twt: @ilyxmh for updates! (I still have yet to print out the ticket stickers 💕)"},

  { src: 'images/free17.jpg', width: 1, height: 1, 
  social: 'IG: @aye_its_jordynnn ',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1652192231550742/',
  description: "Jordyn Freshour: Hello guys!! I forgot to show you jimin photo cards! These are the type of cards I will be passing out! I also wanted to update you guys and say that I will be making keychains and buttons to sell at the concert if you are interested please DM me on insta @aye_its_jordynnn and let me know so I know how many to make! Also I will be posting where I'm at on my insta if you want a goodie bag! I'll post an update on the bags once I get them complete!!"},
  
   { src: 'images/free10.jpg', width: 1, height: 1, 
   social: 'FB: Timmy Cruz',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1640653232704642/',
  description: "Timmy Cruz: Hey Guys If You're Interested in my goody bags please fill up the form. EDIT: Form is full, but I am giving away 500 bags that aren't reserve just look for me 💕💜"},

  { src: 'images/free40.jpg', width: 1, height: 1, 
  social: 'Twitter: @/lupes_93',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1649562661813699/',
  description: "It’s not too early... right? 😉🥰 Army Gifts for Day 1 & Day 2 💜 #BTS #SPEAKYOURSELFLA #GlimmerOfHobi"},

  { src: 'images/free18.jpg', width: 1, height: 1, 
  social: 'IG: ok.tannie',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1629638100472822/',
  description: "Tanya Sepulveda: FREE: i’m planning to make goody bags for the second day may 5Th and I’ll also be giving away lots of lomo cards dm me on insta (ok.tannie) if you are interested I’ll be updating my location on my insta the day of unless u want to trade for trade :)) (dm me ur bias on insta I’ll make a special goody bag before hand :))"},

// free 19
  { src: 'images/free19_1.jpg', width: 1, height: 1, 
  social: 'Twitter: @bangtans_ash',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1611937572242875/',
  description: "Ashmita Lal: My friends and I are going to the concert on May 4th and want to hand out little goodie bags. We were wondering how many people might want one so we know how many to make. So possibly like this or comment if you would be interested! Its not much but they would have: -lomo card -decal stickers -some other sticker(in pic below) -(maybe bt21 sticker too, but those are pretty expensive) I’ll update everyone near the day of what we’ll be wearing and where we’ll be so if you see us you can come grab one, I’ll probably drop my twt since it’ll be easier to update everyone! Twt down below Thank you. Edit: Sorry but these cannot be reserved. These will be first come first serve! So you will hopefully find us when I post where we are :)) I’ll make a new post closer to the concert with my twt and also add it to this post as well (if I remember 😂). We won’t be making too many as we spent quite a lot on tickets 😅 and the supplies add up but there will be a lot! Another edit: Ok its official that we will be doing this so my twt is @bangtans_ash I’ll update about our location on that acc! We will make 200 of these!"},

// free20
  { src: 'images/free20_1.jpg', width: 1, height: 1, 
  social: 'IG: cynthia.vzqz',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1639889349447697/',
  description: "Cynthia Vazquez: i'll be giving BTS buttons and pockys at the front door of the rose bowl stadium 5/5 ill have 100 buttons and some photocards (if i have time to print them, i hope yes) so comment if you want one 💜😊 My IG: cynthia.vzqz, ill be with 2 friends and a bt21 white shirt 💜💜"},

   { src: 'images/free22.jpg', width: 1, height: 1, 
   social: 'Twitter: @ViMixBTS',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1646882115415087/',
  description: "Vicky Kong: FREEBIES!!! Ya'll are probably tired of me for constantly posting about the same thing lol. But here I go again! I'm passing out free souvenir tickets and yoonji pins on both days of Rose Bowl. If you are interested, please follow us on Twitter @ViMixBTS for more information! DM or message me if you have any questions!"},

{ src: 'images/free23.jpg', width: 1, height: 1, 
	social: 'IG: @justtei1',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1650830991686866/',
  description: "Taylor Ash: FREEBIES and PREORDERS for transparent photocards of the Map of the Seoul: Persona concept photos! Hey guys! Preorders close on Sunday, April 7 at 11:59pm EST. I’m offering FREEBIES for people going to the BTS concerts in LA & Chicago (both days in both locations). I’m also taking preorders for transparent photocards I’m making (ordered professionally) based on the concept photos from Map of the Seoul: Persona. The freebies are only available for people to pickup at the LA and Chicago concerts, but if you purchase the transparent photocards then shipping is available. Preorders of the full package (4 sets of 8 transparent photocards - total of 32 photocards - based on the 4 versions of the concept photos) come with a free set of double-sided paper photocards and a free set of magnet photocards along with other stuff. All info along with transparent photocard examples are in the form. Whether you just want freebies or you want to purchase, you need to fill out the form :) (If you've filled out a previous form for interest, this is the final form to preorder and to choose your bias for the freebies."},
{ src: 'images/free32.jpg', width: 1, height: 1, 
  social: 'Twitter: @hiddentail',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1634713736631925/',
  description: "Brittany Garcia: I have prints, was gonna sell.. but have decided to hand out a random print for free OR ur bias for .25 how does that sound?"},

  { src: 'images/free25.jpg', width: 1, height: 1, 
  social: 'Twitter: @Kaypoppin_unnie, IG: @da_bro_nation',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1630505267052772/',
  description: "Kay Rae Castillo: At LA and NJ I'm gonna give out freebies. 100 photocards for day 1 and day 2. 5 big cards for day 1 and day 2. (Those arnt official, theyre made by me).... I'll also be giving out official merch (probably new album + official posters) but I may do it like the 5th person to come gets an album, since they will be limited. Lemme know if your interested in that so I can get a good estimate of how much stuff I shud get. (Pics are example of the photocards), UPDATE: So change of plans I will be giving out 50 goodie bags each concert (LA Day 1&2 and NJ Day 1&2)along with those 50 goodie bags I am going to give away 4 bts albums (the persona ones with no photocard cus I'm a hoe and am gonna keep it) but it will be 1 album per concert day. Along with all that I will be giving out random bts official posters that I believe deserve a good home. And possibly 2 other suprises (ly tour merch or sy tour merch or something extra special depending on things). I will update what I'm giving away on a new post the day of each concert and where to find me. U can follow me on twt: @Kaypoppin_unnie or on insta: @da_bro_nation or just look for my post in the LA Group and Metlife group the day of each concert. Thank you "},

  { src: 'images/free39.jpg', width: 1, height: 1, 
  social: 'IG: @brie__ella',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1623293384440627/',
  description: "*Not my photo* Hi I will be handing snack bags like this the day of the concert with photocards, the snacks are from my home country Ecuador, I will be attending both days so I will give 30 on day one and 30 on day two, follow me on Instagram @brie__ella and be alert the day of the concert to know my location"},

  { src: 'images/free35.jpg', width: 1, height: 1, 
  social: 'IG:@moonchild30crafts',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1657580194345279/',
  description: "Cheyenne Castillo: Hey guys! My bt21 bookmarks are almost ready! I finally finalized the bt21 design! I am still working on individual bts members and album bookmarks. These bookmarks will be passed out during the L.A concert for both days. I also made a Instagram account just for the bookmark freebies if you want to follow! 😊💜 IG:@moonchild30crafts"},

{ src: 'images/free12.jpg', width: 1, height: 1, 
social: 'Twitter: @YoItsMich3ll3',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1638484362921529/',
  description: "Michelle Alavez: Hi everyone! I’ll be giving out free goodie bags May 4th and 5th at the Rosebowl in Pasadena! Feel free to fill out the form before April 10th to insure you’ll get a goodie bag! 💜 Follow me on twitter: @YoItsMich3ll3 or here on FB for the location ☺️ Here’s the link: https://docs.google.com/spreadsheets/d/17ITKavNIEGDcL-Q9I7HGLte53LGvlsIEh0grG354kWA/edit?fbclid=IwAR0t5_DgFiU-uw6p2bfw9mmqppdSyagSTIjld4qccOeTqSPWZUB1bnJHPIk#gid=0"},

  { src: 'images/free41.jpg', width: 1, height: 1, 
  social: 'Twitter: @Yakichou_Art',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1666195510150414/',
  description: "Daisie Chao: I’ve started packing my sticker freebies in tiny bags! The trades I have get some extra stuff but in these mini bag freebies everyone gets an OT7 stickers! But I only have a limited amount for Day 1 and Day 2 of Rose Bowl. 100 per day. FIRST COME FIRST SERVE For more info I will be updating at my twitter @Yakichou_Art"},

   { src: 'images/free42.jpg', width: 1, height: 1, 
  social: 'Twitter: @jm__promise',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1668414906595141/',
  description: "Diana Rosas: My freebies came in!!!!! I will be posting a shirt I will be wearing.If u see me come up to me and i will give u one. I will be there both days !!!"},

  { src: 'images/free13.jpg', width: 1, height: 1, 
  social: 'Twitter: @Yakichou_Art',
  link: 'https://twitter.com/Yakichou_Art/status/1110788165143388160?fbclid=IwAR1jl8qirES1Bl__aJFGOXUW5PenHzpeibvi2O6299wMHzM7shOniXellmk',
  description: "For anyone attending the BTS Concert in LA Rose Bowl Here is a list of Freebie givers during the event! To add yourself enter the google dock your twitter handle and item you are giving away."},

{ src: 'images/free8.jpg', width: 1, height: 1, 
  social: 'Twitter: @/btsspeakyourslf',
  link: 'https://www.facebook.com/groups/852207088215931/permalink/1637418866361412/',
  description: "Angiee Lagunas: Hey guys! Me and my sister will giving out some goodie bags on May 5th concert Only! We would appreciate to know what kind of photo cards you guys would like! We will updating more on twitter through @/btsspeakyourslf Also if anyone is interested let me know down in the comments 😀"}

  ];

const FreebieGrid = () => {
  // called for every item in array
  const col = photos.map(freebie => {
    return (
      <Grid.Column>
      <Item.Group>
        <FreebieItem 
        freebie={freebie}
        />
      </Item.Group>
      </Grid.Column>
    );
  });
  
  return (
      <div className="image-gallery">
        <Segment basic>
          <Header as='h4'>Free Merchandise!</Header>
        <List bulleted>

          <List.Item>
            At the concert you will find many ARMYs passing out free handmade merch. 
          </List.Item>

          <List.Item>
            I have collected almost all of the <a href="https://www.facebook.com/groups/852207088215931/" target="_blank">Facebook posts </a> 
            and social media info so you can find them on concert day. (I will try to update this frequently.)
          </List.Item>

          <List.Item>
            If you are a part of this Facebook page, please like their posts so they know how many people are interested. 
          </List.Item>

          <List.Item>
            Remember, be respectful to the ARMYs who put in time and money to make these freebies.
            <List.List>
          
          <List.Item>Don't blame them if they run out, don't be rude if your bias isn't on a freebie, only take
            one, and say thank you.
          </List.Item>
            
          </List.List>
          </List.Item>

          <List.Item>
            The ones listed down below are ARMYs passing them out to anyone who asks for one. On the Facebook page you will find many more people who are interested in trading goodie bags too. Click an image to read more about the freebie.
          </List.Item>
          
      </List>
        </Segment>
          
       <Grid stackable columns={4}>
			    {col} 			    
			 </Grid>
      </div>
      
  );
};

export default FreebieGrid;

  // { src: 'images/free2.jpg', width: 0.5, height: 0.5, 
  // social: 'IG: @a.muahh',
  // link: 'https://www.facebook.com/photo.php?fbid=1008948319291081&set=pcb.1628499647253334&type=3&ifg=1&__tn__=HH-R&eid=ARCu_xHjzLt14QzUy0CxvXvuBcDOs-0SyfmYBBnykI7MACspsw9BjUKRBUkHPxJFJOJJW8poS1DH-l2c',
  // ‎description: "Adrena Moua‎: ill be giving away some cards for 5/4!! the photos below are some freebies I made. They just have to be printed! I heard that people wanted to do trade for trade and im totally up for that!! ill be updating on my snap and IG so follow me there!! IG@a.muahh [edit: finished my spreadsheet so go fill it out if you're TFTing :) link below] https://docs.google.com/spreadsheets/d/1iT9p89B2OthHXIUkkDE5LJVlfDd_-i5nwB4ULVXoOto/edit?fbclid=IwAR2nrE3xbZ0AVK8LY-K4iZ4PX7t_mBMm0SIbMDeB4a6DFo20L8JBpKeV5Pg#gid=0"},


