(function() {
  var API = chrome || browser;
  
  if (window.hasRun) {
    return
  }
  window.hasRun = true

  function copyURL() {
    const embedTag = document.getElementsByTagName('embed')[0]
    const url = embedTag.getAttribute('target')

    const input = document.createElement('input')
    document.body.appendChild(input);
    input.value = url
    input.focus()
    input.select()

    try {
      var successful = document.execCommand('copy')
    } catch (err) {
      console.error('Oops, unable to copy')
    }
  }

  API.runtime.onMessage.addListener((message) => {
    if (message.command === 'copy') {
      copyURL()
    }
  })


})()
