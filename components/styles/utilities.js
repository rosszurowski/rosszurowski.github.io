import React from 'react';

export default () => (
  <style jsx global>{`
    .o-0p{opacity:0}.o-25p{opacity:.25}.o-50p{opacity:.5}.o-75p{opacity:.75}.o-100p{opacity:1}.d-inline{display:inline}.d-inlineBlock{display:inline-block}.d-block{display:block}.d-none{display:none}.p-absolute{position:absolute}.p-relative{position:relative}.top-0{top:0}.left-0{left:0}.right-0{right:0}.bottom-0{bottom:0}.w-1{width:1rem}.w-2{width:2rem}.w-3{width:3rem}.w-4{width:4rem}.w-5{width:5rem}.w-100p{width:100%}.h-1{height:1rem}.h-2{height:2rem}.h-3{height:3rem}.h-4{height:4rem}.h-5{height:5rem}.h-100p{height:100%}.x{display:flex}.xx{flex:1}.xa{flex:auto}.xn{flex:none}.xa-center{align-items:center}.xa-baseline{align-items:baseline}.xa-stretch{align-items:stretch}.xa-start{align-items:flex-start}.xa-end{align-items:flex-end}.xd-row{flex-direction:row}.xd-rowReverse{flex-direction:row-reverse}.xd-column{flex-direction:column}.xd-columnReverse{flex-direction:column-reverse}.xw-wrap{flex-wrap:wrap}.xw-noWrap{flex-wrap:no-wrap}.xj-start{justify-content:flex-start}.xj-spaceAround{justify-content:space-around}.xj-spaceBetween{justify-content:space-between}.xj-center{justify-content:center}.xj-end{justify-content:flex-end}.xo-0{order:0}.xo-1{order:1}.xo-2{order:2}.xo-3{order:3}.xo-4{order:4}.ma-0{margin:0}.ma-1{margin:4px}.ma-2{margin:8px}.ma-3{margin:16px}.ma-4{margin:32px}.ma-5{margin:64px}.ma-6{margin:128px}.mt-0{margin-top:0}.mt-1{margin-top:4px}.mt-2{margin-top:8px}.mt-3{margin-top:16px}.mt-4{margin-top:32px}.mt-5{margin-top:64px}.mt-6{margin-top:128px}.ml-0{margin-left:0}.ml-1{margin-left:4px}.ml-2{margin-left:8px}.ml-3{margin-left:16px}.ml-4{margin-left:32px}.ml-5{margin-left:64px}.ml-6{margin-left:128px}.mr-0{margin-right:0}.mr-1{margin-right:4px}.mr-2{margin-right:8px}.mr-3{margin-right:16px}.mr-4{margin-right:32px}.mr-5{margin-right:64px}.mr-6{margin-right:128px}.mb-0{margin-bottom:0}.mb-1{margin-bottom:4px}.mb-2{margin-bottom:8px}.mb-3{margin-bottom:16px}.mb-4{margin-bottom:32px}.mb-5{margin-bottom:64px}.mb-6{margin-bottom:128px}.mh-0{margin-left:0;margin-right:0}.mh-1{margin-left:4px;margin-right:4px}.mh-2{margin-left:8px;margin-right:8px}.mh-3{margin-left:16px;margin-right:16px}.mh-4{margin-left:32px;margin-right:32px}.mh-5{margin-left:64px;margin-right:64px}.mh-6{margin-left:128px;margin-right:128px}.mv-0{margin-top:0;margin-bottom:0}.mv-1{margin-top:4px;margin-bottom:4px}.mv-2{margin-top:8px;margin-bottom:8px}.mv-3{margin-top:16px;margin-bottom:16px}.mv-4{margin-top:32px;margin-bottom:32px}.mv-5{margin-top:64px;margin-bottom:64px}.mv-6{margin-top:128px;margin-bottom:128px}.ml-auto{margin-left:auto}.mh-auto,.mr-auto{margin-right:auto}.mh-auto{margin-left:auto}.mv-auto{margin-top:auto;margin-bottom:auto}.pa-0{padding:0}.pa-1{padding:4px}.pa-2{padding:8px}.pa-3{padding:16px}.pa-4{padding:32px}.pa-5{padding:64px}.pa-6{padding:128px}.pt-0{padding-top:0}.pt-1{padding-top:4px}.pt-2{padding-top:8px}.pt-3{padding-top:16px}.pt-4{padding-top:32px}.pt-5{padding-top:64px}.pt-6{padding-top:128px}.pl-0{padding-left:0}.pl-1{padding-left:4px}.pl-2{padding-left:8px}.pl-3{padding-left:16px}.pl-4{padding-left:32px}.pl-5{padding-left:64px}.pl-6{padding-left:128px}.pr-0{padding-right:0}.pr-1{padding-right:4px}.pr-2{padding-right:8px}.pr-3{padding-right:16px}.pr-4{padding-right:32px}.pr-5{padding-right:64px}.pr-6{padding-right:128px}.pb-0{padding-bottom:0}.pb-1{padding-bottom:4px}.pb-2{padding-bottom:8px}.pb-3{padding-bottom:16px}.pb-4{padding-bottom:32px}.pb-5{padding-bottom:64px}.pb-6{padding-bottom:128px}.ph-0{padding-top:0;padding-bottom:0}.ph-1{padding-top:4px;padding-bottom:4px}.ph-2{padding-top:8px;padding-bottom:8px}.ph-3{padding-top:16px;padding-bottom:16px}.ph-4{padding-top:32px;padding-bottom:32px}.ph-5{padding-top:64px;padding-bottom:64px}.ph-6{padding-top:128px;padding-bottom:128px}.pv-0{padding-top:0;padding-bottom:0}.pv-1{padding-top:4px;padding-bottom:4px}.pv-2{padding-top:8px;padding-bottom:8px}.pv-3{padding-top:16px;padding-bottom:16px}.pv-4{padding-top:32px;padding-bottom:32px}.pv-5{padding-top:64px;padding-bottom:64px}.pv-6{padding-top:128px;padding-bottom:128px}.c-pink{color:#ffb7b3}.c-black{color:#141414}.bc-pink{background-color:#ffb7b3}.bc-black{background-color:#141414}.ff-sans{font-family:Calibre,-apple-system,BlinkMacSystemFont,Arial,sans-serif}.fs-13{font-size:13px}.fs-15{font-size:15px}.fs-18{font-size:18px}.fs-22{font-size:22px}.fs-27{font-size:27px}.fs-33{font-size:33px}.ls-1{letter-spacing:1px}.lh-1d2{line-height:1.2}.lh-1d6{line-height:1.6}.ta-left{text-align:left}.ta-center{text-align:center}.ta-right{text-align:right}.td-none{text-decoration:none}.td-underline{text-decoration:underline}.to-initial{text-overflow:initial}.to-clip{text-overflow:clip}.to-ellipsis{text-overflow:ellipsis}.tt-none{text-transform:none}.tt-uppercase{text-transform:uppercase}.tt-lowercase{text-transform:lowercase}.z-0{z-index:0}.z-1{z-index:1}.z-2{z-index:2}.z-3{z-index:3}.z-4{z-index:4}.z-bottom{z-index:-1}.z-top{z-index:99}.pe-none{pointer-events:none}.pe-auto{pointer-events:auto}.us-none{user-select:none}@media only screen and (min-width:479px){.d-inline-s{display:inline}.d-inlineBlock-s{display:inline-block}.d-block-s{display:block}.d-none-s{display:none}.w-1-s{width:1rem}.w-2-s{width:2rem}.w-3-s{width:3rem}.w-4-s{width:4rem}.w-5-s{width:5rem}.w-100p-s{width:100%}.h-1-s{height:1rem}.h-2-s{height:2rem}.h-3-s{height:3rem}.h-4-s{height:4rem}.h-5-s{height:5rem}.h-100p-s{height:100%}.x-s{display:flex}.xx-s{flex:1}.xa-s{flex:auto}.xn-s{flex:none}.xa-center-s{align-items:center}.xa-baseline-s{align-items:baseline}.xa-stretch-s{align-items:stretch}.xa-start-s{align-items:flex-start}.xa-end-s{align-items:flex-end}.xd-row-s{flex-direction:row}.xd-rowReverse-s{flex-direction:row-reverse}.xd-column-s{flex-direction:column}.xd-columnReverse-s{flex-direction:column-reverse}.xj-start-s{justify-content:flex-start}.xj-spaceAround-s{justify-content:space-around}.xj-spaceBetween-s{justify-content:space-between}.xj-center-s{justify-content:center}.xj-end-s{justify-content:flex-end}.xo-0-s{order:0}.xo-1-s{order:1}.xo-2-s{order:2}.xo-3-s{order:3}.xo-4-s{order:4}.ma-0-s{margin:0}.ma-1-s{margin:4px}.ma-2-s{margin:8px}.ma-3-s{margin:16px}.ma-4-s{margin:32px}.ma-5-s{margin:64px}.ma-6-s{margin:128px}.mt-0-s{margin-top:0}.mt-1-s{margin-top:4px}.mt-2-s{margin-top:8px}.mt-3-s{margin-top:16px}.mt-4-s{margin-top:32px}.mt-5-s{margin-top:64px}.mt-6-s{margin-top:128px}.ml-0-s{margin-left:0}.ml-1-s{margin-left:4px}.ml-2-s{margin-left:8px}.ml-3-s{margin-left:16px}.ml-4-s{margin-left:32px}.ml-5-s{margin-left:64px}.ml-6-s{margin-left:128px}.mr-0-s{margin-right:0}.mr-1-s{margin-right:4px}.mr-2-s{margin-right:8px}.mr-3-s{margin-right:16px}.mr-4-s{margin-right:32px}.mr-5-s{margin-right:64px}.mr-6-s{margin-right:128px}.mb-0-s{margin-bottom:0}.mb-1-s{margin-bottom:4px}.mb-2-s{margin-bottom:8px}.mb-3-s{margin-bottom:16px}.mb-4-s{margin-bottom:32px}.mb-5-s{margin-bottom:64px}.mb-6-s{margin-bottom:128px}.mh-0-s{margin-left:0;margin-right:0}.mh-1-s{margin-left:4px;margin-right:4px}.mh-2-s{margin-left:8px;margin-right:8px}.mh-3-s{margin-left:16px;margin-right:16px}.mh-4-s{margin-left:32px;margin-right:32px}.mh-5-s{margin-left:64px;margin-right:64px}.mh-6-s{margin-left:128px;margin-right:128px}.mv-0-s{margin-top:0;margin-bottom:0}.mv-1-s{margin-top:4px;margin-bottom:4px}.mv-2-s{margin-top:8px;margin-bottom:8px}.mv-3-s{margin-top:16px;margin-bottom:16px}.mv-4-s{margin-top:32px;margin-bottom:32px}.mv-5-s{margin-top:64px;margin-bottom:64px}.mv-6-s{margin-top:128px;margin-bottom:128px}.ml-auto-s{margin-left:auto}.mh-auto-s,.mr-auto-s{margin-right:auto}.mh-auto-s{margin-left:auto}.mv-auto-s{margin-top:auto;margin-bottom:auto}.pa-0-s{padding:0}.pa-1-s{padding:4px}.pa-2-s{padding:8px}.pa-3-s{padding:16px}.pa-4-s{padding:32px}.pa-5-s{padding:64px}.pa-6-s{padding:128px}.pt-0-s{padding-top:0}.pt-1-s{padding-top:4px}.pt-2-s{padding-top:8px}.pt-3-s{padding-top:16px}.pt-4-s{padding-top:32px}.pt-5-s{padding-top:64px}.pt-6-s{padding-top:128px}.pl-0-s{padding-left:0}.pl-1-s{padding-left:4px}.pl-2-s{padding-left:8px}.pl-3-s{padding-left:16px}.pl-4-s{padding-left:32px}.pl-5-s{padding-left:64px}.pl-6-s{padding-left:128px}.pr-0-s{padding-right:0}.pr-1-s{padding-right:4px}.pr-2-s{padding-right:8px}.pr-3-s{padding-right:16px}.pr-4-s{padding-right:32px}.pr-5-s{padding-right:64px}.pr-6-s{padding-right:128px}.pb-0-s{padding-bottom:0}.pb-1-s{padding-bottom:4px}.pb-2-s{padding-bottom:8px}.pb-3-s{padding-bottom:16px}.pb-4-s{padding-bottom:32px}.pb-5-s{padding-bottom:64px}.pb-6-s{padding-bottom:128px}.ph-0-s{padding-top:0;padding-bottom:0}.ph-1-s{padding-top:4px;padding-bottom:4px}.ph-2-s{padding-top:8px;padding-bottom:8px}.ph-3-s{padding-top:16px;padding-bottom:16px}.ph-4-s{padding-top:32px;padding-bottom:32px}.ph-5-s{padding-top:64px;padding-bottom:64px}.ph-6-s{padding-top:128px;padding-bottom:128px}.pv-0-s{padding-top:0;padding-bottom:0}.pv-1-s{padding-top:4px;padding-bottom:4px}.pv-2-s{padding-top:8px;padding-bottom:8px}.pv-3-s{padding-top:16px;padding-bottom:16px}.pv-4-s{padding-top:32px;padding-bottom:32px}.pv-5-s{padding-top:64px;padding-bottom:64px}.pv-6-s{padding-top:128px;padding-bottom:128px}}@media only screen and (min-width:767px){.d-inline-m{display:inline}.d-inlineBlock-m{display:inline-block}.d-block-m{display:block}.d-none-m{display:none}.w-1-m{width:1rem}.w-2-m{width:2rem}.w-3-m{width:3rem}.w-4-m{width:4rem}.w-5-m{width:5rem}.w-100p-m{width:100%}.h-1-m{height:1rem}.h-2-m{height:2rem}.h-3-m{height:3rem}.h-4-m{height:4rem}.h-5-m{height:5rem}.h-100p-m{height:100%}.x-m{display:flex}.xx-m{flex:1}.xa-m{flex:auto}.xn-m{flex:none}.xa-center-m{align-items:center}.xa-baseline-m{align-items:baseline}.xa-stretch-m{align-items:stretch}.xa-start-m{align-items:flex-start}.xa-end-m{align-items:flex-end}.xd-row-m{flex-direction:row}.xd-rowReverse-m{flex-direction:row-reverse}.xd-column-m{flex-direction:column}.xd-columnReverse-m{flex-direction:column-reverse}.xj-start-m{justify-content:flex-start}.xj-spaceAround-m{justify-content:space-around}.xj-spaceBetween-m{justify-content:space-between}.xj-center-m{justify-content:center}.xj-end-m{justify-content:flex-end}.xo-0-m{order:0}.xo-1-m{order:1}.xo-2-m{order:2}.xo-3-m{order:3}.xo-4-m{order:4}.ma-0-m{margin:0}.ma-1-m{margin:4px}.ma-2-m{margin:8px}.ma-3-m{margin:16px}.ma-4-m{margin:32px}.ma-5-m{margin:64px}.ma-6-m{margin:128px}.mt-0-m{margin-top:0}.mt-1-m{margin-top:4px}.mt-2-m{margin-top:8px}.mt-3-m{margin-top:16px}.mt-4-m{margin-top:32px}.mt-5-m{margin-top:64px}.mt-6-m{margin-top:128px}.ml-0-m{margin-left:0}.ml-1-m{margin-left:4px}.ml-2-m{margin-left:8px}.ml-3-m{margin-left:16px}.ml-4-m{margin-left:32px}.ml-5-m{margin-left:64px}.ml-6-m{margin-left:128px}.mr-0-m{margin-right:0}.mr-1-m{margin-right:4px}.mr-2-m{margin-right:8px}.mr-3-m{margin-right:16px}.mr-4-m{margin-right:32px}.mr-5-m{margin-right:64px}.mr-6-m{margin-right:128px}.mb-0-m{margin-bottom:0}.mb-1-m{margin-bottom:4px}.mb-2-m{margin-bottom:8px}.mb-3-m{margin-bottom:16px}.mb-4-m{margin-bottom:32px}.mb-5-m{margin-bottom:64px}.mb-6-m{margin-bottom:128px}.mh-0-m{margin-left:0;margin-right:0}.mh-1-m{margin-left:4px;margin-right:4px}.mh-2-m{margin-left:8px;margin-right:8px}.mh-3-m{margin-left:16px;margin-right:16px}.mh-4-m{margin-left:32px;margin-right:32px}.mh-5-m{margin-left:64px;margin-right:64px}.mh-6-m{margin-left:128px;margin-right:128px}.mv-0-m{margin-top:0;margin-bottom:0}.mv-1-m{margin-top:4px;margin-bottom:4px}.mv-2-m{margin-top:8px;margin-bottom:8px}.mv-3-m{margin-top:16px;margin-bottom:16px}.mv-4-m{margin-top:32px;margin-bottom:32px}.mv-5-m{margin-top:64px;margin-bottom:64px}.mv-6-m{margin-top:128px;margin-bottom:128px}.ml-auto-m{margin-left:auto}.mh-auto-m,.mr-auto-m{margin-right:auto}.mh-auto-m{margin-left:auto}.mv-auto-m{margin-top:auto;margin-bottom:auto}.pa-0-m{padding:0}.pa-1-m{padding:4px}.pa-2-m{padding:8px}.pa-3-m{padding:16px}.pa-4-m{padding:32px}.pa-5-m{padding:64px}.pa-6-m{padding:128px}.pt-0-m{padding-top:0}.pt-1-m{padding-top:4px}.pt-2-m{padding-top:8px}.pt-3-m{padding-top:16px}.pt-4-m{padding-top:32px}.pt-5-m{padding-top:64px}.pt-6-m{padding-top:128px}.pl-0-m{padding-left:0}.pl-1-m{padding-left:4px}.pl-2-m{padding-left:8px}.pl-3-m{padding-left:16px}.pl-4-m{padding-left:32px}.pl-5-m{padding-left:64px}.pl-6-m{padding-left:128px}.pr-0-m{padding-right:0}.pr-1-m{padding-right:4px}.pr-2-m{padding-right:8px}.pr-3-m{padding-right:16px}.pr-4-m{padding-right:32px}.pr-5-m{padding-right:64px}.pr-6-m{padding-right:128px}.pb-0-m{padding-bottom:0}.pb-1-m{padding-bottom:4px}.pb-2-m{padding-bottom:8px}.pb-3-m{padding-bottom:16px}.pb-4-m{padding-bottom:32px}.pb-5-m{padding-bottom:64px}.pb-6-m{padding-bottom:128px}.ph-0-m{padding-top:0;padding-bottom:0}.ph-1-m{padding-top:4px;padding-bottom:4px}.ph-2-m{padding-top:8px;padding-bottom:8px}.ph-3-m{padding-top:16px;padding-bottom:16px}.ph-4-m{padding-top:32px;padding-bottom:32px}.ph-5-m{padding-top:64px;padding-bottom:64px}.ph-6-m{padding-top:128px;padding-bottom:128px}.pv-0-m{padding-top:0;padding-bottom:0}.pv-1-m{padding-top:4px;padding-bottom:4px}.pv-2-m{padding-top:8px;padding-bottom:8px}.pv-3-m{padding-top:16px;padding-bottom:16px}.pv-4-m{padding-top:32px;padding-bottom:32px}.pv-5-m{padding-top:64px;padding-bottom:64px}.pv-6-m{padding-top:128px;padding-bottom:128px}}
  `}</style>
);