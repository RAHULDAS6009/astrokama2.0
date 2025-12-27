import React from "react";

const CircularAvatarCarousel: React.FC = () => {
  const services = [
    { name: "Gem Stone", color: "bg-[#c4b5a8]" },
    { name: "Rudraksha", color: "bg-[#c4b5a8]" },
    { name: "Tantra & Kavach", color: "bg-[#c4b5a8]" },
    { name: "Auspicious Puja", color: "bg-[#c4b5a8]" },
    { name: "Vastu", color: "bg-[#c4b5a8]" },
    { name: "Reiki", color: "bg-[#c4b5a8]" },
    { name: "Modern Astrology Remedies", color: "bg-[#ff6b35]" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2d0f2e] overflow-hidden">
      <style jsx>{`
        @keyframes spin-out {
          from {
            rotate: 0;
          }
          to {
            rotate: 360deg;
          }
        }
        @keyframes spin-in {
          from {
            transform: rotate(0);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .container-circular {
          position: relative;
          aspect-ratio: 1 / 1;
          pointer-events: none;
          display: inline-grid;
          border-radius: 9999px;
          width: calc(120px * 3);
          border: 6px solid #ff6b35;
          transition: box-shadow 0.3s ease-in-out;
          animation: spin-out 30s linear infinite;
        }

        .item-circular {
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          grid-area: 1 / 1;
          width: 120px;
          aspect-ratio: 1 / 1;
          pointer-events: auto;
          border-radius: 9999px;
          animation: spin-in 30s linear infinite reverse;
          cursor: pointer;
        }

        .item-circular:nth-child(1) {
          offset: circle(calc(120px / (2 * 0.4339) + 30px)) calc(100% * 0 / 7)
            0deg;
        }
        .item-circular:nth-child(2) {
          offset: circle(calc(120px / (2 * 0.4339) + 30px)) calc(100% * 1 / 7)
            0deg;
        }
        .item-circular:nth-child(3) {
          offset: circle(calc(120px / (2 * 0.4339) + 30px)) calc(100% * 2 / 7)
            0deg;
        }
        .item-circular:nth-child(4) {
          offset: circle(calc(120px / (2 * 0.4339) + 30px)) calc(100% * 3 / 7)
            0deg;
        }
        .item-circular:nth-child(5) {
          offset: circle(calc(120px / (2 * 0.4339) + 30px)) calc(100% * 4 / 7)
            0deg;
        }
        .item-circular:nth-child(6) {
          offset: circle(calc(120px / (2 * 0.4339) + 30px)) calc(100% * 5 / 7)
            0deg;
        }
        .item-circular:nth-child(7) {
          offset: circle(calc(120px / (2 * 0.4339) + 30px)) calc(100% * 6 / 7)
            0deg;
        }

        .circle-item {
          width: inherit;
          height: inherit;
          pointer-events: auto;
          border-radius: 9999px;
          border: 3px solid #ff6b35;
          transition: box-shadow 0.3s ease-in-out, scale 0.3s ease-in-out,
            border 0.3s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: #000;
        }

        .item-circular:hover {
          z-index: 2;
        }

        .item-circular:hover .circle-item {
          scale: 1.5;
          border-color: #ffdd00;
          box-shadow: 0 0 1rem #ffdd00;
        }

        .item-circular:hover ~ .item-circular .circle-item {
          scale: 0.6;
        }

        .item-circular:has(~ .item-circular:hover) .circle-item {
          scale: 0.6;
        }

        .container-circular::before {
          content: "";
          z-index: -1;
          border: inherit;
          position: absolute;
          width: 120px;
          aspect-ratio: 1 / 1;
          border-radius: 0.25rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.3s ease-in-out, border-radius 0.3s ease-in-out,
            border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .container-circular::after {
          content: "";
          z-index: -1;
          inset: -6px;
          width: inherit;
          height: inherit;
          border: inherit;
          position: absolute;
          border-radius: inherit;
          animation: spin-in 30s linear infinite reverse;
          transition: scale 0.3s ease-in-out, border-radius 0.3s ease-in-out,
            border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .container-circular:has(.item-circular:hover) {
          animation-play-state: paused;
          box-shadow: 0 0 60px 12px #ff6b35 inset, 0 0 21px 15px #2d0f2e;
        }

        .container-circular:has(.item-circular:hover) .item-circular {
          animation-play-state: paused;
        }

        .container-circular:has(.item-circular:hover)::before {
          border-width: 2px;
          border-radius: inherit;
          border-color: #ffdd00;
          transform: scale(4) translate(calc(-50% / 4), calc(-50% / 4));
          box-shadow: 0 0 15px #ffdd00, 0 0 15px #ff6b35 inset;
        }

        .container-circular:has(.item-circular:hover)::after {
          scale: 0.3;
          border-width: 18px;
          border-radius: 3rem;
          border-color: #ffdd00;
          box-shadow: 0 0 120px #ffdd00 inset;
        }
      `}</style>

      <div className="container-circular">
        {services.map((service, index) => (
          <div key={index} className="item-circular">
            <div className={`circle-item ${service.color}`}>{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularAvatarCarousel;
