const isShadowRootModeSupported = 
    HTMLTemplateElement.prototype.hasOwnProperty("shadowRootMode");

document
    .querySelector("p[hidden]")
    .toggleAttribute("hidden", isShadowRootModeSupported);