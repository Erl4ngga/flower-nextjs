import { title } from "@/components/primitives";
import ProductOverView from "@/components/product/productoverview";

export default function PricingPage() {
  return (
    <div>
      <ProductOverView />
      <h1 className={title()}>Pricing</h1>
    </div>
  );
}
