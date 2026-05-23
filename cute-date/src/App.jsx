import React from "react";

export default function CuteDateInvite() {

  const [page, setPage] = React.useState(0);

  const [noPos, setNoPos] = React.useState({
    x: 0,
    y: 0,
  });

  const [yesScale, setYesScale] = React.useState(1);

  const [time, setTime] = React.useState("");

  const [selectedPlans, setSelectedPlans] = React.useState([]);

  const [nightPlan, setNightPlan] = React.useState("");

  const allPlans = [
    "🛍️ Shopping",
    "🎮 Main arcade",
    "🍰 Beli dessert",
  ];

  const moveNoButton = () => {

    const randomX = Math.random() * 350 - 175;

    const randomY = Math.random() * 250 - 125;

    setNoPos({
      x: randomX,
      y: randomY,
    });

    setYesScale((prev) => prev + 0.12);

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 flex items-center justify-center p-6 overflow-hidden relative font-sans">

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(70)].map((_, i) => (

          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 120}px`,
              fontSize: `${10 + Math.random() * 22}px`,
              animation: `floatUp ${5 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.3 + Math.random() * 0.7,
              filter: "blur(0.2px)",
            }}
          >
            💖
          </div>

        ))}

      </div>

      {/* HEART ANIMATION */}
      <style>
        {`

          @keyframes floatUp {

            0% {
              transform: translateY(0vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            25% {
              transform: translateY(-25vh) translateX(30px) rotate(8deg);
            }

            50% {
              transform: translateY(-50vh) translateX(-30px) rotate(-8deg);
            }

            75% {
              transform: translateY(-75vh) translateX(20px) rotate(5deg);
            }

            100% {
              transform: translateY(-130vh) translateX(-20px) rotate(-5deg);
              opacity: 0;
            }

          }

        `}
      </style>

      {/* MAIN CARD */}
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-[40px] p-10 w-full max-w-5xl min-h-[650px] text-center relative z-10 border border-pink-200">

        {/* PAGE 1 */}
        {page === 0 && (

          <div className="space-y-8 flex flex-col items-center justify-center min-h-[550px]">

            <div className="text-7xl">
              💌
            </div>

            <h1 className="text-6xl font-bold text-rose-500 leading-snug">
              Wanna go out with me?
            </h1>

            <p className="text-gray-600 text-2xl">
              i already planned a cute day for us 😋
            </p>

            <div className="relative h-52 flex items-center justify-center gap-8 mt-6">

              {/* YES BUTTON */}
              <button
                onClick={() => setPage(1)}
                style={{
                  transform: `scale(${yesScale})`,
                }}
                className="bg-rose-500 hover:bg-rose-600 transition-all text-white px-12 py-5 rounded-3xl text-2xl font-semibold shadow-xl"
              >
                YES 💖
              </button>

              {/* NO BUTTON */}
              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                }}
                className="bg-gray-100 hover:bg-gray-200 transition-all px-12 py-5 rounded-3xl text-2xl font-semibold absolute"
              >
                no 🙄
              </button>

            </div>

            {/* TEXT AFTER NO BUTTON MOVED */}
            {yesScale > 1 && (

              <p className="text-lg text-gray-500 mt-4">
                kenapa tombolnya rusak ya 🤨
              </p>

            )}

          </div>

        )}

        {/* PAGE 2 */}
        {page === 1 && (

          <div className="space-y-8 flex flex-col items-center justify-center min-h-[550px]">

            <div className="text-7xl">
              🎀
            </div>

            <h1 className="text-5xl font-bold text-rose-500">
              YAYYYYY 💕
            </h1>

            <p className="text-gray-600 text-2xl">
              aku jemput jam berapa?
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6 w-full max-w-xl">

              {["12.00", "13.00", "14.00", "15.00"].map((t) => (

                <button
                  key={t}
                  onClick={() => {

                    setTime(t);

                    setPage(2);

                  }}
                  className="bg-pink-100 hover:bg-pink-200 p-6 rounded-3xl text-2xl font-medium transition-all shadow-lg"
                >
                  {t}
                </button>

              ))}

            </div>

          </div>

        )}

        {/* PAGE 3 */}
        {page === 2 && (

          <div className="space-y-8 flex flex-col items-center justify-center min-h-[550px]">

            <div className="text-7xl">
              🍜
            </div>

            <h1 className="text-5xl font-bold text-rose-500">
              First date agenda
            </h1>

            <div className="bg-pink-50 rounded-[30px] p-8 text-left space-y-4 text-xl w-full max-w-2xl shadow-inner">

              <p>
                1. makan lucu dulu 🍜
              </p>

              <p>
                2. muter muter sambil ngobrol 🎀
              </p>

              <p>
                {selectedPlans.length + 3}. sekarang pilih lagi 😋
              </p>

            </div>

            <div className="grid grid-cols-1 gap-5 mt-4 w-full max-w-xl">

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
                    className="bg-rose-100 hover:bg-rose-200 p-6 rounded-3xl text-2xl font-medium transition-all shadow-lg"
                  >
                    {item}
                  </button>

              ))}

            </div>

          </div>

        )}

        {/* PAGE 4 */}
        {page === 3 && (

          <div className="space-y-8 flex flex-col items-center justify-center min-h-[550px]">

            <div className="text-7xl">
              🌙
            </div>

            <h1 className="text-5xl font-bold text-rose-500">
              Special night date ✨
            </h1>

            <p className="text-gray-600 text-2xl">
              malemnya kita mau ngapain 😋
            </p>

            <div className="grid grid-cols-1 gap-5 mt-4 w-full max-w-xl">

              <button
                onClick={() => {

                  setNightPlan(
                    "APD painting date kayak 10 things i hate about you 🎨"
                  );

                  setPage(4);

                }}
                className="bg-pink-100 hover:bg-pink-200 p-6 rounded-3xl text-2xl transition-all shadow-lg"
              >
                🎨 APD painting date
              </button>

              <button
                onClick={() => {

                  setNightPlan(
                    "nongkrong sambil street food-an dan ngobrol random 🌃"
                  );

                  setPage(4);

                }}
                className="bg-pink-100 hover:bg-pink-200 p-6 rounded-3xl text-2xl transition-all shadow-lg"
              >
                🌃 Nongkrong + street food
              </button>

            </div>

          </div>

        )}

        {/* FINAL PAGE */}
        {page === 4 && (

          <div className="space-y-8 flex flex-col items-center justify-center min-h-[550px] py-8">

            <div className="text-8xl">
              💖
            </div>

            <h1 className="text-6xl font-bold text-rose-500">
              It’s a date then.
            </h1>

            <div className="bg-pink-50 rounded-[35px] p-8 text-left shadow-inner space-y-5 text-xl w-full max-w-3xl">

              <p>
                ⏰{" "}
                <span className="font-semibold">
                  Jam jemput:
                </span>{" "}
                {time}
              </p>

              <p>
                🎀{" "}
                <span className="font-semibold">
                  Activities:
                </span>{" "}
                {selectedPlans.join(" → ")}
              </p>

              <p>
                🌙{" "}
                <span className="font-semibold">
                  Night plan:
                </span>{" "}
                {nightPlan}
              </p>

              <p>
                💌{" "}
                <span className="font-semibold">
                  Dress code:
                </span>{" "}
                why dress code? you'd look pretty in anything anyway mwehehehe 😋
              </p>

            </div>

            <div className="bg-white rounded-[30px] p-6 border border-pink-200 shadow-md w-full max-w-2xl">

              <p className="italic text-gray-600 text-2xl">
                “still choosing you, always.”
              </p>

            </div>

            <p className="text-gray-500 text-xl">
              abis itu baru aku anterin kamu pulang 💕
            </p>

            <button
              onClick={() => {

                setPage(0);

                setYesScale(1);

                setNoPos({
                  x: 0,
                  y: 0,
                });

                setTime("");

                setSelectedPlans([]);

                setNightPlan("");

              }}
              className="mt-4 bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-3xl text-2xl font-semibold transition-all shadow-xl"
            >
              replay 💞
            </button>

          </div>

        )}

      </div>

    </div>

  );
}