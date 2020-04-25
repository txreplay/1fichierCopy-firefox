function listener() {
  document.addEventListener("click", (e) => {
  	function copy(tabs) {
  	  browser.tabs.sendMessage(tabs[0].id, {
  	    command: "copy"
  	  })
  	}

    browser.tabs.query({active: true, currentWindow: true})
	    .then(copy)
      .catch(reportError);
  });
}

function reportError(error) {
  console.error(error)
}

browser.tabs.executeScript({file: "/content_scripts/index.js"})
.then(listener)
.catch(reportError);
