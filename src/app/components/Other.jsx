import React from 'react'
import eng from "../../../public/images/about/other/eng.png"
import spain from "../../../public/images/about/other/spain.png"
import cplus from "../../../public/images/about/other/c++.png"
import c from "../../../public/images/about/other/c.png"
import Lang from './Lang'

const Other = () => {
  return (
    <div className='flex flex-col items-center '>
        <div>
            <h3 className='font-mont text-3xl font-bold text-black tracking-wider pb-19 uppercase mt-18'>OTHER SKILLS:</h3>
        <div className="grid grid-cols-4 gap-15">
          <Lang sobi={eng} title="ANGIELSKI"/>
          <Lang sobi={spain} title="HISZPAŃSKI"/>
          <Lang sobi={cplus} title="C++"/>
          <Lang sobi={c} title="C"/>
        </div>
        </div>
    </div>
  )
}

export default Other
