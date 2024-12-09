import {
	StyledBoxText,
	StyledText,
	StyledTitleText
} from './textResult.styles';

const TextResult = () => {
	return (
		<StyledBoxText>
			<StyledTitleText>Great</StyledTitleText>
			<StyledText>
				Your performance exceed 65% of the people conducting the test here!
			</StyledText>
		</StyledBoxText>
	);
};

export default TextResult;
