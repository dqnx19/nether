const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(footer)

header.innerHTML = `
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()">
        <img src="favicon.svg">
    </button>
`;

function showHome() {
    document.title = "Home Page - Nether";
    main.innerHTML = `
        <h1>Home Page</h1>
        <section>
            <h2>Welcome to Nether</h2>
            <p>You can pick from projects below.</p>
        </section>
        <section>
            <h2>Our Products</h2>
            <div class="grouped-list">
                <button class="item" onclick="redirect('')">Nether</button>
                <button class="item" onclick="redirect('modern-web.')">Nether Modern Web</button>
                <button class="item" onclick="redirect('os.')">NetherOS</button>
                <button class="item" onclick="redirect('learn-html.')">Nether Learn HTML</button>
                <button class="item" onclick="redirect('learn-css.')">Nether Learn CSS</button>
                <button class="item" onclick="redirect('srt.')">Sigma Republic Transport</button>
                <button class="item" onclick="redirect('srb.')">Sigma Republic Bank</button>
            </div>
        </section>
    `;
}

function redirect(url) {
    window.location.href = `https://${url}nether.click`;
}

showHome();