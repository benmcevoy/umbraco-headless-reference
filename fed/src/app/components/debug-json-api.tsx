"use client"

import { Snippet } from "@nextui-org/snippet";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export function DebugJson({ data, label = 'Debug' }) {
    return(
    <>
    <br/>
    <Accordion variant="shadow">
        <AccordionItem aria-label="Accordion 1" title={label}>
            <Snippet hideSymbol hideCopyButton><pre ><code>{JSON.stringify(data, null, '\t')}</code></pre></Snippet>
        </AccordionItem>
    </Accordion>
    </>
    )
}