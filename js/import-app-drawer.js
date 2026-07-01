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
        <a href="https://ps.nether.click">
            <img src="https://ps.nether.click/img/icons/favicon.png">
            Nether.ps
        </a>
        <a href="https://fonts.nether.click">
            <img src="https://fonts.nether.click/img/icons/favicon.svg">
            Nether Fonts
        </a>
        <a href="https://terminal.nether.click">
            <img src="https://terminal.nether.click/source-code/img/logo.svg" alt="">
            Nether Terminal
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