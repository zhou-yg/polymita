import { PatternMatrix2 } from '@polymita/renderer';
export declare function useInteractive(props: {
    disabled?: boolean;
}): {
    states: {
        hover: import("@polymita/signal").StateSignal<boolean>;
        active: import("@polymita/signal").StateSignal<boolean>;
        focus: import("@polymita/signal").StateSignal<boolean>;
    };
    events: {
        onMouseEnter: import("@polymita/signal").InputComputeFn<[]> & {
            _hook: import("@polymita/signal").Hook;
        };
        onMouseLeave: import("@polymita/signal").InputComputeFn<[]> & {
            _hook: import("@polymita/signal").Hook;
        };
        onMouseDown: import("@polymita/signal").InputComputeFn<[]> & {
            _hook: import("@polymita/signal").Hook;
        };
        onMouseUp: import("@polymita/signal").InputComputeFn<[]> & {
            _hook: import("@polymita/signal").Hook;
        };
    };
};
type NormalColor = string;
type HoverColor = string;
type ActiveColor = string;
type SelectedColor = string;
type DisabledColor = string;
export declare function blockPattern(arg: {
    hover: boolean;
    active: boolean;
    selected: boolean;
    disabled: boolean;
}, colors: {
    bg: [NormalColor, HoverColor, ActiveColor?, SelectedColor?];
    text: [NormalColor, HoverColor?, ActiveColor?, SelectedColor?];
}): import("@polymita/renderer").PatternStructure;
export declare function blockPattern2(arg: {
    selected: boolean;
    disabled: boolean;
}, colors: {
    bg: [NormalColor, SelectedColor?];
    text: [NormalColor, SelectedColor?];
}): import("@polymita/renderer").PatternStructure;
export declare function strokePattern(arg: {
    hover: boolean;
    active: boolean;
    selected: boolean;
    disabled: boolean;
}, colors: {
    bdw?: number;
    border: [NormalColor, HoverColor, ActiveColor?];
    text?: [NormalColor, HoverColor, ActiveColor?];
}): import("@polymita/renderer").PatternStructure;
export declare function strokePattern2(arg: {
    disabled: boolean;
}, colors: {
    bdw?: number;
    border: [NormalColor, DisabledColor?];
    text?: [NormalColor, DisabledColor?];
}): import("@polymita/renderer").PatternStructure;
export declare function blockPatternMatrix(colors: {
    bg: [NormalColor, HoverColor, ActiveColor?, SelectedColor?];
    text: [NormalColor, HoverColor?, ActiveColor?, SelectedColor?];
}): PatternMatrix2['1'];
export declare function strokePatternMatrix(colors: {
    bdw?: number;
    border: [NormalColor, HoverColor, ActiveColor?];
    text?: [NormalColor, HoverColor, ActiveColor?];
}): PatternMatrix2['1'];
export {};
