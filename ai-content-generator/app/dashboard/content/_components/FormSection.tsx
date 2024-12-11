import React from "react";
import { TEMPLATE } from "../../_components/TemplateList";
import Image from "next/image";

interface PROPS {
  selectedTemplate: TEMPLATE | undefined;
}
const FormSection = ({ selectedTemplate }: PROPS) => {
  return (
    <div className="p-5">
      <Image src={selectedTemplate?.icon} alt="logo" width={70} height={70} />
      <h2>{selectedTemplate?.name}</h2>
      <p>{selectedTemplate?.desc}</p>

      <form>
        {selectedTemplate?.form?.map((item, index) => (
          <div>
            <label>{item.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormSection;
