document.querySelector(".app-drawer-wrapper").innerHTML = `
    <button onclick="open_app_drawer()" class="app-drawer-button">
    <div class="dots">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
    </div>
    </button>
    <div class="app-drawer">
        <button onclick="open_app_drawer()" class="app-drawer-button"></button>
        <a href="https://nether.click">
        <img src="https://nether.click/img/icons/favicon.svg">
            Nether
        </a>
        <a href="https://modern-web.nether.click">
            <img src="https://modern-web.nether.click/img/icons/favicon.svg" alt="">
            Nether Modern Web
        </a>
        <a href="https://js.nether.click">
            <img src="https://js.nether.click/img/icons/favicon.png">
            Nether.js
        </a>
        <a href="https://os.nether.click">
            <img src="https://os.nether.click/img/logo-small.svg" alt="">
            NetherOS
        </a>
        <a href="https://nr.nether.click">
            <img src="https://nr.nether.click/img/icons/favicon.svg">
            Nether Republic
        </a>
        <a href="https://nrt.nether.click">
            <img src="https://nrt.nether.click/img/icons/logo.svg" alt="">
            Nether Republic Transport
        </a>
        <a href="https://nrb.nether.click">
            <img src="https://nrb.nether.click/img/icons/logo.svg" alt="">
            Nether Republic Bank
        </a>
    </div>
`;