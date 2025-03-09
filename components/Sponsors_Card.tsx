import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'
import { aboutNPfont, aboutNPfont11, aboutNPfont4 } from '@/lib/font.utils'

type SpomsorsCardProps = {
    name: string;
    image: string;
}

const Spomsors_Card = ({ name, image }: SpomsorsCardProps) => {
    return (
        <CardContainer className="inter-var border-2 border-yellow-200 rounded-3xl hover:animate-buttonshine max-sm:p-0">
            <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-auto rounded-3xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4 mb-4 max-sm:mt-2 max-sm:mb-2">
                    <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-60 max-sm:h-40 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    translateZ="50"
                    className={`text-xl text-center flex justify-center items-center font-bold text-neutral-600 dark:text-white ${aboutNPfont11.className}`}
                >
                    BansalClass
                </CardItem>
                {/* <CardItem
                    as="p"
                    translateZ="60"
                    className={`text-neutral-500 text-sm w-full mt-2 p-0 dark:text-neutral-300 ${aboutNPfont4.className}`}
                >
                    Hover over this card to unleash the power of CSS perspective
                </CardItem> */}

            </CardBody>
        </CardContainer>
    )
}

export default Spomsors_Card