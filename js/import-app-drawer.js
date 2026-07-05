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
        <div class="group">
            <a href="https://web-ui.nether.click">
                <img src="https://web-ui.nether.click/img/icons/favicon.svg" alt="">
                Nether Web UI
            </a>
            <a href="https://js.nether.click">
                <img src="https://js.nether.click/img/icons/favicon.png">
                Nether.js
            </a>
        </div>
        <div class="group">
            <a href="https://calculator.nether.click">
                <img src="https://calculator.nether.click/source-code/img/logo.svg" alt="">
                Nether Calculator
            </a>
            <a href="https://clocks.nether.click">
                <img src="https://clocks.nether.click/source-code/img/logo.svg" alt="">
                Nether Clocks
            </a>
            <a href="https://explorer.nether.click">
                <img src="https://explorer.nether.click/source-code/img/logo.svg" alt="">
                Nether Explorer
            </a>
            <a href="https://music.nether.click">
                <img src="https://music.nether.click/source-code/img/logo.svg" alt="">
                Nether Music
            </a>
            <a href="https://notepad.nether.click">
                <img src="https://notepad.nether.click/source-code/img/logo.svg" alt="">
                Nether Notepad
            </a>
            <a href="https://terminal.nether.click">
                <img src="https://terminal.nether.click/source-code/img/logo.svg" alt="">
                Nether Terminal
            </a>
        </div>
        <div class="group">
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
    </div>
`;