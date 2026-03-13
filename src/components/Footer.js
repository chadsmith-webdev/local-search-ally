export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--surface)",
      borderTop: "1px solid var(--duke)",
      padding: "2rem",
      textAlign: "center",
      color: "var(--muted)",
      fontSize: "0.85rem",
      marginTop: "auto",
    }}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Local Search Ally · Built by{" "}
        <a href="https://localsearchally.com" style={{ color: "var(--carolina)", textDecoration: "none" }}>
          localsearchally.com
        </a>
      </p>
    </footer>
  );
}