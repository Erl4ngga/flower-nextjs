import { title, subtitle } from "@/components/primitives";
import BannerSection from "@/components/banner/banner";
import ProductMiniCard from "@/components/product/productMini";
import CardMobile from "@/components/card/cardmobile";
import data from "@/data.json";
import CardStats from "@/components/card/stats";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <BannerSection />
      <div className="inline-block max-w-lg text-center justify-center my-20">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {data.map((product, index) => (
          <ProductMiniCard key="" product={product} />
        ))}
      </div>
      <div className="py-20">
        <CardStats />
      </div>
      <div className="my-16 py-20">
        <CardMobile />
      </div>
    </section>
  );
}
