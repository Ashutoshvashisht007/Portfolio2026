import BorderHoverButton from "@/app/playground/buttons/BorderHoverButton";
import SwappingButton from "@/app/playground/buttons/SwappingButton";
import UploadButton from "@/app/playground/buttons/UploadButton";
import OrbSidebar from "@/app/playground/sidebar/OrbSidebar";
import fs from "fs";
import path from "path";

const getCode = (relativePath: string) =>
    fs.readFileSync(
        path.join(process.cwd(), relativePath),
        "utf-8"
    );

export const componentRegistry: Record<string, {
    name: string;
    component: React.ComponentType;
    description: string;
    code: {
        tsxCode: string,
        css?: string;
    };
}> = {
    "swapping-button": {
        name: "Swapping Animation",
        description: "A split-content button where the arrow slides right and the label shifts left on hover, creating a smooth directional swap.",
        component: SwappingButton,
        code: {
            tsxCode: `import React from 'react'
    
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
    `},
    },
    "upload-button": {
        name: "Upload Button Animation",
        description: "A hover-triggered upload button where a new background reveals via clip-path, accompanied by an animated upload icon.",
        component: UploadButton,
        code: {
            tsxCode: `import { Upload } from 'lucide-react'

const Button_Upload = () => {
  return (
    <div>
        <div className='p-6 flex justify-center items-center'>
            <button className='bg-purple-200 rounded-lg px-10 py-4 cursor-pointer relative group'>
                <span className='font-bold text-neutral-800'>Upload</span>
                <div className='absolute bg-indigo-400 inset-0 overflow-hidden flex justify-center items-center duration-400 ease-out z-0 [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0%_0_0_0)] transition-[clip-path] rounded-lg'>
                    <Upload />
                </div>
            </button>
        </div>
    </div>
  )
}

export default Button_Upload` },
    },
    "border-hover-button": {
        name: "Hover Border Button",
        description: "A button with a tracing border animation that completes the full rectangle on hover, combined with a left-to-right background reveal using clip-path.",
        component: BorderHoverButton,
        code: {
            tsxCode: `
const BorderHoverButton = () => {

    return (
        <div className='p-6 flex justify-center items-center'>
            <button className="group btn-borderhoverbutton cursor-pointer relative">
                <span className="z-2">Hover me</span>

                <div
                    className="absolute inset-0 bg-[#dd7e2a] overflow-hidden
      [clip-path:inset(0_100%_0_0)]
      group-hover:[clip-path:inset(0%_0%_0_0)]
      transition-[clip-path] duration-400 ease-out z-0 text-center flex items-center justify-center rounded-sm"
                >Hover me</div>
            </button>
        </div>
    )
}

export default BorderHoverButton`,
            css: `.btn-borderhoverbutton {
  position: relative;

  background-color: gray;

  border-color: #dd7e2a;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.3s;
}


.btn-borderhoverbutton::before,
.btn-borderhoverbutton::after,
.btn-borderhoverbutton span::before,
.btn-borderhoverbutton span::after {
  width: 110%;
  height: 130%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.3s;

  border: 0px solid #dd7e2a;
  content: "";
  pointer-events: none;
}

.btn-borderhoverbutton::before {
  border-top-width: 1px;
  transition-delay: 0.3s;
  transform-origin: right top;
}

.btn-borderhoverbutton::after {
  border-bottom-width: 1px;
  transition-delay: 0.9s;
  transform-origin: left bottom;
}

.btn-borderhoverbutton span::before {
  border-left-width: 1px;
  transition-delay: 0.6s;
  transform-origin: left top;
}

.btn-borderhoverbutton span::after {
  border-right-width: 1px;
  transition-delay: 0s;
  transform-origin: right bottom;
}

.btn-borderhoverbutton:hover::before,
.btn-borderhoverbutton:hover::after,
.btn-borderhoverbutton:hover span::before,
.btn-borderhoverbutton:hover span::after {
  transform: translate(-50%, -50%) scale(1);
}`}
    },
    "orb-sidebar": {
        name: "ORB Sidebar",
        description: "ORB Sidebar",
        component: OrbSidebar,
        code: { tsxCode: getCode("app/playground/sidebar/OrbSidebar") }
    }
};
