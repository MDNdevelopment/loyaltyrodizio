"use client";
import { useState, useEffect } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=io.walletpasses.android&hl=en";

export default function AndroidWalletGuide() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (/android/i.test(navigator.userAgent)) {
      setIsExpanded(true);
    }
  }, []);

  return (
    <div className="w-4/5 md:w-2/5 mx-auto mb-6 border-l-4 border-primary-800 bg-red-50 rounded-r-md overflow-hidden">
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="w-full text-left px-4 py-4 font-semibold text-gray-800 flex justify-between items-center cursor-pointer transition-colors"
      >
        <div className="flex flex-col gap-0.5">
          <span>
            📱 Usuarios de Android: Descarga la app de billetera primero
          </span>
          {!isExpanded && (
            <span className="text-xs font-normal text-gray-500">
              Toca aquí para ver las instrucciones
            </span>
          )}
        </div>
        <span
          className={`text-xl flex-shrink-0 ml-2 ${!isExpanded ? "animate-bounce" : ""}`}
        >
          {isExpanded ? "▲" : "▼"}
        </span>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 text-gray-700 text-sm">
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>
              Descarga <strong>WalletPasses</strong> desde la Play Store.
            </li>
            <li>Vuelve aquí y completa el registro.</li>
            <li>
              Cuando recibas el correo, podrás guardar tu tarjeta fácilmente.
            </li>
          </ol>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
          >
            Descargar WalletPasses
          </a>
        </div>
      )}
    </div>
  );
}
