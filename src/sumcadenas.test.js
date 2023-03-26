import suma from "./sumcadenas";

describe("Sumar", () => {
    it("Deberia devolver 0 con una cadena vacia", () => {
      expect(suma("")).toEqual(0);
    });
    it("Deberia devolver un 3 en formato int", () => {
        expect(suma("3")).toEqual(3);
    });
    it("Deberia devolver un 5 con 3, 2", () => {
        expect(suma("3, 2")).toEqual(5);
    });
    
  });
  