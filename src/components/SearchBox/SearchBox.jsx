import { useDispatch, useSelector } from "react-redux";
import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selectors";
import { changeFilter, changeFilterByNumber } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const filterByNumber = useSelector(selectNumberFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleChangeFilterByNumber = (e) => {
    dispatch(changeFilterByNumber(e.target.value));
  };

  return (
    <div className={css.searhForm}>
      <p>Find contact by name</p>
      <input type="text" value={filter} onChange={handleChange} />
      <p>Find contact by number</p>
      <input
        type="text"
        value={filterByNumber}
        onChange={handleChangeFilterByNumber}
      />
    </div>
  );
}
