// variable global en este archivo de test
let windowSpy

// asignamos windowSpy igual al mock que retorna jest.spyOn
beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get')
})

// reseteamos windowSpy
afterEach(() => {
  windowSpy.mockRestore()
})

// en caso de que quieras modificar el window.location.origin
it('should return https://example.com', () => {
  windowSpy.mockImplementation(() => ({
    location: {
      origin: 'https://example.com',
    },
  }))

  expect(window.location.origin).toEqual('https://example.com')
})
