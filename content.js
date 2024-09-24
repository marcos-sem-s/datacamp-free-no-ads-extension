function removeWafflesPortalIfIframeExists(observer) {
  const targetIframe = document.querySelector('iframe.iframe-modal[src*="https://upsell-dialogs.datacamp.com/templates/paywall_sitewide"]');

  if (targetIframe) {
      console.log("Iframe encontrado. Tentando remover a div waffles-portal-root.");

      const wafflesDiv = document.querySelector('#waffles-portal-root');

      if (wafflesDiv) {
          wafflesDiv.closest('#waffles-portal-root').remove();
          console.log("Div 'waffles-portal-root' removida.");
      }
  } else {
    console.log("Iframe não encontrado. A div waffles-portal-root não foi removida.");
  }
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
      removeWafflesPortalIfIframeExists(observer);
  });
});

observer.observe(document.body, { childList: true, subtree: true });

removeWafflesPortalIfIframeExists(observer);
