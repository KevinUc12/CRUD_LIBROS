import {   createNewEntry } from '.src/routes/index'
// createUser automáticamente es de tipo mock
// en virtud de jest.mock('./user-model')
import {   createNewEntry } from '.src/controllers/index.controller'

console.log( createNewEntry ) // Mock object

// asumiendo que los archivos están en la misma ubicación
jest.mock('.src/controllers/index.controller')

beforeEach(() => {
  // hago reset del comportamiento que haya configurado dentro
  // de cada test, para que no afecte en otras pruebas
  // de este mismo archivo
  createNewEntry.mockClear()
})

test('get a current user', () => {
  const expectedUser = { name: 'I robot' }
  const expectedId = 0

  // getUser es un mock que tiene la función
  // returnValueOnce para asignar lo que queremos
  // que retorne cuando se ejecute como función
  createNewEntry.returnValueOnce(expectedUser)

  const user = createNewEntry(expectedId)

  expect(user).toEqual(expectedUser)
  expect(createNewEntry).toHaveBeenCalledWith(expectedId)
})

// resto de pruebas...
