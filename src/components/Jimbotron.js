export const Jimbotron = (props) => {
  let titleJimbotron = props.titleJimbotron;
  let subTitleJimbotron = props.subTitleJimbotron;
  return (
    <div className="jimbotron">
      <h2 className="titleJimbotron">
        {props.isFav ? "Hurray!" : titleJimbotron}
      </h2>
      <h3 className="subTitleJimbotron">{subTitleJimbotron}</h3>
    </div>
  );
};
