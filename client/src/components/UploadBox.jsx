import { useDropzone } from "react-dropzone";

export default function UploadBox({ onUpload }) {
  const onDrop = async (files) => {
    for (let file of files) {
      const buffer = await file.arrayBuffer();

      await window.api.uploadFile({
        name: file.name,
        buffer: Array.from(new Uint8Array(buffer)),
        category: "Uploads",
      });
    }

    onUpload();
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      Drag & Drop Files Here
    </div>
  );
}
