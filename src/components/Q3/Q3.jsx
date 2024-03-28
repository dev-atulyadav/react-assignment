import React from 'react'
import LazyLoad from "react-lazy-load"

export default function Q3() {
  return (
    <div>
    <LazyLoad height={762} width={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
      <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
    </LazyLoad>
  </div>
)
}
