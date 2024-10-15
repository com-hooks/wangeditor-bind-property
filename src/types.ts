
export interface PropertyElement {
    metadata?: {
        dataset?: Record<string, string>;
        props?: {
            className?: string[];
            id?: string;
        };
    };
}