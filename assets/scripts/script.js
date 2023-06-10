"use strict";
const shareButtons = document.querySelectorAll(".share-button");
const articlePreviewComponent = document.querySelector(".article-preview-component");
const shareFooter = document.querySelector(".share-footer");
const defaultFooter = document.querySelector(".default-footer");
for (const shareButton of shareButtons) {
    shareButton.addEventListener("click", () => {
        shareFooter === null || shareFooter === void 0 ? void 0 : shareFooter.classList.toggle("share-clicked");
        defaultFooter === null || defaultFooter === void 0 ? void 0 : defaultFooter.classList.toggle("share-clicked");
        articlePreviewComponent === null || articlePreviewComponent === void 0 ? void 0 : articlePreviewComponent.classList.toggle("share-clicked");
    });
}
