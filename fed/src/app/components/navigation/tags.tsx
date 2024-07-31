import React from "react";
import { Chip } from "@nextui-org/chip";

export function Tags({ tags }: { tags: string[] }) {
    return (
        <div className="flex gap-2">
            {tags?.map((t, index) => (
                <Chip key={index} variant="flat">
                    {t}
                </Chip>
            ))}
        </div>
    );
}