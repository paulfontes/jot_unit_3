import { AppState } from "../AppState.js"
import { jotServices } from "../services/JotService.js";
import { getFormData } from "../utils/FormHandler.js";



export class JotController {
    constructor() {
        console.log('controller works');
        this.drawJotList()
        this.selectActiveJot()
        AppState.on('jots', this.drawJotList)
        AppState.on('activeJot', this.drawActiveJot)
    }


    drawJotList() {
        const jotListElement = document.getElementById('jot-list')
        jotListElement.innerHTML = ''
        AppState.jots.forEach((jot) => {
            jotListElement.innerHTML += jot.jotTemplate
        })
    }

    selectActiveJot(jotId) {
        console.log('🖋️ active');
        jotServices.selectActiveJot(jotId)
            ;

    }

    drawActiveJot() {
        const activeJotElm = document.getElementById('active-case-file')
        const activeJot = AppState.activeJot
        if (activeJot != null) {
            activeJotElm.innerHTML = activeJot.activeJotTemplate
        } else {
            activeJotElm.innerHTML = `
            <p>Select a to view Fully</p>
            `
        }
    }

    createJot() {
        console.log('add jot in controller!')
        event.preventDefault()
        let form = event.target
        console.log('target');
        let jotData = getFormData(form)
        console.log('data', jotData);

        jotServices.createJot(jotData)

        // @ts-ignore
        form.reset()
    }

}

