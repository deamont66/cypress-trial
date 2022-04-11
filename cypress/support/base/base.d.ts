/// <reference types="cypress" />
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace Cypress {
    // this is a bit of a magic, it takes all exports from module and add them to the Chainable interface
    type BaseCommands = typeof import('./base.commands');
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Chainable extends CommandsDef<BaseCommands> {}
}
