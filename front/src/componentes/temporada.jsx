import React from "react";

export default function Temporadas({ temporada, setTemporada }) {
  return (
    <div className="w-min lg:w-90 mb-6">
      <select
        id="temporada"
        value={temporada}
        onChange={(e) => setTemporada(Number(e.target.value))}
        className="w-full bg-slate-800 text-white p-5 rounded shadow focus:outline-none focus:ring-2 focus:ring-slate-600 font-semibold"
      >
        {[1, 2].map((num) => (
          <option className="font-semibold " key={num} value={num}>
            {num} Temporada
          </option>
        ))}
      </select>
    </div>
  );
}
