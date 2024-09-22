import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import styles from "./UserOptions.module.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { logout } from "../../redux/actions/userActions";
import BtnLoader from "../loaders/BtnLoader";

const UserOptions: React.FC = () => {
  const { status } = useAppSelector((state) => state.logoutUser);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "success") {
      navigate({ pathname: "/" });
      window.location.reload();
    }
  }, [status, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, translateX: "100px" }}
      animate={{
        opacity: 1,
        translateX: 0,
        transition: { duration: 0.5, type: "spring" },
      }}
      exit={{
        opacity: 0,
        translateX: "100px",
        transition: { duration: 0.5, type: "spring" },
      }}
      className={styles.container}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.links}>
        <span className={styles.link}>Your Profile</span>
        <span className={styles.link}>Some Other Link</span>
        <span className={styles.link}>Some Other Link</span>
        <span className={styles.link}>Some Other Link</span>
      </div>
      <div className={styles.logout}>
        {status === "loading" ? (
          <BtnLoader />
        ) : (
          <span onClick={() => dispatch(logout())}>Logout</span>
        )}
      </div>
    </motion.div>
  );
};

export default UserOptions;
