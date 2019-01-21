import React from "react";

export default function PageHeader({ siderStatus, onRouteChange }) {
  return (
    <div
      className={siderStatus}
      style={{ cursor: "pointer" }}
      onClick={onRouteChange.bind(this, "home")}
    >
      <p className="title">Aplikasi Kuesioner 360</p>
      <p className="sub-title">Penilaian Kinerja dengan Metode 360</p>
    </div>
  );
}
