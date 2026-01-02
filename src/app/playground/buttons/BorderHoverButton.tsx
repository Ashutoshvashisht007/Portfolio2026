
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

export default BorderHoverButton