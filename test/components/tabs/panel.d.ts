import { SignalProps, ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';
export declare const name: "TabPanel";
export declare let meta: {
    props: TabPanelProps;
    layoutStruct: TabPanelLayout;
    patchCommands: [];
};
export interface TabPanelProps {
    header: string;
    children?: VirtualLayoutJSON[];
}
export declare const propTypes: {};
export declare const logic: (props: SignalProps<TabPanelProps>) => {};
export type TabPanelLayout = {
    type: 'tabsContainer';
    children: [
    ];
};
export declare const layout: (props: TabPanelProps) => VirtualLayoutJSON;
export declare const styleRules: (props: TabPanelProps, layout: ConvertToLayoutTreeDraft<TabPanelLayout>) => any[];
export declare const designPattern: (props: TabPanelProps, layout: ConvertToLayoutTreeDraft<TabPanelLayout>) => {};
