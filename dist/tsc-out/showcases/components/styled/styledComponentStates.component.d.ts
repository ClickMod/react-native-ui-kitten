import React from 'react';
import { EvaProp } from '@ui-kitten/components';
interface IProps {
    eva: EvaProp;
}
declare class StyledComponent extends React.Component<IProps> {
    onPressIn: () => void;
    onPressOut: () => void;
    render(): React.ReactElement;
}
export declare const StyledComponentStatesShowcase: typeof StyledComponent;
export {};
