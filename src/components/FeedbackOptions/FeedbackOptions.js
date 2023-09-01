import { FeedbackButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <FeedbackButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </div>
  );
};
