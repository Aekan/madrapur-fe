/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductCard from 'common/components/Card/ProductCard';
import Button from 'common/components/Button/Button';
import LazyLoading from '../../common/components/LazyLoading'
import { actions as exampleActions } from '../../redux/modules/example'
import { exampleSelector } from '../../redux/selectors/exampleSelector'
import { ExampleWithError } from '../../common/components/Example'
import { ErrorBoundary } from '../../common/components/Utilities'
import styles from './MainPage.css';

const LazyExample = LazyLoading(() => import('../../common/components/Example/Example'))

const mapStateToProps = (state) => ({
  example: exampleSelector(state),
})

const mapDispatchToProps = {
  ...exampleActions,
}


@connect(mapStateToProps, mapDispatchToProps)
class Example extends Component {
  static propTypes = {
    example: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getAwesomeCode } = this.props

    getAwesomeCode()
  }

  render() {
    return (
      <div>
        <div className={styles.seoBlock}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 style={{ margin: '30px 0px' }}>Budapest River Cruise</h1>
              </div>
              <div className="col-lg-12">
            Welcome to Budapest, in the heart of Europe, in the middle of a
            fairy tale! Budapest is one of the most mystic, enchanted and
            romantic cities along the Danube river.
            As the capital of Hungary, this is a centre of everything you
            want to find in this welcoming country. At the same time, like
            the heart of Europe, you will find Budapest in a lovely, caothic
            way as in the East, a little precise, like on the West,
            as modern as the North with a little touch of the Souths.
            Join as and we will show you this fabolous side of the capital,
            while floating on the Danube river, underneath the
            Bridges, and you will be able to admire the panoramic
            view and the most famous places of Budapest.
              </div>
              <div className="col-lg-12" style={{ margin: '40px 0px 0px 0px', background: '#fffbfb' }}>
                <div className={styles.Featured}>Featured Products</div>
                <ProductCard productLink="/product/hungarian-folklore-and-dinner-cruise" imgAlt="Wine Cruise" productPrice="55" productName="HUNGARIAN FOLKLORE AND DINNER CRUISE" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2017/10/hungarianfolklore-300x300.jpg" />
                <ProductCard productLink="/product/budapest-river-cruise-piano-battle-show" imgAlt="Wine Cruise" productPrice="55" productName="BUDAPEST RIVER CRUISE & PIANO BATTLE SHOW" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/02/bp-river-001-300x300.jpg" />
                <ProductCard productLink="/product/budapest-wine-tasting" imgAlt="Wine Cruise" productPrice="55" productName="WINE TASTING BUDAPEST WITH TASTE AND PLAY" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2018/12/wine-cruise-300x300.jpg" />
                <ProductCard productLink="/product/budapest-booze-pizza" imgAlt="Wine Cruise" productPrice="29" productName="BUDAPEST BOOZE & PIZZA CRUISE" imgSrc="https://budapestrivercruise.co.uk/wp-content/uploads/2017/11/pizza-beer-cruises-budapest-300x300.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.underSeoBlock}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9" style={{ margin: '70px 0px', textAlign: 'center' }}>
                <h2>Budapest Danube Cruises</h2>
            During sightseeing on board, on the Danube you have the chance
            to admire wooded areas and hills of Buda with
            the unique Matthias Church and Fisherman’s Bastion.
            The other side of the Danube, called Pest you will see the nicest
            and most-known building of Budapest, Parliament as
            the third largest ones in the world designed by Imre Steindl.
            The wonderful panorama gilded by flowing bridges of Pest and
            Buda, from which four are also the parts of UNESCO, namely the
            Margaret Bridge, Chain Bridge, Elisabeth Bridge and Liberty Bridge.
            So it is not an exaggeration to say during enjoying Budapest
            river cruise, you must stare the breath-taking Danube panorama
            as a so-called incomparable scene throughout Europe.
            Budapest river cruise offered by Silver-line provides excellent
            choice to celebrate some special occasions for example a wedding
            anniversary, birthday, Valentine’s day or any other remarkable
            feasts, having a luxurious Budapest river cruise
            with tasty dinner, enjoying elegant live show.
            All our Budapest river cruise programs are available in winters
            and summers, too.
            Luxurious catamaran is heated in winters but air-conditioned
            in hot summers so we are always able to provide you to feel the maximum comfort.
            Join us and have an unforgettable journey!
            Seasonal Budapest river cruise, having various themes provide
            you to choose the perfect program from a simple sightseeing tour
            to a whole night dinner cruise with piano or folklore show and so much enjoyment.
            Each Budapest river cruise program guarantees unforgettable experiences for guests.
            Choose the most favourable Budapest river cruise program and
            be the part of a so special treat never to be forgotten.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.PianoBlock}>
          <div className="container">
            <div className="row">
              <div className="col" />
              <div className="col-lg-9" style={{ margin: '20px 0px', textAlign: 'center' }}>
                <h2>
  Budapest cruise with delicious
                  <br />
                  {' '}
  dinner and piano show
                </h2>
            Budapest danube cruise with delicious dinner
            and piano show is one of the most popular sightseeing tours.
            As having a proper cruise,
            lasting for 3 hours, you might have the possibility to
            admire beautiful lights of the city at night.
            Also wonder how lights of the Parliament are shining on
            the river as the whole Danube is in a bath of glossiness.
            While cruising at night, having dinner and sightseeing,
            two fantastic pianists and a talented songstress are always taking
            care of pleasant and romantic way of feel. Once it is
            dumpish, once it is cheery with well-known songs and beloved by all.
            The second part of cruising is about pianists fighting
            with each other, speeding the glorious feeling.
            During the 3-hour candlelit danube cruise, attentive
            waiters are serving the delicious 4-course menu with chosen desired dish.
            Live piano show by sightseeing cruise starts at 17.30,
            lasting 22.30 so you have the chance to admire not only the beautiful
            lights of Budapest at night, but also you will have the
            wonder of impressive sunset. After one and a half hour, the boat is
            coming back so while enjoying dessert, you will have the
            opportunity to watch the other half of the city, too. By the end of the
            fantastic night, the boat is arriving back to the Dock 11.
            I am surely guaranteed, you will have the most memorable
            night with us. Songs, sights and tasty dishes in
            perfect harmony give you an excellent relaxation, indulging your mind.
            Sightseeing and river cruising with dinner and piano battle
            show is an elegant or romantic surprising program for your each loved member.
                <Button link="/product/budapest-river-cruise-piano-battle-show" buttonLabel="BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.FolkloreBlock}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9" style={{ margin: '20px 0px', textAlign: 'center' }}>
                <h2>
Dinner cruise with operetta and folklore show
                  {' '}
                  <br />
Budapest night cruise
                </h2>
          Dinner cruise with operetta and folklore show is one of the most popular
          sightseeing tours. As having a proper cruise, lasting for 3 hours, you might have the
          possibility to admire beautiful lights of the city at night. Also, wonder
          how lights of the Parliament are shining on the
          river as the whole Danube is in a bath of glossiness.
          It is a whole night dinner Budapest river cruise with an entertaining and
          cultural program, where you could admire the most wonderful sights of the city centre,
          getting an inside view of the Hungarian folklore and operetta world.
          Due to the talented folk dancers and operetta singers during one night,
          you will experience the Hungarian culture. After the breath-taking
          show with traditional folk clothes worn by presenters, with the help of dancers,
          you can also learn some folk dance steps so at the end you will
          get a piece of the Hungarian culture by our special Budapest river cruise.
          During the 3-hour joyful river cruise, our waiters are serving
          the delicious 4-course menu with a chosen desired dish.
          Dinner cruise with operetta and folklore show starts at 19.30, lasting 22.30 so you have
          the chance to admire not only the beautiful lights
          of Budapest, having enjoyment show at night,
          but also you will have the wonder of impressive sunset.
          After one and a half hour, the boat is coming back
          so while enjoying dessert, you will have the opportunity to
          watch the other half of the city, too. By the end of the
          fantastic night, the boat is arriving back to the Dock 11.
          I am surely guaranteed, you will have the most memorable night with us.
          Songs, sights and tasty dishes in perfect harmony give you an excellent relaxation,
          entertainment without age limit, lovely welcomed by the youth and the elders,
          too. Dinner cruise with operetta and folklore show is a
          perfect program, staying in Budapest for the whole family.
                <Button link="/product/hungarian-folklore-and-dinner-cruise" buttonLabel="BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.SightseeingBlock}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12" style={{ margin: '50px 0px 300px 0px', textAlign: 'center' }}>
                <h2>Simple Budapest sightseeing river cruise</h2>
          Pedestrian precinct of Budapest and especially the city
          centre provide interesting sights for each tourist.
          But do not forget the crowd while reaching all spectacles.
          Actually, crowd can be avoidable by choosing sightseeing cruise.
          It is not an exaggeration to say that Budapest is one of the most
          magnificent sights by the Danube view.
          The panoramic view, especially its cultural and natural uniqueness,
          of the Danube coast and bend of Budapest
          certifies that we are among the list of UNESCO World Heritage.
          These places of interest are really unmissable of a Hungarian
          vacation, staying in Budapest.
          During the 75 minutes of simple sightseeing boat tour we invite you,
          your friends and family members to
          admire the Buda Castle, Parliament, Fisherman’s Bastion and several
          other places of interest in Budapest.
          Sightseeing boat tour is available in several different languages
          by audio guide with which we are gazing at the
          breath-taking sights, learning more and more interesting facts of
          the city, buildings and historical elements, too.
          In case you might be hungry during cruising, our snack bar offers
          you delicious street food options. Sit back in comfort,
          enjoy cradling by boat, touching your face by warmish wind and
          experience the wonderful panoramic view of Budapest.
                <Button link="/product/budapest-sightseeing-river-cruise" buttonLabel="BOOK NOW" />
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.PizzaBlock}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9" style={{ margin: '80px 0px', textAlign: 'center' }}>
                <h2>Pizza and beer cruise </h2>
            Pizza and beer cruise is one of our options for Budapest sightseeing cruise.
            The price of pizza and beer cruise includes not only sightseeing ticket
            but also a whole pizza (26 cm) with optional choice and unlimited beer and drink package.
            See the most desirable panoramic views of the city, having a tasty
            pizza and some cool drinks. Have a nice dinner with your friends,
            family members even colleagues meanwhile having a
            75-minute sightseeing Budapest boat tour.
                <Button link="/product/budapest-booze-pizza" buttonLabel="BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.august20Block}>
          <div className="container">
            <div className="row">
              <div className="col" />
              <div className="col-lg-9" style={{ margin: '50px 0px', textAlign: 'center' }}>
                <h2>Firework cruise on the 20th of August</h2>
            20th of August is the greatest national holiday in Hungary,
            celebrating St. Stephen’s Day, commemorating the foundation of the Hungarian state.
            On this day everywhere in Budapest and other Hungarian cities
            are waiting for visitors with festival programs. Dome hall of
            the Parliament is opened where the Holy Crown of Hungary can be
            seen even several concerts are organised and held in other parts of the city.
            The top of the day is actually about the breath-taking firework
            over the Danube. From all over the country,
            many people visit Budapest to see the main attraction.
            Join us and celebrate on the 20th of August on board by cruise,
            watch the most significant firework of the
            whole year in premium seats of the luxurious boats.
            By the special and festive cruise, first we are travelling
            a smaller trip to the Margaret Island so you have the
            chance to discover all places of interest from the Danube.
            While cruising, waiters are serving the 4-course menu
            with delicious dishes, enjoying a live piano battle show, speeding the way of feel.
            By reaching the Margaret Island, we are coming back
            to the Batthyány square, from where as the final attraction
            you will wonder how amazing the festive firework is.
                <Button link="/product/budapest-river-cruise-piano-battle-show" buttonLabel="BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.christmasBlock}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9" style={{ margin: '50px 0px', textAlign: 'center' }}>
                <h2>Budapest dinner cruise at Christmas</h2>
            Celebrate Christmas Eve on a luxurious catamaran, decorated beautifully.
            A special night,  cruise with homelike Christmas
            feeling is offered for you and your partners.
            We are inviting you for a unique and delicious
            4-course menu with festive live show on the first day of Christmas.
            Miracle lights of Budapest, tasty dishes and candlelit
            dinner with live show are guaranteed in order to have a memorable and intimate event.
                <Button link="/product/budapest-christmas-eve-cruise-dinner" buttonLabel="BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.valentineBlock}>
          <div className="container">
            <div className="row">
              <div className="col" />
              <div className="col-lg-9" style={{ margin: '50px 0px', textAlign: 'center' }}>
                <h2>Valentine’s Day Budapest danube cruise</h2>
              Nothing is more romantic than spending a candlelit dinner together with your partner,
              watching and listening to a live piano battle show,
              amazing in sunset and wonder the shining lights of Budapest, enjoy cradling by boat.
              Surprise your partner on Valentine’s Day by a
              special and luxurious danube cruise, having a nice dinner.
              On this occasion, called Valentine’s Day cruise,
              we provide all conditions for you to spend an unforgettable
              night with each other on board. So release yourself, we will organise everything.
              Tables are decorated with rose petals, coloured champagne,
              heart-formed starters and desserts are served to all of you.
              As a demand, a unique surprising package could also be offered for you,
              including a nice red rose, two heart-formed “Szamos” marzipan
              dessert even a perfect photo taken as a remarkable memory from this fairy tale night.
                <Button link="/product/budapest-valentines-day-dinner-with-cruise" buttonLabel="BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newYearsBlock}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9" style={{ margin: '60px 0px', textAlign: 'center' }}>
                <h2>Budapest cruise on New Year’s Eve</h2>
            Greet the New Year on a luxurious catamaran!
            Increase joy at night with our Budapest cruise
            with dinner and say goodbye the year from the middle of the Danube!
            As a proper alternative program, we are offering
            Budapest river cruise on New Year’s Eve to close the exact year.
            Magnificent dinner and miracle lights of the panoramic
            Danube with a live piano battle show, providing a complete
            entertainment on the last day of the year are waiting for you, too.
            At the minute of midnight in front of the Parliament,
            from the middle of the Danube, you have the
            great opportunity to cheer and wonder the festive impressive firework.
            Join us on New Year’s Eve and close the year with a miracle night!
                <Button link="/product/newyearsevebudapest-dinner-cruise" buttonLabel="BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.seoBlock}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12" style={{ margin: '50px 0px', textAlign: 'center' }}>
                <h2>Cruise Budapest on the first day of the year</h2>
            According to a saying, the way you spend the first
            day and with whom especially will be determining for the next whole year.
            So join us on the first day of the year and make sure
            your next year will be as fantastic as spending the night with us.
            We are waiting for you on luxurious catamaran with the
            panoramic Danube, delicious 4-course dinner and live piano battle show.
            Pianists ensure some well-known and common songs
            to make a pleasant feeling. So sit back and relax, we will
            guarantee everything to enjoy Budapest danube
            cruise on the first day of the year.
            Choose from our various and different cruise programs
            and be the part of an unforgettable experience you, too!
                <Button link="/product/budapest-river-cruise-piano-battle-show" buttonLabel="BOOK NOW" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className="col-lg-12" style={{ color: 'white' }}>
            <div className="row">
              <div className="col-lg-12" style={{ fontSize: '40px', textAlign: 'center', marginTop: '30px' }}>Contact Info</div>
              <div className="col-lg-12">
                <div
                  className="container"
                  style={{
                    margin: '50px auto 80px', background: '#80889a', boxShadow: '2px 2px 2px black', padding: '20px',
                  }}
                >
                  <div className="row">
                    <div className="col">
                      <div style={{ fontSize: '40px' }}>HUNGARY</div>
                      <div style={{ fontSize: '30px' }}>BUDAPEST</div>
                      <div style={{ fontSize: '16px', margin: '10px 0px 0px 0px' }}>1051 VIGADÓ TÉR</div>
                      <div style={{ fontSize: '16px', margin: '10px 0px 0px 0px' }}>DOCK 11.</div>
                    </div>
                    <div className="col">
                      <div style={{ fontSize: '30px' }}>Reserve a Cruise now</div>
                      <div style={{ fontSize: '20px', margin: '10px 0px' }}>+36-20-402-89-62</div>
                      <div style={{ fontSize: '16px', margin: '10px 0px 0px 0px' }}>Dinner & Cruise service</div>
                      <div style={{ fontSize: '16px' }}>Every day: 19:30.| 21:00</div>
                      <div style={{ fontSize: '16px', margin: '10px 0px 0px 0px' }}>Sightseeing Cruise service</div>
                      <div style={{ fontSize: '16px', margin: '0px 0px 10px 0px' }}>Daily: Bookings from 11:00am - 9.00pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Example;
