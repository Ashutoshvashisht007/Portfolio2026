export const GridItems = [
  {
    id: 1,
    title: 'Dashboard that matters',
    description: 'Discover insights and trends with our advanced analytics dashboard.',
    imageSrc: '/images/bento-1.png', 
    span: 'col-span-1',
  },
  {
    id: 2,
    title: 'Automated emails',
    description: 'Send emails in bulk to everyone, with AI-powered suggestions.',
    imageSrc: '/images/bento-2.png',
    span: 'col-span-1',
  },
  {
    id: 3,
    title: 'Super fast Analytics',
    description: 'Get insights on your data with our blazing fast analytics dashboard.',
    imageSrc: '/images/bento-4.png',
    span: 'col-span-1',
  },
  {
    id: 4,
    title: 'Admin portal',
    description: 'Manage your data with our admin portal.',
    imageSrc: '/images/bento-5.png',
    span: 'col-span-2', 
  },
  {
    id: 5,
    title: '99.99% uptime SLA',
    description: 'We guarantee 99.99% uptime SLA for our platform.',
    imageSrc: '/images/bento-6.png',
    span: 'col-span-1', 
  },
];

const BentoGridItem = ({ title, idx, description, imageSrc, span }: { title: string; idx: number, description: string; imageSrc: string; span: string; }) => {

    const imageStyles: Record<number, string> = {
        1: 'absolute -right-4 rounded-lg',
        2: 'absolute left-0 rounded-b-lg',
        3: 'absolute -left-4 rounded-lg',
        5: 'rounded-lg',
    };

    return (
        <div
            className={`bg-neutral-800 rounded-xl p-5 shadow-lg flex h-100 flex-col justify-between overflow-hidden relative
        ${span} 
        transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group
        cursor-pointer
        ${idx === 3 ? 'flex items-center justify-center' : ''}
      `}
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
                            className={`w-full h-auto object-cover transition-transform duration-500 group-hover:rotate-1 hover:shadow-xl ${imageStyles[idx] ?? ''} `}
                            style={{ minHeight: '150px' }}
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
                        span={index >= 3 ? (index === 3 ? 'md:col-span-2' : 'md:col-span-1') : 'md:col-span-1'}
                    />
                ))}
            </div>
        </div>
    );
}

export default Grid1;