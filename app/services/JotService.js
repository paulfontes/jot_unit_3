import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";



class JotServices {


    selectActiveJot(jotId) {
        console.log('select active service');
        let selectedJot = AppState.jots.find((jot) => jot.id == jotId)
        AppState.activeJot = selectedJot
        console.log(AppState.activeJot);

    }

    createJot(jotData) {
        console.log('creating jot services', jotData);
        let jot = new Jot(jotData)
        console.log('jot data', jot);
        AppState.jots.unshift(jot)
        this.saveJotToLocal()

    }

    saveJotToLocal() {
        let jots = AppState.jots
        saveState('jot-notes', jots)
    }

    loadJotFromLocal() {
        let jots = loadState('jot', [Jot])
        console.log('loaded data', jots);
        AppState.jots = jots
    }
}

export const jotServices = new JotServices()