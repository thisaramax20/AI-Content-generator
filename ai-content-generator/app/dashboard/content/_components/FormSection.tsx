"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateList";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

interface PROPS {
  selectedTemplate: TEMPLATE | undefined;
  userFormInput: any;
  loading: boolean;
}
const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (e: any) => {
    console.log(process.env.Google_GEMINI_API_KEY);

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic
    userFormInput(formData);
  };
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
      {/* Logo and Template Name Section */}
      <div className="flex items-center space-x-4">
        <Image
          src={selectedTemplate?.icon}
          alt="logo"
          width={70}
          height={70}
          className="rounded-full"
        />
        <h2 className="text-2xl font-semibold text-gray-800">
          {selectedTemplate?.name}
        </h2>
      </div>

      {/* Template Description */}
      <p className="text-gray-600 text-lg">{selectedTemplate?.desc}</p>

      {/* Form Section */}
      <form onSubmit={onSubmit} className="space-y-4">
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              {item.label}
            </label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        ))}

        {/* Submit Button */}
        <Button
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        >
          {loading && <Loader className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
