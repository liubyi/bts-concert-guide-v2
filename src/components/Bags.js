import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import {Divider, List, Grid, Image, Segment, Item, Rating, Icon, Button, Label, Popup } from 'semantic-ui-react'


const photos = [
  { src: 'images/bag-policy.jpg', width: 0.5, height: 0.5, caption: <a target="_blank" href='https://www.rosebowlstadium.com/visitor-center/code-of-conduct'>Rose Bowl Stadium Bag Policy</a> },
  { src: 'images/bag19.jpg', width: 0.5, height: 0.5, caption: <a target="_blank" href='https://www.amazon.com/dp/B07KDWQXZB/ref=twister_B07KDX8HC3?_encoding=UTF8&psc=1'>Clear Purse</a> },
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
  { src: 'images/bag18.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.facebook.com/groups/852207088215931/permalink/1654880957948536/'>Etsy Tour Bag</a> },
  {src: 'images/bag14.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.amazon.com/LUOEM-Messenger-Handbag-Shoulder-Transparent/dp/B071ZFKG9T/ref=redir_mobile_desktop?_encoding=UTF8&%2AVersion%2A=1&%2Aentries%2A=0'>LUOEM Clear PVC Cross Body</a> },
  {src: 'images/bag15.jpg', width: 1, height: 1, caption: <a target="_blank" href='https://www.aliexpress.com/item/fashion-2019-new-arrival-female-Transparent-Letter-Beach-Bag-PVC-Personality-Digital-Pure-Color-Women-s/32971119384.html?tt=ae.CopyActivity&fbclid=IwAR2pSifQf2XeIiJTXqtw93Rzv-p8I3pZeCvEBvZT3OSPwxnNWUtsco1OKdM&aff_platform=default&cpt=1554615917864&sk=ci8moNdm&aff_trace_key=acba4ffa9bd84325baab9ee85930e199-1554615917864-05248-ci8moNdm&terminal_id=b4f19e8088ab4e399c9c193601d27168'>Transparent Letter Beach Bag</a> },
  {src: 'images/bag16.jpg', width: 1, height: 1, caption: 'Clear bag from Daiso for $1.50'}
];


class Bags extends React.Component {
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
        
          <Segment basic>
            <h3 class="ui header">Clear Bag Policy</h3>
            <List bulleted>
            <List.Item>
              The Rose Bowl Stadium has implemented a <a target="_blank" href="https://www.rosebowlstadium.com/visitor-center/code-of-conduct">clear bag policy</a> for 
            all events at the Rose Bowl Stadium.
            </List.Item>
            <List.Item>
              Large purses and bags must be returned to the vehicle or checked in for $10 at a check-in tent.
            </List.Item>
            <List.Item>
              Below are bags that have been approved by the Rose Bowl Stadium. Click on the image to get the link to the website.
              <List.List>
                <List.Item>
                  These images (and replies from Rose Bowl officials) were from a <a target="_blank" href="https://twitter.com/arcadiantae/status/1104958700136030208">Twitter thread</a> started by <a href="https://twitter.com/arcadiantae">@arcandiantae</a>. 
                </List.Item>
                <List.Item>
                  Also there is a list of bags people are using on this <a href="https://www.facebook.com/groups/852207088215931/permalink/1647814075321891/" target="_blank"> Facebook post </a>.
                </List.Item>
                <List.Item>
                  Note: Bags from Amazon will arrive in a day or two, while bags from China/Korea can take over a month. 
                </List.Item>
              </List.List>
            </List.Item>
            <List.Item>
              If you are unsure if your bag is allowed in the stadium, contact Rose Bowl <a target="_blank" href="https://www.rosebowlstadium.com/visitor-center/contact">here</a>.
            </List.Item>
            <List.Item>
              You may be able to bring one clear bag and one clutch according to older rules <a target="_blank" href="https://www.usacamps.com/wp-content/uploads/2018/08/Rose-Bowl-Security-FAQ.pdf?fbclid=IwAR3rjlxC5lXJjUxEdUTjZduoEOmjrDcO97beTFsKmS7epcVUytl4nKofpCQ">here</a>. 
              But it's best to contact them to double check since the rules may be different for concerts. 
            </List.Item>
            <List.Item>
              Recommendation: Although the small bags are cute, I recommend getting one of the larger bags that can actually hold a light jacket, bottles of water, and a pair of flip flops. 
            </List.Item>
            <List.Item>
              How strict will they be? Someone mentioned that last year at Fort Worth they had the clear bag rule and they had a piece of paper on the table. 
              If your bag was bigger than that it wasn't allowed. Also you can pay $10 for a locker but you are responsible for taking it in and out. The staff won't do it for you. 
            </List.Item>
          </List>

            <div class="ui two column very relaxed grid">
              <div class="column">
                <h5 class="ui header">Approved Bags</h5>
                <div class="ui list">
                  <div class="item">12" x 6" x 12" Clear Plastic Bag</div>
                  <div class="item">1 Gallon Plastic Freezer Bag</div>
                  <div class="item">Clutch with Shoulder Strap (clutch may not be larger than 4.5" X 6.5")</div>
                  <div class="item">Clutch with Wrist Strap (clutch may not be larger than 4.5" X 6.5")</div>
                  <div class="item">Diaper Bag, as long as accompanied by a child</div>
                </div>
              </div>
              <div class="column">
                <h5 class="ui header">Non-Approved Bags</h5>
                <div class="ui list">
                  <div class="item">Backpacks </div>
                  <div class="item">Clear Backpack</div>
                  <div class="item">Camera Case</div>
                  <div class="item">Mesh Bag</div>
                  <div class="item">Purse</div>
                  <div class="item">Tinted Plastic Bag</div>
                  <div class="item">Oversized Tote Bag</div>
                  <div class="item">Printed Pattern Plastic Bag</div>
                  <div class="item">Fanny Pack</div>
                  <div class="item">Binoculars Case (binoculars are allowed; just be careful since you won't have a case)</div>

                </div>
              </div>
            </div>
            <br/>
            * In the absence of a press release from the Rose Bowl, it is probably safe to assume that ARMY bomb cases will not be allowed either as it is a hard, protective case. 

        </Segment>

        <Divider horizontal className="calc-divider">APPROVED BAGS</Divider>

        <Gallery photos={photos} onClick={this.openLightbox} columns={this.columns} />
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


export default Bags;
