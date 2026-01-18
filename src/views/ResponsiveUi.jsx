import React from 'react'

function ResponsiveUi() {
    // sm   ≥ 640px
    // md   ≥ 768px
    // lg   ≥ 1024px
    // xl   ≥ 1280px
    // 2xl  ≥ 1536px

    return (
        // Tailwind CSS
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 p-4 text-white">
            <div className="h-20 bg-red-600">1</div>
            <div className="h-20 bg-gray-600">2</div>
            <div className="h-20 bg-green-600">3</div>
            <div className="h-20 bg-yellow-600">4</div>
            <div className="h-20 bg-purple-600">5</div>
            <div className="h-20 bg-pink-600">6</div>
            <div className="h-20 bg-indigo-600">7</div>
        </div>
    )
}

export default ResponsiveUi