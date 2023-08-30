import { FeedbackButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, idx) => (
        <FeedbackButton
          key={idx}
          type="button"
          value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </FeedbackButton>
      ))}
    </div>
  );
};
