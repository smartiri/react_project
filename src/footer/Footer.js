import "../footer/Footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="footer">
      <div>
        <p className="footer-nav">©SM-{currentYear}</p>
      </div>
    </footer>
  );
}
