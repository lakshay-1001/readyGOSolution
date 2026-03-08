import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../assets/7ae851ef0ed3abc948eb14f1df3edaecbc5a25e7.png";
import backImage from "../assets/e2e15da75f2de1988410b327aeef74453b2e195e.jpg"
import chooseImg from "../assets/choose.png";  
import tickIcon from "../assets/tick.png";  
import team1 from "../assets/pranav.png";  
import team2 from "../assets/shivansh.png"; 
import team3 from "../assets/lakshayImg.jpg";  
import emailjs from "@emailjs/browser";
import { useRef , useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const [loading, setLoading] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current || loading) return;

        setLoading(true);

        emailjs
            .sendForm(
            "service_xkxzc4n",
            "template_2m9jcng",
            formRef.current,
            "vKEy0T4LoYEzfCAeL"
            )
            .then(() => {
            toast.success("Message sent successfully!");
            formRef.current?.reset();
            })
            .catch(() => {
            toast.error("Failed to send message");
            })
            .finally(() => {
            setLoading(false);
            });
        };
  return (
    <div className="font-sans text-gray-800">

        <Header />

        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10"
            >
                <img
                src={backImage}
                alt=""
                className="w-full h-full opacity-[0.22] object-cover"
                />
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">

                <div>
                <p className="font-dmsans font-normal text-[24px] leading-[100%] tracking-[0%] text-gray-500 mb-3">
                    Turning ideas into digital success.
                </p>

                <h1 className="font-poppins font-bold text-[60px] leading-[100%] tracking-[0%] text-gray-900 mb-6">
                    IT Consulting <br />
                    Service For Your <br />
                    Business
                </h1>

                <p className="font-poppins font-light text-[20px] leading-[100%] tracking-[0%] text-gray-600 mb-8 max-w-lg">
                    We help businesses build a strong digital presence through
                    website development, graphic design, branding, and social media
                    management.
                </p>

                <button className="bg-black text-white w-[194px] h-[64px] rounded-[10px] pt-[10px] pr-[13px] pb-[9px] pl-[13px]">
                    Our Services
                </button>
                </div>

                <div className="flex justify-center md:justify-end">
                <img
                    src={Hero}
                    alt="Hero Illustration"
                    className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl"
                />
                </div>

            </div>
        </section>

        {/* ABOUT US */}
        <section className="bg-gray-100 py-28">

            <div className="max-w-[1400px] mx-auto px-8 lg:px-20">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                About Us
                </h2>

                {/* First Row */}
                <div className="grid md:grid-cols-2 gap-16 items-start mb-10">

                {/* Paragraph 1 */}
                <p className="text-lg md:text-xl text-gray-600 leading-8">
                    ReadyGo Solutions is a creative digital startup founded by three
                    passionate creators —
                    <span className="font-semibold text-gray-900">
                    {" "}Pranav, Shivansh, and Lakshay
                    </span>.
                    Our mission is to help businesses grow in the digital world with
                    modern design and smart technology solutions.
                </p>

                {/* Logo */}
                <div className="flex md:justify-end">
                    <h2 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-gray-800 leading-none">
                    Ready<span className="text-green-500">GO.</span>
                    </h2>
                </div>

                </div>

                {/* Remaining paragraphs */}
                <div className="space-y-8">

                <p className="text-lg md:text-xl text-gray-600 leading-8">
                    We specialize in building professional websites, creating eye-catching
                    graphic designs, designing brand identities, and managing social media
                    platforms to help businesses connect with their audience.
                </p>

                <p className="text-lg md:text-xl text-gray-600 leading-8">
                    At ReadyGo, we believe that every brand deserves a strong online
                    presence. Our team combines creativity, technology, and strategy to
                    deliver solutions that help businesses stand out.
                </p>

                <p className="text-lg md:text-xl text-gray-600 leading-8">
                    Whether you're a startup, small business, or local brand, ReadyGo is
                    here to bring your ideas to life.
                </p>

                </div>

            </div>
        </section>

        {/* MISSION & VISION */}
        <section className="bg-[#050F37] text-white py-20 text-center">

            <h3 className="font-poppins font-semibold text-[36px] leading-[100%] tracking-[0%] mb-4">
                Our Mission
            </h3>
            <p className="font-dmsans text-[12px] md:text-[18px] leading-[100%] tracking-[4%] text-center max-w-3xl mx-auto mb-10">
            Our mission is to empower businesses with modern digital tools, creative design, and effective online strategies that help them grow faster in today's digital world.
            </p>

            <h3 className="font-poppins font-semibold text-[36px] leading-[100%] tracking-[0%] mb-4">Our Vision</h3>
            <p className="font-dmsans font-light text-[12px] md:text-[18px] leading-[100%] tracking-[4%] text-center max-w-3xl mx-auto mb-10">
            To become a trusted digital partner for businesses by delivering innovative, creative, and affordable digital solutions.
            </p>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-gray-100 py-16">

            <div className="max-w-[1200px] mx-auto px-12 lg:px-36">

                {/* Title */}
                <h2 className="text-center text-[36px] font-poppins font-semibold mb-12">
                Why Businesses Choose Ready
                <span className="text-green-500">Go</span> ?
                </h2>

                <div className="grid md:grid-cols-2 items-center gap-8">

                {/* LEFT LIST */}
                <div className="space-y-8">

                    <div className="flex items-center gap-4">
                    <img src={tickIcon} className="w-6 h-6" />
                    <p className="font-dmsans text-lg text-gray-700">
                        Creative & Modern Designs
                    </p>
                    </div>

                    <div className="flex items-center gap-4">
                    <img src={tickIcon} className="w-6 h-6" />
                    <p className="font-dmsans text-lg text-gray-700">
                        Affordable Services
                    </p>
                    </div>

                    <div className="flex items-center gap-4">
                    <img src={tickIcon} className="w-6 h-6" />
                    <p className="font-dmsans text-lg text-gray-700">
                        Fast Project Delivery
                    </p>
                    </div>

                    <div className="flex items-center gap-4">
                    <img src={tickIcon} className="w-6 h-6" />
                    <p className="font-dmsans text-lg text-gray-700">
                        Personalized Solutions
                    </p>
                    </div>

                    <div className="flex items-center gap-4">
                    <img src={tickIcon} className="w-6 h-6" />
                    <p className="font-dmsans text-lg text-gray-700">
                        Dedicated Support
                    </p>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="hidden md:flex justify-end">

                    <img
                    src={chooseImg}
                    alt="Why choose ReadyGo"
                    className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl"
                    />

                </div>

                </div>

            </div>
        </section>

        {/* TEAM */}
        <section className="bg-[#6798F5] text-white text-center py-16">
            <h2 className="font-poppins font-semibold text-[36px] leading-[100%] tracking-[0%] mb-4">Our Team</h2>
            <p className="font-poppins font-light text-[18px] md:text-[24px] leading-[100%] tracking-[0%] text-center max-w-3xl mx-auto">
                ReadyGo is powered by passionate creators who believe in innovation.
            </p>
        </section>

        {/* TEAM */}
        <section className="py-8 bg-white">

        <div className="max-w-[1200px] mx-auto px-6">

            <h2 className="text-center text-4xl font-semibold mb-16">
            Meet The Team
            </h2>

            {/* group container */}
            <div className="grid md:grid-cols-3 gap-10 group">

            {/* CARD */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-blue-400 transition-all duration-500 transform group-hover:scale-95 hover:!scale-105 hover:z-10">

                <img
                src={team1}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        {/* Name */}
                        <h3 className="font-dmsans font-medium text-[24px] leading-[100%] tracking-[0%] mb-4">
                            Pranav Bhardwaj
                        </h3>

                        {/* Role */}
                        <p className="font-poppins font-bold text-[24px] leading-[100%] tracking-[0%] mt-1 mb-8">
                            Founder & Designer
                        </p>

                        {/* Description */}
                        <p className="font-dmsans font-normal text-[18px] leading-[100%] tracking-[0%] mt-3 opacity-90">
                            Specializes in UI/UX design, website design, and branding.
                        </p>
                    </div>
            </div>


            {/* CARD */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-blue-400 transition-all duration-500 transform group-hover:scale-95 hover:!scale-105 hover:z-10 hover:shadow-2xl">

                <img
                src={team2}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        {/* Name */}
                        <h3 className="font-dmsans font-medium text-[24px] leading-[100%] tracking-[0%] mb-4">
                            Shivansh Singhal
                        </h3>

                        {/* Role */}
                        <p className="font-poppins font-bold text-[24px] leading-[100%] tracking-[0%] mt-1 mb-8">
                            Co-Founder & Creative Strategist
                        </p>

                        {/* Description */}
                        <p className="font-dmsans font-normal text-[18px] leading-[100%] tracking-[0%] mt-6 opacity-90">
                            Handles graphic design, content ideas, and social media growth.
                        </p>
                    </div>
                </div>


            {/* CARD */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-blue-400 transition-all duration-500 transform group-hover:scale-95 hover:!scale-105 hover:z-10">

                <img
                src={team3}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        {/* Name */}
                        <h3 className="font-dmsans font-medium text-[24px] leading-[100%] tracking-[0%] mb-4">
                            Lakshay Garg
                        </h3>

                        {/* Role */}
                        <p className="font-poppins font-bold text-[24px] leading-[100%] tracking-[0%] mt-1 mb-8">
                            Co-Founder & Developer
                        </p>

                        {/* Description */}
                        <p className="font-dmsans font-normal text-[18px] leading-[100%] tracking-[0%] mt-3 opacity-90">
                            Focused on website development and technical implementation.
                        </p>
                    </div>
                </div>

            </div>

        </div>

        </section>

        {/* CONTACT */}
        <section className="py-12 bg-white">

            <div className="max-w-[1180px] mx-auto px-6">

                {/* TOP LINE */}
                <div className="w-full border-t border-blue-200 mb-16"></div>

                <div className="grid md:grid-cols-2 gap-16 items-start">

                {/* LEFT SIDE */}
                <div>

                    <p className="font-dmsans font-medium text-[18px] md:text-[24px] leading-[100%] text-gray-500 mb-4">
                        Contact  -
                    </p>

                    <h2 className="font-poppins font-semibold text-[36px] md:text-[60px] leading-[100%] mb-8">
                    <span className="text-blue-500">Let’s</span> Build <span className="text-blue-500">Your</span> <br/>
                    Next <span className="text-blue-500">Project</span> <br/>
                    <span className="text-blue-500">Together</span>
                    </h2>

                    <p className="font-dmsans font-medium text-[18px] md:text-[24px] leading-[100%] text-gray-600 max-w-md">
                    Feel free to reach out if you are ready to collaborate
                    or have a question.
                    </p>

                </div>


                {/* RIGHT SIDE FORM */}
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

                    <div>
                    <label className="font-poppins font-medium text-[16px] md:text-[20px] leading-[100%] text-[#46446C] block mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full bg-white border border-[#46446C] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    </div>

                    <div>
                    <label className="font-poppins font-medium text-[16px] md:text-[20px] leading-[100%] text-[#46446C] block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="w-full bg-white border border-[#46446C] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    </div>

                    <div>
                    <label className="font-poppins font-medium text-[16px] md:text-[20px] leading-[100%] text-[#46446C] block mb-2">
                        Phone number
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="w-full bg-white border border-[#46446C] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    </div>

                    <div>
                    <label className="font-poppins font-medium text-[16px] md:text-[20px] leading-[100%] text-[#46446C] block mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        className="w-full bg-white border border-[#46446C] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                    ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-[117px] h-[50px] font-semibold bg-blue-500 text-white rounded-[10px] px-[20px] py-[10px] flex items-center justify-center gap-[10px] shadow-md hover:bg-blue-600 transition"
                    >
                        {loading ? "Sending..." : "Send →"}
                    </button>

                </form>

                </div>
            </div>
        </section>

        <Footer />

    </div>
  );
};

export default Home;