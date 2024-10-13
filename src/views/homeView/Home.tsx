import { test } from "../../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Home = () => {
  const { error } = useAppSelector((state) => state.test);

  const dispatch = useAppDispatch();

  console.log(error);

  return (
    <main>
      <h1>This is home page</h1>
      <button onClick={() => dispatch(test())}>get test endpoint</button>
    </main>
  );
};

export default Home;
