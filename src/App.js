import classes from './App.module.css';
import TextBox from './Components/Text/TextBox';

const App = () => {
	return (
		<main>
			<div className={classes.container}>
				<TextBox />
			</div>
		</main>
	);
}

export default App;
