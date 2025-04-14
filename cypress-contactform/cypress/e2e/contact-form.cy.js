describe('Contact Form', () => {
    it('should submit the form successfully', () => {
      cy.visit('http://localhost:5176'); 
  
      cy.get('input[name="name"]').type('Prasanthi');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('textarea[name="text"]').type('Submitted');
      
      cy.get('form').submit();
      cy.contains('Submitte').should('exist');
    });
  });