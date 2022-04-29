/**
 * Cookie Notice Vanilla JS
 *
 * @author Mares Popa
 * @version 0.0.1
 */
import { loadGoogleAnalytics, GA_UID } from './analytics';
import { CustomWindow } from './types';

type localesConfig = {
  ro: string;
  en: string;
};

declare let window: CustomWindow;

interface IConfig {
  messageLocales: localesConfig;
  position: 'bottom' | 'top';
  learnMoreLinkHrefLocales: localesConfig;
  learnMoreLinkLocales: localesConfig;
  acceptButtonLocales: localesConfig;
  rejectButtonLocales: localesConfig;
  expiresInDays: number;
}

const CONFIG: IConfig = {
  messageLocales: {
    ro: `Acest website stochează și/sau accesăm informații pe un dispozitiv, cum ar fi identificatori unici
        în cookie-uri pentru procesarea datelor cu caracter personal.
        Puteți accepta sau gestiona preferințele dvs. făcând clic mai jos, inclusiv dreptul dvs. de a obiecta în cazul în care este utilizat interesul legitim
        sau în orice moment pe pagina cu politica de confidențialitate. Folosim Tehnologii de tip Cookie ce permit stocarea de informatii si/sau obtinerea accesului
        la informatia stocata in dispozitivul dvs. pentru a permite website-ului sa functioneze, pentru a personaliza continutul si anunturile publicitare
        afisate in functie de interesele si/sau profilul dvs., pentru a analiza traficul pe website.&nbsp;`,
    en: `This website stores and / or accesses information on a device, such as unique identifiers in cookies for the processing of personal data.
        You can accept or manage your preferences by clicking below, including your right to object if legitimate interest is used
        or at any time on the privacy policy page. We use Cookie Technologies that allow the storage of information and / or obtaining access
        the information stored on your device to enable the website to function, to personalize content and advertisements
        displayed according to your interests and / or profile, in order to analyze the traffic on the website.&nbsp;`
  },
  position: 'bottom',
  learnMoreLinkHrefLocales: {
    ro: 'https://ec.europa.eu/info/cookies_ro',
    en: 'https://ec.europa.eu/info/cookies_en'
  },
  learnMoreLinkLocales: {
    ro: 'Mai multe detalii',
    en: 'Learn more'
  },
  acceptButtonLocales: {
    en: 'Ok',
    ro: 'De acord'
  },
  rejectButtonLocales: {
    en: 'I do not agree',
    ro: 'Nu sunt de acord'
  },
  expiresInDays: 30
};

let instance; // globally store the current instance

function getStringForCurrentLocale(locales) {
  const locale = document.documentElement.lang || navigator.language;

  return locales[locale] ? locales[locale] : locales.ro;
}

/**
 * Test if cookies are enabled
 */
function doesBrowserSupportCoookie() {
  document.cookie = 'testCookie=1';
  return document.cookie.indexOf('testCookie') !== -1;
}

/**
 * Test if notice cookie is there
 */
function hasNoticeCookie() {
  return document.cookie.indexOf('cookie_notice') !== -1;
}

/**
 * Create notice
 */
function createNotice(message: string, position: string) {
  const notice = document.createElement('div');
  const noticeStyle = notice.style;

  notice.innerHTML = `${message}`;
  notice.setAttribute('id', 'cookieNotice');
  notice.className = 'cookie-notice';

  if (position === 'top') {
    noticeStyle.top = '0';
  } else {
    noticeStyle.bottom = '0';
  }

  return notice;
}

/**
 * Create confirmation button
 */
function createConfirmationButton(text) {
  const button = document.createElement('button');

  button.title = 'Confirm Cookie';
  button.innerHTML = text;
  button.className = 'button is-primary';

  return button;
}

/**
 * Create learn more button
 */
function createLearnMoreLink(learnMoreLinkText, learnMoreLinkHref) {
  const learnMoreLink = document.createElement('a');

  learnMoreLink.href = learnMoreLinkHref;
  learnMoreLink.textContent = learnMoreLinkText;
  learnMoreLink.target = '_blank';
  learnMoreLink.className = 'cookie-notice__learn-more';

  return learnMoreLink;
}

/**
 * Create buttons container
 */
function createButtonsContainer(acceptButton: HTMLButtonElement, rejectButton: HTMLButtonElement) {
  const buttonsCointainer = document.createElement('div');
  buttonsCointainer.className = 'buttons has-addons is-centered';

  buttonsCointainer.appendChild(acceptButton);
  buttonsCointainer.appendChild(rejectButton);

  return buttonsCointainer;
}

/**
 * Set dismiss notice cookie
 */
function setDismissNoticeCookie(expireIn) {
  const now = new Date();
  const cookieExpire = new Date();

  cookieExpire.setTime(now.getTime() + expireIn);
  document.cookie = `cookie_notice=1; expires=${cookieExpire.toUTCString()}; path=/;`;
}

/**
 * Toggle body opacity class
 */
function toggleBodyOpacity() {
  document.body.classList.toggle('fade-content');
}

/**
 * Fade the element
 */
function closeNotice(fadeTarget: HTMLDivElement) {
  fadeTarget.style.opacity = '0';
  toggleBodyOpacity();
}

/**
 * Constructor
 */
(window as CustomWindow).createCookieNotice = () => {
  if (instance !== undefined) {
    return;
  }

  instance = this;

  if (!doesBrowserSupportCoookie() || hasNoticeCookie()) {
    return;
  }

  const noticeText = getStringForCurrentLocale(CONFIG.messageLocales);
  const notice = createNotice(noticeText, CONFIG.position);

  const learnMoreLinkText = getStringForCurrentLocale(CONFIG.learnMoreLinkLocales);
  const learnMoreLink = createLearnMoreLink(learnMoreLinkText, getStringForCurrentLocale(CONFIG.learnMoreLinkHrefLocales));

  const acceptButtonText = getStringForCurrentLocale(CONFIG.acceptButtonLocales);
  const acceptButton = createConfirmationButton(acceptButtonText);

  const rejectButtonText = getStringForCurrentLocale(CONFIG.rejectButtonLocales);
  const rejectButton = createConfirmationButton(rejectButtonText);

  acceptButton.addEventListener('click', (e) => {
    e.preventDefault();
    setDismissNoticeCookie(CONFIG.expiresInDays * 60 * 1000 * 60 * 24);
    consentGranted();
    closeNotice(notice);
  });

  rejectButton.addEventListener('click', (e) => {
    e.preventDefault();
    closeNotice(notice);
  });

  // Append notice to the DOM
  const noticeDomElement = document.body.appendChild(notice);
  noticeDomElement.appendChild(learnMoreLink);

  const buttonsCointainer = createButtonsContainer(acceptButton, rejectButton);

  noticeDomElement.appendChild(buttonsCointainer);
  toggleBodyOpacity();
};

/**
 * Initialize cookie notice on DOMContentLoaded
 */
if (document.readyState !== 'loading') {
  intializeCookieNotice();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    intializeCookieNotice();
  });
}

function intializeCookieNotice() {
  if (!instance) {
    (window as CustomWindow).createCookieNotice();
  }
}

loadGoogleAnalytics(); //Create the script

window.dataLayer = window.dataLayer || [];
gtag = function () {
  window.dataLayer.push(arguments);
};

gtag('js', new Date());
gtag('config', GA_UID);

function consentGranted() {
  gtag('consent', 'update', {
    ad_storage: 'granted'
  });
}
