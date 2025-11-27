const btnGenerar = document.getElementById('btnGenerar');
const qrContenedor = document.getElementById('qr-code');

btnGenerar.addEventListener('click', generarQR);

function generarQR() {
    
    qrContenedor.innerHTML = "";

    const input1 = document.getElementById('input1').value.trim();
    const input2 = document.getElementById('input2').value.trim();
    const input3 = document.getElementById('input3').value.trim();
    const input4 = document.getElementById('input4').value.trim();

    if (!input1 && !input2 && !input3 && !input4) {
        alert("Ingresa al menos un texto para generar el QR");
        return;
    }

    const texto = `${input1} - ${input2} - ${input3} - ${input4}`;
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=350x200&data=${encodeURIComponent(texto)}`;

    const img = document.createElement('img');
    img.src = qrURL;
    img.alt = "Código QR";
    qrContenedor.appendChild(img);
}