import React from 'react';
import SocialFollow from 'common/components/SocialFollow/socialFollow';
import { Navbar, NavItem, DropDownItem } from 'common/components/Navbar';
import styles from './Header.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SocialFollow />
          </div>
          <div className="col" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Navbar logoAlt="alt" logoSRC="https://silver-line.hu/wp-content/uploads/2017/05/budapest_river_cruise_logo.png">
            <NavItem itemLink="/" itemName="HOME" />
            <DropDownItem dropDownName="BUDAPEST CRUISES">
              <NavItem itemLink="/product/budapest-sightseeing-river-cruise" itemName="BUDAPEST SIGHTSEEING RIVER CRUISE" />
              <NavItem itemLink="/product/budapest-booze-pizza" itemName="BUDAPEST BOOZE CRUISE & PIZZA" />
            </DropDownItem>
            <DropDownItem dropDownName="DINNER CRUISES">
              <NavItem itemLink="/product/budapest-river-cruise-piano-battle-show" itemName="DINNER CRUISE & PIANO SHOW" />
              <NavItem itemLink="/product/hungarian-folklore-and-dinner-cruise" itemName="DINNER CRUISE & HUNGARIAN FOLKLORE" />
              <NavItem itemLink="/product/budapest-wine-tasting" itemName="BUDAPEST WINE TASTING" />
              <NavItem itemLink="/product/budapest-valentines-day-dinner-with-cruise" itemName="BUDAPEST VALENTINE'S DAY CRUISE" />
              <NavItem itemLink="/product/budapest-christmas-eve-cruise-dinner" itemName="BUDAPEST CHRISTMAS CRUISE" />
              <NavItem itemLink="/product/newyearsevebudapest-dinner-cruise" itemName="BUDAPEST NEW YEAR'S CRUISE" />
            </DropDownItem>
            <NavItem itemLink="/product/budapest-szentendre-river-cruise" itemName="HISTORICAL TOUR" />
            <NavItem itemLink="/event-venues-in-budapest" itemName="EVENT VENUES IN BUDAPEST" />
            <NavItem itemLink="/cruise-shop" itemName="SHOP" />
            <DropDownItem dropDownName="CONTACT">
              <NavItem itemLink="/privacy-policy" itemName="PRIVACY POLICY" />
            </DropDownItem>
          </Navbar>
        </div>
      </div>
    </header>
  );
}


export default Header;
