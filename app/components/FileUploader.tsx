import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {useState} from "react";
import {formatSize} from "~/utils";

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;

        onFileSelect ?.(file);
    }, [onFileSelect]);

    const maxFileSize = 20 * 1024 * 1024; // 20MB in bytes

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf']},
        maxSize: maxFileSize,
    })

    const file = acceptedFiles[0] || null;

    return (
        <div className={"w-full gradient-border"}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <div className={"space-y-4 cursor-pointer"}>
                    <div className={"mx-auto w-16 h-16 flex items-center justify-center"}>
                        <img src={"https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_1280.png"} alt={"upload"} className={"size-20"} />
                    </div>

                    {file ? (
                        <div className={"text-center"}>
                            <p className={"text-1g text-gray-700 font-medium truncate"}>
                                {file.name}
                            </p>
                            <p className={"text-sm text-gray-500"}>
                                {formatSize(file.size)}
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p className={"text-lg text-gray-500"}>
                                <span className={"font-semibold"}>
                                    Click to upload
                                </span> or drag and drop
                            </p>
                            <p className={"text-lg text-gray-500"}>PDF (max  {formatSize(maxFileSize)})</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default FileUploader