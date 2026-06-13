import { useState } from "react";
import { useFiles } from "../hooks/useFiles";
import UploadBox from "../components/UploadBox";
import FileList from "../components/FileList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const { files, loadFiles } = useFiles();
  const [search, setSearch] = useState("");

  const filtered = files.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1> Doc Manager</h1>

      <SearchBar setSearch={setSearch} />
      <UploadBox onUpload={loadFiles} />
      <FileList files={filtered} />
    </div>
  );
}
