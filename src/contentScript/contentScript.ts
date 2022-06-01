// TODO: content script
chrome.runtime.sendMessage(null, {message: "captcha", siteKey :'3ceb8624-1970-4e6b-91d5-70317b70b651',
    url:'https://2captcha.com/demo/hcaptcha'
}, (response) => {
    //Get the solved token of cpatcha
    console.log(response);
    //write your code here

})


