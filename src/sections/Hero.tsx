import banner from "../assets/kkr/kkr-banner.avif";

function Hero() {
  return (
    <section className="w-full mt-5 bg-transparent">
      <div className="max-w-7xl mx-auto w-full px-4">
        <img
          src={banner}
          alt="Hero Banner"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
