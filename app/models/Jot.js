import { generateId } from "../utils/GenerateId.js"


export class Jot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body || ''
    this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
    this.updatedAt = data.updatedAt == undefined ? new Date() : new Date(data.updatedAt)
  }

  get jotTemplate() {
    return `
    <div onclick="app.jotController.selectActiveJot('${this.id}')" class="col-8 card mb-2">
    <span><b>${this.title}</b></span>
    <div class="shadow position-relative jot-border d-flex justify-content-center" style="border-color: ${this.color};">
    <hr>
    <p>${this.previewBody}</p>
    </div>
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
            <div class="shadow position-relative jot-border d-flex justify-content-center" style="border-color: ${this.color};">
            </div>
            <small>Created on: ${this.createdAtDate}</small>
            <br>
            <small>Updated on: ${this.updatedAtDate}</small>
          </div>
          <form class="jimbo" id="jot-body" onsubmit="app.jotController.saveActiveJot()">
          <textarea placeholder="Put your notes here!" name="body" id="jot-file" class=" col-12 text-area form-control">${this.body}</textarea>
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

  get createdAtDate() {
    return this.createdAt.toLocaleDateString('en-US', {
      year: "numeric",
      month: "short",
      day: "2-digit"
    })
  }

  get updatedAtDate() {
    if (this.updatedAt == null) {
      return "not saved"
    }

    return this.updatedAt.toLocaleString('en-US', {
      year: '2-digit',
      month: '2-digit',
      hour: "numeric",
      minute: 'numeric',
      day: '2-digit'

    })
  }

  get previewBody() {
    return this.body.length > 30 ? this.body.slice(0, 30) + "..." : this.body;
  }

}