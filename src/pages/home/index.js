import { Wrapper, Card, Input, Button, A } from './styles';
import QRCode from 'qrcode.react';
import { useState, useEffect } from 'react';

export default function Home(){
    const [ link, setLink ] = useState("");
    const [ code, setCode ] = useState("https://github.com/GustavoOliveira3");
    
    function handleCode(event){
        setCode(link);
        event.preventDefault();
    }

    function handleChange(event){
        setLink(event.target.value);
    }
    
    useEffect(() => {
        document.title = "QR Code Generator";
    }, []);

    function downloadQr(){
        const qrCodeURL = document.getElementById('qrCode')
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

    return (
        <Wrapper>
            <h1>QR Code Generator </h1>
                <Card>
                    <Input type="text" onChange={handleChange} placeholder="Type a url" />
                    <Button onClick={handleCode}>Generate Qr Code</Button>
                    <QRCode
                     id="qrCode" 
                     size={256} 
                     value={code}
                    />
                    <A href={code}>{code}</A>
                    <Button onClick={downloadQr}>Download Code</Button>
                </Card>
        </Wrapper>
        
    )
}
