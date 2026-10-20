// TEMPORARY: deliberate test error. While SHOW_TEST_ERROR is true, the whole site is replaced
// by a full-screen red error (see app/page.tsx).
// TO REMOVE LATER: set SHOW_TEST_ERROR to false (site comes back), then optionally delete this
// file and the import + `if (SHOW_TEST_ERROR)` lines in app/page.tsx.
export const SHOW_TEST_ERROR = true;

export default function TestErrorBanner() {
  return (
    <div
      role="alert"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#d00000",
        color: "#fff",
        padding: "2rem 1.25rem",
        textAlign: "center",
        fontFamily: "var(--font-poppins), system-ui, sans-serif",
      }}
    >
      <p style={{ fontSize: "clamp(3.5rem, 16vw, 11rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em", margin: 0 }}>
        ERROR
      </p>
      <p style={{ fontSize: "clamp(1.1rem, 3vw, 1.8rem)", fontWeight: 600, margin: "1.5rem 0 0", maxWidth: "34rem" }}>
        Website content could not be found.
      </p>
    </div>
  );
}
