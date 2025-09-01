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
        <section class="row justify-content-between">
          <div class="col-9">
            <h3>${this.title}</h3>
          </div>
          <div class="shadow position-relative jot-border d-flex justify-content-center" style="border-color: ${this.color};">
           <form class="jimbo" id="jot-body" onsubmit="app.jotController.saveActiveJot()">
           </div>
             <textarea name="body" id="jot-file" class=" col-12 text-area form-control">${this.body}</textarea>
            </form>
          <section class="row d-flex justify-content-between mt-2 mb-3">
            <div class="col-6">
              <button class="btn btn-success" type="submit" form="jot-body" >Save</button>
            </div>
            <div class="col-6">
              <button class="btn btn-danger" onclick="app.jotController.deleteJot('${this.id}')">Delete</button>
            </div>
          </section>
        </section>
    `
  }


}