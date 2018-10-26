describe("Ejemplo test", function() {
  it(" matcher verdadero", function() {
    expect(true).toBe(true);
  });
  it("matcher no verdadero", function() {
    expect(false).not.toBe(true);
  });
  it("otro matcher", function() {
    expect(false).not.toBe(true);
  });
});