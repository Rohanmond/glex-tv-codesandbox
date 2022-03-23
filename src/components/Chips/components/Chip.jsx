import "./Chip.css";
const Chip = ({ element }) => {
  const { _id, name } = element;
  return (
    <div className="chip">
      <p className="font-wt-semibold">{name}</p>
    </div>
  );
};
export default Chip;
