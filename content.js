function removeWafflesPortal() {
    const wafflesDiv = document.getElementById("waffles-portal-root");
  
    if (wafflesDiv) {
      wafflesDiv.remove();
      console.log("Div 'waffles-portal-root' removida.");
    }
}
  
const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      removeWafflesPortal();
    });
});
  
observer.observe(document.body, { childList: true, subtree: true });
  
removeWafflesPortal();
  