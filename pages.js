import { setFavicon, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, importCSSFromList, importJSFromList, setAttribute } from "https://js.nether.click/nether.js"

window.showHome = showHome
window.showProducts = showProducts
window.redirect = redirect

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
    "https://modern-web.nether.click/components/css/logo.css",
    "https://modern-web.nether.click/components/css/grouped-list.css"
])

await importJSFromList([
    "js/import-app-drawer.js",
    "https://modern-web.nether.click/components/js/app-drawer.js",
    "https://modern-web.nether.click/components/js/footer.js"
])

await setAttribute("html", "lang", "en")

await setFavicon("img/icons/favicon.svg")

await setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()">
        <img src="img/icons/favicon.svg">
    </button>
`)

await setContentOfFooter(`
    <span class="expand-bar"></span>
    <div class="buttons">
        <button onclick="showHome()">
            <img src="img/icons/favicon.svg">
        </button>
        <button onclick="showProducts()">
            <img src="img/links-icons/products.svg">
        </button>
    </div>
`)

function showHome() {
    scrollUp();
    setTitle("Nether (nether.click)")
    setContentOfMain(`
        <h1>Home Page</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showProducts()">Products</button>
                <button class="item" onclick="showNews()">News</button>
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
            <h2>Nether</h2>
            <div class="grouped-list">
                <button class="item" onclick="redirect('')">Nether</button>
                <button class="item" onclick="redirect('modern-web.')">Nether Modern Web</button>
                <button class="item" onclick="redirect('os.')">NetherOS</button>
                <button class="item" onclick="redirect('software-modules.')">Nether Software Modules</button>
                <button class="item" onclick="redirect('online-computer.')">Nether Online Computer</button>
                <button class="item" onclick="redirect('js.')">Nether.js</button>
            </div>
        </section>
        <section>
            <h2>Sigma Republic</h2>
            <div class="grouped-list">
                <button class="item" onclick="redirect('srt.')">Sigma Republic Transport</button>
                <button class="item" onclick="redirect('srb.')">Sigma Republic Bank</button>
            </div>
        </section>
    `)
}

function redirect(url) {
    window.location.href = `https://${url}nether.click`;
}

showHome();