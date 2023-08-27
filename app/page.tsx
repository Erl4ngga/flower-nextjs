import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import BannerSection from "@/components/banner/banner";
import ProductCard from "@/components/product/product";
import CardMobile from "@/components/card/cardmobile";
import data from "@/data.json";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <BannerSection />
      <div className="inline-block max-w-lg text-center justify-center">
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
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="my-16 p-">
        <CardMobile />
      </div>
    </section>
  );
}
