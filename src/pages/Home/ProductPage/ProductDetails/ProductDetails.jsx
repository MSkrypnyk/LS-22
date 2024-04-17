import { useState } from "react";
import "./ProductDetails.scss";
import { SizeProduct } from "../../../../shared/ui/SizeProduct/SizeProduct";
import { Button } from "../../../../shared/ui/Button/Button";

export const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [message, setMessage] = useState("");

  const details = {
    desc: " Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!",
    price: 10.5,
  };

  const sizes = ["250gm", "500gm", "1000gm"];

  const selectSize = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    if (message === "Product added to cart!") {
      setMessage("");
    } else {
      setMessage("Product added to cart!");
    }
  };

  return (
    <div className="details">
      <h6 className="details__title">Description</h6>
      <p className="details__desc">{details.desc}</p>
      <h6 className="details__title">Size</h6>
      <div className="details-size">
        <SizeProduct
          sizes={sizes}
          selectedSize={selectedSize}
          onSelectSize={selectSize}
        />
      </div>
      <div className="details-price">
        <div className="details-price__info">
          <p className="details-price__label">price</p>
          <p className="details-price__value">
            <span>$</span>
            {details.price.toFixed(2)}
          </p>
        </div>
        <Button type="button" variant="primary" onClick={addToCart}>
          Add to Cart
        </Button>
        {message && <div className="product-message">{message}</div>}
      </div>
    </div>
  );
};
