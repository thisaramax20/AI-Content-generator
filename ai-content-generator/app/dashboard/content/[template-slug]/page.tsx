import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import Templates from "@/app/(data)/Templates";

interface Props {
  params: {
    "template-slug": string;
  };
}
const CreateNewContent = (props: Props) => {
  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug == props.params["template-slug"]
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <FormSection selectedTemplate={selectedTemplate} />
      <OutputSection />
    </div>
  );
};

export default CreateNewContent;
