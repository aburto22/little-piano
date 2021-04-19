const Button = ReactBootstrap.Button;

const DATA = {
  normal: [
    {
      text: "Q",
      id: "audio1",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(1).wav?raw=true",
    },
    {
      text: "W",
      id: "audio2",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(2).wav?raw=true",
    },
    {
      text: "E",
      id: "audio3",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(3).wav?raw=true",
    },
    {
      text: "A",
      id: "audio4",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(4).wav?raw=true",
    },
    {
      text: "S",
      id: "audio5",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(5).wav?raw=true",
    },
    {
      text: "D",
      id: "audio6",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(6).wav?raw=true",
    },
    {
      text: "Z",
      id: "audio7",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(7).wav?raw=true",
    },
    {
      text: "X",
      id: "audio8",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(8).wav?raw=true",
    },
    {
      text: "C",
      id: "audio9",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(9).wav?raw=true",
    },
  ],
  high: [
    {
      text: "Q",
      id: "audio10",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(10).wav?raw=true",
    },
    {
      text: "W",
      id: "audio11",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(11).wav?raw=true",
    },
    {
      text: "E",
      id: "audio12",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(12).wav?raw=true",
    },
    {
      text: "A",
      id: "audio13",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(13).wav?raw=true",
    },
    {
      text: "S",
      id: "audio14",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(14).wav?raw=true",
    },
    {
      text: "D",
      id: "audio15",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(15).wav?raw=true",
    },
    {
      text: "Z",
      id: "audio16",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(16).wav?raw=true",
    },
    {
      text: "X",
      id: "audio17",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(17).wav?raw=true",
    },
    {
      text: "C",
      id: "audio18",
      src:
        "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(18).wav?raw=true",
    },
  ],
};

function DrumKey({ id, text, src, playMe, toggle }) {
  const [play, setPlay] = React.useState(false);
  const audioPlaying = React.useRef(false);
  const audio = React.useRef(null);

  React.useEffect(() => {
    if (!play) {
      audio.current.pause();
    }
  }, [play]);

  React.useEffect(() => {
    audio.current.addEventListener("ended", resetAudio);
    return () => audio.current.removeEventListener("ended", resetAudio);
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", keyPlay);
    return () => document.removeEventListener("keydown", keyPlay);
  }, [toggle]);

  const keyPlay = (e) => {
    if (e.key.toUpperCase() === text && toggle) {
      startAudio();
    }
  };

  const resetAudio = () => {
    audio.current.currentTime = 0;
    audio.current.pause();
    setPlay(false);
    audioPlaying.current = false;
  };

  const toggleAudio = () => setPlay((play) => !play);
  const startAudio = () => {
    audio.current.currentTime = 0;
    playMe(id);
    audio.current
      .play()
      .then(() => setPlay(true))
      .catch((err) => console.log(err));
  };

  return (
    <button
      type="button"
      id={id}
      className="drum-pad bg-primary"
      onClick={startAudio}
      disabled={toggle ? false : true}
    >
      {text}
      <audio src={src} id={text} ref={audio} className="clip" preload="auto" />
    </button>
  );
}

function DrumPad({ playMe, toggle, highPitch }) {
  let keys = [];
  if (!highPitch) {
    keys = DATA.normal.map((key) => {
      return (
        <DrumKey
          key={key.id}
          text={key.text}
          id={key.id}
          src={key.src}
          playMe={playMe}
          toggle={toggle}
        />
      );
    });
  } else {
    keys = DATA.high.map((key) => {
      return (
        <DrumKey
          key={key.id}
          text={key.text}
          id={key.id}
          src={key.src}
          playMe={playMe}
          toggle={toggle}
        />
      );
    });
  }
  return <div id="drum-pad-container">{keys}</div>;
}

function Display({ audioCurrent, toggle, highPitch }) {
  return (
    <div id="display-container" className="bg-primary">
      <p>Channel</p>
      <div id="display">{!toggle ? "off" : highPitch ? "high" : "normal"}</div>
    </div>
  );
}

function Toggle({ toggle, toggleMachine }) {
  return (
    <Button type="button" onClick={toggleMachine}>
      {toggle ? "Turn off" : "Turn on"}
    </Button>
  );
}

function Pitch({ toggle, highPitch, togglePitch }) {
  return (
    <Button
      variant="outline-primary"
      onClick={togglePitch}
      disabled={toggle ? false : true}
    >
      {highPitch ? "Normal" : "High Pitch"}
    </Button>
  );
}

function Footer() {
  return (
    <p className="footer">
      Created by Alejandro Aburto for a freeCodeCamp challenge
    </p>
  );
}

function DrumMachine() {
  const [audioCurrent, setAudioCurrent] = React.useState("No audio");
  const [toggle, setToggle] = React.useState(false);
  const [highPitch, setHighPitch] = React.useState(false);

  const playMe = (id) => {
    setAudioCurrent(id);
  };

  const toggleMachine = () => {
    setToggle((toggle) => !toggle);
  };

  const togglePitch = () => {
    setHighPitch((highPitch) => !highPitch);
  };

  return (
    <div id="drum-machine">
      <h1 id="title" className="mt-4">
        Little Piano
      </h1>
      <div id="info">
        <div id="controls">
          <Toggle toggle={toggle} toggleMachine={toggleMachine} />
          <Pitch
            highPitch={highPitch}
            togglePitch={togglePitch}
            toggle={toggle}
          />
        </div>
        <Display
          audioCurrent={audioCurrent}
          toggle={toggle}
          highPitch={highPitch}
        />
      </div>
      <DrumPad playMe={playMe} toggle={toggle} highPitch={highPitch} />
      <Footer />
    </div>
  );
}

ReactDOM.render(<DrumMachine />, document.querySelector("#root"));
