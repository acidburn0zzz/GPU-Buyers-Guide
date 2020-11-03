(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{399:function(e,t,r){"use strict";r.r(t);var n=r(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"common-gpu-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#common-gpu-issues"}},[e._v("#")]),e._v(" Common GPU issues")]),e._v(" "),r("h2",{attrs:{id:"black-screen-on-navi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#black-screen-on-navi"}},[e._v("#")]),e._v(" Black Screen on Navi")]),e._v(" "),r("p",[e._v("The issue is due to some differences in the x6000 framework that WhateverGreen has yet to be adapted to, to get around this you need the boot-arg "),r("code",[e._v("agdpmod=pikera")])]),e._v(" "),r("h2",{attrs:{id:"gpu-acceleration-issues-when-mixing-different-pcie-generation-devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gpu-acceleration-issues-when-mixing-different-pcie-generation-devices"}},[e._v("#")]),e._v(" GPU Acceleration issues when mixing different PCIe generation devices")]),e._v(" "),r("p",[e._v("This is most common when running X570 with PCIe 3.0 GPUs like the Radeon VII but can be seen reversed with B450 with Navi GPUs. It's a bug in AMD's firmware with automatic PCI link speed configuration, to get around this you need to force the GPU link speed in the BIOS instead of automatic. Intel firmware do not experience these issues")]),e._v(" "),r("h2",{attrs:{id:"stuck-on-or-near-ioconsoleusers-gioscreenlock"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-or-near-ioconsoleusers-gioscreenlock"}},[e._v("#")]),e._v(" Stuck on or near "),r("code",[e._v("IOConsoleUsers: gIOScreenLock...")])]),e._v(" "),r("p",[e._v("So some things to verify:")]),e._v(" "),r("ul",[r("li",[e._v("macOS only works correctly with UEFI capable GPUs(GTX 7XX/2013+)")]),e._v(" "),r("li",[e._v("CSM cannot be enabled, similar idea with UEFI")]),e._v(" "),r("li",[e._v("Forcing PCIe 3.0 link speed is also critical on AMD")])]),e._v(" "),r("h2",{attrs:{id:"drm-broken"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#drm-broken"}},[e._v("#")]),e._v(" DRM Broken")]),e._v(" "),r("p",[r("strong",[e._v("Intel GPU Users")])]),e._v(" "),r("ul",[r("li",[e._v("No fix, this is due to differences in Apple's iGPU firmware")])]),e._v(" "),r("p",[r("strong",[e._v("AMD and Nvidia GPU Users")])]),e._v(" "),r("ul",[r("li",[e._v("See WhateverGreen's "),r("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("DRM Chart"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"broken-gpu-acceleration-on-r7-r9-gpus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#broken-gpu-acceleration-on-r7-r9-gpus"}},[e._v("#")]),e._v(" Broken GPU Acceleration on R7/R9 GPUs")]),e._v(" "),r("p",[e._v("See "),r("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/spoof.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU Spoofing Guide"),r("OutboundLink")],1),e._v(" on how to fix accleration")])])}),[],!1,null,null,null);t.default=a.exports}}]);