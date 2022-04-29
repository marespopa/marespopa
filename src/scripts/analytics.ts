export const GA_UID = 'G-WY0KQ8W98H';
export function loadGoogleAnalytics() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_UID}`;

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
}
