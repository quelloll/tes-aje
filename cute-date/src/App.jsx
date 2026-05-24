import React from "react";

export default function CuteDateInvite() {

  const [page, setPage] = React.useState(0);

  const [noPos, setNoPos] = React.useState({
    x: 0,
    y: 0,
  });

  const [yesScale, setYesScale] = React.useState(1);

  const [dateTime, setDateTime] = React.useState("");

  const [selectedPlans, setSelectedPlans] = React.useState([]);

  const [nightPlan, setNightPlan] = React.useState("");

  const allPlans = [
    "🛍️ Shopping",
    "🎮 Main arcade",
    "🍰 Dessert date",
  ];

  const moveNoButton = () => {

    const randomX = Math.random() * 140 - 70;

    const randomY = Math.random() * 80 - 40;

    setNoPos({
      x: randomX,
      y: randomY,
    });

    setYesScale((prev) => prev + 0.06);

  };

  return (

    <div className="h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 flex items-center justify-center relative font-sans p-0">

      {/* MUSIC */}
      <audio id="bgm" loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(18)].map((_, i) => (

          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 40}px`,
              fontSize: `${5 + Math.random() * 8}px`,
              animation: `floatUp ${5 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.35,
            }}
          >
            💖
          </div>

        ))}

      </div>

      <style>
        {`

          @keyframes floatUp {

            0% {
              transform: translateY(0vh);
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            100% {
              transform: translateY(-105vh);
              opacity: 0;
            }

          }

        `}
      </style>

      {/* MAIN CARD */}
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-[22px] p-2 w-full max-w-2xl h-[68vh] text-center relative z-10 border border-pink-200 overflow-hidden">

        {/* PAGE 1 */}
        {page === 0 && (

          <div className="space-y-1 flex flex-col items-center justify-center h-full">

            <div className="text-2xl">
              💌
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-rose-500 leading-tight">
              Wanna go out with me?
            </h1>

            <p className="text-gray-600 text-xs">
              i already planned a cute day for us 😋
            </p>

            <div className="relative h-14 flex items-center justify-center gap-3">

              {/* YES */}
              <button
                onClick={() => {

                  setPage(1);

                  const audio = document.getElementById("bgm");

                  if (audio) {
                    audio.currentTime = 0;
                    audio.play().catch(() => {});
                  }

                }}
                style={{
                  transform: `scale(${yesScale})`,
                }}
                className="bg-rose-500 hover:bg-rose-600 transition-all text-white px-4 py-1 rounded-3xl text-xs font-semibold shadow-xl z-10"
              >
                YES 💖
              </button>

              {/* NO */}
              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                }}
                className="bg-gray-100 hover:bg-gray-200 transition-all px-4 py-1 rounded-3xl text-xs font-semibold absolute"
              >
                no 🙄
              </button>

            </div>

            {yesScale > 1 && (

              <p className="text-[9px] text-gray-500">
                kenapa tombolnya rusak ya 🤨
              </p>

            )}

          </div>

        )}

        {/* PAGE 2 */}
        {page === 1 && (

          <div className="space-y-1 flex flex-col items-center justify-center h-full">

            <div className="text-2xl">
              📅
            </div>

            <h1 className="text-xl font-bold text-rose-500">
              kapan aku jemput? 💕
            </h1>

            <p className="text-gray-600 text-xs">
              pilih tanggal + jam 😋
            </p>

            <div className="bg-pink-50 p-2 rounded-[16px] shadow-xl border border-pink-100 w-full max-w-xs">

              <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="w-full p-2 rounded-xl text-xs border border-pink-200 outline-none"
              />

              <button
                disabled={!dateTime}
                onClick={() => setPage(2)}
                className={`mt-2 w-full p-2 rounded-xl text-xs font-semibold transition-all ${
                  dateTime
                    ? "bg-rose-500 hover:bg-rose-600 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                continue 💌
              </button>

            </div>

          </div>

        )}

        {/* PAGE 3 */}
        {page === 2 && (

          <div className="space-y-1 flex flex-col items-center justify-center h-full">

            <div className="text-2xl">
              💌
            </div>

            <h1 className="text-xl font-bold text-rose-500">
              date agenda
            </h1>

            <div className="bg-pink-50 rounded-[16px] p-2 text-left space-y-1 text-xs w-full max-w-md shadow-inner">

              <p>1. makan lucu dulu 🍜</p>

              <p>2. ngobrol lucu 🎀</p>

              <p>
                {selectedPlans.length + 3}. pilih lagi 😋
              </p>

            </div>

            <div className="grid grid-cols-1 gap-1 w-full max-w-xs">

              {allPlans
                .filter((item) => !selectedPlans.includes(item))
                .map((item) => (

                  <button
                    key={item}
                    onClick={() => {

                      const updatedPlans = [
                        ...selectedPlans,
                        item,
                      ];

                      setSelectedPlans(updatedPlans);

                      if (
                        updatedPlans.length === allPlans.length
                      ) {

                        setPage(3);

                      }

                    }}
                    className="bg-rose-100 hover:bg-rose-200 p-2 rounded-xl text-xs font-medium transition-all shadow-lg"
                  >
                    {item}
                  </button>

              ))}

            </div>

          </div>

        )}

        {/* PAGE 4 */}
        {page === 3 && (

          <div className="space-y-1 flex flex-col items-center justify-center h-full">

            <div className="text-2xl">
              🌙
            </div>

            <h1 className="text-xl font-bold text-rose-500">
              Special night ✨
            </h1>

            <p className="text-gray-600 text-xs">
              pilih malemnya 😋
            </p>

            <div className="grid grid-cols-1 gap-1 w-full max-w-xs">

              <button
                onClick={() => {

                  setNightPlan(
                    "APD painting 🎨"
                  );

                  setPage(4);

                }}
                className="bg-pink-100 hover:bg-pink-200 p-2 rounded-xl text-xs transition-all shadow-lg"
              >
                🎨 APD painting
              </button>

              <button
                onClick={() => {

                  setNightPlan(
                    "street food 🌃"
                  );

                  setPage(4);

                }}
                className="bg-pink-100 hover:bg-pink-200 p-2 rounded-xl text-xs transition-all shadow-lg"
              >
                🌃 Street food
              </button>

            </div>

          </div>

        )}

        {/* FINAL */}
        {page === 4 && (

          <div className="space-y-1 flex flex-col items-center justify-center h-full">

            <div className="text-3xl">
              💖
            </div>

            <h1 className="text-2xl font-bold text-rose-500">
              It’s a date then.
            </h1>

            <div className="bg-pink-50 rounded-[16px] p-2 text-left shadow-inner space-y-1 text-xs w-full max-w-md">

              <p>
                📅 <span className="font-semibold">Date:</span>{" "}
                {new Date(dateTime).toLocaleString()}
              </p>

              <p>
                🎀 <span className="font-semibold">Activities:</span>{" "}
                {selectedPlans.join(" → ")}
              </p>

              <p>
                🌙 <span className="font-semibold">Night:</span>{" "}
                {nightPlan}
              </p>

            </div>

            <div className="bg-white rounded-[14px] p-2 border border-pink-200 shadow-md w-full max-w-sm">

              <p className="italic text-gray-600 text-xs">
                “still choosing you, always.”
              </p>

            </div>

            <button
              onClick={() => {

                setPage(0);

                setYesScale(1);

                setNoPos({
                  x: 0,
                  y: 0,
                });

                setDateTime("");

                setSelectedPlans([]);

                setNightPlan("");

              }}
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-1 rounded-3xl text-xs font-semibold transition-all shadow-xl"
            >
              replay 💞
            </button>

          </div>

        )}

      </div>

    </div>

  );

}