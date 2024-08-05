import React from "react";
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import { CallToActionPropertiesModel } from "@types"
import { RichText } from "@components/atomic"

export default function CallToAction(props: CallToActionPropertiesModel) {
    const link = props.link[0];
    const isExternal = link.linkType === 'External'
    return (
        <div className="pt-4 pb-4">
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <h4 className="font-medium text-large">{props.title}</h4>
            </CardHeader>
            <Divider />
            <CardBody>
                <RichText {...props.text} />
            </CardBody>
            <Divider />
            <CardFooter>
                <Link href={link.url} isExternal={isExternal} showAnchorIcon={isExternal}>
                    {link.title}
                </Link>
            </CardFooter>
        </Card>
        </div>
    );
}
