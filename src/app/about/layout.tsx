import React from 'react'

interface PropType{
    children: React.ReactNode
}

export default function layout(
   {children}:PropType
) {
  return (
    <section>
        <div>layout</div>
        {children}
    </section>
  )
}
