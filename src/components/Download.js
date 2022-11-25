import React from 'react'
import html2canvas from "html2canvas";
import {jsPDF} from 'jspdf';

const Download = ({rootElementId, downloadFileName}) => {
    const handleWillDownload = () => {
        const input = document.getElementById (rootElementId)
        html2canvas(input).then( (canvas) => {
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF('portrait', 'pt','a4')
        pdf. addImage (imgData,"JPEG", 0, 0)
    pdf.save(`${(downloadFileName)}`)
    })
    }
  return (
    <div>
        <button onClick={handleWillDownload}>Download Will</button>
    </div>
  )
}

export default Download

