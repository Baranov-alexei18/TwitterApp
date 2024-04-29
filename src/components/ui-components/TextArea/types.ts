export type FileType = {
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
    lastModified: string;
    lastModifiedDate: Date;
}

export type TextAreaTypes = {
    placeholder: string;
    onSubmit: (data: { text: string, photo?: File }) => void;
    loader?: boolean;
};
