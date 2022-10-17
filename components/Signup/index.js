import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/Signup.module.css";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.masuk}>
            <span> Daftar Sekarang</span>
          </div>
          <div className={styles.form}>
            <form>
              <div className={styles.namaDepan}>
                <input className="form-control form-control-lg" type="text" placeholder="Nama Depan" aria-label=".form-control-lg example" />
              </div>
              <div className={styles.namaBelakang}>
                <input className="form-control form-control-lg" type="text" placeholder="Nama Belakang" aria-label=".form-control-lg example" />
              </div>
              <div className={styles.email}>
                <input className="form-control form-control-lg" type="email" placeholder="Email" aria-label=".form-control-lg example" />
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
                <Link href="/">
                  <a> Masuk </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
