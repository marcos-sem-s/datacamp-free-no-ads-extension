function removeSpecificWafflesPortal() {
  const wafflesDiv = document.querySelector('#waffles-portal-root div[data-testid="modal-overlay"]');
  
  if (wafflesDiv) {
    wafflesDiv.closest('#waffles-portal-root').remove();
    console.log("Div 'waffles-portal-root' com filho 'data-testid=modal-overlay' removida.");
  } else {
    console.log("A div 'waffles-portal-root' com o filho 'modal-overlay' não foi encontrada.");
  }
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    removeSpecificWafflesPortal();
  });
});

observer.observe(document.body, { childList: true, subtree: true });

removeSpecificWafflesPortal();
