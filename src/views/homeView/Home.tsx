import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toggleTheme } from "../../redux/slices/themeSlice";

const Home = () => {
  const isDark = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();

  return (
    <main>
      <h1>This is home page</h1>
      <button onClick={() => dispatch(toggleTheme(!isDark))}>
        change theme
      </button>
    </main>
  );
};

export default Home;
