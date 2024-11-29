// Google Analytics GA4 Tag
(function() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4B1BBS8EWC';
  document.head.appendChild(script);

  script.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-4B1BBS8EWC');
  };
})();
