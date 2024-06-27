import Button from "@/components/Button";
import Image from "next/image";
function SectionHero() {
  return (
    <>
      <section className="hero" id="hero">
        <h1>
          Pure Design, <span>Pure Living.</span>
        </h1>
        <p>Elevate Your Space with Minimalist Design.</p>
        <Image
          width={600}
          height={500}
          sizes="ratio"
          src={require("../../../public/images/hero_bg.jpg")}
          alt="Hero Image"
          loading="lazy"
        />
        <Button path={"/services"} text={"getStarted"} />
      </section>
    </>
  );
}

export default SectionHero;
