import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./QrCodeScanner.css";

function QrCodeScanner() {
  const [data, setData] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      setData(data);
    }
    console.log(data);
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="camera-container">
      <h2 className="scan-head">QR Scanner</h2>

      <div>
        <div>
        <QrReader
        className="camera"
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
        />
        </div>
      </div>
      <div className="scan-result">
        <h3>defaultValue={data}</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
          <a href={data} target="_blank" rel="noreferrer"><button className="link-btn">Open Link</button></a>
      </div>
    </div>
  );
}

export default QrCodeScanner;
