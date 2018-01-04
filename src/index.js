import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { setInterval } from 'timers';

// class ShoppingList extends React.Component{
//     render(){
//         return{
//             <div className="shopping-list"></div>
//         }
//     }
// }

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>
//     }
//     return <h1>Hello, Stranger. </h1>
// }

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }


// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };
// // const title = response.potentiallyMaliciousInput;
// // const element = <h1>{title}</h1>;

// const element = (
//     <div>
//         <h1>Hello, {getGreeting(user)}! </h1>
//         <h2>Good to See you here</h2>
//     </div>
// );

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, World !</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );

// }

// setInterval(tick, 1000);

// const props = {
//     name: "test"
// };

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

// const element = <Welcome name="Sara" />

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="cac" />
//             <Welcome name="test" />
//         </div>
//     )
// }

//section START **
// const comment = {
//     date: new Date(),
//     text:
//         'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl:
//             'http://placekitten.com/g/64/64',
//     },
// };

// function formatDate(date) {
//     return date.toLocaleDateString();
// }

// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <UserInfo user = {props.author} />
//                 <div className="Comment-text">{props.text}</div>
//                 <div className="Comment-date">{formatDate(props.date)}</div>
//             </div>
//         </div>
//     )
// }

// function Avatar(props) {
//     return (
//         <img className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }

// function UserInfo(props){
//     return(
//         <div className = "UserInfo">
//             <Avatar user = {props.user} />
//             <div className = "UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }

// ReactDOM.render(
//     <Comment 
//         author = {comment.author}
//         date = {comment.date}
//         text = {comment.text}
//     />,
//     document.getElementById('root')
// );

//section END **

//section START
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }
// function tick() {
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root')
//     );
// }
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() };
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }
// function activateLasers(){
//     console.log('Lasers activated');
// }
// function ActionLink(){
//     function handleClick(e){
//         e.preventDefault();
//         console.log('The link was clicked');
//     }

//     return(
//         <a href="#" onClick={handleClick}>Click me</a>
//     )
// }
// function App() {
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//             <button onClick={activateLasers}>Activate Lasers</button>

//             <ActionLink />
//         </div>
//     );
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// setInterval(tick, 1000);
//section END

// constructor(props){
//     super(props);
//     this.state = {
//         posts:[],
//         comments: []
//     }
// }

// START
// class Toggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {isToggleOn: true};

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.setState(prevState => ({
//             isToggleOn : !prevState.isToggleOn
//         }));
//         console.log('State :' + this.state.isToggleOn);
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={this.handleClick}>
//                     {this.state.isToggleOn ? 'ON' : 'OFF'}
//                 </button>
//             </div>
//         )
//     }
// }<br />

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );

// END

// START

// class LoggingButton extends React.Component {
//     // handleClick = () => {
//     //     console.log('this is: ', this);
//     // }

//     // render(){
//     //     return(
//     //         <button onClick={this.handleClick}>click me</button>
//     //     );
//     // }

//     handleClick() {
//         console.log('this is: ', this);
//     }

//     render(){
//         return(
//             <button onClick={(e) => this.handleClick(e)}>click me</button>
//         );
//     }
// }

// function UserGreeting(props) {
//     return <h1> Welcome back! </h1>
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

// ReactDOM.render(
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );
// END

// START
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>Login </button>
//     )
// }
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>Logout </button>
//     )
// }


// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.toggle = this.toggle.bind(this);
//         this.state = { isLoggedIn: false };
//     }

//     handleLoginClick() {
//         this.setState({ isLoggedIn: true });
//     }

//     handleLogoutClick() {
//         this.setState({ isLoggedIn: false });
//     }

//     toggle() {
//         console.log(this.state.isLoggedIn);
//         this.setState({ isLoggedIn: !this.state.isLoggedIn })
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;

//         // let button = null;
//         // if (isLoggedIn) {
//         //     button = <LogoutButton onClick={this.handleLogoutClick} />;
//         // } else {
//         //     button = <LoginButton onClick={this.handleLoginClick} />;
//         // }

//         // return (
//         //     <div>
//         //         <Greeting isLoggedIn={isLoggedIn} />
//         //         {button}
//         //     </div>
//         // )
//         return (
//             <div>
//               {isLoggedIn ? (
//                 <LogoutButton onClick={this.handleLogoutClick} />
//               ) : (
//                 <LoginButton onClick={this.handleLoginClick} />
//               )}
//             </div>
//           );
//     }

//     // render() {
//     //     const isLoggedIn = this.state.isLoggedIn;
//     //     return (
//     //         <div>
//     //             <div>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>
//     //             <div><button onClick={this.toggle}>toggle</button></div>
//     //         </div>
//     //     )
//     // }
// }

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// )
// END

// START
// function Mailbox(props){
//     const unreadMessages = props.unreadMessages;
//     return(
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     You have {unreadMessages.length} unread messages.
//                 </h2>
//             }
//         </div>
//     );
// }

// const messages = ['React','Re: React','Re:Re: React'];
// ReactDOM.render(
//     <Mailbox unreadMessages={messages}/>,
//     document.getElementById('root')
// )
// END

// START
// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }

//     return (
//         <div className="warning">Warning!</div>
//     );
// }

// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { showWarning: true }
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }

//     handleToggleClick() {
//         this.setState(prevState => ({
//             showWarning: !prevState.showWarning
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
// );

// function NumberList(props) {
//     const numbers = props.numbers;
//     // const doubled = numbers.map((number) => number * 2);
//     // console.log(doubled);
//     const listItems = numbers.map((number) =>
//      <li key={number.toString()}>{number}</li>)
//     return (
//         <ul>{listItems}</ul>
//     );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers = {numbers}/>,
//     document.getElementById('root')
// );

// END

// START
// function Blog(props) {
//     const sidebar = (
//       <ul>
//         {props.posts.map((post) =>
//           <li key={post.id}>
//             {post.title}
//           </li>
//         )}
//       </ul>
//     );
//     const content = props.posts.map((post) =>
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//     );
//     return (
//       <div>
//         {sidebar}
//         <hr />
//         {content}
//       </div>
//     );
//   }

//   const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];
//   ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
//   );
// END

// START
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
//   ReactDOM.render(
//       <EssayForm />,
//       document.getElementById('root')
//   )
// END

//START
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
            <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(name + ': ' + value);
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
            <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
            <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
//   ReactDOM.render(
//       <Reservation />,
//       document.getElementById('root')
//   )
//END

// ReactDOM.render(<input value="hi" />, document.getElementById('root'));

// setTimeout(function() {
//   ReactDOM.render(<input value={null} />,  document.getElementById('root'));
// }, 1000);

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = { temperature: '' };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        // return (
        //     <fieldset>
        //         <legend>Enter temperature in Celsius:</legend>
        //         <input
        //             value={temperature}
        //             onChange={this.handleChange} />

        //         <BoilingVerdict
        //             celsius={parseFloat(temperature)} />

        //     </fieldset>
        // );
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        // this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// )

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
        </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
        </p>
        </FancyBorder>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

//   function App() {
//     return (
//       <SplitPane
//         left={
//           <Contacts />
//         }
//         right={
//           <Chat />
//         } />
//     );
//   }

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />

    );
}

//   ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root')
// )

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    );
}

ReactDOM.render(
    <ListOfTenThings />,
    document.getElementById('root')
)