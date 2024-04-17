import { Spinner } from "../../../shared/components/Spinner/Spinner";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { ProductInfo } from "./ProductInfo/ProductInfo";

export const ProductPage = () => {
  return (
    <>
      <Spinner />
      <ProductInfo />
      <ProductDetails />
    </>
  );
};
