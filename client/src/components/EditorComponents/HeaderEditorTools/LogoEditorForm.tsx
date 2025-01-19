import React from 'react'
import { Header3Data } from '../../basicEditor3Pro/Header3'

const logoEditorFormStyle = {
    position: 'absolute',
    left: '100px'
}

export type LogoEditorFormProps = {
    data: Header3Data
    setData: any
}

export default function LogoEditorForm({ data, setData }: LogoEditorFormProps) {

    function handleChangeLogoTextInput(e:any){
        if(e.target.value === '') return;
        setData({...data, logo:{...data.logo, text:e.target.value}})
    }

    function hanldeChangeLogoSrcInput(e:any){
        if(e.target.value === '') return;
        setData({...data, logo:{...data.logo, imgSrc:e.target.value}})        
    }

    return (
        <div style={logoEditorFormStyle}>
            <label>logo text:</label>
            <input
            defaultValue={data.logo.text} 
            onChange={(e) => handleChangeLogoTextInput(e)}></input>
            <label>logo image source:</label>
            <input
            defaultValue={data.logo.imgSrc || "no source provided"}
            onChange={(e) => hanldeChangeLogoSrcInput(e)}
            ></input>
        </div>
    )
}
