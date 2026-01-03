import type { ComponentType } from "react";

export type ComponentImport = () => Promise<{
  default: ComponentType<any>;
}>;

export const componentRegistry: Record<string, {
    name: string;
    componentImport: ComponentImport;
    description: string;
    code: {
        tsxCode: string,
        css?: string;
    };
    layout?: string;
}> = {
    "swapping-button": {
        name: "Swapping Animation",
        description: "A split-content button where the arrow slides right and the label shifts left on hover, creating a smooth directional swap.",
        componentImport: ()=> import("@/app/playground/buttons/SwappingButton"),
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
        componentImport: ()=> import("@/app/playground/buttons/UploadButton"),
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
        componentImport: ()=> import("@/app/playground/buttons/BorderHoverButton"),
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
        componentImport: ()=> import("@/app/playground/sidebar/OrbSidebar"),
        code: { tsxCode: `import React, { useState } from "react";
import { Home, Compass, Bell, MessageSquare, Bookmark, TrendingUp, Menu, X } from "lucide-react";

const Sidebar_Orb = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { id: 1, label: "Home", icon: Home, color: "bg-blue-500" },
    { id: 2, label: "Explore", icon: Compass, color: "bg-purple-500" },
    { id: 3, label: "Notifications", icon: Bell, color: "bg-pink-500" },
    { id: 4, label: "Messages", icon: MessageSquare, color: "bg-green-500" },
    { id: 5, label: "Bookmarks", icon: Bookmark, color: "bg-orange-500" },
    { id: 6, label: "Trending", icon: TrendingUp, color: "bg-red-500" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={
            "relative z-50 w-16 h-16 rounded-full bg-neutral-400 cursor-pointer hover:bg-neutral-600 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 " +
            (isExpanded ? "rotate-90" : "")
          }
        >
          {isExpanded ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {menuItems.map((item, index) => {
          const angle = index * 60 - 90;
          const radius = 140;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={item.id}
              className={
                "absolute z-40 top-0 left-0 transition-all duration-500 ease-out " +
                (isExpanded ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
              }
              style={{
                transform: isExpanded ? "translate(" + x + "px, " + y + "px)" : "translate(0, 0)",
                transitionDelay: isExpanded ? index * 50 + "ms" : "0ms",
              }}
            >
              <div className="relative group">
                <button className={"w-12 h-12 rounded-full " + item.color + " shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-125"}>
                  <item.icon className="w-5 h-5 text-white" />
                </button>

                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-xl text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {isExpanded && (
          <div className="fixed inset-0 bg-black/10 backdrop-blur-lg z-30" onClick={() => setIsExpanded(false)} />
        )}
      </div>
    </div>
  );
};

export default Sidebar_Orb;` }
    },
    "grid-1":{
        name: "grid",
        componentImport: ()=> import("@/app/playground/grids/Grid1"),
        description: "A bento grid inspired from manupaaji",
        code: {
            tsxCode: `const BentoGridItem = ({
  title,
  idx,
  description,
  imageSrc,
  span,
}: {
  title: string;
  idx: number;
  description: string;
  imageSrc: string;
  span: string;
}) => {
  const imageStyles: Record<number, string> = {
    1: "absolute -right-4 rounded-lg",
    2: "absolute left-0 rounded-b-lg",
    3: "absolute -left-4 rounded-lg",
    5: "rounded-lg",
  };

  return (
    <div
      className={
        "bg-neutral-800 rounded-xl p-5 shadow-lg flex h-100 flex-col justify-between overflow-hidden relative " +
        span +
        " transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group cursor-pointer " +
        (idx === 3 ? "flex items-center justify-center" : "")
      }
    >
      <div className="mb-4">
        <h3 className="text-xl group-hover:translate-x-2 font-bold text-white transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:translate-x-4 mt-1 text-sm transition-all duration-300">
          {description}
        </p>
      </div>

      <div className="grow pt-4">
        {idx === 4 ? (
          <>
            <img
              src="/images/bento-4.png"
              className="absolute w-[70%] group-hover:-rotate-4 transition-all duration-300 left-4 top-24 rounded-xl shadow-xl"
            />

            <img
              src="/images/bento-4.png"
              className="absolute w-[45%] group-hover:rotate-4 transition-all duration-300 -right-2 -bottom-6 rounded-xl shadow-lg"
            />
          </>
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className={
              "w-full h-auto object-cover transition-transform duration-500 group-hover:rotate-1 hover:shadow-xl " +
              (imageStyles[idx] ?? "")
            }
            style={{ minHeight: "150px" }}
          />
        )}
      </div>
    </div>
  );
};

function Grid1() {
  const gridItems = GridItems;

  return (
    <div className="min-h-screen p-8 sm:p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto">
        {gridItems.map((item, index) => (
          <BentoGridItem
            key={index}
            idx={item.id}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            span={
              index >= 3
                ? index === 3
                  ? "md:col-span-2"
                  : "md:col-span-1"
                : "md:col-span-1"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Grid1;
`
        },
        layout: "wide",
    }
};
