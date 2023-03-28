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
    it("Deberia devolver un 5 con 3-2", () => {
        expect(suma("3-2")).toEqual(5);
    });
    it("Deberia devolver un 6 con 3 - 2 - 1", () => {
        expect(suma("3 - 2 - 1")).toEqual(6);
    });
    it("Deberia devolver un 6 con 3, 2- 1", () => {
        expect(suma("3, 2- 1")).toEqual(6);
    });
    it("Deberia devolver 6 omitiento numeros mayores a 1000", () => {
        expect(suma("3, 2- 1, 1001")).toEqual(6);
    });
  });
  