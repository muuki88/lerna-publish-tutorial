import {
  IModule,
  ModuleType,
} from '@muuki88/core';

/**
 *  This A module
 */
export class ModuleA implements IModule {

  readonly name: string = 'ModuleA';
  readonly description: string = 'It is a dangerous module';
  readonly moduleType: ModuleType = 'dangerous';

  public say(msg: string): string {
    return `${this.name} says ${msg}`;
  }

  config(): Object | null {
    return null;
  }

}
