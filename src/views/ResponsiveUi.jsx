import React from 'react'

function ResponsiveUi() {
    // sm   ≥ 640px
    // md   ≥ 768px
    // lg   ≥ 1024px
    // xl   ≥ 1280px
    // 2xl  ≥ 1536px

    return (
        // 1) Tailwind CSS
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 p-3 text-white">
            <div className="h-16 bg-red-600">1</div>
            <div className="h-16 bg-gray-600">2</div>
            <div className="h-16 bg-green-600">3</div>
            <div className="h-16 bg-yellow-600">4</div>
            <div className="h-16 bg-purple-600">5</div>
            <div className="h-16 bg-pink-600">6</div>
            <div className="h-16 bg-indigo-600">7</div>
        </div>

        // 2) Bootstrap5
        // <div className="container py-3">
        //     <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 text-white">
        //         <div className="bg-danger p-3">1</div>
        //         <div className="bg-secondary p-3">2</div>
        //         <div className="bg-success p-3">3</div>
        //         <div className="bg-warning text-dark p-3">4</div>
        //         <div className="bg-info text-dark p-3">5</div>
        //         <div className="bg-dark p-3">6</div>
        //     </div>
        // </div>
    )
}

export default ResponsiveUi