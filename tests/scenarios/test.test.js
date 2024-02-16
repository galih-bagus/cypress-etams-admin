describe("xpathTesting", () => {
  it("xpath", () => {
    cy.visit("http://automationpractice.pl/index.php");
    cy.xpath("//input[@id='search_query_top']").type("T-shirt");
    cy.xpath("//header/div[3]/div[1]/div[1]/div[2]/form[1]/button[1]").click();
  });
});
