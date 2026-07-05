import { setFavicon, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, importCSSFromList, importJSFromList, setAttribute, redirect } from "https://js.nether.click/nether.js"

await setAttribute("html", "lang", "en")

await setFavicon("img/icons/favicon.svg")

await importCSSFromList([
    "https://web-ui.nether.click/components/css/all.css",
    "https://web-ui.nether.click/components/css/body.css",
    "https://web-ui.nether.click/components/css/header.css",
    "https://web-ui.nether.click/components/css/main.css",
    "https://web-ui.nether.click/components/css/footer.css",
    "https://web-ui.nether.click/components/css/headings.css",
    "https://web-ui.nether.click/components/css/p.css",
    "https://web-ui.nether.click/components/css/section.css",
    "https://web-ui.nether.click/components/css/table.css",
    "https://web-ui.nether.click/fonts/lexend/lexend.css",
    "https://web-ui.nether.click/components/css/lists.css",
    "https://web-ui.nether.click/components/css/app-drawer.css",
    "https://web-ui.nether.click/components/css/grouped-list.css",
    "https://web-ui.nether.click/components/css/tabs-switching.css"
])

await importJSFromList([
    "js/import-app-drawer.js",
    "js/import-app-check.js",
    "https://web-ui.nether.click/components/js/app-drawer.js",
    "https://web-ui.nether.click/components/js/footer.js",
    "https://web-ui.nether.click/components/js/tabs-switching.js"
])

await setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()">
        <img src="img/icons/favicon.svg" alt="Nether (nether.click) logo">
    </button>
`)

await setContentOfFooter(`
    <button onclick="showHome()">
        <img src="img/icons/favicon.svg" alt="Nether (nether.click) Logo">
    </button>
    <button onclick="showProducts()">
        <img src="img/links-icons/products.svg" alt="Products page link icon">
    </button>
`)

window.showHome = showHome
window.showProducts = showProducts

window.redirect = redirect

function showHome() {
    scrollUp();
    setTitle("Nether (nether.click)")
    setContentOfMain(`
        <h1>Nether</h1>
        <section>
            <h2>Links</h2>
            <div class="grouped-list">
                <button class="item" onclick="showProducts()">
                    <img src="img/links-icons/products.svg" alt="">
                    Products
                </button>
            </div>
        </section>
    `)
}

function showProducts() {
    scrollUp();
    setTitle("Products - Nether (nether.click)")
    setContentOfMain(`
        <h1>Products</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('nether-web',)" data-tab="nether-web">Nether Web</button>
                    <button class="tab" onclick="showTab('nether-apps')" data-tab="nether-apps">Nether Apps</button>
                    <button class="tab" onclick="showTab('nether-republic')" data-tab="nether-republic">Nether Republic</button>
                </div>
                <div class="tab-content active" id="nether-web">
                    <h2>Nether Web</h2>
                    <div class="grouped-list">
                        <button class="item" onclick="redirect('https://web.nether.click')">
                            <img src="https://web.nether.click/img/icons/favicon.svg" alt="Nether Web Logo">
                            Nether Web
                        </button>
                        <button class="item" onclick="redirect('https://web-ui.nether.click')">
                            <img src="https://web-ui.nether.click/img/icons/favicon.svg" alt="Nether Web UI Logo">
                            Nether Web UI
                        </button>
                        <button class="item" onclick="redirect('https://js.nether.click')">
                            <img src="https://js.nether.click/img/icons/favicon.png" alt="Nether.js Logo">
                            Nether.js
                        </button>
                    </div>
                </div>
                <div class="tab-content" id="nether-apps">
                    <h2>Nether Apps</h2>
                    <div class="grouped-list">
                        <button class="item" onclick="redirect('https://calculator.nether.click')">
                            <img src="https://calculator.nether.click/source-code/img/logo.svg" alt="Nether Calculator Logo">
                            Nether Calculator
                        </button>
                        <button class="item" onclick="redirect('https://clocks.nether.click')">
                            <img src="https://clocks.nether.click/source-code/img/logo.svg" alt="Nether Calculator Logo">
                            Nether Clocks
                        </button>
                        <button class="item" onclick="redirect('https://explorer.nether.click')">
                            <img src="https://explorer.nether.click/source-code/img/logo.svg" alt="Nether Calculator Logo">
                            Nether Explorer
                        </button>
                        <button class="item" onclick="redirect('https://music.nether.click')">
                            <img src="https://music.nether.click/source-code/img/logo.svg" alt="Nether Calculator Logo">
                            Nether Music
                        </button>
                        <button class="item" onclick="redirect('https://notepad.nether.click')">
                            <img src="https://notepad.nether.click/source-code/img/logo.svg" alt="Nether Calculator Logo">
                            Nether Notepad
                        </button>
                        <button class="item" onclick="redirect('https://terminal.nether.click')">
                            <img src="https://terminal.nether.click/source-code/img/logo.svg" alt="Nether Calculator Logo">
                            Nether Terminal
                        </button>
                    </div>
                </div>
                <div class="tab-content" id="nether-republic">
                    <h2>Nether Republic</h2>
                    <div class="grouped-list">
                        <button class="item" onclick="redirect('https://nr.nether.click')">
                            <img src="https://nr.nether.click/img/icons/favicon.svg" alt="Nether Logo">
                            Nether Republic
                        </button>
                        <button class="item" onclick="redirect('https://nrt.nether.click')">
                            <img src="https://nrt.nether.click/img/icons/logo.svg" alt="Nether Republic Transport Logo">
                            Nether Republic Transport
                        </button>
                        <button class="item" onclick="redirect('https://nrb.nether.click')">
                            <img src="https://nrb.nether.click/img/icons/logo.svg" alt="Nether Republic Bank Logo">
                            Nether Republic Bank
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `)
}

showHome();