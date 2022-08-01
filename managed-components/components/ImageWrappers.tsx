import Image from 'next/image'
import { FC } from 'react';

export const LambdaLogo: FC<{id?:string}> = ({id}) => 
    <Image alt='lambdasafe logo big' width="100%" height="100%" layout="responsive" objectFit="contain" src="/lambda.png" id={id} />