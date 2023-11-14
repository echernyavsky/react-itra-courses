import { useState } from "react";
import { uploadFile } from "../../shared/apis/uploadApi.ts";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface FileUploadProps {
  name: string;
  label: string;
  error: Merge<FieldError, FieldErrorsImpl<object>> | undefined;
  onChange: (...event: unknown[]) => void;
}

export default function FileUpload({
  name,
  label,
  onChange,
  error,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const fileId = await uploadFile(e.target.files[0]);
      onChange(fileId);
    }
  };

  return (
    <>
      <div>
        <label className="text-sm font-bold">{label}</label>
      </div>
      <div className="mt-1">
        <input
          className="block w-full text-sm text-slate-500
            file:mr-4 file:rounded-md file:border-0 file:bg-pink-50
            file:px-4 file:py-2 file:text-sm
            file:font-semibold file:text-pink-700
            hover:file:bg-pink-100"
          type="file"
          name={name}
          onChange={handleFileChange}
        />
      </div>
      {file && (
        <section className="text-sm text-slate-700">
          <img src={URL.createObjectURL(file)} />
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}
      {error && (
        <div className="relative flex-col gap-1.5 p-1 group-data-[has-helper=true]:flex">
          <div className="text-tiny text-danger">{error.message}</div>
        </div>
      )}
    </>
  );
}
