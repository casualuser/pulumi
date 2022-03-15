// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../types";

import * as utilities from "../utilities";

export interface Container {
    brightness?: enums.ContainerBrightness;
    color?: enums.ContainerColor | string;
    material?: string;
    size: enums.ContainerSize;
}
/**
 * containerProvideDefaults sets the appropriate defaults for Container
 */
export function containerProvideDefaults(val: Container): Container {
    return {
        ...val,
        brightness: (val.brightness) ?? 1,
    };
}
