import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  /** @type {Jot[]} */
  jots = [

    new Jot({
      title: 'Tips on how to stay hydrated!',
      color: 'Pink',
      body: 'Always bring a water bottle everywhere you go and keep it filled.'

    }),
    new Jot({

      title: 'Tips on how to stay fit!',
      color: 'Green',
      body: 'Workout and  bring a water bottle everywhere you go and keep it filled.'

    }),
    new Jot({

      title: 'Tips on how to stay well read!',
      color: 'Red',
      body: 'Always bring a book everywhere you go and keep it filled.'

    }),
  ]

  /** @type {Jot} */
  activeJot = null
}

export const AppState = createObservableProxy(new ObservableAppState())