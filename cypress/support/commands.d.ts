/// <reference types="cypress" />
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type CommandFunction = (...args: any[]) => Cypress.CanReturnChainable;
    type ChangeReturnType<TFn, TR> = TFn extends (...a: infer A) => unknown ? (...a: A) => TR: never;
    // if the function doesn't return chainable, change its return type to do so
    type ReturnChainable<TFn extends CommandFunction> =
        ReturnType<TFn> extends Cypress.Chainable ? TFn : ChangeReturnType<TFn, Cypress.Chainable<ReturnType<TFn>>>;
    // this is helper to add chainable return type to all the commands from import object
    type CommandsDef<T extends { [n: string]: CommandFunction }> = { [name in keyof T]: ReturnChainable<T[name]> };
}
