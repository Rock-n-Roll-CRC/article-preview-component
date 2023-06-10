const shareButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".share-button");
const articlePreviewComponent: HTMLElement | null = document.querySelector(
  ".article-preview-component"
);
const shareFooter: HTMLDivElement | null =
  document.querySelector(".share-footer");
const defaultFooter: HTMLDivElement | null =
  document.querySelector(".default-footer");

for (const shareButton of shareButtons) {
  shareButton.addEventListener("click", () => {
    shareFooter?.classList.toggle("share-clicked");
    defaultFooter?.classList.toggle("share-clicked");
    articlePreviewComponent?.classList.toggle("share-clicked");
  });
}
