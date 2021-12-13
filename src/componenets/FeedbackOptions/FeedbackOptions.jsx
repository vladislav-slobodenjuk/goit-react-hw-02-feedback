export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="Counter__controls">
      <ul className="buttonList">
        {options.map(option => {
          return (
            <li className="buttonList__item" key={option}>
              <button
                className={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
