const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(footer)

header.innerHTML = `
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()">
        <img src="img/icons/favicon.svg">
    </button>
`;

footer.innerHTML = `
    <button onclick="showHome()">
        <img src="img/icons/favicon.svg">
    </button>
    <button onclick="showProducts()">
        <img src="img/links-icons/products.svg">
    </button>
    <button onclick="showNews()">
        <img src="img/links-icons/news.svg">
    </button>
`;

function showHome() {
    scrollUp();
    document.title = "Home Page - Nether";
    main.innerHTML = `
        <h1>Home Page</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showProducts()">Products</button>
                <button class="item" onclick="showNews()">News</button>
            </div>
        </section>
    `;
}

function showProducts() {
    scrollUp();
    document.title = "Products - Nether";
    main.innerHTML = `
        <h1>Products</h1>
        <section>
            <h2>Nether</h2>
            <div class="grouped-list">
                <button class="item" onclick="redirect('')">Nether</button>
                <button class="item" onclick="redirect('modern-web.')">Nether Modern Web</button>
                <button class="item" onclick="redirect('os.')">NetherOS</button>
                <button class="item" onclick="redirect('software-modules.')">Nether Software Modules</button>
                <button class="item" onclick="redirect('online-computer.')">Nether Online Computer</button>
            </div>
        </section>
        <section>
            <h2>Nether Learn</h2>
            <div class="grouped-list">
                <button class="item" onclick="redirect('learn-html.')">Nether Learn HTML</button>
                <button class="item" onclick="redirect('learn-css.')">Nether Learn CSS</button>

            </div>
        </section>
        <section>
            <h2>Sigma Republic</h2>
            <div class="grouped-list">
                <button class="item" onclick="redirect('srt.')">Sigma Republic Transport</button>
                <button class="item" onclick="redirect('srb.')">Sigma Republic Bank</button>
            </div>
        </section>
    `;
}

function showNews() {
    scrollUp();
    document.title = "News - Nether";
    main.innerHTML = `
        <h1>News</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showNews_sigma_republic_will_change_to_nether_republic()">
                    Sigma Republic will change to Nether Republic
                </button>
        </section>
    `;
}

function redirect(url) {
    window.location.href = `https://${url}nether.click`;
}

function showNews_sigma_republic_will_change_to_nether_republic() {
    scrollUp();
    document.title = "Sigma Republic will change to Nether Republic - Nether News";
    main.innerHTML = `
        <h1>Sigma Republic will change to Nether Republic</h1>
        <section>
            <p>Created: 31 May 2026</p>
            <p>Last Updated: 31 May 2026</p>
        </section>
        <section>
            <h2>What will change?</h2>
            <ol>
                <li>Names</li>
                <li>Logos</li>
                <li>Domain</li>
            </ol>
            <table>
                <tr>
                    <th>App (original name)</th>
                    <th>App (new name)</th>
                    <th>Original text in logo</th>
                    <th>New Text in Logo</th>
                </tr>
                <tr>
                    <td>Sigma Republic</td>
                    <td>Nether Republic</td>
                    <td>SRT</td>
                    <td>NRT</td>
                </tr>
                <tr>
                    <td>Sigma Republic Bank</td>
                    <td>Nether Republic Bank</td>
                    <td>SRB</td>
                    <td>NRB</td>
                </tr>
            </table>
        </section>
        <section>
            <h2>What will not change?</h2>
            <ul>
                <li>App features</li>
                <li>App design</li>
                <li>App developers</li>
            </ul>
        </section>
        <section>
            <h2>Timeline</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Event</th>
                </tr>
                <tr>
                    <td>31 May 2026</td>
                    <td>Announcement of the name change.</td>
                </tr>
                <tr>
                    <td>22 June 2026</td>
                    <td>Name will be changed and new domains will be added. Old domains will still work.</td>
                </tr>
                <tr>
                    <td>31 October 2026</td>
                    <td>Old domains will be shutdown and no longer available.</td>
                </tr>
            </table>
        </section>
    `;
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

showHome();