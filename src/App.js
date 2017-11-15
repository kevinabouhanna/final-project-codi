import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import SearchBar from 'material-ui-search-bar';
//Route
import { Route, Link } from 'react-router-dom';
import ResultPage from './ResultPage';
import RestaurantPage from './RestaurantPage';
import Avatar from 'material-ui/Avatar';

class Login extends Component {
	static muiName = 'RaisedButton';
	constructor(props) {
		super(props);
		this.state = {
			handleChange: props.handleChange
		};
	}

	render() {
		return (
			<div>
				<FlatButton
					label="Login"
					style={style}
					onClick={eventLogIn => {
						this.state.handleChange(eventLogIn, true);
					}}
				/>
				<RaisedButton label="Create An Account" primary={true} style={style} />
			</div>
		);
	}
}

const style = {
	margin: 10
};

const Logged = props => (
	<IconMenu
		targetOrigin={{ horizontal: 'right', vertical: 'top' }}
		iconButtonElement={
			<FlatButton
				label="Welcome Kevin"
				style={{height:'48px'}}
				icon={
					<Avatar src="/Images/restaurantlogo/sohiwshahi.png" /> 
					}
		
			/>
		}
		anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
	>
		<MenuItem primaryText="Profile" />
		<MenuItem primaryText="Reminders" />
		<MenuItem primaryText="Reviews" />
		<MenuItem
			primaryText="Sign out"
			onClick={eventSignOut => {
				props.handleChange(eventSignOut, false);
			}}
		/>
	</IconMenu>
);

Logged.muiName = 'IconMenu';

const Recipe = ({ img, link, title, children, alt, buttonLabel, buttonLink }) => (
	<div className="card">
		<div>
			<Link to={link}>
				<img alt={alt} className="card-image" src={img} />
				<div className="card-content">
					<h2>{title}</h2>
					<div>{children}</div>
					<RaisedButton className="buttonLink" label={buttonLabel} />
				</div>
			</Link>
		</div>
	</div>
);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logged: true,
			mealsToShow: 8,
			meals: [
				{
					alt: 'Me7shi Koussa',
					title: 'Me7shi Koussa',
					img: '/Images/recipe/me7shi.koussa.jpg',
					link: 'http://www.google.com',
					buttonLabel: '1 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'Batata Harra',
					title: 'Batata Harra',
					img: '/Images/recipe/batata.harra.jpg',
					link: '/batata.harra',
					buttonLabel: '3 Restaurants',
					buttonLink: '/batata.harra'
				},
				{
					alt: 'Lazanya',
					title: 'Lazanya',
					img: '/Images/recipe/lazanya.jpg',
					link: 'http://www.google.com',
					buttonLabel: '2 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'kebbi.belsayniye',
					title: 'Kebbi Bel Sayniye',
					img: '/Images/recipe/kebbi.belsayniye.jpg',
					link: 'http://www.google.com',
					buttonLabel: '5 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'Fawaregh',
					title: 'Fawaregh',
					img: '/Images/recipe/faware8.jpg',
					link: 'http://www.google.com',
					buttonLabel: '2 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'Fasoulya',
					title: 'Fasoulya',
					img: '/Images/recipe/fasoulya.jpg',
					link: 'http://www.google.com',
					buttonLabel: '3 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'Dawoud Basha',
					title: 'Dawoud Basha',
					img: '/Images/recipe/dawoud.basha.jpg',
					link: 'http://www.google.com',
					buttonLabel: '4 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'Bazilla',
					title: 'Bazilla',
					img: '/Images/recipe/bazilla.jpg',
					link: 'http://www.google.com',
					buttonLabel: '6 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'mjaddara',
					title: 'Mjaddara',
					img: '/Images/recipe/mjaddara.jpg',
					link: 'http://www.google.com',
					buttonLabel: '6 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'Mlukhiyye',
					title: 'Mlukhiyye',
					img: '/Images/recipe/mlu8iyye.jpg',
					link: 'http://www.google.com',
					buttonLabel: '5 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'noodels',
					title: 'Noodles',
					img: '/Images/recipe/noodels.jpg',
					link: 'http://www.google.com',
					buttonLabel: '1 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'Sbanigh',
					title: 'Sbanigh',
					img: '/Images/recipe/sbanigh.jpg',
					link: 'http://www.google.com',
					buttonLabel: '3 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'Sheikh Mehshi',
					title: 'شيخ محشي',
					img: '/Images/recipe/shei5.me7shi.jpg',
					link: 'http://www.google.com',
					buttonLabel: '8 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'ورق عريش',
					img: '/Images/recipe/wara2.3inab.png',
					link: 'http://www.google.com',
					buttonLabel: '8 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'Hummus',
					title: 'Hummus',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '6 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Yakhnet Batata',
					img: '/Images/recipe/ya5net.batata.jpg',
					link: 'http://www.google.com',
					buttonLabel: '3 Restaurants',
					buttonLink: 'http://www.google.com'
				}
			]
		};
	}
	handleChange = (event, logged) => {
		this.setState({ logged: logged });
	};
	handleShowMoreClick = () => {
		this.setState({
			mealsToShow: this.state.mealsToShow + 8
		});
	};

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Route
						exact
						path={'/batata.harra'}
						render={props => {
							return <ResultPage />;
						}}
					/>
					<Route
						exact
						path={'/batata.harra/sohi.w.shahi'}
						render={props => {
							return <RestaurantPage />;
						}}
					/>
					<Route
						exact
						path={'/'}
						render={props => {
							return (
								<div  style={{backgroundImage:'url(./Images/bg-pattern.png)'}}>
									<div className="App">
										<AppBar
											iconElementRight={
												this.state.logged ? (
													<Logged handleChange={this.handleChange} />
												) : (
													<Login handleChange={this.handleChange} />
												)
											}
											showMenuIconButton={false}
										/>
									</div>
									<div>
										<div
											style={{
												marginTop: '80px',
												minHeight: '200px',
												marginBottom: '80px'
											}}
										>
											<img
												src={'/Images/logo.png'}
												alt={''}
												style={{
													width: '380px',
													marginLeft: 'auto',
													marginRight: 'auto',
													marginBottom: '20px',
													display:'block'
												}}
											/>
											<SearchBar
												hintText={"Search for your meal here, e.g. Me7shi koussa, Kebbi bel sayniye, ورق عريش, شيخ محشي"}
												dataSource={this.state.dataSource}
												onChange={value =>
													this.setState({
														dataSource: [value]
													})}
												onRequestSearch={() => console.log('onRequestSearch')}
												style={{
													margin: '0 auto',
													maxWidth: 800
												}}
											/>
										</div>
									</div>
									<Tabs initialSelectedIndex={2} style={{backgroundColor:'rgb(224, 224, 224)'}}>
										<Tab label="Monday 13">
											<div>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
											</div>
											<div>
												<RaisedButton
													style={{ marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
													primary={true}
												/>
											</div>
										</Tab>
										<Tab label="Tuesday 14">
											<div>
												<Recipe
													alt="Fawaregh"
													title="Fawaregh"
													img="/Images/recipe/faware8.jpg"
													link="http://www.google.com"
													buttonLabel="5 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Me7shi Koussa"
													title="Me7shi Koussa"
													img="/Images/recipe/me7shi.koussa.jpg"
													link="http://www.google.com"
													buttonLabel="2 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Bazilla"
													title="Bazilla"
													img="/Images/recipe/bazilla.jpg"
													link="http://www.google.com"
													buttonLabel="3 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="mjaddara"
													title="Mjaddara"
													img="/Images/recipe/mjaddara.jpg"
													link="http://www.google.com"
													buttonLabel="8 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Sheikh Mehshi"
													title="شيخ محشي"
													img="/Images/recipe/shei5.me7shi.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Mlukhiyye"
													title="Mlukhiyye"
													img="/Images/recipe/mlu8iyye.jpg"
													link="http://www.google.com"
													buttonLabel="2 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="noodels"
													title="Noodles"
													img="/Images/recipe/noodels.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Sbanigh"
													title="Sbanigh"
													img="/Images/recipe/sbanigh.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
											</div>
											<div>
												<RaisedButton
													style={{marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
													primary={true}
												/>
											</div>
										</Tab>
										<Tab label="Wednesday 15">
											<div>
												{this.state.meals.map((meal, index) => {
													if (index >= this.state.mealsToShow) return false;
													return (
														<Recipe
															key={index}
															alt={meal.alt}
															title={meal.title}
															img={meal.img}
															link={meal.link}
															buttonLabel={meal.buttonLabel}
															buttonLink={meal.buttonLink}
														/>
													);
												})}
											</div>
											<div>
												<RaisedButton
													primary={true}
													style={{ marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
													onClick={e => this.handleShowMoreClick()}
												/>
											</div>
										</Tab>
										<Tab label="Thursday 16">
											<div>
												<Recipe
													alt="Bazilla"
													title="Bazilla"
													img="/Images/recipe/bazilla.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Fawaregh"
													title="Fawaregh"
													img="/Images/recipe/faware8.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="mjaddara"
													title="mjaddara"
													img="/Images/recipe/mjaddara.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Sbanigh"
													title="Sbanigh"
													img="/Images/recipe/sbanigh.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Mlukhiyye"
													title="Mlukhiyye"
													img="/Images/recipe/mlu8iyye.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Sbanigh"
													title="Sbanigh"
													img="/Images/recipe/sbanigh.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Fawaregh"
													title="Fawaregh"
													img="/Images/recipe/faware8.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="Sheikh Mehshi"
													title="Sheikh Mehshi"
													img="/Images/recipe/shei5.me7shi.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
											</div>
											<div>
												<RaisedButton
													style={{marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
													primary={true}
												/>
											</div>
										</Tab>
										<Tab label="Friday 17">
											<div>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
											</div>
											<div>
												<RaisedButton
													style={{marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
													primary={true}
												/>
											</div>
										</Tab>
										<Tab label="Saturday 18">
											<div>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
											</div>
											<div>
												<RaisedButton
													style={{marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
													primary={true}
												/>
											</div>
										</Tab>
										<Tab label="Sunday 19">
											<div>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
												<Recipe
													alt="blah"
													title="Tabbouleh"
													img="/Images/recipe/hummus.jpg"
													link="http://www.google.com"
													buttonLabel="7 Restaurants"
													buttonLink="http://www.google.com"
												/>
											</div>
											<div>
												<RaisedButton
													style={{marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
													primary={true}
												/>
											</div>
										</Tab>
									</Tabs>
								</div>
							);
						}}
					/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;

/* const palette = {
  primary1Color: '#ffc20e',
  primary2Color: '#e30413'
}

const theme = {
  palette: palette,
  raisedButton: {
    color: palette.primary1Color,
    textColor: palette.primary1Color,
    primaryColor: palette.primary1Color,
    primaryTextColor: palette.primary1Color,
    secondaryColor: palette.primary1Color,
    secondaryTextColor: palette.primary1Color,
    disabledColor: palette.primary1Color,
    disabledTextColor: palette.primary1Color,
  }
}

<MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <div className='appContainer'>
       {children}
    </div>
</MuiThemeProvider>
*/
