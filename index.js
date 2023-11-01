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

// Remove the "ad-created" class (if it exists)
const adCreatedElement1 = document.querySelector(".ad-created");
if (adCreatedElement1) {
    adCreatedElement1.classList.remove("ad-created");
}

// Remove the "video-ads , ytp-ad-module" class (if it exists)
const adCreatedElement2 = document.querySelector(".video-ads");
if (adCreatedElement2) {
    adCreatedElement2.classList.remove("video-ads");
}

const adCreatedElement3 = document.querySelector(".ytp-ad-module");
if (adCreatedElement3) {
    adCreatedElement3.classList.remove("ytp-ad-module");
}

console.log("Created by Deepjyoti Das");
