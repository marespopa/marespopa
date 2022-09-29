/**
 * Cookie Notice Vanilla JS
 *
 * @author Mares Popa
 * @version 0.0.1
 */
const CONFIG = {
  messageLocales: {
    ro: 'Acest site foloseste cookies. Navigand in continuare, va exprimati acordul asupra folosirii cookie-urilor.&nbsp;',
    en: 'This site uses cookies. By continuing to browse, you agree to the use of cookies. & Nbsp;&nbsp;'
  },
  position: 'bottom',
  learnMoreLinkHrefLocales: {
    ro: 'https://ec.europa.eu/info/cookies_ro',
    en: 'https://ec.europa.eu/info/cookies_en'
  },
  learnMoreLinkLocales: {
    ro: 'Află mai multe',
    en: 'Learn more'
  },
  acceptButtonLocales: {
    en: 'Ok',
    ro: 'Am înțeles'
  },
  expiresInDays: 30
};

let instance; // globally store the current instance

function intializeCookieNotice() {
  if (!instance) {
    window.createCookieNotice();
  } else {
    window.consentGranted();
  }
}

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
function createNotice(message, position) {
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
  button.className = 'button is-success';

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
  learnMoreLink.className = 'button is-link';

  return learnMoreLink;
}

/**
 * Create buttons container
 */
function createButtonsContainer(linkButton, acceptButton) {
  const buttonsCointainer = document.createElement('div');
  buttonsCointainer.className = 'buttons has-addons is-centered';

  buttonsCointainer.appendChild(linkButton);
  buttonsCointainer.appendChild(acceptButton);

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
function closeNotice(fadeTarget) {
  const target = fadeTarget;
  const animationDuration = 1; // seconds

  target.style.opacity = '0';
  setTimeout(() => {
    target.remove();
  }, animationDuration * 1000);
  toggleBodyOpacity();
}

/**
 * Constructor
 */
window.createCookieNotice = () => {
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

  acceptButton.addEventListener('click', (e) => {
    e.preventDefault();
    setDismissNoticeCookie(CONFIG.expiresInDays * 60 * 1000 * 60 * 24);
    window.consentGranted();
    closeNotice(notice);
  });

  // Append notice to the DOM
  const noticeDomElement = document.body.appendChild(notice);
  const buttonsCointainer = createButtonsContainer(learnMoreLink, acceptButton);

  noticeDomElement.appendChild(buttonsCointainer);

  toggleBodyOpacity();
};

/**
 * Initialize cookie notice on DOMContentLoaded
 */
if (document.readyState !== 'loading') {
  intializeCookieNotice();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    intializeCookieNotice();
  });
}
