export default function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Search files..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
