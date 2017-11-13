import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Tabs, Tab } from 'material-ui/Tabs';
import SearchBar from 'material-ui-search-bar';
//Route
import { Route, Link } from 'react-router-dom';
import ResultPage from './ResultPage';
import RestaurantPage from './RestaurantPage';

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
			<IconButton>
				<MoreVertIcon />
			</IconButton>
		}
		anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
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
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '1 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: '/test',
					buttonLabel: '4 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '2 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '5 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '2 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '3 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '4 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '6 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '10 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '5 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Tabbouleh',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '1 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Batata harra',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '3 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'شيخ محشي',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '8 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'ورق عريش',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '8 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Rez Blaban',
					img: '/Images/recipe/hummus.jpg',
					link: 'http://www.google.com',
					buttonLabel: '6 Restaurants',
					buttonLink: 'http://www.google.com'
				},
				{
					alt: 'blah',
					title: 'Me7shi Koussa',
					img: '/Images/recipe/hummus.jpg',
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
						path={'/test'}
						render={props => {
							return <ResultPage />;
						}}
					/>
					<Route
						exact
						path={'/test/test2'}
						render={props => {
							return <RestaurantPage />;
						}}
					/>
					<Route
						exact
						path={'/'}
						render={props => {
							return (
								<div>
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
													width: '300px',
													marginLeft: '550px',
													marginBottom: '20px'
												}}
											/>
											<SearchBar
												dataSource={this.state.dataSource}
												onChange={value =>
													this.setState({
														dataSource: [value, value + value, value + value + value]
													})}
												onRequestSearch={() => console.log('onRequestSearch')}
												style={{
													margin: '0 auto',
													maxWidth: 800
												}}
											/>
										</div>
									</div>
									<Tabs initialSelectedIndex={2}>
										<Tab label="Monday">
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
													style={{ backgroundColor: 'red', marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
												/>
											</div>
										</Tab>
										<Tab label="Tuesday">
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
													style={{ backgroundColor: 'red', marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
												/>
											</div>
										</Tab>
										<Tab label="Wednesday">
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
													backgroundColor={'white'}
													style={{ marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
													onClick={e => this.handleShowMoreClick()}
												/>
											</div>
										</Tab>
										<Tab label="Thursday">
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
													style={{ backgroundColor: 'red', marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
												/>
											</div>
										</Tab>
										<Tab label="Friday">
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
													style={{ backgroundColor: 'red', marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
												/>
											</div>
										</Tab>
										<Tab label="Saturday">
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
													style={{ backgroundColor: 'red', marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
												/>
											</div>
										</Tab>
										<Tab label="Sunday">
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
													style={{ backgroundColor: 'red', marginBottom: '20px' }}
													label="Show More"
													fullWidth={true}
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
