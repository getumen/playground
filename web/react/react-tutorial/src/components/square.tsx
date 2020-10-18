import React from 'react';

type Props = {
  value: string;
  onClick: () => void;
}


export const Square: React.FC<Props> = (props) => {
  return (
    <button
      className="square"
      onClick={() => props.onClick()}
    >
      { props.value}
    </button>
  );
}