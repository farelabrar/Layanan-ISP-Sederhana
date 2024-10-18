// script.js

let balance = 50000; // Saldo pengguna

// Fungsi untuk validasi kode transfer
function validateTransferCode() {
    const transferCode = document.getElementById('transferCode').value;
    
    if (transferCode === '*858#') {
        nextStep('step1', 'step2'); // Lanjutkan ke pilihan layanan
    } else {
        document.getElementById('result').innerHTML = 'Kode transfer tidak valid.';
    }
}

// Fungsi untuk melanjutkan ke layanan yang dipilih
function nextService() {
    const selectedService = parseInt(document.getElementById('serviceOption').value);

    if (selectedService === 1) {
        nextStep('step2', 'step3'); // Lanjutkan ke input nomor tujuan
    } else if (selectedService === 2) {
        document.getElementById('result').innerHTML = `Saldo Anda: Rp${balance}.`;
        document.getElementById('step2').style.display = 'none'; // Sembunyikan form layanan setelah cek saldo
    } else if (selectedService === 3) {
        document.getElementById('result').innerHTML = 'Layanan beli paket belum tersedia.';
        document.getElementById('step2').style.display = 'none';
    } else {
        document.getElementById('result').innerHTML = 'Layanan tidak valid.';
    }
}

// Fungsi untuk melanjutkan ke langkah berikutnya
function nextStep(currentStep, nextStep) {
    document.getElementById(currentStep).style.display = 'none';
    document.getElementById(nextStep).style.display = 'block';
}

// Fungsi untuk membatalkan input dan reset form
function cancel() {
    document.getElementById('result').innerHTML = 'Transaksi dibatalkan.';
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'none';
}

// Fungsi untuk memproses transfer pulsa
function processTransfer() {
    const destinationNumber = document.getElementById('destinationNumber').value;
    const transferAmount = parseInt(document.getElementById('transferAmount').value);

    // Cek saldo
    if (transferAmount <= balance) {
        balance -= transferAmount;
        document.getElementById('result').innerHTML = `Transfer berhasil! Anda telah mentransfer Rp${transferAmount} ke nomor ${destinationNumber}.<br>Sisa saldo Anda: Rp${balance}.`;
    } else {
        document.getElementById('result').innerHTML = 'Saldo tidak mencukupi.';
    }

    // Sembunyikan form input
    document.getElementById('step4').style.display = 'none';
}
