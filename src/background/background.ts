const domain = "https://easyslotbooking.com";
async function fetchCaptchaData(siteKey:string, url: string) {
    const params = {
        siteKey: siteKey,
        url: url,
        page: "demo",
    };
    let dataString = JSON.stringify(params); //correctly stringified json

    const res = await fetch(`${domain}/api/v2/extension/chrome/captcha-demo`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: dataString
    });

    if (!res.ok) {
        throw new Error('Not found')
    }

    return await res.json()
}


function init() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
        switch (request.message) {
            case "captcha":
                fetchCaptchaData(request.siteKey, request.url).then((data) => { sendResponse(data)})
                break;
        }
        return true;
    })
}

init();
