import React from "react";
import './kelompok.css'

const Kelompok= () => {
  return (
    <div className="body">
    <div className="form" action="">
        <h1>Pendaftaran Sparta Fest 2022</h1>
        <section class="content">
            <div class="ketua">
                <label for=""><b>Bidang Perlombaan</b></label>
                <select name="lomba" id="lomba" required>
                    <option value="">Pilih Perlombaan</option>
                    <option value="basket">Basket</option>
                    <option value="bola">Sepakbola</option>
                    <option value="volly">Volly</option>
                    <option value="debat">Debat</option>
                    <option value="robotic">Robotic</option>
                    <option value="dance">Dance</option>
                    <option value="band">Band</option>
                </select><br/>
    
                <label for=""><b>Nama Team</b></label><br/>
                <input type="text" placeholder="Nama Tim" name="nama" id="namatim" required/><br/>
    
                <label for=""><b>Nama Ketua Team</b></label><br/>
                <input type="text" placeholder="Nama Ketua Tim" name="nama" id="namaketua" required/><br/>
                
                <label for=""><b>Nomor Induk Mahasiswa</b></label><br/>
                <input type="number" placeholder="NIM / KTM" name="nim" id="nim"/><br/>
    
                <label for=""><b>Email Ketua Team</b></label><br/>
                <input type="email" placeholder="Email ketua" name="email" id="email"/><br/>
                
                <label for=""><b>Asal Universitas</b></label><br/>
                <input type="text" placeholder="Sekolah" name="sekolah" id="sekolah" required/><br/>
    
                <label for=""><b>Kontak</b></label><br/>
                <input type="number" placeholder="No.Telpon" name="telpon" id="telpon" required/><br/>
    
                <label for=""><b>Alamat</b></label><br/>
                <textarea name="alamat" placeholder="Alamat Lengkap"id="alamat" cols="20" rows="1" required></textarea><br/>
    
                <label for=""><b>Kartu Mahasiswa / Kartu Pelajar</b></label><br/>
                <input type="file" name="kartu" id="kartu" required/><br/>
            </div>        
            <div class="anggota">
                <h4><b>Data Anggota</b></h4>
                <p>Jika Anggota berjumlah lebih dari 3 orang, cukup mengisi Form diatas</p>
    
                <div class="anggota1">
                    <label for=""><b>Nama Anggota 1</b></label><br/>
                    <input type="text" placeholder="Nama Anggota 1" name="nama" id="nama1"/><br/>
    
                    <label for=""><b>Nomor Induk Mahasiswa</b></label><br/>
                    <input type="number" placeholder="NIM / KTM" name="nim" id="nim"/><br/>
    
                    <label for=""><b>Email</b></label><br/>
                    <input type="email" placeholder="Email Anggota 1" name="email" id="email"/><br/>
                </div>
                <div class="anggota2">
                    <label for=""><b>Nama Anggota 2</b></label><br/>
                    <input type="text" placeholder="Nama Anggota 2" name="nama" id="nama2"/><br/>
    
                    <label for=""><b>Nomor Induk Mahasiswa</b></label><br/>
                    <input type="number" placeholder="NIM / KTM" name="nim" id="nim"/><br/>
    
                    <label for=""><b>Email</b></label><br/>
                    <input type="email" placeholder="Email Anggota 2" name="email" id="email"/><br/>
                </div>
                
            </div>
            <button class="button-33" role="button">Kirimkan</button>

        </section>
        
        
        
        
    </div>
    </div>
  )}
  export default Kelompok;