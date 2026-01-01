// import MagneticButton from "@/components/playground/SwappingButton.tsx";
// import ShinyShimmer from "@/components/playground/ShinyShimmer";
// Import all your individual components here

import SwappingButton from "@/app/playground/SwappingButton";
import UploadButton from "@/app/playground/UploadButton";

export const componentRegistry: Record<string, {
    name: string;
    component: React.ComponentType;
    description: string;
    code: string;
}> = {
    "swapping-button": {
        name: "Swapping Animation",
        description: "A button that pulls toward the cursor using physics.",
        component: SwappingButton,
        code: `import React from 'react'
    
const Boxes = ({ highlight }: { highlight?: boolean }) => {
    return (
        <div className={\`rounded-full shrink-0 inline-block size-0.75 \${highlight ? 'bg-white animate-pulse ease-linear duration-300' : 'bg-white/30'}\`}></div>
    )
}

const SwappingButton = () => {
    return (
        <div className='p-10 flex justify-center items-center'>
            <button className='group relative flex rounded-md border-2 border-gray py-1 pl-10 pr-2 cursor-pointer items-center overflow-hidden 
                               transition-colors duration-300 hover:border-yellow-500'>

                <div className='size-7 rounded-md absolute left-0.5 my-auto inset-y-0 bg-yellow-500 flex flex-col justify-center gap-px 
                                transition-all duration-500 delay-100 
                                group-hover:rotate-180 
                                group-hover:left-[calc(100%-29px)] z-50'>
                    <div className='flex justify-center align-center gap-px'>
                        <Boxes /><Boxes /><Boxes highlight={true} /><Boxes /><Boxes />
                    </div>
                    <div className='flex justify-center align-center gap-px'>
                        <Boxes /><Boxes /><Boxes /><Boxes highlight={true} /><Boxes />
                    </div>
                    <div className='flex justify-center align-center gap-px'>
                        <Boxes highlight={true} /><Boxes highlight={true} /><Boxes highlight={true} /><Boxes highlight={true} /><Boxes highlight={true} />
                    </div>
                    <div className='flex justify-center align-center gap-px'>
                        <Boxes /><Boxes /><Boxes /><Boxes highlight={true} /><Boxes />
                    </div>
                    <div className='flex justify-center align-center gap-px'>
                        <Boxes /><Boxes /><Boxes highlight={true} /><Boxes /><Boxes />
                    </div>
                </div>

                <div className='absolute inset-0 bg-gray-500 overflow-hidden 
                                [clip-path:inset(0_100%_0_0)] 
                                group-hover:[clip-path:inset(-0.3%_-0.3%_0_0)] 
                                transition-[clip-path] duration-400 ease-out z-10'>
                </div>

                <span className='inline-block group-hover:-translate-x-8 transition-transform duration-300 delay-400 z-20'>Ashutosh</span>
            </button>
        </div>
    )
}

export default SwappingButton;
    `,
    },
      "upload-button": {
        name: "Upload Button Animation",
        description: "A high-end shimmering effect for primary actions.",
        component: UploadButton,
        code: `// Your code snippet for ShinyShimmer...`,
      },
    // Add new components here and they will automatically have a route
};