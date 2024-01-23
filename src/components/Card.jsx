import "./style.css";
export default function Card({ image }) {
  return (
    <div className="App-container">
      <img src={image} alt="qr-code" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take yout coding skills to
        the next level
      </p>
    </div>
  );
}
