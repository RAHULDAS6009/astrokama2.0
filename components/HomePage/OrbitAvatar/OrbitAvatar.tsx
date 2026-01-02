import CustomLeafIcon from "@/components/MySvg";
import React from "react";



interface ServiceItem {
  type: "service";
  name: string;
  color: string;
}

interface ArrowItem {
  type: "arrow";
}

type CarouselItem = ServiceItem | ArrowItem;

const CircularAvatarCarousel: React.FC = () => {
  const centerService = {
    name: "Modern Astrology ",
    color: "bg-[#ffffd0] border-[#d90429] text-[#000]",
  };
  const services = [
    { name: "Gem Stone", color: "bg-[#cbf3f0] border-[#ff9f1c]" }, // Light Blue
    { name: "Rudraksha", color: "bg-[#ffe5d9] border-[#ff9f1c]" }, // Pale Pink
    { name: "Tantra & Kavach", color: "bg-[#ffadad] border-[#ff9f1c]" }, // Salmon
    { name: "Auspicious Puja", color: "bg-[#ffd6a5] border-[#ff9f1c]" }, // Orange
    { name: "Vastu", color: "bg-[#fdffb6] border-[#ff9f1c]" }, // Yellow
    { name: "Reiki", color: "bg-[#e0c3fc] border-[#ff9f1c]" }, // Lavender
  ];

  // Interleave services with arrows
  const itemsIncludingArrows: CarouselItem[] = services.flatMap((service) => [
    { type: "service", ...service } as ServiceItem,
    { type: "arrow" } as ArrowItem,
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center  overflow-hidden relative">
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
          width: calc(120px * 4);
          /* border: 6px solid #ff6b35; */ /* Removed border to match image clean look */
          transition: box-shadow 0.3s ease-in-out;
          animation: spin-out 40s linear infinite;
        }

        .item-circular {
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          grid-area: 1 / 1;
          width: 140px;
          height: 140px;
          aspect-ratio: 1 / 1;
          pointer-events: auto;
          border-radius: 9999px;
          cursor: pointer;
          
          /* Dynamic positioning */
          /* We have 2x items (services + arrows), so we divide by total items */
          offset: circle(calc(120px / (2 * 0.4339) + 90px)) calc(100% * var(--index) / var(--total)) 0deg;
        }

        /* Only service items need to counter-rotate to stay upright */
        .item-circular.is-service {
           animation: spin-in 40s linear infinite reverse;
        }

        /* Arrows should NOT counter-rotate, so they conform to the circle tangent (offset-rotate: auto) */
        .item-circular.is-arrow {
           animation: none;
           offset-rotate: auto;
        }

        .circle-item {
          width: inherit;
          height: inherit;
          pointer-events: auto;
          border-radius: 100%;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
          font-weight: 700;
          font-size: 1rem;
          color: #000;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .arrow-item {
          width: 80px; 
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle-item:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          z-index: 10;
        }

        .center-circle {
          position: absolute;
          /* No longer needs top/left/transform if we use flex centering or absolute centering relative to parent */
          /* But since parent is flex center, absolute with auto margins works perfectly if 0 inset, 
             OR just explicit centering for safety */
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          
          width: 180px;
          height: 180px;
          border-radius: 9999px;
          border: 6px solid #d90429;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.25rem;
          font-weight: 800;
          font-size: 1.2rem;
          color: #000;
          z-index: 5;
          pointer-events: auto;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        }

        /* Pause animation on hover */
        /* Note: center-circle is now outside container, so hovering it won't pause container by default selector. 
           But hovering items inside container still pauses. */
        .container-circular:has(.circle-item:hover) {
           animation-play-state: paused;
        }
        .container-circular:has(.circle-item:hover) .item-circular {
           animation-play-state: paused;
        }

      `}</style>
      
      {/* Center circle moved OUTSIDE the rotating container to keep text upright */}
      <div className={`center-circle ${centerService.color}`}>
          {centerService.name}
      </div>

      <div className="container-circular" style={{ "--total": itemsIncludingArrows.length } as React.CSSProperties}>
        {itemsIncludingArrows.map((item, index) => (
          <div 
            key={index} 
            className={`item-circular ${item.type === "service" ? "is-service" : "is-arrow"}`}
            style={{ "--index": index } as React.CSSProperties}
          >
            {item.type === "service" ? (
              <div className={`circle-item ${item.color} `}>
                {item.name}
              </div>
            ) : (
             <div className="arrow-item" style={{ transform: "rotate(40deg)" }}>
                <CustomLeafIcon width={70} height={70} />
             </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularAvatarCarousel;
