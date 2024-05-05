import React from "react";
import Alert from "react-popup-alert";
import { useNavigate } from "react-router-dom";
const Popup = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = React.useState({
    type: "success",
    text: "You're now on our list and will enjoy premium services for a month. Keep an eye out for updates as our platform gets ready to fully activate in your region!",
    show: true,
  });

  function onCloseAlert() {
    setAlert({
      type: "",
      text: "",
      show: false,
    });
    navigate("/");
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Alert
        header={"Success"}
        btnText={"OK"}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={false}
        showBorderBottom={false}
        alertStyles={{
          width: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          fontFamily: "Arial, sans-serif",
          paddingBottom: "10px",
        }}
        headerStyles={{
          backgroundColor: "#4caf50",
          color: "#ffffff",
          padding: "12px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          textAlign: "center",
          fontSize: "18px",
        }}
        textStyles={{
          padding: "16px",
          textAlign: "justify",
          fontSize: "16px",
          color: "#333333",
        }}
        buttonStyles={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          marginTop: "16px",
          backgroundColor: "#4caf50",
          color: "#ffffff",
          padding: "10px 20px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          outline: "none",
          width: "50px",
        }}
      />
    </div>
  );
};

export default Popup;
