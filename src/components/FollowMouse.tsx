import { useState, useEffect } from "react";

function FollowMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEvent = (e: MouseEvent) => {
    setPosition({ x: e.pageX - 15, y: e.pageY - 20 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseEvent);
    return () => {
      window.removeEventListener("mousemove", handleMouseEvent);
    };
  }, []);
  return (
    <div
      className="absolute  rounded-full dotcustom "
      style={{ left: position.x, top: position.y }}
    ></div>
  );
}

export default FollowMouse;
