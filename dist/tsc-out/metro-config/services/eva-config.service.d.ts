/**
 * Defines the Eva config passed to UI Kitten metro config
 *
 * @param {EvaMappingPackageName} evaPackage - the name of the eva package.
 * @param {string} customMappingPath - relative path to custom mapping.
 * @param {boolean} watch - watch custom mapping file for changes (defaults to true)
 *
 * @example Config for @eva-design/eva package with custom mapping
 * ```
 * const evaConfig = {
 *   evaPackage: '@eva-design/eva',
 *   customMappingPath: './custom-mapping.json',
 * };
 * ```
 */
export interface EvaConfig {
    evaPackage: EvaMappingPackageName;
    customMappingPath?: string;
    watch?: boolean;
}
export type EvaMappingPackageName = '@eva-design/eva' | '@eva-design/material';
export default class EvaConfigService {
    static MAPPING_PACKAGE_NAMES: EvaMappingPackageName[];
    static validateConfigOrWarn: (config: EvaConfig) => boolean;
    private static isValidEvaPackageName;
}