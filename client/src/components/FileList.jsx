export default function FileList({ files }) {
  return (
    <div>
      {files.map((f) => (
        <div
          key={f.id}
          className="file"
          onClick={() => window.api.openFile(f.path)}
        >
          {f.name} ({f.category})
        </div>
      ))}
    </div>
  );
}