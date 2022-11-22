import * as React from 'react';

const Box: React.FC = () => {
  const [target, setTarget] = React.useState<boolean>(true)
  const [exist, isExist] = React.useState<boolean>(false)

  return(
    <div className={exist ? 'present' : 'empty'}></div>
  )
}

export default Box;
