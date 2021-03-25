
export type ModuleType = 'useful' | 'dangerous'

export interface IModule {
  readonly name: string;
  readonly description: string;
  readonly moduleType: ModuleType;

  /**
   * If the module has some sort of configuration this can be fetched with this method
   */
  config(): Object | null;
}

export type ModuleMeta = Pick<IModule, 'name' | 'description' | 'moduleType'> & {
  config: Object | null;
};

/**
 * @returns a copy of the module, containing meta data like module name, type, description, and config, without access
 *          to its methods.
 */
export const metaFromModule = (module: IModule): ModuleMeta => ({
  moduleType: module.moduleType,
  name: module.name,
  description: module.description,
  config: module.config()
});
