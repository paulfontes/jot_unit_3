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

    saveTheActiveJot(updatedData) {
        const activeJot = AppState.activeJot
        activeJot.body = updatedData.body
        this.saveJotToLocal()

    }

    createJot(jotData) {
        console.log('creating jot services', jotData);
        const jot = new Jot(jotData)
        console.log('jot data', jot);
        AppState.jots.unshift(jot)
        this.saveJotToLocal()

    }

    saveJot(jotId) {

    }

    deleteJot(jotId) {
        const jotIndex = AppState.jots.findIndex((jot) => jot.id == jotId)
        AppState.jots.splice(jotIndex, 1)
        this.saveJotToLocal()
    }

    saveJotToLocal() {

        saveState('jots', AppState.jots)
        // console.log('saving data',jots);

    }

    loadJotFromLocal() {

        AppState.jots = loadState('jots', [Jot])
    }

}

export const jotServices = new JotServices()