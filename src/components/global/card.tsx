import React from 'react'

const card = ({
    children,
    className,
    dark
  }: Readonly<{
    children?: React.ReactNode;
    className?: any
    dark?: boolean;
  }>) => {
  return (
    <div className={`lg:pt-16 pt-16 relative overflow-x-auto leading-[1.65rem] ${className}`}>
      <div className={`grid justify-self-center lg:px-44 lg:mx-44 m-4 rounded-3xl lg:mb-2 lg:pb-4 ${dark ? 'bg-black-50 border-dashed lg:border-7 border-4 border-gray-30 dark:prose-invert' : 'bg-white border-dashed lg:border-7 border-4 border-gray-300'}`}>{children}</div>
      </div>
  )
}

export default card