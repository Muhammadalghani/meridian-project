const $ = s => document.querySelector(s);
const fmt = n => n.toLocaleString('id-ID');
const BL = { m: '● Dari data asli', d: '◐ Hasil hitungan', a: '○ Perkiraan' };
const bd = c => `<span class="b ${c}">${BL[c]}</span>`;

// ── Fact / data store ─────────────────────────────────────────────────────────
const F = {};
const add = (k, t, c, s, h, w, u) => F[k] = { t, c, s, h, w, u };

const EX = [
  ['Petugas Baca Meter & Pekerjaan Manual', 6000, 62, 70, 78, 'd', 'Meter'],
  ['Tagihan & Layanan Pelanggan', 5200, 45, 55, 65, 'a', 'Tagihan'],
  ['Keuangan & Akuntansi', 2400, 35, 45, 55, 'a', 'Keuangan'],
  ['Gudang & Logistik', 3100, 38, 48, 58, 'a', 'Gudang'],
  ['SDM & Administrasi Umum', 1900, 30, 40, 50, 'a', 'SDM'],
  ['Operator Ruang Kendali', 8400, 24, 32, 40, 'a', 'Kendali'],
  ['Korporat, Hukum & Pengadaan', 6600, 18, 25, 32, 'a', 'Korporat'],
  ['Teknik Pemeliharaan', 9800, 15, 22, 29, 'a', 'Pemeliharaan'],
  ['Teknik Jaringan Distribusi', 6500, 12, 18, 24, 'a', 'Jaringan'],
  ['Teknologi Informasi', 2100, 10, 15, 20, 'a', 'TI'],
].sort((a, b) => b[3] - a[3]);

EX.forEach((e, i) => add(
  'ex' + i,
  e[0] + ': sekitar ' + e[3] + '% tugasnya bisa dikerjakan AI (kisaran ' + e[2] + ' sampai ' + e[4] + '%)',
  e[5],
  e[5] == 'd'
    ? 'Rencana pengadaan meter pintar dan IoT di divisi lain, ditambah penelaahan tugas tiap jabatan.'
    : 'Perkiraan dari tolok ukur industri untuk pekerjaan sejenis. Belum dicocokkan dengan data perusahaan.',
  'Angka ini menunjukkan berapa persen tugas yang bisa diambil alih AI dalam 2 sampai 3 tahun. Artinya bukan persentase pegawai yang kehilangan pekerjaan.',
  'Jadwal penerapan AI berubah, atau tugasnya ternyata lebih sulit diotomasi dari perkiraan.',
  e[5] == 'd'
    ? 'Cukup kuat untuk menentukan fokus 90 hari pertama.'
    : 'Cukup untuk menentukan urutan kajian, belum cukup dijadikan angka di depan Dewan.'
));

const G = {
  T: ['Tetap, tugasnya berubah', 1800],
  A: ['Siap pindah kerja', 1300],
  B: ['Perlu belajar keahlian baru', 1900],
  C: ['Belum ada pekerjaan yang cocok', 1000],
};

add('gT', '1.800 pegawai tetap di bidang ini', 'd', 'Otomasi sekitar 70% berarti sekitar 30% pekerjaan manual tetap ada, setara 1.800 orang.', '6.000 × 30% = 1.800. Tugas mereka bergeser dari membaca meter ke memeriksa data yang janggal.', 'Otomasi berjalan lebih cepat atau lebih lambat dari 18 bulan.', 'Aman untuk perencanaan.');
add('gA', '1.300 pegawai siap dipindahkan', 'd', 'Keahlian mereka sudah cocok dengan pekerjaan baru, dengan bukti dari 2 sumber atau lebih (pelatihan LMS, nilai atasan, uji singkat, pengakuan sendiri).', 'Kecocokan dihitung dari keahlian yang terbukti dibanding syarat pekerjaan baru. Hanya bukti kuat yang dihitung penuh.', '45% catatan keahlian kosong, jadi ada pegawai yang layak tetapi belum terhitung.', 'Boleh dipakai untuk merancang uji coba. Penempatan hanya untuk yang buktinya kuat.');
add('gB', '1.900 pegawai perlu pelatihan ulang', 'a', 'Keahlian yang masih kurang dibanding pekerjaan baru, diperkirakan bisa dikejar dalam 3 sampai 9 bulan.', 'Diperkirakan 45% dari 4.200 orang. Akan dikoreksi setelah uji coba hari ke-60.', 'Lama pelatihan dan tingkat kelulusan belum pernah diuji pada kelompok ini.', 'Anggaran dan jadwal boleh disiapkan. Ke Dewan, sampaikan sebagai kisaran.');
add('gC', '1.000 pegawai belum punya posisi yang cocok', 'a', 'Sisa dari 4.200 orang setelah kelompok siap dipindahkan dan perlu pelatihan.', '4.200 − 1.300 − 1.900 = 1.000. Ini hitungan kelompok, bukan penilaian per orang.', 'Kelompok ini bisa mengecil kalau catatan keahlian yang kosong sudah terisi.', 'Tidak ada keputusan per orang. Hanya jalur sukarela dan alami.');

const S = [
  ['Teknisi Meter Pintar', 900, 'Memasang, merawat, dan memeriksa meter pintar', '2 keahlian', '3 bulan', 'd', 'Pengadaan sudah berjalan di divisi lain, jadi kebutuhan tenaganya nyata.'],
  ['Perawatan Jaringan Listrik', 1100, 'Merawat jaringan listrik distribusi', '4 keahlian', '6 bulan', 'a', 'Diisi dari lowongan akibat pensiun dan pertumbuhan, dengan perkiraan 2,5% per tahun.'],
  ['Layanan Pelanggan & Konsultan Hemat Energi', 700, 'Melayani pelanggan dan menyarankan penghematan energi', '3 keahlian', '4 sampai 6 bulan', 'a', 'Bisa mengurangi keluhan tagihan, tetapi kebutuhannya belum dikonfirmasi unit regional.'],
  ['Pemeriksa Data Meter yang Janggal', 500, 'Memeriksa data meter yang tidak wajar', '5 keahlian', '9 bulan', 'a', 'Butuh tim analitik baru dan persetujuan divisi digital.'],
];
S.forEach((s, i) => add('s' + i, s[0] + ': dibutuhkan ' + fmt(s[1]) + ' orang dalam 18 bulan', s[5], s[6], 'Angka ini kebutuhan tenaga yang akan terbuka, bukan target yang harus diisi.', 'Kebutuhan belum dikonfirmasi pemilik unit.', 'Lowongan yang belum dikonfirmasi jangan dijanjikan ke serikat.'));

const R = [
  ['EMP-48213', 'Unit Regional 2', 'Petugas Baca Meter II', 'G5', 'A', 'Operasi Meter Pintar', 'L2', ['LMS', 'Atasan', 'Uji'], 86],
  ['EMP-31877', 'Unit Regional 4', 'Teknisi Meter Madya', 'G6', 'A', 'Operasi Meter Pintar', 'L3', ['LMS', 'Atasan', 'Deklarasi'], 91],
  ['EMP-22045', 'Unit Regional 3', 'Petugas Penyegelan', 'G4', 'A', 'Operasi Meter Pintar', 'L2', ['Atasan', 'Deklarasi'], 74],
  ['EMP-57120', 'Unit Regional 5', 'Senior Technician II', 'G6', 'B', 'Pemeliharaan Jaringan', 'L2', ['LMS', 'Deklarasi'], 68],
  ['EMP-40392', 'Unit Regional 1', 'Pelaksana Lapangan', 'G5', 'B', 'Analisis Data Janggal', 'L1', ['LMS'], 55],
  ['EMP-19964', 'Unit Regional 6', 'Teknisi Meter Pratama', 'G4', 'B', 'Layanan Pelanggan Lapangan', 'L2', ['Atasan', 'LMS', 'Deklarasi'], 72],
  ['EMP-63308', 'Unit Regional 2', 'Pengawas Lapangan', 'G7', 'T', 'Pengawas Operasi Meter', 'L3', ['Atasan', 'Uji', 'LMS'], 88],
  ['EMP-27751', 'Unit Regional 3', 'Petugas Baca Meter I', 'G3', 'T', 'Verifikasi Lapangan', 'L2', ['Atasan', 'Deklarasi'], 70],
  ['EMP-35590', 'Unit Regional 4', 'Juru Baca Meter Senior', 'G7', 'C', 'Belum ada', '-', ['Deklarasi'], 34],
  ['EMP-12486', 'Unit Regional 5', 'Petugas Baca Meter II', 'G5', 'C', 'Belum ada', '-', ['Deklarasi'], 31],
  ['EMP-50873', 'Unit Regional 1', 'Teknisi Meter Madya', 'G6', 'B', 'Pemeliharaan Jaringan', 'L2', ['LMS', 'Atasan'], 64],
  ['EMP-44018', 'Unit Regional 6', 'Pelaksana Lapangan', 'G4', 'C', 'Belum ada', '-', [], 0],
];

const EVN = { LMS: 'Pelatihan LMS', Atasan: 'Nilai atasan', Uji: 'Uji singkat', Deklarasi: 'Pengakuan sendiri' };

add('k6',    '6.000 pegawai yang bertugas membaca meter', 'm', 'Data HRIS, sekitar 11% dari 52.000 pegawai.', 'Jumlah pegawai di kelompok ini setelah 1.800 lebih nama jabatan dikelompokkan ulang.', 'Nama jabatan antar unit dipetakan keliru, misalnya Engineer Madya dan Senior Technician II.', 'Aman untuk perencanaan.');
add('k42',   '4.200 pekerjaan akan hilang (setara 4.200 orang)', 'd', 'Otomasi sekitar 70% dalam 18 bulan, berdasarkan rencana pengadaan meter pintar dan IoT.', '6.000 × 70% = 4.200.', 'Pemasangan meter mundur, atau persentase otomasinya lebih rendah.', 'Cukup untuk menentukan fokus. Sampaikan ke Dewan sebagai kisaran.');
add('k32',   '3.200 lowongan pekerjaan baru', 'a', 'Kebutuhan tenaga di empat bidang tujuan dalam 18 bulan.', 'Jumlah kebutuhan tiap bidang, belum dikonfirmasi pemilik unit.', 'Kebutuhan unit regional ternyata lebih kecil.', 'Jangan dijanjikan ke serikat sebelum dikonfirmasi.');
add('k45',   '45% catatan keahlian kosong', 'm', 'Pemeriksaan data HRIS seluruh perusahaan.', 'Hitung catatan yang kolom keahliannya kosong.', 'Angka khusus kelompok petugas baca meter belum diketahui.', 'Pengakuan sendiri tidak boleh jadi satu-satunya dasar keputusan.');
add('k34',   '34 kelompok pekerjaan dari 1.800 lebih nama jabatan', 'a', 'Nama jabatan dikelompokkan menurut fungsi kerja dan tingkatnya.', 'Rancangan awal, akan dicek bersama HR tiap unit regional pada hari ke-30.', 'Dua nama jabatan yang tampak beda ternyata pekerjaannya sama, atau sebaliknya.', 'Dipakai sebagai dasar, bukan untuk mengubah jabatan resmi.');
add('inact', 'Biaya per tahun jika tidak berbuat apa-apa, setelah otomasi 70% tercapai: Rp504 miliar', 'a', '4.200 orang × Rp120 juta biaya per pegawai per tahun.', 'Data gaji tidak boleh diakses, jadi Rp120 juta adalah perkiraan dari tolok ukur BUMN energi.', 'Di tahun pertama lebih rendah, sekitar Rp168 miliar, karena otomasi naik bertahap selama 18 bulan. Biaya per pegawai bisa berbeda sekitar 30%.', 'Pakai sebagai gambaran besarnya saja.');
add('cost',  'Biaya program: Rp119,2 miliar', 'a', 'Kontrak Rp3,5 miliar, pelatihan 1.300 orang × Rp5 juta (Rp6,5 miliar), pelatihan ulang 1.900 orang × Rp18 juta (Rp34,2 miliar), dan paket keluar sukarela 300 orang × Rp250 juta (Rp75 miliar, perkiraan).', 'Jumlah dari empat komponen. Paket keluar sukarela adalah perkiraan paling rawan.', 'Biaya per orang belum ada penawaran dari lembaga pelatihan.', 'Ajukan sebagai kisaran, lebih atau kurang 25%.');
add('lay',   'PHK lalu rekrut ulang: Rp576 miliar', 'a', '3.200 orang × Rp180 juta (pesangon, rekrutmen, dan masa adaptasi, sekitar 1,5 kali biaya setahun).', 'Hanya pembanding. Kementerian tidak mengizinkan PHK.', 'Faktor 1,5 adalah perkiraan.', 'Tidak untuk diputuskan.');
add('ben',   'Keuntungan tahun pertama', 'a', 'Lowongan yang diisi pegawai sendiri: 3.200 × Rp120 juta × persentase terisi.', 'Persentase terisi adalah bagian paling rawan.', 'Jika terisi di bawah batas balik modal, program rugi.', 'Geser penggeser untuk melihat batasnya.');

// ── Icon SVG paths ────────────────────────────────────────────────────────────
const I = {
  grid:   '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  chart:  '<path d="M3 3v18h18"/><path d="M8 17V9M13 17V5M18 17v-6"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  users:  '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5c2 .7 3.5 2.6 3.5 5.5"/>',
  route:  '<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3.5 3.5 0 0 0 0-7H8a3.5 3.5 0 0 1 0-7h7.5"/>',
  coin:   '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1.1 0-2-.5-2.5-1.5M12 6.5V8M12 16v1.5"/>',
  flag:   '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  arrow:  '<path d="M7 17 17 7M8 7h9v9"/>',
  alert:  '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17v.5"/>',
  back:   '<path d="m15 18-6-6 6-6"/>',
  right:  '<path d="m9 6 6 6-6 6"/>',
  menu:   '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close:  '<path d="M18 6 6 18M6 6l12 12"/>',
};
const ic = (n, s = 20) =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;

// ── App state ─────────────────────────────────────────────────────────────────
let V = 0, P = null, grp = 'A', fill = 50, LN = 'pos';

const NAV = [
  ['Ringkasan', 'grid', 'Ringkasan'],
  ['Pengaruh AI', 'chart', 'Pengaruh AI'],
  ['Struktur jabatan', 'layers', 'Struktur'],
  ['Petugas baca meter', 'users', 'Petugas'],
  ['Jalur pindah pekerjaan', 'route', 'Pindah kerja'],
  ['Biaya dan keputusan', 'coin', 'Biaya'],
  ['Rencana 90 hari', 'flag', 'Rencana'],
];

// ── Drawer ────────────────────────────────────────────────────────────────────
function closeDr() {
  $('#dr').classList.remove('on');
  const ov = $('#dr-overlay');
  if (ov) ov.classList.remove('on');
}

function open(k) {
  const f = F[k];
  if (!f) return;
  $('#dr').innerHTML =
    `<button class="x" data-x>Tutup</button>${bd(f.c)}<h2>${f.t}</h2>` +
    `<h4>Berdasarkan apa</h4><p>${f.s}</p>` +
    `<h4>Cara menghitung</h4><p>${f.h}</p>` +
    `<h4>Kapan bisa meleset</h4><p>${f.w}</p>` +
    `<h4>Yang boleh diputuskan dari angka ini</h4><p>${f.u}</p>`;
  $('#dr').classList.add('on');
  const ov = $('#dr-overlay');
  if (ov) ov.classList.add('on');
}

// ── Component helpers ─────────────────────────────────────────────────────────
const GS = { A: 'var(--s1)', B: 'var(--s2)', T: 'var(--s3)', C: 'var(--sa)' };
const GD = { T: 'dk' };

const cd = (t, b, a = '') =>
  `<section class="cd"><div class="ch"><h3>${t}</h3>${a}</div>${b}</section>`;

const legend = () =>
  `<p class="fn">Seberapa pasti angkanya: ${bd('m')} ${bd('d')} ${bd('a')} Klik angka untuk melihat asalnya.</p>`;

const bar = e =>
  `<span class="trk"><i class="rng" style="left:${e[2]}%;width:${e[4] - e[2]}%"></i><i class="mid" style="left:${e[3]}%"></i></span>`;

const exRow = (e, i) =>
  `<tr data-k="ex${i}"><td><b>${e[0]}</b></td><td>${fmt(e[1])}</td><td><div class="ev"><span>${e[3]}%</span>${bar(e)}</div></td><td>${bd(e[5])}</td></tr>`;

const exTable = () =>
  `<div class="tw"><table><tr><th>Kelompok pekerjaan</th><th>Jumlah pegawai</th><th>Pekerjaan yang bisa digantikan AI (kisaran)</th><th>Seberapa pasti</th></tr>${EX.map(exRow).join('')}</table></div>`;

function chart() {
  const h = 150, y = v => 170 - v / 100 * h;
  return `<div class="chw"><svg viewBox="0 0 640 210" width="100%" role="img" aria-label="Pengaruh AI per kelompok pekerjaan">` +
    [0, 25, 50, 75, 100].map(v =>
      `<line x1="34" x2="636" y1="${y(v)}" y2="${y(v)}" stroke="var(--ln)"/><text x="0" y="${y(v) + 4}" font-size="11" fill="var(--mu)">${v}%</text>`
    ).join('') +
    EX.map((e, i) => {
      const x = 46 + i * 60;
      return `<rect x="${x}" y="${y(e[3])}" width="18" height="${170 - y(e[3])}" rx="4" fill="var(--s1)"/>` +
        `<rect x="${x + 21}" y="${y(e[4])}" width="18" height="${170 - y(e[4])}" rx="4" fill="var(--s3)"/>` +
        `<text x="${x + 20}" y="190" font-size="10" text-anchor="middle" fill="var(--mu)">${e[6]}</text>`;
    }).join('') +
    `</svg></div><p class="fn" style="margin:6px 0 0"><b style="color:var(--ink)">Hitam</b> perkiraan terbaik, <b>abu-abu</b> batas atas kisaran.</p>`;
}

const kp = (t, v, c, cap, k) =>
  `<div class="kp"><span>${t}</span><button class="ar" data-k="${k}" aria-label="Asal angka: ${t}">${ic('arrow', 16)}</button><strong>${v}</strong><div>${bd(c)}${cap}</div></div>`;

const it = (c, i, t, s, l, go) =>
  `<div class="it"><div class="ti ${c}">${ic(i)}</div><div><b>${t}</b><span>${s}</span><button class="lk" data-go="${go}">${l}</button></div></div>`;

const seg = () =>
  `<div class="sg">${Object.entries(G).map(([k, v]) =>
    `<button data-g="${k}" class="${GD[k] || ''}" aria-pressed="${k == grp}" style="background:${GS[k]};flex:${v[1]}"><b>${fmt(v[1])}</b><span>${v[0]}</span></button>`
  ).join('')}</div>`;

const SGL = n => n >= 3 ? ['Bukti kuat', 'g'] : n == 2 ? ['Bukti cukup', 'd'] : ['Bukti kurang', 'a'];

const REQ = {
  'Operasi Meter Pintar':       ['Memasang meter pintar', 'Dasar jaringan IoT', 'K3 kelistrikan', 'Memeriksa data meter'],
  'Pemeliharaan Jaringan':      ['Merawat jaringan TM/TR', 'K3 kelistrikan', 'Membaca skema jaringan', 'Mendiagnosis gangguan'],
  'Analisis Data Janggal':      ['Analisis data meter', 'Dasar statistik', 'Excel tingkat lanjut', 'Membuat laporan temuan', 'Memahami tagihan'],
  'Layanan Pelanggan Lapangan': ['Berkomunikasi dengan pelanggan', 'Menangani keluhan tagihan', 'Edukasi hemat energi'],
  'Pengawas Operasi Meter':     ['Memimpin tim lapangan', 'Memeriksa data meter', 'Merencanakan rute', 'Dasar IoT'],
  'Verifikasi Lapangan':        ['Memeriksa data meter', 'Inspeksi lapangan', 'Membuat laporan temuan'],
};

const chips = a =>
  a.map(x => `<span class="chip">${EVN[x]}</span>`).join('') || '<small>belum ada</small>';

// ── Lens / capability view ────────────────────────────────────────────────────
function aha() {
  const tx = { T: 'var(--ink)', A: 'var(--sf)', B: 'var(--sf)', C: 'var(--sf)' };
  return `<div class="lens" data-lens="${LN}">` +
    `<div class="lt">` +
    `<button class="btn l" data-ls="pos" aria-pressed="${LN == 'pos'}">Menurut jabatan</button>` +
    `<button class="btn l" data-ls="cap" aria-pressed="${LN == 'cap'}">Menurut kemampuan</button>` +
    `</div>` +
    `<div class="lb">${Object.entries(G).map(([k, v]) =>
      `<button data-g="${k}" style="--w:${v[1]};--c:${GS[k]};--t:${tx[k]}" aria-label="${v[0]}: ${fmt(v[1])} pegawai"><b>${fmt(v[1])}</b><span>${v[0]}</span></button>`
    ).join('')}</div>` +
    `<p class="lc">` +
    `<span class="cp">Seperti tertulis di bagan organisasi: satu jabatan, satu kotak. 6.000 orang menanggung kabar yang sama, 70% tugasnya akan hilang. Tekan "Menurut kemampuan" untuk melihat orang yang sama dengan cara lain.</span>` +
    `<span class="cc">Orang yang sama, dilihat dari kemampuannya: 1.800 tetap bekerja dengan tugas baru, 3.200 punya jalan pindah (1.300 siap, 1.900 perlu belajar), dan 1.000 belum punya jalan sehingga ditawari jalur pensiun dan keluar sukarela.</span>` +
    `</p>` +
    `<p class="fn">Seberapa pasti: ${['T', 'A', 'B', 'C'].map(k =>
      `<button class="num" data-k="g${k}">${G[k][0]} ${bd(F['g' + k].c)}</button>`
    ).join(' ')}</p>` +
    `</div>`;
}

// ── View functions ────────────────────────────────────────────────────────────
function v0() {
  const cats = Object.entries(G).map(([k, v]) =>
    `<button data-g="${k}"><span>${v[0]}</span><b class="big">${(v[1] / 60).toFixed(1).replace('.', ',')}%</b><i style="background:${GS[k]};width:${v[1] / 19}%"></i><small>${fmt(v[1])} pegawai</small></button>`
  ).join('');
  return `<div class="row4">${
    kp('Petugas baca meter', '6.000', 'm', 'sekitar 11% dari seluruh pegawai', 'k6') +
    kp('Pekerjaan yang akan hilang', '4.200', 'd', 'setara 4.200 orang, dalam 18 bulan', 'k42') +
    kp('Lowongan pekerjaan baru', '3.200', 'a', '2.300 belum dikonfirmasi unit', 'k32') +
    kp('Keuntungan dibanding biaya', '1,6 kali', 'a', 'tahun pertama, jika 50% terisi', 'ben')
  }</div>${cd('Apa yang terjadi pada 6.000 petugas baca meter', aha())}` +
    `<div class="g">${cd('Pengaruh AI per kelompok pekerjaan', chart(), '<button class="btn l" data-go="1">Lihat semua</button>')}${cd('Catatan penting',
      `<div class="ins">${
        it('a', 'alert', 'Pengaruh AI terbesar ada di satu kelompok', 'Sekitar 70% tugas petugas baca meter bisa dikerjakan AI, dan hanya kelompok ini yang sudah punya jadwal otomasi.', 'Lihat kelompok ini', 3) +
        it('a', 'alert', 'Data keahlian belum lengkap', '45% catatan keahlian pegawai kosong. Nilai kinerja sebelum 2023 tidak dipakai.', 'Lihat aturan keputusan', 5) +
        it('g', 'route', 'Ada tempat untuk dipindahkan', '3.200 orang dibutuhkan di empat bidang, 900 di antaranya sudah punya dasar pengadaan.', 'Lihat jalurnya', 4) +
        it('a', 'flag', 'Kabar di serikat pekerja', 'Beredar kabar bahwa pemetaan ini untuk menentukan siapa yang dipangkas. Perlu penjelasan terbuka.', 'Lihat rencana', 6)
      }</div>`
    )}</div>` + legend();
}

function v1() {
  return cd('10 kelompok pekerjaan', exTable()) +
    `<p class="fn">Angka ini menunjukkan berapa persen tugas yang bisa dikerjakan AI dalam 2 sampai 3 tahun ke depan. Ini bukan jumlah orang yang kehilangan pekerjaan.</p>` +
    legend();
}

function v2() {
  const T = [
    ['Engineer Madya', 'Unit 1', 'Teknik Jaringan Distribusi', 'G6', 'Tingkat 3'],
    ['Senior Technician II', 'Unit 4', 'Teknik Jaringan Distribusi', 'G6', 'Tingkat 3'],
    ['Petugas Baca Meter II', 'Unit 2', 'Baca Meter', 'G5', 'Tingkat 2'],
    ['Juru Baca Meter Senior', 'Unit 4', 'Baca Meter', 'G7', 'Tingkat 3'],
  ];
  return cd('Merapikan 1.800 nama jabatan menjadi satu struktur',
    `<div class="fun"><div><strong>1.800+</strong>nama jabatan ${bd('m')}</div>${ic('right')}<div><strong>34</strong>kelompok pekerjaan <button class="num" data-k="k34">${bd('a')}</button></div>${ic('right')}<div><strong>5</strong>tingkat keahlian ${bd('a')}</div></div>`
  ) +
    `<div class="g2">${
      cd('Nama jabatan berbeda, pekerjaan sama',
        `<div class="tw"><table><tr><th>Nama jabatan</th><th>Unit</th><th>Kelompok</th><th>Grade</th><th>Tingkat</th></tr>${
          T.map(r => `<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('')
        }</table></div><p class="fn">Nama jabatan, grade, dan kontrak kerja tidak diubah. Struktur ini ditambahkan di atas data HRIS yang ada.</p>`
      ) +
      cd('Contoh: satu pegawai dalam struktur baru',
        `<div class="li"><span>Pegawai</span><b>EMP-31877</b></div>` +
        `<div class="li"><span>Nama jabatan</span><b>Teknisi Meter Madya</b></div>` +
        `<div class="li"><span>Grade dan tingkat</span><b>G6, Tingkat 3</b></div>` +
        `<div class="li"><span>Bidang keahlian</span><b>Meter dan distribusi</b></div>` +
        `<div class="li"><span>Keahlian</span><span><span class="chip">Memasang meter pintar L3</span><span class="chip">Memeriksa data meter L2</span><span class="chip">K3 kelistrikan L3</span></span></div>`
      )
    }</div>` +
    cd('Standar yang dijadikan acuan',
      `<div class="tw"><table><tr><th>Acuan</th><th>Dipakai untuk</th><th>Cara pakai</th></tr>` +
      `<tr><td><b>KKNI dan SKKNI</b></td><td>Menentukan tingkat kemampuan (5 tingkat dipetakan ke 9 jenjang KKNI)</td><td><span class="b d">Dipakai apa adanya</span></td></tr>` +
      `<tr><td><b>ESCO dan O*NET</b></td><td>Daftar keahlian dasar</td><td><span class="b d">Dipakai apa adanya</span></td></tr>` +
      `<tr><td><b>Bidang energi perusahaan</b></td><td>Keahlian khusus meter, distribusi, dan K3</td><td><span class="b a">Dibangun sendiri</span></td></tr>` +
      `</table></div><p class="fn">Biaya pilihan ini: lebih lambat daripada membeli paket siap pakai, tanpa pembanding gaji dari luar, dan perawatannya jadi tugas kita sendiri.</p>`
    );
}

function v3() {
  if (P) return pf(P);
  const g = G[grp], rows = R.filter(r => r[4] == grp);
  return cd(
    `${g[0]}: ${fmt(g[1])} pegawai`,
    seg() +
    `<div class="tw"><table><tr><th>Pegawai</th><th>Jabatan sekarang</th><th>Pekerjaan baru</th><th>Kecocokan</th><th>Bukti</th><th>Seberapa kuat buktinya</th></tr>` +
    rows.map(r => {
      const s = SGL(r[7].length);
      return `<tr data-p="${r[0]}"><td><b>${r[0]}</b><small>${r[1]}</small></td><td>${r[2]}<small>${r[3]}</small></td>` +
        `<td>${r[5]}${r[6] != '-' ? `<small>Level ${r[6]}</small>` : ''}</td>` +
        `<td><span class="fit"><i style="width:${r[8]}%"></i></span>${r[8]}%</td>` +
        `<td>${chips(r[7])}</td><td><span class="b ${s[1]}">${s[0]}</span></td></tr>`;
    }).join('') +
    `</table></div><p class="fn">Menampilkan ${rows.length} dari ${fmt(g[1])} pegawai (contoh data). Klik satu baris untuk melihat profilnya.</p>`,
    `<button class="btn l" data-k="g${grp}">Asal angka ini</button>`
  );
}

function pf(id) {
  const r = R.find(x => x[0] == id);
  const n = r[7].length, s = SGL(n), rq = REQ[r[5]] || [];
  const h = Math.round(r[8] / 100 * rq.length);
  const d = n >= 3
    ? 'Boleh menetapkan penempatan.'
    : n == 2
    ? 'Boleh diundang ke uji coba atau pelatihan. Belum untuk penempatan.'
    : 'Hanya untuk menentukan data mana yang dicek lebih dulu. Bukan dasar keputusan untuk pegawai ini.';

  return `<button class="back" data-back>${ic('back', 16)} Kembali ke daftar</button>` +
    `<div class="g">${
      cd(
        `${r[0]}, ${r[2]}`,
        `<div class="row4" style="margin-bottom:14px">` +
        `<div><span class="fn">Grade</span><br><b>${r[3]}</b></div>` +
        `<div><span class="fn">Unit</span><br><b>${r[1]}</b></div>` +
        `<div><span class="fn">Status</span><br><b>${G[r[4]][0]}</b></div>` +
        `<div><span class="fn">Jabatan resmi</span><br><span class="b d">Tidak berubah</span></div>` +
        `</div>` +
        (rq.length
          ? `<div class="tw"><table><tr><th>Keahlian yang dibutuhkan</th><th>Level</th><th>Bukti</th><th>Status</th></tr>` +
            rq.map((q, i) => {
              const o = i < h;
              return `<tr><td><b>${q}</b></td><td>${o ? r[6] : '-'}</td>` +
                `<td>${o && n ? `<span class="chip">${EVN[r[7][i % n]]}</span>` : '<small>belum ada</small>'}</td>` +
                `<td><span class="b ${o ? 'g' : 'a'}">${o ? 'Terpenuhi' : 'Perlu dilengkapi'}</span></td></tr>`;
            }).join('') +
            `</table></div>`
          : '<p class="fn">Belum ada pekerjaan baru dengan bukti yang cukup. Kepada pegawai ini ditawarkan jalur sukarela.</p>'
        ),
        `<span class="fn">Pekerjaan baru: ${r[5]}</span>`
      )
    }${
      cd('Seberapa kuat buktinya',
        `<div class="li"><span>Kekuatan bukti</span><span class="b ${s[1]}">${s[0]}</span></div>` +
        `<div class="li"><span>Sumber bukti</span><b>${n} dari 4</b></div>` +
        `<div class="li"><span>Kecocokan dengan pekerjaan baru</span><b>${r[8]}%</b></div>` +
        `<div class="li"><span>Yang boleh diputuskan</span><b style="text-align:right;max-width:60%">${d}</b></div>` +
        `<p class="fn" style="margin-top:8px">Sumber bukti: pelatihan LMS, nilai atasan, uji singkat, pengakuan sendiri. Contoh data.</p>`
      )
    }</div>`;
}

function v4() {
  return `<div class="g">${
    cd('Pekerjaan baru yang bisa dituju',
      `<div class="tw"><table><tr><th>Pekerjaan baru</th><th>Kebutuhan</th><th>Keahlian yang perlu ditambah</th><th>Siap dalam</th><th>Seberapa pasti</th></tr>` +
      S.map((s, i) =>
        `<tr data-k="s${i}"><td><b>${s[0]}</b><small>${s[2]}</small></td><td>${fmt(s[1])} orang</td><td>${s[3]}</td><td>${s[4]}</td><td>${bd(s[5])}</td></tr>`
      ).join('') +
      `</table></div>`
    ) +
    cd('Bagi 1.000 pegawai yang belum cocok',
      `<div class="li"><span>Pensiun normal</span><b>520</b></div>` +
      `<div class="li"><span>Program keluar sukarela</span><b>300</b></div>` +
      `<div class="li"><span>Dipindahkan ke mitra vendor</span><b>180</b></div>` +
      `<p class="fn" style="margin-top:8px">Tidak ada PHK. Tidak semua orang mendapat posisi yang setara, dan ini disampaikan terus terang. ${bd('a')}</p>`
    )
  }</div>` +
    cd('Cara kerja baca meter: dulu dan nanti',
      `<b>Dulu</b><div class="flow"><span>Susun jadwal keliling</span><span>Datang ke lokasi</span><span>Baca meter manual</span><span>Catat di kertas</span><span>Input ke sistem</span><span>Perbaiki salah baca</span></div>` +
      `<b>Sesudahnya</b><div class="flow af"><span>Meter mengirim data sendiri</span><span>Sistem menandai data janggal</span><span>Petugas memeriksa ke lapangan</span></div>`
    );
}

function v5() {
  const f = fill / 100, cost = 119.2, ben = 3200 * .12 * f, be = cost / (3200 * .12) * 100, mx = 576;
  const hb = (l, v, k, c) =>
    `<button class="hb" style="border:0;background:none;text-align:left;width:100%" data-k="${k}"><span>${l}</span><i style="background:${c};width:${v / mx * 100}%"></i><b>Rp${String(v).replace('.', ',')} miliar</b></button>`;

  return `<div class="g2">${
    cd('Apa yang boleh diputuskan dari bukti',
      `<div class="tw"><table><tr><th>Bukti</th><th>Sumber</th><th>Yang boleh diputuskan</th></tr>` +
      `<tr><td><span class="b g">Bukti kuat</span></td><td>3 sumber atau lebih</td><td>Menetapkan penempatan pegawai</td></tr>` +
      `<tr><td><span class="b d">Bukti cukup</span></td><td>2 sumber</td><td>Mengundang ke uji coba atau pelatihan</td></tr>` +
      `<tr><td><span class="b a">Bukti kurang</span></td><td>1 sumber atau kosong</td><td>Hanya menentukan data mana yang dicek dulu</td></tr>` +
      `</table></div><p class="fn">Cara tahu bukti meleset: hasil uji coba 150 pegawai di hari ke-60 dibandingkan dengan prediksi, lalu kategori bukti yang sering meleset diturunkan tingkatnya.</p>`
    ) +
    cd('Perbandingan biaya',
      hb('Diam di tempat (per tahun)', 504, 'inact', 'var(--sa)') +
      hb('PHK lalu rekrut ulang', 576, 'lay', 'var(--s3)') +
      hb('Program ini', 119.2, 'cost', 'var(--s1)') +
      `<p class="fn">PHK hanya sebagai pembanding. Kementerian tidak mengizinkannya.</p>`
    )
  }</div>` +
    cd('Simulasi keuntungan',
      `<label for="fl"><b>Lowongan yang terisi di tahun pertama: ${fill}% dari 3.200</b></label>` +
      `<input id="fl" type="range" min="10" max="100" step="5" value="${fill}">` +
      `<div class="row4" style="margin-top:10px">` +
      `<div><span class="fn">Keuntungan tahun pertama</span><br><button class="num big" data-k="ben">Rp${Math.round(ben)} miliar</button></div>` +
      `<div><span class="fn">Biaya program</span><br><b class="big">Rp119,2 miliar</b></div>` +
      `<div><span class="fn">Keuntungan dibanding biaya</span><br><b class="big">${(ben / cost).toFixed(1).replace('.', ',')} kali</b></div>` +
      `<div><span class="fn">Syarat agar tidak rugi</span><br><b class="big">minimal ${Math.ceil(be)}% terisi</b></div>` +
      `</div><p class="fn" style="margin-top:10px">Di bawah batas ini, program lebih mahal daripada hasilnya.</p>`
    );
}

function v6() {
  const G3 = [
    ['Hari ke-30', 'Data pegawai dari sistem kepegawaian (HRIS) dan sistem pelatihan (LMS) sudah disatukan', 'Pengaruh AI di 10 kelompok pekerjaan dan hasil pengecekan petugas baca meter'],
    ['Hari ke-60', 'Uji coba dengan 150 pegawai di operasi meter pintar', 'Hasil uji dan profil keahlian tiap peserta'],
    ['Hari ke-90', 'Paket keputusan dan kesepakatan awal dengan serikat', 'Perhitungan biaya dan jalur pindah pekerjaan untuk 4.200 pekerjaan'],
  ];
  return `<div class="row4 r3">${G3.map(g =>
    cd(g[0], `<b>${g[1]}</b><p class="fn" style="margin:8px 0 0">Dewan akan melihat: ${g[2]}</p>`)
  ).join('')}</div>` +
    cd('Pihak yang dilibatkan',
      `<div class="tw"><table><tr><th>Pihak terkait</th><th>Kapan</th><th>Disampaikan apa</th></tr>` +
      `<tr><td><b>Serikat Pekerja</b></td><td>Hari ke-35</td><td>Penjelasan terbuka: ini bukan daftar pemotongan, jabatan dan kontrak tidak berubah, asesmen sukarela dengan hak banding, dan wakil serikat ikut menilai kriterianya</td></tr>` +
      `<tr><td><b>Kementerian</b></td><td>Hari ke-45</td><td>Bahan bacaan model biaya dan komitmen tanpa PHK</td></tr>` +
      `<tr><td><b>Dewan Komisaris</b></td><td>Hari ke-90</td><td>Paket keputusan dengan angka yang bisa ditelusuri</td></tr>` +
      `<tr><td><b>Direktur Human Capital</b></td><td>Tiap minggu</td><td>Perkembangan tahapan dan keputusan yang perlu diambil</td></tr>` +
      `</table></div>`
    );
}

// ── Utility ───────────────────────────────────────────────────────────────────
const TT = [
  'Ringkasan',
  'Seberapa besar AI bisa menggantikan pekerjaan',
  'Struktur jabatan dan keahlian',
  'Petugas baca meter',
  'Jalur pindah pekerjaan',
  'Biaya dan keputusan',
  'Rencana 90 hari',
];

function labels() {
  document.querySelectorAll('table').forEach(t => {
    const h = [...t.rows[0].cells].map(c => c.textContent);
    [...t.rows].slice(1).forEach(r => [...r.cells].forEach((c, i) => c.dataset.l = h[i]));
  });
}

function closeNav() {
  const m = $('#mob-nav');
  if (m) m.classList.remove('open');
  const ov = $('#dr-overlay');
  if (ov && !$('#dr').classList.contains('on')) ov.classList.remove('on');
}

function openNav() {
  closeDr();
  const m = $('#mob-nav');
  if (m) m.classList.add('open');
  const ov = $('#dr-overlay');
  if (ov) ov.classList.add('on');
}

// ── Render ────────────────────────────────────────────────────────────────────
function render() {
  $('#app').innerHTML =
    `<header class="tb">` +
    `<button class="burger-btn" id="btn-burger" aria-label="Buka navigasi menu">${ic('menu', 20)}</button>` +
    `<div class="lg">✱</div>` +
    `<div class="tb-text">` +
    `<small>${V == 0 ? 'Selamat pagi, Bu Direktur' : 'Project Meridian'}</small>` +
    `<h1>${TT[V]}</h1>` +
    `</div>` +
    `<div class="tr">` +
    `<span class="b d" style="display:none" id="demo-badge">Contoh data</span>` +
    `<div class="av" title="Pengguna aktif">DH</div>` +
    `</div>` +
    `</header>` +
    `<!-- Mobile Navigation Drawer -->` +
    `<aside id="mob-nav" class="mob-drawer">` +
    `<div class="mob-drawer-header">` +
    `<div style="display:flex;align-items:center;gap:10px;">` +
    `<div class="lg" style="width:34px;height:34px;font-size:16px;">✱</div>` +
    `<div><b style="font-size:15px;display:block;">Menu Meridian</b><small class="fn" style="font-size:11px;">Konsol Kapabilitas</small></div>` +
    `</div>` +
    `<button class="ar" id="btn-close-nav" aria-label="Tutup menu">${ic('close', 18)}</button>` +
    `</div>` +
    `<div class="mob-drawer-body">` +
    NAV.map((n, i) =>
      `<button class="mob-nav-item ${i == V ? 'active' : ''}" data-go="${i}">` +
      `${ic(n[1], 20)}<span>${n[0]}</span>` +
      `</button>`
    ).join('') +
    `</div>` +
    `</aside>` +
    `<nav class="rail">${NAV.map((n, i) =>
      `<button data-go="${i}" title="${n[0]}" aria-label="${n[0]}" ${i == V ? 'aria-current="true"' : ''}>${ic(n[1], 20)}<span>${n[2]}</span></button>`
    ).join('')}</nav>` +
    `<main class="pg">${[v0, v1, v2, v3, v4, v5, v6][V]()}</main>`;

  labels();
  const s = $('#fl');
  if (s) s.oninput = e => {
    fill = +e.target.value;
    const y = scrollY;
    render();
    $('#fl').focus();
    scrollTo(0, y);
  };
}

// ── Event delegation ──────────────────────────────────────────────────────────
document.addEventListener('click', e => {
  // Burger button toggle
  if (e.target.closest('#btn-burger')) {
    openNav();
    return;
  }
  // Close burger drawer button
  if (e.target.closest('#btn-close-nav')) {
    closeNav();
    return;
  }
  // Close drawer and nav when clicking overlay
  if (e.target.id === 'dr-overlay') {
    closeDr();
    closeNav();
    return;
  }

  const t = e.target.closest('[data-k],[data-go],[data-g],[data-p],[data-x],[data-th],[data-back],[data-ls]');
  if (!t) {
    if (!e.target.closest('#dr') && !e.target.closest('#mob-nav')) {
      closeDr();
      closeNav();
    }
    return;
  }
  const d = t.dataset;
  if (d.ls) {
    LN = d.ls;
    const L = t.closest('.lens');
    L.dataset.lens = LN;
    L.querySelectorAll('[data-ls]').forEach(b => b.setAttribute('aria-pressed', b.dataset.ls == LN));
    return;
  }
  if (d.x !== undefined) return closeDr();
  if (d.k) return open(d.k);
  if (d.back !== undefined) { P = null; return render(); }
  if (d.p) { P = d.p; scrollTo(0, 0); return render(); }
  if (d.g) {
    grp = d.g;
    if (V != 3) { V = 3; scrollTo(0, 0); }
    P = null;
    return render();
  }
  V = +d.go;
  P = null;
  closeDr();
  closeNav();
  render();
  scrollTo(0, 0);
});

render();

