import { useNavigate } from "react-router-dom";
import { PageLoader } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import styles from "./Redirect.module.scss";
import { useEffect } from "react";
import { fetchSessionUser } from "../../redux/actions/userActions";

const Redirect: React.FC = () => {
  const { status } = useAppSelector((state) => state.sessionUser);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "success") {
      navigate({ pathname: "/" });
    } else {
      dispatch(fetchSessionUser());
    }
  }, [status, dispatch]);

  return (
    <div className={styles.container}>
      <PageLoader />
      <span>redirecting...</span>
    </div>
  );
};

export default Redirect;
