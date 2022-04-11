export const visitPage = (pagePath: string): void => {
    cy.visit(pagePath, {
        onBeforeLoad(win) {
            win.localStorage.clear();
        },
    });
};
