import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  Jots = [
    new Jot {
      id: '',
      title: 'Tips on how to stay hydrated!',
      color: 'Pink',
      body: 'Always bring a water bottle everywhere you go and keep it filled, just by seeing your waterbottle you are reminded that you are thirsty and will drink automatically'

    }
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())