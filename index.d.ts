/// <reference types="chai" />

declare global {

    export namespace Chai {

        interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            calledOnce(): Assertion;
            calledTwice(): Assertion;
            exist(): Assertion;
            false(): Assertion;
            ok(): Assertion;
            true(): Assertion;

            be: Assertion;
            been: Assertion;
            have: Assertion;
            to: Assertion;
        }
    }
}

declare function dirtyChai(chai: any, utils: any): void;
declare namespace dirtyChai { }
export = dirtyChai;
