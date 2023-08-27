import * as React from 'react';
import './styles.scss'

export interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout (props: ILayoutProps) {

  return (
    <div className='layout'>
      {props.children}
    </div>
  );
}
