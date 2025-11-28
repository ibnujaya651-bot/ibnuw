function absen() {
    let nama = document.getElementById('nama').value;
    let kelas = document.getElementById('kelas').value;
    let status = document.getElementById('status').value;
    let tabel = document.getElementById('tabel');

    if (!nama || !kelas || !status) {
        alert("Harap lengkapi semua data!");
        return;
    }

    let row = `
        <tr>
            <td>${nama}</td>
            <td>${kelas}</td>
            <td>${status}</td>
            <td>${new Date().toLocaleString('id-ID')}</td>
        </tr>
    `;

    tabel.innerHTML += row;

    document.getElementById('nama').value = "";
    document.getElementById('kelas').value = "";
    document.getElementById('status').value = "";
}
