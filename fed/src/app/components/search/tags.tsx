import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";
import {Button} from "@nextui-org/button";

export function Tags(props) {
    return (
        <>
        <CheckboxGroup
          label="Tags"
          defaultValue={["buenos-aires", "london"]}
        >
          <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
          <Checkbox value="sydney">Sydney</Checkbox>
          <Checkbox value="san-francisco">San Francisco</Checkbox>
          <Checkbox value="london">London</Checkbox>
          <Checkbox value="tokyo">Tokyo</Checkbox>
        </CheckboxGroup>

        <Button>Filter</Button>
        
        </>
      );
//     return (<>
// // TODO: tag facet<br />
// // list of<br />
// // #Tag (count)<br />
// // TODO: needs another service to get available tags or something
//     </>)
}
