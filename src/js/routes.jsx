/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import LazyLoading from 'common/components/LazyLoading';
import styles from '../style/index.css';

const Header = LazyLoading(() => import('common/components/Header/Header'));
const Footer = LazyLoading(() => import('common/components/Footer/Footer'));

const HeaderWithRouter = withRouter((props) => <Header {...props} />);
const shopRender = withRouter((props) => <ShopPage {...props} />);

const ShopPage = (() => { return LazyLoading(() => import('views/shop')) })();

const PrivacyPolicy = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="znColumnElement-innerWrapper-eluid002653d8 znColumnElement-innerWrapper znColumnElement-innerWrapper--valign-top znColumnElement-innerWrapper--halign-left ">

          <div className="znColumnElement-innerContent">
            {' '}
            <div className="zn_text_box eluida6d37457  zn_text_box-light element-scheme--light">
              <h3 className="zn_text_box-title zn_text_box-title--style1 text-custom">Privacy Policy</h3>
              <p>
1. Purpose of the Privacy Policy
                <br />
2. Data of the Data controller
                <br />
3. Data of the Data controller
                <br />
4. What are you rights?
                <br />
5. Measures and notification
                <br />
6. Possible recipients
                <br />
7. Cookies
                <br />
8. Other provisions

              </p>
              <p>1. Purpose of the Privacy Policy</p>
              <p>The goal of our Privacy Policy is to provide all necessary information about processing your personal data in a concise, transparent, intelligible and easily accessible form, using clear and plain language, and assist the Data subjects in exercising their rights under Section 4.</p>
              <p>The legal basis of our duty to communicate information is Article 12 of Regulation 2016/679 of the European Parliament and Council (hereinafter referred to as: GDPR) and Section 20 of Act CXII of 2011 on the right to self-determination concerning personal information and the freedom of information (hereinafter referred to as: ‘Information Act’).</p>
              <p>
2. Data of the Data controller
                <br />
Name: Silverline Cruises Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság
                <br />
Website: https://silver-line.hu/
                <br />
Registry number: 01-09-973821
                <br />
Registered seat: 1138 Budapest, Marina part hrsz 25904/1.
                <br />
Tax number: 23692800-2-41
                <br />
E-mail: booking@silver-line.hu
                <br />
Telephone number +36-20-3325364

              </p>
              <p>
3. Data processing activities
                <br />
3.1. Processing concerning offers

              </p>
              <p>You can give offers for the participation on our programs. The details of such processing are described hereunder.</p>
              <p>3.1.1. Processed personal data and purpose of processing</p>
              <p>
personal data purpose of processing
                <br />
name identification of the tenderer or its representative
                <br />
phone number connecting the tenderer or its representative and giving information about the offer
                <br />
e-mail address connecting the tenderer or its representative and giving information about the offer
                <br />
3.1.2. Legal basis of processing

              </p>
              <p>Processing is necessary to take steps at the request of the data tenderer prior to entering into the contract (section 6 paragraph 1 point b of GDPR).</p>
              <p>If the tenderer’s representative provides his or her personal data for these purposes, the legal basis of processing personal data – with regard to the relevant authorial practice – is the legitimate interest of us and the tenderer company (section 6 paragraph 1 point f of GDPR). It is each party’s legitimate interest to maintain an effective business communication and to finalize an appropriate offer. In our view – since it is the part of the representative’s scope of duty – the processing of the mentioned personal data doesn’t restrict disproportionately the privacy and freedom of self determination.</p>
              <p>3.1.3. Duration of the processing</p>
              <p>1 year after the collection of personal data.</p>
              <p>3.1.4. Mode of processing</p>
              <p>Personal data are collected automatically, in electronic form.</p>
              <p>3.1.5. Provision of processing</p>
              <p>Since we cannot take your offer without knowing any information about you, the processing is a requirement necessary to enter into a contract.</p>
              <p>3.2. Processing concerning coupons</p>
              <p>In order to give preferences to our clients, it is possible to require a beneficial coupon on our website. The details of such processing are described hereunder.</p>
              <p>3.2.1. Processed personal data and purpose of processing</p>
              <p>
personal data purpose of processing
                <br />
name identification of the Data subject
                <br />
e-mail address identification of the Data subject
                <br />
3.2.2. The legal basis of a processing

              </p>
              <p>Processing is necessary for compliance with a legal obligation; with regard to section 6 paragraph 1 point f of GDPR, section 5 article 1 point b of Information Act and section 13/A. § paragraph 1 and 3 of Act CVIII of 2001.</p>
              <p>3.2.3. Duration of the processing</p>
              <p>1 year after the collection of personal data.</p>
              <p>3.2.4. Mode of processing</p>
              <p>Personal data are collected automatically, in electronic form.</p>
              <p>3.3. Processing concerning connection</p>
              <p>
It is possible to connect us through the connection form located on the website. The details of such processing are described hereunder.
                <br />
3.3.1. Processed personal data and purpose of processing

              </p>
              <p>
personal data purpose of processing
                <br />
name identification of the Data subject
                <br />
phone number connecting the Data subject
                <br />
e-mail address connecting the Data subject
                <br />
3.3.2. The legal basis of a processing

              </p>
              <p>Processing is necessary for compliance with a legal obligation; with regard to section 6 paragraph 1 point f of GDPR, section 5 article 1 point b of Information Act and section 13/A. § paragraph 1 and 3 of Act CVIII of 2001.</p>
              <p>3.3.3. Duration of the processing</p>
              <p>1 year after the collection of personal data.</p>
              <p>3.3.4. Mode of processing</p>
              <p>Personal data are collected automatically, in electronic form.</p>
              <p>3.4. Processing concerning booking</p>
              <p>You are free to book any of our events shown in our website. The details of such processing are described hereunder.</p>
              <p>3.4.1. Processed personal data and purpose of processing</p>
              <p>
personal data purpose of processing
                <br />
name identification of the purchaser or its representative
                <br />
phone number connecting the purchaser or its representative and giving information about the event
                <br />
e-mail address connecting the purchaser or its representative and giving information about the event
                <br />
address notification of the purchaser by post
                <br />
3.4.2. The legal basis of a processing

              </p>
              <p>
If the purchaser is the Data subject, processing is necessary to take steps at the request of the data tenderer prior to entering into the contract (section 6 paragraph 1 point b of GDPR).
                <br />
If the purchaser’s representative provides his or her personal data for these purposes, the legal basis of processing personal data – with regard to the relevant authorial practice – is the legitimate interest of us and the purchaser company (section 6 paragraph 1 point f of GDPR). It is each party’s legitimate interest to maintain an effective business communication and to finalize the purchase. In our view – since it is the part of the representative’s scope of duty – the processing of the mentioned personal data doesn’t restrict disproportionately the privacy and freedom of self determination.

              </p>
              <p>3.4.3. Duration of the processing</p>
              <p>1 year after the collection of personal data or 2 months after the event.</p>
              <p>3.4.4. Mode of processing</p>
              <p>Personal data are collected automatically, in electronic form.</p>
              <p>3.4.5. Provision of processing</p>
              <p>Since we cannot perform the booking without knowing any information about you, the processing is a requirement necessary to enter into a contract.</p>
              <p>3.5. Processing concerning invoicing</p>
              <p>After the performing of the bookings we – with regard to Act C of 2000 on accounting – make out a bill. The details of such processing are described hereunder.</p>
              <p>3.5.1. Processed personal data and purpose of processing</p>
              <p>
personal data purpose of processing
                <br />
name Processed personal data and purpose of processing
                <br />
address Processed personal data and purpose of processing
                <br />
3.5.2. The legal basis of a processing

              </p>
              <p>Processing is necessary for compliance with a legal obligation; with regard to section 6 paragraph 1 point f of GDPR, section 5 article 1 point b of Information Act and section 166 paragraph 1 to 3 of Act C of 2000.</p>
              <p>3.5.3. Duration of the processing</p>
              <p>8 years after accounting.</p>
              <p>3.5.4. Mode of processing</p>
              <p>Personal data are collected manually, in electronic form.</p>
              <p>3.5.5. Provision of processing</p>
              <p>Since we cannot perform our accounting obligations without knowing any information about you, the processing is a statutory requirement.</p>
              <p>4. What are your rights?</p>
              <p>
4.1. Right to access:
                <br />
You have the right to obtain confirmation as to whether or not personal data concerning you are being processed, and, where that is the case, access to the personal data and the information featured in point 3.

              </p>
              <p>
4.2. Right to rectification
                <br />
You have the right to obtain from us without undue delay the rectification of inaccurate personal data concerning you. Taking into account the purposes of the processing, you have the right to have incomplete personal data completed, including by means of providing a supplementary statement.

              </p>
              <p>
4.3. Right to erasure:
                <br />
You have the right to obtain from us the erasure of personal data concerning you without undue delay and we shall have the obligation to erase personal data without undue delay if it is mandatory according to Article 17 of GDPR.

              </p>
              <p>
4.4. Right to be forgotten:
                <br />
If we made the personal data public and are obliged to erase your personal data, we inform controllers which are processing the personal data that you have requested the erasure by such controllers of any links to, or copy or replication of, those personal data

              </p>
              <p>
4.5. Right to restriction of processing:
                <br />
You have the right to obtain from us restriction of processing if is obligatory according to Article 18 of GDPR.

              </p>
              <p>
4.6. Right to data portability:
                <br />
You have the right to receive the personal data concerning you, in a structured, commonly used and machine-readable format and have the right to transmit those data to another controller without hindrance from us if is possible according to Article 20 of GDPR.

              </p>
              <p>
4.7. Right to complain:
                <br />
You have the right to appeal to the Hungarian courts and to make a complaint to the Hungarian Supervisory Authority (Address: 1125 Budapest, Szilágyi Erzsébet fasor 22/c.; https://www.naih.hu/panaszuegyintezes-rendje.html).

              </p>
              <p>5. Measures and notification</p>
              <p>
5.1. Informing Data subjects
                <br />
We communicate any rectification or erasure of personal data or restriction of processing carried out in accordance with Article 16, Article 17(1) and Article 18 of GDPR to each recipient to whom the personal data have been disclosed, unless this proves impossible or involves a disproportionate effort. We also inform the data subject about those recipients if you request it.

              </p>
              <p>
5.2. Mode and deadline of notification
                <br />
We provide information on action taken on a request under Articles 15 to 22 of GDPR to you without undue delay and in any event within one month of receipt of the request. That period may be extended by two further months where necessary, taking into account the complexity and number of the requests. We inform you of any such extension within one month of receipt of the request, together with the reasons for the delay. Where you make the request by electronic form means, we provided the information by electronic means where possible, unless you request it otherwise.
                <br />
If we do not take action on your request, we inform you without delay and at the latest within one month of receipt of the request of the reasons for not taking action and on the possibility of lodging a complaint with a supervisory authority and seeking a judicial remedy (see point 4.7.).

              </p>
              <p>
5.3. Monitoring
                <br />
If we have reasonable doubts concerning the identity of the natural person making the request, we may request the provision of additional information necessary to confirm the identity of the data subject.

              </p>
              <p>
5.4. Costs of measures and notifications
                <br />
We provide you information and take the necessary measures free of charge.
                <br />
If your requests are manifestly unfounded or excessive, in particular because of their repetitive character, we may charge a reasonable fee taking into account the administrative costs of providing the information or communication or taking the action requested or we refuse to act on your request.

              </p>
              <p>6. Possible recipients</p>
              <p>6.1. During the operation of our website</p>
              <p>Our website’s hosting provider (data processor) can have access to the personal data you provide while using the website. The data processor’s data are the following:</p>
              <p>
Name: Magyar Hosting Kft.
                <br />
Connection: https://www.tarhely.com/kapcsolat

              </p>
              <p>
6.2. Social media
                <br />
Our website has several social media profile so that if you „like” us on Facebook or „follow” us on Twitter, we may learn all the personal data which is public on your profile.

              </p>
              <p>
6.3. Accounting
                <br />
The Hungarian national tax authority is entitled to learn all information concerning accounting.
                <br />
Name: Nemzeti Adó- és Vámhivatal
                <br />
Connection: https://www.nav.gov.hu/nav/kapcsolat

              </p>
              <p>7. Cookies</p>
              <p>
7.1. Cookies in general
                <br />
A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.
                <br />
Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.
                <br />
Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
                <br />
Cookies can be used by web servers to identify and track users as they navigate different pages on a website and identify users returning to a website.

              </p>
              <p>
7.2. Our cookies
                <br />
The names of the cookies that we use on our website, and the purposes for which they are used, are set out below:
                <br />
• Google Analytics
                <br />
• Google Tag Manager
                <br />
• Google Adwords Re-marketing Tag
                <br />
• Facebook Pixel Code
                <br />
• Smartlook Code

              </p>
              <p>
7.3. Analytics cookies
                <br />
We use Google Analytics to analyse the use of our website.
                <br />
Our analytics service provider generates statistical and other information about website use by means of cookies.
                <br />
The information generated relating to our website is used to create reports about the use of our website.
                <br />
Our analytics service provider's privacy policy is available at: http://www.google.com/policies/privacy/

              </p>
              <p>
7.4. Blocking cookies
                <br />
Most browsers allow you to refuse to accept cookies; for example:
                <br />
• in Internet Explorer (version 11) you can block cookies using the cookie handling override settings available by clicking "Tools", "Internet Options", "Privacy" and then "Advanced";
                <br />
• in Firefox (version 39) you can block all cookies by clicking "Tools", "Options", "Privacy", selecting "Use custom settings for history" from the drop-down menu, and unticking "Accept cookies from sites"; and
                <br />
• in Chrome (version 44), you can block all cookies by accessing the "Customise and control" menu, and clicking "Settings", "Show advanced settings" and "Content settings", and then selecting "Block sites from setting any data" under the "Cookies" heading.
                <br />
Blocking all cookies will have a negative impact upon the usability of many websites.
                <br />
If you block cookies, you will not be able to use all the features on our website.

              </p>
              <p>8. Other provisions</p>
              <p>
8.1. Processing for a different purpose
                <br />
If we intend to further process the personal data for a purpose other than that for which the personal data were collected, we provide you prior to that further processing with information on that other purpose and with any relevant further information.

              </p>
              <p>
8.2. Data protection
                <br />
We secure your personal information from unauthorized access, use or disclosure. We secure the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. When personal information (such as a credit card number) is transmitted to other Web sites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) or HTTPS protocol.
                <br />
Our SSL servicer’s data are the following:
                <br />
Name: Cloudflare, Ltd.
                <br />
Website: https://www.cloudflare.com/

              </p>
              <p>
8.3. Record of processing
                <br />
To comply with section 30 of GDPR, we maintain a record of processing activities under our responsibility.

              </p>
              <p>
8.4. Data Breaches
                <br />
Data breach is a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored or otherwise processed. In case of a data breach, we act according to section 33 and 34 of GDPR.

              </p>
              <p>
8.5. Changes to our Privacy Policy
                <br />
We will occasionally update this Privacy Policy to reflect feedback. We encourage you to periodically review this Policy to be informed of how we are protecting your information.

              </p>
              <p>Effective: 07/08/2018</p>
              <p>
Silverline Cruises Kft.
                <br />
Controller

              </p>
            </div>
            {' '}

          </div>
        </div>
      </div>
    </div>
  </div>
);

module.exports = (
  <div className={styles.container}>
    <HeaderWithRouter />
    <div id="index" className={styles.content}>
      <Switch>
        <Route exact path="/" render={shopRender} />
        <Route exact path="/cruise-shop" component={shopRender} />
        <Route path="/product/:productId" component={shopRender} />
        <Route exact path="/cart" component={shopRender} />
        <Route path="/checkout/thankyou/:orderRef/:status" component={shopRender} />
        <Route exact path="/checkout" component={shopRender} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="*" component={shopRender} />
      </Switch>
    </div>
    <Footer />
  </div>
);
