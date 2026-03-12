import Header from "../components/Header";
import Footer from "../components/Footer";
import backImage from "../assets/e2e15da75f2de1988410b327aeef74453b2e195e.jpg";

const services = [
  {
    title: "Brand Advertisement Video",
    description:
      "Creative promotional banners and videos designed to capture attention and promote your brand effectively.",
    link: "https://www.instagram.com/reel/DVp0-MGAjE_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    clickable: true,
  },
  {
    title: "Post Design",
    description:
      "Professional social media post designs that help your business grow and engage with your audience.",
    link: "https://www.instagram.com/p/DVlRFeWCXeD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    clickable: true,
  },
  {
    title: "Digital Invitation Design",
    description:
        "Creative and elegant digital invitations for weddings, birthdays, engagements, parties, and all special occasions. Designed to make your event memorable and visually appealing.",
    link: "https://www.instagram.com/reel/DVpvElXAvu4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    clickable: true,
  },
  {
    title: "Website Development",
    description:
      "Custom websites designed and developed to give your business a powerful online presence.",
    clickable: false,
  },
];

const Services = () => {
  return (
    <div className="font-sans text-gray-800">

      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none -z-10">
          <img
            src={backImage}
            alt=""
            className="w-full h-full object-cover opacity-[0.18] scale-x-[-1]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

          <h1 className="font-poppins font-bold text-[48px] md:text-[60px] leading-[100%] mb-6">
            Our <span className="text-green-500">Services</span>
          </h1>

          <p className="font-dmsans text-[20px] md:text-[24px] text-gray-600 max-w-3xl mx-auto">
            We provide creative design and digital solutions to help your brand
            grow and stand out in the digital world.
          </p>

        </div>

      </section>

      {/* SERVICES CARDS */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {

            const Card = (
                <div className="group bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between h-full">

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-green-500 group-hover:text-white transition">
                    {index + 1}
                </div>

                {/* Title */}
                <h3 className="font-poppins font-semibold text-[22px] text-gray-900 mb-4">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="font-dmsans text-gray-600 text-[16px] leading-7 flex-grow">
                    {service.description}
                </p>

                {/* CTA */}
                {service.clickable && (
                    <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-green-500 font-medium group-hover:gap-3 transition-all">
                        View Example →
                    </span>
                    </div>
                )}

                {!service.clickable && (
                    <div className="mt-6">
                    <span className="text-gray-400 text-sm">
                        {/* Coming Soon */}
                    </span>
                    </div>
                )}

                </div>
            );

            if (service.clickable) {
                return (
                <a
                    key={index}
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    {Card}
                </a>
                );
            }

            return (
                <div key={index}>
                {Card}
                </div>
            );

            })}
        </div>

      </section>

      {/* CONTACT DETAILS */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">

          <h2 className="text-4xl font-bold mb-8">
            Get in Touch
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            If you're looking for a creative partner to help grow your
            business online, feel free to contact us. We'd love to discuss
            your ideas and help bring them to life.
          </p>

          <div className="space-y-4 text-lg">

            <p>
              📞 <span className="font-semibold">Phone:</span> +91 94579 09764
            </p>

            <p>
              📧 <span className="font-semibold">Email:</span> readygosolutions@zohomail.in
            </p>

            <p>
              📍 <span className="font-semibold">Location:</span> India
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default Services;