import { useEffect, useRef, useState } from "react";
import SectionHeading from "../../../component/headingSections/SectionHeading";
import SectionTopBtn from '../../../component/buttons/SectionTopBtn';
import SectionMainP from '../../../component/paragaraph/SectionMainP'
import ButtonAll from '../../../component/buttons/ButtonAll'

const processData = [
  {
    title: "Emergency Care",
    text:
      "Cras eu sapien eget nunc faucibus tempus ut at tortor. Integer iaculis orci vel ante tempor. Pellentesque aliquet est massa, at amet tempor mi auctor nec. Cras eu sapien eget nunc faucibus tempus ut at tortor. Integer iaculis orci vel ante tempor. Pellentesque aliquet est massa, at amet tempor mi auctor nec.",
    img: "/images/emergency.jpg",
  },
  {
    title: "Blood Test",
    text:
      "Cras eu sapien eget nunc faucibus tempus ut at tortor. Integer iaculis orci vel ante tempor. Pellentesque aliquet est massa, at amet tempor mi auctor nec. Cras eu sapien eget nunc faucibus tempus ut at tortor. Integer iaculis orci vel ante tempor. Pellentesque aliquet est massa, at amet tempor mi auctor nec.",
    img: "/images/blood-test.jpg",
  },
  {
    title: "Operation Theatre",
    text:
      "Cras eu sapien eget nunc faucibus tempus ut at tortor. Integer iaculis orci vel ante tempor. Pellentesque aliquet est massa, at amet tempor mi auctor nec. Cras eu sapien eget nunc faucibus tempus ut at tortor. Integer iaculis orci vel ante tempor. Pellentesque aliquet est massa, at amet tempor mi auctor nec.",
    img: "/images/operation.jpg",
  },
  {
    title: "Outdoor Checkup",
    text:
      "Cras eu sapien eget nunc faucibus tempus ut at tortor. Integer iaculis orci vel ante tempor. Pellentesque aliquet est massa, at amet tempor mi auctor nec. Cras eu sapien eget nunc faucibus tempus ut at tortor. Integer iaculis orci vel ante tempor. Pellentesque aliquet est massa, at amet tempor mi auctor nec.",
    img: "/images/checkup.jpg",
  },
];

export default function OurProcess() {
  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, Number(entry.target.dataset.index)]);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-950 py-20">
      <div className="container mx-auto px-4">

        <SectionTopBtn text={'Our Process'} textClass={'text-blue-900 mx-auto w-32'} lineColor='bg-lime-600 mt-1' />

        <SectionHeading text={"Our Working"} secText={'Best Process'} className={'text-center my-3 '} />

        <SectionMainP text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim pariatur sequi iusto error aperiam labore laudantium nulla ipsam saepe aliquid, mollitia totam hic eaque dicta officia quis assumenda, dolorum quasi?'
        className={'w-6/12 text-center mx-auto mb-10 text-blue-950 dark:text-gray-200'} />

        <div className="space-y-20">
          {processData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
              className={`flex flex-col md:flex-row items-center gap-10
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
              transition-all duration-700 ease-out
              ${visible.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
                }`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-lime-600 rounded-2xl -z-10"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="shadow-2xl rounded-2xl w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-semibold text-blue-900 dark:text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-900 dark:text-gray-200 leading-relaxed">
                  {item.text}
                </p>
                <ButtonAll text='Learn More...' type='greenblue' size={'py-2 px-4'} extraClass={'mt-5'}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
