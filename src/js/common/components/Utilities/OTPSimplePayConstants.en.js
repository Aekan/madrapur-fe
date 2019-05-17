// General
export const TEST = 'test';
export const TEST_UPPER = 'Test';
export const DEVELOPER_GUIDE = 'Developer and testing guide for online payment solutions';
export const MORE = 'More';
export const BACK = 'Back';

export const CALL_TO_START_TRANSACTION = 'By clicking on button below you can start test payment transaction immediately';
export const METHOD_CCVISAMC_DESC = 'During the transaction you will be redirected to SimplePay payment page. On this page you can fill your card data and then you return here automatically.';
export const METHOD_WIRE_DESC = 'Due to the payment process you will be redirected to SimplePay Payment Page where You can get an information in order to make a transfer.';

// Redirect page
export const TRANSACTION_STARTED = 'Transaction started';
export const TRANSACTION_ABORTED = 'Transaction was aborted in purpose of debug!';
export const PLEASE_WAIT = 'Please wait!';
export const WILL_BE_REDIRECTED = 'You will be redirect shortly.';
export const ABORT_DESC_1 = 'DEBUG_LIVEUPDATE_PAGE variable in sdk/config.php controlls the debug process.';
export const ABORT_DESC_2 = 'In case of general transaction switch it to false!';
export const NO_REDIRECT_NOTICE = 'If you do not redirect more than 30 sec, please push the button below.';
export const DO_REDIRECT_NOTICE = 'By clicking on the button bellow you can continue the transaction!';
export const THANK_YOU = 'Thank you';

// buttons title
export const NEW_TEST_PAYMENT_BTN = 'Start new test payment';
export const TRX_LOG_BTN = 'Transaction log';
export const PAYMETN_BTN = 'payment';
export const HUF_PAYMETN_BTN = 'HUF payment';
export const EUR_PAYMETN_BTN = 'EUR payment';
export const USD_PAYMETN_BTN = 'USD payment';
export const MISSING_PARAMS = '<b>Missing merchant data</b><br>Please set up a MERCHANT and a SECRET_KEY data in sdk/config.php. You can start transaction with them only. You have this data if you have a contract with <a href="http://simplepartner.hu/online_fizetesi_szolgaltatas.html" target="_blank">OTP Mobil Kft</a><br>';
export const MISSING_PARAMS_WIRE = '<b>Missing merchant data</b><br>Please set up HUF MERCHANT and a SECRET_KEY data in sdk/config.php. You can start transaction with them only. You have this data if you have a contract with <a href="http://simplepartner.hu/online_fizetesi_szolgaltatas.html" target="_blank">OTP Mobil Kft</a><br>';

export const IRN_TEXT = '<p>IRN (Instant Refund Notification) allows for merchants to send refund from their own admin system.</p><p>No need any SimplePay settings.</p>';
export const IRN_TEXT2 = 'Start IRN to this (<b> %s </b>) transaction!';
export const IDN_TEXT = '<p>IDN (Instant Delivery Notification) allows for merchants to send confirm from their own admin system. This funcion is only for two step payment.</p><p>SimplePay has to turning on this feature!</p>';
export const IDN_TEXT2 = 'Start IDN to this (<b> %s </b>) transaction!';
export const IOS_TEXT = '<p>IOS (Instant Order Status) allows for merchants to send order status query from their own admin system.</p><p>No need any SimplePay settings!</p>';
export const IOS_TEXT2 = 'Start IOS to this (<b> %s </b>) transaction!';

export const IRN_TEXT3 = 'IRN';
export const IDN_TEXT3 = 'IDN';
export const IOS_TEXT3 = 'IOS';
export const RUN_TEXT = 'start';
export const NO_ORDERREF_TEXT = 'There is no order ref in REQUEST.';

export const LOGTEXT1 = 'Order (order_ref)';
export const LOGTEXT2 = 'Type';
export const LOGTEXT3 = 'Date';
export const LOGTEXT4 = 'Parameter';
export const LOGTEXT5 = 'Value';

export const IRNTEXTTPL = 'You can check the result of the IRN (<b>%s</b>) on the admin system .';

// LiveUpdate
export const LIVEUPDATE_TEST_TRANSACTION = 'LiveUpdate test transaction';
export const BACKREF_REDIRECT_PAGE = 'notification page';
export const TIMEOUT_PAGE = 'Timeout page';
export const SET_UP_MERCHANT = 'Please define merchant id (MERCHANT) in sdk/config.php.';
export const SET_UP_SECRET_KEY = 'Please define secret key (SECRET_KEY) in sdk/config.php.';
export const METHOD_CCVISAMC = 'Credit card';
export const METHOD_WIRE = 'Wire transfer';
export const METHOD_ON_PAYMENT_PAGE = 'Select on payment page';
export const START_CCVISAMC = 'Start credit card payment';
export const START_SIMPLE_MOBILE = 'Start SimplePay mobil payment';
export const START_WIRE = 'Start wire payment';
export const PAYMENT_METHOD = 'Payment method';
export const SETTINGS = 'Settings';
export const PAYMENT_BUTTON = 'Start SimplePay online payment';
export const PAYMENT_PAGE_LANGUAGE = 'Language of the payment page';
export const PAYMENT_CURRENCY = 'Currency';

// BackRef
export const SUCCESSFUL_CARD_AUTHORIZATION = 'Successful card authorization.';
export const SUCCESSFUL_WIRE = 'Successful order.<br/>After successful wire transfer will be fulfilled your order.';
export const WAITING_FOR_IPN = 'Waiting for confirmation!';
export const CONFIRMED_IPN = 'IPN was confirmed, payment is successful!';
export const CONFIRMED_WIRE = 'Wire transfer has been received';
export const UNSUCCESSFUL_TRANSACTION = 'Unsuccessful transaction.';
export const UNSUCCESSFUL_NOTICE = 'Please check the data entered during the transaction.<br/>If you submitted every data correctly, please contact your account holder financial institute.';
export const END_OF_TRANSACTION = 'End of transaction.';
export const BACKREF_DATE = 'Date';
export const DATE = 'Date';
export const ORDER_ID = 'Order ID';
export const PAYREFNO = 'SimplePay reference number';
export const STATUS = 'Status';
export const PAYMENT_TEST = 'Payment test';
export const HASHTEXT = 'HASH';
export const RESPONSECODE = 'Response code';
export const RESPONSEMSG = 'Response message';

// Timeout
export const ABORTED_TRANSACTION = 'Cancel on payment page';
export const TIMEOUT_TRANSACTION = 'Timeout';
export const TIMEOUT_PAGE_TITLE = 'Timeout or cancel';
export const TIMEOUT_NOTICE = 'You canceled the payment or you have ran out of time!';

// IRN
export const IRN_PAGE_TITLE = 'Instant Refund Notification';

// IDN
export const IDN_PAGE_TITLE = 'Instant Delivery Notification';
