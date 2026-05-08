import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(true);

  const startMusic = async () => {
    try {
      await videoRef.current.play();
      console.log("Music playing");
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibility = async () => {
      if (document.hidden) {
        console.log("Tab hidden → pausing music");
        video.pause();
      } else {
        console.log("Tab active → resuming music");
        try {
          await video.play();
        } catch (err) {
          console.log("Resume blocked:", err);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src="/krishna_flute.mp4"
        loop
        playsInline
        style={{ display: "none" }}
      />

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(20,20,20,0.85), rgba(0,0,0,0.95))",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999999,
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(10,10,10,0.98))",
              padding: "50px 40px",
              borderRadius: "28px",
              textAlign: "center",
              color: "#f5f1e8",
              maxWidth: "420px",
              width: "90%",
              border: "1px solid rgba(240,191,92,0.2)",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                marginBottom: "14px",
                fontFamily: "serif",
                color: "#f5e6c8",
              }}
            >
              Welcome
            </h2>

            <p
              style={{
                marginBottom: "35px",
                opacity: 0.75,
                lineHeight: "1.7",
              }}
            >
              Enter the space of healing, calm, and inner balance.
            </p>

            <button
              onClick={startMusic}
              style={{
                padding: "14px 30px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                background:
                  "linear-gradient(135deg, #f0bf5c, #c8922e)",
                color: "#111",
              }}
            >
              Enter
            </button>
          </div>
        </div>
      )}
    </>
  );
}