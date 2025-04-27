const ServiceCard = ({ img, title }) => {
  return (
    <div className="bg-[#222] w-[155px] sm:w-[200px] md:w-[250px] rounded-xl overflow-hidden border-2 border-(--main-color) shadow-md group transition-transform hover:scale-[1.03] duration-300">
      <div className="overflow-hidden">
        <div className="img-box p-2 pb-0">
          <img
            src={img}
            alt={title}
            className="w-full h-[90px] md:h-[120px] object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>
      <div className="py-1 md:py-4 text-center">
        <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
