import React from 'react';
import { action } from '@storybook/addon-actions';
import RefAsPropTestComponent from '../components/ref_as_prop/RefAsPropTestComponent';
import NumberPrinterWithPrefix from '../components/RenderProps/NumberPrinterWithPrefix';
import RefTestComponent from '../components/ref/RefTestComponent';
import LifeCycleClient from '../components/LifeCycle/LifeCycleClient';
import ExceptionHandling from '../components/ExceptionHandling/ExceptionHandling';
import SyntheticEventTestComponent from '../components/Event/SyntheticEventTestComponent';
import ChangePropsProblem from '../components/etc/ChangePropsProblem';
import PropTypesTestClient, { HasPropTypesComponent } from '../components/propTypes/PropTypesClient';
import PureComponentContainer from '../components/PureComponent/PureComponentContainer';
import ContextProvider from '../components/context/ContextProvider';

export default {
    title: '테스트',
    component: RefAsPropTestComponent,
    // decorators: [withKnobs],
    // parameters: {
    //     info: {},
    //     componentSubtitle: 'OBTButton 기본적인 버튼 컴포넌트입니다.'
    // }
};

export const RefAsPropTestComponentTest = () => {
    return (
        <RefAsPropTestComponent />
    );
};

export const RenderProps = () => {
    return (
        <NumberPrinterWithPrefix prefix='카운트:' />
    );
};

// export const ref = () => {
//     return (
//         <RefTestComponent />
//     )
// }

// export const 라이프사이클 = () => {
//     return (
//         <LifeCycleClient />
//     )
// }

export const PureComponent = () => {
    return (
        <PureComponentContainer />
    )
}

export const 예외처리 = () => {
    return (
        <ExceptionHandling />
    )
}

export const 이벤트처리 = () => {
    return (
        <SyntheticEventTestComponent />
    )
}

export const Props_변경문제 = () => {
    return (
        <ChangePropsProblem data={{value: 'passed by props'}}/>
    )
}

export const PropTypes = () => {
    return (
        <>
            <PropTypesTestClient />
            {/* <HasPropTypesComponent /> */}
        </>
    )
}

export const Context = () => {
    return (
        <ContextProvider />
    )
}

// 기본적인예제.story = {
//     decorators: [withKnobs],
//     parameters: {
//         info: {},
//         componentSubtitle: 'OBTButton 기본적인 버튼 컴포넌트입니다.',
//     }
// }
