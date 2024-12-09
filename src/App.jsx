import ButtonContinue from './components/ButtonContinue/ButtonContinue';
import CardBox from './components/CardBox/CardBox';
import SUMMARY_INFO from './components/Constants/summary';
import Container from './components/Container/Container';
import Elements from './components/Elements/Elements';
import Result from './components/Result/Result.JSX';
import ResultBox from './components/ResultBox/ResultBox';
import SummaryBox from './components/SummaryBox/SummaryBox';
import TextResult from './components/TextResult/TextResult';
import TitleResult from './components/TitleResult/TitleResult';
import TitleSummary from './components/TitleSummary/TitleSummary';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<Container>
			<GlobalStyles />
			<CardBox>
				<ResultBox>
					<TitleResult />
					<Result />
					<TextResult />
				</ResultBox>
				<SummaryBox>
					<TitleSummary />
					{SUMMARY_INFO.map(info => (
						<Elements key={info.id} {...info} />
					))}
					<ButtonContinue />
				</SummaryBox>
			</CardBox>
		</Container>
	);
};

export default App;
