import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {Header} from '../../components';
export default function Profile({navigation}) {
  const htmlContent = `
<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>Yanuar Prihatin</strong>, politisi dari <strong> Partai Kebangkitan Bangsa (PKB</strong>).</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Lahir di Cirebon, 30 Desember 1970</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Anggota Komisi II fraksi PKB DPR RI dan Komisi II DPR RI memiliki ruang lingkup kerja di bidang pemerintahan dalam negeri &amp; otonomi daerah, aparatur negara &amp; reformasi birokrasi, kepemiluan, serta pertahanan &amp; reforma agraria.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong>Yanuar Prihatin</strong> mewakili daerah pemilihan Jawa Barat X yang meliputi Kabupaten <strong>Ciamis, Pangandaran, Kuningan dan Kota Banjar.</strong></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Ia menempuh pendidikan dasar di SD Cipeujeuh II Cirebon, dilanjutkan pendidikan menengah di SMPN I Sindanglaut Cirebon dan kemudian di SMAN Sindanglaut Cirebon.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Dari Cirebon, Yanuar Prihatin berangkat ke Jakarta untuk berkuliah di Universitas Jakarta jurusan Administrasi Niaga dari tahun 1989-1996.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Pada tahun 1999 hingga 2003, Yanuar Prihatin mengambil S2 di jurusan Ilmu Politik, Universitas Indonesia.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Sebelum terjun ke dunia politik, Yanuar Prihatin pernah menjadi peneliti di LPPM Unija.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Ia juga pernah mengajar sebagai dosen.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Pada tahun 1997 hingga 2001, Yanuar Prihatin menjadi dosen di FIA dan FISIP UI sekaligus di Universitas Jakarta.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Yanuar Prihatin mulai aktif di PKB pada tahun 2002.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Hingga tahun 2007, ia menjabat sebagaI wakil sekretaris di DPC PKB Kota Bekasi.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Di saat yang bersamaan, Yanuar juga menjadi anggota departeman DPP PKB 2005-2005.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Kariernya di DPR bermula saat Yanuar diangkat sebagai tenaga ahli di Komisi II DPR RI tahun 2005-2012.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Pada pemilu legislatif 2014, Yanuar berhasil melenggang ke Senayan dengan perolehan 17.823 suara, dikutip dari</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Yanuar kembali terpilih sebagai anggota DPR RI pada pemilu legislatif periode selanjutnya (2019-2024).</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Kini Menjadi Wakil Ketua Komisi II DPR RI</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Sejak April 2022, Yanuar Prihatin ditunjuk sebagai Wakil Ketua Komisi II DPR RI, Tribunnews.com melaporkan.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Ia menggantikan Luqman Hakim yang dipindahkan ke Komisi IX.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Berikut daftar riwayat pendidikan, pekerjaan, dan organisasi Yanuar Prihatin.</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- SD Cipeujeuh II Cirebon. Tahun: 1977 - 1983</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- SMPN I Sindanglaut Cirebon. Tahun: 1983 - 1986</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- SMAN Sindanglaut Cirebon. Tahun: 1986 - 1989</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- Administrasi Niaga, Universitas Jakarta. Tahun: 1989 - 1996</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- Ilmu Politik, Universitas Indonesia. Tahun: 1999 - 2003</span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:16px"><span style="font-family:Calibri,sans-serif"><strong>Riwayat Pekerjaan</strong></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- Komisi II DPR RI, Sebagai: Tenaga Ahli. Tahun: 2005 - 2012</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- PT. Nirin Orbit Lintas, Sebagai: Direktur. Tahun: 2002 - 2003</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- PT KORINDO, Sebagai: Direktur. Tahun: 2001 - 2003</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- Universitas Jakarta , Sebagai: Dosen. Tahun: 1997 - 2001</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- FIA dan FISIP UI, Sebagai: Dosen. Tahun: 1997 - 2001</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- Majalah Vista TV, Sebagai: Stringer. Tahun: 1996 - 1997</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- LPPM Unija, Sebagai: Peneliti. Tahun: 1993 - 2001</span></span></p>

<p>&nbsp;</p>

<p><span style="font-size:16px"><span style="font-family:Calibri,sans-serif"><strong>Riwayat Organisasi</strong></span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- PP Lakpesdam NU, Sebagai: Bendahara. Tahun: 2015 - 2020</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- PP LWP NU, Sebagai: Bendahara. Tahun: 2009 - 2014</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- DPP PKB, Sebagai: Ketua DPP. Tahun: 2008 -</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- PP. LAKPESDAM NU, Sebagai: Wakil Sekretaris. Tahun: 2004 - 2009</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- DPC PKB Kota Bekasi , Sebagai: Wakil Sekretaris. Tahun: 2002 - 2007</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- DPP PKB, Sebagai: Anggota Departemen. Tahun: 2002 - 2005</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">- PC. PMII DKI JARI, Sebagai: Sekretaris. Tahun: 1992 - 1993</span></span></p>

<p>&nbsp;</p>

<p><strong><span style="font-size:16px"><span style="font-family:Calibri,sans-serif">Riwayat Pergerakan</span></span></strong></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">PMII DKI Jakarta - Sekretaris. Tahun: 1992 - 1993</span></span></p>

<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">.</span></span></p>


`;
  return (
    <View>
      <Header
        title="Profil "
        subTitle="Profil Yanuar Prihatin"
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <HTMLView value={htmlContent} stylesheet={styles} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 25,
  },
  content: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  p: {
    marginBottom: -70,
    lineHeight: 20,
  },
});
