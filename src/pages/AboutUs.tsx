import Header from "../components/Header";
import Footer from "../components/Footer";
import backImage from "../assets/e2e15da75f2de1988410b327aeef74453b2e195e.jpg";

const AboutUs = () => {
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

          <h1 className="font-poppins font-bold text-[48px] md:text-[60px] leading-[100%] text-gray-900 mb-6">
            About <span className="text-green-500">ReadyGO</span>
          </h1>

          <p className="font-dmsans text-[20px] md:text-[24px] text-gray-600 max-w-3xl mx-auto">
            We are a passionate team dedicated to helping businesses grow
            digitally with creative design, modern websites, and powerful
            digital solutions.
          </p>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-8">

          <h2 className="text-4xl font-bold text-gray-900">
            Who We Are
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            ReadyGo Solutions is a creative digital startup founded by three
            passionate creators — <span className="font-semibold text-gray-900">
            Pranav Bhardwaj, Shivansh Singhal, and Lakshay Garg
            </span>. Our goal is to help businesses build a strong digital
            presence using modern technology and innovative design.
          </p>

          <p className="text-lg text-gray-600 leading-8">
            In today's fast-moving digital world, every business needs a
            professional online identity. At ReadyGo, we specialize in
            building beautiful websites, designing powerful brand identities,
            and creating engaging content that connects businesses with their
            audience.
          </p>

          <p className="text-lg text-gray-600 leading-8">
            We believe that creativity and technology together can transform
            the way businesses grow online. Our team focuses on delivering
            solutions that are not only visually appealing but also practical
            and results-driven.
          </p>

          <p className="text-lg text-gray-600 leading-8">
            Whether you're launching a startup, running a local business, or
            expanding your brand online, ReadyGo is here to help you take the
            next step with confidence.
          </p>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#050F37] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center space-y-10">

          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Our Mission
            </h3>

            <p className="text-lg text-gray-200 leading-8">
              Our mission is to empower businesses with modern digital tools,
              creative design, and effective online strategies that help them
              grow faster in today's digital world.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Our Vision
            </h3>

            <p className="text-lg text-gray-200 leading-8">
              Our vision is to become a trusted digital partner for businesses
              by delivering innovative, creative, and affordable digital
              solutions that make a lasting impact.
            </p>
          </div>

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

export default AboutUs;