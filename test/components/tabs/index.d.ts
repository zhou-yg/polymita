/// <reference types="react" />
import { ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';
import * as TabPanelModule from './panel';
export declare const name: "Tabs";
export declare let meta: {
    props: TabsProps;
    layoutStruct: TabsLayout;
    patchCommands: [];
};
export interface TabsProps {
    children?: VirtualLayoutJSON[];
    tabs?: string[];
    panels?: (VirtualLayoutJSON | any)[];
    defaultActiveTab?: string;
}
export declare const propTypes: {};
export declare const logic: (props: TabsProps) => {
    activeTab: string;
    setActiveTab: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export type TabsLayout = {
    type: 'tabsContainer';
    children: [
    ];
};
export declare const panelModule: typeof TabPanelModule;
export declare const layout: (props: TabsProps) => VirtualLayoutJSON;
export declare const styleRules: (props: TabsProps, layout: ConvertToLayoutTreeDraft<TabsLayout>) => any[];
export declare const designPattern: (props: TabsProps, layout: ConvertToLayoutTreeDraft<TabsLayout>) => {};
