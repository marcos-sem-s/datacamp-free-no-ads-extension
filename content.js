function removeTag() {
    const tag = document.querySelector("waffles-portal-root");
  
    if (tag) {
      tag.remove();
      console.log("Tag removida.");
    } else {
      console.log("Tag não encontrada.");
    }
}

window.addEventListener('load', removeTag);
