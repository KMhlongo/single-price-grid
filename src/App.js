import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div className='community'>
          <h1>Join our community</h1>
          <span>30-day, hassle-free money back guarantee</span>
          <p>Gain access to our full library of tutorials along with expert code reviews. 
          Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className='subscription'>
          <h2>Monthly Subscription</h2>
          <div>
            <span>$29</span>
            <p>per month</p>
          </div>
          <p>Full access for less than $1 a day</p>
          <div className='button'>Sign Up</div>
        </div>
        <div className='whyus'>
          <h2>Why Us</h2>
          <p>Tutorials by industry experts</p>
          <p>Peer &amp; expert code review</p>
          <p>Coding exercises</p>
          <p>Access to our GitHub repos</p>
          <p>Community forum</p>
          <p>Flashcard decks</p>
          <p>New videos every week</p>
        </div>
      </main>
    </div>
  );
}

export default App;
