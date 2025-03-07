import { Link } from 'react-router-dom';

const Home = () => {
  const apis = [
    { name: 'Random Code Generator', type: 'random-code', icon: '🎲', description: 'Generate unique random codes' },
    { name: 'Random Color Generator', type: 'random-color', icon: '🎨', description: 'Create beautiful random colors' },
    { name: 'Random Quote Generator', type: 'random-quote', icon: '💭', description: 'Get inspirational quotes' },
    { name: 'Random Joke Generator', type: 'random-joke', icon: '😄', description: 'Get funny jokes' },
    { name: 'Random Recipe Generator', type: 'random-recipe', icon: '🍳', description: 'Discover new recipes' },
    { name: 'Random Movie Generator', type: 'random-movie', icon: '🎬', description: 'Find movies to watch' },
    { name: 'Random Book Generator', type: 'random-book', icon: '📚', description: 'Discover new books' },
    { name: 'Random Fact Generator', type: 'random-fact', icon: '💡', description: 'Learn interesting facts' },
    { name: 'Random Activity Generator', type: 'random-activity', icon: '🎯', description: 'Find something to do' },
    { name: 'Random Name Generator', type: 'random-name', icon: '👤', description: 'Generate random names' }
  ];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-5">Welcome to API Hub</h1>
      <div className="row g-4">
        {apis.map((api) => (
          <div key={api.type} className="col-md-4">
            <Link to={`/api/${api.type}`} className="text-decoration-none text-dark">
              <div className="card h-100 hover-effect">
                <div className="card-body text-center">
                  <div className="display-1 mb-3">{api.icon}</div>
                  <h5 className="card-title mb-3">{api.name}</h5>
                  <p className="text-muted">{api.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
