"use client";

import { useState } from "react";

export default function FaqBtn() {
  const [tab, setTab] = useState("1");
  return (
    <div className="flex gap-6">
      <button
        className={`shuffle-btn ${tab === "1" ? "shuffle-act" : ""}`}
        onClick={() => {
          setTab("1");
        }}
      >
        Our Products
      </button>
      <button
        className={`shuffle-btn ${tab === "2" ? "shuffle-act" : ""}`}
        onClick={() => {
          setTab("2");
        }}
      >
        Calculators
      </button>
      <button
        className={`shuffle-btn ${tab === "3" ? "shuffle-act" : ""}`}
        onClick={() => {
          setTab("3");
        }}
      >
        Guides & FAQs
      </button>
    </div>
  );
}
