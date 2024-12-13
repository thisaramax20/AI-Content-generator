import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef: any = useRef("");

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Your Result</h2>
        <Button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center">
          <Copy className="mr-2" />
          Copy
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="hello react editor world!"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        className="border rounded-lg shadow-md"
      />
    </div>
  );
};

export default OutputSection;
