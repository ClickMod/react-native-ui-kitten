/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
import { CalendarPickerCellElement } from './calendarPickerCell.component';
import { CalendarDateInfo } from '../../type';
type ViewPropsWithoutChildren = Omit<ViewProps, 'children'>;
export interface CalendarPickerRowProps<D> extends ViewPropsWithoutChildren {
    data: CalendarDateInfo<D>[];
    children: (item: CalendarDateInfo<D>, index: number) => CalendarPickerCellElement<D>;
}
export type CalendarPickerRowElement<D> = React.ReactElement<CalendarPickerRowProps<D>>;
export declare class CalendarPickerRow<D> extends React.Component<CalendarPickerRowProps<D>> {
    render(): React.ReactElement<ViewProps>;
}
export {};
