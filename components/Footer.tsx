import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()} {business.name}. Cabro works, lawns and garden design in Kenya.
        </p>
        <p>WhatsApp {business.phoneDisplay}</p>
      </div>
    </footer>
  );
}
