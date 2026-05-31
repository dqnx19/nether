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
            <img src="https://modern-web.nether.click/img/favicon.svg" alt="">
            Nether Modern Web
        </a>
        <a href="https://learn-html.nether.click">
            <img src="https://learn-html.nether.click/img/icons/favicon.png" alt="">
            Nether Learn HTML
        </a>
        <a href="https://learn-css.nether.click">
            <img src="https://learn-css.nether.click/favicon.png" alt="">
            Nether Learn CSS
        </a>
        <a href="https://os.nether.click">
            <img src="https://os.nether.click/img/logo-small.svg" alt="">
            NetherOS
        </a>
        <a href="https://srt.nether.click">
            <img src="https://srt.nether.click/img/icons/logo.svg" alt="">
            Sigma Republic Transport
        </a>
        <a href="https://srb.nether.click">
            <img src="https://srb.nether.click/img/icons/logo.svg" alt="">
            Sigma Republic Bank
        </a>
    </div>
`;