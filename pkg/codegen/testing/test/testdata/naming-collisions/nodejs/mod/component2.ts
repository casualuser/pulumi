// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Component2 extends pulumi.CustomResource {
    /**
     * Get an existing Component2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Component2 {
        return new Component2(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'example:mod:Component2';

    /**
     * Returns true if the given object is an instance of Component2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Component2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Component2.__pulumiType;
    }


    /**
     * Create a Component2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Component2Args, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
        } else {
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Component2.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Component2 resource.
 */
export interface Component2Args {
}