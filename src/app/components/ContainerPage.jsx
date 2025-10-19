export default function ContainerPage({ children }) {
  return (
    <div style={{ padding: "1rem", display: "flex", flexDirection: "row", gap: "3rem" }}>
      {children}
    </div>
  );
}