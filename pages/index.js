import { Fragment } from "react";

import styles from "../styles/Login.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

export default function Home() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.kotak}>
          <div className={styles.insert}>
            <form>
              <div className="ms-4 ">
                <div className={styles.masuk}>Masuk</div>
                <input type="email" className={styles.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="ms-4">
                <input type="password" className={styles.password} id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className={styles.show}>
                <Link href={"asdad"}>
                  <a>Show</a>
                </Link>
              </div>
              <div className={styles.forgotpassword}>Lupa Password?</div>
              <div>
                <button
                  style={{
                    position: "absolute",
                    width: 500,
                    height: 59,
                    left: 710,
                    top: 500,
                    background: "#EB3F36",
                    boxShadow: "0px 7px 6px rgba(0, 0, 0, 0.17)",
                    borderRadius: 7,
                  }}
                  type="submit"
                  className="btn btn-primary"
                >
                  <span className={styles.submit}> MASUK </span>
                </button>
              </div>
            </form>
            <div>
              <hr
                style={{
                  position: "absolute",
                  width: 420,
                  height: 1,
                  left: 750,
                  top: 600,
                  background: "#C2C2C2",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
