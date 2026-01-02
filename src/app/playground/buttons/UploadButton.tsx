import { Upload } from 'lucide-react'

const UploadButton = () => {
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

export default UploadButton