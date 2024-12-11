"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: {
    "template-slug": string;
  };
}
const CreateNewContent = (props: Props) => {
  const generateAiContent = (formData: any) => {};
  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug == props.params["template-slug"]
  );
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col space-y-8">
      {/* Back Button Section */}
      <div className="flex items-center space-x-4">
        <Link href="/dashboard">
          <Button className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
            <ArrowLeft className="text-white" />
            <span>Back</span>
          </Button>
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(e: any) => generateAiContent(e)}
        />
        {/* Output Section */}
        <OutputSection />
      </div>
    </div>
  );
};

export default CreateNewContent;
