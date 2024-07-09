"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const fs_1 = __importDefault(require("fs"));
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const bootstrap_service_1 = __importDefault(require("./services/bootstrap.service"));
const project_service_1 = __importDefault(require("./services/project.service"));
const customMappingWatchOptions = {
    /*
     * How often the custom mapping should be polled in milliseconds
     */
    interval: 100,
};
/**
 * Creates custom Metro config for bootstrapping Eva packages.
 *
 * @param {EvaConfig} evaConfig - configuration of Eva Design System used in project.
 * @see {EvaConfig}
 *
 * @param metroConfig - configuration of Metro Bundler used in project.
 * @link https://facebook.github.io/metro/docs/configuration
 *
 * @returns a combination of two metro configurations.
 *
 * @example Usage
 *
 * ```metro.config.js
 * const MetroConfig = require('@ui-kitten/metro-config');
 *
 * const evaConfig = {
 *   evaPackage: '@eva-design/eva',              // Required.
 *   customMappingPath: './custom-mapping.json', // Optional.
 * };
 *
 * module.exports = MetroConfig.create(evaConfig, {
 *   // Whatever was previously specified
 * });
 * ```
 */
const create = (evaConfig, metroConfig) => {
    const handleMetroEvent = (event) => {
        const reporter = metroConfig?.reporter;
        if (reporter?.update) {
            reporter.update(event);
        }
        if (event.type === 'initialize_started') {
            bootstrap_service_1.default.run(evaConfig);
            const customMappingPath = project_service_1.default.resolvePath(evaConfig.customMappingPath);
            const customMappingExists = fs_1.default.existsSync(customMappingPath);
            if (customMappingExists && (evaConfig.watch || evaConfig.watch === undefined)) {
                fs_1.default.watchFile(customMappingPath, customMappingWatchOptions, () => {
                    bootstrap_service_1.default.run(evaConfig);
                });
            }
        }
    };
    const libConfig = {
        reporter: {
            update: handleMetroEvent,
        },
    };
    return (0, lodash_merge_1.default)({}, metroConfig, libConfig);
};
exports.create = create;
//# sourceMappingURL=index.js.map