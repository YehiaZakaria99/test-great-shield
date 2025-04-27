export default function AboutOverview() {
  return (
    <div className="mb-24 px-4">
      <h2
        className="text-4xl md:text-5xl font-bold text-center text-(--main-color) mb-6"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        // data-aos-delay={500}
      >
        About Our Company
      </h2>
      <p
        className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        // data-aos-delay={500}
      >
        We are a construction company with a passion for excellence. With years
        of experience and a solid team, we deliver quality, integrity, and
        innovation in every project we undertake. Learn more about our vision,
        mission, standards, and message below.
      </p>
    </div>
  );
}
