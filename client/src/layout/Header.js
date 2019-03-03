import React from "react";

export default function PageHeader({siderStatus}) {
  return (
    <div className={siderStatus}>
      <p className="title">Aplikasi Peta Dakwah Indonesia</p>
      <p className="sub-title">Cari Dai dan Khotib Anda di sini</p>
    </div>
  );
}
