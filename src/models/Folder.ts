interface Children {
  folders: string[]
  toDos: string[]
}

export interface FolderFB {
  name: string
  color?: string
  folders: string[]
  toDos: string[]
}

export class Folder {
  name: string
  color?: string
  children: Children

  constructor(
    name: string,
    toDos: string[],
    folders: string[],
    color?: string
  ) {
    this.name = name
    this.color = color

    const children: Children = { folders, toDos }
    this.children = children
  }

  static fromFirebase(folderFB: FolderFB): Folder {
    const { folders, toDos, name, color } = folderFB

    return new Folder(name, folders, toDos, color)
  }

  toFirebase(): FolderFB {
    const { children, name, color } = this

    return {
      ...children,
      color,
      name,
    }
  }
}
