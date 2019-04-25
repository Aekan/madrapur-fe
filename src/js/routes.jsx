/* eslint-disable object-curly-spacing */
import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import LazyLoading from 'common/components/LazyLoading';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styles from '../style/index.css';


// This is show case how you can lazy loading component
const ExampleRouteHandler = LazyLoading(() => import('views/example'))
const Header = LazyLoading(() => import('common/components/Header/Header'))
const Footer = LazyLoading(() => import('common/components/Footer/Footer'))


// Please remove that, it is an example
const BudapestCruises = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2>This is Just Another Page</h2>
        <p>Please remove this from your route, it is just to show case basic setup for router.</p>
      </div>
    </div>
  </div>
)

export default class BasicConcepts extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      // Day is disabled, do nothing
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      // beallitja a state erteket a pickelt napra
      return;
    }
    this.setState({ selectedDay: day });
  }

  render() {
    return (
      <div>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
          disabledDays={{ daysOfWeek: [0] }}
        />
        {this.state.selectedDay ? (
          <p>
You clicked
            {' '}
            {this.state.selectedDay.toLocaleDateString()}
          </p>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
    );
  }
}

const BudapestWineTasting = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 aside" style={{float: 'left'}}>
        {<BasicConcepts />}
      </div>
      <div className="col-lg-8 product" style={{float: 'left'}}>
        <h1
          className="title"
          style={{
            color: '#535353', 'font-family': 'Palatino', 'font-size': '25px', 'font-weight': '600',
          }}
        >
BUDAPEST WINE TASTING & PLAY
        </h1>
        <h2 className="subtitle" style={{'font-size': '19px !important', 'font-family': 'Helvetica !important'}}>Taste & Play on our Budapest River Cruise</h2>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>Have you ever been to Hungary while having international casino based party games where you can learn the tricks of wine tasting while floating on the Danube River and enjoying live music, have you? We highly doubt it, since our matchless Taste and Play program has just been launched and now is ready for adventurous pioneers to take a chance on the good luck and the sensitive sensory organs. It is recommended not just for professional wine tasters, but for beginners too. So if you are interested in quality wines but you have gained a little experience, the time has arrived to boost your knowledge.</div>
        <img className="image" style={{height: 'auto', 'max-width': '100%', margin: '0 0 20px'}} src="https://budapestrivercruise.co.uk/wp-content/uploads/2018/12/wine-cruise-budapest.jpg" alt="wine tasting cruise budapest" width="1920" height="491" />
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>What to expect? Well, valuable information on Hungary’s wine regions and exciting description of wines. Hence, at the next family gathering or company event, you can act as a wine expert. Or if you regard yourself as a professional taster, come and take a risk, test your knowledge meanwhile having a good time with other people of the same interest.</div>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>So what is it exactly? Basically, this is a casino themed wine tasting event, where you can enjoy the excitement of a casino game while experimenting the way of proper wine tasting. We recommend it for team building, stag party, even for family occasions if everyone is over 18.</div>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>How do we play our Wine Tasting Game?</div>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>Upon arrival at the entrance kind hostesses await you and show your table.</div>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>At the beginning of the game, we give you all the chips you have to organize during the game and you get a new personality since we use name cards for remembering each other's names. Don't think we learn each other's real name, but you can hide behind the face of a famous character such as Pinocchio or Queen Elisabeth. These chips are distributed for everyone equally. As a matter of fact, the chips’ value is, basically, the price of the wine casino; therefore, you can use your money twice in the evening. By the way, if you are afraid to apply alone, there is an opportunity too to play in a group. So take no excuse, apply to our Wine Tasting Game in Budapest!</div>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>After you have settled down the referee will explain the rules of the game and will hold a short presentation on the 22 wine regions of Hungary. Just to name a few: Eger, Tokaj-Hegyalja, Pannonhalma-Sokoróalja, Balatonfüred-Csopak, Villány-Siklós etc. Have you heard of the world-famous Aszú wine, Bull’s Blood, Ice wine, Leányka and Medoc from Eger or Cabernet Sauvignon from Bock Cellar? Do they sound unfamiliar? No matter, during the evening you have the chance to taste wines from 7 of these wine regions ranging from red, white and rosé wines. Afterward, you will gain a deep insight into them.</div>
        <img className="image" style={{height: 'auto', 'max-width': '100%', margin: '0 0 20px'}} src="https://budapestrivercruise.co.uk/wp-content/uploads/2018/09/wine-casino-6.jpg" alt="wine tasting budapest" width="1067" height="628" />
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>Your tool during the wine tasting in Budapest is a black (not transparent) wine glass, which will restrict you to recognize even the color of the wine you are drinking. Did you know, 80% of the received information comes through the eyes? Did you know that all the other senses lean on the vision while living your everyday life? This game will allow you to test all your other senses while discovering the taste of the wine. Be careful and don't let your confidence rise, thinking you are an expert wine consumer. Based on our experience, we know, everyone can fail our test (and before we forget, don’t think you will cheat and learn about the wine based on the bottle since the bottle will be covered as well). Concentrate and just rely on your senses!</div>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>1st round, your wine is pulled into your glass; you taste it and now it is time to take a bet. The examination of wine consists of a thorough smell and taste sampling. By this way, you can figure out whether it has a slightly perfumed, attractive aroma or a rich characteristic smell which makes it a heady, robust wine with plenty of good acids. Doesn’t it sound mouth-watering? I guess, definitely. When everybody is ready, the croupier will reveal the wine and you get your winnings.</div>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>While you enjoy the rest of the wine and eat your fingertip snacks, the croupier will explain everything you should know about the wine. These little savory snacks boost the aroma of the wine in order to make the taste more memorable. There are, for example, Grissini stick, Edam cheese, Vegetable</div>
        <img className="image" style={{height: 'auto', 'max-width': '100%', margin: '0 0 20px'}} src="https://budapestrivercruise.co.uk/wp-content/uploads/2018/09/wine-casino-11.jpg" alt="Wine tasting casino budapest" width="1067" height="628" />
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>batonnets, Lemon marinated chicken mouse, on your plate. Don't worry, it is not gonna be a dry, boring explanation, it is all about fun (we won't ask at the end what you have learned and you don't have to take an exam either). During the presentations feel free to ask questions. Also, you can discuss with the other players and the croupier who knows well which wine type matches with which certain meals. Of course, it is widely known that red wines are mostly served to dark meat dishes like roasted wild pig or stew, and white wines to light dishes such as chicken breast in its skin filled with cheese, garnished with new potatoes sprinkled with dill or oven baked whole trout from Szalajka Valley sprinkled with lemon and capers and fresh salad, and dessert wines to different cakes like Somló sponge cake or Dobos cake. Collect other examples from the Hungarian's or other nation’s cuisines with your partners.</div>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>After paying the prizes comes the next round of betting and tasting again. This exciting, fascinating game has 7 rounds, wines from 7 Hungarian wine regions, with great fellow players and the experienced croupier. No need to mention that there are an ultimately great mood and atmosphere during the whole game where you can have fruitful discussions with others sharing the same taste like you or even make new friends, build potential contacts. Whether you are a beginner or a professional wine taster, there is always something to learn about wines, production technology, vineyards, storage of different wine types, marketing etc.</div>
      </div>
    </div>
  </div>
)

const BudapestPianoShow = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 aside" style={{float: 'left'}}>
        {<BasicConcepts />}
      </div>
      <div className="col-lg-8 product" style={{float: 'left'}}>
        <h1
          className="title"
          style={{
            color: '#535353', 'font-family': 'Palatino', 'font-size': '25px', 'font-weight': '600',
          }}
        >
  Budapest River Cruise on the Danube
        </h1>
        <h2 className="subtitle" style={{'font-size': '19px !important', 'font-family': 'Helvetica !important'}}>What would like to do during your Budapest Holiday?</h2>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>
        Have you already heard a lot about Budapest but you have never been here before? Do not you have any idea which Budapest destinations and programmes you must see?
        So we will help you with a small guide.
        Why could we offer our Budapest dinner cruises for tourists visiting Budapest?
        Buda Castle, the Parliament Building, Chain Bridge or the Hungarian National Theatre are all visible from our Budapest River Cruise during you are having pleasure in pianists’ playing and our hostess’ live singing.
        The Live Piano Entertainment is the most wanted Budapest River Cruise, giving an opportunity to share your table with your family or friends.
        </div>
        <div className="content" style={{'font-family': 'Helvetica !important', 'font-size': '16px !important', margin: '0 0 20px'}}>
        To whom can we offer our Budapest River Cruise?
        Visitors who would like to drink a glass of wine and wish for nice speech with their lovers while they listening nice music behind.

        The musicians and singers will take care of great ambience while you can watch the whole city around you.

        Our Boat has two levels; one of them provides a Hungarian Folklore and Operetta Show, which is also very popular.

        During the cruising in Budapest, you can taste typical Hungarian dishes served as a 4-course menu, including appetizers in pastry basket with four different stuffing. When you start your dinner and cruise, you will can clink with a glass of welcome drink, which is optional from soft drinks or champagne.

        Finishing with the tasty appetizers prepared by a chef who gained Michelin Star, choose from two different kinds of soups, such as Vegetarian Goulash, containing the best qualified Hungarian vegetables, such as carrot or potato, yellow onion, garlic or apiaceous. The other special soup might be optionally chosen as the well-known pumpkin cream soup with roasted pumpkin seeds.

        After you finished with the first two meals, you can take around on the boat; desire the beautiful views and sights of Budapest, taking wonderful selfies with the Paris of East behind you.
        </div>
      </div>
    </div>
  </div>
)

const BudapestFolkloreShow = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 aside" style={{float: 'left'}}>
        {<BasicConcepts />}
      </div>
      <div className="col-lg-8 product" style={{float: 'left'}}>
    a
      </div>
    </div>
  </div>
)

const BudapestValentinesDay = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 aside" style={{float: 'left'}}>
        {<BasicConcepts />}
      </div>
      <div className="col-lg-8 product" style={{float: 'left'}}>
    a
      </div>
    </div>
  </div>
)

const BudapestChristmasCruise = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 aside" style={{float: 'left'}}>
        {<BasicConcepts />}
      </div>
      <div className="col-lg-8 product" style={{float: 'left'}}>
    a
      </div>
    </div>
  </div>
)

const BudapestNewYearsCruise = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 aside" style={{float: 'left'}}>
        {<BasicConcepts />}
      </div>
      <div className="col-lg-8 product" style={{float: 'left'}}>
    a
      </div>
    </div>
  </div>
)

const BudapestSightseeingCruise = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 aside" style={{float: 'left'}}>
        {<BasicConcepts />}

      </div>
      <div className="col-lg-8 product" style={{float: 'left'}}>
    a
      </div>
    </div>
  </div>
)

const BudapestBoozeCruise = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 aside" style={{float: 'left'}}>
        {<BasicConcepts />}
      </div>
      <div className="col-lg-8 product" style={{float: 'left'}}>
    a
      </div>
    </div>
  </div>
)

const ShopPage = (() => { return LazyLoading(() => import('views/shop')) })();

const EventBudapest = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
       a
      </div>
    </div>
  </div>
)

const PrivacyPolicy = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        Policy cucc
      </div>
    </div>
  </div>
)

const BudapestHistorical = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-4 aside" style={{float: 'left'}}>
        contact form
      </div>
      <div className="col-lg-8 product" style={{float: 'left'}}>
    a
      </div>
    </div>
  </div>
)


// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => <Header {...props} />)

module.exports = (
  <div className={styles.container}>
    <HeaderWithRouter />
    <div id="index" className={styles.content}>
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route path="/budapest-cruises" component={BudapestCruises} />
        <Route path="/product/budapest-river-cruise-piano-battle-show" component={BudapestPianoShow} />
        <Route path="/product/hungarian-folklore-and-dinner-cruise" component={BudapestFolkloreShow} />
        <Route path="/product/budapest-wine-tasting" component={BudapestWineTasting} />
        <Route path="/product/budapest-valentines-day-dinner-with-cruise" component={BudapestValentinesDay} />
        <Route path="/product/budapest-christmas-eve-cruise-dinner" component={BudapestChristmasCruise} />
        <Route path="/product/newyearsevebudapest-dinner-cruise" component={BudapestNewYearsCruise} />
        <Route path="/budapest-sightseeing-river-cruise" component={BudapestSightseeingCruise} />
        <Route path="/product/budapest-booze-pizza" component={BudapestBoozeCruise} />
        <Route path="/product/budapest-szentendre-river-cruise" component={BudapestHistorical} />
        <Route path="/event-venues-in-budapest" component={EventBudapest} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/cruise-shop" component={ShopPage} />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
    <Footer />
  </div>
)
