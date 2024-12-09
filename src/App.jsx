import CardBox from './components/CardBox/CardBox';
import ResultBox from './components/ResultBox/ResultBox';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<Container>
			<GlobalStyles />
			<CardBox>
				<ResultBox/>
				<SummaryBox>
							<TitleSummary/>
						
				</SummaryBox>
			</CardBox>
		</Container>
	);
};

export default App;
