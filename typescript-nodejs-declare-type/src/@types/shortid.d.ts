declare module "shortid"{
    
    interface ShortId {
      (): string,
      generate: () => string,
      characters: (string: string) => string,
      isValid: (id: any) => boolean,
      worker: (integer: number) => void,
      seed: (float: number) => void,
    }

    // declare function generate(): string;
    // declare function worker(integer: number): boolean;
    declare const shortid: ShortId;

    export = shortid; // default import 
};

