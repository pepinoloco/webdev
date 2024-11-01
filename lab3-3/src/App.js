import SearchBar from './SearchBar';

const App = () => {
  const handleSubmit = (term) => {
    console.log('Doing a search for ', term);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;