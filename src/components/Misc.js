import React from 'react'
import ReactDOM from "react-dom";
import {Card, List, Button, Header, Icon, Modal, Segment, Image } from 'semantic-ui-react'


let pin_array = [
{src: 'images/ht-bag.jpg'}, 
{src: 'images/ht-cooky.jpg'}, 
{src: 'images/ht-tata.jpg'}, 
{src: 'images/ht-shooky.jpg'}, 
{src: 'images/ht-chimmy.jpg'}, 
{src: 'images/ht-koya.jpg'}, 
{src: 'images/ht-rj.jpg'}, 
{src: 'images/ht-mang.jpg'}
];
let outfit_array = [
{src: 'images/outfit1.jpg'}, 
{src: 'images/outfit2.jpg'}, 
{src: 'images/outfit3.jpg'}];

const Misc = () => {

  const pins = pin_array.map(pin_array => {
	return (
		<Card raised image={pin_array.src} />
	);
});

const outfits = outfit_array.map(outfit_array => {
	return (
		<Card raised image={outfit_array.src} />
	);
});

  return (

     <div>
     	<Segment vertical>
     		<Header as='h4'>BTS Studio</Header>
		    	<List bulleted>
		    	<List.Item>It's a virtual photo booth where a hologram member of your choice will "walk in, talk, and sit next to you" to take a photo. You will be watching through a screen in front of you.</List.Item>
			    <List.Item>
			      Two ways to get to take a photo in the BTS Studio Photobooth:
			      <List.List>
			        <List.Item>1. Fill out the official BTS <a target="_blank" href="https://ko.surveymonkey.com/survey-taken/?sm=7HmmxsTkdHjPJXJ9LP_2FktsDvqaeAPNbQ2iKFdSjyCml_2FmwnyqHTnvYLvPwdK1tz5rAdUPdUq_2BZxu2lGvzSW7PCKNB_2FcHNmL0aZ6PvN1LZww_3D"> survey </a> for a chance to win an express ticket.</List.Item>
			        <List.Item>2. Pick a colored ball for a chance to enter the line for photos.</List.Item>
			      </List.List>
			    </List.Item>
			    <List.Item>Location: Usually near the merch booth but Bighit should be posting the exact location closer to the concert date.</List.Item>
			    <List.Item>
		    		For more information, examples of BTS Studio pictures, and link to the survey (if the one above isn't working), see the original Facebook <a target="_blank" href="https://www.facebook.com/groups/852207088215931/permalink/1659151854188113/">
		    		post.</a>
		    	</List.Item>
		    	<List.Item>
		    		Edit: The survey is over, but you can still join the lottery on the day of the concert. Wait for offical announcement from BigHit.
		    	</List.Item>
			  </List>
     	</Segment>

     	<Segment vertical>
     		<Header as='h4'>Fanchants for Map of the Soul: Persona</Header>
		    	<List bulleted>
		    	<List.Item>
		    		US BTS Army website has all of the fanchants for every album 
		    		<a href="https://www.usbtsarmy.com/fanchants?fbclid=IwAR0VXA3BxtmrDrkRCz_1xYIPV8D11lM37xcD5aODTyFSYlu3EORRbqdd60c" target="_blank"> here. </a>
		    	</List.Item>
		    	<List.Item>
		    		See the ones posted on a Facebook post 
		    		<a href="https://www.facebook.com/photo.php?fbid=1979877848808722&set=pcb.1664330787003553&type=3&theater&ifg=1" target="_blank"> here. </a>
		    	</List.Item>
			    <List.Item>
			      "Here’s a clear easy version of the fan chants!!! PLEASE LEARN THEM WE ARE THE FIRST CONCERT WE NEED TO BE LOUD"
			    </List.Item>
			  </List>
     	</Segment>

     	<Segment vertical>
     		<Header as='h4'>Merchandise</Header>
		    	<List bulleted>
		    	<List.Item>
		    		Update from Rose Bowl: Fan Fest (BTS Studio, merch, food booths) open at 1pm (See the FAQs <a href="https://www.rosebowlstadium.com/events/detail/bts-world-tour-love-yourself-speak-yourself" target="_blank"> here</a>).
		    	</List.Item>
		    	<List.Item>
		    		Camping is not allowed before or after the event anywhere on the Rose Bowl Stadium property or surrounding Arroyo and guests may not access the site until parking lots open at 1:00 PM.
		    	</List.Item>
		    	<List.Item>
		    		However, there are conflicting opinions about whether people won't be allowed to camp on the streets or not: see this <a href="https://www.facebook.com/groups/852207088215931/permalink/1672532459516719/" target="_blank"> Facebook post</a>.
		    	</List.Item>
		    	<List.Item>
		    		Read an ARMY's lining up for merch experience <a href="https://www.facebook.com/groups/852207088215931/permalink/1612796658823633/" target="_blank"> here. </a> 
		    		If you do decide to camp anyway ... 
			      <List.List>
			        <List.Item>Be safe! There might be suspicious people around. Stay with your friends or other ARMYs, don't walk off with strangers, have emergency information ready (hospital, police station numbers), and check in with someone periodically (call/text a family member/friend hourly), etc.</List.Item>
			        <List.Item>LA is cold at night. Dress warmly and bring a blanket or a folding chair.</List.Item>
			        <List.Item>LA is warm during the day. Bring hat and sunscreen and water.</List.Item>
			        <List.Item>Bring lots of water/coffee/Gatorade and snacks, or be ready to order food through apps.</List.Item>
			        <List.Item>Bring money (both cash and credit card), portable chargers, and a bag to hold all your merch.</List.Item>
			        <List.Item>Figure out where the restrooms are! If you're lining up at midnight most places will be closed. Use the buddy system and don't go to the restrooms alone when it's still dark.</List.Item>
			        <List.Item>Go with friends or make friends so they will hold your spot while you use the restrooms.</List.Item>
			        <List.Item>Someone said to take pictures of the line occasionally so you can prove to security if a group cuts the line.</List.Item>
			        <List.Item>If you're done buying merch hours before the concert, consider going back to the hotel to unload your merch, eat/drink/nap to refresh yourself.</List.Item>
			      	<List.Item>
			      	</List.Item>
			      </List.List>
			    </List.Item>
		    	<List.Item>
		    		There is a Facebook group for group orders if you can't stand in line but still want merch 
		    		<a href="https://www.facebook.com/groups/912098819181431/" target="_blank"> here. </a>
		    	</List.Item>
		    	<List.Item>
		    		Get added to the group chat for people camping for merch starting around midnight
		    		<a href="https://www.facebook.com/groups/852207088215931/permalink/1668342853269013/" target="_blank"> here. </a>
		    	</List.Item>
			    <List.Item>
			      What time other people are lining up for merch 
		    		<a href="https://www.facebook.com/groups/852207088215931/permalink/1667972996639332/" target="_blank"> here. </a>
			    </List.Item>
			    <List.Item>
			      If you just want an ARMY bomb there is usually an express line and they usually don't run out.
			    </List.Item>
			  </List>
     	</Segment>
        
        <Segment vertical>
     		<Header as='h4'>Party Bus for May 5th</Header>
		    	<List bulleted>
		    	<List.Item>
		    		<a href="https://www.facebook.com/groups/852207088215931/permalink/1670018543101444/" target="_blank">See the Facebook post</a>
		    	</List.Item>
		    	<List.Item>
		    		$50 per person
		    	</List.Item>
			  </List>
     	</Segment>

     	<Segment vertical>
     		<Header as='h4'>Get cute BT21 merch from Hot Topic</Header>
		    	<List bulleted>
		    	<List.Item>
		    		<a href="https://www.hottopic.com/search?q=bt21" target="_blank">Hot Topic</a>
		    	</List.Item>
		    	<List.Item>
		    		Get pins to decorate your bag! I've gotten pins in store for $2.50. Also has headbands and t-shirts if you need concert outfit ideas.
		    	</List.Item>
		    	<List.Item>
		    		Regular pins are $4.90, enamel pins are $8.90, keychains are $13.95
		    	</List.Item>
		    	<List.Item>
		    		Update: Some people have asked Rose Bowl about pins, and have gotten conflicted replies. I would just print out a list of prohibited items, 
		    		and if Rose Bowl says that pins aren't allowed inside just show them the list 
		    		(and make sure the pins aren't obscuring the inside of the bag, which is probably why some people have gotten replies that said the pins should be on the straps). 
		    		Hopefully there will be an official announcement. 
		    	</List.Item>
			  </List>
			  <Card.Group itemsPerRow={8}>
			  	{pins}
			  </Card.Group>

     	</Segment>

     	<Segment vertical>
     		<Header as='h4'>Concert Outfit Ideas</Header>
		    	<List bulleted>
		    	<List.Item>
		    		<a href="https://www.facebook.com/groups/852207088215931/permalink/1622913044478661/" target="_blank">Thread #1</a>
		    	</List.Item>
		    	<List.Item>
		    		<a href="https://www.facebook.com/groups/852207088215931/permalink/1667370816699550/" target="_blank">Thread #2</a>
		    	</List.Item>
		    	<List.Item>
		    		<a href="https://www.facebook.com/groups/852207088215931/permalink/1657504201019545/" target="_blank">Outfits from BTS music videos</a>
		    	</List.Item>
			  </List>
			  <Card.Group itemsPerRow={3}>
			  	{outfits}
			  </Card.Group>
     	</Segment>

     	<Segment vertical>
     		<Header as='h4'>How to stay safe during concerts</Header>
		    	<List bulleted>
		    	<List.Item>
		    		See the full guide <a href="https://www.reddit.com/r/bangtan/comments/9jzxdo/how_to_stay_safe_during_concerts_events_and_while/" target="_blank"> here. </a>
		    	</List.Item>
		    	<List.Item>
		    		Do hourly check-ins with a friend/family member, especially if you're traveling alone or out late at night after the concert or camping for merch.
		    		You can also post regularly on Snapchat/Instagram so others know where you are.
		    	</List.Item>
		    	<List.Item>
		    		Put in contact information of the local police stations including phone numbers and addresses, your own personal emergency contacts, and various emergency hotlines
		    	</List.Item>
		    	<List.Item>
		    		Bring a charger and backup power bank. You will need your phone for Google maps or calling for Uber/Lyft. Save enough battery for after the concert.
		    	</List.Item>
		    	<List.Item>
		    		Walk fast with intention. 
		    		Like you know where you're going even if you don't. 
		    		If you are actually lost, stop in a safe area/store to look at your phone or ask someone, then repeat. 
		    		Don't look at your phone the entire time while walking; it's not safe. 
		    		You just don't want to look vulnerable and be an easy target. 
		    		Standing on a corner and staring at the buildings and looking at your phone map screams "I have no idea where I'm going." 
		    	</List.Item>
		    	<List.Item>
		    		Beware of people trying to trick you. Many try to appear like they are asking for help (a common one is asking you for bus fare so they can see you take out your money or for directions so they can see you pull out your phone, etc).
		    	</List.Item>
		    	<List.Item>
		    		"This might be a scary one, but I was at a concert at Barclays in Brooklyn and there was a gun scare that resulted in a stampede. A lot of people got hurt. I don’t know the correct procedure, but we were told by security to kneel down and hide next to one of the food carts out of the way of the stampede and the unseen threat until it was over. This saved us from getting hurt and/losing our belongings."
		    	</List.Item>
		    	<List.Item>
		    		Do not go with anyone to a secondary location. Victims of violent crime are much more likely to go to a place willingly than with force - ie, someone invites you to a party or offers you a ride or something. 
		    	</List.Item>
		    	<List.Item>
		    		Don't make it obvious that you are traveling alone and don't easily give away personal information. If you come across a group of other fans, you can start by just simply asking if you can tag along with them instead of immediately publicly announcing somewhere that you're by yourself for the night. 
		    	</List.Item>
		    	<List.Item>
		    		Don't walk around in a sketcy area just to save a few bucks. Use Uber Pool or Lyft Shared rides if you need to save money. Your safety is more important than a few dollars.
		    	</List.Item>
		    	<List.Item>
		    		When using Lyft/Uber: BEFORE you get into the car, confirm the license plate, the driver, and ask who they're there to pick up. Don't introduce yourself until you confirm who they're picking up.
		    	</List.Item>
		    	<List.Item>
		    		Finally, be safe and have fun! There will be many ARMYs around before and after the concert, so it will be pretty safe. If you'll be alone, look on the Facebook group for someone from your high school/college who is also going, or make friends when you're in line. A lot of these are just precautions so you stay safe; it's not to deter you from traveling. :)
		    	</List.Item>
			  </List>
     	</Segment>

     	<Segment vertical>
     		<Header as='h4'>Other BTS Guides</Header>
		    	<List bulleted>
		    	<List.Item>
		    		This website was inspired by this <a href="https://docs.google.com/document/u/1/d/1xCC6CLX1L_ek9urQgDbQaRjaYrfkyzk2hHfPpyKA6Q8/mobilebasic?fbclid=IwAR3D-bq_wwzx84cAFSzGwQkWhW_v8rAZ5x6Ggbc5SwjMzA630Ym_DKnu9BE" target="_blank"> Rose Bowl ARMY guide </a>. 
		    		Check it out for more information!
		    	</List.Item>
			  </List>
     	</Segment>


    </div>
      
  );
};

export default Misc;