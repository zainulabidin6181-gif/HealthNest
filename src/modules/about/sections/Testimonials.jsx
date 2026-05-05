import { useEffect, useRef, useState } from "react";
import SectionHeading from "../../../component/headingSections/SectionHeading";
import SectionMainP from "../../../component/paragaraph/SectionMainP";
import ButtonAll from "../../../component/buttons/ButtonAll";

const testimonials = [
  {
    name: "Mehwish",
    text: "Compliment interested discretion estimating on stimulated apartments oh.",
    img: "/images/client2.jfif",
  },
  {
    name: "Elizabeth Jeff",
    text: "Door six say when find roof call. Discovered behaviour defective.",
    img: "/images/client1.jfif",
    highlight: true,
  },
  {
    name: "Emily Thomas",
    text: "Never at water me might. On formed merits hunted merely by whence or.",
    img: "/images/client3.jfif",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-blue-900 py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-0 items-center">

        {/* LEFT CONTENT */}
        <div
          className={`transition-all duration-700 ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
        >

          <SectionHeading text={"What Our"} secText={'Customers Says'}   className={'my-3 text-white '} br={true} />

          <SectionMainP text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim pariatur sequi iusto error aperiam labore laudantium nulla ipsam saepe aliquid, mollitia totam hic eaque dicta officia quis assumenda, dolorum quasi?'
            className={'w-11/12 mb-5 text-white'} />

            <ButtonAll text='View More' type='bg-lime-600 text-white' size={'py-2 px-4'} extraClass={'mt-5'}/>
          
        </div>

        {/* RIGHT TESTIMONIALS */}
        <div className="space-y-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`
                relative bg-white rounded-xl shadow-md p-5 border-4 border-x-lime-600 hover:scale-x-110 flex items-start gap-4
                transition-all duration-700
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${item.highlight ? "ml-10" : "ml-0"}
              `}
            >
              {/* LEFT COLOR BAR (ONLY MIDDLE) */}
              {/* {item.highlight && (
                <span className="absolute left-0 top-0 w-1 h-20 bg-lime-600 rounded-full"></span>
              )} */}

              <img
                src={item.img}
                className="w-12 h-12 rounded-full object-cover"
                alt={item.name}
              />

              <div>
                <h4 className="font-semibold text-blue-900">{item.name}</h4>
                <p className="text-sm text-blue-900/70 leading-relaxed">
                  {item.text}
                </p>
              </div>

              <span className="ml-auto text-3xl text-blue-900/30 font-serif">
                “
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
