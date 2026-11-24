import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Phone, X } from "lucide-react";
import brahmiGhritamImage from "../../assets/products/Brahmi Ghritam on Emerald Marble.png";
import chandraprabhaVatiImage from "../../assets/products/Moonlit Sapphire Chandraprabha Vati Showcase.png";
import chyavanprashnaLehyamImage from "../../assets/products/Emerald Marble Chyavanprashna Lehyam Showcase.png";
import kanchanaraGugguluImage from "../../assets/products/Luxury Emerald Kanchanara Guggulu Showcase.png";
import lasunadiVatiImage from "../../assets/products/Lasunadi Vati emerald apothecary showcase.png";
import "./HomeProducts.css";

const BUY_PHONE = "9966426060";

const products = [
  {
    id: "brahmi-ghritam",
    name: "Brahmi Ghritam",
    image: brahmiGhritamImage,
    price: "₹500",
    description:
      "A classical medicated-ghee preparation centred on Brahmi and traditionally selected within personalised Ayurvedic care for memory, attention and mental calm. Its ghrita base is prepared to carry the qualities of the herbs in a nourishing form. Use only in the quantity and manner advised by a qualified Ayurvedic practitioner.",
  },
  {
    id: "chandraprabha-vati",
    name: "Chandraprabha Vati",
    image: chandraprabhaVatiImage,
    price: "₹500",
    description:
      "A classical compound Ayurvedic tablet prepared from a broad combination of herbal and traditionally processed ingredients. Ayurvedic practitioners select Chandraprabha Vati within individualised plans concerning urinary, metabolic and reproductive wellbeing. Because the formulation is complex, suitability and dosage should always be confirmed by a qualified practitioner.",
  },
  {
    id: "chyavanprashna-lehyam",
    name: "Chyavanprashna Lehyam",
    image: chyavanprashnaLehyamImage,
    price: "₹500",
    description:
      "A traditional amla-centred Ayurvedic avaleha, or herbal lehyam, prepared in a rich jam-like form with a wider group of herbs and a nourishing base. It belongs to the Rasayana tradition and is commonly incorporated into personalised routines supporting vitality and general wellbeing. Contact us for ingredient details and practitioner-guided use.",
  },
  {
    id: "kanchanara-guggulu",
    name: "Kanchanara Guggulu",
    image: kanchanaraGugguluImage,
    price: "₹500",
    description:
      "A classical Guggulu-based Ayurvedic tablet that combines Kanchanara with a supporting group of traditional herbs and spices. Practitioners may select it within individualised care concerned with glandular, lymphatic and metabolic balance. The appropriate dose and duration depend on the person and should be decided under qualified Ayurvedic supervision.",
  },
  {
    id: "lasunadi-vati",
    name: "Lasunadi Vati",
    image: lasunadiVatiImage,
    price: "₹500",
    description:
      "A traditional Ayurvedic tablet formulation centred on Lasuna, or garlic, together with selected pungent and digestive ingredients. It is traditionally used within practitioner-guided routines concerned with appetite, digestion and digestive comfort. Contact our team before use, especially if you take regular medicines or have been advised to restrict garlic.",
  },
];

const HomeProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!selectedProduct) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProduct(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProduct]);

  return (
    <section className="home-products" aria-labelledby="home-products-title">
      <div className="home-products__stars" aria-hidden="true" />
      <div className="home-products__shell">
        <header className="home-products__header">
          <div>
            <p className="home-products__eyebrow">Ayurvedic preparations</p>
            <h2 id="home-products-title">Prepared with tradition and care.</h2>
          </div>
          <p>
            Explore our selected Ayurvedic formulations. Choose a product to
            view its details and contact us directly to purchase.
          </p>
        </header>

        <div className="home-products__grid">
          {products.map((product, index) => (
            <article className="home-product" key={product.id}>
              <button
                type="button"
                className="home-product__button"
                onClick={() => setSelectedProduct(product)}
                aria-label={`View details for ${product.name}`}
              >
                <span className="home-product__image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="home-product__shade" aria-hidden="true" />
                </span>
                <span className="home-product__content">
                  <span className="home-product__number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="home-product__name">{product.name}</span>
                  <span className="home-product__action">View product</span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedProduct && createPortal(
        <div
          className="product-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-dialog-title"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-dialog__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="product-dialog__close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
              autoFocus
            >
              <X size={21} aria-hidden="true" />
            </button>

            <div className="product-dialog__image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>

            <div className="product-dialog__content">
              <p className="home-products__eyebrow">Traditional formulation</p>
              <h2 id="product-dialog-title">{selectedProduct.name}</h2>
              <p className="product-dialog__description">
                {selectedProduct.description}
              </p>

              <div className="product-dialog__price">
                <span>Price</span>
                <strong>{selectedProduct.price}</strong>
              </div>

              <p className="product-dialog__note">
                Call us to confirm availability and place your order.
              </p>
              <a href={`tel:${BUY_PHONE}`} className="product-dialog__call">
                <Phone size={18} aria-hidden="true" />
                Call {BUY_PHONE} to buy
              </a>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
};

export default HomeProducts;
