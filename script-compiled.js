"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Button = ReactBootstrap.Button;
var DATA = {
  normal: [{
    text: "Q",
    id: "audio1",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(1).wav?raw=true"
  }, {
    text: "W",
    id: "audio2",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(2).wav?raw=true"
  }, {
    text: "E",
    id: "audio3",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(3).wav?raw=true"
  }, {
    text: "A",
    id: "audio4",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(4).wav?raw=true"
  }, {
    text: "S",
    id: "audio5",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(5).wav?raw=true"
  }, {
    text: "D",
    id: "audio6",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(6).wav?raw=true"
  }, {
    text: "Z",
    id: "audio7",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(7).wav?raw=true"
  }, {
    text: "X",
    id: "audio8",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(8).wav?raw=true"
  }, {
    text: "C",
    id: "audio9",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(9).wav?raw=true"
  }],
  high: [{
    text: "Q",
    id: "audio10",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(10).wav?raw=true"
  }, {
    text: "W",
    id: "audio11",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(11).wav?raw=true"
  }, {
    text: "E",
    id: "audio12",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(12).wav?raw=true"
  }, {
    text: "A",
    id: "audio13",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(13).wav?raw=true"
  }, {
    text: "S",
    id: "audio14",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(14).wav?raw=true"
  }, {
    text: "D",
    id: "audio15",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(15).wav?raw=true"
  }, {
    text: "Z",
    id: "audio16",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(16).wav?raw=true"
  }, {
    text: "X",
    id: "audio17",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(17).wav?raw=true"
  }, {
    text: "C",
    id: "audio18",
    src: "https://github.com/aburto22/freeCodeCamp/blob/main/drum-machine-v1/audio(18).wav?raw=true"
  }]
};

function DrumKey(_ref) {
  var id = _ref.id,
      text = _ref.text,
      src = _ref.src,
      playMe = _ref.playMe,
      toggle = _ref.toggle;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      play = _React$useState2[0],
      setPlay = _React$useState2[1];

  var audioPlaying = React.useRef(false);
  var audio = React.useRef(null);
  React.useEffect(function () {
    if (!play) {
      audio.current.pause();
    }
  }, [play]);
  React.useEffect(function () {
    audio.current.addEventListener("ended", resetAudio);
    return function () {
      return audio.current.removeEventListener("ended", resetAudio);
    };
  }, []);
  React.useEffect(function () {
    document.addEventListener("keydown", keyPlay);
    return function () {
      return document.removeEventListener("keydown", keyPlay);
    };
  }, [toggle]);

  var keyPlay = function keyPlay(e) {
    if (e.key.toUpperCase() === text && toggle) {
      startAudio();
    }
  };

  var resetAudio = function resetAudio() {
    audio.current.currentTime = 0;
    audio.current.pause();
    setPlay(false);
    audioPlaying.current = false;
  };

  var toggleAudio = function toggleAudio() {
    return setPlay(function (play) {
      return !play;
    });
  };

  var startAudio = function startAudio() {
    audio.current.currentTime = 0;
    playMe(id);
    audio.current.play().then(function () {
      return setPlay(true);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: id,
    className: "drum-pad bg-primary",
    onClick: startAudio,
    disabled: toggle ? false : true
  }, text, /*#__PURE__*/React.createElement("audio", {
    src: src,
    id: text,
    ref: audio,
    className: "clip",
    preload: "auto"
  }));
}

function DrumPad(_ref2) {
  var playMe = _ref2.playMe,
      toggle = _ref2.toggle,
      highPitch = _ref2.highPitch;
  var keys = [];

  if (!highPitch) {
    keys = DATA.normal.map(function (key) {
      return /*#__PURE__*/React.createElement(DrumKey, {
        key: key.id,
        text: key.text,
        id: key.id,
        src: key.src,
        playMe: playMe,
        toggle: toggle
      });
    });
  } else {
    keys = DATA.high.map(function (key) {
      return /*#__PURE__*/React.createElement(DrumKey, {
        key: key.id,
        text: key.text,
        id: key.id,
        src: key.src,
        playMe: playMe,
        toggle: toggle
      });
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    id: "drum-pad-container"
  }, keys);
}

function Display(_ref3) {
  var audioCurrent = _ref3.audioCurrent,
      toggle = _ref3.toggle,
      highPitch = _ref3.highPitch;
  return /*#__PURE__*/React.createElement("div", {
    id: "display-container",
    className: "bg-primary"
  }, /*#__PURE__*/React.createElement("p", null, "Channel"), /*#__PURE__*/React.createElement("div", {
    id: "display"
  }, !toggle ? "off" : highPitch ? "high" : "normal"));
}

function Toggle(_ref4) {
  var toggle = _ref4.toggle,
      toggleMachine = _ref4.toggleMachine;
  return /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: toggleMachine
  }, toggle ? "Turn off" : "Turn on");
}

function Pitch(_ref5) {
  var highPitch = _ref5.highPitch,
      togglePitch = _ref5.togglePitch;
  return /*#__PURE__*/React.createElement(Button, {
    variant: "outline-primary",
    onClick: togglePitch
  }, highPitch ? "Normal" : "High Pitch");
}

function Footer() {
  return /*#__PURE__*/React.createElement("p", {
    className: "footer"
  }, "Created by Alejandro Aburto for a freeCodeCamp challenge");
}

function DrumMachine() {
  var _React$useState3 = React.useState("No audio"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      audioCurrent = _React$useState4[0],
      setAudioCurrent = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      toggle = _React$useState6[0],
      setToggle = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      highPitch = _React$useState8[0],
      setHighPitch = _React$useState8[1];

  var playMe = function playMe(id) {
    setAudioCurrent(id);
  };

  var toggleMachine = function toggleMachine() {
    setToggle(function (toggle) {
      return !toggle;
    });
  };

  var togglePitch = function togglePitch() {
    setHighPitch(function (highPitch) {
      return !highPitch;
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    id: "drum-machine"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "title",
    className: "mt-4"
  }, "Piano Machine"), /*#__PURE__*/React.createElement("div", {
    id: "info"
  }, /*#__PURE__*/React.createElement("div", {
    id: "controls"
  }, /*#__PURE__*/React.createElement(Toggle, {
    toggle: toggle,
    toggleMachine: toggleMachine
  }), /*#__PURE__*/React.createElement(Pitch, {
    highPitch: highPitch,
    togglePitch: togglePitch
  })), /*#__PURE__*/React.createElement(Display, {
    audioCurrent: audioCurrent,
    toggle: toggle,
    highPitch: highPitch
  })), /*#__PURE__*/React.createElement(DrumPad, {
    playMe: playMe,
    toggle: toggle,
    highPitch: highPitch
  }), /*#__PURE__*/React.createElement(Footer, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.querySelector("#root"));
