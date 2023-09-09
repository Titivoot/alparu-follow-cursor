const slider = document.querySelector(".slider");
const checkbox = document.querySelector('input[type="checkbox"]');

function setSliderBackground(checked) {
  slider.style.backgroundColor = checked ? "#000" : "#B0B0B0";
}

function toggleCheckbox() {
  const checked = checkbox.checked;
  setSliderBackground(checked);
  chrome.storage.local.set({ checked });
  chrome.tabs.reload();
}

function loadToggleStateFromStorage() {
  chrome.storage.local.get("checked", ({ checked }) => {
    checkbox.checked = checked;
    setSliderBackground(checked);
  });
}

checkbox.addEventListener("change", toggleCheckbox);
loadToggleStateFromStorage();
