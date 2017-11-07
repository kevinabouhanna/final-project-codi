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

class App extends Component {
	state = {
		logged: true
	};
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange = (event, logged) => {
		this.setState({ logged: logged });
	};

	render() {
		return (
			<MuiThemeProvider>
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
								marginBottom: '80px',
							}}
						>
							<img
								src={'/Images/logo.png'}
								alt={''}
								style={{
									width: '300px',
									marginLeft: '550px',
									marginBottom: '20px',
								}}
							/>
							<SearchBar
								dataSource={this.state.dataSource}
								onChange={value =>
									this.setState({ dataSource: [value, value + value, value + value + value] })}
								onRequestSearch={() => console.log('onRequestSearch')}
								style={{
									margin: '0 auto',
									maxWidth: 800
								}}
							/>
						</div>
					</div>
					<Tabs>
						<Tab label="Monday">
							<div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
							</div>
							<div>
							<RaisedButton style={{backgroundColor: 'red', marginBottom: '20px'}} label="Show More" fullWidth={true} />
							</div>
						</Tab>
						<Tab label="Tuesday">
							<div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
							</div>
						</Tab>
						<Tab label="Wednesday">
							<div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
							</div>
						</Tab>
						<Tab label="Thursday">
							<div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
							</div>
						</Tab>
						<Tab label="Friday">
							<div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
							</div>
						</Tab>
						<Tab label="Saturday">
							<div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
							</div>
						</Tab>
						<Tab label="Sunday">
							<div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
								<div>
									<div className="card" />
									<div className="card" />
									<div className="card" />
									<div className="card" />
								</div>
							</div>
						</Tab>
					</Tabs>
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