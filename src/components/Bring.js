import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { List, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'


const photos = [
  { src: 'images/bag-policy.jpg', width: 0.5, height: 0.5, caption: <a target="_blank" href='https://www.rosebowlstadium.com/visitor-center/code-of-conduct'>Rose Bowl Stadium Bag Policy</a> },
  { src: 'images/bag17.jpg', width: 0.5, height: 0.5, caption: <a target="_blank" href='https://www.amazon.com/dp/B07N12QS75/ref=cm_sw_r_cp_api_i_TSsLCbDBKBT93'>Eastsport Clear Stadium Messenger Bag</a> },
  { src: 'images/bag1.jpg', width: 0.5, height: 0.5, caption: <a target="_blank" href='https://www.amazon.com/Yocatech-Crossbody-Messenger-Shoulder-Adjustable/dp/B01MUBNNQT/ref=mp_s_a_1_1?crid=39P6DSIMT086F&keywords=yocatech%2Bclear%2Bcrossbody%2Bmessenger%2Bshoulder%2Bbag%2Bpurse%2Bfor%2Bwomen&qid=1552278131&s=gateway&sprefix=yocate&sr=8-1&th=1&psc=1'>Yocatech Clear Crossbody</a> },
  { src: 'images/bag2.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.amazon.com/dp/B077YB6X7H/ref=cm_sw_r_cp_api_i_4cEHCbWAKBAG4'>Mariela Small Clear Crossbody</a> },
  { src: 'images/bag3.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.amazon.com/Closure-Satchel-Transparent-Messenger-Shoulder/dp/B00YMU2P5C/ref=mp_s_a_1_3?crid=DOVNZRLF0ML7&keywords=clear+bag+with+turn+lock+closure&qid=1552278503&s=gateway&sprefix=clear+bag+with+turn+&sr=8-3'>Clear Bag with Turn Lock </a> },
  { src: 'images/bag4.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.thedealrack.com/gemline-4885-unisex-adult-clear-event-cinchpack-draw-string-bag.html'>Gemline Draw String Bag</a>},
  { src: 'images/bag6.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.amazon.com/Women-Clear-Crossbody-Purse-Bag/dp/B073RYD7M9/ref=cm_cr_arp_d_product_top?ie=UTF8'>Women Clear Crossbody</a> },
  { src: 'images/bag9.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.amazon.com/Clear-Bag-Stadium-Approved-Games-Cross-Body/dp/B01NAJELJ3/ref=mp_s_a_1_4?crid=2J748BGANTUOL&keywords=clear+nfl+approved+bags&qid=1552435356&s=gateway&sprefix=clear+nfl+&sr=8-4'>Clear Bag NFL & PGA Stadium Approved </a> },
  { src: 'images/bag10.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.amazon.com/360-DESIGN-BOX-Cross-Body-Transparent/dp/B07J59C4KY/ref=mp_s_a_1_fkmrnull_2?keywords=clear+purse+stadium+approved+360&qid=1552301035&s=gateway&sr=8-2-fkmrnull'>360 DESIGN BOX Clear Cross-Body</a> },
  { src: 'images/bag11.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.urbanoutfitters.com/shop/adidas-originals-clear-festival-crossbody-bag?category=bags-wallets-for-women&color=066&type=REGULAR'>Adidas Originals Clear Crossbody</a> },
  { src: 'images/bag12.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.aliexpress.com/item/Altbest-Transparent-Bag-for-Women-Clear-Shoulder-Bag-2019-Female-Handbags-Women-Versatile-Messenger-Bag-Shoulder/32990594014.html?tt=ae.CopyActivity&aff_platform=default&cpt=1554615416311&sk=rDWdwFm&aff_trace_key=43fb6cb5ad90495695dc9fd3f08e5e5f-1554615416311-08817-rDWdwFm&terminal_id=b4f19e8088ab4e399c9c193601d27168'>Altbest Transparent Bag</a> },
  { src: 'images/bag13.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.forever21.com/us/shop/catalog/product/f21/acc/1000332970'>Clear Vinyl Satchel</a> },
  {src: 'images/bag14.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.amazon.com/LUOEM-Messenger-Handbag-Shoulder-Transparent/dp/B071ZFKG9T/ref=redir_mobile_desktop?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0'>LUOEM Clear PVC Cross Body</a> },
  {src: 'images/bag15.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.aliexpress.com/item/fashion-2019-new-arrival-female-Transparent-Letter-Beach-Bag-PVC-Personality-Digital-Pure-Color-Women-s/32971119384.html?tt=ae.CopyActivity&fbclid=IwAR2pSifQf2XeIiJTXqtw93Rzv-p8I3pZeCvEBvZT3OSPwxnNWUtsco1OKdM&aff_platform=default&cpt=1554615917864&sk=ci8moNdm&aff_trace_key=acba4ffa9bd84325baab9ee85930e199-1554615917864-05248-ci8moNdm&terminal_id=b4f19e8088ab4e399c9c193601d27168'>Transparent Letter Beach Bag</a> },
  {src: 'images/bag16.jpg', width: 1, height: 1, caption: 'Clear bag from Daiso for $1.50'}
];


class Bring extends React.Component {

  render() {
    return (

      <div className='image-gallery'>
          <Segment>
            <h3 class="ui header">What to wear</h3>
              <List bulleted>
                <List.Item>
                  <a href="https://www.accuweather.com/en/us/pasadena-ca/91101/may-weather/337195" target="_blank">Pasadena weather in May </a> is around 80 degrees during
                  the day and mid 50's at night. 
                  <List.List>
                   <List.Item>During the day, bring a hat, travel bottle of sunscreen (in case it's not allowed in the stadium), and wear light, comfortable clothing.</List.Item>
                    <List.Item>Bring a light jacket because it might be chilly in the evening. If your bag has space, roll up a pair of sweatpants or leggings in case your legs get cold.</List.Item>
                  </List.List>
                </List.Item>

                <List.Item>
                  Wear COMFORTABLE shoes (or pack an extra pair of flip flops/flats). If you choose to wear platform shoes, make sure they're comfortable first; you don't want concert
                  day to be the day you break them in. 
                </List.Item>

                <List.Item>
                  See what other people are wearing on Facebook!
        
                  <List.List>
                  <List.Item>
                    <a href="https://www.facebook.com/groups/852207088215931/permalink/1622913044478661/" target="_blank">Thread #1</a>
                  </List.Item>
                  <List.Item>
                    <a href="https://www.facebook.com/groups/852207088215931/permalink/1667370816699550/" target="_blank">Thread #2</a>
                  </List.Item>
                  <List.Item>
                    <a href="https://www.facebook.com/groups/852207088215931/permalink/1657504201019545/" target="_blank">Outfits from BTS music videos</a>
                  </List.Item>
                  </List.List>

                </List.Item>
              </List>

            <h3 class="ui header">What to bring</h3>
              <div class="column">
                <div class="ui list">
                  <div class="item">Phone, power bank, charger, concert tickets</div>
                  <div class="item">ARMY bomb (the case is not allowed inside the stadium - see bag policy), extra batteries (AAA)</div>
                  <div class="item">Wallet, insurance card, ID, credit cards</div>
                  <div class="item">CASH! There are some restaurants that won't accept cards under a certain amount. You'll also need to cash if you plan on buying fan-made merch.
                  Note: you need exact fare if you plan to use the Metro. Also bring quarters for parking meters. </div>
                  <div class="item">Water: Factory sealed plastic bottles of water, 17 oz. or less, are allowed (don't open them until you pass security); limit 2 per person</div>
                  <div class="item">Outside food is not allowed (not sure about candies from goodie bags) but bring snacks to eat while waiting in line (especially if waiting for merch).</div>
                  <div class="item">Tissues for your tears of happiness (also it's good to have tissues in case a stall is out of toilet paper...)</div>
                  <div class="item">Tylenol/Advil for headaches/earaches, Zyrtec if you have allergies.</div>
                  <div class="item">Bandaids (in case you get blisters from all the walking/standing)</div>
                  <div class="item">Cough drops (throat may be be sore from screamng), vitamins (if you faint easily)</div>
                  <div class="item">Earplugs (buy concert earplugs to filter out the screams while still be able to hear music)</div>
                  <ul class = "section">
                    <li><a target="_blank" href="https://www.amazon.com/Alpine-Hearing-Protection-MusicSafe-Musicians/dp/B0032BYCWG/ref=sr_1_1?ie=UTF8&qid=1469555012&sr=8-1&keywords=alpine+musician+earplugs">Alpine Hearing Protection MusicSafe Classic Earplugs for Musicians</a> </li>
                    <li><a target="_blank" href="https://www.amazon.com/dp/B01GSJ1V0O/ref=cm_sw_r_cp_apa_i_4OdFCb9XFW5ZS">Reverbs High Fidelity Ear Plugs - 2 Pair Professional Noise Cancelling Earplugs For Concerts, Musicians, Motorcycles and More!</a> </li>
                    <li><a target="_blank" href="https://www.amazon.com/Etymotic-Research-ETYPlug-Protection-Earplugs/dp/B0044DEETC?th=1">ETY-Plugs High Fidelity Earplugs</a> </li>
                    <li><a target="_blank" href="https://www.amazon.com/dp/B007TEQNAG/ref=cm_sw_r_cp_apa_i_zDgFCbZHNS0GH">(If you need XS) V-MODA Faders Tuned Metal Earplugs - Rouge</a> </li>
                    <li><a target="_blank" href="https://www.amazon.com/Pinkies-High-Fidelity-Concert-Plugs/dp/B07215YCFV/ref=sr_1_15?crid=3QF8M2UN025T7&keywords=musician+ear+plugs&qid=1551637613&s=gateway&sprefix=muscian+%2Caps%2C143&sr=8-15">ClearPlugs High Fidelity Invisible Ear Plugs - Discreet Sound Preserving Hearing Protection for Concerts Musicians Motorcycle Shooting Travel and More.</a> </li>
                  </ul>  
                </div>
              </div>
            <h3 class="ui header">What NOT to bring</h3>
            <h5 class="ui header">Some Prohibited Items <a href="https://www.rosebowlstadium.com/visitor-center/code-of-conduct">(Full List)</a>:</h5>
            <div class="ui list">
                  <div class="item">Banners, signs, flags, poles or sticks</div>
                  <div class="item"><a target="_blank" href="https://www.rosebowlstadium.com/events/detail/bts-world-tour-love-yourself-speak-yourself">Update: </a> Handheld banners/flags less than 18” x 24” in size will be permitted in. However, banners/flags may not be mounted to a pole or a stick.</div>
                  <div class="item">Beverage containers larger than 17 oz.</div>
                  <div class="item">Boxes or wrapped packages; Glass, metal or hard plastic containers</div>
                  <div class="item">Outside Food (only for non-UCLA games)</div>
                  <div class="item">Cans, glass bottles or alcoholic beverages</div>
                  <div class="item">Noisemakers including thunder sticks, musical instruments, whistles, air horns and boom boxes</div>
                  <div class="item">Umbrellas</div>
                  <div class="item">Unauthorized cameras with lenses longer than 3.5 inches, interchangeable or telephoto lenses</div>
                  <div class="item">Unauthorized video cameras, monopods, tripods or selfie sticks</div>
                  <div class="item">Handheld fans that are not sold by official merchandise are <a target="_blank" href="https://twitter.com/arcadiantae/status/1114257077419954176">not allowed</a></div>
                  <div class="item"><a target="_blank" href="https://www.rosebowlstadium.com/events/detail/bts-world-tour-love-yourself-speak-yourself">Update: </a> fans with attachable water bottles, batteries, or motorized in any way will not be allowed to enter the venue.</div>
                  <div class="item"><a target="_blank" href="https://www.rosebowlstadium.com/events/detail/bts-world-tour-love-yourself-speak-yourself">Update: </a> Plush doll keychains will not be allowed to enter the Rose Bowl Stadium.</div>
            </div>
          </Segment>
        </div>
        
          
    )
  }
}


export default Bring;
