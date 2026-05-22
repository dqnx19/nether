const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function showHome() {
    document.title = 'Home Page - Nether';
    main.innerHTML = `
        <h1>Home Page</h1>
        <section>
            <h2>Welcome to Nether</h2>
            <p>You can pick from one of our products on <button onclick="showOurProducts()" our products page</button></p>
        </section>
    `;
}

function showOurProducts() {
    document.title = 'Our Products - Nether';
    main.innerHTML = `
        <h1>Our Products</h1>
        <section>
            <h2>Nether</h2>
            <a href="https://nether.click">Nether</a>
            <a href="https://modern-web.nether.click">Nether Modern Web</a>
        </section>
        <section>
            <h2>NetherOS</h2>
            <a href="https://os.nether.click">NetherOS</a>
        </section>
        <section>
            <h2>Nether Learn</h2>
            <a href="https://learn-html.nether.click">Nether Learn HTML</a>
            <a href="https://learn-css.nether.click">Nether Learn CSS</a>
        </section>
        <section>
            <h2>Sigma Republic</h2>
            <a href="https://srt.nether.click">Sigma Republic Transport</a>
            <a href="https://srb.nether.click">Sigma Republic Bank</a>
        </section>
    `;
}

showHome();