// src/index.tsx
import React, { type FC } from 'react';

export interface alertKinds {
    /**
     * @description alert的类型
     * @default info
     */
    kinds: string
}

const Alert: FC<alertKinds> = <>hello word</>

export default Alert