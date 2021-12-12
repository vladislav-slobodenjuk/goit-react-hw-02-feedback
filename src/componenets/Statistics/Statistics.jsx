export default function Statistics(props) {
  return (
    <ul>
      {props.map(statName => {
        return (
          <li className="item" key={statName}>
            Good: {this.state.statName}
          </li>
        );
      })}
    </ul>
  );
}
