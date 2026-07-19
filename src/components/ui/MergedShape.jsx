// ============================================================
// MergedShape.jsx — Dekoratif background pill untuk NavLink aktif
// Digunakan oleh Navbar desktop sebagai highlight efek hover/active
// ============================================================

/**
 * @param {object}  props
 * @param {string}  [props.fill="#ffffff"]  - Warna fill shape
 * @param {*}       [props.children]        - Child nodes opsional
 * @param {object}  [props.style]           - Style tambahan untuk wrapper
 * @param {string}  [props.className]       - Class tambahan untuk wrapper
 */
export default function MergedShape({
  fill = "#ffffff",
  children,
  style: containerStyle,
  className = "",
  ...props
}) {
  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{ position: "absolute", width: 90, height: 38, ...containerStyle }}
      {...props}
    >
      {/* Pill tengah (vertikal) */}
      <div
        style={{
          position: "absolute",
          left: 30, top: 3,
          width: 30, height: 35,
          backgroundColor: fill,
          borderRadius: "18px",
        }}
      />
      {/* Pill kiri */}
      <div
        style={{
          position: "absolute",
          left: 0, top: 0,
          width: 45, height: 30,
          backgroundColor: fill,
          borderRadius: "18px 0 0 18px",
        }}
      />
      {/* Pill kanan */}
      <div
        style={{
          position: "absolute",
          left: 45, top: 0,
          width: 45, height: 30,
          backgroundColor: fill,
          borderRadius: "0 18px 18px 0",
        }}
      />
      {children}
    </div>
  );
}
