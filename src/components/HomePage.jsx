import ProductCarousel from "./ProductCarousel";

function HomePage() {
  return (
    <>
      <div className="page-title mt-5">
        <h1>Welcome to Imaginary Outlet</h1>
        <p>
          Step into the digital wonderland of our imaginary store, where every
          item is a playful illusion waiting to be discovered. Browse through a
          collection of fantastical treasures, from rare collectibles to
          whimsical goodies, all conjured straight from the realm of
          imagination.
        </p>
        <p>
          Whether you’re here to inspect our phantom items, add treasures to
          your cart, or simply explore the quirks of our digital shelves, your
          adventure begins here. Dive in, enjoy the hunt, and remember — in this
          store, anything can appear… or disappear!
        </p>
      </div>
      <ProductCarousel />
      <footer>
        &copy; 2025 Imaginary Outlet. Proudly serving customers who don’t exist.
      </footer>
    </>
  );
}

export default HomePage;
