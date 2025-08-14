import scss from "./Loader.module.scss";
const Loader = () => {
  return (
    <div style={{ paddingBlock: "30vh" }}>
      <span className={scss.loader}></span>
      <span className={scss.loader} id={scss.loader2}></span>;
    </div>
  );
};

export default Loader;
