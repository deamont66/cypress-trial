import * as commands from './base.commands';

// we take all exports from commands module and add them as custom commands to Cypress
// there's one tradeoff and that's that we are not counting with prevSubject/command options
// let's cross that bridge when we come to it /shrug
Object.entries(commands).forEach(([commandName, commandFunction]: [string, Cypress.CommandFn<any>]) => {
    Cypress.Commands.add(commandName as keyof Cypress.Chainable, commandFunction);
});
