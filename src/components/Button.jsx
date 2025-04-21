export default function Button(props) {
  return (
    <>
      <button
        value={props.value}
        className={props.value === "=" ? "key eq" : "key"}
        onClick={props.click}
      >
        {props.value}
      </button>
    </>
  );
}
