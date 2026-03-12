import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../assets/7ae851ef0ed3abc948eb14f1df3edaecbc5a25e7.png";
import backImage from "../assets/e2e15da75f2de1988410b327aeef74453b2e195e.jpg" 
import emailjs from "@emailjs/browser";
import { useRef , useState, useEffect } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const formSectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

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
                className="w-full h-full opacity-[0.22] object-cover scale-x-[-1]"
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

        {/* CONTACT */}
        <section ref={formSectionRef} className="py-12 bg-white">

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
                    Together
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

export default ContactUs;