chrome.runtime.onInstalled.addListener ( () => {
    // setup content menu
    chrome.contentMenus.create({
        id: "generate-password",
        title: "Generate Password",

        context: ["action"]
    });
});

// handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === 'generate-password'){
        chrome.tabs.sendMessage(tab.id, {
            action: 'generate-password'
        });
    }
});