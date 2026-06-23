const showas = new URLSearchParams(location.search).get("showas");
const header = document.querySelector("header");

if (showas === "app") {
    header.style.display = "none";
}