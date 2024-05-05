import PlaystoreLogo from "../../assets/playstore.png";
import WorkerImage from "../../assets/woker_holding_phone.jpg";

const AndroidApp = () => {
  return (
    <div className="mt-20 flex items-center flex-col gap-10 md:flex-row">
      <div>
        <h1 className="text-3xl font-bold">Book workers from your phone</h1>
        <p className="mt-4 text-lg text-gray-500">
          Experience the notable working services on your Android/iOS devices in
          this <br />
          revolutionizing era full of technological evolution. With one click,
          choose the <br /> best service at a reasonable price without any
          hurdles.
        </p>
        <div className="mt-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="playstore-logo"
          >
            <img src={PlaystoreLogo} alt="playstore" />
          </a>
        </div>
      </div>

      <div className="">
        <img
          src={WorkerImage}
          alt="worker-with-app"
          className="w-72 rounded-lg"
        />
      </div>
    </div>
  );
};

export default AndroidApp;
