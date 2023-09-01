const request = require("supertest");
const startServer = require("../index");

let server;
let app;

beforeAll(() => {
  server = startServer(); // Iniciar o servidor
  app = server.app; // Obter a instância do app para usar nos testes
});

afterAll((done) => {
  server.server.close(done); // Encerrar o servidor
});

describe("GET /", () => {
  it('responds with "Hello, world!"', (done) => {
    request(app).get("/").expect(200, "Hello, world!", done);
  });
});
