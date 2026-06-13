import { useEffect, useState } from "react";

export function useFiles() {
  const [files, setFiles] = useState([]);

  const loadFiles = async () => {
    const data = await window.api.getFiles();
    setFiles(data);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return { files, loadFiles };
}
