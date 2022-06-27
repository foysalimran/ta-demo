/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Accordion = ({ faq }) => {
  const { title, bgGradient, allFaq, images } = faq;
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const bgColor = {
    backgroundImage: bgGradient,
  };

  return (
    <section className="section-padding" style={bgColor}>
      <div className="container">
        <div className="mb-12 text-center">
          <h3 className="m-1 text-3xl">{title}</h3>
          <p>Here are some frequently asked questions by our users.</p>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 lg:col-span-5">
            <img
              src={images}
              className="w-full rounded"
              alt="Question image"
            />
          </div>
          <div className="lg:col-span-1 hidden lg:block"></div>
          <div className="col-span-12 lg:col-span-6">
            {allFaq.map((item, i) => (
              // eslint-disable-next-line react/jsx-key
              <div className="bg-white item" key={i}>
                <div className="px-6 py-4 title">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => toggle(i)}
                  >
                    <span>
                      {selected === i ? <FaMinusCircle /> : <FaPlusCircle />}
                    </span>
                    <h3 className="mb-0 text-xl">{item.title} </h3>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    <p className="mt-3">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
