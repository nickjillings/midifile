var MIDIFile =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/midievents/src/MIDIEvents.js":
/*!***************************************************!*\
  !*** ./node_modules/midievents/src/MIDIEvents.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// MIDIEvents : Read and edit events from various sources (ArrayBuffer, Stream)
function MIDIEvents() {
  throw new Error('MIDIEvents function not intended to be run.');
}

// Static constants
// Event types
MIDIEvents.EVENT_META = 0xff;
MIDIEvents.EVENT_SYSEX = 0xf0;
MIDIEvents.EVENT_DIVSYSEX = 0xf7;
MIDIEvents.EVENT_MIDI = 0x8;
// Meta event types
MIDIEvents.EVENT_META_SEQUENCE_NUMBER = 0x00;
MIDIEvents.EVENT_META_TEXT = 0x01;
MIDIEvents.EVENT_META_COPYRIGHT_NOTICE = 0x02;
MIDIEvents.EVENT_META_TRACK_NAME = 0x03;
MIDIEvents.EVENT_META_INSTRUMENT_NAME = 0x04;
MIDIEvents.EVENT_META_LYRICS = 0x05;
MIDIEvents.EVENT_META_MARKER = 0x06;
MIDIEvents.EVENT_META_CUE_POINT = 0x07;
MIDIEvents.EVENT_META_MIDI_CHANNEL_PREFIX = 0x20;
MIDIEvents.EVENT_META_END_OF_TRACK = 0x2f;
MIDIEvents.EVENT_META_SET_TEMPO = 0x51;
MIDIEvents.EVENT_META_SMTPE_OFFSET = 0x54;
MIDIEvents.EVENT_META_TIME_SIGNATURE = 0x58;
MIDIEvents.EVENT_META_KEY_SIGNATURE = 0x59;
MIDIEvents.EVENT_META_SEQUENCER_SPECIFIC = 0x7f;
// MIDI event types
MIDIEvents.EVENT_MIDI_NOTE_OFF = 0x8;
MIDIEvents.EVENT_MIDI_NOTE_ON = 0x9;
MIDIEvents.EVENT_MIDI_NOTE_AFTERTOUCH = 0xa;
MIDIEvents.EVENT_MIDI_CONTROLLER = 0xb;
MIDIEvents.EVENT_MIDI_PROGRAM_CHANGE = 0xc;
MIDIEvents.EVENT_MIDI_CHANNEL_AFTERTOUCH = 0xd;
MIDIEvents.EVENT_MIDI_PITCH_BEND = 0xe;
// MIDI event sizes
MIDIEvents.MIDI_1PARAM_EVENTS = [
  MIDIEvents.EVENT_MIDI_PROGRAM_CHANGE,
  MIDIEvents.EVENT_MIDI_CHANNEL_AFTERTOUCH,
];
MIDIEvents.MIDI_2PARAMS_EVENTS = [
  MIDIEvents.EVENT_MIDI_NOTE_OFF,
  MIDIEvents.EVENT_MIDI_NOTE_ON,
  MIDIEvents.EVENT_MIDI_NOTE_AFTERTOUCH,
  MIDIEvents.EVENT_MIDI_CONTROLLER,
  MIDIEvents.EVENT_MIDI_PITCH_BEND,
];

// Create an event stream parser
MIDIEvents.createParser = function midiEventsCreateParser(
  stream,
  startAt,
  strictMode
) {
  // Private vars
  // Common vars
  var eventTypeByte;
  var event;
  // MIDI events vars
  var MIDIEventType;
  var MIDIEventChannel;
  var MIDIEventParam1;

  // Wrap DataView into a data stream
  if (stream instanceof DataView) {
    stream = {
      position: startAt || 0,
      buffer: stream,
      readUint8: function() {
        return this.buffer.getUint8(this.position++);
      },
      readUint16: function() {
        var v = this.buffer.getUint16(this.position);
        this.position = this.position + 2;
        return v;
      },
      readUint32: function() {
        var v = this.buffer.getUint16(this.position);
        this.position = this.position + 2;
        return v;
      },
      readVarInt: function() {
        var v = 0;
        var i = 0;
        var b;

        while (4 > i++) {
          b = this.readUint8();

          if (b & 0x80) {
            v += b & 0x7f;
            v <<= 7;
          } else {
            return v + b;
          }
        }
        throw new Error(
          '0x' +
            this.position.toString(16) +
            ':' +
            ' Variable integer length cannot exceed 4 bytes'
        );
      },
      readBytes: function(length) {
        var bytes = [];

        for (; 0 < length; length--) {
          bytes.push(this.readUint8());
        }
        return bytes;
      },
      pos: function() {
        return '0x' + (this.buffer.byteOffset + this.position).toString(16);
      },
      end: function() {
        return this.position === this.buffer.byteLength;
      },
    };
    startAt = 0;
  }
  // Consume stream till not at start index
  if (0 < startAt) {
    while (startAt--) {
      stream.readUint8();
    }
  }
  // creating the parser object
  return {
    // Read the next event
    next: function() {
      // Check available datas
      if (stream.end()) {
        return null;
      }
      // Creating the event
      event = {
        // Memoize the event index
        index: stream.pos(),
        // Read the delta time
        delta: stream.readVarInt(),
      };
      // Read the eventTypeByte
      eventTypeByte = stream.readUint8();
      if (0xf0 === (eventTypeByte & 0xf0)) {
        // Meta events
        if (eventTypeByte === MIDIEvents.EVENT_META) {
          event.type = MIDIEvents.EVENT_META;
          event.subtype = stream.readUint8();
          event.length = stream.readVarInt();
          switch (event.subtype) {
            case MIDIEvents.EVENT_META_SEQUENCE_NUMBER:
              if (strictMode && 2 !== event.length) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              event.msb = stream.readUint8();
              event.lsb = stream.readUint8();
              return event;
            case MIDIEvents.EVENT_META_TEXT:
            case MIDIEvents.EVENT_META_COPYRIGHT_NOTICE:
            case MIDIEvents.EVENT_META_TRACK_NAME:
            case MIDIEvents.EVENT_META_INSTRUMENT_NAME:
            case MIDIEvents.EVENT_META_LYRICS:
            case MIDIEvents.EVENT_META_MARKER:
            case MIDIEvents.EVENT_META_CUE_POINT:
              event.data = stream.readBytes(event.length);
              return event;
            case MIDIEvents.EVENT_META_MIDI_CHANNEL_PREFIX:
              if (strictMode && 1 !== event.length) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              event.prefix = stream.readUint8();
              return event;
            case MIDIEvents.EVENT_META_END_OF_TRACK:
              if (strictMode && 0 !== event.length) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              return event;
            case MIDIEvents.EVENT_META_SET_TEMPO:
              if (strictMode && 3 !== event.length) {
                throw new Error(
                  stream.pos() + ' Tempo meta event length must be 3.'
                );
              }
              event.tempo =
                (stream.readUint8() << 16) +
                (stream.readUint8() << 8) +
                stream.readUint8();
              event.tempoBPM = 60000000 / event.tempo;
              return event;
            case MIDIEvents.EVENT_META_SMTPE_OFFSET:
              if (strictMode && 5 !== event.length) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              event.hour = stream.readUint8();
              if (strictMode && 23 < event.hour) {
                throw new Error(
                  stream.pos() +
                    ' SMTPE offset hour value must' +
                    ' be part of 0-23.'
                );
              }
              event.minutes = stream.readUint8();
              if (strictMode && 59 < event.minutes) {
                throw new Error(
                  stream.pos() +
                    ' SMTPE offset minutes value' +
                    ' must be part of 0-59.'
                );
              }
              event.seconds = stream.readUint8();
              if (strictMode && 59 < event.seconds) {
                throw new Error(
                  stream.pos() +
                    ' SMTPE offset seconds value' +
                    ' must be part of 0-59.'
                );
              }
              event.frames = stream.readUint8();
              if (strictMode && 30 < event.frames) {
                throw new Error(
                  stream.pos() +
                    ' SMTPE offset frames value must' +
                    ' be part of 0-30.'
                );
              }
              event.subframes = stream.readUint8();
              if (strictMode && 99 < event.subframes) {
                throw new Error(
                  stream.pos() +
                    ' SMTPE offset subframes value' +
                    ' must be part of 0-99.'
                );
              }
              return event;
            case MIDIEvents.EVENT_META_KEY_SIGNATURE:
              if (strictMode && 2 !== event.length) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              event.key = stream.readUint8();
              if (strictMode && (-7 > event.key || 7 < event.key)) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              event.scale = stream.readUint8();
              if (strictMode && 0 !== event.scale && 1 !== event.scale) {
                throw new Error(
                  stream.pos() +
                    ' Key signature scale value must' +
                    ' be 0 or 1.'
                );
              }
              return event;
            case MIDIEvents.EVENT_META_TIME_SIGNATURE:
              if (strictMode && 4 !== event.length) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              event.data = stream.readBytes(event.length);
              event.param1 = event.data[0];
              event.param2 = event.data[1];
              event.param3 = event.data[2];
              event.param4 = event.data[3];
              return event;
            case MIDIEvents.EVENT_META_SEQUENCER_SPECIFIC:
              event.data = stream.readBytes(event.length);
              return event;
            default:
              if (strictMode) {
                throw new Error(
                  stream.pos() +
                    ' Unknown meta event type ' +
                    '(' +
                    event.subtype.toString(16) +
                    ').'
                );
              }
              event.data = stream.readBytes(event.length);
              return event;
          }
          // System events
        } else if (
          eventTypeByte === MIDIEvents.EVENT_SYSEX ||
          eventTypeByte === MIDIEvents.EVENT_DIVSYSEX
        ) {
          event.type = eventTypeByte;
          event.length = stream.readVarInt();
          event.data = stream.readBytes(event.length);
          return event;
          // Unknown event, assuming it's system like event
        } else {
          if (strictMode) {
            throw new Error(
              stream.pos() +
                ' Unknown event type ' +
                eventTypeByte.toString(16) +
                ', Delta: ' +
                event.delta +
                '.'
            );
          }
          event.type = eventTypeByte;
          event.badsubtype = stream.readVarInt();
          event.length = stream.readUint8();
          event.data = stream.readBytes(event.length);
          return event;
        }
        // MIDI eventsdestination[index++]
      } else {
        // running status
        if (0 === (eventTypeByte & 0x80)) {
          if (!MIDIEventType) {
            throw new Error(
              stream.pos() + ' Running status without previous event'
            );
          }
          MIDIEventParam1 = eventTypeByte;
        } else {
          MIDIEventType = eventTypeByte >> 4;
          MIDIEventChannel = eventTypeByte & 0x0f;
          MIDIEventParam1 = stream.readUint8();
        }
        event.type = MIDIEvents.EVENT_MIDI;
        event.subtype = MIDIEventType;
        event.channel = MIDIEventChannel;
        event.param1 = MIDIEventParam1;
        switch (MIDIEventType) {
          case MIDIEvents.EVENT_MIDI_NOTE_OFF:
            event.param2 = stream.readUint8();
            return event;
          case MIDIEvents.EVENT_MIDI_NOTE_ON:
            event.param2 = stream.readUint8();

            // If velocity is 0, it's a note off event in fact
            if (!event.param2) {
              event.subtype = MIDIEvents.EVENT_MIDI_NOTE_OFF;
              event.param2 = 127; // Find a standard telling what to do here
            }
            return event;
          case MIDIEvents.EVENT_MIDI_NOTE_AFTERTOUCH:
            event.param2 = stream.readUint8();
            return event;
          case MIDIEvents.EVENT_MIDI_CONTROLLER:
            event.param2 = stream.readUint8();
            return event;
          case MIDIEvents.EVENT_MIDI_PROGRAM_CHANGE:
            return event;
          case MIDIEvents.EVENT_MIDI_CHANNEL_AFTERTOUCH:
            return event;
          case MIDIEvents.EVENT_MIDI_PITCH_BEND:
            event.param2 = stream.readUint8();
            return event;
          default:
            if (strictMode) {
              throw new Error(
                stream.pos() +
                  ' Unknown MIDI event type ' +
                  '(' +
                  MIDIEventType.toString(16) +
                  ').'
              );
            }
            return event;
        }
      }
    },
  };
};

// Return the buffer length needed to encode the given events
MIDIEvents.writeToTrack = function midiEventsWriteToTrack(
  events,
  destination,
  strictMode
) {
  var index = 0;
  var i;
  var j;
  var k;
  var l;

  // Converting each event to binary MIDI datas
  for (i = 0, j = events.length; i < j; i++) {
    // Writing delta value
    if (events[i].delta >>> 28) {
      throw Error(
        'Event #' +
          i +
          ': Maximum delta time value reached (' +
          events[i].delta +
          '/134217728 max)'
      );
    }
    if (events[i].delta >>> 21) {
      destination[index++] = ((events[i].delta >>> 21) & 0x7f) | 0x80;
    }
    if (events[i].delta >>> 14) {
      destination[index++] = ((events[i].delta >>> 14) & 0x7f) | 0x80;
    }
    if (events[i].delta >>> 7) {
      destination[index++] = ((events[i].delta >>> 7) & 0x7f) | 0x80;
    }
    destination[index++] = events[i].delta & 0x7f;
    // MIDI Events encoding
    if (events[i].type === MIDIEvents.EVENT_MIDI) {
      // Adding the byte of subtype + channel
      destination[index++] = (events[i].subtype << 4) + events[i].channel;
      // Adding the byte of the first params
      destination[index++] = events[i].param1;
      // Adding a byte for the optionnal second param
      if (-1 !== MIDIEvents.MIDI_2PARAMS_EVENTS.indexOf(events[i].subtype)) {
        destination[index++] = events[i].param2;
      }
      // META / SYSEX events encoding
    } else {
      // Adding the event type byte
      destination[index++] = events[i].type;
      // Adding the META event subtype byte
      if (events[i].type === MIDIEvents.EVENT_META) {
        destination[index++] = events[i].subtype;
      }
      // Writing the event length bytes
      if (events[i].length >>> 28) {
        throw Error(
          'Event #' +
            i +
            ': Maximum length reached (' +
            events[i].length +
            '/134217728 max)'
        );
      }
      if (events[i].length >>> 21) {
        destination[index++] = ((events[i].length >>> 21) & 0x7f) | 0x80;
      }
      if (events[i].length >>> 14) {
        destination[index++] = ((events[i].length >>> 14) & 0x7f) | 0x80;
      }
      if (events[i].length >>> 7) {
        destination[index++] = ((events[i].length >>> 7) & 0x7f) | 0x80;
      }
      destination[index++] = events[i].length & 0x7f;
      if (events[i].type === MIDIEvents.EVENT_META) {
        switch (events[i].subtype) {
          case MIDIEvents.EVENT_META_SEQUENCE_NUMBER:
            destination[index++] = events[i].msb;
            destination[index++] = events[i].lsb;
            break;
          case MIDIEvents.EVENT_META_TEXT:
          case MIDIEvents.EVENT_META_COPYRIGHT_NOTICE:
          case MIDIEvents.EVENT_META_TRACK_NAME:
          case MIDIEvents.EVENT_META_INSTRUMENT_NAME:
          case MIDIEvents.EVENT_META_LYRICS:
          case MIDIEvents.EVENT_META_MARKER:
          case MIDIEvents.EVENT_META_CUE_POINT:
            for (k = 0, l = events[i].length; k < l; k++) {
              destination[index++] = events[i].data[k];
            }
            break;
          case MIDIEvents.EVENT_META_MIDI_CHANNEL_PREFIX:
            destination[index++] = events[i].prefix;
            break;
          case MIDIEvents.EVENT_META_END_OF_TRACK:
            break;
          case MIDIEvents.EVENT_META_SET_TEMPO:
            destination[index++] = events[i].tempo >> 16;
            destination[index++] = (events[i].tempo >> 8) & 0xff;
            destination[index++] = events[i].tempo & 0xff;
            break;
          case MIDIEvents.EVENT_META_SMTPE_OFFSET:
            if (strictMode && 23 < events[i].hour) {
              throw new Error(
                'Event #' +
                  i +
                  ': SMTPE offset hour value must be' +
                  ' part of 0-23.'
              );
            }
            destination[index++] = events[i].hour;
            if (strictMode && 59 < events[i].minutes) {
              throw new Error(
                'Event #' +
                  i +
                  ': SMTPE offset minutes value must' +
                  ' be part of 0-59.'
              );
            }
            destination[index++] = events[i].minutes;
            if (strictMode && 59 < events[i].seconds) {
              throw new Error(
                'Event #' +
                  i +
                  ': SMTPE offset seconds value must' +
                  ' be part of 0-59.'
              );
            }
            destination[index++] = events[i].seconds;
            if (strictMode && 30 < events[i].frames) {
              throw new Error(
                'Event #' +
                  i +
                  ': SMTPE offset frames amount must' +
                  ' be part of 0-30.'
              );
            }
            destination[index++] = events[i].frames;
            if (strictMode && 99 < events[i].subframes) {
              throw new Error(
                'Event #' +
                  i +
                  ': SMTPE offset subframes amount' +
                  ' must be part of 0-99.'
              );
            }
            destination[index++] = events[i].subframes;
            break;
          case MIDIEvents.EVENT_META_KEY_SIGNATURE:
            if (
              'number' != typeof events[i].key ||
              -7 > events[i].key ||
              7 < events[i].scale
            ) {
              throw new Error(
                'Event #' +
                  i +
                  ':The key signature key must be' +
                  ' between -7 and 7'
              );
            }
            if (
              'number' !== typeof events[i].scale ||
              0 > events[i].scale ||
              1 < events[i].scale
            ) {
              throw new Error(
                'Event #' + i + ':' + 'The key signature scale must be 0 or 1'
              );
            }
            destination[index++] = events[i].key;
            destination[index++] = events[i].scale;
            break;
          // Not implemented
          case MIDIEvents.EVENT_META_TIME_SIGNATURE:
          case MIDIEvents.EVENT_META_SEQUENCER_SPECIFIC:
          default:
            for (k = 0, l = events[i].length; k < l; k++) {
              destination[index++] = events[i].data[k];
            }
            break;
        }
        // Adding bytes corresponding to the sysex event datas
      } else {
        for (k = 0, l = events[i].length; k < l; k++) {
          destination[index++] = events[i].data[k];
        }
      }
    }
  }
};

// Return the buffer length needed to encode the given events
MIDIEvents.getRequiredBufferLength = function(events) {
  var bufferLength = 0;
  var i = 0;
  var j;

  // Calculating the track size by adding events lengths
  for (i = 0, j = events.length; i < j; i++) {
    // Computing necessary bytes to encode the delta value
    bufferLength +=
      events[i].delta >>> 21
        ? 4
        : events[i].delta >>> 14
          ? 3
          : events[i].delta >>> 7
            ? 2
            : 1;
    // MIDI Events have various fixed lengths
    if (events[i].type === MIDIEvents.EVENT_MIDI) {
      // Adding a byte for subtype + channel
      bufferLength++;
      // Adding a byte for the first params
      bufferLength++;
      // Adding a byte for the optionnal second param
      if (-1 !== MIDIEvents.MIDI_2PARAMS_EVENTS.indexOf(events[i].subtype)) {
        bufferLength++;
      }
      // META / SYSEX events lengths are self defined
    } else {
      // Adding a byte for the event type
      bufferLength++;
      // Adding a byte for META events subtype
      if (events[i].type === MIDIEvents.EVENT_META) {
        bufferLength++;
      }
      // Adding necessary bytes to encode the length
      bufferLength +=
        events[i].length >>> 21
          ? 4
          : events[i].length >>> 14
            ? 3
            : events[i].length >>> 7
              ? 2
              : 1;
      // Adding bytes corresponding to the event length
      bufferLength += events[i].length;
    }
  }
  return bufferLength;
};

module.exports = MIDIEvents;


/***/ }),

/***/ "./node_modules/utf-8/src/UTF8.js":
/*!****************************************!*\
  !*** ./node_modules/utf-8/src/UTF8.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  isNotUTF8: isNotUTF8,
  getCharLength: getCharLength,
  getCharCode: getCharCode,
  getStringFromBytes: getStringFromBytes,
  getBytesForCharCode: getBytesForCharCode,
  setBytesFromCharCode: setBytesFromCharCode,
  setBytesFromString: setBytesFromString,
};

// non UTF8 encoding detection (cf README file for details)
function isNotUTF8(bytes, byteOffset, byteLength) {
  try {
    getStringFromBytes(bytes, byteOffset, byteLength, true);
  } catch (e) {
    return true;
  }
  return false;
}

function getCharLength(theByte) {
  // 4 bytes encoded char (mask 11110000)
  if (0xf0 == (theByte & 0xf0)) {
    return 4;
    // 3 bytes encoded char (mask 11100000)
  } else if (0xe0 == (theByte & 0xe0)) {
    return 3;
    // 2 bytes encoded char (mask 11000000)
  } else if (0xc0 == (theByte & 0xc0)) {
    return 2;
    // 1 bytes encoded char
  } else if (theByte == (theByte & 0x7f)) {
    return 1;
  }
  return 0;
}

// UTF8 decoding functions
function getCharCode(bytes, byteOffset, charLength) {
  var charCode = 0,
    mask = '';
  byteOffset = byteOffset || 0;
  // validate that the array has at least one byte in it
  if (bytes.length - byteOffset <= 0) {
    throw new Error('No more characters remaining in array.');
  }
  // Retrieve charLength if not given
  charLength = charLength || getCharLength(bytes[byteOffset]);
  if (charLength == 0) {
    throw new Error(
      bytes[byteOffset].toString(2) +
        ' is not a significative' +
        ' byte (offset:' +
        byteOffset +
        ').'
    );
  }
  // Return byte value if charlength is 1
  if (1 === charLength) {
    return bytes[byteOffset];
  }
  // validate that the array has enough bytes to make up this character
  if (bytes.length - byteOffset < charLength) {
    throw new Error(
      'Expected at least ' + charLength + ' bytes remaining in array.'
    );
  }
  // Test UTF8 integrity
  mask = '00000000'.slice(0, charLength) + 1 + '00000000'.slice(charLength + 1);
  if (bytes[byteOffset] & parseInt(mask, 2)) {
    throw Error(
      'Index ' +
        byteOffset +
        ': A ' +
        charLength +
        ' bytes' +
        ' encoded char' +
        ' cannot encode the ' +
        (charLength + 1) +
        'th rank bit to 1.'
    );
  }
  // Reading the first byte
  mask = '0000'.slice(0, charLength + 1) + '11111111'.slice(charLength + 1);
  charCode += (bytes[byteOffset] & parseInt(mask, 2)) << (--charLength * 6);
  // Reading the next bytes
  while (charLength) {
    if (
      0x80 !== (bytes[byteOffset + 1] & 0x80) ||
      0x40 === (bytes[byteOffset + 1] & 0x40)
    ) {
      throw Error(
        'Index ' +
          (byteOffset + 1) +
          ': Next bytes of encoded char' +
          ' must begin with a "10" bit sequence.'
      );
    }
    charCode += (bytes[++byteOffset] & 0x3f) << (--charLength * 6);
  }
  return charCode;
}

function getStringFromBytes(bytes, byteOffset, byteLength, strict) {
  var charLength,
    chars = [];
  byteOffset = byteOffset | 0;
  byteLength =
    'number' === typeof byteLength
      ? byteLength
      : bytes.byteLength || bytes.length;
  for (; byteOffset < byteLength; byteOffset++) {
    charLength = getCharLength(bytes[byteOffset]);
    if (byteOffset + charLength > byteLength) {
      if (strict) {
        throw Error(
          'Index ' +
            byteOffset +
            ': Found a ' +
            charLength +
            ' bytes encoded char declaration but only ' +
            (byteLength - byteOffset) +
            ' bytes are available.'
        );
      }
    } else {
      chars.push(
        String.fromCodePoint(getCharCode(bytes, byteOffset, charLength, strict))
      );
    }
    byteOffset += charLength - 1;
  }
  return chars.join('');
}

// UTF8 encoding functions
function getBytesForCharCode(charCode) {
  if (charCode < 128) {
    return 1;
  } else if (charCode < 2048) {
    return 2;
  } else if (charCode < 65536) {
    return 3;
  } else if (charCode < 2097152) {
    return 4;
  }
  throw new Error('CharCode ' + charCode + ' cannot be encoded with UTF8.');
}

function setBytesFromCharCode(charCode, bytes, byteOffset, neededBytes) {
  charCode = charCode | 0;
  bytes = bytes || [];
  byteOffset = byteOffset | 0;
  neededBytes = neededBytes || getBytesForCharCode(charCode);
  // Setting the charCode as it to bytes if the byte length is 1
  if (1 == neededBytes) {
    bytes[byteOffset] = charCode;
  } else {
    // Computing the first byte
    bytes[byteOffset++] =
      (parseInt('1111'.slice(0, neededBytes), 2) << (8 - neededBytes)) +
      (charCode >>> (--neededBytes * 6));
    // Computing next bytes
    for (; neededBytes > 0; ) {
      bytes[byteOffset++] = ((charCode >>> (--neededBytes * 6)) & 0x3f) | 0x80;
    }
  }
  return bytes;
}

function setBytesFromString(string, bytes, byteOffset, byteLength, strict) {
  string = string || '';
  bytes = bytes || [];
  byteOffset = byteOffset | 0;
  byteLength =
    'number' === typeof byteLength ? byteLength : bytes.byteLength || Infinity;
  for (var i = 0, j = string.length; i < j; i++) {
    var neededBytes = getBytesForCharCode(string[i].codePointAt(0));
    if (strict && byteOffset + neededBytes > byteLength) {
      throw new Error(
        'Not enought bytes to encode the char "' +
          string[i] +
          '" at the offset "' +
          byteOffset +
          '".'
      );
    }
    setBytesFromCharCode(
      string[i].codePointAt(0),
      bytes,
      byteOffset,
      neededBytes,
      strict
    );
    byteOffset += neededBytes;
  }
  return bytes;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/MIDIFile.js":
/*!*************************!*\
  !*** ./src/MIDIFile.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// MIDIFile : Read (and soon edit) a MIDI file in a given ArrayBuffer

// Dependencies
var MIDIFileHeader = __webpack_require__(/*! ./MIDIFileHeader */ "./src/MIDIFileHeader.js");
var MIDIFileTrack = __webpack_require__(/*! ./MIDIFileTrack */ "./src/MIDIFileTrack.js");
var MIDIEvents = __webpack_require__(/*! midievents */ "./node_modules/midievents/src/MIDIEvents.js");
var UTF8 = __webpack_require__(/*! utf-8 */ "./node_modules/utf-8/src/UTF8.js");

function ensureArrayBuffer(buf) {
  if (buf) {
    if (buf instanceof ArrayBuffer) {
      return buf;
    }
    if (buf instanceof Uint8Array) {
      // Copy/convert to standard Uint8Array, because derived classes like
      // node.js Buffers might have unexpected data in the .buffer property.
      return new Uint8Array(buf).buffer;
    }
  }
  throw new Error('Unsupported buffer type, need ArrayBuffer or Uint8Array');
}

// Constructor
function MIDIFile(buffer, strictMode) {
  var track;
  var curIndex;
  var i;
  var j;

  // If not buffer given, creating a new MIDI file
  if (!buffer) {
    // Creating the content
    this.header = new MIDIFileHeader();
    this.tracks = [new MIDIFileTrack()];
    // if a buffer is provided, parsing him
  } else {
    buffer = ensureArrayBuffer(buffer);
    // Minimum MIDI file size is a headerChunk size (14bytes)
    // and an empty track (8+3bytes)
    if (25 > buffer.byteLength) {
      throw new Error(
        'A buffer of a valid MIDI file must have, at least, a' +
          ' size of 25bytes.'
      );
    }
    // Reading header
    this.header = new MIDIFileHeader(buffer, strictMode);
    this.tracks = [];
    curIndex = MIDIFileHeader.HEADER_LENGTH;
    // Reading tracks
    for (i = 0, j = this.header.getTracksCount(); i < j; i++) {
      // Testing the buffer length
      if (strictMode && curIndex >= buffer.byteLength - 1) {
        throw new Error(
          "Couldn't find datas corresponding to the track #" + i + '.'
        );
      }
      // Creating the track object
      track = new MIDIFileTrack(buffer, curIndex, strictMode);
      this.tracks.push(track);
      // Updating index to the track end
      curIndex += track.getTrackLength() + 8;
    }
    // Testing integrity : curIndex should be at the end of the buffer
    if (strictMode && curIndex !== buffer.byteLength) {
      throw new Error('It seems that the buffer contains too much datas.');
    }
  }
}

// Events reading helpers
MIDIFile.prototype.getEvents = function(type, subtype) {
  var events;
  var event;
  var playTime = 0;
  var filteredEvents = [];
  var format = this.header.getFormat();
  var tickResolution = this.header.getTickResolution();
  var i;
  var j;
  var trackParsers;
  var smallestDelta;

  // Reading events
  // if the read is sequential
  if (1 !== format || 1 === this.tracks.length) {
    for (i = 0, j = this.tracks.length; i < j; i++) {
      // reset playtime if format is 2
      playTime = 2 === format && playTime ? playTime : 0;
      events = MIDIEvents.createParser(
        this.tracks[i].getTrackContent(),
        0,
        false
      );
      // loooping through events
      event = events.next();
      while (event) {
        playTime += event.delta ? event.delta * tickResolution / 1000 : 0;
        if (event.type === MIDIEvents.EVENT_META) {
          // tempo change events
          if (event.subtype === MIDIEvents.EVENT_META_SET_TEMPO) {
            tickResolution = this.header.getTickResolution(event.tempo);
          }
        }
        // push the asked events
        if (
          (!type || event.type === type) &&
          (!subtype || (event.subtype && event.subtype === subtype))
        ) {
          event.playTime = playTime;
          filteredEvents.push(event);
        }
        event = events.next();
      }
    }
    // the read is concurrent
  } else {
    trackParsers = [];
    smallestDelta = -1;

    // Creating parsers
    for (i = 0, j = this.tracks.length; i < j; i++) {
      trackParsers[i] = {};
      trackParsers[i].parser = MIDIEvents.createParser(
        this.tracks[i].getTrackContent(),
        0,
        false
      );
      trackParsers[i].curEvent = trackParsers[i].parser.next();
    }
    // Filling events
    do {
      smallestDelta = -1;
      // finding the smallest event
      for (i = 0, j = trackParsers.length; i < j; i++) {
        if (trackParsers[i].curEvent) {
          if (
            -1 === smallestDelta ||
            trackParsers[i].curEvent.delta <
              trackParsers[smallestDelta].curEvent.delta
          ) {
            smallestDelta = i;
          }
        }
      }
      if (-1 !== smallestDelta) {
        // removing the delta of previous events
        for (i = 0, j = trackParsers.length; i < j; i++) {
          if (i !== smallestDelta && trackParsers[i].curEvent) {
            trackParsers[i].curEvent.delta -=
              trackParsers[smallestDelta].curEvent.delta;
          }
        }
        // filling values
        event = trackParsers[smallestDelta].curEvent;
        playTime += event.delta ? event.delta * tickResolution / 1000 : 0;
        if (event.type === MIDIEvents.EVENT_META) {
          // tempo change events
          if (event.subtype === MIDIEvents.EVENT_META_SET_TEMPO) {
            tickResolution = this.header.getTickResolution(event.tempo);
          }
        }
        // push midi events
        if (
          (!type || event.type === type) &&
          (!subtype || (event.subtype && event.subtype === subtype))
        ) {
          event.playTime = playTime;
          event.track = smallestDelta;
          filteredEvents.push(event);
        }
        // getting next event
        trackParsers[smallestDelta].curEvent = trackParsers[
          smallestDelta
        ].parser.next();
      }
    } while (-1 !== smallestDelta);
  }
  return filteredEvents;
};

MIDIFile.prototype.getMidiEvents = function() {
  return this.getEvents(MIDIEvents.EVENT_MIDI);
};

MIDIFile.prototype.getLyrics = function() {
  var events = this.getEvents(MIDIEvents.EVENT_META);
  var texts = [];
  var lyrics = [];
  var event;
  var i;
  var j;

  for (i = 0, j = events.length; i < j; i++) {
    event = events[i];
    // Lyrics
    if (event.subtype === MIDIEvents.EVENT_META_LYRICS) {
      lyrics.push(event);
      // Texts
    } else if (event.subtype === MIDIEvents.EVENT_META_TEXT) {
      // Ignore special texts
      if ('@' === String.fromCharCode(event.data[0])) {
        if ('T' === String.fromCharCode(event.data[1])) {
          // console.log('Title : ' + event.text.substring(2));
        } else if ('I' === String.fromCharCode(event.data[1])) {
          // console.log('Info : ' + event.text.substring(2));
        } else if ('L' === String.fromCharCode(event.data[1])) {
          // console.log('Lang : ' + event.text.substring(2));
        }
        // karaoke text follows, remove all previous text
      } else if (
        0 === String.fromCharCode.apply(String, event.data).indexOf('words')
      ) {
        texts.length = 0;
        // console.log('Word marker found');
        // Karaoke texts
        // If playtime is greater than 0
      } else if (0 !== event.playTime) {
        texts.push(event);
      }
    }
  }
  // Choosing the right lyrics
  if (2 < lyrics.length) {
    texts = lyrics;
  } else if (!texts.length) {
    texts = [];
  }
  // Convert texts and detect encoding
  try {
    texts.forEach(function(event) {
      event.text = UTF8.getStringFromBytes(event.data, 0, event.length, true);
    });
  } catch (e) {
    texts.forEach(function(event) {
      event.text = event.data
        .map(function(c) {
          return String.fromCharCode(c);
        })
        .join('');
    });
  }
  return texts;
};

// Basic events reading
MIDIFile.prototype.getTrackEvents = function(index) {
  var event;
  var events = [];
  var parser;
  if (index > this.tracks.length || 0 > index) {
    throw Error('Invalid track index (' + index + ')');
  }
  parser = MIDIEvents.createParser(
    this.tracks[index].getTrackContent(),
    0,
    false
  );
  event = parser.next();
  do {
    events.push(event);
    event = parser.next();
  } while (event);
  return events;
};

// Basic events writting
MIDIFile.prototype.setTrackEvents = function(index, events) {
  var bufferLength;
  var destination;

  if (index > this.tracks.length || 0 > index) {
    throw Error('Invalid track index (' + index + ')');
  }
  if (!events || !events.length) {
    throw Error('A track must contain at least one event, none given.');
  }
  bufferLength = MIDIEvents.getRequiredBufferLength(events);
  destination = new Uint8Array(bufferLength);
  MIDIEvents.writeToTrack(events, destination);
  this.tracks[index].setTrackContent(destination);
};

// Remove a track
MIDIFile.prototype.deleteTrack = function(index) {
  if (index > this.tracks.length || 0 > index) {
    throw Error('Invalid track index (' + index + ')');
  }
  this.tracks.splice(index, 1);
  this.header.setTracksCount(this.tracks.length);
};

// Add a track
MIDIFile.prototype.addTrack = function(index) {
  var track;

  if (index > this.tracks.length || 0 > index) {
    throw Error('Invalid track index (' + index + ')');
  }
  track = new MIDIFileTrack();
  if (index === this.tracks.length) {
    this.tracks.push(track);
  } else {
    this.tracks.splice(index, 0, track);
  }
  this.header.setTracksCount(this.tracks.length);
};

// Retrieve the content in a buffer
MIDIFile.prototype.getContent = function() {
  var bufferLength;
  var destination;
  var origin;
  var i;
  var j;
  var k;
  var l;
  var m;
  var n;

  // Calculating the buffer content
  // - initialize with the header length
  bufferLength = MIDIFileHeader.HEADER_LENGTH;
  // - add tracks length
  for (i = 0, j = this.tracks.length; i < j; i++) {
    bufferLength += this.tracks[i].getTrackLength() + 8;
  }
  // Creating the destination buffer
  destination = new Uint8Array(bufferLength);
  // Adding header
  origin = new Uint8Array(
    this.header.datas.buffer,
    this.header.datas.byteOffset,
    MIDIFileHeader.HEADER_LENGTH
  );
  for (i = 0, j = MIDIFileHeader.HEADER_LENGTH; i < j; i++) {
    destination[i] = origin[i];
  }
  // Adding tracks
  for (k = 0, l = this.tracks.length; k < l; k++) {
    origin = new Uint8Array(
      this.tracks[k].datas.buffer,
      this.tracks[k].datas.byteOffset,
      this.tracks[k].datas.byteLength
    );
    for (m = 0, n = this.tracks[k].datas.byteLength; m < n; m++) {
      destination[i++] = origin[m];
    }
  }
  return destination.buffer;
};

// Exports Track/Header constructors
MIDIFile.Header = MIDIFileHeader;
MIDIFile.Track = MIDIFileTrack;

module.exports = MIDIFile;


/***/ }),

/***/ "./src/MIDIFileHeader.js":
/*!*******************************!*\
  !*** ./src/MIDIFileHeader.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// MIDIFileHeader : Read and edit a MIDI header chunk in a given ArrayBuffer
function MIDIFileHeader(buffer) {
  let a;
  // No buffer creating him
  if (!buffer) {
    a = new Uint8Array(MIDIFileHeader.HEADER_LENGTH);
    // Adding the header id (MThd)
    a[0] = 0x4d;
    a[1] = 0x54;
    a[2] = 0x68;
    a[3] = 0x64;
    // Adding the header chunk size
    a[4] = 0x00;
    a[5] = 0x00;
    a[6] = 0x00;
    a[7] = 0x06;
    // Adding the file format (1 here cause it's the most commonly used)
    a[8] = 0x00;
    a[9] = 0x01;
    // Adding the track count (1 cause it's a new file)
    a[10] = 0x00;
    a[11] = 0x01;
    // Adding the time division (192 ticks per beat)
    a[12] = 0x00;
    a[13] = 0xc0;
    // saving the buffer
    this.datas = new DataView(a.buffer, 0, MIDIFileHeader.HEADER_LENGTH);
    // Parsing the given buffer
  } else {
    if (!(buffer instanceof ArrayBuffer)) {
      throw Error('Invalid buffer received.');
    }
    this.datas = new DataView(buffer, 0, MIDIFileHeader.HEADER_LENGTH);
    // Reading MIDI header chunk
    if (
      !(
        'M' === String.fromCharCode(this.datas.getUint8(0)) &&
        'T' === String.fromCharCode(this.datas.getUint8(1)) &&
        'h' === String.fromCharCode(this.datas.getUint8(2)) &&
        'd' === String.fromCharCode(this.datas.getUint8(3))
      )
    ) {
      throw new Error('Invalid MIDIFileHeader : MThd prefix not found');
    }
    // Reading chunk length
    if (6 !== this.datas.getUint32(4)) {
      throw new Error('Invalid MIDIFileHeader : Chunk length must be 6');
    }
  }
}

// Static constants
MIDIFileHeader.HEADER_LENGTH = 14;
MIDIFileHeader.FRAMES_PER_SECONDS = 1;
MIDIFileHeader.TICKS_PER_BEAT = 2;

// MIDI file format
MIDIFileHeader.prototype.getFormat = function() {
  const format = this.datas.getUint16(8);
  if (0 !== format && 1 !== format && 2 !== format) {
    throw new Error(
      'Invalid MIDI file : MIDI format (' +
        format +
        '),' +
        ' format can be 0, 1 or 2 only.'
    );
  }
  return format;
};

MIDIFileHeader.prototype.setFormat = function(format) {
  if (0 !== format && 1 !== format && 2 !== format) {
    throw new Error(
      'Invalid MIDI format given (' +
        format +
        '),' +
        ' format can be 0, 1 or 2 only.'
    );
  }
  this.datas.setUint16(8, format);
};

// Number of tracks
MIDIFileHeader.prototype.getTracksCount = function() {
  return this.datas.getUint16(10);
};

MIDIFileHeader.prototype.setTracksCount = function(n) {
  return this.datas.setUint16(10, n);
};

// Tick compute
MIDIFileHeader.prototype.getTickResolution = function(tempo) {
  // Frames per seconds
  if (this.datas.getUint16(12) & 0x8000) {
    return 1000000 / (this.getSMPTEFrames() * this.getTicksPerFrame());
    // Ticks per beat
  }
  // Default MIDI tempo is 120bpm, 500ms per beat
  tempo = tempo || 500000;
  return tempo / this.getTicksPerBeat();
};

// Time division type
MIDIFileHeader.prototype.getTimeDivision = function() {
  if (this.datas.getUint16(12) & 0x8000) {
    return MIDIFileHeader.FRAMES_PER_SECONDS;
  }
  return MIDIFileHeader.TICKS_PER_BEAT;
};

// Ticks per beat
MIDIFileHeader.prototype.getTicksPerBeat = function() {
  var divisionWord = this.datas.getUint16(12);
  if (divisionWord & 0x8000) {
    throw new Error('Time division is not expressed as ticks per beat.');
  }
  return divisionWord;
};

MIDIFileHeader.prototype.setTicksPerBeat = function(ticksPerBeat) {
  this.datas.setUint16(12, ticksPerBeat & 0x7fff);
};

// Frames per seconds
MIDIFileHeader.prototype.getSMPTEFrames = function() {
  const divisionWord = this.datas.getUint16(12);
  let smpteFrames;

  if (!(divisionWord & 0x8000)) {
    throw new Error('Time division is not expressed as frames per seconds.');
  }
  smpteFrames = divisionWord & 0x7f00;
  if (-1 === [24, 25, 29, 30].indexOf(smpteFrames)) {
    throw new Error('Invalid SMPTE frames value (' + smpteFrames + ').');
  }
  return 29 === smpteFrames ? 29.97 : smpteFrames;
};

MIDIFileHeader.prototype.getTicksPerFrame = function() {
  const divisionWord = this.datas.getUint16(12);

  if (!(divisionWord & 0x8000)) {
    throw new Error('Time division is not expressed as frames per seconds.');
  }
  return divisionWord & 0x00ff;
};

MIDIFileHeader.prototype.setSMTPEDivision = function(
  smpteFrames,
  ticksPerFrame
) {
  if (29.97 === smpteFrames) {
    smpteFrames = 29;
  }
  if (-1 === [24, 25, 29, 30].indexOf(smpteFrames)) {
    throw new Error('Invalid SMPTE frames value given (' + smpteFrames + ').');
  }
  if (0 > ticksPerFrame || 0xff < ticksPerFrame) {
    throw new Error(
      'Invalid ticks per frame value given (' + smpteFrames + ').'
    );
  }
  this.datas.setUint8(12, 0x80 | smpteFrames);
  this.datas.setUint8(13, ticksPerFrame);
};

module.exports = MIDIFileHeader;


/***/ }),

/***/ "./src/MIDIFileTrack.js":
/*!******************************!*\
  !*** ./src/MIDIFileTrack.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// MIDIFileTrack : Read and edit a MIDI track chunk in a given ArrayBuffer
function MIDIFileTrack(buffer, start) {
  let a;
  let trackLength;

  // no buffer, creating him
  if (!buffer) {
    a = new Uint8Array(12);
    // Adding the empty track header (MTrk)
    a[0] = 0x4d;
    a[1] = 0x54;
    a[2] = 0x72;
    a[3] = 0x6b;
    // Adding the empty track size (4)
    a[4] = 0x00;
    a[5] = 0x00;
    a[6] = 0x00;
    a[7] = 0x04;
    // Adding the track end event
    a[8] = 0x00;
    a[9] = 0xff;
    a[10] = 0x2f;
    a[11] = 0x00;
    // Saving the buffer
    this.datas = new DataView(a.buffer, 0, MIDIFileTrack.HDR_LENGTH + 4);
    // parsing the given buffer
  } else {
    if (!(buffer instanceof ArrayBuffer)) {
      throw new Error('Invalid buffer received.');
    }
    // Buffer length must size at least like an  empty track (8+3bytes)
    if (12 > buffer.byteLength - start) {
      throw new Error(
        'Invalid MIDIFileTrack (0x' +
          start.toString(16) +
          ') :' +
          ' Buffer length must size at least 12bytes'
      );
    }
    // Creating a temporary view to read the track header
    this.datas = new DataView(buffer, start, MIDIFileTrack.HDR_LENGTH);
    // Reading MIDI track header chunk
    if (
      !(
        'M' === String.fromCharCode(this.datas.getUint8(0)) &&
        'T' === String.fromCharCode(this.datas.getUint8(1)) &&
        'r' === String.fromCharCode(this.datas.getUint8(2)) &&
        'k' === String.fromCharCode(this.datas.getUint8(3))
      )
    ) {
      throw new Error(
        'Invalid MIDIFileTrack (0x' +
          start.toString(16) +
          ') :' +
          ' MTrk prefix not found'
      );
    }
    // Reading the track length
    trackLength = this.getTrackLength();
    if (buffer.byteLength - start < trackLength) {
      throw new Error(
        'Invalid MIDIFileTrack (0x' +
          start.toString(16) +
          ') :' +
          ' The track size exceed the buffer length.'
      );
    }
    // Creating the final DataView
    this.datas = new DataView(
      buffer,
      start,
      MIDIFileTrack.HDR_LENGTH + trackLength
    );
    // Trying to find the end of track event
    if (
      !(
        0xff ===
          this.datas.getUint8(MIDIFileTrack.HDR_LENGTH + (trackLength - 3)) &&
        0x2f ===
          this.datas.getUint8(MIDIFileTrack.HDR_LENGTH + (trackLength - 2)) &&
        0x00 ===
          this.datas.getUint8(MIDIFileTrack.HDR_LENGTH + (trackLength - 1))
      )
    ) {
      throw new Error(
        'Invalid MIDIFileTrack (0x' +
          start.toString(16) +
          ') :' +
          ' No track end event found at the expected index' +
          ' (' +
          (MIDIFileTrack.HDR_LENGTH + (trackLength - 1)).toString(16) +
          ').'
      );
    }
  }
}

// Static constants
MIDIFileTrack.HDR_LENGTH = 8;

// Track length
MIDIFileTrack.prototype.getTrackLength = function() {
  return this.datas.getUint32(4);
};

MIDIFileTrack.prototype.setTrackLength = function(trackLength) {
  return this.datas.setUint32(4, trackLength);
};

// Read track contents
MIDIFileTrack.prototype.getTrackContent = function() {
  return new DataView(
    this.datas.buffer,
    this.datas.byteOffset + MIDIFileTrack.HDR_LENGTH,
    this.datas.byteLength - MIDIFileTrack.HDR_LENGTH
  );
};

// Set track content
MIDIFileTrack.prototype.setTrackContent = function(dataView) {
  let origin;
  let destination;
  let i;
  let j;
  // Calculating the track length
  const trackLength = dataView.byteLength - dataView.byteOffset;

  // Track length must size at least like an  empty track (4bytes)
  if (4 > trackLength) {
    throw new Error('Invalid track length, must size at least 4bytes');
  }
  this.datas = new DataView(
    new Uint8Array(MIDIFileTrack.HDR_LENGTH + trackLength).buffer
  );
  // Adding the track header (MTrk)
  this.datas.setUint8(0, 0x4d); // M
  this.datas.setUint8(1, 0x54); // T
  this.datas.setUint8(2, 0x72); // r
  this.datas.setUint8(3, 0x6b); // k
  // Adding the track size
  this.datas.setUint32(4, trackLength);
  // Copying the content
  origin = new Uint8Array(
    dataView.buffer,
    dataView.byteOffset,
    dataView.byteLength
  );
  destination = new Uint8Array(
    this.datas.buffer,
    MIDIFileTrack.HDR_LENGTH,
    trackLength
  );
  for (i = 0, j = origin.length; i < j; i++) {
    destination[i] = origin[i];
  }
};

module.exports = MIDIFileTrack;


/***/ }),

/***/ "./webpack.js":
/*!********************!*\
  !*** ./webpack.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _src_MIDIFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/MIDIFile */ "./src/MIDIFile.js");
/* harmony import */ var _src_MIDIFile__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_MIDIFile__WEBPACK_IMPORTED_MODULE_0__);


(function(root, factory) {
    console.log("Load MIDIFile...");
    if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
        define("MIDIFile", [], factory);
    } else if ( true && module.exports) {
        module.exports = factory();
    } else {
        if (root === undefined) {
            root = window;
        }
        root.JSAP = factory();
    }
})(undefined, function() {
    return _src_MIDIFile__WEBPACK_IMPORTED_MODULE_0___default.a;
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NSURJRmlsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NSURJRmlsZS8uL25vZGVfbW9kdWxlcy9taWRpZXZlbnRzL3NyYy9NSURJRXZlbnRzLmpzIiwid2VicGFjazovL01JRElGaWxlLy4vbm9kZV9tb2R1bGVzL3V0Zi04L3NyYy9VVEY4LmpzIiwid2VicGFjazovL01JRElGaWxlLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovL01JRElGaWxlLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovL01JRElGaWxlLy4vc3JjL01JRElGaWxlLmpzIiwid2VicGFjazovL01JRElGaWxlLy4vc3JjL01JRElGaWxlSGVhZGVyLmpzIiwid2VicGFjazovL01JRElGaWxlLy4vc3JjL01JRElGaWxlVHJhY2suanMiLCJ3ZWJwYWNrOi8vTUlESUZpbGUvLi93ZWJwYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDam1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlCQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDck1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QmE7O0FBRWI7O0FBRUE7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxpREFBa0I7QUFDL0Msb0JBQW9CLG1CQUFPLENBQUMsK0NBQWlCO0FBQzdDLGlCQUFpQixtQkFBTyxDQUFDLCtEQUFZO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQywrQ0FBTzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdFdhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDekthOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMvSkE7QUFBQTtBQUFBO0FBQXNDOztBQUV0QztBQUNBO0FBQ0Esd0NBQXdDLGdHQUFVO0FBQ2xEO0FBQ0EsS0FBSyxVQUFVLEtBQXlCO0FBQ3hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUUsU0FBSTtBQUNQLFdBQVcsb0RBQVE7QUFDbkIsQ0FBQyIsImZpbGUiOiJNSURJRmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2VicGFjay5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gTUlESUV2ZW50cyA6IFJlYWQgYW5kIGVkaXQgZXZlbnRzIGZyb20gdmFyaW91cyBzb3VyY2VzIChBcnJheUJ1ZmZlciwgU3RyZWFtKVxuZnVuY3Rpb24gTUlESUV2ZW50cygpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNSURJRXZlbnRzIGZ1bmN0aW9uIG5vdCBpbnRlbmRlZCB0byBiZSBydW4uJyk7XG59XG5cbi8vIFN0YXRpYyBjb25zdGFudHNcbi8vIEV2ZW50IHR5cGVzXG5NSURJRXZlbnRzLkVWRU5UX01FVEEgPSAweGZmO1xuTUlESUV2ZW50cy5FVkVOVF9TWVNFWCA9IDB4ZjA7XG5NSURJRXZlbnRzLkVWRU5UX0RJVlNZU0VYID0gMHhmNztcbk1JRElFdmVudHMuRVZFTlRfTUlESSA9IDB4ODtcbi8vIE1ldGEgZXZlbnQgdHlwZXNcbk1JRElFdmVudHMuRVZFTlRfTUVUQV9TRVFVRU5DRV9OVU1CRVIgPSAweDAwO1xuTUlESUV2ZW50cy5FVkVOVF9NRVRBX1RFWFQgPSAweDAxO1xuTUlESUV2ZW50cy5FVkVOVF9NRVRBX0NPUFlSSUdIVF9OT1RJQ0UgPSAweDAyO1xuTUlESUV2ZW50cy5FVkVOVF9NRVRBX1RSQUNLX05BTUUgPSAweDAzO1xuTUlESUV2ZW50cy5FVkVOVF9NRVRBX0lOU1RSVU1FTlRfTkFNRSA9IDB4MDQ7XG5NSURJRXZlbnRzLkVWRU5UX01FVEFfTFlSSUNTID0gMHgwNTtcbk1JRElFdmVudHMuRVZFTlRfTUVUQV9NQVJLRVIgPSAweDA2O1xuTUlESUV2ZW50cy5FVkVOVF9NRVRBX0NVRV9QT0lOVCA9IDB4MDc7XG5NSURJRXZlbnRzLkVWRU5UX01FVEFfTUlESV9DSEFOTkVMX1BSRUZJWCA9IDB4MjA7XG5NSURJRXZlbnRzLkVWRU5UX01FVEFfRU5EX09GX1RSQUNLID0gMHgyZjtcbk1JRElFdmVudHMuRVZFTlRfTUVUQV9TRVRfVEVNUE8gPSAweDUxO1xuTUlESUV2ZW50cy5FVkVOVF9NRVRBX1NNVFBFX09GRlNFVCA9IDB4NTQ7XG5NSURJRXZlbnRzLkVWRU5UX01FVEFfVElNRV9TSUdOQVRVUkUgPSAweDU4O1xuTUlESUV2ZW50cy5FVkVOVF9NRVRBX0tFWV9TSUdOQVRVUkUgPSAweDU5O1xuTUlESUV2ZW50cy5FVkVOVF9NRVRBX1NFUVVFTkNFUl9TUEVDSUZJQyA9IDB4N2Y7XG4vLyBNSURJIGV2ZW50IHR5cGVzXG5NSURJRXZlbnRzLkVWRU5UX01JRElfTk9URV9PRkYgPSAweDg7XG5NSURJRXZlbnRzLkVWRU5UX01JRElfTk9URV9PTiA9IDB4OTtcbk1JRElFdmVudHMuRVZFTlRfTUlESV9OT1RFX0FGVEVSVE9VQ0ggPSAweGE7XG5NSURJRXZlbnRzLkVWRU5UX01JRElfQ09OVFJPTExFUiA9IDB4Yjtcbk1JRElFdmVudHMuRVZFTlRfTUlESV9QUk9HUkFNX0NIQU5HRSA9IDB4Yztcbk1JRElFdmVudHMuRVZFTlRfTUlESV9DSEFOTkVMX0FGVEVSVE9VQ0ggPSAweGQ7XG5NSURJRXZlbnRzLkVWRU5UX01JRElfUElUQ0hfQkVORCA9IDB4ZTtcbi8vIE1JREkgZXZlbnQgc2l6ZXNcbk1JRElFdmVudHMuTUlESV8xUEFSQU1fRVZFTlRTID0gW1xuICBNSURJRXZlbnRzLkVWRU5UX01JRElfUFJPR1JBTV9DSEFOR0UsXG4gIE1JRElFdmVudHMuRVZFTlRfTUlESV9DSEFOTkVMX0FGVEVSVE9VQ0gsXG5dO1xuTUlESUV2ZW50cy5NSURJXzJQQVJBTVNfRVZFTlRTID0gW1xuICBNSURJRXZlbnRzLkVWRU5UX01JRElfTk9URV9PRkYsXG4gIE1JRElFdmVudHMuRVZFTlRfTUlESV9OT1RFX09OLFxuICBNSURJRXZlbnRzLkVWRU5UX01JRElfTk9URV9BRlRFUlRPVUNILFxuICBNSURJRXZlbnRzLkVWRU5UX01JRElfQ09OVFJPTExFUixcbiAgTUlESUV2ZW50cy5FVkVOVF9NSURJX1BJVENIX0JFTkQsXG5dO1xuXG4vLyBDcmVhdGUgYW4gZXZlbnQgc3RyZWFtIHBhcnNlclxuTUlESUV2ZW50cy5jcmVhdGVQYXJzZXIgPSBmdW5jdGlvbiBtaWRpRXZlbnRzQ3JlYXRlUGFyc2VyKFxuICBzdHJlYW0sXG4gIHN0YXJ0QXQsXG4gIHN0cmljdE1vZGVcbikge1xuICAvLyBQcml2YXRlIHZhcnNcbiAgLy8gQ29tbW9uIHZhcnNcbiAgdmFyIGV2ZW50VHlwZUJ5dGU7XG4gIHZhciBldmVudDtcbiAgLy8gTUlESSBldmVudHMgdmFyc1xuICB2YXIgTUlESUV2ZW50VHlwZTtcbiAgdmFyIE1JRElFdmVudENoYW5uZWw7XG4gIHZhciBNSURJRXZlbnRQYXJhbTE7XG5cbiAgLy8gV3JhcCBEYXRhVmlldyBpbnRvIGEgZGF0YSBzdHJlYW1cbiAgaWYgKHN0cmVhbSBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgc3RyZWFtID0ge1xuICAgICAgcG9zaXRpb246IHN0YXJ0QXQgfHwgMCxcbiAgICAgIGJ1ZmZlcjogc3RyZWFtLFxuICAgICAgcmVhZFVpbnQ4OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLmdldFVpbnQ4KHRoaXMucG9zaXRpb24rKyk7XG4gICAgICB9LFxuICAgICAgcmVhZFVpbnQxNjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2ID0gdGhpcy5idWZmZXIuZ2V0VWludDE2KHRoaXMucG9zaXRpb24pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiArIDI7XG4gICAgICAgIHJldHVybiB2O1xuICAgICAgfSxcbiAgICAgIHJlYWRVaW50MzI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdiA9IHRoaXMuYnVmZmVyLmdldFVpbnQxNih0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gKyAyO1xuICAgICAgICByZXR1cm4gdjtcbiAgICAgIH0sXG4gICAgICByZWFkVmFySW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHYgPSAwO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBiO1xuXG4gICAgICAgIHdoaWxlICg0ID4gaSsrKSB7XG4gICAgICAgICAgYiA9IHRoaXMucmVhZFVpbnQ4KCk7XG5cbiAgICAgICAgICBpZiAoYiAmIDB4ODApIHtcbiAgICAgICAgICAgIHYgKz0gYiAmIDB4N2Y7XG4gICAgICAgICAgICB2IDw8PSA3O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdiArIGI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnMHgnICtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9TdHJpbmcoMTYpICtcbiAgICAgICAgICAgICc6JyArXG4gICAgICAgICAgICAnIFZhcmlhYmxlIGludGVnZXIgbGVuZ3RoIGNhbm5vdCBleGNlZWQgNCBieXRlcydcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICByZWFkQnl0ZXM6IGZ1bmN0aW9uKGxlbmd0aCkge1xuICAgICAgICB2YXIgYnl0ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKDsgMCA8IGxlbmd0aDsgbGVuZ3RoLS0pIHtcbiAgICAgICAgICBieXRlcy5wdXNoKHRoaXMucmVhZFVpbnQ4KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBieXRlcztcbiAgICAgIH0sXG4gICAgICBwb3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJzB4JyArICh0aGlzLmJ1ZmZlci5ieXRlT2Zmc2V0ICsgdGhpcy5wb3NpdGlvbikudG9TdHJpbmcoMTYpO1xuICAgICAgfSxcbiAgICAgIGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgfSxcbiAgICB9O1xuICAgIHN0YXJ0QXQgPSAwO1xuICB9XG4gIC8vIENvbnN1bWUgc3RyZWFtIHRpbGwgbm90IGF0IHN0YXJ0IGluZGV4XG4gIGlmICgwIDwgc3RhcnRBdCkge1xuICAgIHdoaWxlIChzdGFydEF0LS0pIHtcbiAgICAgIHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICB9XG4gIH1cbiAgLy8gY3JlYXRpbmcgdGhlIHBhcnNlciBvYmplY3RcbiAgcmV0dXJuIHtcbiAgICAvLyBSZWFkIHRoZSBuZXh0IGV2ZW50XG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBDaGVjayBhdmFpbGFibGUgZGF0YXNcbiAgICAgIGlmIChzdHJlYW0uZW5kKCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvLyBDcmVhdGluZyB0aGUgZXZlbnRcbiAgICAgIGV2ZW50ID0ge1xuICAgICAgICAvLyBNZW1vaXplIHRoZSBldmVudCBpbmRleFxuICAgICAgICBpbmRleDogc3RyZWFtLnBvcygpLFxuICAgICAgICAvLyBSZWFkIHRoZSBkZWx0YSB0aW1lXG4gICAgICAgIGRlbHRhOiBzdHJlYW0ucmVhZFZhckludCgpLFxuICAgICAgfTtcbiAgICAgIC8vIFJlYWQgdGhlIGV2ZW50VHlwZUJ5dGVcbiAgICAgIGV2ZW50VHlwZUJ5dGUgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICBpZiAoMHhmMCA9PT0gKGV2ZW50VHlwZUJ5dGUgJiAweGYwKSkge1xuICAgICAgICAvLyBNZXRhIGV2ZW50c1xuICAgICAgICBpZiAoZXZlbnRUeXBlQnl0ZSA9PT0gTUlESUV2ZW50cy5FVkVOVF9NRVRBKSB7XG4gICAgICAgICAgZXZlbnQudHlwZSA9IE1JRElFdmVudHMuRVZFTlRfTUVUQTtcbiAgICAgICAgICBldmVudC5zdWJ0eXBlID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICAgIGV2ZW50Lmxlbmd0aCA9IHN0cmVhbS5yZWFkVmFySW50KCk7XG4gICAgICAgICAgc3dpdGNoIChldmVudC5zdWJ0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9TRVFVRU5DRV9OVU1CRVI6XG4gICAgICAgICAgICAgIGlmIChzdHJpY3RNb2RlICYmIDIgIT09IGV2ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHJlYW0ucG9zKCkgKyAnIEJhZCBtZXRhZXZlbnQgbGVuZ3RoLicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGV2ZW50Lm1zYiA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgICAgICAgZXZlbnQubHNiID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9URVhUOlxuICAgICAgICAgICAgY2FzZSBNSURJRXZlbnRzLkVWRU5UX01FVEFfQ09QWVJJR0hUX05PVElDRTpcbiAgICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX1RSQUNLX05BTUU6XG4gICAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9JTlNUUlVNRU5UX05BTUU6XG4gICAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9MWVJJQ1M6XG4gICAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9NQVJLRVI6XG4gICAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9DVUVfUE9JTlQ6XG4gICAgICAgICAgICAgIGV2ZW50LmRhdGEgPSBzdHJlYW0ucmVhZEJ5dGVzKGV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX01JRElfQ0hBTk5FTF9QUkVGSVg6XG4gICAgICAgICAgICAgIGlmIChzdHJpY3RNb2RlICYmIDEgIT09IGV2ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHJlYW0ucG9zKCkgKyAnIEJhZCBtZXRhZXZlbnQgbGVuZ3RoLicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGV2ZW50LnByZWZpeCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICAgICAgY2FzZSBNSURJRXZlbnRzLkVWRU5UX01FVEFfRU5EX09GX1RSQUNLOlxuICAgICAgICAgICAgICBpZiAoc3RyaWN0TW9kZSAmJiAwICE9PSBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyZWFtLnBvcygpICsgJyBCYWQgbWV0YWV2ZW50IGxlbmd0aC4nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9TRVRfVEVNUE86XG4gICAgICAgICAgICAgIGlmIChzdHJpY3RNb2RlICYmIDMgIT09IGV2ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIHN0cmVhbS5wb3MoKSArICcgVGVtcG8gbWV0YSBldmVudCBsZW5ndGggbXVzdCBiZSAzLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGV2ZW50LnRlbXBvID1cbiAgICAgICAgICAgICAgICAoc3RyZWFtLnJlYWRVaW50OCgpIDw8IDE2KSArXG4gICAgICAgICAgICAgICAgKHN0cmVhbS5yZWFkVWludDgoKSA8PCA4KSArXG4gICAgICAgICAgICAgICAgc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICAgICAgICBldmVudC50ZW1wb0JQTSA9IDYwMDAwMDAwIC8gZXZlbnQudGVtcG87XG4gICAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX1NNVFBFX09GRlNFVDpcbiAgICAgICAgICAgICAgaWYgKHN0cmljdE1vZGUgJiYgNSAhPT0gZXZlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cmVhbS5wb3MoKSArICcgQmFkIG1ldGFldmVudCBsZW5ndGguJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZXZlbnQuaG91ciA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgICAgICAgaWYgKHN0cmljdE1vZGUgJiYgMjMgPCBldmVudC5ob3VyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgc3RyZWFtLnBvcygpICtcbiAgICAgICAgICAgICAgICAgICAgJyBTTVRQRSBvZmZzZXQgaG91ciB2YWx1ZSBtdXN0JyArXG4gICAgICAgICAgICAgICAgICAgICcgYmUgcGFydCBvZiAwLTIzLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGV2ZW50Lm1pbnV0ZXMgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgICAgIGlmIChzdHJpY3RNb2RlICYmIDU5IDwgZXZlbnQubWludXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIHN0cmVhbS5wb3MoKSArXG4gICAgICAgICAgICAgICAgICAgICcgU01UUEUgb2Zmc2V0IG1pbnV0ZXMgdmFsdWUnICtcbiAgICAgICAgICAgICAgICAgICAgJyBtdXN0IGJlIHBhcnQgb2YgMC01OS4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBldmVudC5zZWNvbmRzID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICAgICAgICBpZiAoc3RyaWN0TW9kZSAmJiA1OSA8IGV2ZW50LnNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICBzdHJlYW0ucG9zKCkgK1xuICAgICAgICAgICAgICAgICAgICAnIFNNVFBFIG9mZnNldCBzZWNvbmRzIHZhbHVlJyArXG4gICAgICAgICAgICAgICAgICAgICcgbXVzdCBiZSBwYXJ0IG9mIDAtNTkuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZXZlbnQuZnJhbWVzID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICAgICAgICBpZiAoc3RyaWN0TW9kZSAmJiAzMCA8IGV2ZW50LmZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIHN0cmVhbS5wb3MoKSArXG4gICAgICAgICAgICAgICAgICAgICcgU01UUEUgb2Zmc2V0IGZyYW1lcyB2YWx1ZSBtdXN0JyArXG4gICAgICAgICAgICAgICAgICAgICcgYmUgcGFydCBvZiAwLTMwLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGV2ZW50LnN1YmZyYW1lcyA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgICAgICAgaWYgKHN0cmljdE1vZGUgJiYgOTkgPCBldmVudC5zdWJmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICBzdHJlYW0ucG9zKCkgK1xuICAgICAgICAgICAgICAgICAgICAnIFNNVFBFIG9mZnNldCBzdWJmcmFtZXMgdmFsdWUnICtcbiAgICAgICAgICAgICAgICAgICAgJyBtdXN0IGJlIHBhcnQgb2YgMC05OS4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9LRVlfU0lHTkFUVVJFOlxuICAgICAgICAgICAgICBpZiAoc3RyaWN0TW9kZSAmJiAyICE9PSBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyZWFtLnBvcygpICsgJyBCYWQgbWV0YWV2ZW50IGxlbmd0aC4nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBldmVudC5rZXkgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgICAgIGlmIChzdHJpY3RNb2RlICYmICgtNyA+IGV2ZW50LmtleSB8fCA3IDwgZXZlbnQua2V5KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHJlYW0ucG9zKCkgKyAnIEJhZCBtZXRhZXZlbnQgbGVuZ3RoLicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGV2ZW50LnNjYWxlID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICAgICAgICBpZiAoc3RyaWN0TW9kZSAmJiAwICE9PSBldmVudC5zY2FsZSAmJiAxICE9PSBldmVudC5zY2FsZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIHN0cmVhbS5wb3MoKSArXG4gICAgICAgICAgICAgICAgICAgICcgS2V5IHNpZ25hdHVyZSBzY2FsZSB2YWx1ZSBtdXN0JyArXG4gICAgICAgICAgICAgICAgICAgICcgYmUgMCBvciAxLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX1RJTUVfU0lHTkFUVVJFOlxuICAgICAgICAgICAgICBpZiAoc3RyaWN0TW9kZSAmJiA0ICE9PSBldmVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyZWFtLnBvcygpICsgJyBCYWQgbWV0YWV2ZW50IGxlbmd0aC4nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBldmVudC5kYXRhID0gc3RyZWFtLnJlYWRCeXRlcyhldmVudC5sZW5ndGgpO1xuICAgICAgICAgICAgICBldmVudC5wYXJhbTEgPSBldmVudC5kYXRhWzBdO1xuICAgICAgICAgICAgICBldmVudC5wYXJhbTIgPSBldmVudC5kYXRhWzFdO1xuICAgICAgICAgICAgICBldmVudC5wYXJhbTMgPSBldmVudC5kYXRhWzJdO1xuICAgICAgICAgICAgICBldmVudC5wYXJhbTQgPSBldmVudC5kYXRhWzNdO1xuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9TRVFVRU5DRVJfU1BFQ0lGSUM6XG4gICAgICAgICAgICAgIGV2ZW50LmRhdGEgPSBzdHJlYW0ucmVhZEJ5dGVzKGV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGlmIChzdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgc3RyZWFtLnBvcygpICtcbiAgICAgICAgICAgICAgICAgICAgJyBVbmtub3duIG1ldGEgZXZlbnQgdHlwZSAnICtcbiAgICAgICAgICAgICAgICAgICAgJygnICtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3VidHlwZS50b1N0cmluZygxNikgK1xuICAgICAgICAgICAgICAgICAgICAnKS4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBldmVudC5kYXRhID0gc3RyZWFtLnJlYWRCeXRlcyhldmVudC5sZW5ndGgpO1xuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFN5c3RlbSBldmVudHNcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBldmVudFR5cGVCeXRlID09PSBNSURJRXZlbnRzLkVWRU5UX1NZU0VYIHx8XG4gICAgICAgICAgZXZlbnRUeXBlQnl0ZSA9PT0gTUlESUV2ZW50cy5FVkVOVF9ESVZTWVNFWFxuICAgICAgICApIHtcbiAgICAgICAgICBldmVudC50eXBlID0gZXZlbnRUeXBlQnl0ZTtcbiAgICAgICAgICBldmVudC5sZW5ndGggPSBzdHJlYW0ucmVhZFZhckludCgpO1xuICAgICAgICAgIGV2ZW50LmRhdGEgPSBzdHJlYW0ucmVhZEJ5dGVzKGV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICAgIC8vIFVua25vd24gZXZlbnQsIGFzc3VtaW5nIGl0J3Mgc3lzdGVtIGxpa2UgZXZlbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBzdHJlYW0ucG9zKCkgK1xuICAgICAgICAgICAgICAgICcgVW5rbm93biBldmVudCB0eXBlICcgK1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ5dGUudG9TdHJpbmcoMTYpICtcbiAgICAgICAgICAgICAgICAnLCBEZWx0YTogJyArXG4gICAgICAgICAgICAgICAgZXZlbnQuZGVsdGEgK1xuICAgICAgICAgICAgICAgICcuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQudHlwZSA9IGV2ZW50VHlwZUJ5dGU7XG4gICAgICAgICAgZXZlbnQuYmFkc3VidHlwZSA9IHN0cmVhbS5yZWFkVmFySW50KCk7XG4gICAgICAgICAgZXZlbnQubGVuZ3RoID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICAgIGV2ZW50LmRhdGEgPSBzdHJlYW0ucmVhZEJ5dGVzKGV2ZW50Lmxlbmd0aCk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIE1JREkgZXZlbnRzZGVzdGluYXRpb25baW5kZXgrK11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJ1bm5pbmcgc3RhdHVzXG4gICAgICAgIGlmICgwID09PSAoZXZlbnRUeXBlQnl0ZSAmIDB4ODApKSB7XG4gICAgICAgICAgaWYgKCFNSURJRXZlbnRUeXBlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIHN0cmVhbS5wb3MoKSArICcgUnVubmluZyBzdGF0dXMgd2l0aG91dCBwcmV2aW91cyBldmVudCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIE1JRElFdmVudFBhcmFtMSA9IGV2ZW50VHlwZUJ5dGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTUlESUV2ZW50VHlwZSA9IGV2ZW50VHlwZUJ5dGUgPj4gNDtcbiAgICAgICAgICBNSURJRXZlbnRDaGFubmVsID0gZXZlbnRUeXBlQnl0ZSAmIDB4MGY7XG4gICAgICAgICAgTUlESUV2ZW50UGFyYW0xID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnR5cGUgPSBNSURJRXZlbnRzLkVWRU5UX01JREk7XG4gICAgICAgIGV2ZW50LnN1YnR5cGUgPSBNSURJRXZlbnRUeXBlO1xuICAgICAgICBldmVudC5jaGFubmVsID0gTUlESUV2ZW50Q2hhbm5lbDtcbiAgICAgICAgZXZlbnQucGFyYW0xID0gTUlESUV2ZW50UGFyYW0xO1xuICAgICAgICBzd2l0Y2ggKE1JRElFdmVudFR5cGUpIHtcbiAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUlESV9OT1RFX09GRjpcbiAgICAgICAgICAgIGV2ZW50LnBhcmFtMiA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUlESV9OT1RFX09OOlxuICAgICAgICAgICAgZXZlbnQucGFyYW0yID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuXG4gICAgICAgICAgICAvLyBJZiB2ZWxvY2l0eSBpcyAwLCBpdCdzIGEgbm90ZSBvZmYgZXZlbnQgaW4gZmFjdFxuICAgICAgICAgICAgaWYgKCFldmVudC5wYXJhbTIpIHtcbiAgICAgICAgICAgICAgZXZlbnQuc3VidHlwZSA9IE1JRElFdmVudHMuRVZFTlRfTUlESV9OT1RFX09GRjtcbiAgICAgICAgICAgICAgZXZlbnQucGFyYW0yID0gMTI3OyAvLyBGaW5kIGEgc3RhbmRhcmQgdGVsbGluZyB3aGF0IHRvIGRvIGhlcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUlESV9OT1RFX0FGVEVSVE9VQ0g6XG4gICAgICAgICAgICBldmVudC5wYXJhbTIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgY2FzZSBNSURJRXZlbnRzLkVWRU5UX01JRElfQ09OVFJPTExFUjpcbiAgICAgICAgICAgIGV2ZW50LnBhcmFtMiA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUlESV9QUk9HUkFNX0NIQU5HRTpcbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUlESV9DSEFOTkVMX0FGVEVSVE9VQ0g6XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgY2FzZSBNSURJRXZlbnRzLkVWRU5UX01JRElfUElUQ0hfQkVORDpcbiAgICAgICAgICAgIGV2ZW50LnBhcmFtMiA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKHN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIHN0cmVhbS5wb3MoKSArXG4gICAgICAgICAgICAgICAgICAnIFVua25vd24gTUlESSBldmVudCB0eXBlICcgK1xuICAgICAgICAgICAgICAgICAgJygnICtcbiAgICAgICAgICAgICAgICAgIE1JRElFdmVudFR5cGUudG9TdHJpbmcoMTYpICtcbiAgICAgICAgICAgICAgICAgICcpLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG4vLyBSZXR1cm4gdGhlIGJ1ZmZlciBsZW5ndGggbmVlZGVkIHRvIGVuY29kZSB0aGUgZ2l2ZW4gZXZlbnRzXG5NSURJRXZlbnRzLndyaXRlVG9UcmFjayA9IGZ1bmN0aW9uIG1pZGlFdmVudHNXcml0ZVRvVHJhY2soXG4gIGV2ZW50cyxcbiAgZGVzdGluYXRpb24sXG4gIHN0cmljdE1vZGVcbikge1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgaTtcbiAgdmFyIGo7XG4gIHZhciBrO1xuICB2YXIgbDtcblxuICAvLyBDb252ZXJ0aW5nIGVhY2ggZXZlbnQgdG8gYmluYXJ5IE1JREkgZGF0YXNcbiAgZm9yIChpID0gMCwgaiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAvLyBXcml0aW5nIGRlbHRhIHZhbHVlXG4gICAgaWYgKGV2ZW50c1tpXS5kZWx0YSA+Pj4gMjgpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAnRXZlbnQgIycgK1xuICAgICAgICAgIGkgK1xuICAgICAgICAgICc6IE1heGltdW0gZGVsdGEgdGltZSB2YWx1ZSByZWFjaGVkICgnICtcbiAgICAgICAgICBldmVudHNbaV0uZGVsdGEgK1xuICAgICAgICAgICcvMTM0MjE3NzI4IG1heCknXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzW2ldLmRlbHRhID4+PiAyMSkge1xuICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSAoKGV2ZW50c1tpXS5kZWx0YSA+Pj4gMjEpICYgMHg3ZikgfCAweDgwO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzW2ldLmRlbHRhID4+PiAxNCkge1xuICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSAoKGV2ZW50c1tpXS5kZWx0YSA+Pj4gMTQpICYgMHg3ZikgfCAweDgwO1xuICAgIH1cbiAgICBpZiAoZXZlbnRzW2ldLmRlbHRhID4+PiA3KSB7XG4gICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9ICgoZXZlbnRzW2ldLmRlbHRhID4+PiA3KSAmIDB4N2YpIHwgMHg4MDtcbiAgICB9XG4gICAgZGVzdGluYXRpb25baW5kZXgrK10gPSBldmVudHNbaV0uZGVsdGEgJiAweDdmO1xuICAgIC8vIE1JREkgRXZlbnRzIGVuY29kaW5nXG4gICAgaWYgKGV2ZW50c1tpXS50eXBlID09PSBNSURJRXZlbnRzLkVWRU5UX01JREkpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgYnl0ZSBvZiBzdWJ0eXBlICsgY2hhbm5lbFxuICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSAoZXZlbnRzW2ldLnN1YnR5cGUgPDwgNCkgKyBldmVudHNbaV0uY2hhbm5lbDtcbiAgICAgIC8vIEFkZGluZyB0aGUgYnl0ZSBvZiB0aGUgZmlyc3QgcGFyYW1zXG4gICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9IGV2ZW50c1tpXS5wYXJhbTE7XG4gICAgICAvLyBBZGRpbmcgYSBieXRlIGZvciB0aGUgb3B0aW9ubmFsIHNlY29uZCBwYXJhbVxuICAgICAgaWYgKC0xICE9PSBNSURJRXZlbnRzLk1JRElfMlBBUkFNU19FVkVOVFMuaW5kZXhPZihldmVudHNbaV0uc3VidHlwZSkpIHtcbiAgICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSBldmVudHNbaV0ucGFyYW0yO1xuICAgICAgfVxuICAgICAgLy8gTUVUQSAvIFNZU0VYIGV2ZW50cyBlbmNvZGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIGV2ZW50IHR5cGUgYnl0ZVxuICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSBldmVudHNbaV0udHlwZTtcbiAgICAgIC8vIEFkZGluZyB0aGUgTUVUQSBldmVudCBzdWJ0eXBlIGJ5dGVcbiAgICAgIGlmIChldmVudHNbaV0udHlwZSA9PT0gTUlESUV2ZW50cy5FVkVOVF9NRVRBKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uW2luZGV4KytdID0gZXZlbnRzW2ldLnN1YnR5cGU7XG4gICAgICB9XG4gICAgICAvLyBXcml0aW5nIHRoZSBldmVudCBsZW5ndGggYnl0ZXNcbiAgICAgIGlmIChldmVudHNbaV0ubGVuZ3RoID4+PiAyOCkge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAnRXZlbnQgIycgK1xuICAgICAgICAgICAgaSArXG4gICAgICAgICAgICAnOiBNYXhpbXVtIGxlbmd0aCByZWFjaGVkICgnICtcbiAgICAgICAgICAgIGV2ZW50c1tpXS5sZW5ndGggK1xuICAgICAgICAgICAgJy8xMzQyMTc3MjggbWF4KSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudHNbaV0ubGVuZ3RoID4+PiAyMSkge1xuICAgICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9ICgoZXZlbnRzW2ldLmxlbmd0aCA+Pj4gMjEpICYgMHg3ZikgfCAweDgwO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50c1tpXS5sZW5ndGggPj4+IDE0KSB7XG4gICAgICAgIGRlc3RpbmF0aW9uW2luZGV4KytdID0gKChldmVudHNbaV0ubGVuZ3RoID4+PiAxNCkgJiAweDdmKSB8IDB4ODA7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnRzW2ldLmxlbmd0aCA+Pj4gNykge1xuICAgICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9ICgoZXZlbnRzW2ldLmxlbmd0aCA+Pj4gNykgJiAweDdmKSB8IDB4ODA7XG4gICAgICB9XG4gICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9IGV2ZW50c1tpXS5sZW5ndGggJiAweDdmO1xuICAgICAgaWYgKGV2ZW50c1tpXS50eXBlID09PSBNSURJRXZlbnRzLkVWRU5UX01FVEEpIHtcbiAgICAgICAgc3dpdGNoIChldmVudHNbaV0uc3VidHlwZSkge1xuICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX1NFUVVFTkNFX05VTUJFUjpcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2luZGV4KytdID0gZXZlbnRzW2ldLm1zYjtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2luZGV4KytdID0gZXZlbnRzW2ldLmxzYjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX1RFWFQ6XG4gICAgICAgICAgY2FzZSBNSURJRXZlbnRzLkVWRU5UX01FVEFfQ09QWVJJR0hUX05PVElDRTpcbiAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9UUkFDS19OQU1FOlxuICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX0lOU1RSVU1FTlRfTkFNRTpcbiAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9MWVJJQ1M6XG4gICAgICAgICAgY2FzZSBNSURJRXZlbnRzLkVWRU5UX01FVEFfTUFSS0VSOlxuICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX0NVRV9QT0lOVDpcbiAgICAgICAgICAgIGZvciAoayA9IDAsIGwgPSBldmVudHNbaV0ubGVuZ3RoOyBrIDwgbDsgaysrKSB7XG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uW2luZGV4KytdID0gZXZlbnRzW2ldLmRhdGFba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIE1JRElFdmVudHMuRVZFTlRfTUVUQV9NSURJX0NIQU5ORUxfUFJFRklYOlxuICAgICAgICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSBldmVudHNbaV0ucHJlZml4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBNSURJRXZlbnRzLkVWRU5UX01FVEFfRU5EX09GX1RSQUNLOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBNSURJRXZlbnRzLkVWRU5UX01FVEFfU0VUX1RFTVBPOlxuICAgICAgICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSBldmVudHNbaV0udGVtcG8gPj4gMTY7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9IChldmVudHNbaV0udGVtcG8gPj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSBldmVudHNbaV0udGVtcG8gJiAweGZmO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBNSURJRXZlbnRzLkVWRU5UX01FVEFfU01UUEVfT0ZGU0VUOlxuICAgICAgICAgICAgaWYgKHN0cmljdE1vZGUgJiYgMjMgPCBldmVudHNbaV0uaG91cikge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0V2ZW50ICMnICtcbiAgICAgICAgICAgICAgICAgIGkgK1xuICAgICAgICAgICAgICAgICAgJzogU01UUEUgb2Zmc2V0IGhvdXIgdmFsdWUgbXVzdCBiZScgK1xuICAgICAgICAgICAgICAgICAgJyBwYXJ0IG9mIDAtMjMuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSBldmVudHNbaV0uaG91cjtcbiAgICAgICAgICAgIGlmIChzdHJpY3RNb2RlICYmIDU5IDwgZXZlbnRzW2ldLm1pbnV0ZXMpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdFdmVudCAjJyArXG4gICAgICAgICAgICAgICAgICBpICtcbiAgICAgICAgICAgICAgICAgICc6IFNNVFBFIG9mZnNldCBtaW51dGVzIHZhbHVlIG11c3QnICtcbiAgICAgICAgICAgICAgICAgICcgYmUgcGFydCBvZiAwLTU5LidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2luZGV4KytdID0gZXZlbnRzW2ldLm1pbnV0ZXM7XG4gICAgICAgICAgICBpZiAoc3RyaWN0TW9kZSAmJiA1OSA8IGV2ZW50c1tpXS5zZWNvbmRzKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnRXZlbnQgIycgK1xuICAgICAgICAgICAgICAgICAgaSArXG4gICAgICAgICAgICAgICAgICAnOiBTTVRQRSBvZmZzZXQgc2Vjb25kcyB2YWx1ZSBtdXN0JyArXG4gICAgICAgICAgICAgICAgICAnIGJlIHBhcnQgb2YgMC01OS4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9IGV2ZW50c1tpXS5zZWNvbmRzO1xuICAgICAgICAgICAgaWYgKHN0cmljdE1vZGUgJiYgMzAgPCBldmVudHNbaV0uZnJhbWVzKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnRXZlbnQgIycgK1xuICAgICAgICAgICAgICAgICAgaSArXG4gICAgICAgICAgICAgICAgICAnOiBTTVRQRSBvZmZzZXQgZnJhbWVzIGFtb3VudCBtdXN0JyArXG4gICAgICAgICAgICAgICAgICAnIGJlIHBhcnQgb2YgMC0zMC4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9IGV2ZW50c1tpXS5mcmFtZXM7XG4gICAgICAgICAgICBpZiAoc3RyaWN0TW9kZSAmJiA5OSA8IGV2ZW50c1tpXS5zdWJmcmFtZXMpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdFdmVudCAjJyArXG4gICAgICAgICAgICAgICAgICBpICtcbiAgICAgICAgICAgICAgICAgICc6IFNNVFBFIG9mZnNldCBzdWJmcmFtZXMgYW1vdW50JyArXG4gICAgICAgICAgICAgICAgICAnIG11c3QgYmUgcGFydCBvZiAwLTk5LidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2luZGV4KytdID0gZXZlbnRzW2ldLnN1YmZyYW1lcztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX0tFWV9TSUdOQVRVUkU6XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICdudW1iZXInICE9IHR5cGVvZiBldmVudHNbaV0ua2V5IHx8XG4gICAgICAgICAgICAgIC03ID4gZXZlbnRzW2ldLmtleSB8fFxuICAgICAgICAgICAgICA3IDwgZXZlbnRzW2ldLnNjYWxlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdFdmVudCAjJyArXG4gICAgICAgICAgICAgICAgICBpICtcbiAgICAgICAgICAgICAgICAgICc6VGhlIGtleSBzaWduYXR1cmUga2V5IG11c3QgYmUnICtcbiAgICAgICAgICAgICAgICAgICcgYmV0d2VlbiAtNyBhbmQgNydcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgJ251bWJlcicgIT09IHR5cGVvZiBldmVudHNbaV0uc2NhbGUgfHxcbiAgICAgICAgICAgICAgMCA+IGV2ZW50c1tpXS5zY2FsZSB8fFxuICAgICAgICAgICAgICAxIDwgZXZlbnRzW2ldLnNjYWxlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdFdmVudCAjJyArIGkgKyAnOicgKyAnVGhlIGtleSBzaWduYXR1cmUgc2NhbGUgbXVzdCBiZSAwIG9yIDEnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9IGV2ZW50c1tpXS5rZXk7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9IGV2ZW50c1tpXS5zY2FsZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIE5vdCBpbXBsZW1lbnRlZFxuICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX1RJTUVfU0lHTkFUVVJFOlxuICAgICAgICAgIGNhc2UgTUlESUV2ZW50cy5FVkVOVF9NRVRBX1NFUVVFTkNFUl9TUEVDSUZJQzpcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZm9yIChrID0gMCwgbCA9IGV2ZW50c1tpXS5sZW5ndGg7IGsgPCBsOyBrKyspIHtcbiAgICAgICAgICAgICAgZGVzdGluYXRpb25baW5kZXgrK10gPSBldmVudHNbaV0uZGF0YVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZGluZyBieXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBzeXNleCBldmVudCBkYXRhc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChrID0gMCwgbCA9IGV2ZW50c1tpXS5sZW5ndGg7IGsgPCBsOyBrKyspIHtcbiAgICAgICAgICBkZXN0aW5hdGlvbltpbmRleCsrXSA9IGV2ZW50c1tpXS5kYXRhW2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLyBSZXR1cm4gdGhlIGJ1ZmZlciBsZW5ndGggbmVlZGVkIHRvIGVuY29kZSB0aGUgZ2l2ZW4gZXZlbnRzXG5NSURJRXZlbnRzLmdldFJlcXVpcmVkQnVmZmVyTGVuZ3RoID0gZnVuY3Rpb24oZXZlbnRzKSB7XG4gIHZhciBidWZmZXJMZW5ndGggPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciBqO1xuXG4gIC8vIENhbGN1bGF0aW5nIHRoZSB0cmFjayBzaXplIGJ5IGFkZGluZyBldmVudHMgbGVuZ3Roc1xuICBmb3IgKGkgPSAwLCBqID0gZXZlbnRzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgIC8vIENvbXB1dGluZyBuZWNlc3NhcnkgYnl0ZXMgdG8gZW5jb2RlIHRoZSBkZWx0YSB2YWx1ZVxuICAgIGJ1ZmZlckxlbmd0aCArPVxuICAgICAgZXZlbnRzW2ldLmRlbHRhID4+PiAyMVxuICAgICAgICA/IDRcbiAgICAgICAgOiBldmVudHNbaV0uZGVsdGEgPj4+IDE0XG4gICAgICAgICAgPyAzXG4gICAgICAgICAgOiBldmVudHNbaV0uZGVsdGEgPj4+IDdcbiAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgOiAxO1xuICAgIC8vIE1JREkgRXZlbnRzIGhhdmUgdmFyaW91cyBmaXhlZCBsZW5ndGhzXG4gICAgaWYgKGV2ZW50c1tpXS50eXBlID09PSBNSURJRXZlbnRzLkVWRU5UX01JREkpIHtcbiAgICAgIC8vIEFkZGluZyBhIGJ5dGUgZm9yIHN1YnR5cGUgKyBjaGFubmVsXG4gICAgICBidWZmZXJMZW5ndGgrKztcbiAgICAgIC8vIEFkZGluZyBhIGJ5dGUgZm9yIHRoZSBmaXJzdCBwYXJhbXNcbiAgICAgIGJ1ZmZlckxlbmd0aCsrO1xuICAgICAgLy8gQWRkaW5nIGEgYnl0ZSBmb3IgdGhlIG9wdGlvbm5hbCBzZWNvbmQgcGFyYW1cbiAgICAgIGlmICgtMSAhPT0gTUlESUV2ZW50cy5NSURJXzJQQVJBTVNfRVZFTlRTLmluZGV4T2YoZXZlbnRzW2ldLnN1YnR5cGUpKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aCsrO1xuICAgICAgfVxuICAgICAgLy8gTUVUQSAvIFNZU0VYIGV2ZW50cyBsZW5ndGhzIGFyZSBzZWxmIGRlZmluZWRcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkaW5nIGEgYnl0ZSBmb3IgdGhlIGV2ZW50IHR5cGVcbiAgICAgIGJ1ZmZlckxlbmd0aCsrO1xuICAgICAgLy8gQWRkaW5nIGEgYnl0ZSBmb3IgTUVUQSBldmVudHMgc3VidHlwZVxuICAgICAgaWYgKGV2ZW50c1tpXS50eXBlID09PSBNSURJRXZlbnRzLkVWRU5UX01FVEEpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoKys7XG4gICAgICB9XG4gICAgICAvLyBBZGRpbmcgbmVjZXNzYXJ5IGJ5dGVzIHRvIGVuY29kZSB0aGUgbGVuZ3RoXG4gICAgICBidWZmZXJMZW5ndGggKz1cbiAgICAgICAgZXZlbnRzW2ldLmxlbmd0aCA+Pj4gMjFcbiAgICAgICAgICA/IDRcbiAgICAgICAgICA6IGV2ZW50c1tpXS5sZW5ndGggPj4+IDE0XG4gICAgICAgICAgICA/IDNcbiAgICAgICAgICAgIDogZXZlbnRzW2ldLmxlbmd0aCA+Pj4gN1xuICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgOiAxO1xuICAgICAgLy8gQWRkaW5nIGJ5dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGV2ZW50IGxlbmd0aFxuICAgICAgYnVmZmVyTGVuZ3RoICs9IGV2ZW50c1tpXS5sZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiBidWZmZXJMZW5ndGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1JRElFdmVudHM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNOb3RVVEY4OiBpc05vdFVURjgsXG4gIGdldENoYXJMZW5ndGg6IGdldENoYXJMZW5ndGgsXG4gIGdldENoYXJDb2RlOiBnZXRDaGFyQ29kZSxcbiAgZ2V0U3RyaW5nRnJvbUJ5dGVzOiBnZXRTdHJpbmdGcm9tQnl0ZXMsXG4gIGdldEJ5dGVzRm9yQ2hhckNvZGU6IGdldEJ5dGVzRm9yQ2hhckNvZGUsXG4gIHNldEJ5dGVzRnJvbUNoYXJDb2RlOiBzZXRCeXRlc0Zyb21DaGFyQ29kZSxcbiAgc2V0Qnl0ZXNGcm9tU3RyaW5nOiBzZXRCeXRlc0Zyb21TdHJpbmcsXG59O1xuXG4vLyBub24gVVRGOCBlbmNvZGluZyBkZXRlY3Rpb24gKGNmIFJFQURNRSBmaWxlIGZvciBkZXRhaWxzKVxuZnVuY3Rpb24gaXNOb3RVVEY4KGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gIHRyeSB7XG4gICAgZ2V0U3RyaW5nRnJvbUJ5dGVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoLCB0cnVlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hhckxlbmd0aCh0aGVCeXRlKSB7XG4gIC8vIDQgYnl0ZXMgZW5jb2RlZCBjaGFyIChtYXNrIDExMTEwMDAwKVxuICBpZiAoMHhmMCA9PSAodGhlQnl0ZSAmIDB4ZjApKSB7XG4gICAgcmV0dXJuIDQ7XG4gICAgLy8gMyBieXRlcyBlbmNvZGVkIGNoYXIgKG1hc2sgMTExMDAwMDApXG4gIH0gZWxzZSBpZiAoMHhlMCA9PSAodGhlQnl0ZSAmIDB4ZTApKSB7XG4gICAgcmV0dXJuIDM7XG4gICAgLy8gMiBieXRlcyBlbmNvZGVkIGNoYXIgKG1hc2sgMTEwMDAwMDApXG4gIH0gZWxzZSBpZiAoMHhjMCA9PSAodGhlQnl0ZSAmIDB4YzApKSB7XG4gICAgcmV0dXJuIDI7XG4gICAgLy8gMSBieXRlcyBlbmNvZGVkIGNoYXJcbiAgfSBlbHNlIGlmICh0aGVCeXRlID09ICh0aGVCeXRlICYgMHg3ZikpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuLy8gVVRGOCBkZWNvZGluZyBmdW5jdGlvbnNcbmZ1bmN0aW9uIGdldENoYXJDb2RlKGJ5dGVzLCBieXRlT2Zmc2V0LCBjaGFyTGVuZ3RoKSB7XG4gIHZhciBjaGFyQ29kZSA9IDAsXG4gICAgbWFzayA9ICcnO1xuICBieXRlT2Zmc2V0ID0gYnl0ZU9mZnNldCB8fCAwO1xuICAvLyB2YWxpZGF0ZSB0aGF0IHRoZSBhcnJheSBoYXMgYXQgbGVhc3Qgb25lIGJ5dGUgaW4gaXRcbiAgaWYgKGJ5dGVzLmxlbmd0aCAtIGJ5dGVPZmZzZXQgPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbW9yZSBjaGFyYWN0ZXJzIHJlbWFpbmluZyBpbiBhcnJheS4nKTtcbiAgfVxuICAvLyBSZXRyaWV2ZSBjaGFyTGVuZ3RoIGlmIG5vdCBnaXZlblxuICBjaGFyTGVuZ3RoID0gY2hhckxlbmd0aCB8fCBnZXRDaGFyTGVuZ3RoKGJ5dGVzW2J5dGVPZmZzZXRdKTtcbiAgaWYgKGNoYXJMZW5ndGggPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGJ5dGVzW2J5dGVPZmZzZXRdLnRvU3RyaW5nKDIpICtcbiAgICAgICAgJyBpcyBub3QgYSBzaWduaWZpY2F0aXZlJyArXG4gICAgICAgICcgYnl0ZSAob2Zmc2V0OicgK1xuICAgICAgICBieXRlT2Zmc2V0ICtcbiAgICAgICAgJykuJ1xuICAgICk7XG4gIH1cbiAgLy8gUmV0dXJuIGJ5dGUgdmFsdWUgaWYgY2hhcmxlbmd0aCBpcyAxXG4gIGlmICgxID09PSBjaGFyTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJ5dGVzW2J5dGVPZmZzZXRdO1xuICB9XG4gIC8vIHZhbGlkYXRlIHRoYXQgdGhlIGFycmF5IGhhcyBlbm91Z2ggYnl0ZXMgdG8gbWFrZSB1cCB0aGlzIGNoYXJhY3RlclxuICBpZiAoYnl0ZXMubGVuZ3RoIC0gYnl0ZU9mZnNldCA8IGNoYXJMZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnRXhwZWN0ZWQgYXQgbGVhc3QgJyArIGNoYXJMZW5ndGggKyAnIGJ5dGVzIHJlbWFpbmluZyBpbiBhcnJheS4nXG4gICAgKTtcbiAgfVxuICAvLyBUZXN0IFVURjggaW50ZWdyaXR5XG4gIG1hc2sgPSAnMDAwMDAwMDAnLnNsaWNlKDAsIGNoYXJMZW5ndGgpICsgMSArICcwMDAwMDAwMCcuc2xpY2UoY2hhckxlbmd0aCArIDEpO1xuICBpZiAoYnl0ZXNbYnl0ZU9mZnNldF0gJiBwYXJzZUludChtYXNrLCAyKSkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgJ0luZGV4ICcgK1xuICAgICAgICBieXRlT2Zmc2V0ICtcbiAgICAgICAgJzogQSAnICtcbiAgICAgICAgY2hhckxlbmd0aCArXG4gICAgICAgICcgYnl0ZXMnICtcbiAgICAgICAgJyBlbmNvZGVkIGNoYXInICtcbiAgICAgICAgJyBjYW5ub3QgZW5jb2RlIHRoZSAnICtcbiAgICAgICAgKGNoYXJMZW5ndGggKyAxKSArXG4gICAgICAgICd0aCByYW5rIGJpdCB0byAxLidcbiAgICApO1xuICB9XG4gIC8vIFJlYWRpbmcgdGhlIGZpcnN0IGJ5dGVcbiAgbWFzayA9ICcwMDAwJy5zbGljZSgwLCBjaGFyTGVuZ3RoICsgMSkgKyAnMTExMTExMTEnLnNsaWNlKGNoYXJMZW5ndGggKyAxKTtcbiAgY2hhckNvZGUgKz0gKGJ5dGVzW2J5dGVPZmZzZXRdICYgcGFyc2VJbnQobWFzaywgMikpIDw8ICgtLWNoYXJMZW5ndGggKiA2KTtcbiAgLy8gUmVhZGluZyB0aGUgbmV4dCBieXRlc1xuICB3aGlsZSAoY2hhckxlbmd0aCkge1xuICAgIGlmIChcbiAgICAgIDB4ODAgIT09IChieXRlc1tieXRlT2Zmc2V0ICsgMV0gJiAweDgwKSB8fFxuICAgICAgMHg0MCA9PT0gKGJ5dGVzW2J5dGVPZmZzZXQgKyAxXSAmIDB4NDApXG4gICAgKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgJ0luZGV4ICcgK1xuICAgICAgICAgIChieXRlT2Zmc2V0ICsgMSkgK1xuICAgICAgICAgICc6IE5leHQgYnl0ZXMgb2YgZW5jb2RlZCBjaGFyJyArXG4gICAgICAgICAgJyBtdXN0IGJlZ2luIHdpdGggYSBcIjEwXCIgYml0IHNlcXVlbmNlLidcbiAgICAgICk7XG4gICAgfVxuICAgIGNoYXJDb2RlICs9IChieXRlc1srK2J5dGVPZmZzZXRdICYgMHgzZikgPDwgKC0tY2hhckxlbmd0aCAqIDYpO1xuICB9XG4gIHJldHVybiBjaGFyQ29kZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUJ5dGVzKGJ5dGVzLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoLCBzdHJpY3QpIHtcbiAgdmFyIGNoYXJMZW5ndGgsXG4gICAgY2hhcnMgPSBbXTtcbiAgYnl0ZU9mZnNldCA9IGJ5dGVPZmZzZXQgfCAwO1xuICBieXRlTGVuZ3RoID1cbiAgICAnbnVtYmVyJyA9PT0gdHlwZW9mIGJ5dGVMZW5ndGhcbiAgICAgID8gYnl0ZUxlbmd0aFxuICAgICAgOiBieXRlcy5ieXRlTGVuZ3RoIHx8IGJ5dGVzLmxlbmd0aDtcbiAgZm9yICg7IGJ5dGVPZmZzZXQgPCBieXRlTGVuZ3RoOyBieXRlT2Zmc2V0KyspIHtcbiAgICBjaGFyTGVuZ3RoID0gZ2V0Q2hhckxlbmd0aChieXRlc1tieXRlT2Zmc2V0XSk7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyBjaGFyTGVuZ3RoID4gYnl0ZUxlbmd0aCkge1xuICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAnSW5kZXggJyArXG4gICAgICAgICAgICBieXRlT2Zmc2V0ICtcbiAgICAgICAgICAgICc6IEZvdW5kIGEgJyArXG4gICAgICAgICAgICBjaGFyTGVuZ3RoICtcbiAgICAgICAgICAgICcgYnl0ZXMgZW5jb2RlZCBjaGFyIGRlY2xhcmF0aW9uIGJ1dCBvbmx5ICcgK1xuICAgICAgICAgICAgKGJ5dGVMZW5ndGggLSBieXRlT2Zmc2V0KSArXG4gICAgICAgICAgICAnIGJ5dGVzIGFyZSBhdmFpbGFibGUuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjaGFycy5wdXNoKFxuICAgICAgICBTdHJpbmcuZnJvbUNvZGVQb2ludChnZXRDaGFyQ29kZShieXRlcywgYnl0ZU9mZnNldCwgY2hhckxlbmd0aCwgc3RyaWN0KSlcbiAgICAgICk7XG4gICAgfVxuICAgIGJ5dGVPZmZzZXQgKz0gY2hhckxlbmd0aCAtIDE7XG4gIH1cbiAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xufVxuXG4vLyBVVEY4IGVuY29kaW5nIGZ1bmN0aW9uc1xuZnVuY3Rpb24gZ2V0Qnl0ZXNGb3JDaGFyQ29kZShjaGFyQ29kZSkge1xuICBpZiAoY2hhckNvZGUgPCAxMjgpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmIChjaGFyQ29kZSA8IDIwNDgpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIGlmIChjaGFyQ29kZSA8IDY1NTM2KSB7XG4gICAgcmV0dXJuIDM7XG4gIH0gZWxzZSBpZiAoY2hhckNvZGUgPCAyMDk3MTUyKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdDaGFyQ29kZSAnICsgY2hhckNvZGUgKyAnIGNhbm5vdCBiZSBlbmNvZGVkIHdpdGggVVRGOC4nKTtcbn1cblxuZnVuY3Rpb24gc2V0Qnl0ZXNGcm9tQ2hhckNvZGUoY2hhckNvZGUsIGJ5dGVzLCBieXRlT2Zmc2V0LCBuZWVkZWRCeXRlcykge1xuICBjaGFyQ29kZSA9IGNoYXJDb2RlIHwgMDtcbiAgYnl0ZXMgPSBieXRlcyB8fCBbXTtcbiAgYnl0ZU9mZnNldCA9IGJ5dGVPZmZzZXQgfCAwO1xuICBuZWVkZWRCeXRlcyA9IG5lZWRlZEJ5dGVzIHx8IGdldEJ5dGVzRm9yQ2hhckNvZGUoY2hhckNvZGUpO1xuICAvLyBTZXR0aW5nIHRoZSBjaGFyQ29kZSBhcyBpdCB0byBieXRlcyBpZiB0aGUgYnl0ZSBsZW5ndGggaXMgMVxuICBpZiAoMSA9PSBuZWVkZWRCeXRlcykge1xuICAgIGJ5dGVzW2J5dGVPZmZzZXRdID0gY2hhckNvZGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ29tcHV0aW5nIHRoZSBmaXJzdCBieXRlXG4gICAgYnl0ZXNbYnl0ZU9mZnNldCsrXSA9XG4gICAgICAocGFyc2VJbnQoJzExMTEnLnNsaWNlKDAsIG5lZWRlZEJ5dGVzKSwgMikgPDwgKDggLSBuZWVkZWRCeXRlcykpICtcbiAgICAgIChjaGFyQ29kZSA+Pj4gKC0tbmVlZGVkQnl0ZXMgKiA2KSk7XG4gICAgLy8gQ29tcHV0aW5nIG5leHQgYnl0ZXNcbiAgICBmb3IgKDsgbmVlZGVkQnl0ZXMgPiAwOyApIHtcbiAgICAgIGJ5dGVzW2J5dGVPZmZzZXQrK10gPSAoKGNoYXJDb2RlID4+PiAoLS1uZWVkZWRCeXRlcyAqIDYpKSAmIDB4M2YpIHwgMHg4MDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5mdW5jdGlvbiBzZXRCeXRlc0Zyb21TdHJpbmcoc3RyaW5nLCBieXRlcywgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCwgc3RyaWN0KSB7XG4gIHN0cmluZyA9IHN0cmluZyB8fCAnJztcbiAgYnl0ZXMgPSBieXRlcyB8fCBbXTtcbiAgYnl0ZU9mZnNldCA9IGJ5dGVPZmZzZXQgfCAwO1xuICBieXRlTGVuZ3RoID1cbiAgICAnbnVtYmVyJyA9PT0gdHlwZW9mIGJ5dGVMZW5ndGggPyBieXRlTGVuZ3RoIDogYnl0ZXMuYnl0ZUxlbmd0aCB8fCBJbmZpbml0eTtcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBzdHJpbmcubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgdmFyIG5lZWRlZEJ5dGVzID0gZ2V0Qnl0ZXNGb3JDaGFyQ29kZShzdHJpbmdbaV0uY29kZVBvaW50QXQoMCkpO1xuICAgIGlmIChzdHJpY3QgJiYgYnl0ZU9mZnNldCArIG5lZWRlZEJ5dGVzID4gYnl0ZUxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTm90IGVub3VnaHQgYnl0ZXMgdG8gZW5jb2RlIHRoZSBjaGFyIFwiJyArXG4gICAgICAgICAgc3RyaW5nW2ldICtcbiAgICAgICAgICAnXCIgYXQgdGhlIG9mZnNldCBcIicgK1xuICAgICAgICAgIGJ5dGVPZmZzZXQgK1xuICAgICAgICAgICdcIi4nXG4gICAgICApO1xuICAgIH1cbiAgICBzZXRCeXRlc0Zyb21DaGFyQ29kZShcbiAgICAgIHN0cmluZ1tpXS5jb2RlUG9pbnRBdCgwKSxcbiAgICAgIGJ5dGVzLFxuICAgICAgYnl0ZU9mZnNldCxcbiAgICAgIG5lZWRlZEJ5dGVzLFxuICAgICAgc3RyaWN0XG4gICAgKTtcbiAgICBieXRlT2Zmc2V0ICs9IG5lZWRlZEJ5dGVzO1xuICB9XG4gIHJldHVybiBieXRlcztcbn1cbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBNSURJRmlsZSA6IFJlYWQgKGFuZCBzb29uIGVkaXQpIGEgTUlESSBmaWxlIGluIGEgZ2l2ZW4gQXJyYXlCdWZmZXJcblxuLy8gRGVwZW5kZW5jaWVzXG52YXIgTUlESUZpbGVIZWFkZXIgPSByZXF1aXJlKCcuL01JRElGaWxlSGVhZGVyJyk7XG52YXIgTUlESUZpbGVUcmFjayA9IHJlcXVpcmUoJy4vTUlESUZpbGVUcmFjaycpO1xudmFyIE1JRElFdmVudHMgPSByZXF1aXJlKCdtaWRpZXZlbnRzJyk7XG52YXIgVVRGOCA9IHJlcXVpcmUoJ3V0Zi04Jyk7XG5cbmZ1bmN0aW9uIGVuc3VyZUFycmF5QnVmZmVyKGJ1Zikge1xuICBpZiAoYnVmKSB7XG4gICAgaWYgKGJ1ZiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICBpZiAoYnVmIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgLy8gQ29weS9jb252ZXJ0IHRvIHN0YW5kYXJkIFVpbnQ4QXJyYXksIGJlY2F1c2UgZGVyaXZlZCBjbGFzc2VzIGxpa2VcbiAgICAgIC8vIG5vZGUuanMgQnVmZmVycyBtaWdodCBoYXZlIHVuZXhwZWN0ZWQgZGF0YSBpbiB0aGUgLmJ1ZmZlciBwcm9wZXJ0eS5cbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWYpLmJ1ZmZlcjtcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBidWZmZXIgdHlwZSwgbmVlZCBBcnJheUJ1ZmZlciBvciBVaW50OEFycmF5Jyk7XG59XG5cbi8vIENvbnN0cnVjdG9yXG5mdW5jdGlvbiBNSURJRmlsZShidWZmZXIsIHN0cmljdE1vZGUpIHtcbiAgdmFyIHRyYWNrO1xuICB2YXIgY3VySW5kZXg7XG4gIHZhciBpO1xuICB2YXIgajtcblxuICAvLyBJZiBub3QgYnVmZmVyIGdpdmVuLCBjcmVhdGluZyBhIG5ldyBNSURJIGZpbGVcbiAgaWYgKCFidWZmZXIpIHtcbiAgICAvLyBDcmVhdGluZyB0aGUgY29udGVudFxuICAgIHRoaXMuaGVhZGVyID0gbmV3IE1JRElGaWxlSGVhZGVyKCk7XG4gICAgdGhpcy50cmFja3MgPSBbbmV3IE1JRElGaWxlVHJhY2soKV07XG4gICAgLy8gaWYgYSBidWZmZXIgaXMgcHJvdmlkZWQsIHBhcnNpbmcgaGltXG4gIH0gZWxzZSB7XG4gICAgYnVmZmVyID0gZW5zdXJlQXJyYXlCdWZmZXIoYnVmZmVyKTtcbiAgICAvLyBNaW5pbXVtIE1JREkgZmlsZSBzaXplIGlzIGEgaGVhZGVyQ2h1bmsgc2l6ZSAoMTRieXRlcylcbiAgICAvLyBhbmQgYW4gZW1wdHkgdHJhY2sgKDgrM2J5dGVzKVxuICAgIGlmICgyNSA+IGJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdBIGJ1ZmZlciBvZiBhIHZhbGlkIE1JREkgZmlsZSBtdXN0IGhhdmUsIGF0IGxlYXN0LCBhJyArXG4gICAgICAgICAgJyBzaXplIG9mIDI1Ynl0ZXMuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgLy8gUmVhZGluZyBoZWFkZXJcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBNSURJRmlsZUhlYWRlcihidWZmZXIsIHN0cmljdE1vZGUpO1xuICAgIHRoaXMudHJhY2tzID0gW107XG4gICAgY3VySW5kZXggPSBNSURJRmlsZUhlYWRlci5IRUFERVJfTEVOR1RIO1xuICAgIC8vIFJlYWRpbmcgdHJhY2tzXG4gICAgZm9yIChpID0gMCwgaiA9IHRoaXMuaGVhZGVyLmdldFRyYWNrc0NvdW50KCk7IGkgPCBqOyBpKyspIHtcbiAgICAgIC8vIFRlc3RpbmcgdGhlIGJ1ZmZlciBsZW5ndGhcbiAgICAgIGlmIChzdHJpY3RNb2RlICYmIGN1ckluZGV4ID49IGJ1ZmZlci5ieXRlTGVuZ3RoIC0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGRhdGFzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHRyYWNrICNcIiArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIENyZWF0aW5nIHRoZSB0cmFjayBvYmplY3RcbiAgICAgIHRyYWNrID0gbmV3IE1JRElGaWxlVHJhY2soYnVmZmVyLCBjdXJJbmRleCwgc3RyaWN0TW9kZSk7XG4gICAgICB0aGlzLnRyYWNrcy5wdXNoKHRyYWNrKTtcbiAgICAgIC8vIFVwZGF0aW5nIGluZGV4IHRvIHRoZSB0cmFjayBlbmRcbiAgICAgIGN1ckluZGV4ICs9IHRyYWNrLmdldFRyYWNrTGVuZ3RoKCkgKyA4O1xuICAgIH1cbiAgICAvLyBUZXN0aW5nIGludGVncml0eSA6IGN1ckluZGV4IHNob3VsZCBiZSBhdCB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgICBpZiAoc3RyaWN0TW9kZSAmJiBjdXJJbmRleCAhPT0gYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSXQgc2VlbXMgdGhhdCB0aGUgYnVmZmVyIGNvbnRhaW5zIHRvbyBtdWNoIGRhdGFzLicpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFdmVudHMgcmVhZGluZyBoZWxwZXJzXG5NSURJRmlsZS5wcm90b3R5cGUuZ2V0RXZlbnRzID0gZnVuY3Rpb24odHlwZSwgc3VidHlwZSkge1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXZlbnQ7XG4gIHZhciBwbGF5VGltZSA9IDA7XG4gIHZhciBmaWx0ZXJlZEV2ZW50cyA9IFtdO1xuICB2YXIgZm9ybWF0ID0gdGhpcy5oZWFkZXIuZ2V0Rm9ybWF0KCk7XG4gIHZhciB0aWNrUmVzb2x1dGlvbiA9IHRoaXMuaGVhZGVyLmdldFRpY2tSZXNvbHV0aW9uKCk7XG4gIHZhciBpO1xuICB2YXIgajtcbiAgdmFyIHRyYWNrUGFyc2VycztcbiAgdmFyIHNtYWxsZXN0RGVsdGE7XG5cbiAgLy8gUmVhZGluZyBldmVudHNcbiAgLy8gaWYgdGhlIHJlYWQgaXMgc2VxdWVudGlhbFxuICBpZiAoMSAhPT0gZm9ybWF0IHx8IDEgPT09IHRoaXMudHJhY2tzLmxlbmd0aCkge1xuICAgIGZvciAoaSA9IDAsIGogPSB0aGlzLnRyYWNrcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIC8vIHJlc2V0IHBsYXl0aW1lIGlmIGZvcm1hdCBpcyAyXG4gICAgICBwbGF5VGltZSA9IDIgPT09IGZvcm1hdCAmJiBwbGF5VGltZSA/IHBsYXlUaW1lIDogMDtcbiAgICAgIGV2ZW50cyA9IE1JRElFdmVudHMuY3JlYXRlUGFyc2VyKFxuICAgICAgICB0aGlzLnRyYWNrc1tpXS5nZXRUcmFja0NvbnRlbnQoKSxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICAvLyBsb29vcGluZyB0aHJvdWdoIGV2ZW50c1xuICAgICAgZXZlbnQgPSBldmVudHMubmV4dCgpO1xuICAgICAgd2hpbGUgKGV2ZW50KSB7XG4gICAgICAgIHBsYXlUaW1lICs9IGV2ZW50LmRlbHRhID8gZXZlbnQuZGVsdGEgKiB0aWNrUmVzb2x1dGlvbiAvIDEwMDAgOiAwO1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gTUlESUV2ZW50cy5FVkVOVF9NRVRBKSB7XG4gICAgICAgICAgLy8gdGVtcG8gY2hhbmdlIGV2ZW50c1xuICAgICAgICAgIGlmIChldmVudC5zdWJ0eXBlID09PSBNSURJRXZlbnRzLkVWRU5UX01FVEFfU0VUX1RFTVBPKSB7XG4gICAgICAgICAgICB0aWNrUmVzb2x1dGlvbiA9IHRoaXMuaGVhZGVyLmdldFRpY2tSZXNvbHV0aW9uKGV2ZW50LnRlbXBvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHVzaCB0aGUgYXNrZWQgZXZlbnRzXG4gICAgICAgIGlmIChcbiAgICAgICAgICAoIXR5cGUgfHwgZXZlbnQudHlwZSA9PT0gdHlwZSkgJiZcbiAgICAgICAgICAoIXN1YnR5cGUgfHwgKGV2ZW50LnN1YnR5cGUgJiYgZXZlbnQuc3VidHlwZSA9PT0gc3VidHlwZSkpXG4gICAgICAgICkge1xuICAgICAgICAgIGV2ZW50LnBsYXlUaW1lID0gcGxheVRpbWU7XG4gICAgICAgICAgZmlsdGVyZWRFdmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQgPSBldmVudHMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGUgcmVhZCBpcyBjb25jdXJyZW50XG4gIH0gZWxzZSB7XG4gICAgdHJhY2tQYXJzZXJzID0gW107XG4gICAgc21hbGxlc3REZWx0YSA9IC0xO1xuXG4gICAgLy8gQ3JlYXRpbmcgcGFyc2Vyc1xuICAgIGZvciAoaSA9IDAsIGogPSB0aGlzLnRyYWNrcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIHRyYWNrUGFyc2Vyc1tpXSA9IHt9O1xuICAgICAgdHJhY2tQYXJzZXJzW2ldLnBhcnNlciA9IE1JRElFdmVudHMuY3JlYXRlUGFyc2VyKFxuICAgICAgICB0aGlzLnRyYWNrc1tpXS5nZXRUcmFja0NvbnRlbnQoKSxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICB0cmFja1BhcnNlcnNbaV0uY3VyRXZlbnQgPSB0cmFja1BhcnNlcnNbaV0ucGFyc2VyLm5leHQoKTtcbiAgICB9XG4gICAgLy8gRmlsbGluZyBldmVudHNcbiAgICBkbyB7XG4gICAgICBzbWFsbGVzdERlbHRhID0gLTE7XG4gICAgICAvLyBmaW5kaW5nIHRoZSBzbWFsbGVzdCBldmVudFxuICAgICAgZm9yIChpID0gMCwgaiA9IHRyYWNrUGFyc2Vycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgaWYgKHRyYWNrUGFyc2Vyc1tpXS5jdXJFdmVudCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIC0xID09PSBzbWFsbGVzdERlbHRhIHx8XG4gICAgICAgICAgICB0cmFja1BhcnNlcnNbaV0uY3VyRXZlbnQuZGVsdGEgPFxuICAgICAgICAgICAgICB0cmFja1BhcnNlcnNbc21hbGxlc3REZWx0YV0uY3VyRXZlbnQuZGVsdGFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHNtYWxsZXN0RGVsdGEgPSBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKC0xICE9PSBzbWFsbGVzdERlbHRhKSB7XG4gICAgICAgIC8vIHJlbW92aW5nIHRoZSBkZWx0YSBvZiBwcmV2aW91cyBldmVudHNcbiAgICAgICAgZm9yIChpID0gMCwgaiA9IHRyYWNrUGFyc2Vycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSAhPT0gc21hbGxlc3REZWx0YSAmJiB0cmFja1BhcnNlcnNbaV0uY3VyRXZlbnQpIHtcbiAgICAgICAgICAgIHRyYWNrUGFyc2Vyc1tpXS5jdXJFdmVudC5kZWx0YSAtPVxuICAgICAgICAgICAgICB0cmFja1BhcnNlcnNbc21hbGxlc3REZWx0YV0uY3VyRXZlbnQuZGVsdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGZpbGxpbmcgdmFsdWVzXG4gICAgICAgIGV2ZW50ID0gdHJhY2tQYXJzZXJzW3NtYWxsZXN0RGVsdGFdLmN1ckV2ZW50O1xuICAgICAgICBwbGF5VGltZSArPSBldmVudC5kZWx0YSA/IGV2ZW50LmRlbHRhICogdGlja1Jlc29sdXRpb24gLyAxMDAwIDogMDtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IE1JRElFdmVudHMuRVZFTlRfTUVUQSkge1xuICAgICAgICAgIC8vIHRlbXBvIGNoYW5nZSBldmVudHNcbiAgICAgICAgICBpZiAoZXZlbnQuc3VidHlwZSA9PT0gTUlESUV2ZW50cy5FVkVOVF9NRVRBX1NFVF9URU1QTykge1xuICAgICAgICAgICAgdGlja1Jlc29sdXRpb24gPSB0aGlzLmhlYWRlci5nZXRUaWNrUmVzb2x1dGlvbihldmVudC50ZW1wbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHB1c2ggbWlkaSBldmVudHNcbiAgICAgICAgaWYgKFxuICAgICAgICAgICghdHlwZSB8fCBldmVudC50eXBlID09PSB0eXBlKSAmJlxuICAgICAgICAgICghc3VidHlwZSB8fCAoZXZlbnQuc3VidHlwZSAmJiBldmVudC5zdWJ0eXBlID09PSBzdWJ0eXBlKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXZlbnQucGxheVRpbWUgPSBwbGF5VGltZTtcbiAgICAgICAgICBldmVudC50cmFjayA9IHNtYWxsZXN0RGVsdGE7XG4gICAgICAgICAgZmlsdGVyZWRFdmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0dGluZyBuZXh0IGV2ZW50XG4gICAgICAgIHRyYWNrUGFyc2Vyc1tzbWFsbGVzdERlbHRhXS5jdXJFdmVudCA9IHRyYWNrUGFyc2Vyc1tcbiAgICAgICAgICBzbWFsbGVzdERlbHRhXG4gICAgICAgIF0ucGFyc2VyLm5leHQoKTtcbiAgICAgIH1cbiAgICB9IHdoaWxlICgtMSAhPT0gc21hbGxlc3REZWx0YSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkRXZlbnRzO1xufTtcblxuTUlESUZpbGUucHJvdG90eXBlLmdldE1pZGlFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0RXZlbnRzKE1JRElFdmVudHMuRVZFTlRfTUlESSk7XG59O1xuXG5NSURJRmlsZS5wcm90b3R5cGUuZ2V0THlyaWNzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLmdldEV2ZW50cyhNSURJRXZlbnRzLkVWRU5UX01FVEEpO1xuICB2YXIgdGV4dHMgPSBbXTtcbiAgdmFyIGx5cmljcyA9IFtdO1xuICB2YXIgZXZlbnQ7XG4gIHZhciBpO1xuICB2YXIgajtcblxuICBmb3IgKGkgPSAwLCBqID0gZXZlbnRzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgIGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgIC8vIEx5cmljc1xuICAgIGlmIChldmVudC5zdWJ0eXBlID09PSBNSURJRXZlbnRzLkVWRU5UX01FVEFfTFlSSUNTKSB7XG4gICAgICBseXJpY3MucHVzaChldmVudCk7XG4gICAgICAvLyBUZXh0c1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuc3VidHlwZSA9PT0gTUlESUV2ZW50cy5FVkVOVF9NRVRBX1RFWFQpIHtcbiAgICAgIC8vIElnbm9yZSBzcGVjaWFsIHRleHRzXG4gICAgICBpZiAoJ0AnID09PSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmRhdGFbMF0pKSB7XG4gICAgICAgIGlmICgnVCcgPT09IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQuZGF0YVsxXSkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVGl0bGUgOiAnICsgZXZlbnQudGV4dC5zdWJzdHJpbmcoMikpO1xuICAgICAgICB9IGVsc2UgaWYgKCdJJyA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5kYXRhWzFdKSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdJbmZvIDogJyArIGV2ZW50LnRleHQuc3Vic3RyaW5nKDIpKTtcbiAgICAgICAgfSBlbHNlIGlmICgnTCcgPT09IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQuZGF0YVsxXSkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTGFuZyA6ICcgKyBldmVudC50ZXh0LnN1YnN0cmluZygyKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8ga2FyYW9rZSB0ZXh0IGZvbGxvd3MsIHJlbW92ZSBhbGwgcHJldmlvdXMgdGV4dFxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgMCA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGV2ZW50LmRhdGEpLmluZGV4T2YoJ3dvcmRzJylcbiAgICAgICkge1xuICAgICAgICB0ZXh0cy5sZW5ndGggPSAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnV29yZCBtYXJrZXIgZm91bmQnKTtcbiAgICAgICAgLy8gS2FyYW9rZSB0ZXh0c1xuICAgICAgICAvLyBJZiBwbGF5dGltZSBpcyBncmVhdGVyIHRoYW4gMFxuICAgICAgfSBlbHNlIGlmICgwICE9PSBldmVudC5wbGF5VGltZSkge1xuICAgICAgICB0ZXh0cy5wdXNoKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gQ2hvb3NpbmcgdGhlIHJpZ2h0IGx5cmljc1xuICBpZiAoMiA8IGx5cmljcy5sZW5ndGgpIHtcbiAgICB0ZXh0cyA9IGx5cmljcztcbiAgfSBlbHNlIGlmICghdGV4dHMubGVuZ3RoKSB7XG4gICAgdGV4dHMgPSBbXTtcbiAgfVxuICAvLyBDb252ZXJ0IHRleHRzIGFuZCBkZXRlY3QgZW5jb2RpbmdcbiAgdHJ5IHtcbiAgICB0ZXh0cy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC50ZXh0ID0gVVRGOC5nZXRTdHJpbmdGcm9tQnl0ZXMoZXZlbnQuZGF0YSwgMCwgZXZlbnQubGVuZ3RoLCB0cnVlKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRleHRzLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnRleHQgPSBldmVudC5kYXRhXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRleHRzO1xufTtcblxuLy8gQmFzaWMgZXZlbnRzIHJlYWRpbmdcbk1JRElGaWxlLnByb3RvdHlwZS5nZXRUcmFja0V2ZW50cyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIHZhciBldmVudDtcbiAgdmFyIGV2ZW50cyA9IFtdO1xuICB2YXIgcGFyc2VyO1xuICBpZiAoaW5kZXggPiB0aGlzLnRyYWNrcy5sZW5ndGggfHwgMCA+IGluZGV4KSB7XG4gICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgdHJhY2sgaW5kZXggKCcgKyBpbmRleCArICcpJyk7XG4gIH1cbiAgcGFyc2VyID0gTUlESUV2ZW50cy5jcmVhdGVQYXJzZXIoXG4gICAgdGhpcy50cmFja3NbaW5kZXhdLmdldFRyYWNrQ29udGVudCgpLFxuICAgIDAsXG4gICAgZmFsc2VcbiAgKTtcbiAgZXZlbnQgPSBwYXJzZXIubmV4dCgpO1xuICBkbyB7XG4gICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgIGV2ZW50ID0gcGFyc2VyLm5leHQoKTtcbiAgfSB3aGlsZSAoZXZlbnQpO1xuICByZXR1cm4gZXZlbnRzO1xufTtcblxuLy8gQmFzaWMgZXZlbnRzIHdyaXR0aW5nXG5NSURJRmlsZS5wcm90b3R5cGUuc2V0VHJhY2tFdmVudHMgPSBmdW5jdGlvbihpbmRleCwgZXZlbnRzKSB7XG4gIHZhciBidWZmZXJMZW5ndGg7XG4gIHZhciBkZXN0aW5hdGlvbjtcblxuICBpZiAoaW5kZXggPiB0aGlzLnRyYWNrcy5sZW5ndGggfHwgMCA+IGluZGV4KSB7XG4gICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgdHJhY2sgaW5kZXggKCcgKyBpbmRleCArICcpJyk7XG4gIH1cbiAgaWYgKCFldmVudHMgfHwgIWV2ZW50cy5sZW5ndGgpIHtcbiAgICB0aHJvdyBFcnJvcignQSB0cmFjayBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGV2ZW50LCBub25lIGdpdmVuLicpO1xuICB9XG4gIGJ1ZmZlckxlbmd0aCA9IE1JRElFdmVudHMuZ2V0UmVxdWlyZWRCdWZmZXJMZW5ndGgoZXZlbnRzKTtcbiAgZGVzdGluYXRpb24gPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuICBNSURJRXZlbnRzLndyaXRlVG9UcmFjayhldmVudHMsIGRlc3RpbmF0aW9uKTtcbiAgdGhpcy50cmFja3NbaW5kZXhdLnNldFRyYWNrQ29udGVudChkZXN0aW5hdGlvbik7XG59O1xuXG4vLyBSZW1vdmUgYSB0cmFja1xuTUlESUZpbGUucHJvdG90eXBlLmRlbGV0ZVRyYWNrID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgaWYgKGluZGV4ID4gdGhpcy50cmFja3MubGVuZ3RoIHx8IDAgPiBpbmRleCkge1xuICAgIHRocm93IEVycm9yKCdJbnZhbGlkIHRyYWNrIGluZGV4ICgnICsgaW5kZXggKyAnKScpO1xuICB9XG4gIHRoaXMudHJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gIHRoaXMuaGVhZGVyLnNldFRyYWNrc0NvdW50KHRoaXMudHJhY2tzLmxlbmd0aCk7XG59O1xuXG4vLyBBZGQgYSB0cmFja1xuTUlESUZpbGUucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgdmFyIHRyYWNrO1xuXG4gIGlmIChpbmRleCA+IHRoaXMudHJhY2tzLmxlbmd0aCB8fCAwID4gaW5kZXgpIHtcbiAgICB0aHJvdyBFcnJvcignSW52YWxpZCB0cmFjayBpbmRleCAoJyArIGluZGV4ICsgJyknKTtcbiAgfVxuICB0cmFjayA9IG5ldyBNSURJRmlsZVRyYWNrKCk7XG4gIGlmIChpbmRleCA9PT0gdGhpcy50cmFja3MubGVuZ3RoKSB7XG4gICAgdGhpcy50cmFja3MucHVzaCh0cmFjayk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy50cmFja3Muc3BsaWNlKGluZGV4LCAwLCB0cmFjayk7XG4gIH1cbiAgdGhpcy5oZWFkZXIuc2V0VHJhY2tzQ291bnQodGhpcy50cmFja3MubGVuZ3RoKTtcbn07XG5cbi8vIFJldHJpZXZlIHRoZSBjb250ZW50IGluIGEgYnVmZmVyXG5NSURJRmlsZS5wcm90b3R5cGUuZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYnVmZmVyTGVuZ3RoO1xuICB2YXIgZGVzdGluYXRpb247XG4gIHZhciBvcmlnaW47XG4gIHZhciBpO1xuICB2YXIgajtcbiAgdmFyIGs7XG4gIHZhciBsO1xuICB2YXIgbTtcbiAgdmFyIG47XG5cbiAgLy8gQ2FsY3VsYXRpbmcgdGhlIGJ1ZmZlciBjb250ZW50XG4gIC8vIC0gaW5pdGlhbGl6ZSB3aXRoIHRoZSBoZWFkZXIgbGVuZ3RoXG4gIGJ1ZmZlckxlbmd0aCA9IE1JRElGaWxlSGVhZGVyLkhFQURFUl9MRU5HVEg7XG4gIC8vIC0gYWRkIHRyYWNrcyBsZW5ndGhcbiAgZm9yIChpID0gMCwgaiA9IHRoaXMudHJhY2tzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZmZlckxlbmd0aCArPSB0aGlzLnRyYWNrc1tpXS5nZXRUcmFja0xlbmd0aCgpICsgODtcbiAgfVxuICAvLyBDcmVhdGluZyB0aGUgZGVzdGluYXRpb24gYnVmZmVyXG4gIGRlc3RpbmF0aW9uID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgLy8gQWRkaW5nIGhlYWRlclxuICBvcmlnaW4gPSBuZXcgVWludDhBcnJheShcbiAgICB0aGlzLmhlYWRlci5kYXRhcy5idWZmZXIsXG4gICAgdGhpcy5oZWFkZXIuZGF0YXMuYnl0ZU9mZnNldCxcbiAgICBNSURJRmlsZUhlYWRlci5IRUFERVJfTEVOR1RIXG4gICk7XG4gIGZvciAoaSA9IDAsIGogPSBNSURJRmlsZUhlYWRlci5IRUFERVJfTEVOR1RIOyBpIDwgajsgaSsrKSB7XG4gICAgZGVzdGluYXRpb25baV0gPSBvcmlnaW5baV07XG4gIH1cbiAgLy8gQWRkaW5nIHRyYWNrc1xuICBmb3IgKGsgPSAwLCBsID0gdGhpcy50cmFja3MubGVuZ3RoOyBrIDwgbDsgaysrKSB7XG4gICAgb3JpZ2luID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICB0aGlzLnRyYWNrc1trXS5kYXRhcy5idWZmZXIsXG4gICAgICB0aGlzLnRyYWNrc1trXS5kYXRhcy5ieXRlT2Zmc2V0LFxuICAgICAgdGhpcy50cmFja3Nba10uZGF0YXMuYnl0ZUxlbmd0aFxuICAgICk7XG4gICAgZm9yIChtID0gMCwgbiA9IHRoaXMudHJhY2tzW2tdLmRhdGFzLmJ5dGVMZW5ndGg7IG0gPCBuOyBtKyspIHtcbiAgICAgIGRlc3RpbmF0aW9uW2krK10gPSBvcmlnaW5bbV07XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbi5idWZmZXI7XG59O1xuXG4vLyBFeHBvcnRzIFRyYWNrL0hlYWRlciBjb25zdHJ1Y3RvcnNcbk1JRElGaWxlLkhlYWRlciA9IE1JRElGaWxlSGVhZGVyO1xuTUlESUZpbGUuVHJhY2sgPSBNSURJRmlsZVRyYWNrO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1JRElGaWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBNSURJRmlsZUhlYWRlciA6IFJlYWQgYW5kIGVkaXQgYSBNSURJIGhlYWRlciBjaHVuayBpbiBhIGdpdmVuIEFycmF5QnVmZmVyXG5mdW5jdGlvbiBNSURJRmlsZUhlYWRlcihidWZmZXIpIHtcbiAgbGV0IGE7XG4gIC8vIE5vIGJ1ZmZlciBjcmVhdGluZyBoaW1cbiAgaWYgKCFidWZmZXIpIHtcbiAgICBhID0gbmV3IFVpbnQ4QXJyYXkoTUlESUZpbGVIZWFkZXIuSEVBREVSX0xFTkdUSCk7XG4gICAgLy8gQWRkaW5nIHRoZSBoZWFkZXIgaWQgKE1UaGQpXG4gICAgYVswXSA9IDB4NGQ7XG4gICAgYVsxXSA9IDB4NTQ7XG4gICAgYVsyXSA9IDB4Njg7XG4gICAgYVszXSA9IDB4NjQ7XG4gICAgLy8gQWRkaW5nIHRoZSBoZWFkZXIgY2h1bmsgc2l6ZVxuICAgIGFbNF0gPSAweDAwO1xuICAgIGFbNV0gPSAweDAwO1xuICAgIGFbNl0gPSAweDAwO1xuICAgIGFbN10gPSAweDA2O1xuICAgIC8vIEFkZGluZyB0aGUgZmlsZSBmb3JtYXQgKDEgaGVyZSBjYXVzZSBpdCdzIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQpXG4gICAgYVs4XSA9IDB4MDA7XG4gICAgYVs5XSA9IDB4MDE7XG4gICAgLy8gQWRkaW5nIHRoZSB0cmFjayBjb3VudCAoMSBjYXVzZSBpdCdzIGEgbmV3IGZpbGUpXG4gICAgYVsxMF0gPSAweDAwO1xuICAgIGFbMTFdID0gMHgwMTtcbiAgICAvLyBBZGRpbmcgdGhlIHRpbWUgZGl2aXNpb24gKDE5MiB0aWNrcyBwZXIgYmVhdClcbiAgICBhWzEyXSA9IDB4MDA7XG4gICAgYVsxM10gPSAweGMwO1xuICAgIC8vIHNhdmluZyB0aGUgYnVmZmVyXG4gICAgdGhpcy5kYXRhcyA9IG5ldyBEYXRhVmlldyhhLmJ1ZmZlciwgMCwgTUlESUZpbGVIZWFkZXIuSEVBREVSX0xFTkdUSCk7XG4gICAgLy8gUGFyc2luZyB0aGUgZ2l2ZW4gYnVmZmVyXG4gIH0gZWxzZSB7XG4gICAgaWYgKCEoYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBidWZmZXIgcmVjZWl2ZWQuJyk7XG4gICAgfVxuICAgIHRoaXMuZGF0YXMgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCAwLCBNSURJRmlsZUhlYWRlci5IRUFERVJfTEVOR1RIKTtcbiAgICAvLyBSZWFkaW5nIE1JREkgaGVhZGVyIGNodW5rXG4gICAgaWYgKFxuICAgICAgIShcbiAgICAgICAgJ00nID09PSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuZGF0YXMuZ2V0VWludDgoMCkpICYmXG4gICAgICAgICdUJyA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmRhdGFzLmdldFVpbnQ4KDEpKSAmJlxuICAgICAgICAnaCcgPT09IFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5kYXRhcy5nZXRVaW50OCgyKSkgJiZcbiAgICAgICAgJ2QnID09PSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuZGF0YXMuZ2V0VWludDgoMykpXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgTUlESUZpbGVIZWFkZXIgOiBNVGhkIHByZWZpeCBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgLy8gUmVhZGluZyBjaHVuayBsZW5ndGhcbiAgICBpZiAoNiAhPT0gdGhpcy5kYXRhcy5nZXRVaW50MzIoNCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBNSURJRmlsZUhlYWRlciA6IENodW5rIGxlbmd0aCBtdXN0IGJlIDYnKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gU3RhdGljIGNvbnN0YW50c1xuTUlESUZpbGVIZWFkZXIuSEVBREVSX0xFTkdUSCA9IDE0O1xuTUlESUZpbGVIZWFkZXIuRlJBTUVTX1BFUl9TRUNPTkRTID0gMTtcbk1JRElGaWxlSGVhZGVyLlRJQ0tTX1BFUl9CRUFUID0gMjtcblxuLy8gTUlESSBmaWxlIGZvcm1hdFxuTUlESUZpbGVIZWFkZXIucHJvdG90eXBlLmdldEZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBmb3JtYXQgPSB0aGlzLmRhdGFzLmdldFVpbnQxNig4KTtcbiAgaWYgKDAgIT09IGZvcm1hdCAmJiAxICE9PSBmb3JtYXQgJiYgMiAhPT0gZm9ybWF0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0ludmFsaWQgTUlESSBmaWxlIDogTUlESSBmb3JtYXQgKCcgK1xuICAgICAgICBmb3JtYXQgK1xuICAgICAgICAnKSwnICtcbiAgICAgICAgJyBmb3JtYXQgY2FuIGJlIDAsIDEgb3IgMiBvbmx5LidcbiAgICApO1xuICB9XG4gIHJldHVybiBmb3JtYXQ7XG59O1xuXG5NSURJRmlsZUhlYWRlci5wcm90b3R5cGUuc2V0Rm9ybWF0ID0gZnVuY3Rpb24oZm9ybWF0KSB7XG4gIGlmICgwICE9PSBmb3JtYXQgJiYgMSAhPT0gZm9ybWF0ICYmIDIgIT09IGZvcm1hdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdJbnZhbGlkIE1JREkgZm9ybWF0IGdpdmVuICgnICtcbiAgICAgICAgZm9ybWF0ICtcbiAgICAgICAgJyksJyArXG4gICAgICAgICcgZm9ybWF0IGNhbiBiZSAwLCAxIG9yIDIgb25seS4nXG4gICAgKTtcbiAgfVxuICB0aGlzLmRhdGFzLnNldFVpbnQxNig4LCBmb3JtYXQpO1xufTtcblxuLy8gTnVtYmVyIG9mIHRyYWNrc1xuTUlESUZpbGVIZWFkZXIucHJvdG90eXBlLmdldFRyYWNrc0NvdW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmRhdGFzLmdldFVpbnQxNigxMCk7XG59O1xuXG5NSURJRmlsZUhlYWRlci5wcm90b3R5cGUuc2V0VHJhY2tzQ291bnQgPSBmdW5jdGlvbihuKSB7XG4gIHJldHVybiB0aGlzLmRhdGFzLnNldFVpbnQxNigxMCwgbik7XG59O1xuXG4vLyBUaWNrIGNvbXB1dGVcbk1JRElGaWxlSGVhZGVyLnByb3RvdHlwZS5nZXRUaWNrUmVzb2x1dGlvbiA9IGZ1bmN0aW9uKHRlbXBvKSB7XG4gIC8vIEZyYW1lcyBwZXIgc2Vjb25kc1xuICBpZiAodGhpcy5kYXRhcy5nZXRVaW50MTYoMTIpICYgMHg4MDAwKSB7XG4gICAgcmV0dXJuIDEwMDAwMDAgLyAodGhpcy5nZXRTTVBURUZyYW1lcygpICogdGhpcy5nZXRUaWNrc1BlckZyYW1lKCkpO1xuICAgIC8vIFRpY2tzIHBlciBiZWF0XG4gIH1cbiAgLy8gRGVmYXVsdCBNSURJIHRlbXBvIGlzIDEyMGJwbSwgNTAwbXMgcGVyIGJlYXRcbiAgdGVtcG8gPSB0ZW1wbyB8fCA1MDAwMDA7XG4gIHJldHVybiB0ZW1wbyAvIHRoaXMuZ2V0VGlja3NQZXJCZWF0KCk7XG59O1xuXG4vLyBUaW1lIGRpdmlzaW9uIHR5cGVcbk1JRElGaWxlSGVhZGVyLnByb3RvdHlwZS5nZXRUaW1lRGl2aXNpb24gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuZGF0YXMuZ2V0VWludDE2KDEyKSAmIDB4ODAwMCkge1xuICAgIHJldHVybiBNSURJRmlsZUhlYWRlci5GUkFNRVNfUEVSX1NFQ09ORFM7XG4gIH1cbiAgcmV0dXJuIE1JRElGaWxlSGVhZGVyLlRJQ0tTX1BFUl9CRUFUO1xufTtcblxuLy8gVGlja3MgcGVyIGJlYXRcbk1JRElGaWxlSGVhZGVyLnByb3RvdHlwZS5nZXRUaWNrc1BlckJlYXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGRpdmlzaW9uV29yZCA9IHRoaXMuZGF0YXMuZ2V0VWludDE2KDEyKTtcbiAgaWYgKGRpdmlzaW9uV29yZCAmIDB4ODAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGltZSBkaXZpc2lvbiBpcyBub3QgZXhwcmVzc2VkIGFzIHRpY2tzIHBlciBiZWF0LicpO1xuICB9XG4gIHJldHVybiBkaXZpc2lvbldvcmQ7XG59O1xuXG5NSURJRmlsZUhlYWRlci5wcm90b3R5cGUuc2V0VGlja3NQZXJCZWF0ID0gZnVuY3Rpb24odGlja3NQZXJCZWF0KSB7XG4gIHRoaXMuZGF0YXMuc2V0VWludDE2KDEyLCB0aWNrc1BlckJlYXQgJiAweDdmZmYpO1xufTtcblxuLy8gRnJhbWVzIHBlciBzZWNvbmRzXG5NSURJRmlsZUhlYWRlci5wcm90b3R5cGUuZ2V0U01QVEVGcmFtZXMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZGl2aXNpb25Xb3JkID0gdGhpcy5kYXRhcy5nZXRVaW50MTYoMTIpO1xuICBsZXQgc21wdGVGcmFtZXM7XG5cbiAgaWYgKCEoZGl2aXNpb25Xb3JkICYgMHg4MDAwKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGltZSBkaXZpc2lvbiBpcyBub3QgZXhwcmVzc2VkIGFzIGZyYW1lcyBwZXIgc2Vjb25kcy4nKTtcbiAgfVxuICBzbXB0ZUZyYW1lcyA9IGRpdmlzaW9uV29yZCAmIDB4N2YwMDtcbiAgaWYgKC0xID09PSBbMjQsIDI1LCAyOSwgMzBdLmluZGV4T2Yoc21wdGVGcmFtZXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFNNUFRFIGZyYW1lcyB2YWx1ZSAoJyArIHNtcHRlRnJhbWVzICsgJykuJyk7XG4gIH1cbiAgcmV0dXJuIDI5ID09PSBzbXB0ZUZyYW1lcyA/IDI5Ljk3IDogc21wdGVGcmFtZXM7XG59O1xuXG5NSURJRmlsZUhlYWRlci5wcm90b3R5cGUuZ2V0VGlja3NQZXJGcmFtZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaXZpc2lvbldvcmQgPSB0aGlzLmRhdGFzLmdldFVpbnQxNigxMik7XG5cbiAgaWYgKCEoZGl2aXNpb25Xb3JkICYgMHg4MDAwKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGltZSBkaXZpc2lvbiBpcyBub3QgZXhwcmVzc2VkIGFzIGZyYW1lcyBwZXIgc2Vjb25kcy4nKTtcbiAgfVxuICByZXR1cm4gZGl2aXNpb25Xb3JkICYgMHgwMGZmO1xufTtcblxuTUlESUZpbGVIZWFkZXIucHJvdG90eXBlLnNldFNNVFBFRGl2aXNpb24gPSBmdW5jdGlvbihcbiAgc21wdGVGcmFtZXMsXG4gIHRpY2tzUGVyRnJhbWVcbikge1xuICBpZiAoMjkuOTcgPT09IHNtcHRlRnJhbWVzKSB7XG4gICAgc21wdGVGcmFtZXMgPSAyOTtcbiAgfVxuICBpZiAoLTEgPT09IFsyNCwgMjUsIDI5LCAzMF0uaW5kZXhPZihzbXB0ZUZyYW1lcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgU01QVEUgZnJhbWVzIHZhbHVlIGdpdmVuICgnICsgc21wdGVGcmFtZXMgKyAnKS4nKTtcbiAgfVxuICBpZiAoMCA+IHRpY2tzUGVyRnJhbWUgfHwgMHhmZiA8IHRpY2tzUGVyRnJhbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnSW52YWxpZCB0aWNrcyBwZXIgZnJhbWUgdmFsdWUgZ2l2ZW4gKCcgKyBzbXB0ZUZyYW1lcyArICcpLidcbiAgICApO1xuICB9XG4gIHRoaXMuZGF0YXMuc2V0VWludDgoMTIsIDB4ODAgfCBzbXB0ZUZyYW1lcyk7XG4gIHRoaXMuZGF0YXMuc2V0VWludDgoMTMsIHRpY2tzUGVyRnJhbWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNSURJRmlsZUhlYWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gTUlESUZpbGVUcmFjayA6IFJlYWQgYW5kIGVkaXQgYSBNSURJIHRyYWNrIGNodW5rIGluIGEgZ2l2ZW4gQXJyYXlCdWZmZXJcbmZ1bmN0aW9uIE1JRElGaWxlVHJhY2soYnVmZmVyLCBzdGFydCkge1xuICBsZXQgYTtcbiAgbGV0IHRyYWNrTGVuZ3RoO1xuXG4gIC8vIG5vIGJ1ZmZlciwgY3JlYXRpbmcgaGltXG4gIGlmICghYnVmZmVyKSB7XG4gICAgYSA9IG5ldyBVaW50OEFycmF5KDEyKTtcbiAgICAvLyBBZGRpbmcgdGhlIGVtcHR5IHRyYWNrIGhlYWRlciAoTVRyaylcbiAgICBhWzBdID0gMHg0ZDtcbiAgICBhWzFdID0gMHg1NDtcbiAgICBhWzJdID0gMHg3MjtcbiAgICBhWzNdID0gMHg2YjtcbiAgICAvLyBBZGRpbmcgdGhlIGVtcHR5IHRyYWNrIHNpemUgKDQpXG4gICAgYVs0XSA9IDB4MDA7XG4gICAgYVs1XSA9IDB4MDA7XG4gICAgYVs2XSA9IDB4MDA7XG4gICAgYVs3XSA9IDB4MDQ7XG4gICAgLy8gQWRkaW5nIHRoZSB0cmFjayBlbmQgZXZlbnRcbiAgICBhWzhdID0gMHgwMDtcbiAgICBhWzldID0gMHhmZjtcbiAgICBhWzEwXSA9IDB4MmY7XG4gICAgYVsxMV0gPSAweDAwO1xuICAgIC8vIFNhdmluZyB0aGUgYnVmZmVyXG4gICAgdGhpcy5kYXRhcyA9IG5ldyBEYXRhVmlldyhhLmJ1ZmZlciwgMCwgTUlESUZpbGVUcmFjay5IRFJfTEVOR1RIICsgNCk7XG4gICAgLy8gcGFyc2luZyB0aGUgZ2l2ZW4gYnVmZmVyXG4gIH0gZWxzZSB7XG4gICAgaWYgKCEoYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYnVmZmVyIHJlY2VpdmVkLicpO1xuICAgIH1cbiAgICAvLyBCdWZmZXIgbGVuZ3RoIG11c3Qgc2l6ZSBhdCBsZWFzdCBsaWtlIGFuICBlbXB0eSB0cmFjayAoOCszYnl0ZXMpXG4gICAgaWYgKDEyID4gYnVmZmVyLmJ5dGVMZW5ndGggLSBzdGFydCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSW52YWxpZCBNSURJRmlsZVRyYWNrICgweCcgK1xuICAgICAgICAgIHN0YXJ0LnRvU3RyaW5nKDE2KSArXG4gICAgICAgICAgJykgOicgK1xuICAgICAgICAgICcgQnVmZmVyIGxlbmd0aCBtdXN0IHNpemUgYXQgbGVhc3QgMTJieXRlcydcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGEgdGVtcG9yYXJ5IHZpZXcgdG8gcmVhZCB0aGUgdHJhY2sgaGVhZGVyXG4gICAgdGhpcy5kYXRhcyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHN0YXJ0LCBNSURJRmlsZVRyYWNrLkhEUl9MRU5HVEgpO1xuICAgIC8vIFJlYWRpbmcgTUlESSB0cmFjayBoZWFkZXIgY2h1bmtcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICAnTScgPT09IFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5kYXRhcy5nZXRVaW50OCgwKSkgJiZcbiAgICAgICAgJ1QnID09PSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuZGF0YXMuZ2V0VWludDgoMSkpICYmXG4gICAgICAgICdyJyA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmRhdGFzLmdldFVpbnQ4KDIpKSAmJlxuICAgICAgICAnaycgPT09IFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5kYXRhcy5nZXRVaW50OCgzKSlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFsaWQgTUlESUZpbGVUcmFjayAoMHgnICtcbiAgICAgICAgICBzdGFydC50b1N0cmluZygxNikgK1xuICAgICAgICAgICcpIDonICtcbiAgICAgICAgICAnIE1UcmsgcHJlZml4IG5vdCBmb3VuZCdcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIFJlYWRpbmcgdGhlIHRyYWNrIGxlbmd0aFxuICAgIHRyYWNrTGVuZ3RoID0gdGhpcy5nZXRUcmFja0xlbmd0aCgpO1xuICAgIGlmIChidWZmZXIuYnl0ZUxlbmd0aCAtIHN0YXJ0IDwgdHJhY2tMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFsaWQgTUlESUZpbGVUcmFjayAoMHgnICtcbiAgICAgICAgICBzdGFydC50b1N0cmluZygxNikgK1xuICAgICAgICAgICcpIDonICtcbiAgICAgICAgICAnIFRoZSB0cmFjayBzaXplIGV4Y2VlZCB0aGUgYnVmZmVyIGxlbmd0aC4nXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBDcmVhdGluZyB0aGUgZmluYWwgRGF0YVZpZXdcbiAgICB0aGlzLmRhdGFzID0gbmV3IERhdGFWaWV3KFxuICAgICAgYnVmZmVyLFxuICAgICAgc3RhcnQsXG4gICAgICBNSURJRmlsZVRyYWNrLkhEUl9MRU5HVEggKyB0cmFja0xlbmd0aFxuICAgICk7XG4gICAgLy8gVHJ5aW5nIHRvIGZpbmQgdGhlIGVuZCBvZiB0cmFjayBldmVudFxuICAgIGlmIChcbiAgICAgICEoXG4gICAgICAgIDB4ZmYgPT09XG4gICAgICAgICAgdGhpcy5kYXRhcy5nZXRVaW50OChNSURJRmlsZVRyYWNrLkhEUl9MRU5HVEggKyAodHJhY2tMZW5ndGggLSAzKSkgJiZcbiAgICAgICAgMHgyZiA9PT1cbiAgICAgICAgICB0aGlzLmRhdGFzLmdldFVpbnQ4KE1JRElGaWxlVHJhY2suSERSX0xFTkdUSCArICh0cmFja0xlbmd0aCAtIDIpKSAmJlxuICAgICAgICAweDAwID09PVxuICAgICAgICAgIHRoaXMuZGF0YXMuZ2V0VWludDgoTUlESUZpbGVUcmFjay5IRFJfTEVOR1RIICsgKHRyYWNrTGVuZ3RoIC0gMSkpXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhbGlkIE1JRElGaWxlVHJhY2sgKDB4JyArXG4gICAgICAgICAgc3RhcnQudG9TdHJpbmcoMTYpICtcbiAgICAgICAgICAnKSA6JyArXG4gICAgICAgICAgJyBObyB0cmFjayBlbmQgZXZlbnQgZm91bmQgYXQgdGhlIGV4cGVjdGVkIGluZGV4JyArXG4gICAgICAgICAgJyAoJyArXG4gICAgICAgICAgKE1JRElGaWxlVHJhY2suSERSX0xFTkdUSCArICh0cmFja0xlbmd0aCAtIDEpKS50b1N0cmluZygxNikgK1xuICAgICAgICAgICcpLidcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbi8vIFN0YXRpYyBjb25zdGFudHNcbk1JRElGaWxlVHJhY2suSERSX0xFTkdUSCA9IDg7XG5cbi8vIFRyYWNrIGxlbmd0aFxuTUlESUZpbGVUcmFjay5wcm90b3R5cGUuZ2V0VHJhY2tMZW5ndGggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YXMuZ2V0VWludDMyKDQpO1xufTtcblxuTUlESUZpbGVUcmFjay5wcm90b3R5cGUuc2V0VHJhY2tMZW5ndGggPSBmdW5jdGlvbih0cmFja0xlbmd0aCkge1xuICByZXR1cm4gdGhpcy5kYXRhcy5zZXRVaW50MzIoNCwgdHJhY2tMZW5ndGgpO1xufTtcblxuLy8gUmVhZCB0cmFjayBjb250ZW50c1xuTUlESUZpbGVUcmFjay5wcm90b3R5cGUuZ2V0VHJhY2tDb250ZW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRGF0YVZpZXcoXG4gICAgdGhpcy5kYXRhcy5idWZmZXIsXG4gICAgdGhpcy5kYXRhcy5ieXRlT2Zmc2V0ICsgTUlESUZpbGVUcmFjay5IRFJfTEVOR1RILFxuICAgIHRoaXMuZGF0YXMuYnl0ZUxlbmd0aCAtIE1JRElGaWxlVHJhY2suSERSX0xFTkdUSFxuICApO1xufTtcblxuLy8gU2V0IHRyYWNrIGNvbnRlbnRcbk1JRElGaWxlVHJhY2sucHJvdG90eXBlLnNldFRyYWNrQ29udGVudCA9IGZ1bmN0aW9uKGRhdGFWaWV3KSB7XG4gIGxldCBvcmlnaW47XG4gIGxldCBkZXN0aW5hdGlvbjtcbiAgbGV0IGk7XG4gIGxldCBqO1xuICAvLyBDYWxjdWxhdGluZyB0aGUgdHJhY2sgbGVuZ3RoXG4gIGNvbnN0IHRyYWNrTGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aCAtIGRhdGFWaWV3LmJ5dGVPZmZzZXQ7XG5cbiAgLy8gVHJhY2sgbGVuZ3RoIG11c3Qgc2l6ZSBhdCBsZWFzdCBsaWtlIGFuICBlbXB0eSB0cmFjayAoNGJ5dGVzKVxuICBpZiAoNCA+IHRyYWNrTGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRyYWNrIGxlbmd0aCwgbXVzdCBzaXplIGF0IGxlYXN0IDRieXRlcycpO1xuICB9XG4gIHRoaXMuZGF0YXMgPSBuZXcgRGF0YVZpZXcoXG4gICAgbmV3IFVpbnQ4QXJyYXkoTUlESUZpbGVUcmFjay5IRFJfTEVOR1RIICsgdHJhY2tMZW5ndGgpLmJ1ZmZlclxuICApO1xuICAvLyBBZGRpbmcgdGhlIHRyYWNrIGhlYWRlciAoTVRyaylcbiAgdGhpcy5kYXRhcy5zZXRVaW50OCgwLCAweDRkKTsgLy8gTVxuICB0aGlzLmRhdGFzLnNldFVpbnQ4KDEsIDB4NTQpOyAvLyBUXG4gIHRoaXMuZGF0YXMuc2V0VWludDgoMiwgMHg3Mik7IC8vIHJcbiAgdGhpcy5kYXRhcy5zZXRVaW50OCgzLCAweDZiKTsgLy8ga1xuICAvLyBBZGRpbmcgdGhlIHRyYWNrIHNpemVcbiAgdGhpcy5kYXRhcy5zZXRVaW50MzIoNCwgdHJhY2tMZW5ndGgpO1xuICAvLyBDb3B5aW5nIHRoZSBjb250ZW50XG4gIG9yaWdpbiA9IG5ldyBVaW50OEFycmF5KFxuICAgIGRhdGFWaWV3LmJ1ZmZlcixcbiAgICBkYXRhVmlldy5ieXRlT2Zmc2V0LFxuICAgIGRhdGFWaWV3LmJ5dGVMZW5ndGhcbiAgKTtcbiAgZGVzdGluYXRpb24gPSBuZXcgVWludDhBcnJheShcbiAgICB0aGlzLmRhdGFzLmJ1ZmZlcixcbiAgICBNSURJRmlsZVRyYWNrLkhEUl9MRU5HVEgsXG4gICAgdHJhY2tMZW5ndGhcbiAgKTtcbiAgZm9yIChpID0gMCwgaiA9IG9yaWdpbi5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICBkZXN0aW5hdGlvbltpXSA9IG9yaWdpbltpXTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNSURJRmlsZVRyYWNrO1xuIiwiaW1wb3J0IE1JRElGaWxlIGZyb20gXCIuL3NyYy9NSURJRmlsZVwiO1xuXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZCBNSURJRmlsZS4uLlwiKTtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFwiTUlESUZpbGVcIiwgW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJvb3QgPSB3aW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5KU0FQID0gZmFjdG9yeSgpO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNSURJRmlsZTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==