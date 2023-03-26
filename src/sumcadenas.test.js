import suma from "./sumcadenas";

describe("Sumar", () => {
    it("Deberia recibir un string", () => {
      expect(suma("")).toEqual(0);
    });
  });
  