async function setAppDrawerContent() {
    const wrapper = document.querySelector(".app-drawer-wrapper");
    

    const db = await fetch("https://nether.click/json/apps.json").then(r => r.json());

    wrapper.innerHTML = `
        <button onclick="open_app_drawer()" class="app-drawer-button">
            <div class="dots">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
            </div>
        </button>
        <div class="app-drawer"></div>
    `

    const app_drawer = document.querySelector(".app-drawer");

    db.forEach(element => {
        const app = document.createElement("a");
        app.href = "https://" + element.link;
        app_drawer.appendChild(app);

        const img = document.createElement("img");
        img.src = "https://" + element.link + element.icon;
        app.appendChild(img);

        const text = document.createElement("span");
        text.innerText = element.name;
        app.appendChild(text);
    });
}

setAppDrawerContent();