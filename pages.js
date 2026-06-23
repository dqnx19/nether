import { setFavicon, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, getURLParam, importCSSFromList, importJSFromList, setAttribute, redirect } from "https://js.nether.click/nether.js"

await setAttribute("html", "lang", "en")

await setFavicon("img/icons/favicon.svg")

await importCSSFromList([
    "https://modern-web.nether.click/components/css/all.css",
    "https://modern-web.nether.click/components/css/body.css",
    "https://modern-web.nether.click/components/css/header.css",
    "https://modern-web.nether.click/components/css/main.css",
    "https://modern-web.nether.click/components/css/footer.css",
    "https://modern-web.nether.click/components/css/headings.css",
    "https://modern-web.nether.click/components/css/p.css",
    "https://modern-web.nether.click/components/css/section.css",
    "https://modern-web.nether.click/components/css/table.css",
    "https://modern-web.nether.click/fonts/lexend/lexend.css",
    "https://modern-web.nether.click/components/css/li.css",
    "https://modern-web.nether.click/components/css/app-drawer.css",
    "https://modern-web.nether.click/components/css/grouped-list.css",
    "https://modern-web.nether.click/components/css/tabs-switching.css"
])

await importJSFromList([
    "js/import-app-drawer.js",
    "js/import-app-check.js",
    "https://modern-web.nether.click/components/js/app-drawer.js",
    "https://modern-web.nether.click/components/js/footer.js",
    "https://modern-web.nether.click/components/js/tabs-switching.js"
])

await setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()">
        <img src="img/icons/favicon.svg">
    </button>
`)

await setContentOfFooter(`
    <button onclick="showHome()">
        <img src="img/icons/favicon.svg">
    </button>
    <button onclick="showProducts()">
        <img src="img/links-icons/products.svg">
    </button>
`)

window.showHome = showHome
window.showProducts = showProducts
window.redirect = redirect

function showHome() {
    scrollUp();
    setTitle("Nether (nether.click)")
    setContentOfMain(`
        <h1>Home Page</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showProducts()">Products</button>
            </div>
        </section>
    `)
}

function showProducts() {
    scrollUp();
    setTitle("Nether Products")
    setContentOfMain(`
        <h1>Products</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('nether', this)">Nether</button>
                    <button class="tab" onclick="showTab('nether-republic', this)">Nether Republic</button>
                </div>
                <div class="tab-content active" id="nether">
                    <h2>Nether</h2>
                    <div class="grouped-list">
                        <button class="item" onclick="redirect('https://nether.click')">
                            <img src="https://nether.click/img/icons/favicon.svg" alt="Nether Logo">
                            Nether
                        </button>
                        <button class="item" onclick="redirect('https://modern-web.nether.click')">
                            <img src="https://modern-web.nether.click/img/icons/favicon.svg"
                                alt="Nether Modern Web Logo">
                            Nether Modern Web
                        </button>
                        <button class="item" onclick="redirect('https://js.nether.click')">
                            <img src="https://js.nether.click/img/icons/favicon.png" alt="Nether.js Logo">
                            Nether.js
                        </button>
                        <button class="item" onclick="redirect('https://fonts.nether.click')">
                            <img src="https://fonts.nether.click/img/icons/favicon.svg" alt="Nether.js Logo">
                            Nether Fonts
                        </button>
                        <button class="item" onclick="redirect('https://os.nether.click')">
                            <img src="https://os.nether.click/img/logo-small.svg" alt="NetherOS Logo">
                            NetherOS
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