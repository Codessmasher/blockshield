const press = (skipMyClass) => {
    const buttons = document.getElementsByClassName(skipMyClass);
    for (const button of buttons) {
        button.click();
    } 
}

setInterval(() => {
    press("ytp-ad-skip-button-text");
    press("ytp-ad-overlay-close-button"); 
}, 200);

//shorts remover 
press("yt-spec-button-shape-next--mono");

console.log("Created by Deepjyoti Das");