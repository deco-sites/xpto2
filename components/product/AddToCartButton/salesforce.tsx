import { useCart } from "apps/salesforce/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";

export interface Props extends Omit<BtnProps, "onAddItem" | "platform"> {
  seller: string;
}

function AddToCartButton(props: Props) {
  const { addItems } = useCart();
  const onAddItem = () =>
    addItems({
      basketItems: [{
        productId: props.productID,
        quantity: 1,
      }],
    });

  return <Button onAddItem={onAddItem} {...props} />;
}

export default AddToCartButton;
