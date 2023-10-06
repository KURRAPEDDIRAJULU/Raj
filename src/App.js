import './App.css';
import RandumNumber from './Components/RandumNumber'
import CashWithdrawal from './Components/CashWithdrawal';
import DestinationSearch from './Components/DestinationSearch';
import BrowserHistory from './Components/History';
import LettersCalculator from './Components/LettersCalculator';
import SimpleTodos from './Components/SimpleTodos';
import TodoList from './Components/Todos';
const denominationsList = [
	{
	  id: 1,
	  value: 50,
	},
	{
	  id: 2,
	  value: 100,
	},
	{
	  id: 3,
	  value: 200,
	},
	{
	  id: 4,
	  value: 500,
	},
  ]

  const destinationsList = [
    {
      id: 1,
      name: 'Melaka Mosque',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
    },
    {
      id: 2,
      name: 'Shrubland',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
    },
    {
      id: 3,
      name: 'New York',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
    },
    {
      id: 4,
      name: 'Escarpment',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
    },
    {
      id: 5,
      name: 'Westminster Abbey',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
    },
    {
      id: 6,
      name: 'South Downs National Park',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
    },
    {
      id: 7,
      name: 'National Historic Site',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
    },
    {
      id: 8,
      name: 'Tower Bridge',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
    },
    {
      id: 9,
      name: 'Arc Here',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
    },
    {
      id: 10,
      name: 'Steeple',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
    },
    {
      id: 11,
      name: 'Glaciokarst',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
    },
    {
      id: 12,
      name: 'Parco Nazionale delle Cinque Terre',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
    },
  ]

  
  const initialHistoryList = [
    {
      id: 0,
      timeAccessed: '07:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
      title: 'Instagram',
      domainUrl: 'instagram.com',
    },
    {
      id: 1,
      timeAccessed: '05:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
      title: 'Twitter. It’s what’s happening / Twitter',
      domainUrl: 'twitter.com',
    },
    {
      id: 2,
      timeAccessed: '04:35 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
      title: 'Facebook – log in or sign up',
      domainUrl: 'facebook.com',
    },
    {
      id: 3,
      timeAccessed: '04:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
      title: 'LinkedIn: Log In or Sign Up',
      domainUrl: 'linkedin.com',
    },
    {
      id: 4,
      timeAccessed: '04:00 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
      title: 'Hashnode: Everything you need to start blogging as a developer!',
      domainUrl: 'hashnode.com',
    },
    {
      id: 5,
      timeAccessed: '03:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
      title: 'GitHub: Where the world builds software · GitHub',
      domainUrl: 'github.com',
    },
    
    {
      id: 6,
      timeAccessed: '02:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
      title: 'React – A JavaScript library for building user interfaces',
      domainUrl: 'reactjs.org',
    },
    {
      id: 7,
      timeAccessed: '01:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
      title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
      domainUrl: 'stackoverflow.com',
    },
    
    {
      id: 8,
      timeAccessed: '09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Gmail',
      domainUrl: 'mail.google.com',
    },
    {
      id: 9,
      timeAccessed: '09:00 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
      title: 'Google',
      domainUrl: 'google.com',
    },
    ]

    const initialTodosList = [
      {
        id:1,
        tittle:'Book the ticket for today evening',

      },

      {
        id:2,
        tittle:'confirm the slot for the yoga for night'
      },

      {
        id:3,
        tittle:'confirm the slot for the yoga for friday'
      },
      {
        id:4,
        tittle:'confirm the slot for the yoga for saturday '
      },
      {
        id:5,
        tittle:'confirm the slot for the yoga for sunday'
      },
      {
        id:6,
        tittle:'rent the slot for the yoga '
      },
      {
        id:7,
        tittle:'drop the slot for the yoga '
      },


    ]
  
function App() {
  return (
    <div className="App">

        <RandumNumber />
        <CashWithdrawal denominationsList ={denominationsList }/>

        <DestinationSearch destinationsList={destinationsList}/>
          
        <BrowserHistory initialHistoryList={initialHistoryList}/>
        <LettersCalculator/>

        <SimpleTodos initialTodosList={initialTodosList}/>
        <TodoList/>
    </div>
  );
}

export default App;
