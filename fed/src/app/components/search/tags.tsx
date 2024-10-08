"use client"

import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { SearchResults } from "@/client/search";
import { useRef } from "react";

function noResults() {
  return (<div className="relative flex flex-col gap-2">
    <div className="relative text-medium text-foreground-500">Tags</div>
    <div className="relative text-medium ">No matching tags</div>
  </div>)
}

export function Tags(props: SearchResults) {
  const ref = useRef(null);
  const tags = props.tags || [];
  const isEmpty = (tags === undefined || tags.length == 0);
  const query = props.queryOptions?.query ?? '';
  const selectedTags = props.queryOptions.tags;

  if (isEmpty) return noResults();

  const isSelected =(t) => selectedTags.includes(t);

  return (
    <>
      <form action='/search' ref={ref}>
        <input type='hidden' name='query' value={query} />
        <CheckboxGroup label="Tags" defaultValue={selectedTags}>
          {tags.map((item, index) => (
            <Checkbox name='tags' isSelected={isSelected(item.text)} key={index} value={item.text}>{item.text} ({item.count})</Checkbox>
          ))}
        </CheckboxGroup>

        <Button onPress={(e) => { ref.current.submit() }}>Filter</Button>
      </form>
    </>
  );
}
