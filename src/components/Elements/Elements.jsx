import {
	StyledBoxElement,
	StyledImg,
	StyledQuantity,
	StyledTitleElement,
	StyledTopQuantity
} from './elements.styles';

const Elements = ({ image, title, quantity, color }) => {
	return (
		<StyledBoxElement $color={color}>
			<StyledTitleElement $color={color}>
				<StyledImg src={image} alt='' />
				{title}
			</StyledTitleElement>
			<StyledQuantity>
				{quantity}
				<StyledTopQuantity>/100</StyledTopQuantity>
			</StyledQuantity>
		</StyledBoxElement>
	);
};

export default Elements;
