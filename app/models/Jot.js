import { generateId } from "../utils/GenerateId.js"


export class Jot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body || 'Add Something'
    this.createdAt = null
    this.updatedAt = null
  }

  get jotTemplate() {
    return `
        <div onclick="app.jotController.selectActiveJot('${this.id}')" class="col-12 card mb-2">
            <span><b>${this.title}</b></span>
            <hr>
            <p>${this.body}</p>
          </div>
        `
  }


  //Add these later <span>${this.createdAt}</span>
  // <p>${this.updatedAt}</p>
  get activeJotTemplate() {
    return `
          <div class="col-8">
            <span><i class="mdi mdi-palette"></i>${this.color}</span>
            <span><h3>${this.title}</h3></span>
            
          </div>
          <div class="col-4 mt-4">
          <button type="submit" form="jot-body" >Save</button>
          <button onclick="app.jotController.deleteJot('${this.id}')">Delete</button>
          </div>
          <div class="d-flex justify-content-center">
          <form id="jot-body" onsubmit="app.jotController.saveActiveJot('${this.id}')">
            <textarea name="body" id="jot-file" class="col-12 text-area form-control">${this.body}</textarea>
          </form>
          </div>
    `
  }


}