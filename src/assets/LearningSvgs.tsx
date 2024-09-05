import Image from "next/image";


export function BackArrow (){
    return <Image 
        width={24}
        height={24}
        alt="back arrow"
        src={'/svgs/BackArrow.svg'}
    />
}

export function CheckCircle (){
    return <Image 
        width={24}
        height={24}
        alt="back arrow"
        src={'/svgs/CheckCircle.svg'}
        style={{position: 'absolute', right: 0, top: 0}}
    />
}