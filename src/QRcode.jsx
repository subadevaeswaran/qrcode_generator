import { useState } from "react"


export const QRcode = () => {
  const [img , setImg] = useState("");
  const [loading, setloading] = useState(false);
  const [qrData,setqrData] = useState("https://www.google.com/");
  const [qrSize, setqrSize]= useState("150");
  async function generateQR (){
    setloading(true);
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    } catch(error) {
      console.error("Error in genrating the QR",error);
    } finally {
      setloading(false);
    }
  }
  function downloadQR(){
    fetch(img)
.then((response) => response.blob())
.then((blob) => {
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "qrcode.png";
document.body.appendChild(link);
link.click();
document.body.removeChild (link);
})
.catch((error) => {
console.error("Error downloading QR code", error);
});

  }
  return (
    <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait ..</p>}
      {img && <img src={img} className="qr-code-image" />}
        <div>
            <label htmlFor="dataInput" className='input-label'>
                Data for QR code:
            </label>
            <input type="text" value={qrData} id="dataInput" placeholder='Enter the for QR code' onChange={(e)=> setqrData(e.target.value)}/>
            <label htmlFor="sizeInput" className='input-label'>
                Image size (e.g, 150px) : 
            </label>
            <input type="text" value={qrSize} id="sizeInput" placeholder='Enter the image size' onChange={(e)=> setqrSize(e.target.value)}/>
            <button className="generate-button" onClick={generateQR}>Generate QR code</button>
            <button className="down-button" onClick={downloadQR}>Download QR code</button>
            <p className="footer">Designed By  <span className="esh"> Eshwar</span></p>
        </div>
    </div>
  )
}
