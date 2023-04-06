import portraitImage from '../img/JoelHiltonHeadshot.jpg';

function Home() {
  return (
    <div className="text-center p-3">
      <h1>Home</h1>
      <div className="mx-auto p-3">
        <img src={portraitImage} alt="Joel Hilton" height="400" />
      </div>
    </div>
  );
}

export default Home;
