const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function showHome() {
    document.title = 'Home Page - Nether';
    main.innerHTML = `
        <h1>Home Page</h1>
        <section>
            <h2>Welcome to Nether</h2>
            <p>You can pick from one of our products on our products page</p>
        </section>
    `;
}

function showOurProducts() {
    document.title = 'Our Products - Nether';
    main.innerHTML = `
        <h1>Our Products</h1>
        <section>
            <h2>NetherOS</h2>
            <p>Product 1 description</p>
        </section>
        <section>
            <h2>Sigma Republic</h2>
            <p>Product 2 description</p>
        </section>
    `;
}

showHome();