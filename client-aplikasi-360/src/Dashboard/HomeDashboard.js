import React from "react";
import { Button } from "antd";

export default function HomeDashboard({ onRouteChange }) {
  return (
    <div className="home-content">
      <p className="sub-title">
        Harap Register untuk mengisi kuesioner ini jika Anda belum pernah
        menggunakan aplikasi ini sebelumnya
      </p>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={onRouteChange.bind(this, "register")}
      >
        Register
      </Button>
      <br />
      <br />
      <p className="sub-title">
        Harap Login jika Anda sudah menggunakan ini aplikasi ini melanjutkan
        mengisi kuesioner
      </p>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={onRouteChange.bind(this, "signin")}
        style={{ marginRight: 20 }}
      >
        Admin Login
      </Button>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={onRouteChange.bind(this, "user-login")}
      >
        Responden Login
      </Button>
    </div>
  );
}
