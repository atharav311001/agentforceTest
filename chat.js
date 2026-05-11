(function () {

  // Read page context set by each HTML page
  var ctx = window.pageContext || {};
  var currentPage = window.location.href;
  var pageTitle   = document.title;
  var pageContent = JSON.stringify(ctx.data || {});

  // Listen for Agentforce widget ready event
  window.addEventListener('onEmbeddedMessagingReady', function () {
    console.log('[Agentforce] Widget ready');
    console.log('[Agentforce] Passing context:', currentPage, pageTitle, pageContent);

    try {
      embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
        currentPage : currentPage,
        pageTitle   : pageTitle,
        pageContent : pageContent
      });
      console.log('[Agentforce] Context passed successfully');
    } catch (e) {
      console.error('[Agentforce] Error passing context:', e);
    }
  });

})();
