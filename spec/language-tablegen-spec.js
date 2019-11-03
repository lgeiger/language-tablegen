describe("TableGen grammar", () => {
  let grammar;
  beforeEach(() => {
    waitsForPromise(() => atom.packages.activatePackage("language-tablegen"));

    runs(() => {
      grammar = atom.grammars.grammarForScopeName("source.tablegen");
    });
  });

  return it("parses the grammar", () => {
    expect(grammar).toBeTruthy();
    expect(grammar.scopeName).toBe("source.tablegen");
  });
});
