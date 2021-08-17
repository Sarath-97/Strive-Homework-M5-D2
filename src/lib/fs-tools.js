import fs from "fs-extra"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const { readJSON, writeJSON, writeFile } = fs

const studentsJSONPath = join(dirname(fileURLToPath(import.meta.url)), "../../author.json")
const booksJSONPath = join(dirname(fileURLToPath(import.meta.url)), "../data/books.json")
const publicFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../../public/img/students")

export const getAuthor = () => readJSON(studentsJSONPath)
export const writeAuthor = content => writeJSON(studentsJSONPath, content)
export const getBooks = () => readJSON(booksJSONPath)
export const writeBooks = content => writeJSON(booksJSONPath, content)

export const saveStudentsPicture = (filename, contentAsBuffer) => writeFile(join(publicFolderPath, filename), contentAsBuffer)