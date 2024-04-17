export const SizeProduct = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div className="details-size">
      {sizes.map((size) => (
        <div
          key={size}
          className={`details-size__item ${
            selectedSize === size ? "selected" : ""
          }`}
          onClick={() => onSelectSize(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};
