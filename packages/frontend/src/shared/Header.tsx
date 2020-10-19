import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <header className='text-6xl italic font-bold text-white'>
      {children}{" "}
    </header>
  );
}
