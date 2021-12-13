export default function Statistics(props) {
  const { total, positive } = props;
  const propsArr = Object.entries(props).slice(0, 3);

  return (
    <ul className="statistics">
      {propsArr.map(keyName => {
        return (
          <li className="item" key={keyName}>
            {keyName[0]}: {keyName[1]}
          </li>
        );
      })}
      <li className="item" key="total">
        Total: {total}
      </li>
      <li className="item" key="positive">
        Positive feedback: {positive}%
      </li>
    </ul>
  );
}
