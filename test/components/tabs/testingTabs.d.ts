import { SignalProps, ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';
import "@polymita/renderer/jsx-runtime";
export declare const name: "TestingTabs";
export declare let meta: {
    props: TestingTabsProps;
    layoutStruct: TestingTabsLayout;
    patchCommands: [];
};
export interface TestingTabsProps {
}
export declare const propTypes: {};
export declare const logic: (props: SignalProps<TestingTabsProps>) => {};
export type TestingTabsLayout = {
    type: 'tabsContainer';
    children: [
    ];
};
export declare const layout: (props: TestingTabsProps) => VirtualLayoutJSON;
export declare const styleRules: (props: TestingTabsProps, layout: ConvertToLayoutTreeDraft<TestingTabsLayout>) => any[];
export declare const designPattern: (props: TestingTabsProps, layout: ConvertToLayoutTreeDraft<TestingTabsLayout>) => {};
