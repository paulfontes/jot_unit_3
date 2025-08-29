import { generateId } from "../utils/GenerateId.js"


export class Jot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body
    this.createdAt = null
    this.updatedAt = null
  }

  get jotTemplate() {
    return `
        <div class="col-12">
            <span>${this.title}</span>
          </div>
          <div class="col-12">
            <p>${this.body}</p>
          </div>
        `
  }


}