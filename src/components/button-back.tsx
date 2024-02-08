import { Link, LinkProps } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

type ButtonBackProps = LinkProps <string> & {
    title:string;
}


export function ButtonBack({title, ...rest}: ButtonBackProps) {
  return (
    <Link className='text-slate-300 text-base text-center font-body'{...rest}>
        {title}
    </Link>
  );
}