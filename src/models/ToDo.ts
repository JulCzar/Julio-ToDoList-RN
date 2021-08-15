export interface ToDoFB {
  _id: string
  created: string
  description: string
  edited: string
  endAt: string
  folder: string
  status: boolean
  title: string
}

export class ToDo {
  id: string
  description: string
  created: Date
  edited: Date
  endAt: Date
  folder: string
  status: boolean
  title: string

  constructor(
    id: string,
    created: Date,
    description: string,
    edited: Date,
    endAt: Date,
    folder: string,
    status: boolean,
    title: string
  ) {
    this.id = id
    this.endAt = endAt
    this.title = title
    this.edited = edited
    this.folder = folder
    this.status = status
    this.created = created
    this.description = description
  }

  static fromFirebase(todoFb: ToDoFB): ToDo {
    const { _id, created, description, edited, endAt, folder, status, title } =
      todoFb
    const parsedCreated = new Date(created)
    const parsedEdited = new Date(edited)
    const parsedEndAt = new Date(endAt)
    return new ToDo(
      _id,
      parsedCreated,
      description,
      parsedEdited,
      parsedEndAt,
      folder,
      status,
      title
    )
  }

  toFirebase(): ToDoFB {
    const { id: _id, created, edited, endAt, ...rest } = this

    const parsedCreated = created.toJSON()
    const parsedEdited = edited.toJSON()
    const parsedEndAt = endAt.toJSON()

    return {
      ...rest,
      created: parsedCreated,
      edited: parsedEdited,
      endAt: parsedEndAt,
      _id,
    }
  }
}
