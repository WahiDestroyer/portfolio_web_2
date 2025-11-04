import React from 'react'
import Lang from './Lang'
import node from "../../../public/images/about/learning/node.png"
import sql from "../../../public/images/about/learning/sql.png"
import mongo from "../../../public/images/about/learning/mongo.png"
import ty from "../../../public/images/about/learning/type.png"

const Learning = () => {
  return (
    <div className='flex flex-col items-center '>
        <div>
            <h3 className='font-mont text-3xl font-bold text-black tracking-wider pb-19 uppercase mt-18'>learning:</h3>
        <div className="grid grid-cols-4 gap-12">
          <Lang sobi={node} title="NODEJS"/>
          <Lang sobi={sql} title="MySQL"/>
          <Lang sobi={mongo} title="MONGODB"/>
          <Lang sobi={ty} title="TYPESCRIPT"/>
        </div>
        </div>
    </div>
  )
}

export default Learning
