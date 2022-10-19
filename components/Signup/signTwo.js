import styles from "../../components/Signup/css/Signup.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

export default function SignTwo() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.masuk}>
            <Link href="/signup">
              <a>
                <i className="bi bi-arrow-left "></i>
              </a>
            </Link>
            <span>Kembali</span>
          </div>
          <div className={styles.form}>
            <form>
              <div className={styles.namaDepan}>
                <input className="form-control form-control-lg" type="text" placeholder="Nomor Telphone" aria-label=".form-control-lg example" />
              </div>
              <div className={styles.namaBelakang}>
                <input className="form-control form-control-lg" type="password" placeholder="Password" aria-label=".form-control-lg example" />
              </div>
              <div className={styles.email}>
                <input className="form-control form-control-lg" type="password" placeholder="Konfirmasi Password" aria-label=".form-control-lg example" />
              </div>
              <div className="d-grid">
                <button className="btn btn-danger shadow p-3 mb-3" type="button">
                  SELANJUTNYA
                </button>
              </div>
              <div className="d-grid">
                <hr />
              </div>
              <div className={styles.tulisan}>
                <span> Sudah punya akun? </span>
                <span className={styles.tulisanMasuk}>
                  <Link href="/">
                    <a> Masuk </a>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
