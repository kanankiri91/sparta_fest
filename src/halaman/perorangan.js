import React from "react";
import './kelompok.css'

const Perorangan= () => {
  return (
    <div className="body">
    <div className="form" action="">
        <h1>Pendaftaran Sparta Fest 2022</h1>
        <section class="content">
            <div class="ketua">
                <label for=""><b>Bidang Perlombaan</b></label>
                <select name="lomba" id="lomba" required>
                    <option value="">Pilih Perlombaan</option>
                    <option value="1">Badminton</option>
                    <option value="3">Renang</option>
                    <option value="5">Atletik</option>
                    <option value="9">Olimpiade Matematika</option>
                    <option value="12">Painting</option>
                </select><br/>
    
                <label for=""><b>Nama Lengkap</b></label><br/>
                <input type="text" placeholder="Nama Lengkap" name="nama" id="nama" required/><br/>
    
                <label for=""><b>Nomor Induk Mahasiswa</b></label><br/>
                <input type="number" placeholder="NIM / KTM" name="nim" id="nim"/><br/>
    
                <label for=""><b>Email</b></label><br/>
                <input type="email" placeholder="Email" name="email" id="email"/><br/>
                
                <label for=""><b>Asal Universitas</b></label><br/>
                <input type="text" placeholder="Sekolah" name="sekolah" id="sekolah" required/><br/>
    
                <label for=""><b>Kontak</b></label><br/>
                <input type="number" placeholder="No.Telpon" name="telpon" id="telpon" required/><br/>
    
                <label for=""><b>Alamat</b></label><br/>
                <textarea name="alamat" placeholder="Alamat Lengkap"id="alamat" cols="20" rows="1" required></textarea><br/>
    
                <label for=""><b>Kartu Mahasiswa / Kartu Pelajar</b></label><br/>
                <input type="file" name="kartu" id="kartu" required/><br/>
            </div>        
            <button class="button-33" role="button">Kirimkan</button>

        </section>
        
        
        
        
    </div>
    </div>
  )}
  export default Perorangan;